const M={
QA:["Quantitative aptitude","Number system, HCF & LCM|Simplification & approximation|Percentage|Ratio, proportion & partnership|Average & ages|Profit, loss & discount|Simple & compound interest|Time & work, pipes|Time, speed & distance|Mixture & alligation|Algebra~SRDXO|Geometry~SRDXO|Mensuration~SRDXO|Trigonometry & heights~SDX|Number series & quadratic equations~B|Data interpretation~BXS"],
RS:["Reasoning","Analogy, classification & series|Coding-decoding|Blood relations & direction sense|Syllogism & Venn diagrams|Order, ranking & arrangement|Inequality~B|Puzzles & seating arrangement~B|Input-output & data sufficiency~B|Non-verbal & figure reasoning~SRDXO"],
EN:["English","Reading comprehension|Cloze test & fillers|Error spotting|Sentence improvement~SDXBT|Para jumbles|Vocabulary: synonyms, antonyms, idioms|Grammar rules|Descriptive writing: essay, letter, précis~BU"],
GA:["Static GK & general awareness","History|Geography|Polity & constitution|Indian economy basics|General science|Books, awards, summits & capitals|Important days, organisations & sports"],
CA:["Current affairs","National: last 6 months|International: last 6 months|Awards, appointments & sports|Government schemes & policies|Economy, RBI policy & budget~BUPX|Monthly revision"],
CS:["Computer awareness","Fundamentals & hardware|MS Office & internet|Networking & security|Shortcuts & terminology"],
BK:["Banking & financial awareness","Banking structure & history|RBI functions & monetary policy|Financial markets & instruments|Payment systems & digital banking|Insurance, pension & schemes|Banking terms & recent regulations"],
ESI:["Economic & social issues","Growth, development & planning|Inflation, poverty & unemployment|Globalisation, trade & WTO|Demography & social structure|Reports, indices & committees|Government schemes"],
FM:["Finance & management","Financial system & institutions|Financial markets|Money, banking & monetary policy|Corporate finance basics|Management & leadership"],
ARD:["Agriculture & rural development","Indian agriculture & cropping|Rural credit & NABARD|MSP & farm schemes|Rural development programmes|Climate & sustainable farming"],
STAT:["Statistics & finance (Tier 2)","Statistics basics|Probability & data analysis|Finance & economics|Comprehension & written skills"],
HIS:["History & culture","Ancient India|Medieval India|Modern India & freedom struggle|Art & culture|World history"],
GEO:["Geography","Physical geography|Indian geography|Climate & monsoon|Resources, agriculture & industry|Maps & places in news"],
POL:["Polity & governance","Constitution & amendments|Fundamental rights & DPSP|Parliament & executive|Judiciary|Local government & federalism|Constitutional bodies & governance"],
ECO:["Economy","National income & growth|Banking & fiscal policy|Budget & taxation|Inflation & trade|Agriculture & industry"],
ENV:["Environment & ecology","Ecology & biodiversity|Climate change & conventions|Protected areas & species|Pollution & policies"],
SCT:["Science & technology","Biology & health|Space & defence tech|IT, AI & biotech|Energy & nuclear|Everyday science"],
ETH:["Ethics & essay (Mains)","Ethics & human interface|Attitude & aptitude|Emotional intelligence|Probity & governance|Case studies|Essay writing practice|Answer writing practice"],
CSAT:["CSAT / aptitude","Reading comprehension|Logical reasoning|Basic numeracy|Decision making|Data interpretation"],
SCI:["General science","Physics: mechanics, heat, light|Physics: electricity & modern|Chemistry: matter & reactions|Chemistry: everyday & organic|Biology: cell, genetics, human body|Biology: plants & diseases"],
MATHD:["Mathematics","Algebra & matrices|Trigonometry|Calculus & coordinate geometry|Geometry & mensuration|Statistics & probability"],
TECH:["Technical / engineering","Basic concepts & fundamentals|Core subject topics|Previous papers & numericals|Standards & practical knowledge"],
CDP:["Child development & pedagogy","Child development & learning|Inclusive education|Learning theories|Teaching methods & assessment|Classroom management"],
LNG:["Language & comprehension","Reading comprehension|Grammar|Vocabulary & idioms|Language pedagogy"],
TMS:["Maths & EVS (teaching)","Number system & operations|Geometry & data handling|Maths pedagogy|EVS concepts & pedagogy"],
LAW:["Law (judiciary)","Constitution|CPC & CrPC (BNSS)|IPC (BNS) & Evidence (BSA)|Contract, torts & property|Judgment & drafting practice"],
STGK:["State GK","State history & culture|State geography & economy|State schemes & administration|State polity|State current affairs"],
FIT:["Physical & medical standards","Running practice|Strength & endurance|Medical standards & documents"],
SKL:["Skill test","Typing speed|Shorthand & transcription|Computer proficiency"],
NUR:["Nursing","Fundamentals of nursing|Medical-surgical nursing|Community health & pharmacology|Maternal & child health"]};
const CAT={S:"SSC",B:"Banking & insurance",R:"Railways",U:"UPSC",D:"Defence",T:"Teaching",P:"State PSC",O:"Police & state services",X:"Other central exams"};
const PSC="HIS,GEO,POL,ECO,ENV,SCT,CA,STGK,CSAT",BNK="QA,RS,EN,BK,CA,CS",RRB="QA,RS,GA,CA,SCI",GEN="QA,RS,EN,GA,CA";
const E=`S|SSC CGL|QA,RS,EN,GA,CA,STAT
S|SSC CHSL|QA,RS,EN,GA,CA,SKL
S|SSC MTS|${GEN}
S|SSC CPO (SI)|${GEN},FIT
S|SSC GD Constable|${GEN},FIT
S|SSC Stenographer|RS,EN,GA,SKL
S|SSC JE|TECH,RS,GA
B|IBPS PO|${BNK}
B|IBPS Clerk|${BNK}
B|IBPS RRB Officer (Scale I)|${BNK}
B|IBPS RRB Office Assistant|${BNK}
B|IBPS SO|EN,BK,CA,TECH
B|SBI PO|${BNK}
B|SBI Clerk|${BNK}
B|RBI Grade B|QA,RS,EN,ESI,FM,CA
B|RBI Assistant|QA,RS,EN,CS,CA
B|NABARD Grade A|QA,RS,EN,ESI,ARD,CA
B|SIDBI Grade A|QA,RS,EN,ESI,FM,CA
B|SEBI Grade A|QA,RS,EN,ESI,FM,CA
B|LIC AAO|QA,RS,EN,BK,CA
B|LIC Assistant|QA,RS,EN,CA
B|IDBI Executive|${BNK}
B|NIACL / UIIC Assistant|QA,RS,EN,CA
R|RRB NTPC|${RRB}
R|RRB Group D|${RRB}
R|RRB ALP / Technician|${RRB},TECH
R|RRB JE|TECH,QA,RS,GA
R|RPF Constable|${RRB},FIT
R|RPF SI|${RRB},FIT
U|UPSC Civil Services (CSE)|HIS,GEO,POL,ECO,ENV,SCT,CA,CSAT,ETH
U|UPSC CAPF (AC)|HIS,GEO,POL,ECO,CA,EN
U|UPSC EPFO / APFC|EN,GA,POL,ECO,CA,QA
U|UPSC Engineering Services (ESE)|TECH,GA
D|NDA|MATHD,SCI,EN,GA,CA
D|CDS|EN,GA,CA,MATHD
D|AFCAT|EN,GA,QA,RS
D|Agniveer (Army / Navy / Air Force)|QA,SCI,GA,FIT
D|Indian Coast Guard|QA,SCI,RS,GA,FIT
T|CTET Paper 1|CDP,LNG,TMS
T|CTET Paper 2|CDP,LNG,GA
T|State TET|CDP,LNG,TMS
T|KVS / NVS Teacher|CDP,EN,GA,CA
T|DSSSB TGT / PGT|CDP,GA,EN,CA
P|BPSC|${PSC}
P|UPPSC (UP PCS)|${PSC}
P|MPSC|${PSC}
P|RPSC (RAS)|${PSC}
P|WBCS|${PSC}
P|TNPSC Group 1|${PSC}
P|TNPSC Group 4|QA,RS,GA,STGK
P|KPSC (KAS)|${PSC}
P|HPSC (HCS)|${PSC}
P|PPSC (Punjab)|${PSC}
P|OPSC (OCS)|${PSC}
P|GPSC|${PSC}
P|APPSC Group 1|${PSC}
P|TGPSC Group 1|${PSC}
P|Kerala PSC|${PSC}
P|JPSC|${PSC}
P|UKPSC|${PSC}
P|MPPSC|${PSC}
P|CGPSC|${PSC}
P|APSC (Assam)|${PSC}
O|UP Police Constable|QA,RS,GA,CA,STGK,FIT
O|Bihar Police|QA,RS,GA,CA,STGK,FIT
O|State Police SI|QA,RS,GA,CA,STGK,FIT
O|Patwari / Revenue Officer|QA,RS,GA,STGK,CA
O|State Subordinate Services|QA,RS,EN,GA,STGK
O|High Court Clerk / Assistant|EN,GA,CS,SKL
O|State Judiciary (PCS-J)|LAW,GA,CA,EN
X|India Post GDS|QA,GA,EN,CS
X|India Post Postman / MTS|QA,RS,EN,GA
X|FCI Assistant|QA,RS,EN,GA,CA
X|ESIC UDC / Steno|QA,RS,EN,GA,CS
X|EPFO SSA|${GEN}
X|AIIMS NORCET|NUR,GA,RS
X|UGC NET (Paper 1)|CSAT,EN,CA,ESI
X|ISRO / DRDO Technical|TECH,GA,QA
X|NABARD Office Attendant|QA,RS,EN,GA
X|Anganwadi / Welfare Dept.|GA,RS,STGK,CA`;
const sl=n=>n.toLowerCase().replace(/[^a-z0-9]+/g,"-");
const EX=E.split("\n").map(l=>{const p=l.split("|");return{id:sl(p[1]),cat:p[0],name:p[1],mods:p[2].split(",")}});
const TIPS={S:["Maths and reasoning decide the rank: practise 40 questions a day in timed sets.","Finish one short GK source and revise it weekly; don’t keep adding books.","Sectional tests 4 days a week, a full mock every Sunday."],
B:["Prelims is a speed test: learn the topic, then time it at 40 seconds per question.","Read one newspaper editorial and one monthly current affairs PDF daily.","Practise puzzles and DI every day; they carry the highest marks and take the longest."],
R:["Maths and general science are the scoring base: go through NCERT science first, then tests.","Solve previous year papers by shift to learn the real difficulty.","Do 2 mocks a week in the last 6 weeks."],
U:["Read the syllabus and past papers before any book, and fix one source per subject.","Write answers daily; reading alone does not build Mains marks.","Revise on a fixed cycle: weekly, monthly, then before Prelims."],
D:["Clear the physical and medical standards early; train a little every day.","Maths and general science carry most marks: practise from NCERT-level questions.","Take weekly mocks and track your negative marks."],
T:["Child development and pedagogy is the scoring section: master the theories and their thinkers.","Practise past papers by section and keep a list of wrong answers.","Revise language grammar in short daily sessions."],
P:["Build notes subject by subject and revise them three times before Prelims.","Add your state’s history, geography and schemes: those questions separate ranks.","Link current affairs to static topics instead of reading them separately."],
O:["Physical test and written exam both count: schedule both every week.","Use previous papers of your state to find the repeating topics.","Keep a daily 30 minutes for state GK and current affairs."],
X:["Collect the official syllabus and last year’s paper first, then build your list here.","Practise sectional tests, then full mocks as the date nears.","Revise weak topics every Sunday."]};
const LB=["Not started","Working on it","Completed"];
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const iso=(d=new Date())=>{return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0")};
const fd=d=>d.toLocaleDateString(undefined,{day:"numeric",month:"short"});
let S=null;try{S=JSON.parse(localStorage.getItem("gx1")||"null")}catch(e){}
if(!S||typeof S!=="object")S={};S.ex=S.ex||{};S.cx=S.cx||[];S.tab=S.tab||"today";
const save=()=>{try{localStorage.setItem("gx1",JSON.stringify(S))}catch(e){}};
const setTheme=()=>{if(S.th)document.documentElement.dataset.theme=S.th};setTheme();
const ALL=()=>EX.concat(S.cx);
const ce=()=>ALL().find(e=>e.id===S.cur);
const X=()=>{const x=S.ex[S.cur]||(S.ex[S.cur]={});x.st=x.st||{};x.cu=x.cu||[];x.mk=x.mk||[];x.dl=x.dl||{};x.s0=x.s0||iso();x.cd=x.cd||{};x.fb=x.fb||{};x.td=x.td||{};x.rv=x.rv||{};return x};
const OPEN={};let FLT="a",confirmRst=0,ANI=1,RMX=null;
function subs(e){const x=X();return e.mods.map(m=>{const[n,t]=M[m];const it=[];t.split("|").forEach((s,i)=>{const j=s.indexOf("~");if(j<0||s.slice(j+1).includes(e.cat))it.push({k:m+"."+i,n:j<0?s:s.slice(0,j)})});x.cu.filter(c=>c.m===m).forEach(c=>it.push({k:c.k,n:c.n,c:1}));return{m,n,it}})}
function stats(ss){const x=X();let t=0,d=0,w=0;ss.forEach(s=>s.it.forEach(i=>{t++;const v=x.st[i.k]||0;if(v==2)d++;if(v==1)w++}));return{t,d,w,n:t-d-w}}
function dleft(){const d=X().date;if(!d)return null;return Math.ceil((new Date(d+"T00:00:00")-new Date(new Date().toDateString()))/864e5)}
function toast(t){const e=$("#toast");e.textContent=t;e.classList.add("on");clearTimeout(toast.t);toast.t=setTimeout(()=>e.classList.remove("on"),2600)}
const bub=(k,v)=>`<button class="sb" data-a="cyc" data-k="${k}" data-v="${v}" aria-label="Status: ${LB[v]}. Tap to change"><i class="bub"></i>${LB[v]}</button>`;
const pct=(a,b)=>b?Math.round(a/b*100):0;

const isDark=()=>S.th?S.th==="dark":matchMedia("(prefers-color-scheme: dark)").matches;
const TG=()=>`<button class="tg" role="switch" aria-checked="${isDark()}" aria-label="Dark mode" data-a="th"><i><svg class="su" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="5"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg><svg class="mo" viewBox="0 0 24 24" fill="currentColor"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"/></svg></i></button>`;
const CUT={S:75,B:65,R:70,U:50,D:65,T:60,P:60,O:65,X:60};
const tgt=(e,x)=>x.tg||(/^ctet/.test(e.id)?60:CUT[e.cat]);
function mark(){S.act=S.act||{};const d=iso();S.act[d]=(S.act[d]||0)+1}
function streak(){const a=S.act||{};let n=0,d=new Date();if(!a[iso(d)])d.setDate(d.getDate()-1);while(a[iso(d)]){n++;d.setDate(d.getDate()-1)}let best=0,run=0,pv=null;Object.keys(a).sort().forEach(k=>{run=pv&&new Date(k)-new Date(pv)===864e5?run+1:1;pv=k;if(run>best)best=run});return{n,best:Math.max(best,n)}}
function streakCard(){const s=streak(),a=S.act||{};let h="";for(let i=27;i>=0;i--){const d=new Date();d.setDate(d.getDate()-i);const c=a[iso(d)]||0;h+=`<i class="l${c>5?3:c>2?2:c?1:0}" title="${fd(d)}: ${c} updates"></i>`}
return `<div class="card"><div style="display:flex;justify-content:space-between;gap:14px;align-items:center;flex-wrap:wrap"><div><div class="clock">${s.n}</div><div class="mu">${s.n===1?"day":"days"} in a row · best ${s.best}</div></div><div class="hm" role="img" aria-label="Activity over the last 28 days">${h}</div></div><p class="mu" style="margin:8px 0 0">${s.n?"Any task, topic update, focus block or mock keeps your streak alive.":"Finish one task today to start your streak."}</p></div>`}
function weekTab(e,ss){const x=X(),A=S.act||{};const rng=o=>{const s=new Date();s.setDate(s.getDate()-((s.getDay()+6)%7)-7*o);return Array.from({length:7},(_,i)=>{const d=new Date(s);d.setDate(s.getDate()+i);return iso(d)})};
const sum=(o,ds)=>ds.reduce((t,d)=>t+(o[d]||0),0),tw=rng(0),lw=rng(1),names={};ss.forEach(s=>s.it.forEach(i=>names[i.k]=i.n));
const dn=ds=>Object.keys(x.cd).filter(k=>ds.includes(x.cd[k])&&names[k]),mk=ds=>x.mk.filter(m=>ds.includes(m.d));
const av=a=>a.length?Math.round(a.reduce((t,m)=>t+pct(m.s,m.t),0)/a.length):null;
const tD=dn(tw),lD=dn(lw),st=stats(ss),rem=st.t-st.d,mt=mk(tw),mv=av(mt),ma=tw.filter(d=>A[d]).length;
const vs=(a,b)=>a===b?"same as last week":a>b?(a-b)+" more than last week":(b-a)+" fewer than last week";
const T=(l,v,s)=>`<div class="tile"><div class="mu">${l}</div><div class="clock">${v}</div><div class="mu">${s}</div></div>`;
const mx=Math.max(1,...tw.map(d=>A[d]||0));
return `<div class="tiles">${T("Topics completed",tD.length,vs(tD.length,lD.length))}${T("Focus blocks",sum(x.fb,tw),vs(sum(x.fb,tw),sum(x.fb,lw)))}${T("Tasks ticked",sum(x.td,tw),vs(sum(x.td,tw),sum(x.td,lw)))}${T("Mocks taken",mt.length,mv===null?"no scores this week":"average "+mv+"%")}</div>
<div class="card"><h3>Active days: ${ma} of 7</h3><div class="ch" role="img" aria-label="Activity per day this week">${tw.map(d=>`<i style="height:${Math.max(4,(A[d]||0)/mx*100)}%" title="${fd(new Date(d+"T00:00:00"))}"></i>`).join("")}</div><div class="mu" style="display:flex;justify-content:space-between">${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d=>`<span>${d}</span>`).join("")}</div></div>
<div class="card"><h3>Completed this week</h3>${tD.length?`<ul class="tp">${tD.map(k=>`<li>${esc(names[k])}</li>`).join("")}</ul>`:`<p class="mu" style="margin:0">Nothing yet. Mark a topic Completed to see it here.</p>`}<p class="mu" style="margin:8px 0 0">${rem} topics left${tD.length?`. At this week’s pace you would finish in about ${Math.ceil(rem/tD.length)} weeks.`:"."}</p></div>${badgeCard(e,ss,x)}`}
function printTab(e,ss,st,dl){const x=X(),sy=["☐","◐","☑"],act=ss.filter(s=>s.m!=="CA"&&s.it.some(i=>(x.st[i.k]||0)<2));
const rows=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].map((d,i)=>{const u=act.length?[...new Set([act[(i*2)%act.length].n,act[(i*2+1)%act.length].n])]:[];return `<tr><td>${d}</td><td>${u.length?esc(u.join(" and ")):"Revision"}</td><td>20 practice questions, revise notes${e.mods.includes("CA")?", current affairs":""}</td></tr>`}).join("")+`<tr><td>Sunday</td><td>Full mock test</td><td>Review every wrong answer, update this checklist</td></tr>`;
return `<div class="noprint card"><h3>Printable study plan</h3><p class="mu" style="margin:0 0 8px">A weekly timetable plus your syllabus checklist, based on your current progress. Choose “Save as PDF” in the print window to keep a copy.</p><button class="btn p" data-a="pt">Print or save as PDF</button></div>
<div class="pr card"><h3>${esc(e.name)} study plan</h3><p class="mu">Exam date: ${x.date?fd(new Date(x.date+"T00:00:00"))+" ("+dl+" days left)":"not set"} · Target score: ${tgt(e,x)}% · Done: ${st.d} of ${st.t} topics</p>
<table><tr><th>Day</th><th>Subjects</th><th>Also do</th></tr>${rows}</table><h3 style="margin-top:16px">Syllabus checklist</h3><p class="mu">☐ not started · ◐ working on it · ☑ completed</p>${ss.map(s=>`<p style="margin:10px 0 2px"><b>${esc(s.n)}</b></p><ul>${s.it.map(i=>`<li>${sy[x.st[i.k]||0]} ${esc(i.n)}</li>`).join("")}</ul>`).join("")}</div>`}
const RI=[1,3,7,21];
function dueCard(x,ss){const nm={};ss.forEach(s=>s.it.forEach(i=>nm[i.k]=i.n));const t=iso(),L=[];
Object.keys(x.cd).forEach(k=>{if(!nm[k])return;const r=x.rv[k]||0;if(r>=RI.length)return;const d=new Date(x.cd[k]+"T00:00:00");d.setDate(d.getDate()+RI[r]);if(iso(d)<=t)L.push({k,n:nm[k],r,late:iso(d)<t})});
return `<div class="card"><h3>Revise today${L.length?" ("+L.length+")":""}</h3>${L.slice(0,6).map(i=>`<div class="tr" style="padding-left:0;padding-right:0"><span>${esc(i.n)}<small class="mu" style="display:block">Review ${i.r+1} of 4${i.late?" · overdue":""}</small></span><button class="btn" data-a="rvd" data-k="${i.k}">Mark revised</button></div>`).join("")||`<p class="mu" style="margin:0">Nothing due. Topics you complete come back for review after 1, 3, 7 and 21 days.</p>`}${L.length>6?`<p class="mu" style="margin:8px 0 0">${L.length-6} more due. Clear these first.</p>`:""}</div>`}
function badges(e,ss,x){const st=stats(ss),s=streak().best,fb=Object.values(x.fb).reduce((a,b)=>a+b,0),rv=Object.values(x.rv).reduce((a,b)=>a+b,0),tg=tgt(e,x);
return [["first","First step","Complete 1 topic",st.d>=1],["ten","Ten down","Complete 10 topics",st.d>=10],["half","Halfway there","Complete half the syllabus",st.t&&st.d*2>=st.t],["all","Syllabus done","Complete every topic",st.t&&st.d===st.t],["s3","3-day streak","Study 3 days in a row",s>=3],["s7","7-day streak","Study 7 days in a row",s>=7],["s30","30-day streak","Study 30 days in a row",s>=30],["fb","Deep focus","Finish 10 focus blocks",fb>=10],["m1","Mock taker","Log your first mock",x.mk.length>=1],["m5","Mock regular","Log 5 mocks",x.mk.length>=5],["tg","On target","Score at or above your target",x.mk.some(a=>pct(a.s,a.t)>=tg)],["rv","Reviser","Mark 10 revisions done",rv>=10]].map(a=>({id:a[0],n:a[1],d:a[2],ok:!!a[3]}))}
function badgeCard(e,ss,x){const B=badges(e,ss,x);return `<h2 class="sec">Achievements: ${B.filter(b=>b.ok).length} of ${B.length}</h2><div class="tiles">${B.map(b=>`<div class="tile" data-v="${b.ok?2:0}" style="${b.ok?"":"opacity:.65"}"><i class="bub"></i><b>${b.n}</b><div class="mu">${b.d}</div></div>`).join("")}</div>`}
function newBadge(e){const x=X(),B=badges(e,subs(e),x).filter(b=>b.ok);if(!x.bd){x.bd=B.map(b=>b.id);save();return}const n=B.filter(b=>!x.bd.includes(b.id));if(n.length){x.bd=B.map(b=>b.id);save();toast("Badge earned: "+n[0].n+(n.length>1?" and "+(n.length-1)+" more":""))}}
/* pomodoro */
const pm={f:1,l:3000,r:0,end:0,t:null};
const fmt=s=>String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0");
function paint(){const d=$("#pd");if(d){d.textContent=fmt(pm.l);$("#pm").textContent=pm.f?"Focus block: 50 min":"Break: 10 min";$("#pb").textContent=pm.r?"Pause":"Start";const s=$("#ps");if(s&&S.cur)s.textContent=X().dl.p||0}document.title=pm.r?fmt(pm.l)+" · Govt Exam Tracker":"Govt Exam Tracker"}
function tick(){pm.l=Math.max(0,Math.round((pm.end-Date.now())/1000));if(pm.l<=0){if(pm.f&&S.cur){const x=X();daily(x);x.dl.p=(x.dl.p||0)+1;x.fb[iso()]=(x.fb[iso()]||0)+1;mark();save()}pm.f=!pm.f;pm.l=pm.f?3000:600;pm.end=Date.now()+pm.l*1000;toast(pm.f?"Break over. Start your next focus block.":"Focus block done. Take a 10 minute break.")}paint()}
function pmAct(a){if(a==="pb"){if(pm.r){clearInterval(pm.t);pm.r=0}else{pm.r=1;pm.end=Date.now()+pm.l*1000;pm.t=setInterval(tick,500)}}else{clearInterval(pm.t);pm.r=0;if(a==="pw")pm.f=!pm.f;pm.l=pm.f?3000:600}paint()}

