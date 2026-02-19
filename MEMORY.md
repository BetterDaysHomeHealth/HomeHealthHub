# MEMORY.md

## Setup & Integration
- Telegram integration set up and live (pairing code: J3SCRNXW) — took significant time to get running
- Web search (Brave API) not yet configured — needs API key setup
- Working on making this persistent memory system so I remember conversations across sessions

## Projects & Context

### HomeCareHub - Training Portal MVP (ACTIVE)
**Status:** Building locally, testing at http://localhost:8000/homecarehub-src/

**Just Completed:**
- Created `training-module.js` with 4 sample trainings
  - HIPAA 101 (all roles)
  - Hand Hygiene (all roles)
  - Wound Care (RN/PT only)
  - Patient Dignity (CNA/PCA only)
- Each training has: timed reading, video, quiz, pass score tracking
- Integrated into app.js (Training tab added to nav)
- localStorage tracking for completion

**Architecture:**
- `/homecarehub-src/index.html` (clean HTML shell)
- `/homecarehub-src/app.js` (690KB React app, includes all state + logic)
- `/homecarehub-src/training-module.js` (18KB training content)
- Python http.server on port 8000

**Next Steps:**
1. Test Training tab in Safari (hard refresh: Cmd+Shift+R, or clear cache)
2. Build out more training modules (copy/paste the pattern in training-module.js)
3. Deploy (Railway or Vercel)
4. SMS activation (Twilio integration)

## Preferences & Style
- David prefers direct, practical advice (no fluff)
- Concise answers unless more detail requested

## Important Notes
*To be updated as we go*
