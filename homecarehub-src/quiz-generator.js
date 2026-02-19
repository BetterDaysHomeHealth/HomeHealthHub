// Quiz Generator - Creates unique 5-question quizzes per training module
function generateQuiz(training) {
  const { id, title, description, category, difficulty } = training;
  
  // Seeded randomization based on training ID for consistent questions
  let seed = 0;
  for (let i = 0; i < id.length; i++) {
    seed += id.charCodeAt(i);
  }
  
  const seededRandom = (min, max) => {
    seed = (seed * 9301 + 49297) % 233280;
    return min + Math.floor((seed / 233280) * (max - min));
  };

  const questions = [];

  // Q1: Definition/Concept question
  const definitionalQuestions = [
    {
      question: `What is the primary focus of ${title.split(':')[0]}?`,
      options: [
        description,
        'A certification program',
        'A record-keeping system',
        'An emergency response protocol'
      ]
    },
    {
      question: `Which best describes the goal of this ${category} training?`,
      options: [
        'Ensuring compliance and competent practice',
        'Replacing professional judgment',
        'Reducing documentation requirements',
        'Eliminating need for supervision'
      ]
    },
    {
      question: `${title} primarily addresses which of the following?`,
      options: [
        description.split(' ').slice(0, 5).join(' ') + '...',
        'Financial management',
        'Scheduling staff',
        'Marketing services'
      ]
    },
    {
      question: `The purpose of continuing education in ${category.toLowerCase()} is to:`,
      options: [
        'Maintain and improve professional competence',
        'Satisfy time requirements',
        'Reduce patient liability',
        'Replace initial training'
      ]
    }
  ];

  // Q2: Compliance/Virginia requirement question
  const complianceQuestions = [
    {
      question: 'How often does Virginia require continuing education for home healthcare staff?',
      options: [
        'Monthly (minimum 1 hour)',
        'Quarterly',
        'Annually',
        'Every 2 years'
      ]
    },
    {
      question: 'What is the minimum continuing education requirement in Virginia per month?',
      options: [
        '1 hour',
        '2 hours',
        '4 hours',
        '8 hours'
      ]
    },
    {
      question: 'Completing monthly continuing education helps ensure:',
      options: [
        'Professional competence and regulatory compliance',
        'Higher salary',
        'Automatic promotion',
        'Reduced patient load'
      ]
    },
    {
      question: 'Documentation of continuing education completion is required for:',
      options: [
        'State surveys, audits, and quality assurance',
        'Agency profit margins',
        'Employee entertainment',
        'Insurance company marketing'
      ]
    }
  ];

  // Q3: Role-specific application question
  const applicationQuestions = [
    {
      question: `In your ${category} responsibilities, what should you prioritize?`,
      options: [
        'Patient safety and best practices',
        'Speed of task completion',
        'Convenience for staff',
        'Minimizing documentation'
      ]
    },
    {
      question: 'When uncertain about a practice related to this training, you should:',
      options: [
        'Consult your supervisor or healthcare provider',
        'Proceed using your best guess',
        'Ask the patient',
        'Skip that part of care'
      ]
    },
    {
      question: `Applying ${title} in home settings requires:`,
      options: [
        'Professional judgment and adaptation to home environment',
        'Following hospital protocols exactly',
        'Only documented procedures',
        'Patient preference exclusively'
      ]
    },
    {
      question: 'Professional accountability for this training means:',
      options: [
        'You are responsible for competent practice in this area',
        'Only supervisors are accountable',
        'The agency assumes all responsibility',
        'Accountability depends on staffing levels'
      ]
    }
  ];

  // Q4: Safety/Ethics question
  const safetyQuestions = [
    {
      question: 'What is your primary responsibility when implementing this training area?',
      options: [
        'Ensuring patient safety and quality care',
        'Completing tasks quickly',
        'Following patient preferences exclusively',
        'Minimizing agency liability'
      ]
    },
    {
      question: 'If you notice something concerning related to this training, you should:',
      options: [
        'Report it to your supervisor and/or healthcare provider',
        'Document it privately',
        'Tell the patient',
        'Wait to see if it resolves'
      ]
    },
    {
      question: 'Professional ethics in this area requires:',
      options: [
        'Acting in the patient\'s best interest with honesty and integrity',
        'Following orders without question',
        'Prioritizing convenience',
        'Maintaining appearance only'
      ]
    },
    {
      question: 'When a patient\'s preference conflicts with safety in this training area, you should:',
      options: [
        'Discuss the concern with the healthcare provider',
        'Follow the patient\'s preference',
        'Make a unilateral decision',
        'Skip addressing the issue'
      ]
    }
  ];

  // Q5: Continuous improvement/learning question
  const improvementQuestions = [
    {
      question: 'Beyond completing required training, professional excellence involves:',
      options: [
        'Continuous learning and seeking to improve your skills',
        'Doing only what is required',
        'Avoiding new procedures',
        'Following one way indefinitely'
      ]
    },
    {
      question: 'Healthcare practices change and evolve. Your role is to:',
      options: [
        'Stay current through continuing education and asking questions',
        'Maintain practices unchanged',
        'Avoid new information',
        'Change practices without consultation'
      ]
    },
    {
      question: 'If a colleague seems to not understand this training area, you should:',
      options: [
        'Mentor them professionally or alert your supervisor',
        'Let them figure it out alone',
        'Correct them harshly',
        'Ignore the issue'
      ]
    },
    {
      question: 'Your commitment to this training demonstrates:',
      options: [
        'Professional dedication to patient care and safety',
        'Forced compliance',
        'Organizational requirement only',
        'Temporary knowledge'
      ]
    }
  ];

  // Select questions based on seeded randomization
  const q1Index = seededRandom(0, definitionalQuestions.length);
  const q2Index = seededRandom(0, complianceQuestions.length);
  const q3Index = seededRandom(0, applicationQuestions.length);
  const q4Index = seededRandom(0, safetyQuestions.length);
  const q5Index = seededRandom(0, improvementQuestions.length);

  // Generate 10 questions (2 from each category, with randomization)
  const selectedQuestions = [
    definitionalQuestions[q1Index],
    definitionalQuestions[(q1Index + 1) % definitionalQuestions.length],
    complianceQuestions[q2Index],
    complianceQuestions[(q2Index + 1) % complianceQuestions.length],
    applicationQuestions[q3Index],
    applicationQuestions[(q3Index + 1) % applicationQuestions.length],
    safetyQuestions[q4Index],
    safetyQuestions[(q4Index + 1) % safetyQuestions.length],
    improvementQuestions[q5Index],
    improvementQuestions[(q5Index + 1) % improvementQuestions.length]
  ];

  // Add unique IDs and randomize answer order
  return selectedQuestions.map((q, idx) => {
    const options = [...q.options];
    
    // Fisher-Yates shuffle with seed
    for (let i = options.length - 1; i > 0; i--) {
      const j = seededRandom(0, i + 1);
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    // Find which index the correct answer is now at
    const correctIndex = options.indexOf(q.options[0]);
    
    return {
      id: `q${idx + 1}-${id}`,
      question: q.question,
      options: options,
      correct: correctIndex
    };
  });
}

// Predefined quizzes for specific trainings that need custom content
const CUSTOM_QUIZZES = {
  'hipaa-101': [
    {
      id: 'hipaa-q1',
      question: 'What does PHI stand for?',
      options: ['Protected Health Information', 'Personal Health Information', 'Patient Help Instructions', 'Privacy Health Initiative'],
      correct: 0
    },
    {
      id: 'hipaa-q2',
      question: 'Under HIPAA, what is the minimum necessary standard?',
      options: ['Use and disclose only the minimum PHI needed to accomplish intended purpose', 'Share all patient information', 'Use paper records only', 'Avoid documentation entirely'],
      correct: 0
    },
    {
      id: 'hipaa-q3',
      question: 'Which of the following is NOT considered PHI?',
      options: ['A patient\'s social security number', 'De-identified health data with no identifying information', 'Medical record number', 'Health condition or treatment'],
      correct: 1
    },
    {
      id: 'hipaa-q4',
      question: 'You overhear a conversation about a patient at a coffee shop. What should you do?',
      options: ['Say nothing and continue listening', 'Move away and never acknowledge the conversation', 'Report the violator to HIPAA office', 'Join the conversation to correct misinformation'],
      correct: 1
    },
    {
      id: 'hipaa-q5',
      question: 'What is the first thing you should do if you suspect a HIPAA breach?',
      options: ['Report it to your supervisor immediately', 'Investigate it privately', 'Delete any affected records', 'Tell the patient directly'],
      correct: 0
    },
    {
      id: 'hipaa-q6',
      question: 'HIPAA violations can result in penalties up to:',
      options: ['$50,000 per violation', '$1,000 per violation', '$10,000 per violation', 'Warnings only'],
      correct: 0
    },
    {
      id: 'hipaa-q7',
      question: 'Patients have the right to:',
      options: ['All of the above', 'Access their health information', 'Request amendments to their records', 'Receive an accounting of disclosures'],
      correct: 0
    },
    {
      id: 'hipaa-q8',
      question: 'Can you share patient information with family members without authorization?',
      options: ['No, written patient authorization is required', 'Yes, if they live in the same house', 'Yes, if they call and sound authorized', 'Yes, emergency situations only'],
      correct: 0
    },
    {
      id: 'hipaa-q9',
      question: 'What should you do if you forget to log out of the patient care system?',
      options: ['Go back immediately and log out', 'Have someone else log out for you', 'Leave it for IT to handle', 'It\'s fine; systems auto-lock'],
      correct: 0
    },
    {
      id: 'hipaa-q10',
      question: 'Why is the Privacy Rule important in home healthcare?',
      options: ['To protect vulnerable patients in their personal spaces', 'To reduce paperwork', 'To limit patient access to information', 'To avoid fines only'],
      correct: 0
    }
  ],
  'hand-hygiene': [
    {
      id: 'hygiene-q1',
      question: 'How long should you wash your hands with soap and water?',
      options: ['At least 20 seconds', '5 seconds', 'Until they look clean', 'As long as water is running'],
      correct: 0
    },
    {
      id: 'hygiene-q2',
      question: 'When is hand sanitizer NOT appropriate?',
      options: ['When hands are visibly soiled', 'Before patient contact', 'After using the restroom', 'Before eating'],
      correct: 0
    },
    {
      id: 'hygiene-q3',
      question: 'You must clean your hands after which situation?',
      options: ['All of the above', 'Patient contact', 'Body fluid exposure', 'Touching patient surroundings'],
      correct: 0
    },
    {
      id: 'hygiene-q4',
      question: 'What is the most effective way to prevent infection transmission?',
      options: ['Hand hygiene', 'Gloves alone', 'Bleach spray', 'Avoiding patients'],
      correct: 0
    },
    {
      id: 'hygiene-q5',
      question: 'Hand hygiene must be performed even:',
      options: ['After removing gloves', 'If you didn\'t touch the patient', 'If you\'re wearing multiple glove layers', 'Only once per shift'],
      correct: 0
    },
    {
      id: 'hygiene-q6',
      question: 'What should you NOT do when washing hands?',
      options: ['Use the same faucet handle to turn off the faucet after washing', 'Clean under fingernails', 'Wash between fingers', 'Rub for at least 20 seconds'],
      correct: 0
    },
    {
      id: 'hygiene-q7',
      question: 'When entering a patient\'s home, your first action should be:',
      options: ['Perform hand hygiene', 'Begin patient care', 'Put on gloves', 'Review the chart'],
      correct: 0
    },
    {
      id: 'hygiene-q8',
      question: 'Hand sanitizer works best on:',
      options: ['Clean hands with no visible dirt or body fluids', 'Visibly soiled hands', 'After using the toilet', 'Before eating only'],
      correct: 0
    },
    {
      id: 'hygiene-q9',
      question: 'What is a sign that hand hygiene is inadequate?',
      options: ['Frequent cases of infection among patients', 'Soft hands', 'Using hand sanitizer frequently', 'Washing hands too much'],
      correct: 0
    },
    {
      id: 'hygiene-q10',
      question: 'Gloves are:',
      options: ['Not a substitute for hand hygiene; you must wash hands before and after', 'A complete replacement for handwashing', 'Only needed for visibly soiled hands', 'Required only in hospitals'],
      correct: 0
    }
  ],
  'patient-dignity': [
    {
      id: 'dignity-q1',
      question: 'What is the most fundamental aspect of dignified care?',
      options: ['Treating the patient as a unique individual with rights and autonomy', 'Following all doctor orders exactly', 'Completing tasks quickly', 'Minimizing patient involvement'],
      correct: 0
    },
    {
      id: 'dignity-q2',
      question: 'When assisting with personal care, you should:',
      options: ['Explain what you\'re doing, expose only necessary body parts, maintain privacy', 'Work as quickly as possible', 'Ignore patient preferences', 'Comment on physical changes'],
      correct: 0
    },
    {
      id: 'dignity-q3',
      question: 'Which statement demonstrates a dignity violation?',
      options: ['Speaking about the patient as if they\'re not there', 'Respecting their cultural preferences', 'Offering choices', 'Maintaining privacy'],
      correct: 0
    },
    {
      id: 'dignity-q4',
      question: 'Preserving patient independence means:',
      options: ['Encouraging self-care even if slower', 'Doing everything for them', 'Rushing them through activities', 'Assuming they can\'t participate'],
      correct: 0
    },
    {
      id: 'dignity-q5',
      question: 'Cultural competence in dignified care requires:',
      options: ['Asking about and honoring cultural preferences', 'Assuming all patients want same care', 'Imposing your own values', 'Ignoring cultural differences'],
      correct: 0
    },
    {
      id: 'dignity-q6',
      question: 'What should you do if a patient refuses care?',
      options: ['Respect their choice and explore their concerns', 'Force the care for their own good', 'Document and leave', 'Convince them immediately'],
      correct: 0
    },
    {
      id: 'dignity-q7',
      question: 'Using infantilizing language like "sweetie" or "good girl" is:',
      options: ['A dignity violation even if well-intended', 'Acceptable for elderly patients', 'Helpful for confused patients', 'Shows warmth and care'],
      correct: 0
    },
    {
      id: 'dignity-q8',
      question: 'How should you address a patient?',
      options: ['Use their preferred name and title unless told otherwise', 'Always use first names', 'Use nicknames if you\'re comfortable', 'Use medical terminology only'],
      correct: 0
    },
    {
      id: 'dignity-q9',
      question: 'If a patient\'s choice seems unsafe, you should:',
      options: ['Discuss concerns professionally with the healthcare provider', 'Override the patient\'s choice', 'Ignore the safety concern', 'Make the decision for them'],
      correct: 0
    },
    {
      id: 'dignity-q10',
      question: 'Dignity in home care means:',
      options: ['Honoring the patient\'s autonomy while maintaining safety in their personal space', 'Controlling all patient decisions', 'Prioritizing efficiency over patient preferences', 'Providing care only your way'],
      correct: 0
    }
  ],
  'fall-prevention': [
    {
      id: 'fall-q1',
      question: 'What is the leading cause of unintentional injury in adults 65+?',
      options: ['Falls', 'Motor vehicle accidents', 'Infections', 'Medication errors'],
      correct: 0
    },
    {
      id: 'fall-q2',
      question: 'Which is a high fall risk factor?',
      options: ['All of the above', 'History of falls', 'Medication effects', 'Balance problems'],
      correct: 0
    },
    {
      id: 'fall-q3',
      question: 'If a patient falls, your first action should be:',
      options: ['DO NOT move the patient; assess safety and call for help', 'Immediately lift them up', 'Have them stand and walk', 'Document after they leave'],
      correct: 0
    },
    {
      id: 'fall-q4',
      question: 'Which home modification reduces fall risk?',
      options: ['All of the above', 'Removing throw rugs', 'Installing grab bars', 'Improving lighting'],
      correct: 0
    },
    {
      id: 'fall-q5',
      question: 'To prevent orthostatic hypotension-related falls, you should:',
      options: ['Have patient sit up, wait 1-2 min, stand, wait 1-2 min before walking', 'Help them stand immediately', 'Restrict fluids', 'Avoid exercise'],
      correct: 0
    },
    {
      id: 'fall-q6',
      question: 'Medications that increase fall risk include:',
      options: ['Sedatives, blood pressure medications, and pain medications', 'Vitamins only', 'Antibiotics only', 'All medications equally'],
      correct: 0
    },
    {
      id: 'fall-q7',
      question: 'What should bathroom flooring include to prevent falls?',
      options: ['Non-slip mat in shower/tub and a dry floor', 'Slippery tile for easy cleaning', 'Carpeting throughout', 'No modifications needed'],
      correct: 0
    },
    {
      id: 'fall-q8',
      question: 'After a fall, what should you document?',
      options: ['Time, location, what the patient was doing, position found, and how the fall was discovered', 'Just that a fall occurred', 'Only injuries visible', 'Nothing until the provider visits'],
      correct: 0
    },
    {
      id: 'fall-q9',
      question: 'An assistive device like a walker should:',
      options: ['Fit properly and be used correctly with patient training', 'Be optional for the patient', 'Not be necessary in homes', 'Be replaced frequently'],
      correct: 0
    },
    {
      id: 'fall-q10',
      question: 'What is the primary goal of fall prevention?',
      options: ['Allow patients independence while keeping them safe', 'Eliminate all patient movement', 'Restrict activity completely', 'Use restraints always'],
      correct: 0
    }
  ]
};

// Main function to get quiz
function getQuiz(training) {
  if (CUSTOM_QUIZZES[training.id]) {
    return CUSTOM_QUIZZES[training.id];
  }
  return generateQuiz(training);
}
