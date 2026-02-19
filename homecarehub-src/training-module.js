// Training Module System for HomeHealthHub
// Role-specific compliance trainings with timed content and quizzes

const TRAINING_COURSES = {
  // Available for ALL roles
  common: [
    {
      id: 'hipaa-101',
      title: 'HIPAA 101: Patient Privacy Basics',
      description: 'Required annual training on HIPAA compliance',
      roles: ['RN', 'PT', 'OT', 'CNA', 'PCA'],
      duration: 45,
      content: {
        type: 'reading',
        text: `
HIPAA (Health Insurance Portability and Accountability Act) Overview

HIPAA is a federal law enacted in 1996 that protects patient privacy and the security of health information. As a home health care worker in Virginia, understanding and complying with HIPAA is not optional—it's a legal requirement of your employment.

What is HIPAA?
HIPAA stands for the Health Insurance Portability and Accountability Act. It sets national standards for protecting patient health information. The law has several key rules that apply directly to your work as a home health aide:

1. The Privacy Rule — controls how patient information can be used and shared
2. The Security Rule — sets standards for protecting electronic health records
3. The Breach Notification Rule — requires notification if patient data is compromised

Why HIPAA Matters in Home Care
Unlike hospital settings where information is centralized, home care workers have patient information scattered across:
- Paper charts in homes
- Text messages with supervisors
- Phone calls with family members
- Social media conversations
- Casual workplace discussions

This makes HIPAA even MORE important in home health. One careless conversation can violate federal law.

Protected Health Information (PHI)
PHI is ANY information in a patient's medical record or health plan that can identify them. This includes:
- Names and addresses
- Social Security numbers
- Medical conditions and diagnoses
- Medication lists
- Test results
- Photos or videos
- Phone numbers and email addresses
- Hospital and appointment records
- Insurance information
- Emergency contact information

Even seemingly innocent information becomes PHI when it identifies a specific patient.

Your HIPAA Responsibilities
As a home health aide, you must:

1. NEVER discuss patient information outside of work
   - Not with family, friends, or other patients
   - Not on social media
   - Not in elevators, breakrooms, or public areas
   - Not even with other employees unless job-related

2. NEVER leave patient records visible
   - Keep charts and documents secure when not in use
   - Don't leave them on seats or counters
   - Lock them in your car or bag
   - Never photograph medical records

3. NEVER access patient data unless needed for care
   - Don't read files "just to be informed"
   - Don't check on patients you're not assigned to
   - Don't look up coworker information out of curiosity

4. Report all breaches immediately
   - If you accidentally share information
   - If you see someone else violating HIPAA
   - If patient information is lost or stolen
   - Tell your supervisor RIGHT AWAY—don't cover it up

5. Use only approved devices for patient information
   - Only use company-approved phones for patient calls
   - Don't use personal email for patient communication
   - Don't text patient information unless approved

6. Secure your work environment
   - Close doors during personal care
   - Don't discuss patients in front of family members
   - Don't leave computers unlocked
   - Log out of systems when done

Real-World HIPAA Violations and Consequences

VIOLATION #1: The Text
Sarah texts her friend: "My patient Jane has diabetes and her A1C is 8.5. She never takes her meds."
- Jane's diabetes diagnosis = PHI
- Jane's lab result = PHI
- Even though Sarah was just venting, this is a violation
- Potential fine: $100-$50,000
- Potential punishment: Job loss, legal action

VIOLATION #2: The Social Media Post
Marcus posts on Facebook: "Just finished helping out Mrs. Chen. She's recovering well from her surgery at 42 Maple Street."
- Patient name = PHI
- Patient's medical condition = PHI
- Patient's address = PHI
- This violates HIPAA even though it sounds positive
- Potential consequences: Firing, civil lawsuit, criminal charges

VIOLATION #3: The Careless Chart
Jennifer leaves a patient's medical chart on the passenger seat of her car while she runs to the grocery store. Someone breaks into her car.
- Unauthorized access to PHI
- Breach of confidentiality
- Jennifer must notify the patient and the company
- Investigation will determine if federal breach notification rules apply

VIOLATION #4: The Curious Coworker
David accesses the patient information system to check on his sister's neighbor out of curiosity, even though he's not assigned to her care.
- Unauthorized access to PHI
- Not job-related
- Violation even if he doesn't share the information
- Could result in immediate termination and prosecution

Virginia State Requirements
Virginia law specifically requires:
- All home health workers must complete HIPAA training
- Initial training BEFORE starting work
- Annual refresher training (at least once per year)
- Documentation of completion in your personnel file
- Understanding that violations are grounds for immediate termination

Penalties for HIPAA Violations
The penalties for HIPAA violations are serious:

Civil Penalties:
- $100-$50,000 per violation
- Violations can add up quickly (each improper disclosure = separate violation)
- If you willfully violate: $10,000-$50,000 per violation

Criminal Penalties:
- Up to 1 year in prison
- Up to $50,000 fine
- Up to 10 years in prison if commercial advantage or malice involved
- Up to $250,000 fine for criminal violations

Employment Consequences:
- Immediate termination (most common)
- Permanent mark on employment record
- Difficulty finding future healthcare employment
- Loss of references

Patient Consequences:
- Identity theft and fraud
- Medical identity theft (fraudulent healthcare in their name)
- Emotional distress and loss of trust
- Right to sue you personally for damages

How to Protect Patient Privacy in Your Daily Work

At the Patient's Home:
- Ask permission before touching medical documents
- Close bedroom doors during personal care
- Don't discuss patient conditions in front of visitors
- Keep your voice low when discussing medical information
- If family members ask about treatment, refer them to the RN

In Transit:
- Keep patient information secured in your locked car
- Don't leave papers on seats or dashboards
- Don't discuss patients while driving with others
- Cover up documents if you must carry them

At the Office:
- Don't share patient details in break rooms
- Don't discuss patients with other employees unless job-related
- Keep your computer screen private
- Log out before leaving your desk
- Don't access patient records out of curiosity

In Conversations:
- Use patient initials instead of full names ("J.S." not "John Smith")
- Refer to "my patient" not the patient's name
- Don't share diagnosis, medications, or conditions
- If you slip up, immediately correct yourself
- Remember: even "just between us" is still a violation

With Technology:
- Never email patient information insecurely
- Don't text patient details
- Don't take photos of patients or medical records
- Don't video call with visible patient information behind you
- Password-protect your devices

What to Do if a Breach Occurs
If you accidentally breach HIPAA:

1. STOP immediately
2. TELL YOUR SUPERVISOR AT ONCE
   - Don't hide it hoping it goes away
   - Honesty is better than a cover-up
3. Document what happened
4. Cooperate with the investigation
5. Help prevent it from happening again

Your supervisor will:
- Notify the company's privacy officer
- Determine if it's a reportable breach
- Notify the patient if required by law
- Document the incident
- Provide additional training if needed

If you WITNESS a breach:
- You are legally required to report it
- Report to your supervisor or compliance officer
- You are protected from retaliation for reporting violations
- Staying silent is also a violation

Key Takeaways to Remember
1. Patient information is NOT yours to share
2. HIPAA violations carry serious legal consequences
3. "Just a quick text" or "between us" still counts as a violation
4. Your supervisor wants to help, not punish—report breaches immediately
5. Privacy is a right; protecting it is your legal obligation
6. When in doubt, ask your supervisor
7. You can lose your job and face legal action for violations
8. EVERY piece of patient information is protected, no matter how minor it seems
9. The patient owns their information; you're just temporarily responsible for it
10. Staying HIPAA-compliant is staying employed

Federal Resources
For questions about HIPAA, you can contact:
- HHS Office for Civil Rights: 1-800-368-1019
- Your company's Privacy Officer
- Your state health department

Remember: HIPAA compliance protects patients, your employer, and YOU.
        `,
        minReadTime: 900 // 15 minutes in seconds
      },
      quiz: [
        {
          id: 'q1',
          question: 'What does HIPAA stand for?',
          options: [
            'Health Insurance Portability and Accountability Act',
            'Home Insurance Protection Act',
            'Health Information Public Access Agreement'
          ],
          correct: 0
        },
        {
          id: 'q2',
          question: 'Who can you share patient medical information with?',
          options: [
            'Your family members if they ask',
            'The care team, insurance, or in emergencies',
            'Social media for updates'
          ],
          correct: 1
        },
        {
          id: 'q3',
          question: 'What is the minimum fine for a HIPAA violation?',
          options: [
            '$10',
            '$100',
            '$50,000'
          ],
          correct: 1
        },
        {
          id: 'q4',
          question: 'How often must you complete HIPAA training?',
          options: [
            'Once ever',
            'Every 12 months',
            'Every week'
          ],
          correct: 1
        },
        {
          id: 'q5',
          question: 'What should you do if you accidentally see patient info you shouldn\'t?',
          options: [
            'Ignore it and move on',
            'Tell a coworker to ignore it',
            'Report it to your supervisor immediately'
          ],
          correct: 2
        }
      ],
      passScore: 80
    },
    {
      id: 'hand-hygiene',
      title: 'Infection Control: Hand Hygiene',
      description: 'Prevent infection transmission through proper hand washing',
      roles: ['RN', 'PT', 'OT', 'CNA', 'PCA'],
      duration: 30,
      content: {
        type: 'video',
        videoUrl: 'https://www.youtube.com/embed/3PmkebX7v2M', // CDC hand hygiene (sample)
        description: 'Watch this 10-minute CDC video on proper hand hygiene. Video playback speed is locked to 1x normal speed.'
      },
      quiz: [
        {
          id: 'q1',
          question: 'How long should you wash your hands for?',
          options: ['5 seconds', '20 seconds', '2 minutes'],
          correct: 1
        },
        {
          id: 'q2',
          question: 'When should you wear gloves?',
          options: [
            'Always instead of hand washing',
            'When there is contact with body fluids or non-intact skin',
            'Only on Mondays'
          ],
          correct: 1
        },
        {
          id: 'q3',
          question: 'Can hand sanitizer replace hand washing?',
          options: [
            'Yes, always',
            'Only when hands are visibly soiled',
            'No, never'
          ],
          correct: 1
        },
        {
          id: 'q4',
          question: 'What is a key step in hand washing?',
          options: [
            'Wet, soap, scrub for 20 sec, rinse, dry',
            'Just splash water',
            'Use only cold water'
          ],
          correct: 0
        }
      ],
      passScore: 75
    }
  ],

  // RN/PT/OT specific
  skilled: [
    {
      id: 'wound-care-basics',
      title: 'Wound Care Fundamentals (RN/PT)',
      description: 'Wound assessment, dressing changes, infection prevention',
      roles: ['RN', 'PT'],
      duration: 45,
      content: {
        type: 'reading',
        text: `
Wound Care Basics for Home Health

Classification:
- Stage 1: Redness, skin intact
- Stage 2: Blistering, partial thickness loss
- Stage 3: Full thickness, visible tissue
- Stage 4: Bone/muscle exposed

Assessment (EVERY visit):
- Size (length x width x depth)
- Exudate (amount, type, odor)
- Tissue type (healthy, slough, eschar)
- Pain level
- Signs of infection

Dressing Changes:
1. Assess the wound
2. Document findings
3. Clean per protocol
4. Apply new sterile dressing
5. Document care provided

Red Flags (Report immediately):
- Increased redness, swelling, warmth
- Purulent (pus-like) exudate
- Fever, chills
- Rapid increase in wound size
- Foul odor
- Patient reports increased pain

Virginia Requirements:
- RN must assess wounds
- PT can assist per protocol
- All findings documented
- Physician notified of changes
        `,
        minReadTime: 900
      },
      quiz: [
        {
          id: 'q1',
          question: 'A Stage 3 wound involves:',
          options: [
            'Redness only',
            'Full thickness loss, visible tissue',
            'Bone exposure'
          ],
          correct: 1
        },
        {
          id: 'q2',
          question: 'What should you assess at every wound care visit?',
          options: [
            'Only the dressing',
            'Size, exudate, tissue type, pain, infection signs',
            'Nothing, just change dressing'
          ],
          correct: 1
        },
        {
          id: 'q3',
          question: 'Which is NOT a red flag for infection?',
          options: [
            'Increased redness',
            'Pink healthy tissue appearing',
            'Purulent exudate'
          ],
          correct: 1
        },
        {
          id: 'q4',
          question: 'You notice a wound increased 2cm in size in 2 days. What do you do?',
          options: [
            'Wait and see',
            'Report to physician immediately',
            'Just change dressing'
          ],
          correct: 1
        }
      ],
      passScore: 80
    }
  ],

  // CNA/PCA specific
  nonskilled: [
    {
      id: 'patient-dignity',
      title: 'Patient Dignity & Respect',
      description: 'Providing compassionate care while maintaining privacy',
      roles: ['CNA', 'PCA'],
      duration: 30,
      content: {
        type: 'reading',
        text: `
Patient Dignity in Home Care

What is Dignity?
Treating patients with respect, honoring their wishes, protecting their privacy.

Your Responsibilities:
1. Knock before entering private areas
2. Close doors during personal care
3. Cover patient with blanket during bathing
4. Don't discuss patient issues with family/friends
5. Listen to patient preferences
6. Call patients by preferred names
7. Explain what you're doing before you do it

Common Dignity Issues to Avoid:
❌ Forcing activities patient refuses
❌ Making comments about patient's body
❌ Discussing patient with coworkers
❌ Using patronizing language
❌ Ignoring patient's wishes
❌ Exposing patient during care

Do This Instead:
✅ Ask for consent before care
✅ Explain procedures clearly
✅ Use respectful language
✅ Respect patient choices
✅ Maintain confidentiality
✅ Be genuinely kind

Virginia Standard:
All home health aides must treat patients with dignity and respect at all times. This is NOT optional—it's required by law.

Remember: You're in THEIR home. Show respect.
        `,
        minReadTime: 600
      },
      quiz: [
        {
          id: 'q1',
          question: 'Before entering a patient\'s bedroom, you should:',
          options: [
            'Just walk in',
            'Knock and wait for response',
            'Call out their name'
          ],
          correct: 1
        },
        {
          id: 'q2',
          question: 'A patient refuses to take a bath today. You should:',
          options: [
            'Force them, it\'s your job',
            'Respect their choice, ask if they need help with hygiene',
            'Come back tomorrow'
          ],
          correct: 1
        },
        {
          id: 'q3',
          question: 'Is it okay to discuss a patient\'s condition with family members?',
          options: [
            'Yes, they\'re family',
            'Only if patient gives permission or staff approves',
            'No, never'
          ],
          correct: 1
        },
        {
          id: 'q4',
          question: 'During bathing, you should:',
          options: [
            'Leave door open for ventilation',
            'Keep patient covered except area being washed',
            'Expose entire body to save time'
          ],
          correct: 1
        }
      ],
      passScore: 75
    }
  ]
};

