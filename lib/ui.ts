/**
 * Behaviour carried over from the prototype: tab switches, accordions, modals,
 * filters, the diagnostic and the form stubs.
 *
 * These work by id against markup that already carries those ids, so they are
 * ported as-is rather than rebuilt as state. The three helpers below are typed
 * loosely on purpose — every caller is DOM code that was written against a
 * live document, and widening them here keeps `strict` on everywhere else.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
const byId = (id: string): any => (typeof document === 'undefined' ? null : document.getElementById(id));
const qsa = (sel: string): any[] => (typeof document === 'undefined' ? [] : Array.from(document.querySelectorAll(sel)));
const qs = (sel: string): any => (typeof document === 'undefined' ? null : document.querySelector(sel));

/** Set by the header once Next's router is available, so the ported code can
 *  navigate without a full page load. */
let navigate: (href: string) => void = (href) => {
  if (typeof window !== 'undefined') window.location.assign(href);
};
export function setNavigator(fn: (href: string) => void) {
  navigate = fn;
}

export const ROUTES: Record<string, string> = {
  "homepage": "/",
  "about": "/about",
  "programmes": "/courses",
  "course": "/courses/english-for-professional-success",
  "coaching": "/coaching",
  "organisational": "/for-organisations",
  "development": "/start-your-development",
  "resources": "/resources",
  "contact": "/contact",
  "insights": "/insights",
  "dashboard": "/dashboard"
};

export function navigateTo(view: string, focus?: string) {
  const base = ROUTES[view] ?? '/';
  navigate(focus ? `${base}?focus=${encodeURIComponent(focus)}` : base);
}

/** Registered by the header; returns its own cleanup. */
export function initStickyHeader(): () => void {
  const onScroll = () => {
    const header = byId('mainHeader');
    if (!header) return;
    header.classList.toggle('shadow-md', window.scrollY > 20);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}

    // Mobile Menu Toggle
export function toggleMobileMenu() {
      const menu = byId('mobileMenu');
      const icon = byId('menuIcon');
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.classList.replace('fa-bars', 'fa-xmark');
      } else {
        menu.classList.add('hidden');
        icon.classList.replace('fa-xmark', 'fa-bars');
      }
    }

    
    // SINGLE COURSE TAB SWITCHER
export function switchCourseTab(tabKey: any) {
      const tabs = ['overview', 'curriculum', 'trainer', 'faqs'];
      
      tabs.forEach((t: any) => {
        const btn = byId('cTab-' + t);
        const pane = byId('cContent-' + t);
        
        if (t === tabKey) {
          if (btn) {
            btn.className = 'course-tab-btn flex-1 py-3 px-4 rounded-xl transition bg-brand-500 text-white shadow-sm text-center cursor-pointer';
          }
          if (pane) pane.classList.remove('hidden');
        } else {
          if (btn) {
            btn.className = 'course-tab-btn flex-1 py-3 px-4 rounded-xl transition text-charcoal-700 hover:bg-gray-100 text-center cursor-pointer';
          }
          if (pane) pane.classList.add('hidden');
        }
      });
    }

    // LEARNPRESS LMS MODULE ACCORDION TOGGLE
export function toggleLmsModule(modNum: any) {
      const content = byId('modContent-' + modNum);
      const icon = byId('modIcon-' + modNum);
      
      if (!content || !icon) return;

      if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        icon.classList.add('rotate-180');
      } else {
        content.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    }

    // FAQ ACCORDION TOGGLE
export function toggleFaq(faqNum: any) {
      const answer = byId('faqAnswer-' + faqNum);
      const icon = byId('faqIcon-' + faqNum);

      if (!answer || !icon) return;

      if (answer.classList.contains('hidden')) {
        answer.classList.remove('hidden');
        icon.classList.add('rotate-180');
      } else {
        answer.classList.add('hidden');
        icon.classList.remove('rotate-180');
      }
    }

    // LOGIN MODAL HANDLERS
export function openLoginModal() {
      const modal = byId('loginModal');
      const form = byId('lmsLoginForm');
      const success = byId('loginSuccessState');
      if (form) form.classList.remove('hidden');
      if (success) success.classList.add('hidden');
      if (modal) modal.classList.remove('hidden');
    }

export function closeLoginModal() {
      const modal = byId('loginModal');
      if (modal) modal.classList.add('hidden');
    }

export function handleLoginSubmit(e: any) {
      e.preventDefault();
      const btn = byId('loginSubmitBtn');
      if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Authenticating...';
      setTimeout(() => {
        closeLoginModal();
        navigateTo('dashboard');
        showToast('Logged In Successfully', 'Welcome back, Sarah Jenkins! Your Eduma Student Dashboard is ready.');
        if (btn) btn.innerHTML = '<span>Log In to Dashboard</span><i class="fa-solid fa-arrow-right ml-2 text-xs"></i>';
      }, 500);
    }

    // B2B FORM POPULATION & ACTIONS