/* daily plan */
function daily(x){if(x.dl.d!==iso())x.dl={d:iso(),c:{},p:0};if(!x.dl.pl)x.dl.pl=null}
function plan(x,ss){daily(x);if(!x.dl.pl){const act=ss.filter(s=>s.m!=="CA"&&s.it.some(i=>(x.st[i.k]||0)<2));const di=Math.floor(Date.now()/864e5),n=Math.min(3,act.length);x.dl.pl=[];for(let i=0;i<n;i++){const s=act[(di+i)%act.length];const it=s.it.find(a=>x.st[a.k]==1)||s.it.find(a=>!(x.st[a.k]>1));x.dl.pl.push({k:it.k,s:s.n,n:it.n})}save()}return x.dl.pl}

/* views */
function landing(){const mine=Object.keys(S.ex).map(id=>ALL().find(e=>e.id===id)).filter(Boolean);
return `<header class="lb w"><div class="brand"><svg class="logo" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="11" fill="var(--ac)"/><circle cx="20" cy="20" r="9" fill="none" stroke="var(--bg)" stroke-width="3"/><path d="M20 11a9 9 0 0 1 0 18z" fill="var(--bg)"/></svg>Govt Exam Tracker</div>${TG()}</header><div class="w"><section class="hero"><div class="hg"><div><h1>Know exactly what to study today for your government exam.</h1><p class="mu" style="font-size:17px;margin:12px 0 22px">Pick from ${EX.length} exams. You get only the subjects your exam needs, a topic tracker, a daily plan, cutoff targets and a countdown. Free, no sign-up.</p>
<div class="cb"><input id="q" type="text" role="combobox" aria-expanded="false" aria-controls="opts" autocomplete="off" placeholder="Search your exam, e.g. SBI PO, RRB NTPC, BPSC" aria-label="Search exam"><ul id="opts" role="listbox"></ul></div><div class="pop"><span class="mu">Popular:</span>${["SSC CGL","IBPS PO","SBI PO","RRB NTPC","UPSC Civil Services (CSE)","NDA"].map(n=>`<button data-a="pick" data-id="${sl(n)}">${n}</button>`).join("")}</div></div><div class="rc" aria-hidden="true"><div class="art">${Array.from({length:35},(_,i)=>`<span data-v="${[0,1,2,2,0,2,1][(i*3+(i>>2))%7]}"><i class="bub" style="--i:${i}"></i></span>`).join("")}</div><div class="sample card"><div class="tr"><span>Percentage</span><span class="sb" data-v="2"><i class="bub"></i>Completed</span></div><div class="tr"><span>Time & work, pipes</span><span class="sb" data-v="1"><i class="bub"></i>Working on it</span></div><div class="tr"><span>Data interpretation</span><span class="sb" data-v="0"><i class="bub"></i>Not started</span></div><div class="tr"><span class="mu">Cutoff target 65% · streak 12 days</span></div></div></div></div></section>
${mine.length?`<div class="card"><h3>Continue where you left off</h3>${mine.map(e=>{S.cur=e.id;const st=stats(subs(e));return`<div class="tr" style="padding-left:0;padding-right:0"><span>${esc(e.name)}<br><small class="mu">${st.d} of ${st.t} topics completed</small></span><span style="display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end"><button class="btn p" data-a="pick" data-id="${e.id}">Open</button><button class="btn" data-a="rmx" data-id="${e.id}" aria-label="Remove ${esc(e.name)} from your list">${RMX===e.id?"Tap again to remove":"Remove"}</button></span></div>`}).join("")}</div>`:""}
<h2 class="sec">How it works</h2><div class="how"><div class="card"><h3>1. Pick your exam</h3><p class="mu" style="margin:0">Search the list. Your subjects and topics load instantly.</p></div><div class="card"><h3>2. Mark every topic</h3><p class="mu" style="margin:0">Not started, working on it, or completed. Add your own topics too.</p></div><div class="card"><h3>3. Follow the daily plan</h3><p class="mu" style="margin:0">Three study tasks a day, a focus timer and a pace to hit your exam date.</p></div></div>
<h2 class="sec">Also included</h2><div class="pills" style="padding-bottom:20px">${["Cutoff target","Day streak","Weekly summary","Printable study plan","Mock score log","Focus timer","Backup and restore","Dark mode"].map(t=>`<span class="pill">${t}</span>`).join("")}</div></div>`}

