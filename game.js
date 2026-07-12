"use strict";

const QUESTIONS = [
  {
    key: "price",
    number: "01",
    kicker: "The Price Lens",
    title: "What does society give up for the benefits of the technology?",
    root: "Every technology is a trade-off. Some of what disappears may have been the site of learning.",
    next: "Continue to the Distribution Lens"
  },
  {
    key: "distribution",
    number: "02",
    kicker: "The Distribution Lens",
    title: "Who is harmed and who benefits from the technology?",
    root: "Benefits and burdens are never distributed evenly. Ask who gains capacity, who absorbs new costs, and who gains power.",
    next: "Continue to the Dependency Lens"
  },
  {
    key: "demands",
    number: "03",
    kicker: "The Dependency Lens",
    title: "What does the technology need?",
    root: "Every technology carries an embedded idea and makes demands of people, institutions, infrastructure, and data.",
    next: "Continue to the Ripple Lens"
  },
  {
    key: "ripples",
    number: "04",
    kicker: "The Ripple Lens",
    title: "What unintended or unexpected changes follow?",
    root: "Technological change is ecological, not additive. It reorganizes the environment that receives it.",
    next: "Continue to the Myth Lens"
  },
  {
    key: "myth",
    number: "05",
    kicker: "The Myth Lens",
    title: "Why is it difficult to imagine the world without the technology?",
    root: "Technologies become mythic when their assumptions appear natural, neutral, and inevitable. Imagination reopens deliberation.",
    next: "Convene the final council"
  }
];

const PURPOSES = {
  authorship: "Student authorship",
  access: "Equitable access",
  judgment: "Professional judgment",
  privacy: "Privacy & dignity",
  connection: "Human connection",
  learning: "Durable learning"
};

