// Firebase Client Helper - Replace local storage with API calls
// This module handles all employee data operations via API instead of local storage

const API_BASE = '/api';

class EmployeeAPI {
  // Fetch all employees from API
  static async getAllEmployees() {
    try {
      const response = await fetch(`${API_BASE}/employees`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      
      const employees = await response.json();
      console.log('Fetched employees from API:', employees);
      return employees;
    } catch (error) {
      console.error('Error fetching employees:', error);
      // Fallback to empty array if API fails
      return [];
    }
  }
  
  // Create new employee (signup)
  static async createEmployee(employeeData) {
    try {
      const response = await fetch(`${API_BASE}/employees`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(employeeData)
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || `API error: ${response.statusText}`);
      }
      
      const newEmployee = await response.json();
      console.log('Employee created:', newEmployee);
      return newEmployee;
    } catch (error) {
      console.error('Error creating employee:', error);
      throw error;
    }
  }
  
  // Get specific employee
  static async getEmployee(employeeId) {
    try {
      const response = await fetch(`${API_BASE}/employees?id=${employeeId}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      
      const employee = await response.json();
      console.log('Fetched employee:', employee);
      return employee;
    } catch (error) {
      console.error('Error fetching employee:', error);
      throw error;
    }
  }
  
  // Update employee
  static async updateEmployee(employeeId, updates) {
    try {
      const response = await fetch(`${API_BASE}/employees?id=${employeeId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates)
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      
      const updatedEmployee = await response.json();
      console.log('Employee updated:', updatedEmployee);
      return updatedEmployee;
    } catch (error) {
      console.error('Error updating employee:', error);
      throw error;
    }
  }
  
  // Delete employee
  static async deleteEmployee(employeeId) {
    try {
      const response = await fetch(`${API_BASE}/employees?id=${employeeId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }
      
      const result = await response.json();
      console.log('Employee deleted:', result);
      return result;
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw error;
    }
  }
  
  // Local storage helpers for current user (still use local for session)
  static saveCurrentUser(user) {
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
  
  static getCurrentUser() {
    const user = sessionStorage.getItem('currentUser') || localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
  
  static clearCurrentUser() {
    sessionStorage.removeItem('currentUser');
    localStorage.removeItem('currentUser');
  }
}

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EmployeeAPI;
}