export function populateB2BNeed(serviceName: any) {
      const formSection = byId('b2bLeadSection');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
      }
      const msgArea = byId('b2bMessage');
      if (msgArea) {
        msgArea.value = 'Interested in discussing ' + serviceName + ' for our organisation.';
      }
    }

export function handleB2BSubmit(e: any) {
      e.preventDefault();
      const btn = byId('b2bSubmitBtn');
      btn.innerText = 'Submitting Request...';
      setTimeout(() => {
        byId('b2bForm').classList.add('hidden');
        byId('b2bSuccessMsg').classList.remove('hidden');
      }, 600);
    }

export function resetB2BForm() {
      byId('b2bForm').reset();
      byId('b2bForm').classList.remove('hidden');
      byId('b2bSuccessMsg').classList.add('hidden');
      const btn = byId('b2bSubmitBtn');
      if (btn) btn.innerText = 'Submit Request for Corporate Consultation & Proposal';
    }

    // SYLLABUS & BROCHURE DOWNLOADS SIMULATION
export function downloadSyllabus() {
      const btn = byId('syllabusBtn');
      if (btn) {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-circle-check text-brand-400 mr-2"></i>Syllabus Downloaded!';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 3000);
      }
    }

export function downloadCorporateBrochure() {
      const btn = byId('corpBrochureBtn');
      if (btn) {
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-circle-check text-brand-400 mr-2"></i>Brochure Downloaded!';
        setTimeout(() => {
          btn.innerHTML = originalHtml;
        }, 3000);
      }
    }

    // Consultation Discovery Modal Handlers
export function openModal(focusArea: any) {
      const modal = byId('consultationModal');
      const form = byId('discoveryForm');
      const success = byId('modalSuccess');
      if (form) form.classList.remove('hidden');
      if (success) success.classList.add('hidden');
      if (focusArea && byId('modalFocusSelect')) {
        const select = byId('modalFocusSelect');
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].value.includes(focusArea)) {
            select.selectedIndex = i;
            break;
          }
        }
      }
      modal.classList.remove('hidden');
    }

export function closeModal() {
      const modal = byId('consultationModal');
      modal.classList.add('hidden');
    }

    // Form Submissions
export function handleDiscoverySubmit(e: any) {
      e.preventDefault();
      byId('discoveryForm').classList.add('hidden');
      byId('modalSuccess').classList.remove('hidden');
    }

export function handleLeadMagnetSubmit(e: any) {
      e.preventDefault();
      const name = byId('leadName').value;
      const email = byId('leadEmail').value;
      const btn = byId('leadSubmitBtn');
      btn.innerText = 'Sending...';
      setTimeout(() => {
        btn.innerText = 'Downloaded!';
        byId('leadSuccessMsg').classList.remove('hidden');
      }, 500);
    }

    // Podcast Audio Preview Button
export function toggleAudioPreview(btn: any) {
      const icon = btn.querySelector('i');
      const span = btn.querySelector('span');
      if (icon.classList.contains('fa-play')) {
        icon.classList.replace('fa-play', 'fa-pause');
        span.innerText = 'Playing Sample...';
        btn.classList.add('text-brand-700');
      } else {
        icon.classList.replace('fa-pause', 'fa-play');
        span.innerText = 'Listen Preview';
        btn.classList.remove('text-brand-700');
      }
    }

    // PROGRAMMES SEARCH & FILTER (Programmes Page)