const SCENARIOS = {
  writing: {
    title: "AI writing assistant",
    eyebrow: "Proposal 01 · Generative AI",
    purpose: "Drafting and revision feedback",
    proposal: "Provide every secondary student with an AI writing assistant that can brainstorm, draft, revise, translate, and give feedback inside the district learning platform.",
    nodeText: {
      learners: "Drafting, voice, struggle",
      educators: "Feedback, design, authorship evidence",
      families: "Access, trust, language support",
      curriculum: "Writing process and genre",
      assessment: "Independent performance",
      district: "Policy, training, procurement",
      vendor: "Prompts, drafts, model behavior"
    },
    price: [
      { id: "authorship", icon: "✎", label: "Authorship visibility", detail: "A fluent draft can conceal which claims, structures, and revisions the student actually made.", nodes: ["learners", "assessment"] },
      { id: "struggle", icon: "⌁", label: "Generative struggle", detail: "Planning, retrieving, and reorganizing ideas may be optimized away even when those difficulties build writing capacity.", nodes: ["learners", "curriculum"] },
      { id: "diagnosis", icon: "◇", label: "Teacher diagnosis", detail: "Teachers may see polished products while losing evidence of misconception, hesitation, and growth.", nodes: ["educators", "assessment"] }
    ],
    stakeholders: [
      { id: "learners", status: "mixed", label: "Students", detail: "Some gain language, feedback, or executive-function support; others may surrender authorship or become dependent before foundational schemas form." },
      { id: "educators", status: "burden", label: "Teachers", detail: "Feedback volume may fall, but verification, assignment redesign, authorship questions, and exception handling create new labor." },
      { id: "families", status: "mixed", label: "Families", detail: "Translation and access can improve while home connectivity, consent, and uncertainty about stored writing create uneven burdens." },
      { id: "vendor", status: "benefit", label: "Vendor", detail: "The provider gains subscription revenue, usage data, institutional reach, and influence over what counts as acceptable writing support." },
      { id: "assessment", status: "burden", label: "Assessment system", detail: "Existing assignments may no longer reveal independent composition, forcing new demonstrations of process and transfer." }
    ],
    demands: [
      { id: "data", label: "Student writing data", detail: "Prompts, drafts, revision histories, and metadata may leave the classroom context.", condition: "Minimize retained writing data and prohibit secondary model training.", edge: "learner-vendor" },
      { id: "redesign", label: "Assessment redesign", detail: "Teachers need protected time to create process evidence and independent transfer checks.", condition: "Fund assessment redesign and require visible process evidence.", edge: "learner-assessment" },
      { id: "training", label: "Professional learning", detail: "A login is not an instructional model; staff need shared boundaries, examples, and judgment practice.", condition: "Provide role-specific training before classroom use.", edge: "teacher-district" },
      { id: "access", label: "Accommodation pathways", detail: "Bans and universal requirements can both remove supports learners legitimately need.", condition: "Preserve documented accessibility and language-support pathways.", edge: "teacher-curriculum" }
    ],
    timeline: [
      { label: "Launch", title: "Fluent adoption", detail: "Draft quality rises quickly. Teachers report excitement and uncertainty. Existing assignments still assume the submitted text maps directly to student thinking." },
      { label: "One semester", title: "Assessment strain", detail: "Process evidence becomes inconsistent. Some students use the assistant as a critic; others use it as a proxy author. Teacher verification work grows." },
      { label: "One year", title: "The curriculum reorganizes", detail: "Writing instruction shifts toward prompt design, oral defense, revision logs, and independent transfer—or quietly narrows into supervising machine-produced prose." }
    ],
    rippleResponses: [
      { id: "process", label: "Require process evidence", detail: "Use planning traces, revision rationales, and short independent writing checks to make learning visible again.", strong: true },
      { id: "detection", label: "Increase detection", detail: "Detection may produce signals, but it cannot rebuild authorship evidence or resolve false accusations." },
      { id: "silence", label: "Leave each teacher to decide", detail: "Local discretion matters, but unsupported inconsistency distributes risk and access unevenly." }
    ],
    alternatives: [
      { id: "bounded", label: "Bounded AI critic", detail: "Students draft first, then use AI to generate objections or feedback that they must evaluate.", strong: true },
      { id: "human", label: "Peer response and conferencing", detail: "Invest in structured human feedback, writing centers, and protected revision time." },
      { id: "hybrid", label: "Shared device-based studio", detail: "Use limited classroom access for translation and feedback without assigning universal individual accounts." }
    ],
    conditions: [
      "Require first-draft or planning evidence before AI assistance.",
      "Prohibit vendor training on student writing and minimize retention.",
      "Fund teacher time for assessment and curriculum redesign.",
      "Preserve accommodations and language-support pathways.",
      "Use independent transfer checks alongside assisted writing.",
      "Publish a one-semester review and a clear stopping rule."
    ]
  },

  tutor: {
    title: "Automated tutoring platform",
    eyebrow: "Proposal 02 · Adaptive learning",
    purpose: "Personalized practice and feedback",
    proposal: "Adopt an automated tutoring platform that adjusts practice sequences, supplies hints, and recommends interventions in mathematics and literacy.",
    nodeText: {
      learners: "Practice, confidence, collaboration",
      educators: "Diagnosis, small groups, oversight",
      families: "After-hours support, connectivity",
      curriculum: "Sequence, pacing, content",
      assessment: "Mastery signals and transfer",
      district: "Licensing, implementation, staffing",
      vendor: "Learner models and recommendations"
    },
    price: [
      { id: "dialogue", icon: "◌", label: "Shared problem solving", detail: "Private adaptive pathways can reduce the moments when learners explain, disagree, and build understanding together.", nodes: ["learners", "educators"] },
      { id: "productive", icon: "△", label: "Productive struggle", detail: "Instant hints may help access—or interrupt the exact retrieval and uncertainty that strengthen learning.", nodes: ["learners", "curriculum"] },
      { id: "teacher", icon: "◆", label: "Teacher noticing", detail: "Dashboard signals can displace close observation of strategies, emotions, misconceptions, and classroom context.", nodes: ["educators", "assessment"] }
    ],
    stakeholders: [
      { id: "learners", status: "mixed", label: "Students", detail: "Some gain private practice and immediate feedback; others receive narrow pathways, inaccessible interfaces, or persistent low expectations." },
      { id: "educators", status: "mixed", label: "Teachers", detail: "Data can support grouping, but alerts, overrides, content review, and platform troubleshooting add oversight labor." },
      { id: "families", status: "mixed", label: "Families", detail: "After-hours support expands only where devices, connectivity, language access, and time are available." },
      { id: "vendor", status: "benefit", label: "Vendor", detail: "The platform gains recurring revenue and a large behavioral dataset for refining its learner models." },
      { id: "curriculum", status: "burden", label: "Curriculum", detail: "What is easy to sequence and measure can crowd out discussion, open problems, creativity, and local knowledge." }
    ],
    demands: [
      { id: "model", label: "Continuous learner data", detail: "The system requires response histories, timing, error patterns, and inferred mastery states.", condition: "Limit learner profiles, retention, and secondary use of behavioral data.", edge: "learner-vendor" },
      { id: "alignment", label: "Content alignment", detail: "Recommendations are only as defensible as the platform's content, sequence, and cultural assumptions.", condition: "Require educator review and local curricular alignment.", edge: "teacher-curriculum" },
      { id: "devices", label: "Reliable access", detail: "Personalization depends on functioning devices, connectivity, accessibility, and technical support.", condition: "Fund access and an equivalent non-platform pathway.", edge: "learner-family" },
      { id: "capacity", label: "Staff response capacity", detail: "A dashboard can generate more alerts than educators have time or services to address.", condition: "Set alert limits and fund staff capacity to act on recommendations.", edge: "teacher-district" }
    ],
    timeline: [
      { label: "Launch", title: "Engagement rises", detail: "Students explore the platform and immediate feedback feels responsive. Teachers begin comparing dashboard signals with classroom observations." },
      { label: "One semester", title: "Paths diverge", detail: "Some learners accelerate. Others repeat narrow skill loops. Teachers discover that completion and mastery signals do not always transfer to new problems." },
      { label: "One year", title: "What is measurable expands", detail: "Scheduling, intervention, and curriculum increasingly orbit the platform's categories unless educators deliberately preserve dialogue, projects, and human diagnosis." }
    ],
    rippleResponses: [
      { id: "triangulate", label: "Triangulate dashboard signals", detail: "Require classroom evidence, student explanation, and teacher judgment before changing a learner's pathway.", strong: true },
      { id: "minutes", label: "Set more usage minutes", detail: "More exposure increases platform data but does not resolve narrow content or weak transfer." },
      { id: "rank", label: "Publish mastery rankings", detail: "Rankings may intensify motivation for some while hardening labels and shifting attention from learning strategies." }
    ],
    alternatives: [
      { id: "station", label: "Teacher-led workshop stations", detail: "Use short diagnostic tasks, peer explanation, and targeted teacher conferences.", strong: true },
      { id: "bounded", label: "Bounded practice tool", detail: "Use the platform for selected rehearsal while keeping core instruction, discussion, and evaluation human-led." },
      { id: "peer", label: "Cross-age tutoring network", detail: "Invest in trained peer tutors and supervised collaborative practice." }
    ],
    conditions: [
      "Triangulate platform signals with student explanation and teacher evidence.",
      "Provide a fully equivalent accessible non-platform pathway.",
      "Limit learner profiles, retention, and secondary data use.",
      "Require local educator review of content and recommendations.",
      "Protect collaborative inquiry and open-ended curriculum time.",
      "Review transfer evidence and exit if benefits do not generalize."
    ]
  },

  attendance: {
    title: "Predictive attendance dashboard",
    eyebrow: "Proposal 03 · Predictive analytics",
    purpose: "Early support for attendance concerns",
    proposal: "Connect student-information, attendance, behavior, and course data to predict which students may become chronically absent and trigger intervention alerts.",
    nodeText: {
      learners: "Context, trust, opportunity",
      educators: "Relationships, referrals, judgment",
      families: "Work, care, transportation, dignity",
      curriculum: "Belonging and participation",
      assessment: "Risk categories and outcomes",
      district: "Resources, policy, intervention",
      vendor: "Profiles, thresholds, predictions"
    },
    price: [
      { id: "trust", icon: "◎", label: "Relational trust", detail: "A risk label can reach the meeting before the student's explanation, changing how adults interpret future behavior.", nodes: ["learners", "educators"] },
      { id: "context", icon: "⌂", label: "Contextual understanding", detail: "Transportation, caregiving, health, housing, work, and school climate can disappear inside a predictive category.", nodes: ["families", "assessment"] },
      { id: "privacy", icon: "◈", label: "Privacy and dignity", detail: "More data can improve visibility while increasing exposure, inference, and the risk of inappropriate secondary use.", nodes: ["learners", "vendor"] }
    ],
    stakeholders: [
      { id: "learners", status: "burden", label: "Flagged students", detail: "Earlier support may arrive, but false positives and persistent labels can alter expectations, discipline, and belonging." },
      { id: "families", status: "burden", label: "Families", detail: "Caregivers may gain support or experience automated outreach that ignores work, transportation, housing, health, or language context." },
      { id: "educators", status: "mixed", label: "Counselors and teachers", detail: "Alerts can focus attention, but unmanageable queues and opaque scores shift judgment toward the dashboard." },
      { id: "district", status: "benefit", label: "District leadership", detail: "Aggregated signals improve resource planning and reporting, especially when paired with sufficient human capacity." },
      { id: "vendor", status: "benefit", label: "Vendor", detail: "The provider gains access to linked institutional datasets and influence over the definition of risk." }
    ],
    demands: [
      { id: "integration", label: "Linked student records", detail: "Prediction requires joining attendance, course, behavior, demographic, and intervention records.", condition: "Minimize linked fields and prohibit unrelated secondary use.", edge: "learner-vendor" },
      { id: "threshold", label: "Risk thresholds", detail: "Someone decides which patterns count as concerning and how false positives are distributed.", condition: "Publish threshold logic and audit false-positive disparities.", edge: "district-vendor" },
      { id: "response", label: "Human response capacity", detail: "An accurate alert is useless without trusted staff, services, transportation, and time to respond.", condition: "Fund support capacity before expanding alerts.", edge: "teacher-district" },
      { id: "appeal", label: "Explanation and appeal", detail: "Students and families need a way to correct records and contest interpretations.", condition: "Provide notice, human review, correction, and appeal pathways.", edge: "learner-family" }
    ],
    timeline: [
      { label: "Launch", title: "Risk becomes visible", detail: "Teams receive earlier alerts and appreciate a shared view. The dashboard's confidence can make limited historical data feel more complete than it is." },
      { label: "One semester", title: "Labels begin to travel", detail: "Some students receive timely support. Others encounter repeated outreach or altered expectations without understanding why they were flagged." },
      { label: "One year", title: "The institution learns the model", detail: "Staff routines, resource allocation, and definitions of responsibility begin adapting to the dashboard's categories and thresholds." }
    ],
    rippleResponses: [
      { id: "review", label: "Require multidisciplinary human review", detail: "Treat the score as a prompt for inquiry, not a decision, and include family and student context.", strong: true },
      { id: "more", label: "Add more data fields", detail: "More data may improve prediction while expanding privacy risk and reinforcing correlations that still lack context." },
      { id: "automate", label: "Automate outreach immediately", detail: "Speed increases, but generic messages can damage trust or expose sensitive status without a human relationship." }
    ],
    alternatives: [
      { id: "universal", label: "Universal relational check-ins", detail: "Build regular advisor contact and low-friction support access before classifying individual risk.", strong: true },
      { id: "manual", label: "Human case-review protocol", detail: "Use transparent thresholds to convene a team without proprietary predictive scoring." },
      { id: "aggregate", label: "Aggregate barrier dashboard", detail: "Monitor transportation, schedule, climate, and service patterns without assigning individual risk scores." }
    ],
    conditions: [
      "Treat every score as a prompt for human inquiry, never an automated decision.",
      "Publish threshold logic and audit false-positive disparities.",
      "Provide notice, correction, explanation, and appeal pathways.",
      "Minimize linked fields and prohibit unrelated secondary use.",
      "Fund counselors, transportation, and services before expanding alerts.",
      "Review whether labels improve support without damaging trust."
    ]
  },

  phones: {
    title: "Phone-management system",
    eyebrow: "Proposal 04 · Attention governance",
    purpose: "Protect attention and classroom presence",
    proposal: "Require students to store phones in locked pouches during the school day, with centralized unlocking and a district-wide enforcement protocol.",
    nodeText: {
      learners: "Attention, agency, accessibility",
      educators: "Instruction, enforcement, trust",
      families: "Communication, safety, confidence",
      curriculum: "Presence and digital judgment",
      assessment: "Participation and conduct",
      district: "Policy, exceptions, consistency",
      vendor: "Pouches, locks, replacement cycle"
    },
    price: [
      { id: "agency", icon: "▯", label: "Practiced digital agency", detail: "Removing every choice can protect attention now while reducing opportunities to practice self-regulation and ethical use.", nodes: ["learners", "curriculum"] },
      { id: "accessibility", icon: "✚", label: "Accessibility pathways", detail: "Medical monitoring, communication supports, translation, and assistive uses can be treated as rule-breaking without careful exceptions.", nodes: ["learners", "families"] },
      { id: "trust", icon: "◇", label: "Relational trust", detail: "A universal lock can reduce conflict or communicate that students cannot participate in shaping shared norms.", nodes: ["learners", "educators"] }
    ],
    stakeholders: [
      { id: "learners", status: "mixed", label: "Students", detail: "Many gain a quieter social and instructional environment; others lose medical, language, organizational, or family communication supports." },
      { id: "educators", status: "mixed", label: "Teachers", detail: "Classroom interruptions may fall, but enforcement, exceptions, damaged pouches, and inconsistent follow-through create new work." },
      { id: "families", status: "burden", label: "Families", detail: "Some welcome reduced distraction; others fear losing emergency contact or do not trust centralized communication systems." },
      { id: "district", status: "mixed", label: "District leadership", detail: "Consistency may improve, while purchasing, replacement, exception, discipline, and emergency procedures become institutional obligations." },
      { id: "vendor", status: "benefit", label: "Vendor", detail: "The provider gains recurring sales, replacement demand, and influence over how attention governance is operationalized." }
    ],
    demands: [
      { id: "exceptions", label: "Exception architecture", detail: "Medical, disability, language, caregiving, and safety needs require fast, dignified pathways.", condition: "Publish accessible exceptions that do not stigmatize students.", edge: "learner-family" },
      { id: "enforcement", label: "Consistent enforcement", detail: "Uneven enforcement can reproduce discipline disparities and shift instructional time into compliance.", condition: "Audit enforcement patterns and prohibit punitive escalation for access needs.", edge: "teacher-district" },
      { id: "emergency", label: "Emergency communication", detail: "The policy depends on trusted school-to-family systems and clear unlocking procedures.", condition: "Test emergency communication and rapid-unlock procedures.", edge: "district-vendor" },
      { id: "replacement", label: "Material lifecycle", detail: "Locks, pouches, loss, damage, replacement, waste, and procurement become ongoing infrastructure.", condition: "Publish total lifecycle cost and a repair/replacement plan.", edge: "teacher-vendor" }
    ],
    timeline: [
      { label: "Launch", title: "The room becomes quieter", detail: "Visible phone use drops quickly. Some students report relief; others test workarounds or worry about access and communication." },
      { label: "One semester", title: "Exceptions define the policy", detail: "Medical, disability, language, family, emergency, damage, and enforcement cases consume more attention than the simple rule anticipated." },
      { label: "One year", title: "Attention becomes institutional", detail: "The school may build stronger shared norms—or equate compliance with engagement while leaving pedagogy, belonging, and self-regulation untouched." }
    ],
    rippleResponses: [
      { id: "norms", label: "Pair storage with attention pedagogy", detail: "Teach self-regulation, notification design, digital ethics, and shared norms rather than treating absence of a device as the whole outcome.", strong: true },
      { id: "punish", label: "Increase punishments", detail: "Punishment may increase compliance while intensifying disparities, conflict, concealment, and lost instructional time." },
      { id: "ignore", label: "Ignore exceptions until requested", detail: "Reactive exceptions place the burden on students and families and can expose private needs." }
    ],
    alternatives: [
      { id: "zones", label: "Context-specific phone zones", detail: "Use device-free instructional blocks with accessible storage and explicit permitted contexts.", strong: true },
      { id: "design", label: "Notification and attention redesign", detail: "Combine norms, app settings, classroom routines, family agreements, and direct instruction in self-regulation." },
      { id: "school", label: "School-owned learning devices", detail: "Separate instructional technology from personal-phone access while preserving documented supports." }
    ],
    conditions: [
      "Publish dignified medical, disability, language, and caregiving exceptions.",
      "Test emergency communication and rapid-unlock procedures.",
      "Audit enforcement patterns for discipline disparities.",
      "Pair storage with explicit attention and digital-agency instruction.",
      "Publish full lifecycle, replacement, and staffing costs.",
      "Review whether learning and belonging improve—not only visible compliance."
    ]
  }
};