function shell(e){const ss=subs(e),st=stats(ss),dl=dleft();
const tabs=[["today","Today"],["syl","Syllabus"],["plan","Plan"],["week","Progress"],["mock","Mocks"],["print","Print"],["bak","Backup"]];
const body=S.tab==="syl"?syl(e,ss):S.tab==="plan"?planTab(e,ss,st):S.tab==="mock"?mock(e):S.tab==="week"?weekTab(e,ss):S.tab==="print"?printTab(e,ss,st,dl):S.tab==="bak"?bak():today(e,ss,st,dl);
return `<div class="w"><div class="top"><div><h2>${esc(e.name)}</h2><span class="mu">${CAT[e.cat]} · ${st.d} of ${st.t} topics completed${dl!==null?" · "+(dl>0?dl+" days to exam":dl===0?"exam is today":"exam date passed"):""}</span></div>
<div style="display:flex;gap:10px;align-items:center"><button class="btn" data-a="chg">Change exam</button>${TG()}</div></div></div>
<nav role="tablist" aria-label="Sections">${tabs.map(t=>`<button role="tab" aria-selected="${S.tab===t[0]}" data-a="tab" data-t="${t[0]}">${t[1]}</button>`).join("")}</nav><main class="w"><div class="${S.tab==="today"?"today":""}${ANI?" in":""}">${body}</div></main>`}