// Training Component
function TrainingPortal({ currentUser, trainings, setTrainings, trainingCompletions, setTrainingCompletions }) {
  const [selectedTraining, setSelectedTraining] = React.useState(null);
  const [readingStartTime, setReadingStartTime] = React.useState(null);
  const [quizAnswers, setQuizAnswers] = React.useState({});
  const [quizSubmitted, setQuizSubmitted] = React.useState(false);
  const [videoStartTime, setVideoStartTime] = React.useState(null);
  const [videoWatchTime, setVideoWatchTime] = React.useState(0);

  // Get trainings available for this user's role
  const availableTrainings = React.useMemo(() => {
    let courses = [...TRAINING_COURSES.common];
    if (currentUser.role === 'RN' || currentUser.role === 'PT' || currentUser.role === 'OT') {
      courses = [...courses, ...TRAINING_COURSES.skilled];
    }
    if (currentUser.role === 'CNA' || currentUser.role === 'PCA') {
      courses = [...courses, ...TRAINING_COURSES.nonskilled];
    }
    return courses;
  }, [currentUser.role]);

  // Check if training is completed
  const isCompleted = (trainingId) => {
    return trainingCompletions.some(c => c.userId === currentUser.id && c.trainingId === trainingId && c.completed);
  };

  // Handle quiz answer selection
  const handleQuizAnswer = (questionId, answerIndex) => {
    if (!quizSubmitted) {
      setQuizAnswers(prev => ({
        ...prev,
        [questionId]: answerIndex
      }));
    }
  };

  // Submit quiz
  const handleQuizSubmit = () => {
    if (selectedTraining && selectedTraining.quiz) {
      const correctCount = selectedTraining.quiz.filter(q =>
        quizAnswers[q.id] === q.correct
      ).length;
      const score = (correctCount / selectedTraining.quiz.length) * 100;

      if (score >= selectedTraining.passScore) {
        // Passed!
        const completion = {
          userId: currentUser.id,
          trainingId: selectedTraining.id,
          completed: true,
          score: Math.round(score),
          completedAt: new Date().toISOString()
        };
        setTrainingCompletions(prev => [...prev, completion]);
        localStorage.setItem('training-completions', JSON.stringify([...trainingCompletions, completion]));
        setQuizSubmitted(true);
      } else {
        alert(`Score: ${Math.round(score)}%. You need ${selectedTraining.passScore}% to pass. Try again!`);
        setQuizAnswers({});
      }
    }
  };

  // Start training
  const handleStartTraining = (training) => {
    setSelectedTraining(training);
    setQuizAnswers({});
    setQuizSubmitted(false);
    if (training.content.type === 'reading') {
      setReadingStartTime(Date.now());
    } else if (training.content.type === 'video') {
      setVideoStartTime(Date.now());
    }
  };

  if (selectedTraining) {
    const training = selectedTraining;
    const completed = isCompleted(training.id);
    const readTimeRemaining = training.content.minReadTime ? Math.max(0, training.content.minReadTime - Math.floor((Date.now() - readingStartTime) / 1000)) : 0;
    const canTakQuiz = !training.content.minReadTime || readTimeRemaining <= 0;

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <button
          onClick={() => setSelectedTraining(null)}
          className="mb-4 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
        >
          ← Back to Trainings
        </button>

        <div className="bg-white rounded-lg shadow p-8 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{training.title}</h1>
          <p className="text-gray-600 mb-6">{training.description}</p>

          {completed ? (
            <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded mb-6">
              ✓ Completed on {new Date(trainingCompletions.find(c => c.trainingId === training.id).completedAt).toLocaleDateString()}
            </div>
          ) : null}

          {/* Reading Content */}
          {training.content.type === 'reading' && (
            <div>
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-blue-800">
                  ⏱ Minimum reading time: {Math.ceil(training.content.minReadTime / 60)} minutes
                  {readingStartTime && !canTakQuiz && (
                    <span className="ml-4 font-semibold">Time remaining: {Math.ceil(readTimeRemaining / 60)} min</span>
                  )}
                </p>
              </div>
              <div className="prose prose-sm max-w-none bg-gray-50 p-6 rounded mb-6 whitespace-pre-wrap text-sm text-gray-700">
                {training.content.text}
              </div>
            </div>
          )}

          {/* Video Content */}
          {training.content.type === 'video' && (
            <div className="mb-6">
              <iframe
                width="100%"
                height="400"
                src={training.content.videoUrl}
                title={training.title}
                frameBorder="0"
                allowFullScreen
                className="rounded mb-4"
              ></iframe>
              <p className="text-gray-600 text-sm">{training.content.description}</p>
            </div>
          )}

          {/* Quiz */}
          {training.quiz && canTakQuiz && !completed && (
            <div className="bg-gray-50 p-6 rounded">
              <h2 className="text-xl font-bold mb-6">Knowledge Check</h2>
              {training.quiz.map((question, idx) => (
                <div key={question.id} className="mb-6 pb-6 border-b last:border-b-0">
                  <p className="font-semibold mb-3">{idx + 1}. {question.question}</p>
                  <div className="space-y-2">
                    {question.options.map((option, optIdx) => (
                      <label key={optIdx} className="flex items-center p-2 border rounded hover:bg-blue-50 cursor-pointer">
                        <input
                          type="radio"
                          name={question.id}
                          value={optIdx}
                          checked={quizAnswers[question.id] === optIdx}
                          onChange={() => handleQuizAnswer(question.id, optIdx)}
                          disabled={quizSubmitted}
                          className="mr-3"
                        />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              <button
                onClick={handleQuizSubmit}
                disabled={quizSubmitted || Object.keys(quizAnswers).length < training.quiz.length}
                className="w-full px-6 py-3 bg-green-600 text-white rounded font-semibold hover:bg-green-700 disabled:bg-gray-400"
              >
                {quizSubmitted ? '✓ Quiz Completed' : 'Submit Quiz'}
              </button>
            </div>
          )}

          {!canTakQuiz && !completed && (
            <div className="p-4 bg-yellow-100 border border-yellow-400 text-yellow-800 rounded">
              Complete the {Math.ceil(training.content.minReadTime / 60)}-minute reading before taking the quiz.
            </div>
          )}
        </div>
      </div>
    );
  }

  // List of trainings
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-2 text-gray-800">Training & Compliance</h1>
      <p className="text-gray-600 mb-8">Virginia law requires 1 hour of continuing education per month</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {availableTrainings.map(training => {
          const completed = isCompleted(training.id);
          return (
            <div key={training.id} className={`p-6 rounded-lg shadow ${completed ? 'bg-green-50 border-2 border-green-500' : 'bg-white border border-gray-200'}`}>
              <h3 className="text-xl font-bold mb-2">{training.title}</h3>
              <p className="text-gray-600 mb-4">{training.description}</p>
              <p className="text-sm text-gray-500 mb-4">Duration: ~{training.duration} minutes</p>
              {completed ? (
                <div className="p-2 bg-green-200 text-green-800 rounded text-center font-semibold">
                  ✓ Completed
                </div>
              ) : (
                <button
                  onClick={() => handleStartTraining(training)}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold"
                >
                  Start Training
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
