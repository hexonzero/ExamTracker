# Govt Exam Tracker

A free study tracker for Indian government exam aspirants. Pick your exam, and the tracker shows only the subjects and topics that exam needs, builds a daily plan, and keeps track of your progress until exam day.

There is no sign-up, no server and no ads. Everything runs in your browser and your progress is saved on your own device.

**Created by hexonzero**

---

## What it does

### 1. Choose your exam
Search from 80 government exams in one dropdown. Type a name such as "SBI PO", "RRB NTPC" or "BPSC", or use the popular-exam buttons.

| Family | Exams |
|---|---|
| SSC | 7 (CGL, CHSL, MTS, CPO, GD, Stenographer, JE) |
| Banking and insurance | 16 (IBPS, SBI, RBI, NABARD, SEBI, LIC and more) |
| Railways | 6 (NTPC, Group D, ALP, JE, RPF) |
| UPSC | 4 (Civil Services, CAPF, EPFO, ESE) |
| Defence | 5 (NDA, CDS, AFCAT, Agniveer, Coast Guard) |
| Teaching | 5 (CTET, State TET, KVS/NVS, DSSSB) |
| State PSC | 20 |
| Police and state services | 7 |
| Other central exams | 10 |

If your exam is not listed, type its name and add it as a custom exam.

### 2. Exam-specific syllabus tracker
Each exam loads only its own subjects and topics. For example, RBI Grade B gets Economic and Social Issues and Finance and Management, while UPSC gets Ethics and CSAT. Every topic has three states:

- Not started
- Working on it
- Completed

You can filter by status and add your own topics to any subject.

### 3. Daily plan (Today tab)
- Three study tasks a day, picked from topics you are already working on first, then the next unstarted ones
- Daily habits: practice questions, revision, current affairs and a Sunday mock
- A 50 minute focus and 10 minute break timer
- A pace card telling you how many topics to finish each week to reach your exam date
- A "Revise today" list that brings completed topics back after 1, 3, 7 and 21 days

### 4. Plan tab
- Set your exam date and see a countdown
- Learn, Practise, and Mock and revise phases with real dates
- Subjects with the least progress listed first
- Preparation tips for your exam family

### 5. Progress tab
- Weekly summary: topics completed, focus blocks, tasks ticked and mocks, each compared with last week
- Activity chart for the week and a projected finish time at your current pace
- 12 achievement badges

### 6. Mocks tab
- Log mock test scores, with optional section-wise marks
- Cutoff target with a starting guess for your exam family that you can edit
- Score trend chart with a target line, and the average of your last 5 mocks against the target
- Section-wise averages that show your weakest subject

### 7. Streak
A day counter with a 28 day activity grid. Any task, topic update, focus block or mock keeps your streak alive.

### 8. Print tab
A printable weekly timetable and a full syllabus checklist based on your current progress. Use "Save as PDF" in the print window to keep a copy.

### 9. Backup tab
Copy your data as text and paste it on another device to restore everything. You can also reset a single exam.

### Other
- Light and dark mode with an animated switch
- Works on phones and desktops
- Track several exams at once; each keeps its own progress and can be removed from the home screen

---

## Run it

Open `index.html` in any modern browser. No build step or install is needed.

### Host it on GitHub Pages
1. Put `index.html`, `style.css` and `app.js` in the root of a repository.
2. Open Settings, then Pages.
3. Choose "Deploy from a branch", select `main` and the root folder, and save.
4. Your site will be at `https://<your-username>.github.io/<repository-name>/`.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell |
| `style.css` | All styles, including dark mode, print and animation |
| `app.js` | Exam list, syllabus data and all app logic |

## Your data

- Progress is stored in your browser's `localStorage`, under the key `gx1`.
- Nothing is sent to any server.
- Clearing your browser data or using a different browser or device means starting fresh, so use the Backup tab to move or keep a copy.
- Fonts load from Google Fonts. Without an internet connection the page falls back to your system fonts and still works.

## Important notes

- Syllabus topics and cutoff targets are general guides, not official data. Cutoffs change every year by category and shift. Always check the official notification and last year's cutoff for your exam.
- Revision reminders only apply to topics marked Completed after this feature was added.

## Customise

- To add or edit exams, change the `E` list near the top of `app.js`. Each line is `family|Exam name|subject codes`.
- To add or edit subjects and topics, change the `M` object in `app.js`. Add `~` and family letters after a topic to show it only for those families.
- To change colours, edit the variables at the top of `style.css`.

---

Created by hexonzero.