function today(e,ss,st,dl){const x=X(),pl=plan(x,ss),c=x.dl.c;
const fx=[["mcq","Solve 20 practice questions on today’s topics"],["rev","Revise yesterday’s notes for 15 minutes"]];
if(e.mods.includes("CA"))fx.push(["ca","Read current affairs and write 5 one-liners"]);
fx.push(new Date().getDay()===0?["wk","Take a full mock and review every wrong answer"]:["err","Review mistakes from your last test"]);
const items=pl.map(p=>({id:"t"+p.k,t:"Study: "+p.n,s:p.s,k:p.k})).concat(fx.map(f=>({id:f[0],t:f[1]})));
const dn=items.filter(i=>c[i.id]).length;
let pace="";if(dl!==null){const rem=st.t-st.d,wk=dl>0?Math.ceil(rem/(dl/7)):rem;pace=`<div class="card"><h3>Your pace</h3><p style="margin:0">${rem} topics left and ${dl>0?dl+" days to go":"no days left"}. ${dl>0?`Complete about <b>${wk} topics a week</b> to finish the syllabus on time.`:"Update your exam date in Plan."}</p></div>`}
else pace=`<div class="card"><h3>Set your exam date</h3><p class="mu" style="margin:0 0 8px">Add it in Plan to see a countdown and how many topics to finish each week.</p><button class="btn p" data-a="tab" data-t="plan">Go to Plan</button></div>`;
return streakCard()+dueCard(x,ss)+`<div class="card"><h3>Today’s tasks</h3><div class="mu">${dn} of ${items.length} done</div><div class="bar"><i class="d" style="width:${pct(dn,items.length)}%"></i></div>
${items.map(i=>`<div class="chk ${c[i.id]?"dn":""}"><input type="checkbox" id="c-${i.id}" data-a="tk" data-id="${i.id}" ${c[i.id]?"checked":""}><label class="t" for="c-${i.id}">${esc(i.t)}${i.s?`<small>${esc(i.s)}</small>`:""}</label>${i.k?bub(i.k,x.st[i.k]||0):""}</div>`).join("")}
<p class="mu" style="margin:10px 0 0">Study tasks pick topics you are working on first, then the next unstarted ones. The list resets each day.</p></div>
<div class="card"><h3>Focus timer</h3><div id="pm" class="mu"></div><div class="clock" id="pd"></div>
<div style="display:flex;gap:8px;margin:8px 0;flex-wrap:wrap"><button class="btn p" id="pb" data-a="pb">Start</button><button class="btn" data-a="pr">Reset</button><button class="btn" data-a="pw">Switch focus/break</button></div><div class="mu">Focus blocks finished today: <b id="ps">0</b></div></div>${pace}`}

