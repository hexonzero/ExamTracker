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

### Several exams at once
You can prepare for more than one exam. The home screen lists every exam you track with its progress, days left and revisions due, soonest exam first. Inside an exam, use the exam switcher at the top to jump to another one, or "All exams" to add a new one. Each exam keeps its own syllabus progress, mocks, date and target. The streak and focus timer are shared across all exams.

### 2. Exam-specific syllabus tracker
Each exam loads only its own subjects and topics. For example, RBI Grade B gets Economic and Social Issues and Finance and Management, while UPSC gets Ethics and CSAT. Every topic has three states:

- Not started
- Working on it
- Completed

You can filter by status and add your own topics to any subject.

### 3. Daily plan (Today tab)
- Three study tasks a day, one from each of up to three subjects in rotation; within a subject, a topic you are already working on comes first, then the next unstarted one
- Daily habits: practice questions, revision, current affairs and a Sunday mock
- A 50 minute focus and 10 minute break timer
- A pace card telling you how many topics to finish each week to reach your exam date
- A "Revise today" list that brings completed topics back after 1, 3, 7 and 21 days. Each review is scheduled from your previous review, so a late review does not trigger the next ones at once
- A backup reminder after two weeks without a backup

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
Copy your data as text or download it as a file, then restore it on another device. Restoring checks the data and replaces everything on that device, so it asks you to tap twice. You can also reset a single exam.

### Other
- Light and dark mode with an animated switch
- Works on phones and desktops
- Track several exams at once; each keeps its own progress and can be removed from the home screen

---


## Your data

- Progress is stored in your browser's `localStorage`, under the key `gx1` (data version 2). Older data is upgraded automatically on first load.
- Topic progress is saved against the topic name, so you can reorder or add topics in `M` without moving anyone's progress. Renaming a topic does reset its progress.
- Nothing is sent to any server.
- Clearing your browser data or using a different browser or device means starting fresh, so use the Backup tab to move or keep a copy.
- Fonts load from Google Fonts. Without an internet connection the page falls back to your system fonts and still works.

## Security and hosting

The app has no server, no accounts and no third-party scripts. Your data never leaves the browser.

**What the code does**
- `index.html` sets a Content Security Policy: only `app.js` from your own site may run as script, there are no inline scripts or event handlers, and the page may not make network requests (`connect-src 'none'`). Even if bad markup got into the page, it could not run code or send data out.
- Saved data is checked against a fixed shape every time the page loads and every time a backup is restored. Pasted backups cannot add scripts or unexpected fields.
- All user-typed text is HTML-escaped when shown.
- Styles are allowed inline (`'unsafe-inline'` for `style-src`) because the UI sets bar widths and colours that way. Styles cannot run code.
- The page refuses to be shown inside another site's frame, and it sends no referrer.

**Limits of GitHub Pages**
GitHub Pages cannot send HTTP headers, so `frame-ancestors`, HSTS and `X-Content-Type-Options` cannot be set from this repository. If you need them, put Cloudflare (free plan) in front of the domain and add them as response headers.

**Checklist for GitHub and your domain**
1. Turn on two-factor authentication for your GitHub account.
2. Repository Settings, Pages: set the custom domain, then tick **Enforce HTTPS**.
3. Verify the domain: account Settings, Pages, **Add a domain**, then add the TXT record GitHub shows (`_github-pages-challenge-<your-username>`). This stops anyone else from claiming your domain on GitHub.
4. In your DNS, point the subdomain at GitHub with a CNAME record to `<your-username>.github.io`. Do not use a wildcard record. If you ever delete the site, delete the DNS record too, so nobody can take over a dangling name.
5. Add a CAA record allowing `letsencrypt.org`, which is the certificate authority GitHub Pages uses. Turn on DNSSEC if your registrar offers it.
6. Protect the `main` branch (require a pull request, block force pushes) and turn on private vulnerability reporting and secret scanning under Settings, Code security.
7. Never commit keys or passwords. This project needs none.
8. After any change to `index.html`, open the site with the browser console open. A blocked resource is reported as a Content Security Policy error.

See `SECURITY.md` for how to report a problem.

## Important notes

- Syllabus topics and cutoff targets are general guides, not official data. Cutoffs change every year by category and shift. Always check the official notification and last year's cutoff for your exam.
- Revision reminders only apply to topics marked Completed after this feature was added.

## Customise

- To add or edit exams, change the `E` list near the top of `app.js`. Each line is `family|Exam name|subject codes`. An unknown subject code is reported in the browser console on load.
- To add or edit subjects and topics, change the `M` object in `app.js`. Add `~` and family letters after a topic to show it only for those families.
- To change colours, edit the variables at the top of `style.css`.

---

Created by hexonzero.