export function filterProgrammes(category: any) {
      const cards = qsa('.programme-card');
      const buttons = qsa('.prog-filter-btn');

      // Update active filter button
      buttons.forEach((btn: any) => {
        if (btn.getAttribute('data-cat') === category) {
          btn.className = 'prog-filter-btn px-4 py-2 rounded-full text-xs font-bold transition bg-emerald-600 text-white shadow-xs cursor-pointer whitespace-nowrap';
        } else {
          btn.className = 'prog-filter-btn px-4 py-2 rounded-full text-xs font-bold transition bg-gray-100 hover:bg-gray-200 text-gray-700 cursor-pointer whitespace-nowrap';
        }
      });

      // Filter cards
      let visibleCount = 0;
      cards.forEach((card: any) => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      const countEl = byId('programmeResultsCount');
      if (countEl) {
        countEl.innerText = 'Showing ' + visibleCount + ' programmes';
      }
    }

export function filterProgrammesBySearch() {
      const query = (byId('courseSearchInput')?.value || byId('programmeSearchInput')?.value || '').toLowerCase().trim();
      const cards = qsa('.programme-card');
      let visibleCount = 0;

      cards.forEach((card: any) => {
        const title = card.querySelector('h3')?.innerText.toLowerCase() || '';
        const desc = card.querySelector('p')?.innerText.toLowerCase() || '';
        const cat = card.getAttribute('data-category')?.toLowerCase() || '';

        if (!query || title.includes(query) || desc.includes(query) || cat.includes(query)) {
          card.classList.remove('hidden');
          visibleCount++;
        } else {
          card.classList.add('hidden');
        }
      });

      const countEl = byId('programmeResultsCount');
      if (countEl) {
        countEl.innerText = query ? 'Found ' + visibleCount + ' matching programmes' : 'Showing ' + visibleCount + ' programmes';
      }
    }

    // 2-MINUTE SPEECH & EXECUTIVE DIAGNOSTIC (Resources page)
    // Four questions, one at a time; the total score picks a recommended
    // pathway. The markup for the result panel already lives in the page.
    const SPEECH_DIAGNOSTIC = [
      {
        q: 'You are asked an unexpected question in a meeting. What usually happens?',
        options: [
          { label: 'I answer straight away and stay on track', score: 4 },
          { label: 'I need a moment, then I get there', score: 3 },
          { label: 'I talk around it and lose the thread', score: 2 },
          { label: 'I say as little as possible', score: 1 },
        ],
      },
      {
        q: 'How do you feel about presenting to people more senior than you?',
        options: [
          { label: 'Comfortable — I adapt to the room', score: 4 },
          { label: 'Fine once I have started', score: 3 },
          { label: 'I rehearse heavily and still feel exposed', score: 2 },
          { label: 'I avoid it where I can', score: 1 },
        ],
      },
      {
        q: 'When you disagree with a decision, what do you do?',
        options: [
          { label: 'Say so clearly, with a reason', score: 4 },
          { label: 'Raise it, but carefully', score: 3 },
          { label: 'Mention it afterwards, one to one', score: 2 },
          { label: 'Keep it to myself', score: 1 },
        ],
      },
      {
        q: 'Working in English across cultures, what slows you down most?',
        options: [
          { label: 'Nothing much — it is second nature', score: 4 },
          { label: 'Finding the right register for the room', score: 3 },
          { label: 'Idiom, speed and being interrupted', score: 2 },
          { label: 'Vocabulary under pressure', score: 1 },
        ],
      },
    ];

    let quizStep = 0;
    const quizScores: number[] = [];

export function renderQuizStep() {
      const box = byId('quizQuestionBox');
      const indicator = byId('quizStepIndicator');
      if (!box) return;

      const item = SPEECH_DIAGNOSTIC[quizStep];
      if (indicator) indicator.innerText = 'Question ' + (quizStep + 1) + ' of ' + SPEECH_DIAGNOSTIC.length;

      box.innerHTML =
        '<h3 class="text-lg sm:text-xl font-bold text-gray-900">' + item.q + '</h3>' +
        '<div class="space-y-3">' +
        item.options
          .map(
            (o) =>
              '<button type="button" onclick="answerQuiz(' + o.score + ')" ' +
              'class="w-full text-left px-5 py-4 rounded-xl border border-charcoal-200 hover:border-emerald-600 hover:bg-emerald-50 transition text-sm font-medium text-gray-800 cursor-pointer">' +
              o.label +
              '</button>',
          )
          .join('') +
        '</div>' +
        (quizStep > 0
          ? '<button type="button" onclick="backQuizStep()" class="text-xs font-semibold text-gray-500 hover:text-gray-900 transition cursor-pointer">&larr; Previous question</button>'
          : '');
    }

export function answerQuiz(score: any) {
      quizScores[quizStep] = score;
      if (quizStep < SPEECH_DIAGNOSTIC.length - 1) {
        quizStep++;
        renderQuizStep();
      } else {
        showQuizResult();
      }
    }

export function backQuizStep() {
      if (quizStep === 0) return;
      quizStep--;
      renderQuizStep();
    }

export function showQuizResult() {
      const container = byId('quizContainer');
      const result = byId('quizResultBox');
      const summary = byId('quizResultSummary');
      const course = byId('quizRecommendedCourse');
      if (!result) return;

      const total = quizScores.reduce((a: any, b: any) => a + b, 0);
      let text, pathway;

      if (total >= 14) {
        pathway = 'Leadership & Executive Presence';
        text = 'You are already clear and comfortable in most rooms. The gain now is in influence rather than fluency — storytelling, negotiating, and leading people through change.';
      } else if (total >= 10) {
        pathway = 'Communication & Professional English';
        text = 'You hold your own in familiar settings, and hesitate in the higher-stakes ones. Structured practice on register, pacing and pushback is where the progress is.';
      } else if (total >= 6) {
        pathway = 'Personal Development & Workplace Confidence';
        text = 'You know what you want to say and something gets in the way of saying it. Confidence and rehearsal come before technique here.';
      } else {
        pathway = 'Career & Employability Foundations';
        text = 'Starting from the ground up is the fastest route: everyday professional language, interviews, and speaking up in meetings without dreading it.';
      }

      if (summary) summary.innerText = text;
      if (course) course.innerText = pathway;
      if (container) container.classList.add('hidden');
      result.classList.remove('hidden');
      result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

export function restartQuiz() {
      quizStep = 0;
      quizScores.length = 0;
      const container = byId('quizContainer');
      const result = byId('quizResultBox');
      if (result) result.classList.add('hidden');
      if (container) container.classList.remove('hidden');
      renderQuizStep();
    }

    // START YOUR DEVELOPMENT PAGE INTAKE FORM (Replaced old popup with full page!)
export function handleDevelopmentSubmit(e: any) {
      e.preventDefault();
      const form = byId('developmentIntakeForm');
      const success = byId('developmentSuccessState');
      const btn = byId('developmentSubmitBtn');
      
      if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Processing Your Diagnostic Application...';

      setTimeout(() => {
        if (form) form.classList.add('hidden');
        if (success) success.classList.remove('hidden');
        success.scrollIntoView({ behavior: 'smooth' });
        if (btn) btn.innerHTML = '<span>Submit Development Profile & Request Action Plan</span><i class="fa-solid fa-arrow-right ml-2"></i>';
      }, 750);
    }

export function resetDevelopmentForm() {
      const form = byId('developmentIntakeForm');
      const success = byId('developmentSuccessState');
      if (form) {
        form.reset();
        form.classList.remove('hidden');
      }
      if (success) success.classList.add('hidden');
    }

    // CONTACT PAGE FORM
export function handleContactSubmit(e: any) {
      e.preventDefault();
      const form = byId('contactPageForm');
      const success = byId('contactPageSuccess');
      const btn = byId('contactPageSubmitBtn');

      if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i>Transmitting to London HQ...';

      setTimeout(() => {
        if (form) form.classList.add('hidden');
        if (success) success.classList.remove('hidden');
        if (btn) btn.innerHTML = '<span>Send Message to Executive Advisory</span><i class="fa-solid fa-arrow-right ml-2"></i>';
      }, 700);
    }

export function resetContactForm() {
      const form = byId('contactPageForm');
      const success = byId('contactPageSuccess');
      if (form) {
        form.reset();
        form.classList.remove('hidden');
      }
      if (success) success.classList.add('hidden');
    }

    // ==========================================
    // GLOBAL TOAST NOTIFICATION ENGINE
    // ==========================================
    let toastTimeout: ReturnType<typeof setTimeout> | null = null;
export function showToast(title: any, msg: any, iconClass = 'fa-solid fa-circle-check') {
      const toast = byId('toastNotification');
      const titleEl = byId('toastTitle');
      const msgEl = byId('toastMsg');
      const iconEl = byId('toastIcon');

      if (!toast) return;

      if (titleEl) titleEl.innerText = title;
      if (msgEl) msgEl.innerText = msg;
      if (iconEl) iconEl.className = iconClass;

      toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
      toast.classList.add('translate-y-0', 'opacity-100', 'pointer-events-auto');

      if (toastTimeout) clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        dismissToast();
      }, 3800);
    }