function syl(e,ss){const x=X();const ch=[["a","All"],["0","Not started"],["1","Working on it"],["2","Completed"]];
return `<div class="chips">${ch.map(c=>`<button data-a="flt" data-f="${c[0]}" aria-pressed="${FLT===c[0]}">${c[1]}</button>`).join("")}</div>`+ss.map(s=>{const d=s.it.filter(i=>x.st[i.k]==2).length,w=s.it.filter(i=>x.st[i.k]==1).length;const r=s.it.filter(i=>FLT==="a"||(x.st[i.k]||0)==FLT);
return `<details data-m="${s.m}" ${OPEN[s.m]?"open":""}><summary><div>${esc(s.n)}<div class="bar" style="width:140px"><i class="d" style="width:${pct(d,s.it.length)}%"></i><i class="w2" style="width:${pct(w,s.it.length)}%"></i></div></div><span>${d}/${s.it.length}</span></summary>
${r.map(i=>`<div class="tr"><span>${esc(i.n)}${i.c?` <button class="lk" data-a="rmc" data-k="${i.k}">remove</button>`:""}</span>${bub(i.k,x.st[i.k]||0)}</div>`).join("")||`<div class="tr mu">No topics in this filter.</div>`}
<div class="add"><input id="ad-${s.m}" placeholder="Add your own topic" aria-label="Add topic to ${esc(s.n)}"><button class="btn" data-a="add" data-m="${s.m}">Add</button></div></details>`}).join("")}