const state = {
  scenarioKey: "writing",
  purposes: [],
  lensIndex: 0,
  evidence: {},
  priceRevealed: new Set(),
  priceProtected: new Set(),
  stakeholdersRevealed: new Set(),
  stakeholdersProtected: new Set(),
  demandsBounded: new Set(),
  timelineReached: 0,
  rippleResponse: null,
  technologyOff: false,
  alternative: null,
  decision: null,
  conditions: new Set()
};

const $ = (id) => document.getElementById(id);
const screens = [$("startScreen"), $("briefScreen"), $("gameScreen"), $("councilScreen"), $("debriefScreen")];
const nodeButtons = Array.from(document.querySelectorAll(".eco-node"));

function announce(message) {
  $("announcer").textContent = "";
  window.setTimeout(() => { $("announcer").textContent = message; }, 20);
}

function showScreen(screen, focusId) {
  screens.forEach((item) => {
    const active = item === screen;
    item.hidden = !active;
    item.classList.toggle("is-active", active);
  });
  window.scrollTo({ top: 0, behavior: document.body.classList.contains("reduce-motion") ? "auto" : "smooth" });
  window.setTimeout(() => {
    const target = focusId ? $(focusId) : screen.querySelector("h1, h2");
    if (target) {
      target.tabIndex = -1;
      target.focus({ preventScroll: true });
    }
  }, 80);
}

