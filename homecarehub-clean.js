        const { useState,useEffect } = React;const Bell = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
        );const Briefcase = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        );const Calendar = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
        );const Clock = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        );const MapPin = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        );const ExternalLink = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        );const MessageSquare = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
        );const Shield = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        );const BarChart = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        );const User = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
        );const Plus = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
        );const X = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        );const Check = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
        );const Search = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        );const Filter = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
        );const DollarSign = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        );const Clipboard = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
        );const Settings = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        );const Key = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
            </svg>
        );const Mail = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        );const Star = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        );const Users = ({ className }) =>(
            <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        );window.storage = {
            get: async (key) =>{
                const value = localStorage.getItem(key);if (value === null) {
                    throw new Error('Key not found');}
                return { key,value,shared: false };},set: async (key,value) =>{
                localStorage.setItem(key,value);return { key,value,shared: false };},delete: async (key) =>{
                localStorage.removeItem(key);return { key,deleted: true,shared: false };},list: async (prefix = '') =>{
                const keys = [];for (let i = 0;i < localStorage.length;i++) {
                    const key = localStorage.key(i);if (key.startsWith(prefix)) {
                        keys.push(key);}
                }
                return { keys,prefix,shared: false };}
        };const generatePatientId = () =>{
            return 'PT-' + Date.now().toString().slice(-6);};const getPatientInitials = (firstName,lastName) =>{

            const firstInitial = firstName ? firstName.trim()[0] : '';const lastInitial = lastName ? lastName.trim()[0] : '';return firstInitial + '.' + lastInitial + '.';};function HealthCareJobBoard() {
          const [jobs,setJobs] = useState([]);const [archivedJobs,setArchivedJobs] = useState([]);const [employees,setEmployees] = useState([]);const [currentView,setCurrentView] = useState('employee');const [selectedEmployee,setSelectedEmployee] = useState('');const [notifications,setNotifications] = useState([]);const [showNotifications,setShowNotifications] = useState(false);const [showNewJobForm,setShowNewJobForm] = useState(false);const [selectedJobDetails,setSelectedJobDetails] = useState(null);const [loading,setLoading] = useState(true);const [authView,setAuthView] = useState('login');// 'login','signup',or 'app'
          const [currentUser,setCurrentUser] = useState(null);const [loginForm,setLoginForm] = useState({ email: '',password: '' });const [signupForm,setSignupForm] = useState({
            name: '',email: '',password: '',confirmPassword: '',careType: '',// 'skilled' or 'nonskilled'
            role: '',certifications: [],specializations: [],// Additional areas of expertise
            phone: '',serviceCities: [],yearsOfExperience: ''
          });const [loginError,setLoginError] = useState('');const [signupError,setSignupError] = useState('');const [smsLog,setSmsLog] = useState([]);const [activityLog,setActivityLog] = useState([]);const [logTab,setLogTab] = useState('activity');// 'activity' or 'sms'
const [trainings,setTrainings] = useState([]);const [trainingCompletions,setTrainingCompletions] = useState([]);const [selectedTraining,setSelectedTraining] = useState(null);
const [searchTerm,setSearchTerm] = useState('');const [filterStatus,setFilterStatus] = useState('all');// 'all','open','assigned','urgent'
          const [filterCity,setFilterCity] = useState('all');const [filterServiceType,setFilterServiceType] = useState('all');const [filterDateRange,setFilterDateRange] = useState({ start: '',end: '' });const [showMyJobs,setShowMyJobs] = useState(false);const [showAllJobs,setShowAllJobs] = useState(false);const [showEditProfile,setShowEditProfile] = useState(false);const [editProfileForm,setEditProfileForm] = useState({
            name: '',email: '',phone: '',currentPassword: '',newPassword: '',confirmNewPassword: '',certifications: [],serviceCities: [],yearsOfExperience: ''
          });const [selectedEmployeeProfile,setSelectedEmployeeProfile] = useState(null);const [editProfileError,setEditProfileError] = useState('');const [showPasswordReset,setShowPasswordReset] = useState(false);const [referralSourceSuggestions,setReferralSourceSuggestions] = useState([]);const [showReferralDropdown,setShowReferralDropdown] = useState(false);const [hospitalSuggestions,setHospitalSuggestions] = useState([]);const [showHospitalDropdown,setShowHospitalDropdown] = useState(false);const [editingReferralId,setEditingReferralId] = useState(null);const [editingReferralValue,setEditingReferralValue] = useState('');const [passwordResetForm,setPasswordResetForm] = useState({
            employeeId: '',newPassword: '',confirmPassword: ''
          });const [passwordResetError,setPasswordResetError] = useState('');const [showForgotPassword,setShowForgotPassword] = useState(false);const [forgotPasswordEmail,setForgotPasswordEmail] = useState('');const [forgotPasswordError,setForgotPasswordError] = useState('');const [forgotPasswordSuccess,setForgotPasswordSuccess] = useState('');const serviceTypeToCertifications = {
            'RN - Skilled Nursing': ['RN'],'RN - Wound Care': ['RN','Wound Care'],'RN - IV Therapy': ['RN','IV Therapy'],'RN - Medication Management': ['RN','Medication Administration'],'RN - Patient Education': ['RN'],'PT - Physical Therapy': ['PT'],'PT - Gait Training': ['PT','Gait Training'],'PT - Strength & Mobility': ['PT'],'OT - Occupational Therapy': ['OT'],'OT - ADL Training': ['OT','ADL Training'],'OT - Home Safety Assessment': ['OT'],'PCA Services': ['PCA'] // Nonskilled care - PCA or CNA can perform
          };const nonskilledServices = [
            'Companionship','Meal Preparation','Light Housekeeping','Transportation','Errands & Shopping','Medication Reminders'
          ];const certificationsByRole = {
            'RN': ['RN','IV Therapy','Wound Care','Medication Administration','Diabetes Management','CPR','ACLS','PCA'],'PT': ['PT','Gait Training','Geriatric Rehab','Sports Rehab','CPR','PCA'],'OT': ['OT','ADL Training','Home Safety','Adaptive Equipment','CPR','PCA'],'CNA': ['CNA','Medication Administration','CPR','First Aid','Vital Signs','PCA'],'PCA': ['PCA']
          };const availableSpecializations = [
            'Dementia Care','Alzheimer\'s Care','Hospice Care','Pediatric Care','Post-Surgical Care','Stroke Recovery','Fall Prevention','Nutrition Support','Pain Management','Respiratory Care','Cardiac Care','Orthopedic Care','Mental Health Support','Bariatric Care'
          ];const hamptonRoadsCities = [
            'Norfolk','Virginia Beach','Chesapeake','Hampton','Newport News','Portsmouth','Suffolk','Franklin','Williamsburg','Poquoson','Smithfield','Yorktown'
          ];const [newJob,setNewJob] = useState({
            patientFirstName: '',patientLastName: '',patientId: '',city: '',address: '',location: '',date: '',hours: '',hoursPerWeek: '',// For nonskilled jobs
            daysPerWeek: [],// Days requiring care for nonskilled
            skillsRequired: '',nonskilledServices: [],// Array for multiple nonskilled services
            payRate: '',description: '',referralSource: '',// Doctor/Provider name
            referralHospital: '' // Hospital/Practice/Facility name
          });useEffect(() =>{
            loadData();checkCurrentUser();const urlParams = new URLSearchParams(window.location.search);const interestJobId = urlParams.get('interest');if (interestJobId) {

              sessionStorage.setItem('pendingJobInterest',interestJobId);window.history.replaceState({},'',window.location.pathname);}
          },[]);useEffect(() =>{
            if (currentUser && authView === 'app') {
              const pendingJobId = sessionStorage.getItem('pendingJobInterest');if (pendingJobId) {
                sessionStorage.removeItem('pendingJobInterest');handleExpressInterest(pendingJobId);}
            }
          },[currentUser,authView]);useEffect(() =>{
            if (window.google && showNewJobForm) {
              const input = document.getElementById('location-autocomplete');if (input) {
                const autocomplete = new window.google.maps.places.Autocomplete(input,{
                  types: ['address'],componentRestrictions: { country: 'us' }
                });autocomplete.addListener('place_changed',() =>{
                  const place = autocomplete.getPlace();if (place.formatted_address) {
                    setNewJob(prev =>({ ...prev,location: place.formatted_address }));}
                });}
            }
          },[showNewJobForm]);const checkCurrentUser = async () =>{
            try {
              const userResult = await window.storage.get('current-user').catch(() => null);if (userResult) {
                const user = JSON.parse(userResult.value);setCurrentUser(user);setSelectedEmployee(user.id);sessionStorage.setItem('currentUser',JSON.stringify(user));if (user.role === 'Admin') {
                  setCurrentView('jobs-dashboard');}
                setAuthView('app');}
            } catch (error) {
              console.error('Error checking current user:',error);}
          };const loadSMSLog = async () =>{
            try {
              const smsLogResult = await window.storage.get('sms-log').catch(() => null);if (smsLogResult) {
                setSmsLog(JSON.parse(smsLogResult.value));}
            } catch (error) {
              console.error('Error loading SMS log:',error);}
          };const loadData = async () =>{
            try {
              const [jobsResult,employeesResult,notificationsResult,activityLogResult,smsLogResult,trainingsResult,completionsResult] = await Promise.all([
                window.storage.get('healthcare-jobs').catch(() => null),window.storage.get('healthcare-employees').catch(() => null),window.storage.get('healthcare-notifications').catch(() => null),window.storage.get('activity-log').catch(() => null),window.storage.get('sms-log').catch(() => null),window.storage.get('trainings').catch(() => null),window.storage.get('training-completions').catch(() => null)
              ]);if (jobsResult) {
                setJobs(JSON.parse(jobsResult.value));}

              let empList = [];if (employeesResult) {
                empList = JSON.parse(employeesResult.value);}

              const adminExists = empList.some(emp => emp.email === 'admin@healthcare.com');if (!adminExists) {
                const adminAccount = {
                  id: 'admin',name: 'Admin User',email: 'admin@healthcare.com',password: 'admin123',role: 'Admin',certifications: 'Admin Access',certificationsArray: [],phone: '(555) 000-0000',serviceCities: []
                };empList.unshift(adminAccount);// Add admin at the beginning
                await window.storage.set('healthcare-employees',JSON.stringify(empList));}

              setEmployees(empList);if (empList.length > 0) setSelectedEmployee(empList[0].id);if (notificationsResult) {
                setNotifications(JSON.parse(notificationsResult.value));}

              if (activityLogResult) {
                setActivityLog(JSON.parse(activityLogResult.value));}

              if (smsLogResult) {
                setSmsLog(JSON.parse(smsLogResult.value));}

              const archivedResult = await window.storage.get('archived-jobs').catch(() => null);if (archivedResult) {
                setArchivedJobs(JSON.parse(archivedResult.value));}
            } catch (error) {
              console.error('Error loading data:',error);} finally {
              setLoading(false);}
          };const saveJobs = async (updatedJobs) =>{
            setJobs(updatedJobs);try {
              await window.storage.set('healthcare-jobs',JSON.stringify(updatedJobs));} catch (error) {
              console.error('Error saving jobs:',error);}
          };const saveNotifications = async (updatedNotifications) =>{
            setNotifications(updatedNotifications);try {
              await window.storage.set('healthcare-notifications',JSON.stringify(updatedNotifications));} catch (error) {
              console.error('Error saving notifications:',error);}
          };const createNotification = async (jobId,message,serviceType = null) =>{
            const notification = {
              id: Date.now().toString(),jobId,message,timestamp: new Date().toISOString(),read: [],serviceType: serviceType
            };const updated = [...notifications,notification];await saveNotifications(updated);};const handleCreateJob = async (e) =>{
            e.preventDefault();const patientId = newJob.patientId || generatePatientId();const patientInitials = getPatientInitials(newJob.patientFirstName,newJob.patientLastName);const fullLocation = `${newJob.address},${newJob.city},VA`;const job = {
              id: Date.now().toString(),patientFirstName: newJob.patientFirstName,patientLastName: newJob.patientLastName,patientId: patientId,location: fullLocation,date: newJob.date,hours: newJob.skillsRequired === 'PCA Services' ? parseFloat(newJob.hoursPerWeek || 0) : parseFloat(newJob.hours),hoursPerWeek: newJob.skillsRequired === 'PCA Services' ? parseFloat(newJob.hoursPerWeek || 0) : null,daysPerWeek: newJob.skillsRequired === 'PCA Services' ? newJob.daysPerWeek : [],skillsRequired: newJob.skillsRequired,nonskilledServices: newJob.nonskilledServices || [],payRate: newJob.payRate,description: newJob.description,referralSource: newJob.referralSource,signedUp: [],interestedEmployees: [],// New: track who's interested
              assignedTo: null,// New: who admin assigned
              status: 'active',createdAt: new Date().toISOString()
            };const updatedJobs = [...jobs,job];await saveJobs(updatedJobs);const qualifiedEmployees = employees.filter(emp =>
              emp.role !== 'Admin' &&
              emp.active !== false && // Only active employees
              canEmployeePerformService(emp,job.skillsRequired,job.location)
            );if (qualifiedEmployees.length > 0) {

              const interestUrl = `${window.location.origin}${window.location.pathname}?interest=${job.id}`;const smsMessage = `New job - Patient ${patientInitials} (${patientId}) on ${new Date(job.date).toLocaleDateString()} in ${newJob.city}. Service: ${job.skillsRequired}. Pay: ${job.payRate}. Interested? ${interestUrl} or login to view.`;for (const emp of qualifiedEmployees) {
                await sendSMSNotification(emp.phone,smsMessage,job.id,emp.id);}

              alert(`Job posted! SMS sent to ${qualifiedEmployees.length} qualified employee(s).`);} else {
              alert('Job posted! No employees qualified for this service type and location.');}

            await createNotification(
              job.id,`New job: Patient ${patientInitials} (${patientId}) on ${job.date} - ${job.skillsRequired}`,job.skillsRequired
            );await logActivity('Job Posted',`Patient ${patientInitials} (${patientId}) - ${job.skillsRequired} - ${newJob.city}`);setNewJob({
              patientFirstName: '',patientLastName: '',patientId: '',city: '',address: '',location: '',date: '',hours: '',hoursPerWeek: '',daysPerWeek: [],skillsRequired: '',nonskilledServices: [],payRate: '',description: '',referralSource: ''
            });setShowNewJobForm(false);};const updateReferralSource = async (jobId,newReferralSource) =>{
            try {
              const updatedJobs = jobs.map(job =>
                job.id === jobId ? { ...job,referralSource: newReferralSource } : job
              );const updatedArchivedJobs = archivedJobs.map(job =>
                job.id === jobId ? { ...job,referralSource: newReferralSource } : job
              );await window.storage.set('jobs',JSON.stringify(updatedJobs));await window.storage.set('archivedJobs',JSON.stringify(updatedArchivedJobs));setJobs(updatedJobs);setArchivedJobs(updatedArchivedJobs);setEditingReferralId(null);setEditingReferralValue('');await logActivity('Referral Source Updated',`Updated referral source for case to: ${newReferralSource}`);} catch (error) {
              console.error('Error updating referral source:',error);}
          };const logActivity = async (action,details,user = null) =>{
            try {
              const activityLogResult = await window.storage.get('activity-log').catch(() => null);const existingLog = activityLogResult ? JSON.parse(activityLogResult.value) : [];const logEntry = {
                id: Date.now().toString() + Math.random(),action,details,user: user || (currentUser ? currentUser.name : 'System'),timestamp: new Date().toISOString()
              };const updatedLog = [logEntry,...existingLog].slice(0,100);await window.storage.set('activity-log',JSON.stringify(updatedLog));setActivityLog(updatedLog);} catch (error) {
              console.error('Error logging activity:',error);}
          };const sendSMSNotification = async (phoneNumber,message,jobId,employeeId) =>{
            try {

              const smsLogResult = await window.storage.get('sms-log').catch(() => null);const smsLog = smsLogResult ? JSON.parse(smsLogResult.value) : [];const smsRecord = {
                id: Date.now().toString() + Math.random(),phoneNumber,message,jobId,employeeId,timestamp: new Date().toISOString(),status: 'sent'
              };smsLog.push(smsRecord);await window.storage.set('sms-log',JSON.stringify(smsLog));setSmsLog(smsLog);console.log(`SMS sent to ${phoneNumber}: ${message}`);} catch (error) {
              console.error('Error sending SMS:',error);}
          };
          const clearActivityLog = async () =>{
            if (!confirm('Clear all activity log entries? This cannot be undone.')) return;
            try {
              await window.storage.set('activity-log',JSON.stringify([]));
              setActivityLog([]);
              alert('Activity log cleared successfully');
            } catch (error) {
              console.error('Error clearing activity log:',error);
              alert('Error clearing activity log');
            }
          };
          const clearSMSLog = async () =>{
            if (!confirm('Clear all SMS notification history? This cannot be undone.')) return;
            try {
              await window.storage.set('sms-log',JSON.stringify([]));
              setSmsLog([]);
              alert('SMS log cleared successfully');
            } catch (error) {
              console.error('Error clearing SMS log:',error);
              alert('Error clearing SMS log');
            }
          };const handleSignUp = async (jobId) =>{
            const employee = employees.find(e => e.id === selectedEmployee);if (!employee) return;const job = jobs.find(j => j.id === jobId);if (!job) return;const updatedJobs = jobs.map(job =>{
              if (job.id === jobId) {
                if (job.signedUp.some(e => e.id === employee.id)) {
                  return job;}
                return {
                  ...job,signedUp: [...job.signedUp,{ id: employee.id,name: employee.name,signedUpAt: new Date().toISOString() }]
                };}
              return job;});await saveJobs(updatedJobs);const patientInitials = getPatientInitials(job.patientFirstName,job.patientLastName);await createNotification(
              jobId,`${employee.name} (${employee.role}) signed up for Patient ${patientInitials} (${job.patientId}) on ${job.date}`
            );const adminUser = employees.find(emp => emp.role === 'Admin');if (adminUser && adminUser.phone) {
              const smsMessage = `JOB ACCEPTED

Employee: ${employee.name}
Role: ${employee.role}
Phone: ${employee.phone}
Email: ${employee.email}

Patient: ${patientInitials} (${job.patientId})
Location: ${job.location}
Service: ${job.skillsRequired}
Date: ${job.date}
Hours: ${job.hours}h
Pay Rate: ${job.payRate}

Referral: ${job.referralSource}`;await sendSMSNotification(adminUser.phone,smsMessage,jobId,adminUser.id);await logActivity('Employee Sign-Up',`${employee.name} accepted job for Patient ${patientInitials} - Admin notified via SMS`);}
          };const handleExpressInterest = async (jobId) =>{
            const employee = employees.find(e => e.id === selectedEmployee);if (!employee) return;const job = jobs.find(j => j.id === jobId);if (!job) return;if (job.interestedEmployees && job.interestedEmployees.some(e => e.id === employee.id)) {
              alert('You have already expressed interest in this job.');return;}

            const updatedJobs = jobs.map(j =>{
              if (j.id === jobId) {
                const interestedEmployees = j.interestedEmployees || [];return {
                  ...j,interestedEmployees: [...interestedEmployees,{
                    id: employee.id,name: employee.name,role: employee.role,phone: employee.phone,email: employee.email,certifications: employee.certifications,specializations: employee.specializations || [],serviceCities: employee.serviceCities || [],interestedAt: new Date().toISOString()
                  }]
                };}
              return j;});await saveJobs(updatedJobs);const patientInitials = getPatientInitials(job.patientFirstName,job.patientLastName);await createNotification(
              jobId,`${employee.name} (${employee.role}) expressed interest in Patient ${patientInitials} (${job.patientId})`
            );const adminUser = employees.find(emp => emp.role === 'Admin');if (adminUser && adminUser.phone) {
              const specializationsText = employee.specializations && employee.specializations.length > 0
                ? `\nSpecializations: ${employee.specializations.join(',')}`
                : '';const smsMessage = `⭐ EMPLOYEE INTERESTED

Employee: ${employee.name}
Role: ${employee.role}
Phone: ${employee.phone}
Email: ${employee.email}
Certs: ${employee.certifications}${specializationsText}

Job: Patient ${patientInitials} (${job.patientId})
Location: ${job.location}
Service: ${job.skillsRequired}
Date: ${job.date}
Pay: ${job.payRate}

Login to review and assign.`;await sendSMSNotification(adminUser.phone,smsMessage,jobId,adminUser.id);await logActivity('Employee Interest',`${employee.name} interested in Patient ${patientInitials} - Admin notified`);}

            alert('Interest expressed! The admin will review and contact you if selected.');};const handleWithdrawInterest = async (jobId) =>{
            const employee = employees.find(e => e.id === selectedEmployee);const job = jobs.find(j => j.id === jobId);if (!employee || !job) return;const updatedJobs = jobs.map(j =>{
              if (j.id === jobId) {
                return {
                  ...j,interestedEmployees: (j.interestedEmployees || []).filter(e => e.id !== selectedEmployee)
                };}
              return j;});await saveJobs(updatedJobs);const patientInitials = getPatientInitials(job.patientFirstName,job.patientLastName);await createNotification(
              jobId,`${employee.name} withdrew interest from Patient ${patientInitials} (${job.patientId})`
            );await logActivity('Interest Withdrawn',`${employee.name} withdrew interest from Patient ${patientInitials}`);alert('Interest withdrawn');};const handleAdminAssignJob = async (jobId,employeeId) =>{
            const employee = employees.find(e => e.id === employeeId);const job = jobs.find(j => j.id === jobId);if (!employee || !job) return;const updatedJobs = jobs.map(j =>{
              if (j.id === jobId) {
                return {
                  ...j,assignedTo: {
                    id: employee.id,name: employee.name,phone: employee.phone,email: employee.email,assignedAt: new Date().toISOString()
                  },signedUp: [{ id: employee.id,name: employee.name,signedUpAt: new Date().toISOString() }],status: 'filled'
                };}
              return j;});await saveJobs(updatedJobs);const patientInitials = getPatientInitials(job.patientFirstName,job.patientLastName);const assignMessage = `🎉 JOB ASSIGNED

You've been assigned to:
Patient ${patientInitials} (${job.patientId})
Location: ${job.location}
Service: ${job.skillsRequired}
Date: ${job.date}
Pay: ${job.payRate}

Admin will contact you shortly with details.`;await sendSMSNotification(employee.phone,assignMessage,jobId,employee.id);const otherInterested = (job.interestedEmployees || []).filter(e => e.id !== employeeId);for (const emp of otherInterested) {
              const fullEmp = employees.find(e => e.id === emp.id);if (fullEmp && fullEmp.phone) {
                const notSelectedMessage = `Job for Patient ${patientInitials} (${job.patientId}) has been filled. Thank you for your interest!`;await sendSMSNotification(fullEmp.phone,notSelectedMessage,jobId,fullEmp.id);}
            }

            await createNotification(jobId,`Admin assigned ${employee.name} to Patient ${patientInitials}`);await logActivity('Job Assigned',`Admin assigned ${employee.name} to Patient ${patientInitials} (${job.patientId})`);alert(`Job assigned to ${employee.name}! Employee and others notified.`);};
          const handleUnassignEmployee = async (jobId) =>{
            const job = jobs.find(j => j.id === jobId);
            if (!job || !job.assignedTo) return;
            
            const removedEmployee = job.assignedTo.name;
            const patientInitials = getPatientInitials(job.patientFirstName,job.patientLastName);
            
            // Remove assignment and reopen case
            const updatedJobs = jobs.map(j =>{
              if (j.id === jobId) {
                return {
                  ...j,
                  assignedTo: null,
                  signedUp: [],
                  status: 'active',
                  interestedEmployees: [] // Clear old interested list
                };
              }
              return j;
            });
            await saveJobs(updatedJobs);
            
            // Send SMS to removed employee
            const unassignMessage = `Case Unassigned: Patient ${patientInitials} (${job.patientId}) has been unassigned from you. Contact admin if you have questions.`;
            await sendSMSNotification(job.assignedTo.phone,unassignMessage,jobId,job.assignedTo.id);
            
            // Send SMS to all qualified employees about reopened case
            const qualifiedEmployees = employees.filter(emp =>
              emp.role !== 'Admin' &&
              emp.active !== false &&
              emp.id !== job.assignedTo.id && // Don't send to removed employee
              canEmployeePerformService(emp,job.skillsRequired,job.location)
            );
            
            let sentCount = 0;
            const employeeNames = [];
            
            if (qualifiedEmployees.length > 0) {
              const smsMessage = `🔄 CASE REOPENED

Patient ${patientInitials} (${job.patientId})
Location: ${job.location}
Service: ${job.skillsRequired}
Date: ${job.date}
Pay: ${job.payRate}

Reply YES to express interest or login to view details.`;

              for (const emp of qualifiedEmployees) {
                if (emp.phone) {
                  await sendSMSNotification(emp.phone,smsMessage,jobId,emp.id);
                  sentCount++;
                  employeeNames.push(emp.name);
                }
              }
            }
            
            await createNotification(jobId,`Admin unassigned ${removedEmployee} - Case reopened`);
            await logActivity('Employee Unassigned',`Removed ${removedEmployee} from Patient ${patientInitials} (${job.patientId}) - Case reopened and ${sentCount} employees notified`);
            
            // Detailed summary alert
            const employeeList = employeeNames.length > 5 
              ? employeeNames.slice(0,5).join('\n  • ') + `\n  • ... and ${employeeNames.length - 5} more`
              : employeeNames.join('\n  • ');
            
            alert(`✓ CASE UNASSIGNED & REOPENED

Removed Employee:
  ${removedEmployee}
  
SMS Notifications Sent:
  ✓ ${removedEmployee} - Unassignment notice
  ✓ ${sentCount} qualified employees notified:
  
  • ${employeeList}

Case Status: OPEN
Check Logs tab for full SMS details.`);
            
            // Refresh the modal
            setSelectedJobDetails(null);
          };
          const handleWithdraw = async (jobId) =>{
            const employee = employees.find(e => e.id === selectedEmployee);const job = jobs.find(j => j.id === jobId);if (!employee || !job) return;const updatedJobs = jobs.map(job =>{
              if (job.id === jobId) {
                return {
                  ...job,signedUp: job.signedUp.filter(e => e.id !== selectedEmployee)
                };}
              return job;});await saveJobs(updatedJobs);const patientInitials = getPatientInitials(job.patientFirstName,job.patientLastName);await createNotification(
              jobId,`${employee.name} (${employee.role}) withdrew from Patient ${patientInitials} (${job.patientId}) on ${job.date}`
            );};const handleDeleteJob = async (jobId) =>{
            // Remove from active jobs
            const updatedJobs = jobs.filter(job => job.id !== jobId);
            await saveJobs(updatedJobs);
            
            // Also remove from archived jobs if it exists there
            const archivedJobsResult = await window.storage.get('archived-jobs').catch(() => null);
            if (archivedJobsResult) {
              const existingArchive = JSON.parse(archivedJobsResult.value);
              const updatedArchive = existingArchive.filter(job => job.id !== jobId);
              await window.storage.set('archived-jobs',JSON.stringify(updatedArchive));
              setArchivedJobs(updatedArchive);
            }
            
            await logActivity('Job Deleted',`Job ID: ${jobId}`);
            alert('Case deleted successfully');
          };const handleArchiveJob = async (jobId) =>{
            const job = jobs.find(j => j.id === jobId);if (!job) return;if (!window.confirm('Mark this job as complete and close it?')) {
              return;}

            const archivedJobsResult = await window.storage.get('archived-jobs').catch(() => null);const existingArchive = archivedJobsResult ? JSON.parse(archivedJobsResult.value) : [];const archivedJob = { ...job,completedAt: new Date().toISOString() };const updatedArchive = [archivedJob,...existingArchive];await window.storage.set('archived-jobs',JSON.stringify(updatedArchive));setArchivedJobs(updatedArchive);const updatedJobs = jobs.filter(j => j.id !== jobId);await saveJobs(updatedJobs);await logActivity('Job Completed',`Patient ${getPatientInitials(job.patientFirstName,job.patientLastName)} (${job.patientId}) - Marked Complete`);alert('Job marked complete and closed successfully');};const handleUnarchiveJob = async (jobId) =>{
            const job = archivedJobs.find(j => j.id === jobId);if (!job) return;if (!window.confirm('Reopen this completed job and move it back to active?')) {
              return;}

            const { completedAt,...activeJob } = job;const updatedJobs = [activeJob,...jobs];await saveJobs(updatedJobs);const updatedArchive = archivedJobs.filter(j => j.id !== jobId);await window.storage.set('archived-jobs',JSON.stringify(updatedArchive));setArchivedJobs(updatedArchive);await logActivity('Job Reopened',`Patient ${getPatientInitials(job.patientFirstName,job.patientLastName)} (${job.patientId}) - Reopened and moved back to active`);alert('Job unarchived and moved back to active jobs');};const handleAdminChangeJobStatus = async (jobId,newStatus) =>{
            try {
              const updatedJobs = jobs.map(job =>{
                if (job.id === jobId) {
                  return { ...job,status: newStatus };}
                return job;});await saveJobs(updatedJobs);const job = updatedJobs.find(j => j.id === jobId);await logActivity(
                'Job Status Changed',`Patient ${getPatientInitials(job.patientFirstName,job.patientLastName)} (${job.patientId}) - Status changed to ${newStatus}`
              );alert(`Job status updated to: ${newStatus}`);} catch (error) {
              console.error('Error updating job status:',error);alert('Error updating job status');}
          };const handleLogin = async (e) =>{
            e.preventDefault();setLoginError('');try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);if (!employeesResult) {
                setLoginError('No accounts found. Please sign up first.');return;}

              const allEmployees = JSON.parse(employeesResult.value);const user = allEmployees.find(emp => emp.email === loginForm.email && emp.password === loginForm.password);if (!user) {
                setLoginError('Invalid email or password');return;}

              setCurrentUser(user);setSelectedEmployee(user.id);await window.storage.set('current-user',JSON.stringify(user));sessionStorage.setItem('currentUser',JSON.stringify(user));console.log('User logged in, session saved:', user.name);setAuthView('app');setLoginForm({ email: '',password: '' });} catch (error) {
              console.error('Login error:',error);setLoginError('An error occurred during login');}
          };const handleSignup = async (e) =>{
            e.preventDefault();setSignupError('');if (signupForm.password !== signupForm.confirmPassword) {
              setSignupError('Passwords do not match');return;}

            if (signupForm.password.length < 6) {
              setSignupError('Password must be at least 6 characters');return;}

            if (signupForm.certifications.length === 0) {
              setSignupError('Please select at least one certification');return;}

            if (signupForm.serviceCities.length === 0) {
              setSignupError('Please select at least one city you are willing to service');return;}

            try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);const allEmployees = employeesResult ? JSON.parse(employeesResult.value) : [];if (allEmployees.some(emp => emp.email === signupForm.email)) {
                setSignupError('An account with this email already exists');return;}

              const newUser = {
                id: Date.now().toString(),name: signupForm.name,email: signupForm.email,password: signupForm.password,careType: signupForm.careType,// 'skilled' or 'nonskilled'
                role: signupForm.role,certifications: signupForm.certifications.join(','),certificationsArray: signupForm.certifications,specializations: signupForm.specializations || [],phone: signupForm.phone,serviceCities: signupForm.serviceCities,yearsOfExperience: signupForm.yearsOfExperience,active: true,// For admin to activate/deactivate
                createdAt: new Date().toISOString()
              };const updatedEmployees = [...allEmployees,newUser];await window.storage.set('healthcare-employees',JSON.stringify(updatedEmployees));setCurrentUser(newUser);setSelectedEmployee(newUser.id);await window.storage.set('current-user',JSON.stringify(newUser));sessionStorage.setItem('currentUser',JSON.stringify(newUser));setEmployees(updatedEmployees);setAuthView('app');setSignupForm({
                name: '',email: '',password: '',confirmPassword: '',careType: '',role: '',certifications: [],specializations: [],phone: '',serviceCities: []
              });} catch (error) {
              console.error('Signup error:',error);setSignupError('An error occurred during signup');}
          };const handleLogout = async () =>{
            try {
              await window.storage.delete('current-user');sessionStorage.removeItem('currentUser');setCurrentUser(null);setAuthView('login');setLoginForm({ email: '',password: '' });} catch (error) {
              console.error('Logout error:',error);}
          };const openEditProfile = () =>{
            setEditProfileForm({
              name: currentUser.name,email: currentUser.email,phone: currentUser.phone,currentPassword: '',newPassword: '',confirmNewPassword: '',certifications: currentUser.certificationsArray || [],serviceCities: currentUser.serviceCities || []
            });setEditProfileError('');setShowEditProfile(true);};const toggleEditCertification = (cert) =>{
            setEditProfileForm(prev =>({
              ...prev,certifications: prev.certifications.includes(cert)
                ? prev.certifications.filter(c => c !== cert)
                : [...prev.certifications,cert]
            }));};const toggleEditServiceCity = (city) =>{
            setEditProfileForm(prev =>({
              ...prev,serviceCities: prev.serviceCities.includes(city)
                ? prev.serviceCities.filter(c => c !== city)
                : [...prev.serviceCities,city]
            }));};const handleUpdateProfile = async (e) =>{
            e.preventDefault();setEditProfileError('');if (editProfileForm.certifications.length === 0) {
              setEditProfileError('Please select at least one certification');return;}

            if (editProfileForm.serviceCities.length === 0) {
              setEditProfileError('Please select at least one service city');return;}

            if (editProfileForm.newPassword || editProfileForm.confirmNewPassword) {
              if (!editProfileForm.currentPassword) {
                setEditProfileError('Please enter your current password to change password');return;}

              if (currentUser.password !== editProfileForm.currentPassword) {
                setEditProfileError('Current password is incorrect');return;}

              if (editProfileForm.newPassword !== editProfileForm.confirmNewPassword) {
                setEditProfileError('New passwords do not match');return;}

              if (editProfileForm.newPassword.length < 6) {
                setEditProfileError('New password must be at least 6 characters');return;}
            }

            try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);if (!employeesResult) {
                setEditProfileError('Error loading employee data');return;}

              const allEmployees = JSON.parse(employeesResult.value);const emailTaken = allEmployees.some(emp =>
                emp.email === editProfileForm.email && emp.id !== currentUser.id
              );if (emailTaken) {
                setEditProfileError('This email is already in use by another account');return;}

              const updatedUser = {
                ...currentUser,name: editProfileForm.name,email: editProfileForm.email,phone: editProfileForm.phone,certifications: editProfileForm.certifications.join(','),certificationsArray: editProfileForm.certifications,serviceCities: editProfileForm.serviceCities,password: editProfileForm.newPassword || currentUser.password
              };const updatedEmployees = allEmployees.map(emp =>
                emp.id === currentUser.id ? updatedUser : emp
              );await window.storage.set('healthcare-employees',JSON.stringify(updatedEmployees));await window.storage.set('current-user',JSON.stringify(updatedUser));setCurrentUser(updatedUser);setEmployees(updatedEmployees);setShowEditProfile(false);await logActivity('Profile Updated',`${updatedUser.name} updated their profile`);alert('Profile updated successfully!');} catch (error) {
              console.error('Profile update error:',error);setEditProfileError('An error occurred while updating profile');}
          };const handleDeleteAccount = async () =>{
            if (!window.confirm('Are you absolutely sure you want to delete your account? This action CANNOT be undone. All your data will be permanently removed.')) {
              return;}

            if (!window.confirm('Final confirmation: Type your password to confirm account deletion')) {
              return;}

            try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);if (!employeesResult) {
                alert('Error loading employee data');return;}

              const allEmployees = JSON.parse(employeesResult.value);const updatedEmployees = allEmployees.filter(emp => emp.id !== currentUser.id);await window.storage.set('healthcare-employees',JSON.stringify(updatedEmployees));await window.storage.delete('current-user');await logActivity('Account Deleted',`${currentUser.name} (${currentUser.email}) deleted their account`,currentUser.name);alert('Your account has been permanently deleted. You will now be logged out.');setCurrentUser(null);setSelectedEmployee('');setAuthView('login');} catch (error) {
              console.error('Delete account error:',error);alert('An error occurred while deleting your account. Please try again or contact admin.');}
          };const handleAdminToggleEmployeeStatus = async (employeeId) =>{
            try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);if (!employeesResult) return;const allEmployees = JSON.parse(employeesResult.value);const updatedEmployees = allEmployees.map(emp =>{
                if (emp.id === employeeId) {
                  const newStatus = !emp.active;return { ...emp,active: newStatus };}
                return emp;});await window.storage.set('healthcare-employees',JSON.stringify(updatedEmployees));setEmployees(updatedEmployees);const employee = updatedEmployees.find(e => e.id === employeeId);await logActivity(
                employee.active ? 'Employee Activated' : 'Employee Deactivated',`${employee.name} (${employee.email}) account ${employee.active ? 'activated' : 'deactivated'} by admin`
              );alert(`Employee ${employee.active ? 'activated' : 'deactivated'} successfully`);} catch (error) {
              console.error('Toggle employee status error:',error);alert('An error occurred');}
          };const handleAdminDeleteEmployee = async (employeeId) =>{
            const employee = employees.find(e => e.id === employeeId);if (!employee) return;if (!window.confirm(`Are you sure you want to permanently delete ${employee.name}'s account? This cannot be undone.`)) {
              return;}

            try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);if (!employeesResult) return;const allEmployees = JSON.parse(employeesResult.value);const updatedEmployees = allEmployees.filter(emp => emp.id !== employeeId);await window.storage.set('healthcare-employees',JSON.stringify(updatedEmployees));setEmployees(updatedEmployees);await logActivity('Employee Deleted',`${employee.name} (${employee.email}) deleted by admin`);alert('Employee account deleted successfully');} catch (error) {
              console.error('Delete employee error:',error);alert('An error occurred while deleting employee');}
          };const handlePasswordReset = async (e) =>{
            e.preventDefault();setPasswordResetError('');if (!passwordResetForm.employeeId) {
              setPasswordResetError('Please select an employee');return;}

            if (passwordResetForm.newPassword.length < 6) {
              setPasswordResetError('Password must be at least 6 characters');return;}

            if (passwordResetForm.newPassword !== passwordResetForm.confirmPassword) {
              setPasswordResetError('Passwords do not match');return;}

            try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);if (!employeesResult) {
                setPasswordResetError('Error loading employee data');return;}

              const allEmployees = JSON.parse(employeesResult.value);const employee = allEmployees.find(emp => emp.id === passwordResetForm.employeeId);if (!employee) {
                setPasswordResetError('Employee not found');return;}

              if (employee.role === 'Admin') {
                setPasswordResetError('Cannot reset admin password');return;}

              const updatedEmployees = allEmployees.map(emp =>
                emp.id === passwordResetForm.employeeId
                  ? { ...emp,password: passwordResetForm.newPassword }
                  : emp
              );await window.storage.set('healthcare-employees',JSON.stringify(updatedEmployees));setEmployees(updatedEmployees);await logActivity(
                'Password Reset',`Admin reset password for ${employee.name} (${employee.email})`,currentUser.name
              );setShowPasswordReset(false);setPasswordResetForm({ employeeId: '',newPassword: '',confirmPassword: '' });alert(`Password reset successfully for ${employee.name}!\n\nNew credentials:\nEmail: ${employee.email}\nPassword: ${passwordResetForm.newPassword}`);} catch (error) {
              console.error('Password reset error:',error);setPasswordResetError('An error occurred during password reset');}
          };const handleForgotPassword = async (e) =>{
            e.preventDefault();setForgotPasswordError('');setForgotPasswordSuccess('');if (!forgotPasswordEmail) {
              setForgotPasswordError('Please enter your email address');return;}

            try {
              const employeesResult = await window.storage.get('healthcare-employees').catch(() => null);if (!employeesResult) {
                setForgotPasswordError('System error. Please contact admin.');return;}

              const allEmployees = JSON.parse(employeesResult.value);const employee = allEmployees.find(emp => emp.email.toLowerCase() === forgotPasswordEmail.toLowerCase());if (!employee) {

                setForgotPasswordSuccess('If an account exists with this email,instructions have been sent.');setForgotPasswordEmail('');await logActivity('Password Recovery Attempt',`Failed attempt for: ${forgotPasswordEmail}`,'System');return;}

              if (employee.role === 'Admin') {
                setForgotPasswordError('Admin accounts cannot use self-service password reset. Please contact system administrator.');return;}

              const tempPassword = 'Temp' + Math.random().toString(36).slice(-8) + '!';const updatedEmployees = allEmployees.map(emp =>
                emp.email.toLowerCase() === forgotPasswordEmail.toLowerCase()
                  ? { ...emp,password: tempPassword }
                  : emp
              );await window.storage.set('healthcare-employees',JSON.stringify(updatedEmployees));const emailMessage = `
                To: ${employee.email}
                Subject: Password Reset Request - Better Days Home Health

                Hello ${employee.name},You requested to reset your password for your Better Days Home Health account.

                Your account details:
                - Username/Email: ${employee.email}
                - Temporary Password: ${tempPassword}

                Please login with this temporary password and immediately change it in your profile settings.

                If you did not request this reset,please contact your administrator immediately.

                ---
                HomeCareHub
                Better Days Home Health
              `;console.log('===== EMAIL SENT =====');console.log(emailMessage);console.log('======================');await logActivity('Self-Service Password Reset',`${employee.name} (${employee.email}) requested password reset`,'System');alert(`Password Reset Successful!\n\nAn email has been sent to: ${employee.email}\n\nYour temporary password is: ${tempPassword}\n\nPlease login and change your password immediately.\n\n(In production,this would only be sent via email)`);setForgotPasswordSuccess('Password reset successful! Check your email for your temporary password and login instructions.');setForgotPasswordEmail('');setTimeout(() =>{
                setShowForgotPassword(false);setForgotPasswordSuccess('');},3000);} catch (error) {
              console.error('Forgot password error:',error);setForgotPasswordError('An error occurred. Please try again or contact admin.');}
          };const toggleCertification = (cert) =>{
            setSignupForm(prev =>({
              ...prev,certifications: prev.certifications.includes(cert)
                ? prev.certifications.filter(c => c !== cert)
                : [...prev.certifications,cert]
            }));};const toggleSpecialization = (spec) =>{
            setSignupForm(prev =>({
              ...prev,specializations: prev.specializations.includes(spec)
                ? prev.specializations.filter(s => s !== spec)
                : [...prev.specializations,spec]
            }));};const toggleServiceCity = (city) =>{
            setSignupForm(prev =>({
              ...prev,serviceCities: prev.serviceCities.includes(city)
                ? prev.serviceCities.filter(c => c !== city)
                : [...prev.serviceCities,city]
            }));};const canEmployeePerformService = (employee,serviceType,jobLocation = null) =>{
            const requiredCerts = serviceTypeToCertifications[serviceType] || [];const employeeCerts = employee.certificationsArray || employee.certifications.split(',');if (serviceType === 'PCA Services') {
              const hasPCAorCNA = employeeCerts.some(cert =>
                cert.includes('PCA') || cert.includes('CNA')
              );if (!jobLocation || !employee.serviceCities || employee.serviceCities.length === 0) {
                return hasPCAorCNA;}
              const locationLower = jobLocation.toLowerCase();const servicesCity = employee.serviceCities.some(city =>
                locationLower.includes(city.toLowerCase())
              );return hasPCAorCNA && servicesCity;}

            const hasCerts = requiredCerts.every(reqCert =>
              employeeCerts.some(empCert => empCert.includes(reqCert))
            );if (!jobLocation || !employee.serviceCities || employee.serviceCities.length === 0) {
              return hasCerts;}

            const locationLower = jobLocation.toLowerCase();const servicesCity = employee.serviceCities.some(city =>
              locationLower.includes(city.toLowerCase())
            );return hasCerts && servicesCity;};const extractCityFromLocation = (location) =>{

            const parts = location.split(',');if (parts.length >= 2) {
              return parts[parts.length - 2].trim();}
            return '';};const markNotificationAsRead = async (notificationId) =>{
            const updated = notifications.map(notif =>{
              if (notif.id === notificationId && !notif.read.includes(selectedEmployee)) {
                return { ...notif,read: [...notif.read,selectedEmployee] };}
              return notif;});await saveNotifications(updated);};const clearAllNotifications = async () =>{


            let updatedNotifications;if (currentView === 'admin') {
              updatedNotifications = [];} else {

              updatedNotifications = notifications.filter(n =>{

                if (n.message.includes('signed up') || n.message.includes('withdrew')) {
                  return true;}

                if (n.serviceType) {
                  const job = jobs.find(j => j.id === n.jobId);return !canEmployeePerformService(currentUser,n.serviceType,job?.location);}

                return false;});}

            setNotifications(updatedNotifications);await saveNotifications(updatedNotifications);setShowNotifications(false);};const getUnreadCount = () =>{
            if (!currentUser) return 0;return notifications.filter(n =>{
              if (n.read.includes(selectedEmployee)) return false;if (n.message.includes('signed up') || n.message.includes('withdrew')) {
                return currentView === 'admin';}

              if (n.serviceType) {
                const job = jobs.find(j => j.id === n.jobId);return canEmployeePerformService(currentUser,n.serviceType,job?.location);}

              return true;}).length;};const applySearchAndFilters = (jobsList) =>{
            return jobsList.filter(job =>{

              if (searchTerm) {
                const term = searchTerm.toLowerCase();const patientInitials = getPatientInitials(job.patientFirstName,job.patientLastName).toLowerCase();const patientId = job.patientId.toLowerCase();const location = job.location.toLowerCase();const serviceType = job.skillsRequired.toLowerCase();if (!patientInitials.includes(term) &&
                    !patientId.includes(term) &&
                    !location.includes(term) &&
                    !serviceType.includes(term)) {
                  return false;}
              }

              if (filterStatus !== 'all') {
                const jobDate = new Date(job.date);const today = new Date();const hoursDiff = (jobDate - today) / (1000 * 60 * 60);const isUrgent = hoursDiff <= 48 && hoursDiff >= 0;const isOpen = job.signedUp.length === 0;const isAssigned = job.signedUp.length > 0;const isArchived = !!job.completedAt;if (filterStatus === 'urgent' && !isUrgent) return false;if (filterStatus === 'open' && !isOpen) return false;if (filterStatus === 'assigned' && !isAssigned) return false;if (filterStatus === 'archived' && !isArchived) return false;}

              if (filterCity !== 'all') {
                const jobCity = extractCityFromLocation(job.location);if (jobCity !== filterCity) return false;}

              if (filterServiceType !== 'all') {
                if (!job.skillsRequired.includes(filterServiceType)) return false;}

              if (filterDateRange.start) {
                const jobDate = new Date(job.date);const startDate = new Date(filterDateRange.start);if (jobDate < startDate) return false;}
              if (filterDateRange.end) {
                const jobDate = new Date(job.date);const endDate = new Date(filterDateRange.end);if (jobDate > endDate) return false;}

              return true;});};const clearAllFilters = () =>{
            setSearchTerm('');setFilterStatus('all');setFilterCity('all');setFilterServiceType('all');setFilterDateRange({ start: '',end: '' });};const hasActiveFilters = () =>{
            return searchTerm !== '' ||
                   filterStatus !== 'all' ||
                   filterCity !== 'all' ||
                   filterServiceType !== 'all' ||
                   filterDateRange.start !== '' ||
                   filterDateRange.end !== '';};if (loading) {
            return (
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
                <div className="text-xl text-indigo-600">Loading...</div>
              </div>
            );}

          if (authView === 'login') {
            return (
              <>
                {/* Forgot Password Modal */}
                {showForgotPassword && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Mail className="w-8 h-8 text-indigo-600" />
                            <h2 className="text-2xl font-bold text-gray-800">Forgot Password?</h2>
                          </div>
                          <button
                            onClick={() => setShowForgotPassword(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        <div className="mb-4">
                          <p className="text-sm text-gray-600">
                            Enter your email address and we'll send you instructions to reset your password.
                            Your username (email) will also be included in the email.
                          </p>
                        </div>

                        {forgotPasswordError && (
                          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                            {forgotPasswordError}
                          </div>
                        )}

                        {forgotPasswordSuccess && (
                          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg text-sm">
                            {forgotPasswordSuccess}
                          </div>
                        )}

                        <form onSubmit={handleForgotPassword} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <input
                              type="email"
                              required
                              value={forgotPasswordEmail}
                              onChange={(e) => setForgotPasswordEmail(e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="your.email@example.com"
                            />
                          </div>

                          <div className="flex gap-3 pt-2">
                            <button
                              type="submit"
                              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                            >
                              Send Reset Email
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowForgotPassword(false)}
                              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>

                        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                          <p className="text-xs text-blue-800">
                            <strong>Note:</strong> In production,this would send an actual email.
                            For now,check the browser console and popup alert for your temporary password.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <Users className="w-16 h-16 text-indigo-600 mb-3" />
                    <h1 className="text-4xl font-bold text-indigo-600">HomeCareHub</h1>
                    <p className="text-gray-500 text-sm mt-1">Better Days Home Health</p>
                  </div>
                  <p className="text-center text-gray-600 mb-6">Sign in to access your dashboard</p>

                  {loginError && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                      {loginError}
                    </div>
                  )}

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={loginForm.email}
                        onChange={(e) => setLoginForm({ ...loginForm,email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                      <input
                        type="password"
                        required
                        value={loginForm.password}
                        onChange={(e) => setLoginForm({ ...loginForm,password: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="••••••••"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                    >
                      Sign In
                    </button>
                  </form>

                  <div className="mt-4 text-center">
                    <button
                      onClick={() =>{
                        setShowForgotPassword(true);setForgotPasswordError('');setForgotPasswordSuccess('');setForgotPasswordEmail('');}}
                      className="text-indigo-600 hover:text-indigo-700 text-sm font-medium"
                    >
                      Forgot username or password?
                    </button>
                  </div>

                  <div className="mt-6 text-center">
                    <p className="text-gray-600">
                      Don't have an account?{' '}
                      <button
                        onClick={() => setAuthView('signup')}
                        className="text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium mb-2">Demo Admin Access:</p>
                    <p className="text-xs text-gray-600">Email: admin@healthcare.com</p>
                    <p className="text-xs text-gray-600">Password: admin123</p>
                  </div>
                </div>
                </div>
              </>
            );}

          if (authView === 'signup') {
            return (
              <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
                <div className="bg-white rounded-lg shadow-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <Users className="w-16 h-16 text-indigo-600 mb-3" />
                    <h1 className="text-4xl font-bold text-indigo-600">HomeCareHub</h1>
                    <p className="text-gray-500 text-sm mt-1">Better Days Home Health</p>
                    <h2 className="text-2xl font-bold text-gray-800 mt-4">Create Account</h2>
                  </div>
                  <p className="text-center text-gray-600 mb-6">Join Better Days Home Health</p>

                  {signupError && (
                    <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                      {signupError}
                    </div>
                  )}

                  <form onSubmit={handleSignup} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={signupForm.name}
                        onChange={(e) => setSignupForm({ ...signupForm,name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input
                        type="email"
                        required
                        value={signupForm.email}
                        onChange={(e) => setSignupForm({ ...signupForm,email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        required
                        value={signupForm.phone}
                        onChange={(e) => setSignupForm({ ...signupForm,phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="(555) 123-4567"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                      <input
                        type="number"
                        min="0"
                        max="50"
                        required
                        value={signupForm.yearsOfExperience}
                        onChange={(e) => setSignupForm({ ...signupForm,yearsOfExperience: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="e.g.,5"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <input
                          type="password"
                          required
                          value={signupForm.password}
                          onChange={(e) => setSignupForm({ ...signupForm,password: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="••••••••"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                        <input
                          type="password"
                          required
                          value={signupForm.confirmPassword}
                          onChange={(e) => setSignupForm({ ...signupForm,confirmPassword: e.target.value })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type of Care</label>
                      <select
                        required
                        value={signupForm.careType || ''}
                        onChange={(e) => setSignupForm({ ...signupForm,careType: e.target.value,role: '',certifications: [] })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <option value="">Select care type...</option>
                        <option value="skilled">Skilled Care</option>
                        <option value="nonskilled">Nonskilled Care</option>
                      </select>
                    </div>

                    {signupForm.careType === 'skilled' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Skilled Role</label>
                        <select
                          required
                          value={signupForm.role}
                          onChange={(e) => setSignupForm({ ...signupForm,role: e.target.value,certifications: [] })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Select your role...</option>
                          <option value="RN">Registered Nurse (RN)</option>
                          <option value="PT">Physical Therapist (PT)</option>
                          <option value="OT">Occupational Therapist (OT)</option>
                        </select>
                      </div>
                    )}

                    {signupForm.careType === 'nonskilled' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nonskilled Role</label>
                        <select
                          required
                          value={signupForm.role}
                          onChange={(e) => setSignupForm({ ...signupForm,role: e.target.value,certifications: [] })}
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="">Select your role...</option>
                          <option value="PCA">Personal Care Aide (PCA)</option>
                          <option value="CNA">Certified Nursing Assistant (CNA)</option>
                        </select>
                      </div>
                    )}

                    {signupForm.role && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Certifications & Skills (Select all that apply)
                        </label>
                        <div className="border border-gray-300 rounded-lg p-4 max-h-48 overflow-y-auto">
                          <div className="grid grid-cols-2 gap-2">
                            {certificationsByRole[signupForm.role]?.map(cert =>(
                              <label key={cert} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                <input
                                  type="checkbox"
                                  checked={signupForm.certifications.includes(cert)}
                                  onChange={() => toggleCertification(cert)}
                                  className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                />
                                <span className="text-sm text-gray-700">{cert}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        {signupForm.certifications.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {signupForm.certifications.map(cert =>(
                              <span key={cert} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                                {cert}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Specializations Section - Optional */}
                    {signupForm.role && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Specializations (Optional - Select areas of expertise)
                        </label>
                        <div className="border border-gray-300 rounded-lg p-4 max-h-48 overflow-y-auto bg-gray-50">
                          <div className="grid grid-cols-2 gap-2">
                            {availableSpecializations.map(spec =>(
                              <label key={spec} className="flex items-center space-x-2 cursor-pointer hover:bg-white p-2 rounded">
                                <input
                                  type="checkbox"
                                  checked={signupForm.specializations.includes(spec)}
                                  onChange={() => toggleSpecialization(spec)}
                                  className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                                />
                                <span className="text-sm text-gray-700">{spec}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        {signupForm.specializations.length > 0 && (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {signupForm.specializations.map(spec =>(
                              <span key={spec} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                {spec}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cities Willing to Service (Select all that apply)
                      </label>
                      <div className="border border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                        <div className="grid grid-cols-2 gap-2">
                          {hamptonRoadsCities.map(city =>(
                            <label key={city} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                              <input
                                type="checkbox"
                                checked={signupForm.serviceCities.includes(city)}
                                onChange={() => toggleServiceCity(city)}
                                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                              />
                              <span className="text-sm text-gray-700">{city}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      {signupForm.serviceCities.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-2">
                          {signupForm.serviceCities.map(city =>(
                            <span key={city} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                              {city}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-3 pt-4">
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                      >
                        Create Account
                      </button>
                      <button
                        type="button"
                        onClick={() => setAuthView('login')}
                        className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                      >
                        Back to Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            );}

          return (
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
              <div className="max-w-6xl mx-auto">
                {/* HomeCareHub Header */}
                <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Users className="w-10 h-10 text-indigo-600" />
                      <div>
                        <h1 className="text-2xl font-bold text-indigo-600">HomeCareHub</h1>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-gray-800">{currentUser.name}</p>
                      <p className="text-xs text-gray-500">{currentUser.role}</p>
                    </div>
                  </div>
                </div>

                {/* HIPAA Compliance Banner */}
                <div className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <div>
                      <h3 className="font-semibold text-green-900">HIPAA Compliant Platform</h3>
                      <p className="text-sm text-green-800">
                        Patient identities protected - All PHI displayed using initials and ID numbers only
                      </p>
                    </div>
                  </div>
                </div>

                {currentView === 'admin' && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">SMS Notifications Enabled</h3>
                        <p className="text-sm text-blue-800">
                          When you post a new job,SMS notifications are automatically sent to all employees who have the required certifications.
                          All notifications are logged in the Dashboard Activity Log for your records.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-white rounded-lg shadow-lg p-3 mb-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img
                        src="data:image/jpeg;base64,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Ofz/ADzWkb2V/l6dtl+vqTO99Xprb+rL9fzZYhcg7CM5HHtx+PY//qIzVDg23bol2JgAPqf8/wCRQaC0AFAB+HPr/SgAoAKAJ1GAPoDQAtABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAf/0f7+KACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoApTKWYgAnnqO3J/Om9/kvyNofCvn+Y5dygZwcDPPOfUY49OvOPpxUS+z/iX9f1+o2k1/X+a/P77EO8iQ8krntwBk8DjPb26nvht1pN6L+vxX9aaXvHmV+Zq/wDwLvq9Nfk/XQcwcsp25APX1Bx16+nb17dKyqwbt5W31/WN77W9NrWl0p3TtfqvNfl/WmtrhKV6lfmHOBzxjv6+gOGz1I4FZTj7OLd13v3t3v3vbst+qOWaV7den39/P9N1tLzu41hU15bPJyVxjdgclsAHkkHoPXtt6L49TFfvbX6r59vtd9vdt26suNPTbpq+/orv00f32sdyvKoW4GFO4HgdOM8ZPJByPXpXp0ZcyTb0av3697dO1vRdCPZrz/rz5l62t5K25M+Y3YgjDdM9uuSODnORg8bucngV1u8VpZLfu3+DXb/g2tKW+V2T032v/X3v5aohOMDG0ndnBODnPtnPGRk9+OM5rL+v6/4f7iox6vfp53Xrpb0d/Iex+cjK9RxuwfqeD/8AW5IBzWlPr8v1/rb7xTt367X/AKs/n99iWPAbPbnjoecex4/D8s1oKG/yLVBqFABQAUAFABQBOOg+goAWgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKAP//S/v4oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoA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9nkHlRw+Rnbtwe+D1HHXj247nitknFPTfre9l+H9d7WBSfK01a7/AK/m7fzLrpogCklucc5PU889ASPp649OCspXaX9fmvz+8CbGB1H0GefbJxjv/FzxnbwKtw7Xb+7/ANul5dPvt7oA9eefXt/n2qLvu/vAKLy7v7wCi8u7+8A/z/nr/L86abutXuuoEU+1toK5PGBkjGBzz36dDn6nGa6YLW/Tb+v6X5qQQW77ZMEZU9zn06Dg5Jyev4Z6NU7dX6L9f6t+khK+hLNJ94YOAMjP4fTpnpj8uKz1a227Pbzfrby7dEpVeycbLz/rW/3x+ZVRfMUnccsN2CORjkAY689cke+c5VPZj5VZa6taLbX73/7b872ON8e6yug+GL++ZghiiJUnqSeMjJPrxyw7DbXyOfYz6rRm01du2+uvbr20Sb63V2dOHpttbLv39H5a38umx5L8BUudUXWNVufMHn38rxM2Tujcjbt9O/Ttz2ryuF51MRU9pJve217Le+6373+86MQ4QVvKys/+H9Nvx0l9OBMMACORyB2PofXH+8DnjgcV+ibf10/D8vuPNk79P1/Rfl83axZpEhQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB//9D+/igAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAQ9D9DQBXwfUY/POefx9sD645oAWgBm0bj27jkHP4cEc+5+nAoAfgkNx1XGe3X8On159sUAVY4yGJPBzg8dvT1wcZwOvXJBwoCPIfjL4Y/t7w1cyouZLFZL30IMCiXjgkEbDjrnttyBXxXF3MsPJxvpZ/18/T9JdUVd7/1/wb918rrm8w/Z38btrmlXGk3M+65sbq4j2k5YpDO8QwMg8Lt6A4xjIyBXwOTZvOjW5JSsnKzvps/8ttX5Ws3LayStZO+/Rp99kv8A0r/t3Rn1ZE275MZOSQTngYxx90Y4z156cYy37LlldVqUZXV2t27627er79NL2Oeorenft30s/wD23e+lkieIcP145+uT06+/vyM4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OW+FPgTW9d1KDxNr/mLz5ixtJIQyyc42HC4HGOM9+M1z8LZTj61dYuq58smmr81rat9rWv6972fNdRqPure3z9ev5/fb3vrYmKzgWCAAEDgAYzj2GAcdCST7rjBr9lpQ5IRj2S3/AK/y9FvLmcr3T6L/AIe/T/PqW7YvsLSE8knBGSPU8/59K2jHmfl10v8ArH8/ut72c5X0Wz3f+Ss/xa72e4qSlpto6E9uenr2564/HsK1S5dL+v8AX/Dee15Cjo27q3df8G//AJK/K+xqEsANvzc/+O/98jnv07YyM/LvGCtfrZOzX321f6emtyVbW7tpp69v6t+koN6hth4Z+e+M+2MdPx7jnJC600tfS3y9PuGrq0v66+vTy031uWlGAP8APX8/8+nStVpp2/rz/P7xPVt93/Xb8vuFoEFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQAUAFABQB//R/v4oAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgAoAKACgCGTJO042985PX/AD7469wFAIv3aZK/Lng5PGO429/++j756UAQSt0CHg49W49gOf1HII4zmrULq9/w/wDt118vvAil3SKNvBGBkc9Dnn7uQB7flklsqsZLRdey+7T3vvu/NbAPWNljJ5J45zyPXbxwexHzeo6kVxThptd69LWfn70vx/H7J/X9f1+SKN/AtzaSwXEYeOZXiZWwcq67Tz03YbGcYORwcba+YzuKlQlHlcrp/Jv/AId9flr7vbh204tOzstvx77eTaV9Wre78E/Fz4T3/hnVl8WeGVaNIZjczKgLHaBuYARlf4gOMEA+pPzfj2NWNyys8TSU1DmvonovXbV3evMvNbx+hw2NUounNq1uX+te/dfPZHqnwZ+N9j4itYNI1JjBqUIRW81tjMx4wAw45U8Hd16rn5vpMi4+p12sPiKnLNO3vuzflZvXXppfqukpxeBVSPPG3V23uv8Agdk9b/Zs2fU0UyXkAcNhTyDuwSD78D06bc56c5r9UwWMjiIRqU3dOz913+el9b37X8rXl89Uo+ylZq22/T8n3/4OrJ4sqNqNwOSfbjOMFSc9eD7lRXsU5Tsua9r7vV+mmvlpFLrpdMzsuyvv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B6bHbW1rAJVVAGCjdkD5jkKOSccc9enJWv7s4R4LwuQYanFUoqUFFNpJbL/t1J21/wArH4tjsxq16l3J631W78+3rotNVfaPqUkMLlfMiV1Hc857buMYP59Md81937dU5KKVtrJL+vTb7rHmTbVt5a7372739Nte690FkiiVkVeN3H+yo49un1OeuOterTqRlC28nbX8+l7+rXXz5hO+u39adunl91mTopkA25xnJGVwQMYGeOSfr16DopFz5rO9uuyv211Xbpp1vYf9f12/ryLYVcEbdoGCT1zx06r+OB26DgNtKjGStt521/Nfk776GMpXfkvO/wCi/N/geZfEjxwngzw9eamYlYRxylOvXZxgZz356fh0r884zzh5JgqtVPSMZO/dJXfZ3/z05do+jl2F+sVIp7N6/J2+f3q1lvduP5y6N+2Pe3Hio2DRnyGvJIANz4H7zBGPMJ5x1PBGcYyNv845d4y3zlYV1W1z8ust9e19barp6OzPtKvDcZYbnUbO19PP/h0/XbofezLB8S/BKfaEQLewyAgejxjqDzuOT0x6diW/oedenxNkurTc6bXd+9Hutl20ffVJnyMsBPB4jTXW/RaJ30WttPJ+e/LH421H9jmzuvECalb3EioJ/NdFRSMbgRzsGcDAHI9Ocmv5yzTwnlPN/rap3Sque3RvyX5NecVdH0tHOfZUvZu90l/l52V9ft/K1j7Y+H/gVPCNnp9pFgpbQLGXI53KuBkD9cDHptxiv6I4LyqWVYSjQtblilZX12069uj021umfPZjj413LXpe3+Vo/wCbflZqXrrSSqPlTfx7Ljp1B59e7dhjgNX6SqlRLRN7fd5X0+d/u0PCbvru/wCvT8/uEBZhuf5Dg5A5xx6jOT9Mc+gOWiVXm0ektmnpa3Rbf13umF/8v6/ry6ojw54wcerEE/Ucr+owR6cUQjK107tbaf8ADW36qXrEF63/AK9Fv5t/IVo1CjJPHOcjOQO/159PoMgVblZapptfj6a9e/L89wF3ZB2IuccHJ47cjkE/j+fO7J1+XRvyvt69fO2tvR3Yf1/V7fn9xC80kIG5dwP8TMOG79MdM8cdP72PmI1o31qK39f3Y/8ApS+d7B/X9b/12vYrebbu257hI2HP31BHJ4OfT6e5xgV1QxdCOjnG67a/dq+mrt3e9uYqLd7J217eX9LQjk1e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sUrjceMDgY+bjJHUDt3JC/B4uu4Sve617r8mrff99j+lMuk6lCMujSd9+l79P16ehYkI80g8NgHhs88fieD0JH4fxedHGKU1Z31Xz8vit6Xj69WepThq73tpry+Xrfd9beq15fTfhKM+OdI6Ei9tOPvHHnL/APXyv58V9fk03Ocd0/d6rT/gd9Nu2h8HxpyfVJtX1Ts3p09e2v4aW5T9/wDwR8+j6eMEYtIu/bC9vl6EcAs3brya/T8FSapxaV3L7n1Xlb0S+d7R/kfPmliqrumuaTul5W0ttqm9LdnsnLvYh8wHXnkNz3weucZ5x9OpPDeuvdWr/T5de3f79T42pJOppfr18305Vt3/ACvYtGNGA38oc9B+ueehHp+WM1TfNr/wdf6+77hJ21IWiUHCJhV9O/c5UcHPvjPX2aVHVv8APp1tu99e1/nYUoOe99V63/Lvv+aVilcRvyVU44BGSBx2AI7kYxnvkjoaipFNbat2/D8Xpp93UyjRnFppyST8/v37Puvh6XRz19ZadqEckF5DHhsqfMC8g553EAYzyeMccBuN3nVMPB6W6Ly0239634321tzR9zA46phmpQm4tPfma139PTTTra583fE39m/w34ltJ7u3sofNKu64iQ7ifcd8c478Dsa8nE5dGSuoprs1rprrtd38vuP0jIeOK+HqU6cqjsmlu7dr9LXv311Wlm4/lt8Vfgvqng29uLhIWWwjd8ttKquG+UDHTADY+Y4Hr92vm8ZgOy0e9l2/D807eV4/ueR8UUcbCCdROWnzb9Ove689bnhyalcaQ2Uycng+nTjPHQ89TtzkDg15scP7P3kmvw+a91b/APbu3U++o+wxULT5W5K7u07v/wABeu383nY9Z8CfGDxB4Vv7a5FxKtuHBP7xgu3PQ9jkY9u/QV6NDFeztrstd1b01T2/4DjufJcRcKUMbRqOlSXM09l+O2jVv7342P1X+C37RWj+MLSzsLm8jF2QqkF1LbmAU55Jzxx17dMAv72Fx6dry9bu9nff5ed1914/zVxNwTiqM6klSmo6r4dL6/8AAV7p7b6OP2BFcRyxLJGytG6ghievTGeuO/8AF+fJr36VdS5buyf9dk7PybXXS7PzKthamEm4yUvdlbVW/HW1/T79ivcSSmZAgzG33nBzgnPXg5B9OOB24LdvtISSSabt3V1p21/S22tm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"
                        alt="Better Days Home Health Logo"
                        className="h-16 w-auto object-contain"
                      />
                      <h1 className="text-4xl font-bold text-gray-800">Better Days Home Health</h1>
                    </div>
                    <div className="relative flex items-center gap-2">
                      <button
                        onClick={() => setShowNotifications(!showNotifications)}
                        className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        <Bell className="w-6 h-6 text-gray-600" />
                        {getUnreadCount() > 0 && (
                          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                            {getUnreadCount()}
                          </span>
                        )}
                      </button>

                      {showNotifications && (
                        <div className="absolute right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-10" style={{top: '100%',marginTop: '0.5rem'}}>
                          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                            <h3 className="font-semibold text-gray-800">Notifications</h3>
                            <button
                              onClick={() => setShowNotifications(false)}
                              className="text-gray-500 hover:text-gray-700"
                            >
                              <X className="w-5 h-5" />
                            </button>
                          </div>
                          <div className="max-h-96 overflow-y-auto">
                            {notifications.length === 0 ||
                             notifications.filter(n =>{

                                if (n.message.includes('signed up') || n.message.includes('withdrew')) {
                                  return currentView === 'admin';}

                                if (n.serviceType && currentView === 'employee') {
                                  const job = jobs.find(j => j.id === n.jobId);return canEmployeePerformService(currentUser,n.serviceType,job?.location);}

                                return true;}).length === 0 ? (
                              <p className="p-4 text-gray-500 text-center">No notifications</p>
                            ) : (
                              <>
                                {notifications.slice().reverse().filter(n =>{

                                  if (n.message.includes('signed up') || n.message.includes('withdrew')) {
                                    return currentView === 'admin';}

                                  if (n.serviceType && currentView === 'employee') {
                                    const job = jobs.find(j => j.id === n.jobId);return canEmployeePerformService(currentUser,n.serviceType,job?.location);}

                                  return true;}).map(notif =>{
                                  const isSignUpNotif = notif.message.includes('signed up') || notif.message.includes('withdrew');const isWithdrawal = notif.message.includes('withdrew');return (
                                    <div
                                      key={notif.id}
                                      className={`p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer ${
                                        !notif.read.includes(selectedEmployee) ? 'bg-blue-50' : ''
                                      }`}
                                      onClick={() => markNotificationAsRead(notif.id)}
                                    >
                                      <div className="flex items-start gap-2">
                                        {isSignUpNotif && (
                                          <span className={`text-xs font-semibold px-2 py-1 rounded ${
                                            isWithdrawal ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                                          }`}>
                                            {isWithdrawal ? 'WITHDRAWAL' : 'SIGN-UP'}
                                          </span>
                                        )}
                                        {!isSignUpNotif && (
                                          <span className="text-xs font-semibold px-2 py-1 rounded bg-indigo-100 text-indigo-700">
                                            NEW JOB
                                          </span>
                                        )}
                                      </div>
                                      <p className="text-sm text-gray-800 mt-2">{notif.message}</p>
                                      <p className="text-xs text-gray-500 mt-1">
                                        {new Date(notif.timestamp).toLocaleString()}
                                      </p>
                                    </div>
                                  );})}
                                <div className="p-3 border-t border-gray-200 bg-gray-50">
                                  <button
                                    onClick={clearAllNotifications}
                                    className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                                  >
                                    Clear All Notifications
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex gap-2">
                      {currentUser.role !== 'Admin' && (
                        <>
                          <button
                            onClick={() =>{
                              setCurrentView('employee');setShowMyJobs(false);}}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              currentView === 'employee' && !showMyJobs
                                ? 'bg-indigo-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            Available Jobs
                          </button>

                          <button
                            onClick={() =>{
                              setCurrentView('employee');setShowMyJobs(true);}}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              showMyJobs
                                ? 'bg-green-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            My Cases
                          </button>

                          <button
                            onClick={() => {
                              setCurrentView('training');
                            }}
                            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                              currentView === 'training'
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                          >
                            Training
                          </button>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                      {currentUser.role !== 'Admin' && (
                        <button
                          onClick={openEditProfile}
                          className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                          title="Edit Profile"
                        >
                          <Settings className="w-5 h-5 text-gray-600" />
                        </button>
                      )}
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-800">{currentUser.name}</div>
                        <div className="text-xs text-gray-500">{currentUser.role}</div>
                      </div>
                      <button
                        onClick={handleLogout}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                      >
                        Logout
                      </button>
                    </div>

                    {currentUser.role === 'Admin' && (
                      <div className="flex gap-2 w-full mt-4">
                        <button
                          onClick={() =>{
                            setCurrentView('jobs-dashboard');setShowAllJobs(false);}}
                          className={`px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 ${
                            currentView === 'jobs-dashboard' ? 'bg-indigo-700 text-white' : 'bg-indigo-500 text-white'
                          }`}
                        >
                          <Briefcase className="w-5 h-5" />
                          Cases
                        </button>
                        <button
                          onClick={() =>{
                            setCurrentView('employees-dashboard');setShowAllJobs(false);}}
                          className={`px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 ${
                            currentView === 'employees-dashboard' ? 'bg-indigo-700 text-white' : 'bg-indigo-500 text-white'
                          }`}
                        >
                          <Users className="w-5 h-5" />
                          Employees
                        </button>
                        <button
                          onClick={() =>{
                            setCurrentView('referrals');setShowAllJobs(false);}}
                          className={`px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 ${
                            currentView === 'referrals' ? 'bg-indigo-700 text-white' : 'bg-indigo-500 text-white'
                          }`}
                        >
                          <Star className="w-5 h-5" />
                          Referral Sources
                        </button>
                        <button
                          onClick={() => {
                            setCurrentView('training');
                            setShowAllJobs(false);
                          }}
                          className={`px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2 ${
                            currentView === 'training' ? 'bg-purple-700 text-white' : 'bg-purple-600 text-white'
                          }`}
                        >
                          <Clipboard className="w-5 h-5" />
                          Training
                        </button>
                        <button
                          onClick={() =>{
                            setCurrentView('logs');setShowAllJobs(false);}}
                          className={`px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center gap-2 ${
                            currentView === 'logs' ? 'bg-indigo-700 text-white' : 'bg-indigo-500 text-white'
                          }`}
                        >
                          <Clipboard className="w-5 h-5" />
                          Logs
                        </button>
                        <button
                          onClick={() => setShowNewJobForm(true)}
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                        >
                          <Plus className="w-5 h-5" />
                          Post New Case
                        </button>
                        <button
                          onClick={() =>{
                            setPasswordResetForm({ employeeId: '',newPassword: '',confirmPassword: '' });setPasswordResetError('');setShowPasswordReset(true);}}
                          className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors flex items-center gap-2"
                        >
                          <Key className="w-5 h-5" />
                          Reset Password
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {showNewJobForm && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h2 className="text-2xl font-bold text-gray-800">Post New Case</h2>
                          <button
                            onClick={() => setShowNewJobForm(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        <form onSubmit={handleCreateJob} className="space-y-4">
                          {/* PATIENT INFO FIRST */}
                          <div>
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Patient Information</h4>
                            <div className="grid grid-cols-3 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Patient First Name
                              </label>
                              <input
                                type="text"
                                required
                                value={newJob.patientFirstName || ''}
                                onChange={(e) => setNewJob({ ...newJob,patientFirstName: e.target.value })}
                                placeholder="e.g.,John"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Patient Last Name
                              </label>
                              <input
                                type="text"
                                required
                                value={newJob.patientLastName || ''}
                                onChange={(e) => setNewJob({ ...newJob,patientLastName: e.target.value })}
                                placeholder="e.g.,Thompson"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Patient ID (Optional)
                              </label>
                              <input
                                type="text"
                                value={newJob.patientId || ''}
                                onChange={(e) => setNewJob({ ...newJob,patientId: e.target.value })}
                                placeholder="Auto-generated"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                          </div>
                          <p className="text-xs text-gray-500 mt-2">🔒 HIPAA: Names stored securely,displayed as initials only</p>
                          </div>

                          {/* SERVICE TYPE - This determines what fields show below */}
                          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4">
                            <label className="block text-sm font-medium text-indigo-900 mb-1">
                              <span className="text-lg">⚕️</span> Service Type / Skills Required
                            </label>
                            <select
                              required
                              value={newJob.skillsRequired}
                              onChange={(e) =>{
                                setNewJob({ ...newJob,skillsRequired: e.target.value,nonskilledServices: [] });}}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-base font-medium"
                            >
                              <option value="">Select service type...</option>
                              <optgroup label="Skilled Nursing (RN)">
                                <option value="RN - Skilled Nursing">RN - Skilled Nursing</option>
                                <option value="RN - Wound Care">RN - Wound Care</option>
                                <option value="RN - IV Therapy">RN - IV Therapy</option>
                                <option value="RN - Medication Management">RN - Medication Management</option>
                                <option value="RN - Patient Education">RN - Patient Education</option>
                              </optgroup>
                              <optgroup label="Physical Therapy (PT)">
                                <option value="PT - Physical Therapy">PT - Physical Therapy</option>
                                <option value="PT - Gait Training">PT - Gait Training</option>
                                <option value="PT - Strength & Mobility">PT - Strength & Mobility</option>
                              </optgroup>
                              <optgroup label="Occupational Therapy (OT)">
                                <option value="OT - Occupational Therapy">OT - Occupational Therapy</option>
                                <option value="OT - ADL Training">OT - ADL Training</option>
                                <option value="OT - Home Safety Assessment">OT - Home Safety Assessment</option>
                              </optgroup>
                              <optgroup label="Nonskilled Care (PCA/CNA)">
                                <option value="PCA Services">PCA/CNA Services - Nonskilled Care</option>
                              </optgroup>
                            </select>
                            <p className="text-xs text-indigo-700 mt-1">This determines what options appear below</p>
                          </div>

                          {/* Nonskilled Services Selection - Shows when PCA Services selected */}
                          {newJob.skillsRequired === 'PCA Services' && (
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Services Needed (Select all that apply)
                              </label>
                              <div className="border border-gray-300 rounded-lg p-4 space-y-2 bg-blue-50">
                                {nonskilledServices.map(service =>(
                                  <label key={service} className="flex items-center space-x-3 cursor-pointer hover:bg-blue-100 p-2 rounded">
                                    <input
                                      type="checkbox"
                                      checked={newJob.nonskilledServices.includes(service)}
                                      onChange={(e) =>{
                                        if (e.target.checked) {
                                          setNewJob({ ...newJob,nonskilledServices: [...newJob.nonskilledServices,service] });} else {
                                          setNewJob({ ...newJob,nonskilledServices: newJob.nonskilledServices.filter(s => s !== service) });}
                                      }}
                                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <span className="text-sm text-gray-700 font-medium">{service}</span>
                                  </label>
                                ))}
                              </div>
                              {newJob.nonskilledServices.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {newJob.nonskilledServices.map(service =>(
                                    <span key={service} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                                      {service}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          )}

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                City
                              </label>
                              <select
                                required
                                value={newJob.city || ''}
                                onChange={(e) => setNewJob({ ...newJob,city: e.target.value })}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              >
                                <option value="">Select city...</option>
                                {hamptonRoadsCities.map(city =>(
                                  <option key={city} value={city}>{city}</option>
                                ))}
                              </select>
                            </div>

                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Street Address
                              </label>
                              <input
                                type="text"
                                required
                                value={newJob.address || ''}
                                onChange={(e) => setNewJob({ ...newJob,address: e.target.value })}
                                placeholder="123 Main Street"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                          </div>

                          {/* Date/Hours for Skilled Jobs */}
                          {newJob.skillsRequired !== 'PCA Services' && (
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Date
                                </label>
                                <input
                                  type="date"
                                  required
                                  value={newJob.date}
                                  onChange={(e) => setNewJob({ ...newJob,date: e.target.value })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Hours Authorized Per Visit
                                </label>
                                <input
                                  type="number"
                                  step="0.5"
                                  required
                                  value={newJob.hours}
                                  onChange={(e) => setNewJob({ ...newJob,hours: e.target.value })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="e.g.,1.5"
                                />
                              </div>
                            </div>
                          )}

                          {/* Hours Per Week and Days for Nonskilled Jobs */}
                          {newJob.skillsRequired === 'PCA Services' && (
                            <div>
                              <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Start Date
                                  </label>
                                  <input
                                    type="date"
                                    required
                                    value={newJob.date}
                                    onChange={(e) => setNewJob({ ...newJob,date: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Hours Per Week
                                  </label>
                                  <input
                                    type="number"
                                    step="0.5"
                                    required
                                    value={newJob.hoursPerWeek}
                                    onChange={(e) => setNewJob({ ...newJob,hoursPerWeek: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="e.g.,20"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Days Requiring Care (Select all that apply)
                                </label>
                                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                                  <div className="grid grid-cols-4 gap-2">
                                    {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map(day =>(
                                      <label key={day} className="flex items-center space-x-2 cursor-pointer hover:bg-white p-2 rounded">
                                        <input
                                          type="checkbox"
                                          checked={newJob.daysPerWeek.includes(day)}
                                          onChange={(e) =>{
                                            if (e.target.checked) {
                                              setNewJob({ ...newJob,daysPerWeek: [...newJob.daysPerWeek,day] });} else {
                                              setNewJob({ ...newJob,daysPerWeek: newJob.daysPerWeek.filter(d => d !== day) });}
                                          }}
                                          className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                        />
                                        <span className="text-sm text-gray-700">{day}</span>
                                      </label>
                                    ))}
                                  </div>
                                </div>
                                {newJob.daysPerWeek.length > 0 && (
                                  <div className="mt-2 flex flex-wrap gap-2">
                                    {newJob.daysPerWeek.map(day =>(
                                      <span key={day} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                                        {day}
                                      </span>
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}

                          {/* REFERRAL INFORMATION */}
                          <div className="border-t pt-4">
                            <h4 className="text-sm font-semibold text-gray-700 mb-3">Referral Information</h4>
                            <div className="grid grid-cols-2 gap-4">
                              {/* Hospital/Practice/Facility Autocomplete */}
                              <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                  Hospital / Practice / Facility
                                </label>
                                <input
                                  type="text"
                                  required
                                  value={newJob.referralHospital}
                                  onChange={(e) =>{
                                    const value = e.target.value;setNewJob({ ...newJob,referralHospital: value });const allJobs = [...jobs,...archivedJobs];const uniqueHospitals = [...new Set(allJobs.map(j => j.referralHospital).filter(Boolean))];if (value.length > 0) {
                                      const filtered = uniqueHospitals.filter(hospital =>
                                        hospital.toLowerCase().includes(value.toLowerCase())
                                      );setHospitalSuggestions(filtered);setShowHospitalDropdown(filtered.length > 0);} else {
                                      setHospitalSuggestions(uniqueHospitals.slice(0,10));setShowHospitalDropdown(false);}
                                  }}
                                  onFocus={() =>{
                                    if (!newJob.referralHospital) {
                                      const allJobs = [...jobs,...archivedJobs];const uniqueHospitals = [...new Set(allJobs.map(j => j.referralHospital).filter(Boolean))];setHospitalSuggestions(uniqueHospitals.slice(0,10));setShowHospitalDropdown(uniqueHospitals.length > 0);}
                                  }}
                                  onBlur={() =>{
                                    setTimeout(() => setShowHospitalDropdown(false),200);}}
                                  placeholder="e.g.,Sentara Obici Hospital"
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                />
                                {showHospitalDropdown && hospitalSuggestions.length > 0 && (
                                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                    {hospitalSuggestions.map((hospital,index) =>(
                                      <button
                                        key={index}
                                        type="button"
                                        onClick={() =>{
                                          setNewJob({ ...newJob,referralHospital: hospital });setShowHospitalDropdown(false);}}
                                        className="w-full text-left px-4 py-2 hover:bg-indigo-50 text-sm text-gray-700 transition-colors"
                                      >
                                        {hospital}
                                      </button>
                                    ))}
                                  </div>
                                )}
                                <p className="text-xs text-gray-500 mt-1">
                                  Start typing or select from previous facilities
                                </p>
                              </div>

                              {/* Doctor/Provider Autocomplete */}
                              <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Doctor / Provider Name
                            </label>
                            <input
                              type="text"
                              required
                              value={newJob.referralSource}
                              onChange={(e) =>{
                                const value = e.target.value;setNewJob({ ...newJob,referralSource: value });const allJobs = [...jobs,...archivedJobs];const uniqueSources = [...new Set(allJobs.map(j => j.referralSource).filter(Boolean))];if (value.length > 0) {
                                  const filtered = uniqueSources.filter(source =>
                                    source.toLowerCase().includes(value.toLowerCase())
                                  );setReferralSourceSuggestions(filtered);setShowReferralDropdown(filtered.length > 0);} else {
                                  setReferralSourceSuggestions(uniqueSources.slice(0,10));setShowReferralDropdown(false);}
                              }}
                              onFocus={() =>{

                                if (!newJob.referralSource) {
                                  const allJobs = [...jobs,...archivedJobs];const uniqueSources = [...new Set(allJobs.map(j => j.referralSource).filter(Boolean))];setReferralSourceSuggestions(uniqueSources.slice(0,10));setShowReferralDropdown(uniqueSources.length > 0);}
                              }}
                              onBlur={() =>{

                                setTimeout(() => setShowReferralDropdown(false),200);}}
                              placeholder="e.g.,Dr. Johnson"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            {showReferralDropdown && referralSourceSuggestions.length > 0 && (
                              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                                {referralSourceSuggestions.map((source,index) =>(
                                  <button
                                    key={index}
                                    type="button"
                                    onClick={() =>{
                                      setNewJob({ ...newJob,referralSource: source });setShowReferralDropdown(false);}}
                                    className="w-full text-left px-4 py-2 hover:bg-indigo-50 text-sm text-gray-700 transition-colors"
                                  >
                                    {source}
                                  </button>
                                ))}
                              </div>
                            )}
                            <p className="text-xs text-gray-500 mt-1">
                              Start typing or select from previous providers
                            </p>
                          </div>
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Pay Rate
                            </label>
                            <input
                              type="text"
                              required
                              value={newJob.payRate}
                              onChange={(e) => setNewJob({ ...newJob,payRate: e.target.value })}
                              placeholder="e.g.,$45/hr"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Description
                            </label>
                            <textarea
                              required
                              value={newJob.description}
                              onChange={(e) => setNewJob({ ...newJob,description: e.target.value })}
                              rows="3"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div className="flex gap-3 pt-4">
                            <button
                              type="submit"
                              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                            >
                              Post Job
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowNewJobForm(false)}
                              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {/* Edit Profile Modal */}
                {showEditProfile && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Settings className="w-8 h-8 text-indigo-600" />
                            <h2 className="text-2xl font-bold text-gray-800">Edit Profile</h2>
                          </div>
                          <button
                            onClick={() => setShowEditProfile(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        {editProfileError && (
                          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                            {editProfileError}
                          </div>
                        )}

                        <form onSubmit={handleUpdateProfile} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <input
                              type="text"
                              required
                              value={editProfileForm.name}
                              onChange={(e) => setEditProfileForm({ ...editProfileForm,name: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                              type="email"
                              required
                              value={editProfileForm.email}
                              onChange={(e) => setEditProfileForm({ ...editProfileForm,email: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                            <input
                              type="tel"
                              required
                              value={editProfileForm.phone}
                              onChange={(e) => setEditProfileForm({ ...editProfileForm,phone: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                          </div>

                          <div className="border-t border-gray-200 pt-4">
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Change Password (Optional)</h3>

                            <div className="space-y-3">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                                <input
                                  type="password"
                                  value={editProfileForm.currentPassword}
                                  onChange={(e) => setEditProfileForm({ ...editProfileForm,currentPassword: e.target.value })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  placeholder="Enter current password to change"
                                />
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                  <input
                                    type="password"
                                    value={editProfileForm.newPassword}
                                    onChange={(e) => setEditProfileForm({ ...editProfileForm,newPassword: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="New password"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                                  <input
                                    type="password"
                                    value={editProfileForm.confirmNewPassword}
                                    onChange={(e) => setEditProfileForm({ ...editProfileForm,confirmNewPassword: e.target.value })}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Confirm password"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="border-t border-gray-200 pt-4">
                            <div className="mb-3">
                              <label className="block text-sm font-medium text-gray-700 mb-1">Care Type</label>
                              <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 font-medium">
                                {currentUser.careType === 'skilled' ? 'Skilled Care' : currentUser.careType === 'nonskilled' ? 'Nonskilled Care' : 'Not set - Please contact admin'}
                              </div>
                            </div>

                            <div className="mb-3">
                              <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                              <div className="px-4 py-2 bg-gray-100 rounded-lg text-gray-800 font-medium">
                                {currentUser.role || 'Not set - Please contact admin'}
                              </div>
                            </div>

                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Certifications & Skills (Select all that apply)
                            </label>
                            <div className="border border-gray-300 rounded-lg p-4 max-h-48 overflow-y-auto">
                              {certificationsByRole[currentUser.role] && certificationsByRole[currentUser.role].length > 0 ? (
                                <div className="grid grid-cols-2 gap-2">
                                  {certificationsByRole[currentUser.role].map(cert =>(
                                    <label key={cert} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                      <input
                                        type="checkbox"
                                        checked={editProfileForm.certifications.includes(cert)}
                                        onChange={() => toggleEditCertification(cert)}
                                        className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                      />
                                      <span className="text-sm text-gray-700">{cert}</span>
                                    </label>
                                  ))}
                                </div>
                              ) : (
                                <div className="text-center text-red-600 py-4">
                                  <p className="font-semibold">No certifications available for role: {currentUser.role}</p>
                                  <p className="text-sm mt-2">Please contact admin to update your role.</p>
                                  <p className="text-xs text-gray-600 mt-2">Valid roles: RN,PT,OT,CNA,PCA</p>
                                </div>
                              )}
                            </div>
                            {editProfileForm.certifications.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {editProfileForm.certifications.map(cert =>(
                                  <span key={cert} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                                    {cert}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Cities Willing to Service (Select all that apply)
                            </label>
                            <div className="border border-gray-300 rounded-lg p-4 max-h-64 overflow-y-auto">
                              <div className="grid grid-cols-2 gap-2">
                                {hamptonRoadsCities.map(city =>(
                                  <label key={city} className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded">
                                    <input
                                      type="checkbox"
                                      checked={editProfileForm.serviceCities.includes(city)}
                                      onChange={() => toggleEditServiceCity(city)}
                                      className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                                    />
                                    <span className="text-sm text-gray-700">{city}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                            {editProfileForm.serviceCities.length > 0 && (
                              <div className="mt-2 flex flex-wrap gap-2">
                                {editProfileForm.serviceCities.map(city =>(
                                  <span key={city} className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                                    {city}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="flex gap-3 pt-4">
                            <button
                              type="submit"
                              className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                            >
                              Save Changes
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowEditProfile(false)}
                              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                            >
                              Cancel
                            </button>
                          </div>

                          {/* Delete Account Section */}
                          <div className="border-t border-red-200 mt-6 pt-6">
                            <h3 className="text-lg font-semibold text-red-600 mb-2">Danger Zone</h3>
                            <p className="text-sm text-gray-600 mb-3">
                              Deleting your account is permanent and cannot be undone. All your data will be removed.
                            </p>
                            <button
                              type="button"
                              onClick={handleDeleteAccount}
                              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                            >
                              Delete My Account
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {/* Password Reset Modal (Admin Only) */}
                {showPasswordReset && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <Key className="w-8 h-8 text-orange-600" />
                            <h2 className="text-2xl font-bold text-gray-800">Reset Employee Password</h2>
                          </div>
                          <button
                            onClick={() => setShowPasswordReset(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
                          <p className="text-sm text-orange-800">
                            <strong>Note:</strong> This will reset the employee's password. Make sure to securely communicate the new password to them.
                          </p>
                        </div>

                        {passwordResetError && (
                          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                            {passwordResetError}
                          </div>
                        )}

                        <form onSubmit={handlePasswordReset} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Employee</label>
                            <select
                              required
                              value={passwordResetForm.employeeId}
                              onChange={(e) => setPasswordResetForm({ ...passwordResetForm,employeeId: e.target.value })}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            >
                              <option value="">Choose an employee...</option>
                              {employees.filter(emp => emp.role !== 'Admin').map(emp =>(
                                <option key={emp.id} value={emp.id}>
                                  {emp.name} - {emp.email} ({emp.role})
                                </option>
                              ))}
                            </select>
                          </div>

                          {passwordResetForm.employeeId && (
                            <>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                                <input
                                  type="password"
                                  required
                                  value={passwordResetForm.newPassword}
                                  onChange={(e) => setPasswordResetForm({ ...passwordResetForm,newPassword: e.target.value })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  placeholder="Enter new password (6+ characters)"
                                />
                              </div>

                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                                <input
                                  type="password"
                                  required
                                  value={passwordResetForm.confirmPassword}
                                  onChange={(e) => setPasswordResetForm({ ...passwordResetForm,confirmPassword: e.target.value })}
                                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                  placeholder="Re-enter new password"
                                />
                              </div>

                              {passwordResetForm.employeeId && (
                                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                                  <p className="text-sm text-blue-800">
                                    <strong>Current Employee:</strong> {employees.find(e => e.id === passwordResetForm.employeeId)?.name}
                                  </p>
                                  <p className="text-sm text-blue-800">
                                    <strong>Email:</strong> {employees.find(e => e.id === passwordResetForm.employeeId)?.email}
                                  </p>
                                </div>
                              )}
                            </>
                          )}

                          <div className="flex gap-3 pt-4">
                            <button
                              type="submit"
                              className="flex-1 px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                            >
                              Reset Password
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowPasswordReset(false)}
                              className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
                            >
                              Cancel
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

                {/* Job Details Modal */}
                {selectedJobDetails && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="p-6">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h2 className="text-2xl font-bold text-gray-800">
                              Patient {selectedJobDetails.patientFirstName} {selectedJobDetails.patientLastName}
                            </h2>
                            <p className="text-gray-500">#{selectedJobDetails.patientId}</p>
                          </div>
                          <button
                            onClick={() =>{
                              setSelectedJobDetails(null);}}
                            className="text-gray-500 hover:text-gray-700"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>

                        {/* Status Banner */}
                        {selectedJobDetails.completedAt ? (
                          <div className="mb-6 p-4 bg-purple-100 border-l-4 border-purple-600 rounded">
                            <p className="text-purple-800 font-semibold">✓ Case Completed</p>
                            <p className="text-sm text-purple-700">Completed on {new Date(selectedJobDetails.completedAt).toLocaleDateString()}</p>
                          </div>
                        ) : selectedJobDetails.assignedTo ? (
                          <div className="mb-6 p-5 bg-blue-50 border border-blue-200 rounded-lg">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <p className="text-blue-900 font-bold text-lg mb-2">✓ Assigned Employee</p>
                                <button
                                  onClick={() => {
                                    const fullEmployee = employees.find(e => e.id === selectedJobDetails.assignedTo.id);
                                    if (fullEmployee) {
                                      setSelectedEmployeeProfile(fullEmployee);
                                    }
                                  }}
                                  className="text-lg font-semibold text-gray-900 hover:text-indigo-600 hover:underline transition-colors text-left"
                                >
                                  {selectedJobDetails.assignedTo.name}
                                </button>
                                <p className="text-sm text-gray-700 mt-1">📞 {selectedJobDetails.assignedTo.phone}</p>
                                <p className="text-sm text-gray-700">✉️ {selectedJobDetails.assignedTo.email}</p>
                                <p className="text-xs text-gray-500 mt-2">Assigned: {new Date(selectedJobDetails.assignedTo.assignedAt).toLocaleString()}</p>
                              </div>
                              <div className="ml-4">
                                <button
                                  onClick={() => {
                                    if(confirm(`Unassign ${selectedJobDetails.assignedTo.name} from this case?\n\nThe case will be reopened and SMS notifications will be sent to qualified employees.`)) {
                                      handleUnassignEmployee(selectedJobDetails.id);
                                    }
                                  }}
                                  className="px-4 py-2 bg-orange-600 text-white hover:bg-orange-700 rounded-lg text-sm font-medium whitespace-nowrap"
                                >
                                  ✕ Unassign
                                </button>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-600 rounded">
                            <p className="text-green-800 font-semibold">⭕ Open Case - Awaiting Assignment</p>
                          </div>
                        )}

                        {/* INTERESTED EMPLOYEES - Show first if there are any */}
                        {!selectedJobDetails.completedAt && selectedJobDetails.interestedEmployees && selectedJobDetails.interestedEmployees.length > 0 && (
                          <div className="mb-6 p-5 bg-amber-50 border border-amber-200 rounded-lg">
                            <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                              <span className="text-2xl">⭐</span>
                              {selectedJobDetails.interestedEmployees.length} Employee{selectedJobDetails.interestedEmployees.length > 1 ? 's' : ''} Interested
                            </h3>
                            <div className="space-y-3">
                              {selectedJobDetails.interestedEmployees.map(emp =>(
                                <div key={emp.id} className="bg-white p-4 rounded-lg border border-amber-300 shadow-sm">
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <button
                                        onClick={() => {
                                          const fullEmployee = employees.find(e => e.id === emp.id);
                                          if (fullEmployee) {
                                            setSelectedEmployeeProfile(fullEmployee);
                                          }
                                        }}
                                        className="text-lg font-bold text-gray-900 hover:text-indigo-600 hover:underline transition-colors text-left"
                                      >
                                        {emp.name}
                                      </button>
                                      <p className="text-sm text-gray-600 mt-1">{emp.role}</p>
                                      <div className="mt-2 space-y-1">
                                        <p className="text-sm text-gray-700">📞 {emp.phone}</p>
                                        <p className="text-sm text-gray-700">✉️ {emp.email}</p>
                                        <p className="text-xs text-gray-600 mt-1">Certifications: {emp.certifications}</p>
                                        {emp.yearsOfExperience && (
                                          <p className="text-xs text-indigo-700 font-semibold">💼 {emp.yearsOfExperience} years experience</p>
                                        )}
                                        <p className="text-xs text-gray-400 mt-2">Expressed interest: {new Date(emp.interestedAt).toLocaleString()}</p>
                                      </div>
                                    </div>
                                    <div className="ml-4 flex flex-col gap-2">
                                      <a
                                        href={`tel:${emp.phone}`}
                                        className="px-4 py-2 bg-green-600 text-white hover:bg-green-700 rounded-lg text-sm font-medium text-center whitespace-nowrap"
                                      >
                                        📞 Call Now
                                      </a>
                                      <button
                                        onClick={() =>{
                                          if(confirm(`Assign ${emp.name} to this case?`)) {
                                            handleAdminAssignJob(selectedJobDetails.id,emp.id);
                                            setSelectedJobDetails(null);
                                          }
                                        }}
                                        className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded-lg text-sm font-medium whitespace-nowrap"
                                      >
                                        ✓ Assign Case
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Case Details Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Service Type</p>
                            <p className="font-semibold text-gray-900">{selectedJobDetails.skillsRequired}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Date</p>
                            <p className="font-semibold text-gray-900">{selectedJobDetails.date || selectedJobDetails.startDate}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Location</p>
                            <p className="font-semibold text-gray-900">{selectedJobDetails.location}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Referral Source</p>
                            <p className="font-semibold text-gray-900">{selectedJobDetails.referralSource}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Pay Rate</p>
                            <p className="font-semibold text-gray-900">{selectedJobDetails.payRate}</p>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Hours</p>
                            <p className="font-semibold text-gray-900">{selectedJobDetails.hours} hours</p>
                          </div>
                        </div>

                        {selectedJobDetails.description && (
                          <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                            <p className="text-sm text-gray-500 mb-1">Description</p>
                            <p className="text-gray-800">{selectedJobDetails.description}</p>
                          </div>
                        )}

                        {/* Edit Referral Source - Available for ALL cases */}
                        <div className="mb-6 p-5 bg-amber-50 border border-amber-200 rounded-lg">
                          <h3 className="text-lg font-bold text-gray-800 mb-3">Edit Referral Source</h3>
                          <div className="flex gap-3">
                            <input
                              type="text"
                              defaultValue={selectedJobDetails.referralSource || ''}
                              id={`referral-${selectedJobDetails.id}`}
                              placeholder="Enter referral source"
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                            />
                            <button
                              onClick={() => {
                                const input = document.getElementById(`referral-${selectedJobDetails.id}`);
                                const newValue = input.value.trim();
                                if (newValue) {
                                  updateReferralSource(selectedJobDetails.id, newValue);
                                } else {
                                  alert('Please enter a referral source');
                                }
                              }}
                              className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium whitespace-nowrap"
                            >
                              ✓ Update
                            </button>
                          </div>
                          <p className="text-xs text-gray-600 mt-2">This can be edited even after the case is completed</p>
                        </div>

                        {/* Admin Action Buttons - Only show for active cases */}
                        {!selectedJobDetails.completedAt && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Admin Actions</h3>
                            <div className="grid grid-cols-2 gap-4">
                              {/* Mark Complete Button */}
                              <button
                                onClick={() => {
                                  if (confirm(`Mark this case as completed?\n\nPatient: ${selectedJobDetails.patientFirstName} ${selectedJobDetails.patientLastName}\n\nOnce completed, the case cannot be edited except for referral source.`)) {
                                    handleArchiveJob(selectedJobDetails.id);
                                    setSelectedJobDetails(null);
                                  }
                                }}
                                className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium flex items-center justify-center gap-2"
                              >
                                <span>✓</span>
                                Mark as Completed
                              </button>

                              {/* Delete Case Button */}
                              <button
                                onClick={() => {
                                  if (confirm(`⚠️ DELETE THIS CASE?\n\nPatient: ${selectedJobDetails.patientFirstName} ${selectedJobDetails.patientLastName}\n\nThis action CANNOT be undone. All case data will be permanently removed.`)) {
                                    handleDeleteJob(selectedJobDetails.id);
                                    setSelectedJobDetails(null);
                                  }
                                }}
                                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2"
                              >
                                <span>🗑️</span>
                                Delete Case
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Show info for completed cases */}
                        {selectedJobDetails.completedAt && (
                          <div className="mt-6 pt-6 border-t border-gray-200">
                            <h3 className="text-lg font-bold text-gray-800 mb-4">Admin Actions</h3>
                            <p className="text-sm text-gray-600 mb-4">This case is completed. Limited actions available.</p>
                            <button
                              onClick={() => {
                                if (confirm(`⚠️ DELETE THIS COMPLETED CASE?\n\nPatient: ${selectedJobDetails.patientFirstName} ${selectedJobDetails.patientLastName}\n\nThis action CANNOT be undone.`)) {
                                  handleDeleteJob(selectedJobDetails.id);
                                  setSelectedJobDetails(null);
                                }
                              }}
                              className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium flex items-center justify-center gap-2"
                            >
                              <span>🗑️</span>
                              Delete Completed Case
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* JOBS DASHBOARD - All job-related metrics in one view */}
                {currentView === 'jobs-dashboard' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-lg shadow-lg p-6 text-white">
                      <h2 className="text-3xl font-bold mb-2">Cases</h2>
                      <p className="text-indigo-100">Overview of all case activity and status</p>
                    </div>

                    {/* Job Metrics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">Active Cases</div>
                          <Briefcase className="w-8 h-8 text-gray-200" />
                        </div>
                        <div className="text-4xl font-bold text-gray-800">{jobs ? jobs.length : 0}</div>
                        <div className="text-xs text-gray-500 mt-1">Currently active</div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">Open Cases</div>
                          <div className="text-4xl">📋</div>
                        </div>
                        <div className="text-4xl font-bold text-green-600">
                          {jobs ? jobs.filter(j =>(!j.assignedTo || !j.assignedTo.id) && !j.completedAt).length : 0}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Awaiting assignment</div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">Assigned Cases</div>
                          <Check className="w-8 h-8 text-blue-200" />
                        </div>
                        <div className="text-4xl font-bold text-blue-600">
                          {jobs ? jobs.filter(j => j.assignedTo && j.assignedTo.id && !j.completedAt).length : 0}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Currently being worked</div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">Completed Cases</div>
                          <div className="text-4xl">✓</div>
                        </div>
                        <div className="text-4xl font-bold text-purple-600">
                          {archivedJobs ? archivedJobs.length : 0}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Closed cases</div>
                      </div>
                    </div>

                    {/* All Cases Table */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">All Cases (Active + Completed)</h3>
                      <div className="overflow-x-auto">
                        {(() =>{
                          const allJobs = [...(jobs || []),...(archivedJobs || [])].sort((a,b) =>
                            new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
                          );if (allJobs.length === 0) {
                            return <p className="text-gray-500">No jobs found</p>;}

                          return (
                            <table className="w-full">
                              <thead>
                                <tr className="border-b">
                                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Patient</th>
                                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Service</th>
                                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Location</th>
                                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Assigned To</th>
                                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Referral</th>
                                </tr>
                              </thead>
                              <tbody>
                                {allJobs.map(job =>(
                                  <tr 
                                    key={job.id} 
                                    onClick={() => setSelectedJobDetails(job)}
                                    className={`border-b cursor-pointer transition-colors ${
                                      job.completedAt 
                                        ? 'bg-purple-50 hover:bg-purple-100' 
                                        : 'hover:bg-indigo-50'
                                    }`}
                                  >
                                    <td className="py-3 px-4 text-sm font-medium text-gray-800">
                                      <div>
                                        <div className="font-semibold">{job.patientFirstName} {job.patientLastName}</div>
                                        <div className="text-xs text-gray-500">#{job.patientId}</div>
                                      </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">{job.skillsRequired}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600">{job.city || job.location}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                      {job.date || job.startDate}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                      {job.assignedTo ? job.assignedTo.name : (
                                        <span className="text-orange-600">
                                          {job.interestedEmployees && job.interestedEmployees.length > 0
                                            ? `${job.interestedEmployees.length} interested`
                                            : 'Unassigned'}
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                      {job.completedAt ? (
                                        <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                                          COMPLETED
                                        </span>
                                      ) : job.assignedTo ? (
                                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                          ASSIGNED
                                        </span>
                                      ) : (
                                        <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                          OPEN
                                        </span>
                                      )}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                      {job.referralSource || 'N/A'}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          );})()}
                      </div>
                    </div>
                  </div>
                )}

                {/* EMPLOYEES DASHBOARD - All employee metrics and performance */}
                {currentView === 'employees-dashboard' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
                      <h2 className="text-3xl font-bold mb-2">Employees Dashboard</h2>
                      <p className="text-green-100">Workforce performance and job history</p>
                    </div>

                    {/* Employee Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">Total Employees</div>
                          <Users className="w-8 h-8 text-indigo-200" />
                        </div>
                        <div className="text-4xl font-bold text-indigo-600">
                          {employees ? employees.filter(e => e.role !== 'Admin').length : 0}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Active workforce</div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">RNs</div>
                          <div className="text-4xl">👨‍⚕️</div>
                        </div>
                        <div className="text-4xl font-bold text-blue-600">
                          {employees ? employees.filter(e => e.role === 'RN').length : 0}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Registered Nurses</div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">PCAs/CNAs</div>
                          <div className="text-4xl">🏥</div>
                        </div>
                        <div className="text-4xl font-bold text-green-600">
                          {employees ? employees.filter(e => e.role === 'PCA' || e.role === 'CNA').length : 0}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">Personal care aides</div>
                      </div>

                      <div className="bg-white p-6 rounded-lg shadow-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-gray-500">Therapists</div>
                          <div className="text-4xl">🦾</div>
                        </div>
                        <div className="text-4xl font-bold text-purple-600">
                          {employees ? employees.filter(e => e.role === 'PT' || e.role === 'OT').length : 0}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">PT & OT staff</div>
                      </div>
                    </div>

                    {/* Employee Performance Table */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">Employee Performance & Job History</h3>
                      <div className="overflow-x-auto">
                        {employees && employees.filter(e => e.role !== 'Admin').length > 0 ? (
                          <table className="w-full">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Name</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Role</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Experience</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Specialization</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Active Cases</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Completed Cases</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Referral Sources</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {employees.filter(e => e.role !== 'Admin').map(emp =>{
                                const activeJobs = jobs.filter(j => j.assignedTo && j.assignedTo.id === emp.id && !j.completedAt);const completedJobs = archivedJobs.filter(j => j.assignedTo && j.assignedTo.id === emp.id);const allEmployeeJobs = [...activeJobs,...completedJobs];const recentPatients = [...new Set(allEmployeeJobs.slice(0,3).map(j => `${j.patientInitials} #${j.patientId}`))];const referralSources = [...new Set(allEmployeeJobs.map(j => j.referralSource).filter(Boolean))];const isActive = emp.active !== false;return (
                                  <tr
                                    key={emp.id}
                                    onClick={() => setSelectedEmployeeProfile(emp)}
                                    className={`border-b hover:bg-indigo-50 cursor-pointer transition-colors ${!isActive ? 'opacity-50 bg-red-50' : ''}`}
                                  >
                                    <td className="py-3 px-4 text-sm font-medium text-gray-800">{emp.name}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600">{emp.role}</td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                      {emp.yearsOfExperience ? `${emp.yearsOfExperience} yrs` : 'N/A'}
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                      {emp.specializations && emp.specializations.length > 0 ? (
                                        <div className="flex flex-wrap gap-1">
                                          {emp.specializations.slice(0, 2).map((spec, idx) => (
                                            <span key={idx} className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs">
                                              {spec}
                                            </span>
                                          ))}
                                          {emp.specializations.length > 2 && (
                                            <span className="text-xs text-gray-500">+{emp.specializations.length - 2}</span>
                                          )}
                                        </div>
                                      ) : 'None'}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                      <span className="font-semibold text-blue-600">{activeJobs.length}</span>
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                      <span className="font-semibold text-purple-600">{completedJobs.length}</span>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-gray-600">
                                      {referralSources.length > 0 ? referralSources.slice(0,2).join(',') : 'N/A'}
                                      {referralSources.length > 2 && <span className="text-xs text-gray-400"> +{referralSources.length - 2}</span>}
                                    </td>
                                    <td className="py-3 px-4 text-sm">
                                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                        {isActive ? 'Active' : 'Inactive'}
                                      </span>
                                    </td>
                                    <td className="py-3 px-4 text-sm" onClick={(e) => e.stopPropagation()}>
                                      <div className="flex gap-2">
                                        <button
                                          onClick={() => handleAdminToggleEmployeeStatus(emp.id)}
                                          className={`px-3 py-1 rounded text-xs font-medium ${isActive ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200' : 'bg-green-100 text-green-700 hover:bg-green-200'}`}
                                        >
                                          {isActive ? 'Deactivate' : 'Activate'}
                                        </button>
                                        <button
                                          onClick={() => handleAdminDeleteEmployee(emp.id)}
                                          className="px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded text-xs font-medium"
                                        >
                                          Delete
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                );})}
                            </tbody>
                          </table>
                        ) : (
                          <p className="text-gray-500">No employees found</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Employee Profile Modal */}
                {selectedEmployeeProfile && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 p-6 text-white">
                        <div className="flex items-center justify-between">
                          <div>
                            <h2 className="text-2xl font-bold">{selectedEmployeeProfile.name}</h2>
                            <p className="text-indigo-100">{selectedEmployeeProfile.role}</p>
                          </div>
                          <button
                            onClick={() => setSelectedEmployeeProfile(null)}
                            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                          >
                            <X className="w-6 h-6" />
                          </button>
                        </div>
                      </div>

                      <div className="p-6 space-y-6">
                        {/* Contact Information */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Email</p>
                              <p className="font-medium">{selectedEmployeeProfile.email}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Phone</p>
                              <p className="font-medium">{selectedEmployeeProfile.phone}</p>
                            </div>
                          </div>
                        </div>

                        {/* Professional Details */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Professional Details</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Years of Experience</p>
                              <p className="font-medium">{selectedEmployeeProfile.yearsOfExperience || 'N/A'} years</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Care Type</p>
                              <p className="font-medium capitalize">{selectedEmployeeProfile.careType}</p>
                            </div>
                          </div>
                        </div>

                        {/* Certifications */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Certifications</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedEmployeeProfile.certificationsArray?.map((cert,idx) =>(
                              <span key={idx} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                                {cert}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Specializations */}
                        {selectedEmployeeProfile.specializations && selectedEmployeeProfile.specializations.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">Specializations</h3>
                            <div className="flex flex-wrap gap-2">
                              {selectedEmployeeProfile.specializations.map((spec,idx) =>(
                                <span key={idx} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Service Cities */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Service Cities</h3>
                          <div className="flex flex-wrap gap-2">
                            {selectedEmployeeProfile.serviceCities?.map((city,idx) =>(
                              <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                                {city}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Status */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Status</h3>
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${selectedEmployeeProfile.active !== false ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {selectedEmployeeProfile.active !== false ? 'Active' : 'Inactive'}
                          </span>
                        </div>

                        {/* Member Since */}
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-3">Member Since</h3>
                          <p className="font-medium">
                            {new Date(selectedEmployeeProfile.createdAt).toLocaleDateString('en-US',{
                              year: 'numeric',month: 'long',day: 'numeric'
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Logs Tab */}
                {currentView === 'logs' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-slate-600 to-slate-700 rounded-lg shadow-lg p-6 text-white">
                      <h2 className="text-3xl font-bold mb-2">System Logs</h2>
                      <p className="text-slate-200">Activity tracking and SMS notifications</p>
                    </div>

                    {/* Tab Buttons */}
                    <div className="bg-white rounded-lg shadow-lg p-2 flex gap-2">
                      <button
                        onClick={() => setLogTab('activity')}
                        className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                          logTab === 'activity'
                            ? 'bg-slate-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        📋 Activity Log
                        {activityLog.length > 0 && (
                          <span className="ml-2 px-2 py-1 bg-white bg-opacity-20 rounded text-sm">
                            {activityLog.length}
                          </span>
                        )}
                      </button>
                      <button
                        onClick={() => setLogTab('sms')}
                        className={`flex-1 px-6 py-3 rounded-lg font-medium transition-colors ${
                          logTab === 'sms'
                            ? 'bg-slate-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        📱 SMS Notifications
                        {smsLog.length > 0 && (
                          <span className="ml-2 px-2 py-1 bg-white bg-opacity-20 rounded text-sm">
                            {smsLog.length}
                          </span>
                        )}
                      </button>
                    </div>

                    {/* Activity Log Tab */}
                    {logTab === 'activity' && (
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">Activity Log</h3>
                          {activityLog && activityLog.length > 0 && (
                            <button
                              onClick={clearActivityLog}
                              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium text-sm"
                            >
                              🗑️ Clear History
                            </button>
                          )}
                        </div>
                        <div className="space-y-2">
                          {activityLog && activityLog.length > 0 ? (
                            activityLog.map(log =>(
                              <div key={log.id} className="flex items-start gap-3 p-3 bg-gray-50 rounded">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <span className="font-semibold text-sm text-gray-800">{log.action}</span>
                                    <span className="text-xs text-gray-500">
                                      {new Date(log.timestamp).toLocaleString()}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 mt-1">{log.details}</p>
                                  <p className="text-xs text-gray-500">by {log.user}</p>
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="text-gray-500 text-sm text-center py-8">No activity logged yet</p>
                          )}
                        </div>
                      </div>
                    )}

                    {/* SMS Log Tab */}
                    {logTab === 'sms' && (
                      <div className="bg-white rounded-lg shadow-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-gray-800">SMS Notifications</h3>
                          {smsLog && smsLog.length > 0 && (
                            <button
                              onClick={clearSMSLog}
                              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium text-sm"
                            >
                              🗑️ Clear History
                            </button>
                          )}
                        </div>
                        <div className="space-y-2">
                          {smsLog && smsLog.length > 0 ? (
                            smsLog.slice().reverse().map(sms =>{
                              const employee = employees ? employees.find(e => e.id === sms.employeeId) : null;return (
                                <div key={sms.id} className="p-3 bg-gray-50 rounded">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-semibold text-gray-800">
                                      {employee ? employee.name : 'Unknown'} ({sms.phoneNumber})
                                    </span>
                                    <span className="text-xs text-gray-500">
                                      {new Date(sms.timestamp).toLocaleString()}
                                    </span>
                                  </div>
                                  <p className="text-sm text-gray-600 whitespace-pre-wrap">{sms.message}</p>
                                  <span className="inline-block mt-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded">
                                    {sms.status ? sms.status.toUpperCase() : 'SENT'}
                                  </span>
                                </div>
                              );})
                          ) : (
                            <p className="text-gray-500 text-sm text-center py-8">No SMS sent yet</p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Archive View */}
                {/* My Cases View - Employee Job History */}
                {showMyJobs && currentUser.role !== 'Admin' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg shadow-lg p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Clipboard className="w-8 h-8" />
                        <h2 className="text-3xl font-bold">My Job History</h2>
                      </div>
                      <p className="text-green-100">Track pending and completed work</p>
                    </div>

                    {(() =>{

                      const myActiveJobs = jobs.filter(job =>
                        job.assignedTo && job.assignedTo.id === currentUser.id
                      );const myCompletedJobs = archivedJobs.filter(job =>
                        job.signedUp.some(emp => emp.id === currentUser.id)
                      );const completedJobsByPatient = {};myCompletedJobs.forEach(job =>{
                        const key = job.patientId;if (!completedJobsByPatient[key]) {
                          completedJobsByPatient[key] = {
                            patientFirstName: job.patientFirstName,patientLastName: job.patientLastName,patientId: job.patientId,location: job.location,referralSource: job.referralSource,jobs: [],totalHours: 0
                          };}
                        completedJobsByPatient[key].jobs.push(job);});Object.keys(completedJobsByPatient).forEach(patientId =>{
                        const patient = completedJobsByPatient[patientId];patient.jobs.forEach(job =>{

                          if (job.visits && job.visits.length > 0) {
                            job.visits.forEach(visit =>{
                              patient.totalHours += visit.hours || 0;});} else {

                            patient.totalHours += job.hours || 0;}
                        });});let grandTotalHours = 0;Object.values(completedJobsByPatient).forEach(patient =>{
                        grandTotalHours += patient.totalHours;});let pendingHours = 0;myActiveJobs.forEach(job =>{
                        if (job.visits && job.visits.length > 0) {
                          job.visits.forEach(visit =>{
                            pendingHours += visit.hours || 0;});} else {
                          pendingHours += job.hours || 0;}
                      });if (myActiveJobs.length === 0 && myCompletedJobs.length === 0) {
                        return (
                          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                            <Clipboard className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">No jobs accepted yet</p>
                            <p className="text-gray-400 text-sm mt-2">
                              Jobs you sign up for will appear here with detailed visit history.
                            </p>
                            <button
                              onClick={() => setShowMyJobs(false)}
                              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                              View Available Jobs
                            </button>
                          </div>
                        );}

                      return (
                        <>
                          {/* Summary Cards */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-gray-500 text-sm">Active Cases</p>
                                  <p className="text-3xl font-bold text-green-600">{myActiveJobs.length}</p>
                                  <p className="text-xs text-gray-500 mt-1">Assigned to you</p>
                                </div>
                                <Check className="w-12 h-12 text-green-200" />
                              </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-gray-500 text-sm">Completed Cases</p>
                                  <p className="text-3xl font-bold text-purple-600">{myCompletedJobs.length}</p>
                                  <p className="text-xs text-gray-500 mt-1">Finished work</p>
                                </div>
                                <Check className="w-12 h-12 text-purple-200" />
                              </div>
                            </div>
                          </div>

                          {/* Active Cases Section */}
                          {myActiveJobs.length > 0 && (
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 border-b border-green-200">
                                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                  <Check className="w-6 h-6 text-green-600" />
                                  Active Cases ({myActiveJobs.length})
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  Assigned to you by admin
                                </p>
                              </div>
                              <div className="p-6">
                                <div className="space-y-4">
                                  {myActiveJobs.map(job =>(
                                    <div key={job.id} className="bg-green-50 border border-green-200 rounded-lg p-4">
                                      <div className="flex items-start justify-between mb-2">
                                        <div>
                                          <h4 className="font-semibold text-gray-800">
                                            Patient {getPatientInitials(job.patientFirstName,job.patientLastName)} ({job.patientId})
                                          </h4>
                                          <p className="text-sm text-gray-600">{job.location}</p>
                                          <p className="text-sm text-gray-600">{job.skillsRequired}</p>
                                          {job.skillsRequired === 'PCA Services' && job.nonskilledServices && job.nonskilledServices.length > 0 && (
                                            <div className="flex flex-wrap gap-1 mt-2">
                                              {job.nonskilledServices.map(service =>(
                                                <span key={service} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-200">
                                                  {service}
                                                </span>
                                              ))}
                                            </div>
                                          )}
                                          <p className="text-sm font-semibold text-green-700 mt-2">
                                            {job.skillsRequired === 'PCA Services'
                                              ? `Start Date: ${new Date(job.date).toLocaleDateString()}`
                                              : `Date: ${new Date(job.date).toLocaleDateString()}`
                                            }
                                          </p>
                                          {job.skillsRequired === 'PCA Services' && job.daysPerWeek && job.daysPerWeek.length > 0 && (
                                            <p className="text-sm text-gray-600">
                                              Days: {job.daysPerWeek.join(',')}
                                            </p>
                                          )}
                                        </div>
                                        <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-semibold">
                                          ACTIVE
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {/* Completed Cases Section */}
                          {Object.keys(completedJobsByPatient).length > 0 && (
                            <>
                              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-4 mb-4">
                                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                                  <Check className="w-6 h-6 text-purple-600" />
                                  Completed Work
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">
                                  Finished cases
                                </p>
                              </div>

                              {/* Patient Cards */}
                              {Object.entries(completedJobsByPatient).map(([patientId,patient]) =>(
                            <div key={patientId} className="bg-white rounded-lg shadow-lg overflow-hidden">
                              {/* Patient Header */}
                              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 border-b border-gray-200">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <div className="flex items-center gap-3 mb-2">
                                      <h3 className="text-2xl font-bold text-gray-800">
                                        Patient {getPatientInitials(patient.patientFirstName,patient.patientLastName)}
                                      </h3>
                                      <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                        {patient.patientId}
                                      </span>
                                    </div>
                                    <div className="space-y-1 text-sm text-gray-600">
                                      <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4" />
                                        {patient.location}
                                      </div>
                                      <div>
                                        <span className="font-medium">Referral Source:</span> {patient.referralSource}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="text-right">
                                    <div className="text-center">
                                      <div className="text-2xl font-bold text-purple-600">{patient.jobs.length}</div>
                                      <div className="text-xs text-gray-500">Visits</div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Visit History */}
                              <div className="p-6">
                                <h4 className="text-lg font-semibold text-gray-800 mb-4">Visit History</h4>
                                <div className="space-y-3">
                                  {patient.jobs.flatMap(job =>(job.visits || []).map((visit,idx) =>(
                                      <div key={`${job.id}-${idx}`} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                                        <div className="flex items-start justify-between mb-2">
                                          <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                              <Calendar className="w-4 h-4 text-indigo-600" />
                                              <span className="font-semibold text-gray-800">
                                                {new Date(visit.date).toLocaleDateString('en-US',{
                                                  weekday: 'short',year: 'numeric',month: 'short',day: 'numeric'
                                                })}
                                              </span>
                                              {job.completedAt && (
                                                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">
                                                  COMPLETED
                                                </span>
                                              )}
                                            </div>
                                            <div className="text-sm text-gray-700 mb-2">
                                              <span className="font-medium">{visit.skillsRequired}</span>
                                            </div>
                                            {visit.description && (
                                              <p className="text-sm text-gray-600 mb-2">{visit.description}</p>
                                            )}
                                            <div className="text-xs text-gray-500">
                                              Added: {new Date(visit.createdAt).toLocaleDateString()}
                                            </div>
                                          </div>
                                          <div className="text-right ml-4">
                                            <div className="flex items-center gap-1 text-gray-700 mb-1">
                                              <Clock className="w-4 h-4" />
                                              <span className="font-semibold">{visit.hours}h</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-green-700">
                                              <DollarSign className="w-4 h-4" />
                                              <span className="font-semibold">{visit.payRate}</span>
                                            </div>
                                            <div className="text-sm text-gray-600 mt-1">
                                              = ${(parseFloat(visit.payRate.replace(/[^0-9.]/g,'')) * visit.hours).toFixed(2)}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    ))
                                  )}
                                </div>

                                {/* Job Count Summary */}
                                <div className="mt-4 pt-4 border-t border-gray-200">
                                  <p className="text-sm text-gray-600">
                                    Total visits with this patient: <span className="font-semibold">{patient.jobs.reduce((sum,job) => sum + (job.visits?.length || 0),0)}</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                          </>
                        )}
                        </>
                      );})()}
                  </div>
                )}

                {/* Referral Sources View */}
                {currentView === 'referrals' && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 rounded-lg shadow-lg p-6 text-white">
                      <div className="flex items-center gap-3 mb-2">
                        <Users className="w-8 h-8" />
                        <h2 className="text-3xl font-bold">Referral Source Tracker</h2>
                      </div>
                      <p className="text-purple-100">Track which sources send you the most patients</p>
                    </div>

                    {(() =>{

                      const allJobs = [...jobs,...archivedJobs];const referralSourceData = {};allJobs.forEach(job =>{
                        const source = job.referralSource || 'Unknown';if (!referralSourceData[source]) {
                          referralSourceData[source] = {
                            name: source,totalReferrals: 0,activePatients: 0,activePCAPatients: 0,// Track ongoing PCA specifically
                            activeSkilledPatients: 0,// Track skilled
                            pcaReferrals: 0,skilledReferrals: 0,patients: new Set(),serviceTypes: {},firstReferral: job.createdAt,lastReferral: job.createdAt,jobs: []
                          };}

                        const data = referralSourceData[source];data.totalReferrals++;data.patients.add(job.patientId);data.jobs.push(job);const serviceType = job.skillsRequired;data.serviceTypes[serviceType] = (data.serviceTypes[serviceType] || 0) + 1;if (serviceType === 'PCA Services') {
                          data.pcaReferrals++;} else {
                          data.skilledReferrals++;}

                        if (new Date(job.createdAt) < new Date(data.firstReferral)) {
                          data.firstReferral = job.createdAt;}
                        if (new Date(job.createdAt) > new Date(data.lastReferral)) {
                          data.lastReferral = job.createdAt;}

                        if (!job.completedAt && job.assignedTo) {
                          data.activePatients++;if (serviceType === 'PCA Services') {
                            data.activePCAPatients++;} else {
                            data.activeSkilledPatients++;}
                        }
                      });const referralSources = Object.values(referralSourceData)
                        .map(source =>({
                          ...source,patientCount: source.patients.size,retentionRate: source.totalReferrals > 0 ? ((source.activePatients / source.totalReferrals) * 100).toFixed(0) : 0,isHighValue: source.activePCAPatients >= 5,// 5+ active PCA = high value
                          primaryType: source.pcaReferrals > source.skilledReferrals ? 'ongoing' : 'skilled',daysSinceLastReferral: Math.floor((new Date() - new Date(source.lastReferral)) / (1000 * 60 * 60 * 24)),status: (() =>{
                            const days = Math.floor((new Date() - new Date(source.lastReferral)) / (1000 * 60 * 60 * 24));if (days <= 30) return 'active';if (days <= 90) return 'cooling';return 'inactive';})()
                        }))
                        .sort((a,b) => b.totalReferrals - a.totalReferrals);if (referralSources.length === 0) {
                        return (
                          <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 text-lg">No referral sources tracked yet</p>
                            <p className="text-gray-400 text-sm mt-2">
                              Post jobs with referral sources to start tracking
                            </p>
                          </div>
                        );}

                      const totalSources = referralSources.length;const activeSources = referralSources.filter(s => s.status === 'active').length;const highValueSources = referralSources.filter(s => s.isHighValue).length;const totalReferrals = referralSources.reduce((sum,s) => sum + s.totalReferrals,0);const totalActivePCA = referralSources.reduce((sum,s) => sum + s.activePCAPatients,0);const topSource = referralSources[0];return (
                        <>
                          {/* Summary Cards */}
                          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                            <div className="bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-gray-500 text-sm">Total Sources</p>
                                  <p className="text-3xl font-bold text-indigo-600">{totalSources}</p>
                                  <p className="text-xs text-gray-500 mt-1">{activeSources} active</p>
                                </div>
                                <Users className="w-12 h-12 text-indigo-200" />
                              </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-gray-500 text-sm">Total Referrals</p>
                                  <p className="text-3xl font-bold text-green-600">{totalReferrals}</p>
                                  <p className="text-xs text-gray-500 mt-1">All time</p>
                                </div>
                                <Briefcase className="w-12 h-12 text-green-200" />
                              </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-gray-500 text-sm">Top Source</p>
                                  <p className="text-lg font-bold text-purple-600 truncate">{topSource.name}</p>
                                  <p className="text-xs text-gray-500 mt-1">{topSource.totalReferrals} referrals</p>
                                </div>
                                <Star className="w-12 h-12 text-purple-200" />
                              </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-gray-500 text-sm">High Value Sources</p>
                                  <p className="text-3xl font-bold text-orange-600">{highValueSources}</p>
                                  <p className="text-xs text-gray-500 mt-1">5+ active PCA patients</p>
                                </div>
                                <div className="text-orange-200 text-3xl">🔥</div>
                              </div>
                            </div>

                            <div className="bg-white rounded-lg shadow p-6">
                              <div className="flex items-center justify-between">
                                <div>
                                  <p className="text-gray-500 text-sm">Active PCA Patients</p>
                                  <p className="text-3xl font-bold text-purple-600">{totalActivePCA}</p>
                                  <p className="text-xs text-gray-500 mt-1">Ongoing care</p>
                                </div>
                                <div className="text-purple-200 text-3xl">♻️</div>
                              </div>
                            </div>
                          </div>

                          {/* Referral Sources List */}
                          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6 border-b border-gray-200">
                              <h3 className="text-xl font-bold text-gray-800">All Referral Sources</h3>
                              <p className="text-sm text-gray-600 mt-1">Sorted by total referrals (highest first)</p>
                            </div>
                            <div className="divide-y divide-gray-200">
                              {referralSources.map((source,index) =>(
                                <div key={source.name} className="p-6 hover:bg-gray-50 transition-colors">
                                  <div className="flex items-start justify-between mb-3">
                                    <div className="flex-1">
                                      <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <span className="text-2xl font-bold text-gray-400">#{index + 1}</span>
                                        <h4 className="text-xl font-bold text-gray-800">{source.name}</h4>
                                        {source.isHighValue && (
                                          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-xs font-bold animate-pulse">
                                            🔥 HIGH VALUE
                                          </span>
                                        )}
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                          source.status === 'active' ? 'bg-green-100 text-green-700' :
                                          source.status === 'cooling' ? 'bg-yellow-100 text-yellow-700' :
                                          'bg-red-100 text-red-700'
                                        }`}>
                                          {source.status === 'active' ? '🟢 Active' :
                                           source.status === 'cooling' ? '🟡 Cooling Off' :
                                           '🔴 Inactive'}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                          source.primaryType === 'ongoing' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                                        }`}>
                                          {source.primaryType === 'ongoing' ? '♻️ Ongoing Care' : '⚡ Skilled Care'}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="text-right">
                                      <div className="text-3xl font-bold text-indigo-600">{source.totalReferrals}</div>
                                      <div className="text-sm text-gray-500">Total Referrals</div>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-3">
                                    <div>
                                      <p className="text-sm text-gray-500">Unique Patients</p>
                                      <p className="text-lg font-semibold text-gray-800">{source.patientCount}</p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Active Patients</p>
                                      <p className="text-lg font-semibold text-green-600">{source.activePatients}</p>
                                      {source.activePCAPatients > 0 && (
                                        <p className="text-xs text-purple-600 font-medium">
                                          {source.activePCAPatients} ongoing PCA
                                        </p>
                                      )}
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Retention Rate</p>
                                      <p className="text-lg font-semibold text-orange-600">{source.retentionRate}%</p>
                                      <p className="text-xs text-gray-500">
                                        {source.primaryType === 'ongoing' ? 'Good for PCA' : 'Normal for skilled'}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">Last Referral</p>
                                      <p className="text-sm font-semibold text-gray-800">
                                        {source.daysSinceLastReferral === 0 ? 'Today' :
                                         source.daysSinceLastReferral === 1 ? 'Yesterday' :
                                         `${source.daysSinceLastReferral} days ago`}
                                      </p>
                                    </div>
                                    <div>
                                      <p className="text-sm text-gray-500">First Referral</p>
                                      <p className="text-sm font-semibold text-gray-800">
                                        {new Date(source.firstReferral).toLocaleDateString()}
                                      </p>
                                    </div>
                                  </div>

                                  <div>
                                    <p className="text-sm text-gray-500 mb-2">Service Types:</p>
                                    <div className="flex flex-wrap gap-2">
                                      {Object.entries(source.serviceTypes)
                                        .sort((a,b) => b[1] - a[1])
                                        .map(([type,count]) =>(
                                          <span key={type} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs border border-blue-200">
                                            {type} ({count})
                                          </span>
                                        ))}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </>
                      );})()}
                  </div>
                )}

                {/* Jobs List */}
                {(currentView === 'admin' || currentView === 'employee') && currentView !== 'referrals' && !showMyJobs && (
                <>
                  {/* Search & Filter Section */}
                  <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Search className="w-6 h-6 text-indigo-600" />
                      <h3 className="text-xl font-bold text-gray-800">Search & Filter Jobs</h3>
                      {hasActiveFilters() && (
                        <button
                          onClick={clearAllFilters}
                          className="ml-auto px-3 py-1 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors text-sm font-medium"
                        >
                          Clear All
                        </button>
                      )}
                    </div>

                    {/* Search Bar */}
                    <div className="mb-4">
                      <div className="relative">
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Search by patient ID,initials,location,or service type..."
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    {/* Filter Options */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {/* Status Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <select
                          value={filterStatus}
                          onChange={(e) => setFilterStatus(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="all">All Statuses</option>
                          <option value="open">Open Only</option>
                          <option value="assigned">Assigned Only</option>
                          <option value="urgent">Urgent Only</option>
                          <option value="archived">Archived Only</option>
                        </select>
                      </div>

                      {/* City Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                        <select
                          value={filterCity}
                          onChange={(e) => setFilterCity(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="all">All Cities</option>
                          {hamptonRoadsCities.map(city =>(
                            <option key={city} value={city}>{city}</option>
                          ))}
                        </select>
                      </div>

                      {/* Service Type Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                        <select
                          value={filterServiceType}
                          onChange={(e) => setFilterServiceType(e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <option value="all">All Services</option>
                          <option value="RN">RN Services</option>
                          <option value="PT">PT Services</option>
                          <option value="OT">OT Services</option>
                          <option value="CNA">CNA Services</option>
                        </select>
                      </div>

                      {/* Date Range Filter */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date Range</label>
                        <div className="flex gap-2">
                          <input
                            type="date"
                            value={filterDateRange.start}
                            onChange={(e) => setFilterDateRange({ ...filterDateRange,start: e.target.value })}
                            className="flex-1 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                          />
                          <input
                            type="date"
                            value={filterDateRange.end}
                            onChange={(e) => setFilterDateRange({ ...filterDateRange,end: e.target.value })}
                            className="flex-1 px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                  {(() =>{

                    let jobsToShow = jobs.slice();if (currentView === 'admin') {
                      jobsToShow = [...jobs,...archivedJobs];} else {

                      jobsToShow = jobs.filter(job => !job.status || job.status === 'active');}

                    let filteredJobs = jobsToShow.slice().reverse().filter(job =>{
                      if (currentView === 'admin') return true;return canEmployeePerformService(currentUser,job.skillsRequired,job.location);});filteredJobs = applySearchAndFilters(filteredJobs);if (jobsToShow.length === 0) {
                      return (
                        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                          <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500 text-lg">No job postings available</p>
                          {currentView === 'admin' && (
                            <button
                              onClick={() => setShowNewJobForm(true)}
                              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                              Post Your First Job
                            </button>
                          )}
                        </div>
                      );}

                    if (filteredJobs.length === 0 && currentView === 'employee') {
                      return (
                        <div className="bg-white rounded-lg shadow-lg p-12">
                          <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500 text-lg text-center mb-4">
                            {hasActiveFilters() ? 'No jobs match your filters' : 'No jobs available at this time'}
                          </p>

                          <p className="text-gray-400 text-sm mt-4 text-center">
                            {hasActiveFilters()
                              ? 'Try adjusting your search criteria or clearing filters.'
                              : 'New jobs matching your certifications and service cities will appear here.'}
                          </p>
                          {hasActiveFilters() && (
                            <button
                              onClick={clearAllFilters}
                              className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                            >
                              Clear All Filters
                            </button>
                          )}
                        </div>
                      );}

                    if (filteredJobs.length === 0 && currentView === 'admin') {
                      return (
                        <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                          <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                          <p className="text-gray-500 text-lg">No jobs match your filters</p>
                          <p className="text-gray-400 text-sm mt-2">
                            Try adjusting your search criteria or clearing filters.
                          </p>
                          <button
                            onClick={clearAllFilters}
                            className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            Clear All Filters
                          </button>
                        </div>
                      );}

                    const resultsHeader = (
                      <div className="mb-4 flex items-center justify-between">
                        <p className="text-gray-600">
                          Showing <span className="font-semibold text-indigo-600">{filteredJobs.length}</span> job{filteredJobs.length !== 1 ? 's' : ''}
                          {hasActiveFilters() && <span className="text-sm ml-2">(filtered)</span>}
                        </p>
                      </div>
                    );return (
                      <>
                        {resultsHeader}
                        {filteredJobs.map(job =>{
                      const isSignedUp = job.signedUp.some(e => e.id === selectedEmployee);const isInterested = (job.interestedEmployees || []).some(e => e.id === selectedEmployee);const isAssigned = job.assignedTo && job.assignedTo.id === selectedEmployee;const canPerform = canEmployeePerformService(currentUser,job.skillsRequired);return (
                        <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h2 className="text-2xl font-bold text-gray-800">
                                  {currentView === 'admin'
                                    ? `Patient ${job.patientFirstName} ${job.patientLastName}`
                                    : `Patient ${getPatientInitials(job.patientFirstName,job.patientLastName)}`
                                  }
                                </h2>
                                <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                                  {job.patientId}
                                </span>
                                {job.completedAt && (
                                  <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                                    COMPLETED
                                  </span>
                                )}
                                {!job.completedAt && job.signedUp && job.signedUp.length > 0 ? (
                                  <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                                    ASSIGNED
                                  </span>
                                ) : !job.completedAt ? (
                                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                                    OPEN
                                  </span>
                                ) : null}
                                {/* Admin Status Badge */}
                                {currentView === 'admin' && job.status && job.status !== 'active' && (
                                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                    job.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                                    job.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                    job.status === 'filled' ? 'bg-purple-100 text-purple-700' :
                                    'bg-gray-100 text-gray-700'
                                  }`}>
                                    {job.status.toUpperCase()}
                                  </span>
                                )}
                                {(() =>{
                                  const jobDate = new Date(job.date);const now = new Date();const hoursUntil = (jobDate - now) / (1000 * 60 * 60);if (hoursUntil > 0 && hoursUntil < 48) {
                                    return (
                                      <span className="px-2 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold animate-pulse">
                                        URGENT
                                      </span>
                                    );}
                                  return null;})()}
                              </div>
                              <div className="flex flex-wrap gap-4 text-gray-600">
                                <div className="flex items-center gap-2">
                                  <MapPin className="w-4 h-4" />
                                  <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(job.location)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm hover:text-indigo-600 hover:underline flex items-center gap-1"
                                  >
                                    {job.location}
                                    <ExternalLink className="w-3 h-3" />
                                  </a>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Calendar className="w-4 h-4" />
                                  <span className="text-sm">
                                    {job.skillsRequired === 'PCA Services' ? 'Start: ' : ''}{new Date(job.date).toLocaleDateString()}
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-sm">
                                    {job.skillsRequired === 'PCA Services'
                                      ? `${job.hoursPerWeek} hours/week`
                                      : `${job.hours} hours authorized`}
                                  </span>
                                </div>
                                {job.skillsRequired === 'PCA Services' && job.daysPerWeek && job.daysPerWeek.length > 0 && (
                                  <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm">{job.daysPerWeek.join(',')}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-indigo-600">{job.payRate}</div>
                              <div className="text-sm text-gray-500">Pay Rate</div>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-gray-700 mb-2">{job.description}</p>
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-700">Service Type:</span>
                                <span className="text-sm text-indigo-600 font-semibold">{job.skillsRequired}</span>
                              </div>
                              {job.skillsRequired === 'PCA Services' && job.nonskilledServices && job.nonskilledServices.length > 0 && (
                                <div className="mt-2">
                                  <span className="text-sm font-medium text-gray-700">Services Needed:</span>
                                  <div className="flex flex-wrap gap-2 mt-1">
                                    {job.nonskilledServices.map(service =>(
                                      <span key={service} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs border border-blue-200">
                                        {service}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                              {job.referralSource && currentView === 'admin' && (
                                <div className="flex items-center gap-2">
                                  <span className="text-sm font-medium text-gray-700">Referral Source:</span>
                                  <span className="text-sm text-gray-600">{job.referralSource}</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {currentView === 'admin' && job.signedUp.length > 0 && (
                            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                              <h3 className="font-semibold text-gray-800 mb-2">Signed Up Employees:</h3>
                              <div className="flex flex-wrap gap-2">
                                {job.signedUp.map(emp =>(
                                  <span key={emp.id} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                                    {emp.name}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {currentView === 'admin' && (
                            <>
                              <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                  <MessageSquare className="w-4 h-4 text-blue-600" />
                                  <span className="text-sm text-blue-800">
                                    SMS sent to {employees.filter(emp => emp.role !== 'Admin' && canEmployeePerformService(emp,job.skillsRequired,job.location)).length} qualified employee(s)
                                  </span>
                                </div>
                              </div>
                              <div className="space-y-2">
                                {!job.completedAt && (
                                  <button
                                    onClick={() => setSelectedJobDetails(job)}
                                    className="w-full px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                                  >
                                    📋 View Details & Add Visits
                                  </button>
                                )}

                                {/* Admin Status Control */}
                                <div className="mb-3">
                                  <label className="block text-sm font-medium text-gray-700 mb-2">Job Status</label>
                                  <select
                                    value={job.status || 'active'}
                                    onChange={(e) => handleAdminChangeJobStatus(job.id,e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                  >
                                    <option value="active">Active</option>
                                    <option value="paused">Paused</option>
                                    <option value="cancelled">Cancelled</option>
                                    <option value="filled">Filled</option>
                                  </select>
                                </div>

                                {/* Interested Employees Section */}
                                {(job.interestedEmployees && job.interestedEmployees.length > 0) && (
                                  <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                      <span className="text-blue-600">⭐</span>
                                      {job.interestedEmployees.length} Employee(s) Interested
                                    </h3>
                                    <div className="space-y-3">
                                      {job.interestedEmployees.map(emp =>(
                                        <div key={emp.id} className="bg-white p-3 rounded border border-blue-200">
                                          <div className="flex items-start justify-between">
                                            <div className="flex-1">
                                              <p className="font-semibold text-gray-800">{emp.name}</p>
                                              <p className="text-sm text-gray-600">{emp.role} • {emp.phone}</p>
                                              <p className="text-sm text-gray-600">{emp.email}</p>
                                              <p className="text-xs text-gray-500 mt-1">Certs: {emp.certifications}</p>
                                              {emp.specializations && emp.specializations.length > 0 && (
                                                <p className="text-xs text-green-600 mt-1">Specializations: {emp.specializations.join(',')}</p>
                                              )}
                                              <p className="text-xs text-gray-400 mt-1">Interested: {new Date(emp.interestedAt).toLocaleString()}</p>
                                            </div>
                                            <div className="flex gap-2">
                                              <a
                                                href={`tel:${emp.phone}`}
                                                className="px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200 rounded text-sm font-medium"
                                              >
                                                📞 Call
                                              </a>
                                              <button
                                                onClick={() => handleAdminAssignJob(job.id,emp.id)}
                                                className="px-3 py-1 bg-indigo-600 text-white hover:bg-indigo-700 rounded text-sm font-medium"
                                              >
                                                ✓ Assign
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {/* Assigned Employee Section */}
                                {job.assignedTo && (
                                  <div className="mb-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                    <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                                      <span className="text-purple-600">✓</span>
                                      Assigned to:
                                    </h3>
                                    <div className="bg-white p-3 rounded border border-purple-200">
                                      <p className="font-semibold text-gray-800">{job.assignedTo.name}</p>
                                      <p className="text-sm text-gray-600">{job.assignedTo.phone}</p>
                                      <p className="text-sm text-gray-600">{job.assignedTo.email}</p>
                                      <p className="text-xs text-gray-400 mt-1">Assigned: {new Date(job.assignedTo.assignedAt).toLocaleString()}</p>
                                    </div>
                                  </div>
                                )}

                                <div className="flex gap-3">
                                  {job.completedAt ? (
                                    <button
                                      onClick={() => handleUnarchiveJob(job.id)}
                                      className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                                    >
                                      ↩️ Reopen
                                    </button>
                                  ) : (
                                    <button
                                      onClick={() => handleArchiveJob(job.id)}
                                      className="flex-1 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                                    >
                                      ✓ Mark Complete
                                    </button>
                                  )}
                                  <button
                                    onClick={() => handleDeleteJob(job.id)}
                                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
                                  >
                                    🗑️ Delete
                                  </button>
                                </div>
                              </div>
                            </>
                          )}

                          {currentView === 'employee' && (
                            <div className="flex gap-3">
                              {isAssigned ? (
                                <div className="flex-1 px-6 py-3 bg-purple-100 text-purple-800 rounded-lg font-medium flex items-center justify-center gap-2">
                                  <Check className="w-5 h-5" />
                                  ✓ Assigned to You
                                </div>
                              ) : !isInterested ? (
                                <button
                                  onClick={() => handleExpressInterest(job.id)}
                                  className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium flex items-center justify-center gap-2"
                                >
                                  ⭐ I'm Interested
                                </button>
                              ) : (
                                <>
                                  <div className="flex-1 px-6 py-3 bg-blue-100 text-blue-800 rounded-lg font-medium flex items-center justify-center gap-2">
                                    <Check className="w-5 h-5" />
                                    Interest Expressed
                                  </div>
                                  <button
                                    onClick={() => handleWithdrawInterest(job.id)}
                                    className="px-6 py-3 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors font-medium"
                                  >
                                    Withdraw
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      );})}
                    </>
                    );})()}
                </div>
                </>
                )}
              </div>
            </div>
          );}

        const root = ReactDOM.createRoot(document.getElementById('root'));root.render(<HealthCareJobBoard />);