function planTab(e,ss,st){const x=X(),dl=dleft();
const foc=ss.map(s=>({n:s.n,p:pct(s.it.filter(i=>x.st[i.k]==2).length,s.it.length)})).sort((a,b)=>a.p-b.p);
let ph="";const names=[["Learn","Finish the whole syllabus once. Mark every topic."],["Practise","Sectional tests on each subject. Fix topics marked Working on it."],["Mock and revise","Full mocks, error review and quick revision only."]];
if(x.date){const a=new Date(x.s0+"T00:00:00"),z=new Date(x.date+"T00:00:00"),T=Math.max(z-a,864e5*3),b=[a,new Date(+a+T*.55),new Date(+a+T*.8),z],now=Date.now();
ph=names.map((n,i)=>`<div class="ph ${now>=b[i]&&now<b[i+1]?"on":""}"><b>${n[0]}: ${fd(b[i])} to ${fd(b[i+1])}</b><div class="mu">${n[1]}</div></div>`).join("")}
else ph=names.map((n,i)=>`<div class="ph"><b>${n[0]}: ${["first 55%","next 25%","last 20%"][i]} of your time</b><div class="mu">${n[1]}</div></div>`).join("")+`<p class="mu">Set your exam date to turn these into real dates.</p>`;
return `<div class="card"><h3>Exam date</h3><div class="f"><input type="date" id="ed" value="${x.date||""}" aria-label="Exam date"></div><div class="mu">${dl!==null?(dl>0?dl+" days left":"Date reached"):"Not set"}</div></div>
<div class="card"><h3>Your phases</h3>${ph}</div>
<div class="card"><h3>Study these first</h3><div class="mu">Subjects with the least progress come first.</div><ul class="tp">${foc.map(f=>`<li>${esc(f.n)}: ${f.p}% complete</li>`).join("")}</ul></div>
<div class="card"><h3>How to approach ${esc(e.name)}</h3><ul class="tp">${TIPS[e.cat].map(t=>`<li>${esc(t)}</li>`).join("")}<li>Keep the list honest: only mark Completed when you can solve questions on it without notes.</li></ul>
<p class="mu" style="margin:8px 0 0">Always check the official notification for the latest syllabus. Use “Add your own topic” in Syllabus for anything missing.</p></div>`}