function resetGameState() {
  state.lensIndex = 0;
  state.evidence = {};
  state.priceRevealed = new Set();
  state.priceProtected = new Set();
  state.stakeholdersRevealed = new Set();
  state.stakeholdersProtected = new Set();
  state.demandsBounded = new Set();
  state.timelineReached = 0;
  state.rippleResponse = null;
  state.technologyOff = false;
  state.alternative = null;
  state.decision = null;
  state.conditions = new Set();
}

function currentScenario() {
  return SCENARIOS[state.scenarioKey];
}

function updatePurposeSelection() {
  const checked = Array.from(document.querySelectorAll('#purposeOptions input:checked'));
  if (checked.length > 2) {
    checked[checked.length - 1].checked = false;
    announce("Choose exactly two purposes.");
  }
  state.purposes = Array.from(document.querySelectorAll('#purposeOptions input:checked')).map((input) => input.value);
  const remaining = 2 - state.purposes.length;
  $("purposeStatus").textContent = remaining === 0 ? "Purpose charter ready." : `Select ${remaining} more ${remaining === 1 ? "purpose" : "purposes"}.`;
  $("startGameButton").disabled = remaining !== 0;
  Array.from(document.querySelectorAll('#purposeOptions input:not(:checked)')).forEach((input) => {
    input.disabled = remaining === 0;
  });
}

function beginGame() {
  const selected = document.querySelector('input[name="scenario"]:checked');
  state.scenarioKey = selected ? selected.value : "writing";
  resetGameState();
  const scenario = currentScenario();
  $("gameHeading").textContent = scenario.title;
  $("scenarioEyebrow").textContent = scenario.eyebrow;
  $("purposeRibbon").textContent = state.purposes.map((key) => PURPOSES[key]).join(" · ");
  $("coreTitle").textContent = scenario.title;
  $("corePurpose").textContent = scenario.purpose;
  Object.entries(scenario.nodeText).forEach(([key, text]) => {
    const target = $("node" + key.charAt(0).toUpperCase() + key.slice(1));
    if (target) target.textContent = text;
  });
  renderStructuredSystem();
  renderLens();
  showScreen($("gameScreen"), "gameHeading");
  announce(`${scenario.title} entered the school ecology. The Price Lens is active.`);
}

function renderStructuredSystem() {
  const scenario = currentScenario();
  const lens = QUESTIONS[state.lensIndex];
  $("structuredSystem").innerHTML = `
    <p><strong>Proposal:</strong> ${scenario.proposal}</p>
    <p><strong>Current lens:</strong> ${lens.title}</p>
    <ul>${Object.entries(scenario.nodeText).map(([key, text]) => `<li><strong>${formatNodeName(key)}:</strong> ${text}</li>`).join("")}</ul>
  `;
}