export function dismissToast() {
      const toast = byId('toastNotification');
      if (toast) {
        toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        toast.classList.remove('translate-y-0', 'opacity-100', 'pointer-events-auto');
      }
    }

    // ==========================================
    // INSIGHTS & PODCAST DATA & FUNCTIONS
    // ==========================================
    const ARTICLES_DATA = [
      {
        title: "Executive Gravitas: The Subtle Nuances of Communicating in Multinational Boardrooms",
        category: "Executive Communication",
        readTime: "6 min read",
        date: "September 2026",
        body: [
          "In high-stakes multinational corporate environments, executive presence is frequently mistaken for vocal volume or aggressive dominance. In reality, true board-level gravitas is conveyed through deliberate pacing, economy of language, and strategic emotional composure.",
          "When senior executives present to diverse global boards, linguistic ambiguity creates friction. English may serve as the operational lingua franca, yet regional idiomatic nuances, rapid speech tempos, and indirect cultural registers often derail strategic alignment.",
          "The hallmark of master communicators is the 'Structured Silence': pausing for 1.5 to 2 seconds before answering unexpected questions. This subtle micro-habit signals deep analytical reflection rather than reactive defensiveness, instantly elevating the perceived weight of the speaker's judgment."
        ],
        takeaways: [
          "Adopt the 'Rule of Three': Limit core board recommendations to three distinct, high-impact pillars.",
          "Calibrate speech cadence between 130 and 145 words per minute to ensure effortless non-native comprehension.",
          "Eliminate qualifier preambles ('I kind of think', 'This might sound obvious') in executive submissions."
        ]
      },
      {
        title: "Beyond Small Talk: The Strategic Art of Executive Rapport Building",
        category: "Leadership Influence",
        readTime: "5 min read",
        date: "August 2026",
        body: [
          "Superficial corridor pleasantries rarely forge enduring strategic alliances. For leaders navigating complex organisational politics, high-trust rapport is established when business conversations move seamlessly between macro vision and personal empathy.",
          "Drawing from empirical research across FTSE 100 executives and international diplomatic delegations, this analysis unpacks the transition from transactional networking to foundational partnership.",
          "By employing 'Active Intentional Inquiry'—asking questions focused on operational bottlenecks and leadership philosophy rather than standard operational metrics—leaders establish themselves as confidential sounding boards."
        ],
        takeaways: [
          "Replace generic queries with context-rich conversational bridges ('What is the single highest leverage initiative on your radar this quarter?').",
          "Match the emotional intensity and linguistic speed of your counter-party before gently guiding the conversation.",
          "Close every informal dialogue with an actionable value-add or cross-functional introduction."
        ]
      },
      {
        title: "Diplomatic Assertion: Saying No to Stakeholders Without Damaging Alliances",
        category: "Workplace Dynamics",
        readTime: "7 min read",
        date: "August 2026",
        body: [
          "Executive bandwidth is a finite corporate asset. Yet, senior leaders frequently compromise operational execution because they lack the diplomatic linguistic toolkit to reject unfeasible stakeholder requests without causing friction.",
          "Diplomatic assertion operates on the principle of 'Conditional Alignment'. Instead of delivering an abrupt negative, sophisticated leaders frame constraints around trade-offs and shared strategic milestones.",
          "When you demonstrate that saying 'no' to an ad-hoc request protects the strategic delivery of a mutual Tier-1 objective, resistance softens and respect increases."
        ],
        takeaways: [
          "Utilise the 'Trade-Off Framework': 'We can allocate resources to Project X, provided we postpone the Q3 rollout of Milestone Y. Which do you prioritise?'.",
          "Separate the relationship from the decision: Affirm the stakeholder's intent while methodically addressing operational limits.",
          "Document alternatives immediately in writing to solidify clarity."
        ]
      },
      {
        title: "Cross-Border Speech Patterns: How Multilingual Leaders Command Authority",
        category: "Language & Culture",
        readTime: "8 min read",
        date: "July 2026",
        body: [
          "For bilingual and multilingual executives, conducting high-stakes negotiations in English is often perceived as an uphill battle. However, linguistic diversity is an immense strategic advantage when harnessed with precision.",
          "Multilingual professionals possess an innate capacity for cognitive flexibility, perspective-taking, and subtle tonal calibration. The key hurdle is phonetic strain and hyper-focus on grammatical perfection.",
          "In London and international commercial hubs, boardrooms prioritize precision of thought over native colloquialisms. Clear consonant articulation and downward inflections at sentence conclusions convey unquestionable authority."
        ],
        takeaways: [
          "Anchor your tone with downward inflections: End factual statements with a falling pitch rather than an uncertain rising pitch.",
          "Embrace intentional pauses to structure complex syntax into digestible thought units.",
          "Replace jargon with universal commercial terminology to minimize cross-cultural misinterpretation."
        ]
      },
      {
        title: "Crisis Cadence: Delivering Uncomfortable Financial Guidance with Calm Authority",
        category: "Executive Communication",
        readTime: "6 min read",
        date: "July 2026",
        body: [
          "When market downturns, supply disruptions, or quarterly misses occur, market analysts and internal teams scrutinize every micro-expression, vocal tremor, and phrasing choice of leadership.",
          "In crisis communication, ambiguity breeds panic. Transparent candour paired with a clear, methodical remediation roadmap preserves credibility and investor confidence.",
          "Leaders must master the 'De-escalation Vocal Envelope'—speaking with controlled diaphragmatic breath support, avoiding rushed syllables, and acknowledging organizational friction with measured empathy."
        ],
        takeaways: [
          "State facts before interpretation: Provide verified empirical data before contextual commentary.",
          "Avoid defensive hedging: Own systemic challenges directly to build enduring market trust.",
          "Outline immediate 30-, 60-, and 90-day stabilization milestones in crisp bullet points."
        ]
      },
      {
        title: "The 3-Minute Board Pitch: Structuring Complex Technical Architecture for Non-Technical Directors",
        category: "Leadership Influence",
        readTime: "5 min read",
        date: "June 2026",
        body: [
          "Chief Technology Officers, Chief Information Security Officers, and Product VPs frequently struggle to secure multi-million-pound capital expenditure because their proposals are steeped in technical jargon.",
          "Non-executive directors and board chairs assess capital allocations through three primary lenses: Revenue Growth, Risk Mitigation, and Regulatory Compliance.",
          "By reframing cloud migrations, AI implementations, or infrastructure upgrades through these commercial levers, technology leaders transform technical debt into strategic competitive advantage."
        ],
        takeaways: [
          "Translate latency and uptime into concrete revenue impact and operational risk metrics.",
          "Use the 'Headline First' methodology: deliver the capital request and ROI outcome in the first 45 seconds.",
          "Reserve deep architectural schematics for appendix review and focused technical committee audits."
        ]
      }
    ];