function mock(e){const ss=subs(e),x=X(),m=x.mk,p=m.map(a=>pct(a.s,a.t)),tg=tgt(e,x),l5=p.slice(-5),a5=l5.length?Math.round(l5.reduce((a,b)=>a+b,0)/l5.length):null;
const sa=ss.map(s=>{const r=m.filter(a=>a.sec&&a.sec[s.m]),tot=r.reduce((t,a)=>t+a.sec[s.m][1],0);return{n:s.n,p:tot?Math.round(r.reduce((t,a)=>t+a.sec[s.m][0],0)/tot*100):null}}).filter(a=>a.p!==null).sort((a,b)=>a.p-b.p);
const secCard=sa.length?`<div class="card"><h3>Section-wise average</h3>${sa.map(a=>`<div style="margin:8px 0"><div style="display:flex;justify-content:space-between"><span>${esc(a.n)}</span><b>${a.p}%</b></div><div class="bar"><i class="${a.p>=tg?"d":"w2"}" style="width:${a.p}%"></i></div></div>`).join("")}<p class="mu" style="margin:0">Weakest: ${esc(sa[0].n)}. Mark its topics as Working on it and take sectional tests. Bars turn green once a section reaches your target.</p></div>`:"";
const gap=a5===null?"Log a mock to see how close you are.":a5>=tg?`Your last ${l5.length} mocks average ${a5}%, which is ${a5-tg} points above target.`:`Your last ${l5.length} mocks average ${a5}%, which is ${tg-a5} points below target.`;
const avg=p.length?Math.round(p.reduce((a,b)=>a+b,0)/p.length):0;
return `<div class="card"><h3>Cutoff target</h3><div class="f"><input id="tg" type="number" min="1" max="100" value="${tg}" aria-label="Target score in percent" style="max-width:110px;flex:none"><span class="mu" style="align-self:center">% of total marks</span></div><p style="margin:0">${gap}</p><p class="mu" style="margin:6px 0 0">This is a starting guess for ${CAT[e.cat]} exams. Real cutoffs change every year by category and shift, so check last year’s cutoff for yours and set it here.</p></div><div class="card"><h3>Log a mock test</h3><div class="f"><input id="mn" placeholder="Name (optional)" aria-label="Mock name"><input id="ms" type="number" step="any" placeholder="Your score" aria-label="Score"><input id="mt" type="number" step="any" placeholder="Out of" aria-label="Total marks"><input id="md" type="date" value="${iso()}" aria-label="Date"></div><details><summary>Section-wise scores (optional)</summary>${ss.map(s=>`<div class="f" style="padding:0 14px"><span style="flex:1 1 100%">${esc(s.n)}</span><input id="ms-${s.m}" type="number" step="any" placeholder="Score" aria-label="${esc(s.n)} score"><input id="mt-${s.m}" type="number" step="any" placeholder="Out of" aria-label="${esc(s.n)} total"></div>`).join("")}</details><button class="btn p" data-a="mk">Save mock</button></div>
${secCard}<div class="card"><h3>Your scores</h3>${m.length?`<div class="pills"><span class="pill">Tests: ${m.length}</span><span class="pill">Average: ${avg}%</span><span class="pill">Best: ${Math.max(...p)}%</span><span class="pill">Latest: ${p[p.length-1]}%</span></div>
<div class="ch" role="img" aria-label="Score trend. Dashed line is your target"><b style="bottom:${tg}%"></b>${p.slice(-12).map(v=>`<i style="height:${Math.max(v,3)}%" title="${v}%"></i>`).join("")}</div>
<table><tr><th>Test</th><th>Score</th><th>%</th><th></th></tr>${m.map((a,i)=>`<tr><td>${esc(a.n)}<br><span class="mu">${esc(a.d)}</span></td><td>${a.s}/${a.t}</td><td>${p[i]}%</td><td><button class="lk" data-a="md" data-i="${i}">delete</button></td></tr>`).reverse().join("")}</table>`:`<p class="mu" style="margin:0">No mocks yet. Log your first one after you take it.</p>`}</div>`}

function bak(){return `<div class="card"><h3>Back up your progress</h3><p class="mu" style="margin:0 0 8px">Copy this text and keep it somewhere safe. Paste it on another device to restore everything, for all exams.</p><textarea id="bk" readonly aria-label="Backup data">${esc(JSON.stringify(S))}</textarea><div style="margin-top:8px"><button class="btn p" data-a="cp">Copy backup</button></div></div>
<div class="card"><h3>Restore from backup</h3><textarea id="rs" placeholder="Paste backup text here" aria-label="Paste backup"></textarea><div style="margin-top:8px"><button class="btn" data-a="rs">Restore</button></div></div>
<div class="card"><h3>Reset this exam</h3><p class="mu" style="margin:0 0 8px">Clears statuses, custom topics, mocks and the date for this exam only.</p><button class="btn" data-a="rst">${confirmRst?"Tap again to confirm reset":"Reset this exam"}</button></div>`}

function render(){const e=S.cur&&ce();$("#app").innerHTML=e?shell(e):landing();ANI=0;if(e&&S.tab==="today")paint();if(e)newBadge(e);if(!e)S.cur=null}

/* combobox */
let CI=-1;
function fill(){const q=$("#q").value.trim().toLowerCase(),ul=$("#opts");let h="",last="",n=0;
ALL().forEach(e=>{if(q&&!(e.name+" "+CAT[e.cat]).toLowerCase().includes(q))return;if(e.cat!==last){h+=`<li class="g" role="presentation">${CAT[e.cat]}</li>`;last=e.cat}h+=`<li role="option" data-a="pick" data-id="${e.id}">${esc(e.name)}</li>`;n++});
if(q.length>1&&!ALL().some(e=>e.name.toLowerCase()===q))h+=`<li role="option" data-a="cust">Add “${esc($("#q").value.trim())}” as a custom exam</li>`;
if(!h)h=`<li class="g">No match</li>`;ul.innerHTML=h;ul.style.display="block";$("#q").setAttribute("aria-expanded","true");CI=-1}
function mv(d){const o=[...document.querySelectorAll("#opts [role=option]")];if(!o.length)return;o.forEach(a=>a.classList.remove("on"));CI=(CI+d+o.length)%o.length;o[CI].classList.add("on");o[CI].scrollIntoView({block:"nearest"})}
function pick(id){S.cur=id;S.tab="today";ANI=1;const x=X();daily(x);save();render();scrollTo(0,0)}