function formatNodeName(key) {
  const names = { learners: "Learners", educators: "Educators", families: "Families", curriculum: "Curriculum", assessment: "Assessment", district: "District", vendor: "Vendor" };
  return names[key] || key;
}

function resetEcosystemVisuals() {
  const ecosystem = $("ecosystem");
  ecosystem.className = "ecosystem";
  ecosystem.dataset.lens = QUESTIONS[state.lensIndex].key;
  nodeButtons.forEach((button) => {
    button.classList.remove("is-benefit", "is-burden", "is-demand", "is-faded");
    button.setAttribute("aria-pressed", "false");
  });
  document.querySelectorAll(".connection").forEach((edge) => {
    edge.style.opacity = "";
    edge.style.strokeWidth = "";
  });
}

function focusNodes(keys, mode = "is-burden") {
  nodeButtons.forEach((button) => {
    const active = keys.includes(button.dataset.node);
    button.classList.toggle(mode, active);
    button.setAttribute("aria-pressed", String(active));
  });
}

function renderLens() {
  const question = QUESTIONS[state.lensIndex];
  $("lensNumber").textContent = question.number;
  $("lensKicker").textContent = question.kicker;
  $("lensTitle").textContent = question.title;
  $("lensRoot").textContent = question.root;
  $("nextLensButton").textContent = question.next;
  $("nextLensButton").disabled = true;
  $("lensFeedback").className = "lens-feedback";
  $("lensFeedback").textContent = "";
  $("viewLegend").textContent = question.kicker.replace("The ", "") + " active";
  updateProgress();
  resetEcosystemVisuals();
  renderStructuredSystem();
  const renderers = [renderPriceLens, renderDistributionLens, renderDemandLens, renderRippleLens, renderMythLens];
  renderers[state.lensIndex]();
}

function updateProgress() {
  Array.from($("lensProgress").children).forEach((item, index) => {
    item.classList.toggle("is-current", index === state.lensIndex);
    item.classList.toggle("is-complete", index < state.lensIndex || Boolean(state.evidence[QUESTIONS[index].key]));
    if (index === state.lensIndex) item.setAttribute("aria-current", "step");
    else item.removeAttribute("aria-current");
  });
  Array.from($("evidenceTokens").children).forEach((item) => {
    item.classList.toggle("is-earned", Boolean(state.evidence[item.dataset.token]));
  });
}

function setFeedback(message, type = "success") {
  $("lensFeedback").textContent = message;
  $("lensFeedback").className = `lens-feedback is-${type}`;
}

function completeLens(summary) {
  const key = QUESTIONS[state.lensIndex].key;
  state.evidence[key] = summary;
  $("nextLensButton").disabled = false;
  updateProgress();
  announce(`${QUESTIONS[state.lensIndex].kicker} complete. ${summary}`);
}

function renderPriceLens() {
  const items = currentScenario().price;
  $("systemReadout").textContent = "Reveal all three possible prices. Then choose two forms of human capacity the council must explicitly protect.";
  $("lensWorkbench").innerHTML = `
    <p class="instruction"><strong>Reveal:</strong> Inspect the three places where a promised benefit may displace something educationally important.</p>
    <div class="reveal-grid">
      ${items.map((item) => `<button class="reveal-point" type="button" data-reveal="${item.id}"><span aria-hidden="true">${item.icon}</span><strong>Hidden price</strong><small>Reveal consequence</small></button>`).join("")}
    </div>
    <div class="price-choices" id="priceChoices" hidden>
      <p class="instruction"><strong>Protect:</strong> Select two capacities that must not disappear.</p>
      ${items.map((item) => `<button class="choice-button" type="button" aria-pressed="false" data-price="${item.id}"><strong>${item.label}</strong><small>${item.detail}</small></button>`).join("")}
      <p class="selection-counter" id="priceCounter">Choose two.</p>
    </div>
  `;
  $("lensWorkbench").querySelectorAll("[data-reveal]").forEach((button) => button.addEventListener("click", () => revealPrice(button.dataset.reveal, button)));
  $("lensWorkbench").querySelectorAll("[data-price]").forEach((button) => button.addEventListener("click", () => protectPrice(button.dataset.price, button)));
}

function revealPrice(id, button) {
  const item = currentScenario().price.find((entry) => entry.id === id);
  state.priceRevealed.add(id);
  button.classList.add("is-revealed");
  button.innerHTML = `<span aria-hidden="true">${item.icon}</span><strong>${item.label}</strong><small>${item.detail}</small>`;
  focusNodes(item.nodes);
  $("systemReadout").textContent = `${item.label}: ${item.detail}`;
  announce(`${item.label} revealed.`);
  if (state.priceRevealed.size === currentScenario().price.length) {
    $("lensWorkbench").querySelector(".reveal-grid").hidden = true;
    $("priceChoices").hidden = false;
    setFeedback("The promised benefit now has a visible price. Name what the council will protect rather than treating that loss as inevitable.", "warning");
  }
}

function protectPrice(id, button) {
  if (state.priceProtected.has(id)) state.priceProtected.delete(id);
  else if (state.priceProtected.size < 2) state.priceProtected.add(id);
  else {
    announce("Choose exactly two capacities to protect.");
    return;
  }
  button.setAttribute("aria-pressed", String(state.priceProtected.has(id)));
  $("priceCounter").textContent = state.priceProtected.size === 2 ? "Two protections named." : `Choose ${2 - state.priceProtected.size} more.`;
  if (state.priceProtected.size === 2) {
    const labels = currentScenario().price.filter((entry) => state.priceProtected.has(entry.id)).map((entry) => entry.label);
    setFeedback(`Price named: the council will protect ${labels.join(" and ").toLowerCase()}.`);
    completeLens(`The council named ${labels.join(" and ").toLowerCase()} as capacities that must not be silently traded away.`);
    $("lensWorkbench").querySelectorAll("[data-price]").forEach((item) => { item.disabled = true; });
  }
}

