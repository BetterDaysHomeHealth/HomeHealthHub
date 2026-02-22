// Vercel Serverless Function: Employee Management API
// Connects to Firebase Firestore

const admin = require('firebase-admin');

let db = null;

function initializeFirebase() {
  if (db) return db;
  
  try {
    // Parse service account from environment variable
    const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountJson) {
      throw new Error('FIREBASE_SERVICE_ACCOUNT env var not set');
    }
    
    const serviceAccount = JSON.parse(serviceAccountJson);
    
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      projectId: serviceAccount.project_id
    });
    
    db = admin.firestore();
    console.log('Firebase initialized');
    return db;
  } catch (error) {
    console.error('Firebase init error:', error);
    throw error;
  }
}

// GET /api/employees - Fetch all employees
async function getEmployees(req, res) {
  try {
    const db = initializeFirebase();
    const snapshot = await db.collection('employees').get();
    
    const employees = [];
    snapshot.forEach(doc => {
      employees.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    res.status(200).json(employees);
  } catch (error) {
    console.error('GET /api/employees error:', error);
    res.status(500).json({ error: error.message });
  }
}

// POST /api/employees - Create new employee (signup)
async function createEmployee(req, res) {
  try {
    const db = initializeFirebase();
    const { email, name, phone, password, careType, role, certifications, serviceCities, yearsOfExperience, specializations } = req.body;
    
    // Validate required fields
    if (!email || !name || !password) {
      return res.status(400).json({ error: 'Missing required fields: email, name, password' });
    }
    
    // Check if email already exists
    const existing = await db.collection('employees').where('email', '==', email).get();
    if (!existing.empty) {
      return res.status(400).json({ error: 'Email already registered' });
    }
    
    // Create employee document
    const employeeData = {
      email,
      name,
      phone: phone || '',
      password, // TODO: Hash passwords in production!
      careType: careType || '',
      role: role || '',
      certifications: Array.isArray(certifications) ? certifications : [],
      serviceCities: Array.isArray(serviceCities) ? serviceCities : [],
      specializations: Array.isArray(specializations) ? specializations : [],
      yearsOfExperience: yearsOfExperience || '',
      active: true,
      createdAt: new Date().toISOString()
    };
    
    const docRef = await db.collection('employees').add(employeeData);
    
    res.status(201).json({
      id: docRef.id,
      ...employeeData
    });
  } catch (error) {
    console.error('POST /api/employees error:', error);
    res.status(500).json({ error: error.message });
  }
}

// GET /api/employees/[id] - Get specific employee
async function getEmployee(req, res) {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: 'Employee ID required' });
    }
    
    const db = initializeFirebase();
    const doc = await db.collection('employees').doc(id).get();
    
    if (!doc.exists) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    
    res.status(200).json({
      id: doc.id,
      ...doc.data()
    });
  } catch (error) {
    console.error('GET /api/employees/[id] error:', error);
    res.status(500).json({ error: error.message });
  }
}

// PUT /api/employees/[id] - Update employee
async function updateEmployee(req, res) {
  try {
    const { id } = req.query;
    if (!id) {
      return res.status(400).json({ error: 'Employee ID required' });
    }
    
    const db = initializeFirebase();
    const updateData = {
      ...req.body,
      updatedAt: new Date().toISOString()
    };
    
    await db.collection('employees').doc(id).update(updateData);
    
    const doc = await db.collection('employees').doc(id).get();
    res.status(200).json({
      id: doc.id,
      ...doc.data()
    });
  } catch (error) {
    console.error('PUT /api/employees/[id] error:', error);
    res.status(500).json({ error: error.message });
  }
}

// Main handler
export default async function handler(req, res) {
  const { method, query } = req;
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  try {
    if (method === 'GET') {
      if (query.id) {
        return getEmployee(req, res);
      } else {
        return getEmployees(req, res);
      }
    } else if (method === 'POST') {
      return createEmployee(req, res);
    } else if (method === 'PUT') {
      return updateEmployee(req, res);
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API error:', error);
    res.status(500).json({ error: error.message });
  }
}