/* actions */
document.addEventListener("focusin",e=>{if(e.target.id==="q")fill()});
document.addEventListener("input",e=>{if(e.target.id==="q")fill()});
document.addEventListener("keydown",e=>{const t=e.target;
if(t.id==="q"){if(e.key==="ArrowDown"){e.preventDefault();mv(1)}else if(e.key==="ArrowUp"){e.preventDefault();mv(-1)}else if(e.key==="Escape")$("#opts").style.display="none";else if(e.key==="Enter"){const o=document.querySelectorAll("#opts [role=option]")[Math.max(CI,0)];if(o)o.click()}}
else if(t.id&&t.id.startsWith("ad-")&&e.key==="Enter")document.querySelector(`[data-a=add][data-m=${t.id.slice(3)}]`).click()});
document.addEventListener("toggle",e=>{const m=e.target.dataset&&e.target.dataset.m;if(m)OPEN[m]=e.target.open},true);
document.addEventListener("change",e=>{if(e.target.id==="tg"){const v=parseFloat(e.target.value);if(v>0&&v<=100){X().tg=v;save();render();toast("Target saved")}}if(e.target.id==="ed"){X().date=e.target.value;save();render();toast(e.target.value?"Exam date saved":"Exam date cleared")}});
document.addEventListener("click",e=>{
if(!e.target.closest(".cb")){const o=$("#opts");if(o)o.style.display="none"}
if(RMX&&!e.target.closest("[data-a=rmx]")){RMX=null;document.querySelectorAll("[data-a=rmx]").forEach(t=>t.textContent="Remove")}
const b=e.target.closest("[data-a]");if(!b)return;const a=b.dataset.a;
if(a==="pick")return pick(b.dataset.id);
if(a==="cust"){const n=$("#q").value.trim().slice(0,60),id="c-"+Date.now();S.cx.push({id,cat:"X",name:n,mods:["QA","RS","EN","GA","CA"]});return pick(id)}
if(a==="rmx"){const id=b.dataset.id;if(RMX!==id){RMX=id;render();return toast("Tap again to delete this exam and its progress")}RMX=null;delete S.ex[id];S.cx=S.cx.filter(c=>c.id!==id);save();render();return toast("Exam removed")}
if(a==="chg"){S.cur=null;save();return render()}
if(a==="th"){const R=document.documentElement;S.th=isDark()?"light":"dark";R.classList.add("tx");R.dataset.theme=S.th;document.querySelectorAll(".tg").forEach(t=>t.setAttribute("aria-checked",S.th==="dark"));setTimeout(()=>R.classList.remove("tx"),500);return save()}
if(a==="pt"){try{print()}catch(er){toast("Use your browser’s print option")}return}
if(a==="tab"){S.tab=b.dataset.t;ANI=1;confirmRst=0;save();return render()}
if(["pb","pr","pw"].includes(a))return pmAct(a);
const x=S.cur?X():null;
if(a==="cyc"){const k=b.dataset.k,v=((x.st[k]||0)+1)%3;x.st[k]=v;if(v===2)x.cd[k]=iso();else{delete x.cd[k];delete x.rv[k]}if(v>0)mark();daily(x);if(v===2&&x.dl.pl&&x.dl.pl.some(p=>p.k===k))x.dl.c["t"+k]=1;if(v!==2)delete x.dl.c["t"+k];save();render();const nb=document.querySelector('.sb[data-k="'+k+'"]');if(nb)nb.classList.add("pop");return}
if(a==="tk"){daily(x);x.dl.c[b.dataset.id]=b.checked?1:0;x.td[iso()]=Math.max(0,(x.td[iso()]||0)+(b.checked?1:-1));if(b.checked)mark();save();return render()}
if(a==="rvd"){x.rv[b.dataset.k]=(x.rv[b.dataset.k]||0)+1;mark();save();return render()}
if(a==="flt"){FLT=b.dataset.f;return render()}
if(a==="add"){const i=$("#ad-"+b.dataset.m),n=i.value.trim().slice(0,80);if(!n)return toast("Type a topic name first");x.cu.push({m:b.dataset.m,n,k:"u"+Date.now()});OPEN[b.dataset.m]=1;save();return render()}
if(a==="rmc"){x.cu=x.cu.filter(c=>c.k!==b.dataset.k);delete x.st[b.dataset.k];save();return render()}
if(a==="mk"){const s=parseFloat($("#ms").value),t=parseFloat($("#mt").value);if(!(t>0)||isNaN(s))return toast("Enter your score and the total marks");const sec={};subs(ce()).forEach(q=>{const a=parseFloat($("#ms-"+q.m).value),z=parseFloat($("#mt-"+q.m).value);if(z>0&&!isNaN(a))sec[q.m]=[a,z]});mark();x.mk.push({n:$("#mn").value.trim().slice(0,40)||"Mock "+(x.mk.length+1),s,t,d:$("#md").value||iso(),sec});save();return render()}
if(a==="md"){x.mk.splice(+b.dataset.i,1);save();return render()}
if(a==="cp"){const t=$("#bk");t.select();try{navigator.clipboard.writeText(t.value).then(()=>toast("Backup copied"),()=>toast("Press copy on the selected text"))}catch(er){toast("Press copy on the selected text")}return}
if(a==="rs"){try{const o=JSON.parse($("#rs").value);if(!o||typeof o.ex!=="object")throw 0;S=o;S.cx=S.cx||[];S.tab="today";save();setTheme();render();toast("Backup restored")}catch(er){toast("That text is not a valid backup")}return}
if(a==="rst"){if(!confirmRst){confirmRst=1;return render()}delete S.ex[S.cur];confirmRst=0;X();save();S.tab="today";render();toast("Exam reset")}
});
render();