function renderDistributionLens() {
  const items = currentScenario().stakeholders;
  $("systemReadout").textContent = "Activate each stakeholder to reveal how benefits, burdens, and institutional power are distributed.";
  $("lensWorkbench").innerHTML = `
    <p class="instruction">Reveal all five stakeholder positions. Then select two groups whose burdens require an explicit safeguard or response.</p>
    <div class="stakeholder-key"><span class="benefit">Benefit</span><span class="burden">Burden</span><span class="mixed">Mixed</span></div>
    ${items.map((item) => `<button class="stakeholder-button" type="button" aria-pressed="false" data-stakeholder="${item.id}"><strong>${item.label}</strong><small>Reveal distribution</small></button>`).join("")}
    <p class="selection-counter" id="stakeholderCounter">Reveal five stakeholder positions.</p>
  `;
  $("lensWorkbench").querySelectorAll("[data-stakeholder]").forEach((button) => button.addEventListener("click", () => revealStakeholder(button.dataset.stakeholder, button)));
}

function revealStakeholder(id, button) {
  const item = currentScenario().stakeholders.find((entry) => entry.id === id);
  if (!state.stakeholdersRevealed.has(id)) {
    state.stakeholdersRevealed.add(id);
    button.classList.add(`status-${item.status}`);
    button.innerHTML = `<strong>${item.label} · ${item.status.charAt(0).toUpperCase() + item.status.slice(1)}</strong><small>${item.detail}</small>`;
    const node = document.querySelector(`[data-node="${id}"]`);
    if (node) node.classList.add(item.status === "benefit" ? "is-benefit" : item.status === "burden" ? "is-burden" : "is-demand");
    $("systemReadout").textContent = `${item.label}: ${item.detail}`;
    announce(`${item.label} revealed as ${item.status}.`);
    if (state.stakeholdersRevealed.size === currentScenario().stakeholders.length) {
      $("stakeholderCounter").textContent = "Now select two groups whose burdens require a safeguard.";
      setFeedback("Distribution is not a side effect. It is part of what the technology is.", "warning");
    }
    return;
  }
  if (state.stakeholdersRevealed.size < currentScenario().stakeholders.length) return;
  if (state.stakeholdersProtected.has(id)) state.stakeholdersProtected.delete(id);
  else if (state.stakeholdersProtected.size < 2) state.stakeholdersProtected.add(id);
  else {
    announce("Select exactly two stakeholder groups.");
    return;
  }
  button.setAttribute("aria-pressed", String(state.stakeholdersProtected.has(id)));
  $("stakeholderCounter").textContent = state.stakeholdersProtected.size === 2 ? "Two safeguard priorities selected." : `Select ${2 - state.stakeholdersProtected.size} more group.`;
  if (state.stakeholdersProtected.size === 2) {
    const labels = currentScenario().stakeholders.filter((entry) => state.stakeholdersProtected.has(entry.id)).map((entry) => entry.label);
    setFeedback(`Distribution mapped: safeguards must respond to the burdens carried by ${labels.join(" and ").toLowerCase()}.`);
    completeLens(`The council mapped uneven effects and prioritized ${labels.join(" and ").toLowerCase()} for safeguards.`);
    $("lensWorkbench").querySelectorAll("[data-stakeholder]").forEach((item) => { item.disabled = true; });
  }
}

function renderDemandLens() {
  const items = currentScenario().demands;
  $("systemReadout").textContent = "The vendor connections are thicker because the proposal depends on institutional inputs. Bound two dependencies before they become invisible infrastructure.";
  $("lensWorkbench").innerHTML = `
    <p class="instruction">Select two dependencies to govern explicitly. Selecting a dependency converts it into a condition of answerability.</p>
    <div class="dependency-map">
      ${items.map((item) => `<button class="dependency-button" type="button" aria-pressed="false" data-demand="${item.id}"><strong>${item.label}</strong><small>${item.detail}</small></button>`).join("")}
    </div>
    <p class="selection-counter" id="demandCounter">Bound two dependencies.</p>
  `;
  $("lensWorkbench").querySelectorAll("[data-demand]").forEach((button) => button.addEventListener("click", () => toggleDemand(button.dataset.demand, button)));
}

function toggleDemand(id, button) {
  const item = currentScenario().demands.find((entry) => entry.id === id);
  if (state.demandsBounded.has(id)) state.demandsBounded.delete(id);
  else if (state.demandsBounded.size < 2) state.demandsBounded.add(id);
  else {
    announce("Choose exactly two dependencies to govern.");
    return;
  }
  button.setAttribute("aria-pressed", String(state.demandsBounded.has(id)));
  const edge = document.querySelector(`[data-edge="${item.edge}"]`);
  if (edge) {
    edge.style.opacity = state.demandsBounded.has(id) ? ".25" : ".9";
    edge.style.strokeWidth = state.demandsBounded.has(id) ? "3" : "8";
  }
  $("systemReadout").textContent = state.demandsBounded.has(id) ? `Bounded: ${item.condition}` : `Dependency reopened: ${item.detail}`;
  $("demandCounter").textContent = state.demandsBounded.size === 2 ? "Two dependencies bounded." : `Bound ${2 - state.demandsBounded.size} more.`;
  if (state.demandsBounded.size === 2) {
    const labels = currentScenario().demands.filter((entry) => state.demandsBounded.has(entry.id)).map((entry) => entry.label);
    setFeedback(`Dependencies bounded: ${labels.join(" and ").toLowerCase()} will be governed rather than treated as free or neutral.`);
    completeLens(`The council converted ${labels.join(" and ").toLowerCase()} into explicit governance conditions.`);
    $("lensWorkbench").querySelectorAll("[data-demand]").forEach((item) => { item.disabled = true; });
  }
}

function renderRippleLens() {
  const timeline = currentScenario().timeline;
  $("systemReadout").textContent = timeline[0].detail;
  $("lensWorkbench").innerHTML = `
    <p class="instruction">Move through all three time points. The technology changes the environment, and the changed environment then changes how the technology is used.</p>
    <div class="time-control">
      <div class="time-labels"><span>Launch</span><span>One semester</span><span>One year</span></div>
      <input id="timeSlider" type="range" min="0" max="2" step="1" value="0" aria-label="Technology ecology timeline">
      <div class="time-card" id="timeCard"><strong>${timeline[0].title}</strong><p>${timeline[0].detail}</p></div>
    </div>
    <div id="rippleChoices" hidden>
      <p class="instruction"><strong>Respond:</strong> Which move best restores accountable human judgment?</p>
      ${currentScenario().rippleResponses.map((item) => `<button class="choice-button" type="button" aria-pressed="false" data-ripple="${item.id}"><strong>${item.label}</strong><small>${item.detail}</small></button>`).join("")}
    </div>
  `;
  $("timeSlider").addEventListener("input", handleTimeline);
  $("lensWorkbench").querySelectorAll("[data-ripple]").forEach((button) => button.addEventListener("click", () => chooseRipple(button.dataset.ripple, button)));
}

