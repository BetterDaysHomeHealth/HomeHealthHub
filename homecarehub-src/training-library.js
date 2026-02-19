// Comprehensive Training Library - 1 hour each, monthly requirement
// Virginia in-home healthcare compliance and staff development

const TRAINING_LIBRARY = [
  // === HIPAA & PRIVACY (12 trainings) ===
  {
    id: 'hipaa-101',
    title: 'HIPAA 101: Privacy Fundamentals',
    description: 'Understanding patient privacy rights, protected health information (PHI), and your obligations.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'hipaa-security',
    title: 'HIPAA Security Rule Deep Dive',
    description: 'Electronic PHI protection, access controls, encryption, and audit logs in home healthcare.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'hipaa-breaches',
    title: 'HIPAA Breach Notification & Response',
    description: 'What constitutes a breach, notification requirements, and incident response procedures.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'hipaa-telehealth',
    title: 'HIPAA Compliance in Telehealth',
    description: 'Secure video conferencing, remote patient monitoring, and documentation best practices.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'patient-rights',
    title: 'Patient Rights Under HIPAA',
    description: 'Access to records, amendment requests, accounting of disclosures, and patient complaints.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'ehr-security',
    title: 'EHR Security & Password Management',
    description: 'Secure login practices, password policies, two-factor authentication, and session management.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'social-media-hipaa',
    title: 'Social Media & HIPAA Compliance',
    description: 'Sharing patient stories safely, protecting PHI on personal accounts, and social media policies.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'device-security',
    title: 'Mobile Device Security in Healthcare',
    description: 'Securing phones/tablets, remote wipe, app permissions, and BYOD policies.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'vendor-compliance',
    title: 'HIPAA Compliance with Vendors & Contractors',
    description: 'Business associate agreements, vendor management, and third-party risk assessment.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },
  {
    id: 'hipaa-documentation',
    title: 'Proper Documentation & HIPAA',
    description: 'Creating compliant records, amendments, corrections, and legal defensibility.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'genetic-info',
    title: 'GINA & Genetic Information Protection',
    description: 'Genetic privacy rights, family medical history, and employment protections.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'state-privacy',
    title: 'Virginia State Privacy Laws Beyond HIPAA',
    description: 'State-specific requirements, local regulations, and additional patient protections.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },

  // === INFECTION CONTROL & SAFETY (15 trainings) ===
  {
    id: 'hand-hygiene',
    title: 'Hand Hygiene Fundamentals',
    description: 'Proper handwashing, sanitizer use, and preventing cross-contamination.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Beginner'
  },
  {
    id: 'ppe-compliance',
    title: 'PPE Use & Compliance',
    description: 'Donning/doffing, selection, fit-testing, and disposal of personal protective equipment.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Beginner'
  },
  {
    id: 'bloodborne-pathogens',
    title: 'Bloodborne Pathogen Standard',
    description: 'OSHA regulations, exposure control, sharps safety, and post-exposure procedures.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'mrsa-control',
    title: 'MRSA Prevention & Management',
    description: 'Identification, transmission routes, precautions, and patient communication.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'cdiff-prevention',
    title: 'C. difficile Prevention',
    description: 'Spore transmission, environmental cleaning, antibiotic stewardship, and isolation.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'covid-19',
    title: 'COVID-19 & Respiratory Precautions',
    description: 'Current protocols, vaccination, testing, and home-based isolation procedures.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'wound-care-prevention',
    title: 'Wound Care & Infection Prevention',
    description: 'Sterile technique, dressing changes, infection signs, and documentation.',
    duration: 60,
    roles: ['RN', 'PT', 'OT'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'catheter-care',
    title: 'Catheter Care & CAUTI Prevention',
    description: 'Central line maintenance, urinary catheter care, and infection prevention.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'environmental-cleaning',
    title: 'Environmental Cleaning & Disinfection',
    description: 'Home sanitization, high-touch surfaces, cleaning products, and schedules.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Beginner'
  },
  {
    id: 'sharps-safety',
    title: 'Sharps Safety & Needle Stick Prevention',
    description: 'Safe injection practices, sharps containers, incident reporting, and first aid.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'foodborne-illness',
    title: 'Foodborne Illness Prevention',
    description: 'Food safety, kitchen hygiene, temperature control, and patient education.',
    duration: 60,
    roles: ['CNA', 'PCA', 'HHA', 'RN'],
    category: 'Safety',
    difficulty: 'Beginner'
  },
  {
    id: 'latex-allergy',
    title: 'Latex Allergy & Anaphylaxis Response',
    description: 'Identification, alternatives, emergency response, and patient education.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'infection-transmission',
    title: 'Disease Transmission Routes & Prevention',
    description: 'Airborne, droplet, contact transmission and specific precautions.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'immunizations',
    title: 'Immunizations & Staff Protection',
    description: 'Required vaccines, schedules, titers, exemptions, and documentation.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Beginner'
  },

  // === PATIENT CARE & DIGNITY (14 trainings) ===
  {
    id: 'patient-dignity',
    title: 'Patient Dignity & Respect',
    description: 'Person-centered care, cultural competence, autonomy, and maintaining privacy.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Beginner'
  },
  {
    id: 'communication-skills',
    title: 'Effective Communication in Healthcare',
    description: 'Active listening, barriers, cultural sensitivity, and therapeutic presence.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Beginner'
  },
  {
    id: 'dementia-care',
    title: 'Dementia Care & Communication',
    description: 'Behavior management, validation therapy, environmental modification, and caregiver support.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Intermediate'
  },
  {
    id: 'fall-prevention',
    title: 'Fall Prevention & Safety',
    description: 'Risk assessment, environmental hazards, assistive devices, and incident reporting.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'pressure-ulcer',
    title: 'Pressure Ulcer Prevention & Management',
    description: 'Risk factors, staging, prevention strategies, and treatment protocols.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'pain-management',
    title: 'Pain Assessment & Management',
    description: 'Pain scales, pharmacological/non-pharmacological interventions, and monitoring.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Intermediate'
  },
  {
    id: 'activities-daily-living',
    title: 'Assistance with Activities of Daily Living',
    description: 'Bathing, grooming, dressing, toileting, and maintaining independence.',
    duration: 60,
    roles: ['CNA', 'PCA', 'HHA', 'RN'],
    category: 'Care',
    difficulty: 'Beginner'
  },
  {
    id: 'mobility-assistance',
    title: 'Safe Patient Mobility & Transfer',
    description: 'Transfer techniques, assistive devices, body mechanics, and fall prevention.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'mental-health-support',
    title: 'Mental Health Support in Home Care',
    description: 'Depression, anxiety recognition, suicide risk, resource connection, and boundaries.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Intermediate'
  },
  {
    id: 'medication-safety',
    title: 'Medication Safety & Administration',
    description: 'Five rights, storage, disposal, interactions, side effects, and documentation.',
    duration: 60,
    roles: ['RN', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'nutrition-hydration',
    title: 'Nutrition & Hydration Support',
    description: 'Dietary needs, feeding assistance, dysphagia precautions, and monitoring.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Intermediate'
  },
  {
    id: 'end-of-life',
    title: 'End-of-Life Care & Comfort',
    description: 'Symptom management, advance directives, family support, and spiritual care.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Advanced'
  },
  {
    id: 'grief-support',
    title: 'Grief & Loss Support',
    description: 'Grief stages, bereavement support, self-care, and when to refer.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Intermediate'
  },
  {
    id: 'cultural-competence',
    title: 'Cultural Competence in Healthcare',
    description: 'Religion, traditions, communication styles, and avoiding assumptions.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Beginner'
  },

  // === ABUSE & NEGLECT (6 trainings) ===
  {
    id: 'elder-abuse-recognition',
    title: 'Elder Abuse Recognition & Reporting',
    description: 'Types of abuse, warning signs, documentation, and mandatory reporting.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'child-abuse-reporting',
    title: 'Child Abuse Recognition & Reporting',
    description: 'Physical/emotional abuse signs, Virginia reporting requirements, and support.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'financial-exploitation',
    title: 'Financial Exploitation Prevention',
    description: 'Red flags, vulnerable populations, reporting, and financial safeguards.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'domestic-violence',
    title: 'Domestic Violence Awareness & Response',
    description: 'Screening, trauma-informed care, safety planning, and resource connection.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Care',
    difficulty: 'Intermediate'
  },
  {
    id: 'mandatory-reporting',
    title: 'Mandatory Reporting in Virginia',
    description: 'Legal obligations, timelines, documentation, and immunity protection.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'workplace-violence',
    title: 'Workplace Violence Prevention',
    description: 'Risk assessment, de-escalation, personal safety, and incident response.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },

  // === DOCUMENTATION & COMPLIANCE (12 trainings) ===
  {
    id: 'medical-record-keeping',
    title: 'Medical Record Keeping Essentials',
    description: 'Legibility, timeliness, accuracy, amendments, and retention requirements.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'soap-notes',
    title: 'SOAP Notes & Clinical Documentation',
    description: 'Subjective/objective/assessment/plan format and clinical decision-making.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'billing-compliance',
    title: 'Billing & Coding Compliance',
    description: 'Accurate coding, documentation to support billing, fraud prevention, and audits.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },
  {
    id: 'incident-reporting',
    title: 'Incident Reporting & Investigation',
    description: 'When/how to report, documentation, root cause analysis, and corrective action.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'home-safety-assessment',
    title: 'Home Safety Assessment & Documentation',
    description: 'Environmental hazards, modifications, accessibility, and documentation.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'care-plan-development',
    title: 'Care Plan Development & Implementation',
    description: 'Patient goals, interventions, monitoring, and plan updates.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'infection-control-audit',
    title: 'Infection Control Audits & Compliance',
    description: 'Self-assessments, checklists, documentation review, and improvement plans.',
    duration: 60,
    roles: ['RN', 'PT', 'OT'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },
  {
    id: 'quality-assurance',
    title: 'Quality Assurance & Patient Outcomes',
    description: 'Metrics, performance monitoring, patient satisfaction, and continuous improvement.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },
  {
    id: 'adverse-event-reporting',
    title: 'Adverse Event Reporting & Management',
    description: 'Patient safety events, root cause analysis, disclosure, and prevention.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },
  {
    id: 'consent-forms',
    title: 'Informed Consent & Documentation',
    description: 'Capacity assessment, disclosure, voluntary agreement, and capacity challenges.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'state-regulations',
    title: 'Virginia State Healthcare Regulations',
    description: 'State board rules, licensing, standards of practice, and compliance.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },
  {
    id: 'survey-readiness',
    title: 'Survey Readiness & Licensing Compliance',
    description: 'Preparation for surveys, common deficiencies, corrective actions, and documentation.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },

  // === SPECIALIZED CLINICAL (14 trainings) ===
  {
    id: 'diabetes-management',
    title: 'Diabetes Management in Home Care',
    description: 'Blood glucose monitoring, insulin, hypoglycemia/hyperglycemia, and patient education.',
    duration: 60,
    roles: ['RN', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease & Cardiac Care',
    description: 'CHF, hypertension, arrhythmia, angina, medication, and exercise.',
    duration: 60,
    roles: ['RN', 'PT', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'pulmonary-disease',
    title: 'Chronic Pulmonary Disease Management',
    description: 'COPD, asthma, oxygen therapy, breathing exercises, and exacerbation management.',
    duration: 60,
    roles: ['RN', 'PT', 'SLP', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'stroke-recovery',
    title: 'Stroke Recovery & Rehabilitation',
    description: 'Physical therapy, speech therapy, swallowing, cognitive rehabilitation, and psychosocial support.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'cancer-care',
    title: 'Cancer Care & Symptom Management',
    description: 'Chemotherapy side effects, radiation effects, pain, nausea, and supportive care.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'arthritis-osteoporosis',
    title: 'Arthritis & Osteoporosis Management',
    description: 'Joint protection, exercise, fall prevention, medication, and lifestyle modification.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Intermediate'
  },
  {
    id: 'kidney-disease',
    title: 'Chronic Kidney Disease Management',
    description: 'Dialysis, nutrition, fluid restriction, medication, and monitoring.',
    duration: 60,
    roles: ['RN', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'respiratory-therapy',
    title: 'Oxygen Therapy & Respiratory Support',
    description: 'Oxygen delivery systems, safety, troubleshooting, and patient education.',
    duration: 60,
    roles: ['RN', 'PT', 'SLP'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'feeding-tubes',
    title: 'Feeding Tube Care & Management',
    description: 'Types, insertion, care, troubleshooting, and nutrition.',
    duration: 60,
    roles: ['RN', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'tracheostomy-care',
    title: 'Tracheostomy Care & Management',
    description: 'Care procedures, suctioning, tube changes, and emergency response.',
    duration: 60,
    roles: ['RN', 'PT', 'SLP', 'CNA'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },
  {
    id: 'ostomy-care',
    title: 'Ostomy Care & Pouch Management',
    description: 'Types, appliance changes, skin care, and patient adaptation.',
    duration: 60,
    roles: ['RN', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Intermediate'
  },
  {
    id: 'urinary-continence',
    title: 'Urinary Incontinence Management',
    description: 'Assessment, pelvic floor exercises, strategies, and catheter care.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Intermediate'
  },
  {
    id: 'bowel-management',
    title: 'Bowel Management & Constipation Prevention',
    description: 'Assessment, diet, fluids, mobility, and medication management.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'CNA', 'PCA'],
    category: 'Clinical',
    difficulty: 'Intermediate'
  },
  {
    id: 'wound-management-advanced',
    title: 'Advanced Wound Care & Staging',
    description: 'Assessment, dressing selection, drainage management, and healing tracking.',
    duration: 60,
    roles: ['RN', 'PT', 'OT'],
    category: 'Clinical',
    difficulty: 'Advanced'
  },

  // === PROFESSIONAL DEVELOPMENT (10 trainings) ===
  {
    id: 'conflict-resolution',
    title: 'Conflict Resolution & Team Communication',
    description: 'Active listening, assertiveness, problem-solving, and workplace relationships.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Professional',
    difficulty: 'Intermediate'
  },
  {
    id: 'stress-burnout',
    title: 'Stress Management & Burnout Prevention',
    description: 'Recognizing burnout, coping strategies, self-care, and support resources.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Professional',
    difficulty: 'Beginner'
  },
  {
    id: 'time-management',
    title: 'Time Management & Organization',
    description: 'Prioritization, scheduling, documentation efficiency, and goal-setting.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Professional',
    difficulty: 'Beginner'
  },
  {
    id: 'critical-thinking',
    title: 'Critical Thinking & Clinical Reasoning',
    description: 'Problem-solving, clinical decision-making, and evidence-based practice.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Professional',
    difficulty: 'Advanced'
  },
  {
    id: 'leadership-skills',
    title: 'Leadership Skills in Healthcare',
    description: 'Leading by example, delegation, motivation, and professional integrity.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Professional',
    difficulty: 'Advanced'
  },
  {
    id: 'ethical-practice',
    title: 'Ethical Practice & Decision-Making',
    description: 'Professional ethics, moral dilemmas, and navigating ethical conflicts.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA'],
    category: 'Professional',
    difficulty: 'Intermediate'
  },
  {
    id: 'professional-boundaries',
    title: 'Professional Boundaries & Scope of Practice',
    description: 'Role limitations, delegation, supervision, and staying within scope.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Professional',
    difficulty: 'Intermediate'
  },
  {
    id: 'continuing-education',
    title: 'Continuing Education & Professional Growth',
    description: 'Learning pathways, certifications, career development, and staying current.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Professional',
    difficulty: 'Beginner'
  },
  {
    id: 'difficult-conversations',
    title: 'Difficult Conversations in Healthcare',
    description: 'Bad news delivery, boundary-setting, complaints, and de-escalation.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Professional',
    difficulty: 'Intermediate'
  },
  {
    id: 'diversity-inclusion',
    title: 'Diversity, Equity & Inclusion in Healthcare',
    description: 'Unconscious bias, cultural humility, and creating inclusive environments.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Professional',
    difficulty: 'Intermediate'
  },

  // === REGULATORY & QUALITY (8 trainings) ===
  {
    id: 'cdc-guidelines',
    title: 'CDC Guidelines & Best Practices',
    description: 'Current CDC recommendations, infection control, and evidence-based updates.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'osha-compliance',
    title: 'OSHA Compliance in Home Healthcare',
    description: 'Occupational safety, ergonomics, hazard communication, and record-keeping.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'accessibility-ada',
    title: 'ADA Compliance & Accessibility',
    description: 'Reasonable accommodations, accessibility standards, and disability rights.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Compliance',
    difficulty: 'Beginner'
  },
  {
    id: 'emergency-preparedness',
    title: 'Emergency Preparedness & Response',
    description: 'Natural disasters, power outages, home evacuation, and contingency plans.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP', 'CNA', 'PCA', 'HHA'],
    category: 'Safety',
    difficulty: 'Intermediate'
  },
  {
    id: 'credentialing-verification',
    title: 'Credentialing & Verification of Employment',
    description: 'License verification, background checks, reference checking, and compliance.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Intermediate'
  },
  {
    id: 'performance-evaluation',
    title: 'Performance Evaluation & Feedback',
    description: 'Evaluation processes, constructive feedback, improvement plans, and documentation.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Professional',
    difficulty: 'Advanced'
  },
  {
    id: 'quality-improvement',
    title: 'Quality Improvement Methodologies',
    description: 'PDSA cycles, root cause analysis, statistical process control, and metrics.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Professional',
    difficulty: 'Advanced'
  },
  {
    id: 'risk-management',
    title: 'Risk Management & Loss Prevention',
    description: 'Risk assessment, mitigation, incident investigation, and claims management.',
    duration: 60,
    roles: ['RN', 'PT', 'OT', 'SLP'],
    category: 'Compliance',
    difficulty: 'Advanced'
  },
];

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = TRAINING_LIBRARY;
}