export function openArticleReader(index: any) {
      const modal = byId('articleReaderModal');
      const article = ARTICLES_DATA[index] || ARTICLES_DATA[0];

      if (!modal) return;

      byId('articleCategoryBadge').innerText = article.category;
      byId('articleReadTime').innerHTML = '<i class="fa-regular fa-clock mr-1 text-gray-400"></i>' + article.readTime;
      byId('articleDate').innerText = 'Published ' + article.date;
      byId('articleModalTitle').innerText = article.title;

      // Injected body
      const bodyEl = byId('articleModalBody');
      bodyEl.innerHTML = article.body.map((p: any) => '<p class="leading-relaxed">' + p + '</p>').join('');

      // Injected takeaways
      const takeawaysEl = byId('articleTakeawaysList');
      takeawaysEl.innerHTML = article.takeaways.map((t: any) => '<li class="flex items-start"><i class="fa-solid fa-check text-brand-600 mr-2.5 mt-1 shrink-0 text-xs"></i><span>' + t + '</span></li>').join('');

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

export function closeArticleReader() {
      const modal = byId('articleReaderModal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

export function filterInsightsCategory(cat: any) {
      const cards = qsa('.insight-card');
      const buttons = qsa('.insight-filter-btn');

      buttons.forEach((btn: any) => {
        if (btn.getAttribute('data-cat') === cat) {
          btn.className = 'insight-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-brand-500 text-white shadow-sm cursor-pointer whitespace-nowrap';
        } else {
          btn.className = 'insight-filter-btn px-4 py-2 rounded-xl text-xs font-bold transition bg-gray-100 hover:bg-gray-200 text-charcoal-700 cursor-pointer whitespace-nowrap';
        }
      });

      cards.forEach((card: any) => {
        const cardCat = card.getAttribute('data-category');
        if (cat === 'all' || cardCat === cat) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }

    // Media Appearance Video Modal
export function playAppearanceVideo(show: any, topic: any) {
      const modal = byId('appearanceVideoModal');
      const showEl = byId('videoShowTitle');
      const topicEl = byId('videoTopicTitle');

      if (showEl) showEl.innerText = show;
      if (topicEl) topicEl.innerText = topic;

      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

export function closeAppearanceModal() {
      const modal = byId('appearanceVideoModal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    // Dedicated Podcast Audio Player Logic
    let isPodcastPlaying = false;
    let podcastProgressSec = 134; // 02:14
    let podcastTotalSec = 2298; // 38:18
    let podcastTimer: ReturnType<typeof setInterval> | null = null;
    let currentPlaybackRate = 1.0;

export function toggleDedicatedPodcast(btn: any) {
      const icon = btn.querySelector('i');
      const stateText = byId('audioPlayerStateText');

      if (!isPodcastPlaying) {
        isPodcastPlaying = true;
        if (icon) icon.className = 'fa-solid fa-pause text-xl';
        if (stateText) stateText.innerText = 'Now Playing Master Audio Stream...';

        podcastTimer = setInterval(() => {
          podcastProgressSec += (1 * currentPlaybackRate);
          if (podcastProgressSec >= podcastTotalSec) {
            podcastProgressSec = 0;
            toggleDedicatedPodcast(btn);
          }
          updatePodcastUI();
        }, 1000);

        showToast('Podcast Playing', 'Episode 42: Gravitas in the Boardroom audio stream started.');
      } else {
        isPodcastPlaying = false;
        if (icon) icon.className = 'fa-solid fa-play text-xl ml-1';
        if (stateText) stateText.innerText = 'Audio Stream Paused';
        if (podcastTimer) clearInterval(podcastTimer);
      }
    }

export function updatePodcastUI() {
      const currentEl = byId('audioCurrentTime');
      const progressEl = byId('audioProgressBar');

      if (currentEl) {
        const mins = Math.floor(podcastProgressSec / 60);
        const secs = Math.floor(podcastProgressSec % 60);
        currentEl.innerText = (mins < 10 ? '0' : '') + mins + ':' + (secs < 10 ? '0' : '') + secs;
      }

      if (progressEl) {
        const pct = (podcastProgressSec / podcastTotalSec) * 100;
        progressEl.style.width = pct + '%';
      }
    }

export function scrubAudioPlayer(e: any) {
      const track = byId('audioScrubTrack');
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      podcastProgressSec = pct * podcastTotalSec;
      updatePodcastUI();
    }

export function rewindAudio(sec: any) {
      podcastProgressSec = Math.max(0, podcastProgressSec - sec);
      updatePodcastUI();
      showToast('Rewound 15s', 'Audio player jumped back 15 seconds.');
    }

export function forwardAudio(sec: any) {
      podcastProgressSec = Math.min(podcastTotalSec, podcastProgressSec + sec);
      updatePodcastUI();
      showToast('Skipped 30s', 'Audio player jumped forward 30 seconds.');
    }

export function setAudioSpeed(speed: any, btn: any) {
      currentPlaybackRate = speed;
      const allBtns = qsa('.audio-speed-btn');
      allBtns.forEach((b: any) => {
        b.className = 'audio-speed-btn px-2.5 py-1 rounded-lg text-xs font-bold transition bg-gray-100 hover:bg-gray-200 text-charcoal-700 cursor-pointer';
      });
      btn.className = 'audio-speed-btn px-2.5 py-1 rounded-lg text-xs font-bold transition bg-brand-500 text-white cursor-pointer';
      showToast('Playback Speed', 'Set audio speed to ' + speed + 'x');
    }

export function handleInsightsSubscribe(e: any) {
      e.preventDefault();
      const input = byId('insightsEmailInput');
      if (input) {
        showToast('Subscribed to Insights', 'Thank you! The bi-weekly executive briefing will be delivered to ' + input.value);
        input.value = '';
      }
    }

    // ==========================================
    // EDUMA STUDENT LMS DASHBOARD LOGIC
    // ==========================================
export function switchStudentDashboardTab(tabId: any) {
      const allTabs = [
        'dash-overview',
        'dash-courses',
        'dash-quizzes',
        'dash-certificates',
        'dash-live',
        'dash-invoices',
        'dash-settings'
      ];
      
      const targetKey = tabId.startsWith('dash-') ? tabId : ('dash-' + tabId);

      allTabs.forEach((t: any) => {
        const btn = byId('tabBtn-' + t);
        const pane = byId('dashPane-' + t);
        
        if (t === targetKey) {
          if (btn) {
            btn.className = 'student-dash-tab-btn px-4 py-3 border-b-2 border-emerald-600 text-emerald-700 font-bold transition flex items-center cursor-pointer';
          }
          if (pane) pane.classList.remove('hidden');
        } else {
          if (btn) {
            btn.className = 'student-dash-tab-btn px-4 py-3 border-b-2 border-transparent text-gray-500 hover:text-gray-900 transition flex items-center cursor-pointer';
          }
          if (pane) pane.classList.add('hidden');
        }
      });

      const dashContainer = byId('view-dashboard');
      if (dashContainer) {
        window.scrollTo({ top: 180, behavior: 'smooth' });
      }
    }

export function filterDashboardCourses(status: any, btn: any) {
      const cards = qsa('.dash-course-card');
      const buttons = qsa('.course-filter-btn');

      buttons.forEach((b: any) => {
        b.className = 'course-filter-btn px-3 py-1.5 rounded-full font-bold bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer';
      });
      if (btn) {
        btn.className = 'course-filter-btn px-3 py-1.5 rounded-full font-bold bg-emerald-600 text-white cursor-pointer shadow-xs';
      }

      cards.forEach((c: any) => {
        const cardStatus = c.getAttribute('data-status');
        if (status === 'all' || cardStatus === status) {
          c.classList.remove('hidden');
        } else {
          c.classList.add('hidden');
        }
      });
    }

    let isVoiceNotePlaying = false;
    let voiceNoteTimer: ReturnType<typeof setInterval> | null = null;
    let voiceNoteSec = 0;
export function toggleCoachVoiceNote(btn: any) {
      const icon = byId('coachAudioIcon');
      const timeEl = byId('coachAudioTime');
      const barEl = byId('coachProgressBar');

      if (!isVoiceNotePlaying) {
        isVoiceNotePlaying = true;
        if (icon) icon.className = 'fa-solid fa-pause';
        showToast('Playing Coach Feedback', 'Sonia Ali voice note: "Marcus, outstanding articulation on today\'s Boardroom simulation..."');
        
        if (voiceNoteTimer) clearInterval(voiceNoteTimer);
        voiceNoteTimer = setInterval(() => {
          voiceNoteSec += 1;
          if (voiceNoteSec >= 48) {
            voiceNoteSec = 0;
            if (voiceNoteTimer) clearInterval(voiceNoteTimer);
            isVoiceNotePlaying = false;
            if (icon) icon.className = 'fa-solid fa-play ml-0.5 text-xs';
          }
          if (timeEl) {
            const s = voiceNoteSec < 10 ? '0' + voiceNoteSec : voiceNoteSec;
            timeEl.innerText = '0:' + s + ' / 0:48';
          }
          if (barEl) {
            barEl.style.width = ((voiceNoteSec / 48) * 100) + '%';
          }
        }, 1000);
      } else {
        isVoiceNotePlaying = false;
        if (icon) icon.className = 'fa-solid fa-play ml-0.5 text-xs';
        if (voiceNoteTimer) clearInterval(voiceNoteTimer);
        showToast('Audio Paused', 'Coach voice feedback note paused.');
      }
    }

export function downloadOfficialPdf(certId: any) {
      showToast('Downloading Certificate', 'Official CPD Accredited Certificate #' + certId + ' (PDF, 300 DPI) generated.');
    }

export function shareCertificateLinkedIn() {
      showToast('LinkedIn Credential Added', 'Adding Certificate to your LinkedIn Professional Profile credentials...');
    }

export function downloadCourseSyllabus() {
      const modal = byId('syllabusModal');
      if (modal) modal.classList.remove('hidden');
    }

export function closeSyllabusModal() {
      const modal = byId('syllabusModal');
      if (modal) modal.classList.add('hidden');
    }

export function handleSyllabusSubmit(e: any) {
      e.preventDefault();
      closeSyllabusModal();
      showToast('Syllabus Downloaded', 'Master curriculum specification PDF downloaded successfully.');
    }

export function downloadVatInvoice(orderId: any) {
      const modal = byId('vatInvoiceModal');
      if (modal) modal.classList.remove('hidden');
    }

export function closeVatInvoiceModal() {
      const modal = byId('vatInvoiceModal');
      if (modal) modal.classList.add('hidden');
    }

export function handleStudentProfileSave(e: any) {
      e.preventDefault();
      showToast('Profile Updated', 'Student profile, professional title, and timezone preferences saved.');
    }

export function joinCohortZoom() {
      showToast('Launching Zoom Room', 'Connecting to Start SAH Secure Executive Laboratory Room #842...');
    }

export function addToCalendar() {
      showToast('Added to Calendar', 'Cohort Module 5 calendar invitation (.ics) created.');
    }

export function viewQuizBreakdown(quizId: any) {
      const modal = byId('quizBreakdownModal');
      if (modal) modal.classList.remove('hidden');
    }

export function closeQuizBreakdownModal() {
      const modal = byId('quizBreakdownModal');
      if (modal) modal.classList.add('hidden');
    }

export function playReplayVideo(title: any) {
      playAppearanceVideo('Cohort Laboratory Replay', title);
    }

/** Which top-level nav item a path belongs to. */
const NAV_FOR_PATH: Array<[RegExp, string]> = [
  [/^\/about/, 'nav-about'],
  [/^\/coaching/, 'nav-coaching'],
  [/^\/courses/, 'nav-courses'],
  [/^\/for-organisations/, 'nav-organisations'],
  [/^\/resources/, 'nav-resources'],
  [/^\/contact/, 'nav-contact'],
  [/^\/$/, 'nav-home'],
];

/* The mock-up marks the current page with green text over a short rule, not a
   filled pill. */
const ACTIVE = ['text-emerald-700', 'font-semibold', 'border-b-2', 'border-emerald-600'];

/** Mirrors the old switcher's highlighting, driven by the URL instead. */
export function setActiveNav(pathname: string) {
  const activeId = NAV_FOR_PATH.find(([re]) => re.test(pathname))?.[1];
  for (const [, id] of NAV_FOR_PATH) {
    const el = byId(id);
    if (!el) continue;
    if (id === activeId) el.classList.add(...ACTIVE);
    else el.classList.remove(...ACTIVE);
  }
}

/** Shuts the drawer after a route change. */
export function closeMobileMenu() {
  const menu = byId('mobileMenu');
  const icon = byId('menuIcon');
  if (menu && !menu.classList.contains('hidden')) menu.classList.add('hidden');
  if (icon) icon.dataset.open = 'false';
}