function handleTimeline(event) {
  const index = Number(event.target.value);
  const item = currentScenario().timeline[index];
  state.timelineReached = Math.max(state.timelineReached, index);
  $("timeCard").innerHTML = `<strong>${item.title}</strong><p>${item.detail}</p>`;
  $("systemReadout").textContent = `${item.label}: ${item.detail}`;
  $("ecosystem").classList.toggle("time-middle", index === 1);
  $("ecosystem").classList.toggle("time-late", index === 2);
  if (index === 2) {
    $("rippleChoices").hidden = false;
    setFeedback("The proposal is no longer a single tool. It has reorganized routines, evidence, expectations, and responsibility.", "warning");
  }
  announce(`${item.label}: ${item.title}.`);
}

function chooseRipple(id, button) {
  state.rippleResponse = id;
  $("lensWorkbench").querySelectorAll("[data-ripple]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  const response = currentScenario().rippleResponses.find((entry) => entry.id === id);
  const qualifier = response.strong ? "This response restores human evidence and judgment." : "This response addresses one symptom but leaves part of the ecological change unresolved.";
  setFeedback(`${response.label}: ${qualifier}`, response.strong ? "success" : "warning");
  completeLens(`The council anticipated a one-year ripple and selected “${response.label}” as its response.`);
}

function renderMythLens() {
  $("systemReadout").textContent = "The proposal currently appears central to the school. Remove it temporarily to see which purposes and alternatives remain.";
  $("lensWorkbench").innerHTML = `
    <div class="myth-switch">
      <div><strong>Imagine it gone</strong><small>Temporarily remove the technology from the school ecology.</small></div>
      <button class="switch-button" id="mythSwitch" type="button" role="switch" aria-checked="false" aria-label="Imagine the technology removed"></button>
    </div>
    <div id="alternativeChoices" hidden>
      <p class="instruction"><strong>Reopen the choice:</strong> Select one alternative that could serve the original purpose differently.</p>
      ${currentScenario().alternatives.map((item) => `<button class="alternative-button" type="button" aria-pressed="false" data-alternative="${item.id}"><strong>${item.label}</strong><small>${item.detail}</small></button>`).join("")}
    </div>
  `;
  $("mythSwitch").addEventListener("click", toggleTechnology);
  $("lensWorkbench").querySelectorAll("[data-alternative]").forEach((button) => button.addEventListener("click", () => chooseAlternative(button.dataset.alternative, button)));
}

function toggleTechnology() {
  state.technologyOff = !state.technologyOff;
  $("mythSwitch").setAttribute("aria-checked", String(state.technologyOff));
  $("mythSwitch").setAttribute("aria-pressed", String(state.technologyOff));
  $("ecosystem").classList.toggle("technology-off", state.technologyOff);
  $("alternativeChoices").hidden = !state.technologyOff;
  nodeButtons.forEach((node) => node.classList.toggle("is-faded", false));
  if (state.technologyOff) {
    $("systemReadout").textContent = "The school still has purposes, people, knowledge, and organizational choices. The vendor platform was one means—not the purpose itself.";
    setFeedback("Inevitability broken. The question is no longer 'How do we adopt it?' but 'What combination of tools, people, and structures best serves the purpose?'", "warning");
    announce("Technology removed from the system view. Alternatives are now visible.");
  } else {
    $("systemReadout").textContent = "Technology restored. Compare it with the alternatives rather than treating it as the natural order.";
  }
}

function chooseAlternative(id, button) {
  state.alternative = id;
  $("lensWorkbench").querySelectorAll("[data-alternative]").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
  const alternative = currentScenario().alternatives.find((entry) => entry.id === id);
  const qualifier = alternative.strong ? "This preserves the original purpose while keeping human judgment visible." : "This demonstrates that the purpose can be pursued through a different arrangement of people and tools.";
  setFeedback(`${alternative.label}: ${qualifier}`);
  completeLens(`The council broke the myth of inevitability by imagining “${alternative.label}.”`);
}

function advanceLens() {
  if (!state.evidence[QUESTIONS[state.lensIndex].key]) return;
  if (state.lensIndex < QUESTIONS.length - 1) {
    state.lensIndex += 1;
    renderLens();
    $("lensTitle").tabIndex = -1;
    $("lensTitle").focus({ preventScroll: true });
    announce(`${QUESTIONS[state.lensIndex].kicker} active.`);
  } else {
    renderCouncil();
    showScreen($("councilScreen"), "councilTitle");
    announce("All five lenses complete. The final council is now in session.");
  }
}

function renderCouncil() {
  state.decision = null;
  state.conditions = new Set();
  $("conditionOptions").innerHTML = currentScenario().conditions.map((condition, index) => `
    <label><input type="checkbox" value="${index}"><span>${condition}</span></label>
  `).join("");
  $("conditionOptions").querySelectorAll("input").forEach((input) => input.addEventListener("change", updateCouncilState));
  $("decisionGrid").querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-checked", "false");
    button.addEventListener("click", selectDecision, { once: false });
  });
  updateCouncilState();
}

function selectDecision(event) {
  const selected = event.currentTarget;
  state.decision = selected.dataset.decision;
  $("decisionGrid").querySelectorAll("button").forEach((button) => button.setAttribute("aria-checked", String(button === selected)));
  updateCouncilState();
  announce(`${selected.querySelector("strong").textContent} selected.`);
}

function updateCouncilState() {
  const checked = Array.from($("conditionOptions").querySelectorAll("input:checked"));
  if (checked.length > 3) {
    checked[checked.length - 1].checked = false;
    announce("Choose exactly three conditions.");
  }
  state.conditions = new Set(Array.from($("conditionOptions").querySelectorAll("input:checked")).map((input) => Number(input.value)));
  const complete = Boolean(state.decision) && state.conditions.size === 3;
  $("generateCharterButton").disabled = !complete;
  const remaining = 3 - state.conditions.size;
  $("conditionStatus").textContent = !state.decision ? "Choose a council decision and three conditions." : remaining === 0 ? "Decision and conditions ready." : `Choose ${remaining} more ${remaining === 1 ? "condition" : "conditions"}.`;
  Array.from($("conditionOptions").querySelectorAll("input:not(:checked)")).forEach((input) => { input.disabled = state.conditions.size === 3; });
}

function generateCharter() {
  const scenario = currentScenario();
  const decisionLabels = {
    adopt: "Adopt",
    pilot: "Pilot with conditions",
    redesign: "Redesign before introduction",
    alternative: "Use an alternative approach",
    decline: "Decline for now"
  };
  const selectedConditions = scenario.conditions.filter((_, index) => state.conditions.has(index));
  const protectedPrices = scenario.price.filter((item) => state.priceProtected.has(item.id)).map((item) => item.label);
  const protectedStakeholders = scenario.stakeholders.filter((item) => state.stakeholdersProtected.has(item.id)).map((item) => item.label);
  const boundedDemands = scenario.demands.filter((item) => state.demandsBounded.has(item.id)).map((item) => item.label);
  const alternative = scenario.alternatives.find((item) => item.id === state.alternative);
  const ripple = scenario.rippleResponses.find((item) => item.id === state.rippleResponse);

  $("charterDate").textContent = new Date().getFullYear();
  $("charterContent").innerHTML = `
    <section class="charter-section"><h4>Proposal reviewed</h4><p><strong>${scenario.title}</strong> — ${scenario.proposal}</p></section>
    <section class="charter-section"><h4>Purposes it must serve</h4><p>${state.purposes.map((key) => PURPOSES[key]).join(" and ")}.</p></section>
    <section class="charter-section"><h4>Council posture</h4><p><strong>${decisionLabels[state.decision]}</strong>. This is a revisable institutional judgment, not a universal verdict about the technology.</p></section>
    <section class="charter-section"><h4>What must not be silently traded away</h4><p>${protectedPrices.join(" and ")}.</p></section>
    <section class="charter-section"><h4>Whose burdens require response</h4><p>${protectedStakeholders.join(" and ")}.</p></section>
    <section class="charter-section"><h4>Dependencies made governable</h4><p>${boundedDemands.join(" and ")}.</p></section>
    <section class="charter-section"><h4>Ecological response</h4><p>${ripple ? ripple.label + ": " + ripple.detail : "No response recorded."}</p></section>
    <section class="charter-section"><h4>Alternative kept visible</h4><p>${alternative ? alternative.label + ": " + alternative.detail : "No alternative recorded."}</p></section>
    <section class="charter-section"><h4>Conditions of answerability</h4><ul>${selectedConditions.map((condition) => `<li>${condition}</li>`).join("")}</ul></section>
    <section class="charter-section"><h4>Review commitment</h4><p>The council will revisit this decision using evidence about learning, access, power, privacy, workload, and unintended change. Continuation is not automatic.</p></section>
  `;

  const plainText = [
    "ANSWERABILITY CHARTER",
    "",
    `Proposal: ${scenario.title}`,
    `Purpose: ${state.purposes.map((key) => PURPOSES[key]).join(" and ")}`,
    `Council posture: ${decisionLabels[state.decision]}`,
    `Protect: ${protectedPrices.join(" and ")}`,
    `Safeguard: ${protectedStakeholders.join(" and ")}`,
    `Govern: ${boundedDemands.join(" and ")}`,
    `Ecological response: ${ripple ? ripple.label : "Not recorded"}`,
    `Alternative kept visible: ${alternative ? alternative.label : "Not recorded"}`,
    "",
    "Conditions:",
    ...selectedConditions.map((condition) => `- ${condition}`),
    "",
    "Review commitment: Revisit the decision using evidence about learning, access, power, privacy, workload, and unintended change. Continuation is not automatic.",
    "",
    "Teaching note: This charter is illustrative. It is not a validated assessment result, research finding, legal advice, or endorsed district policy."
  ].join("\n");
  $("charterText").value = plainText;
  showScreen($("debriefScreen"), "debriefTitle");
  announce("Answerability Charter generated. No response has been stored or transmitted.");
}

async function copyCharter() {
  const field = $("charterText");
  try {
    await navigator.clipboard.writeText(field.value);
    $("copyStatus").textContent = "Charter copied. Nothing was stored or transmitted by this game.";
  } catch (error) {
    field.focus();
    field.select();
    $("copyStatus").textContent = "Clipboard access is unavailable. The text is selected; press Ctrl+C or Command+C.";
  }
}

function replay() {
  document.querySelectorAll('#purposeOptions input').forEach((input) => { input.checked = false; input.disabled = false; });
  state.purposes = [];
  updatePurposeSelection();
  showScreen($("briefScreen"), "briefTitle");
  announce("Returned to the proposal briefing. Choose another technology or purpose charter.");
}

function toggleMotion() {
  const reduced = !document.body.classList.contains("reduce-motion");
  document.body.classList.toggle("reduce-motion", reduced);
  $("motionToggle").setAttribute("aria-pressed", String(reduced));
  $("motionToggle").textContent = reduced ? "Motion reduced" : "Reduce motion";
  announce(reduced ? "Motion reduced." : "Motion restored.");
}

$("openBriefButton").addEventListener("click", () => showScreen($("briefScreen"), "briefTitle"));
$("backToHeroButton").addEventListener("click", () => showScreen($("startScreen"), "heroTitle"));
$("purposeOptions").addEventListener("change", updatePurposeSelection);
$("startGameButton").addEventListener("click", beginGame);
$("nextLensButton").addEventListener("click", advanceLens);
$("generateCharterButton").addEventListener("click", generateCharter);
$("copyCharterButton").addEventListener("click", copyCharter);
$("replayButton").addEventListener("click", replay);
$("motionToggle").addEventListener("click", toggleMotion);

nodeButtons.forEach((button) => button.addEventListener("click", () => {
  const label = button.querySelector("strong").textContent;
  const detail = button.querySelector("small").textContent;
  $("systemReadout").textContent = `${label}: ${detail}`;
  announce(`${label}: ${detail}`);
}));

updatePurposeSelection();

