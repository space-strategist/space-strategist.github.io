// Space Strategist — the game's website: its words in two languages, its seeded sky,
// the build on offer, the hidden worlds and the test report, sent straight to the team.
(() => {
  "use strict";

  /**
   * Where test reports go: the access key of the team's Web3Forms form (web3forms.com),
   * which mails each report to the team. Public by design: it names the form, never the
   * address. Empty, and the page says sending opens once the site is published.
   */
  const REPORT_KEY = "5f9c050a-bffc-453e-8f20-f0e86c057eb9";
  const REPORT_URL = "https://api.web3forms.com/submit";

  // ---- Words ----
  // Arabic strings hold no Latin letters and no digits, as in the game: numbers are put in separately.
  const T = {
    name: ["Space Strategist", "استراتيجي الفضاء"],
    ribbon: [
      "This is a test build. We are trying the game on many different phones to see how it runs, and fixing what goes wrong before it comes out.",
      "هذه نسخة اختبار. نجرّب اللعبة على جوالات كثيرة مختلفة لنعرف كيف تعمل عليها، ونصلح ما يظهر من مشاكل قبل صدورها.",
    ],
    ribbonShort: ["Test build: help us measure it on your phone", "نسخة اختبار: ساعدنا نقيس أداءها على جوالك"],
    navTest: ["Send a report", "أرسل تقريرًا"],
    navInstall: ["Install", "التثبيت"],
    testBuild: ["Test build", "نسخة اختبار"],
    title: ["SPACE STRATEGIST", "استراتيجي الفضاء"],
    tagline: ["Fly, fight, and come down onto worlds", "حلّق وقاتل واهبط على العوالم"],
    lead: ["A space game for Android. The rest is yours to find out.", "لعبة فضاء على أندرويد. والباقي تكتشفه بنفسك."],
    download: ["Download the test build", "حمّل نسخة الاختبار"],
    soon: ["The download opens here soon", "التحميل يُفتح هنا قريبًا"],
    howInstall: ["How to install", "طريقة التثبيت"],
    unknownTitle: ["Worlds you have not seen", "عوالم لم ترها بعد"],
    unknownLead: ["Each one is different. We will not say more.", "كل واحد منها مختلف، ولن نقول أكثر."],
    flyT: ["Fly", "حلّق"],
    fly: ["Between worlds, as fast as you dare.", "بين العوالم، بالسرعة التي تجرؤ عليها."],
    fightT: ["Fight", "قاتل"],
    fight: ["Space is not as empty as it looks.", "الفضاء ليس خاليًا كما يبدو."],
    landT: ["Land", "اهبط"],
    land: ["Some things are only seen up close.", "بعض الأشياء لا تُرى إلا عن قرب."],
    whyTitle: ["Why a test build?", "لماذا نسخة اختبار؟"],
    whyLead: [
      "Before the game comes out we want it smooth on every phone. Phones differ a lot, so we need it played on as many of them as we can.",
      "قبل أن تصدر اللعبة نريدها سلسة على كل جوال. الجوالات تختلف كثيرًا، ولهذا نحتاج أن تُلعب على أكبر عدد منها.",
    ],
    why1t: ["Install it", "ثبّتها"],
    why1: ["It takes under two megabytes.", "حجمها أقل من ميجابايتين."],
    why2t: ["Play a little", "العب قليلًا"],
    why2: ["Ten minutes is enough.", "عشر دقائق تكفي."],
    why3t: ["Send your report", "أرسل تقريرك"],
    why3: ["From the bottom of this page. It reaches us directly.", "من أسفل هذه الصفحة، ويصلنا مباشرة."],
    installTitle: ["Install the test build", "ثبّت نسخة الاختبار"],
    i1t: ["Download", "حمّل الملف"],
    i1: ["Tap the download button on your Android phone.", "اضغط زر التحميل من جوالك الأندرويد."],
    i2t: ["Open it", "افتحه"],
    i2: ["Open the file from the notification, or from your Downloads folder.", "افتح الملف من الإشعار، أو من مجلد التنزيلات."],
    i3t: ["Allow the install", "اسمح بالتثبيت"],
    i3: [
      "Android asks once to allow installing from your browser or file manager: allow it for this install.",
      "سيطلب أندرويد مرة واحدة السماح بالتثبيت من المتصفح أو من مدير الملفات: اسمح له لهذا التثبيت.",
    ],
    i4t: ["Play", "العب"],
    i4: [
      "Install, open Space Strategist and press Play. A new test build installs over the old one.",
      "ثبّت، وافتح «استراتيجي الفضاء» واضغط «العب». كل نسخة اختبار جديدة تُثبَّت فوق القديمة.",
    ],
    reqTitle: ["What you need", "ما تحتاجه"],
    req1: ["An Android phone or tablet, Android 8 or newer", "جوال أو جهاز لوحي بنظام أندرويد الثامن أو أحدث"],
    req2: ["About two megabytes to install, and some free storage", "نحو ميجابايتين للتثبيت، وبعض المساحة الفارغة"],
    req3: ["No account, and no internet needed to play", "لا حساب، ولا حاجة إلى الإنترنت أثناء اللعب"],
    protect: [
      "The game is not on a store yet, so Android may warn about an app it does not know: that is expected for a test build.",
      "اللعبة ليست في متجر بعد، لذلك قد يحذّرك أندرويد من تطبيق لا يعرفه، وهذا متوقع في نسخة الاختبار.",
    ],
    testTitle: ["Tell us how it ran", "أخبرنا كيف عملت معك"],
    testLead: [
      "Answer four quick questions and press Send. Your phone's details are filled in for you.",
      "أجب عن أربعة أسئلة سريعة واضغط «أرسل». تفاصيل جوالك تُملأ تلقائيًا.",
    ],
    deviceTitle: ["Your phone", "جوالك"],
    phoneModel: ["Phone model", "طراز الجوال"],
    qSmooth: ["How smooth was it?", "ما مدى سلاسة اللعب؟"],
    qHeat: ["Did the phone get warm?", "هل سخن الجوال؟"],
    qGround: ["Did the ground show in time?", "هل ظهرت الأرض في وقتها؟"],
    qCrash: ["Did it close by itself or freeze?", "هل أُغلقت وحدها أو علّقت؟"],
    notes: ["Anything else? Where did it happen?", "شيء آخر؟ وأين حدث؟"],
    send: ["Send", "أرسل"],
    sending: ["Sending", "يُرسَل"],
    failed: ["Could not send. Check your internet and try again.", "لم يُرسَل. تأكد من الإنترنت وحاول مرة أخرى."],
    notOpen: ["Sending opens once the site is published.", "الإرسال يُفتح حين يُنشر الموقع."],
    reportNote: ["We receive your answers and your phone's details, nothing else.", "يصلنا ما اخترته وتفاصيل جوالك فقط، ولا شيء غير ذلك."],
    thanksTitle: ["Report received", "وصل تقريرك"],
    thanks: ["Thank you. It helps us make the game run well on phones like yours.", "شكرًا لك، فهو يساعدنا أن تعمل اللعبة جيدًا على جوالات مثل جوالك."],
    again: ["Send another report", "أرسل تقريرًا آخر"],
    roadTitle: ["What comes next", "ماذا بعد"],
    r1tag: ["Now", "الآن"],
    r2tag: ["Next", "بعدها"],
    r3tag: ["Then", "ثم"],
    r1t: ["Test builds", "نسخ الاختبار"],
    r1: ["New builds land here as they are made, each fixing what testers found.", "النسخ الجديدة تُنشر هنا أولًا بأول، وكل نسخة تصلح ما وجده المختبرون."],
    r2t: ["Smooth on every phone", "سلسة على كل جوال"],
    r2: ["Your reports point us to the phones that need work.", "تقاريركم تدلنا على الجوالات التي تحتاج إلى عمل."],
    r3t: ["The full game", "اللعبة الكاملة"],
    r3: ["The full game will be released right here.", "اللعبة الكاملة ستُنشر هنا، في هذا الموقع."],
    footTest: ["Test build, so it may contain bugs", "نسخة اختبار، وقد تحتوي على أخطاء"],
    // Pieces put together with numbers.
    build: ["Build", "البناء"],
    android: ["Android", "أندرويد"],
    orNewer: ["or newer", "أو أحدث"],
    mb: ["MB", "ميجابايت"],
    cores: ["cores", "أنوية"],
    gb: ["GB of memory", "جيجابايت ذاكرة"],
    screen: ["screen", "الشاشة"],
    hz: ["Hz", "هرتز"],
  };

  const CHOICES = {
    smooth: [["Very smooth", "سلسة جدًا"], ["Mostly smooth", "سلسة غالبًا"], ["Stutters at times", "تتقطع أحيانًا"], ["Slow", "بطيئة"]],
    heat: [["Not at all", "أبدًا"], ["A little", "قليلًا"], ["Warm", "دافئ"], ["Hot", "ساخن جدًا"]],
    ground: [["Always", "دائمًا"], ["Late when flying fast", "تتأخر مع السرعة"], ["Late when zooming", "تتأخر عند التكبير والتصغير"], ["Often blurry", "ضبابية كثيرًا"]],
    crash: [["No", "لا"], ["Once", "مرة واحدة"], ["More than once", "أكثر من مرة"]],
  };

  /** What a hidden world says when tapped: never what it is. */
  const WHISPERS = [
    ["Not yet.", "ليس بعد."],
    ["You will know it when you get there.", "ستعرفه حين تصل إليه."],
    ["Go and see for yourself.", "اذهب وانظر بنفسك."],
    ["This one keeps its secret.", "هذا يحتفظ بسرّه."],
    ["Further than it looks.", "أبعد مما يبدو."],
    ["Bring a ship.", "أحضر سفينة."],
  ];

  const EASTERN = "٠١٢٣٤٥٦٧٨٩";
  let lang = "ar";
  let build = null;
  const picked = {};
  let whisper = -1;

  const ar = () => lang === "ar";
  const t = (key) => (T[key] ? T[key][ar() ? 1 : 0] : key);
  /** What goes between the parts of a line: in Arabic a comma, as a middle dot would read as the digit zero. */
  const sep = () => (ar() ? "، " : " · ");

  /** [n] as the current language writes it: Arabic digits and decimal mark in Arabic. */
  function num(n) {
    const s = String(n);
    return ar() ? s.replace(/[0-9]/g, (d) => EASTERN[d]).replace(/\./g, "٫") : s;
  }

  // ---- Language ----

  function setLanguage(next) {
    lang = next === "en" ? "en" : "ar";
    try { localStorage.setItem("lang", lang); } catch (e) { /* private mode: not remembered */ }
    document.documentElement.lang = lang;
    // One layout for both languages: only the words change. Arabic runs right to left inside its boxes.
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = t(el.dataset.i18n);
      el.dir = ar() ? "rtl" : "ltr";
    });
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    document.title = ar() ? "استراتيجي الفضاء" : "Space Strategist";
    const status = document.getElementById("status");
    status.textContent = "";
    renderBuild();
    renderChoices();
    renderDevice();
    if (whisper >= 0) say(whisper);
  }

  // ---- The build on offer ----

  const FALLBACK_BUILD = { build: 18, version: "0.1.18", size: 1659764, apk: null };

  async function loadBuild() {
    try {
      const response = await fetch("build.json", { cache: "no-store" });
      if (response.ok) build = await response.json();
    } catch (e) { /* opened from a file, or offline: what is known */ }
    if (!build) build = FALLBACK_BUILD;
    renderBuild();
  }

  function renderBuild() {
    const b = build || FALLBACK_BUILD;
    const chip = document.getElementById("build-chip");
    // The version's dotted number reads badly right to left: in Arabic the build's number alone.
    chip.textContent = ar() ? `${t("build")} ${num(b.build)}` : `${t("build")} ${b.build} · v${b.version}`;
    chip.dir = ar() ? "rtl" : "ltr";
    const megabytes = (b.size / 1048576).toFixed(1);
    const meta = `${t("android")} ${num(8)} ${t("orNewer")}${sep()}${num(megabytes)} ${t("mb")}`;
    for (const [id, metaId] of [["download", "download-meta"], ["download-2", "download-meta-2"]]) {
      const link = document.getElementById(id);
      const label = link.querySelector("b");
      const small = document.getElementById(metaId);
      if (b.apk) {
        link.href = b.apk;
        link.setAttribute("download", "space-strategist.apk");
        link.removeAttribute("aria-disabled");
        label.textContent = t("download");
      } else {
        link.href = "#install";
        link.removeAttribute("download");
        link.setAttribute("aria-disabled", "true");
        label.textContent = t("soon");
      }
      small.textContent = meta;
      small.dir = ar() ? "rtl" : "ltr";
    }
  }

  // ---- Worlds not shown ----

  function renderEclipses() {
    const box = document.getElementById("eclipses");
    for (let i = 1; i <= 6; i++) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "eclipse";
      button.setAttribute("aria-label", "?");
      button.style.setProperty("--drift", `${(i * 1.7) % 5}s`);
      const img = document.createElement("img");
      img.src = `images/unknown/world-${i}.webp`;
      img.alt = "";
      img.width = 180;
      img.height = 180;
      img.loading = "lazy";
      button.append(img);
      button.addEventListener("click", () => {
        button.classList.remove("stir");
        void button.offsetWidth;
        button.classList.add("stir");
        say((whisper + 1) % WHISPERS.length);
      });
      box.append(button);
    }
  }

  function say(i) {
    whisper = i;
    const line = document.getElementById("whisper");
    line.textContent = WHISPERS[i][ar() ? 1 : 0];
    line.dir = ar() ? "rtl" : "ltr";
  }

  // ---- The test report ----

  const device = { model: "", android: "", cores: navigator.hardwareConcurrency || 0, memory: navigator.deviceMemory || 0, hz: 0 };

  async function readDevice() {
    const ua = navigator.userAgent;
    const match = ua.match(/Android\s([\d.]+)(?:;\s*([^;)]+))?/);
    if (match) {
      device.android = match[1];
      if (match[2] && match[2].trim() !== "K") device.model = match[2].replace(/\sBuild\/.*$/, "").trim();
    }
    if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
      try {
        const v = await navigator.userAgentData.getHighEntropyValues(["model", "platformVersion"]);
        if (v.model) device.model = v.model;
        if (v.platformVersion && navigator.userAgentData.platform === "Android") device.android = v.platformVersion.split(".")[0];
      } catch (e) { /* not given */ }
    }
    const phone = document.getElementById("phone");
    if (!phone.value && device.model) phone.value = device.model;
    renderDevice();
  }

  /** How many frames a second the screen shows, from the gaps between a second of frames. */
  function measureRefresh() {
    const gaps = [];
    let last = 0;
    const step = (now) => {
      if (last) gaps.push(now - last);
      last = now;
      if (gaps.length < 60) {
        requestAnimationFrame(step);
        return;
      }
      gaps.sort((a, b) => a - b);
      const rate = 1000 / gaps[gaps.length >> 1];
      const common = [30, 48, 60, 72, 90, 120, 144, 165, 240];
      device.hz = common.reduce((best, r) => (Math.abs(r - rate) < Math.abs(best - rate) ? r : best), 60);
      renderDevice();
    };
    requestAnimationFrame(step);
  }

  function screenPixels() {
    const ratio = window.devicePixelRatio || 1;
    const w = Math.round(screen.width * ratio);
    const h = Math.round(screen.height * ratio);
    return [Math.min(w, h), Math.max(w, h)];
  }

  function deviceLine() {
    const parts = [];
    if (device.android) parts.push(`${t("android")} ${num(device.android)}`);
    if (device.cores) parts.push(`${num(device.cores)} ${t("cores")}`);
    if (device.memory) parts.push(`${num(device.memory)} ${t("gb")}`);
    const [w, h] = screenPixels();
    parts.push(`${t("screen")} ${num(w)} × ${num(h)}`);
    if (device.hz) parts.push(`${num(device.hz)} ${t("hz")}`);
    return parts.join(sep());
  }

  function renderDevice() {
    const line = document.getElementById("device-line");
    line.textContent = deviceLine();
    line.dir = ar() ? "rtl" : "ltr";
  }

  function renderChoices() {
    document.querySelectorAll(".choices").forEach((box) => {
      const name = box.dataset.name;
      box.textContent = "";
      CHOICES[name].forEach((choice, i) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = choice[ar() ? 1 : 0];
        button.dir = ar() ? "rtl" : "ltr";
        button.setAttribute("aria-pressed", String(picked[name] === i));
        button.addEventListener("click", () => {
          picked[name] = picked[name] === i ? undefined : i;
          box.querySelectorAll("button").forEach((b, k) => b.setAttribute("aria-pressed", String(picked[name] === k)));
        });
        box.append(button);
      });
    });
  }

  /** The report as the team reads it: in English whatever the tester's language, but the notes as written. */
  function report() {
    const b = build || FALLBACK_BUILD;
    const answer = (name) => (picked[name] === undefined ? "not given" : CHOICES[name][picked[name]][0]);
    const phone = document.getElementById("phone").value.trim();
    const [w, h] = screenPixels();
    return {
      access_key: REPORT_KEY,
      subject: `Space Strategist test report: ${phone || "unknown phone"}, build ${b.build}`,
      from_name: "Space Strategist tester",
      botcheck: document.getElementById("botcheck").checked,
      build: b.build,
      version: b.version,
      phone: phone || "not given",
      android: device.android || "unknown",
      cores: device.cores || "unknown",
      memory_gb: device.memory || "unknown",
      screen: `${w} x ${h}`,
      refresh_hz: device.hz || "unknown",
      smoothness: answer("smooth"),
      heat: answer("heat"),
      ground: answer("ground"),
      closed_or_froze: answer("crash"),
      notes: document.getElementById("notes").value.trim() || "none",
      language: lang,
      browser: navigator.userAgent,
    };
  }

  async function sendReport(event) {
    event.preventDefault();
    const status = document.getElementById("status");
    const send = document.getElementById("send");
    if (!REPORT_KEY) {
      status.textContent = t("notOpen");
      status.dir = ar() ? "rtl" : "ltr";
      return;
    }
    send.disabled = true;
    send.textContent = t("sending");
    status.textContent = "";
    try {
      const response = await fetch(REPORT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(report()),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || String(response.status));
      document.getElementById("report").hidden = true;
      document.getElementById("thanks").hidden = false;
    } catch (e) {
      status.textContent = t("failed");
      status.dir = ar() ? "rtl" : "ltr";
    } finally {
      send.disabled = false;
      send.textContent = t("send");
    }
  }

  function another() {
    for (const name of Object.keys(picked)) delete picked[name];
    document.getElementById("notes").value = "";
    renderChoices();
    document.getElementById("thanks").hidden = true;
    document.getElementById("report").hidden = false;
  }

  // ---- The sky: every star from a seed ----

  function mulberry32(seed) {
    return () => {
      seed |= 0;
      seed = (seed + 0x6d2b79f5) | 0;
      let r = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      r = (r + Math.imul(r ^ (r >>> 7), 61 | r)) ^ r;
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function paintStars() {
    const canvas = document.getElementById("stars");
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.round(w * ratio);
    canvas.height = Math.round(h * ratio);
    const g = canvas.getContext("2d");
    g.scale(ratio, ratio);
    const random = mulberry32(0x5eed);
    const count = Math.round((w * h) / 2600);
    for (let i = 0; i < count; i++) {
      const x = random() * w;
      const y = random() * h;
      const bright = Math.pow(random(), 3);
      const size = 0.4 + bright * 1.5;
      const tint = random();
      const color = tint < 0.15 ? "255,214,170" : tint < 0.3 ? "170,200,255" : "235,240,255";
      g.fillStyle = `rgba(${color},${0.25 + bright * 0.75})`;
      g.beginPath();
      g.arc(x, y, size, 0, Math.PI * 2);
      g.fill();
      if (bright > 0.55) {
        const glow = g.createRadialGradient(x, y, 0, x, y, size * 6);
        glow.addColorStop(0, `rgba(${color},0.35)`);
        glow.addColorStop(1, `rgba(${color},0)`);
        g.fillStyle = glow;
        g.fillRect(x - size * 6, y - size * 6, size * 12, size * 12);
      }
    }
  }

  // ---- The planet drawing near as you scroll ----

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function approach() {
    const planet = document.querySelector(".hero-planet");
    if (!planet || reducedMotion) return;
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const share = Math.min(window.scrollY / window.innerHeight, 1);
        planet.style.scale = String(1 + share * 0.35);
        planet.style.opacity = String(1 - share * 0.7);
        ticking = false;
      });
    }, { passive: true });
  }

  // ---- Start ----

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLanguage(b.dataset.lang)));
  document.getElementById("report").addEventListener("submit", sendReport);
  document.getElementById("again").addEventListener("click", another);

  let initial = null;
  const asked = new URLSearchParams(location.search).get("lang");
  if (asked === "ar" || asked === "en") initial = asked;
  if (!initial) { try { initial = localStorage.getItem("lang"); } catch (e) { /* not remembered */ } }
  if (!initial) initial = (navigator.language || "ar").toLowerCase().startsWith("ar") ? "ar" : (navigator.language ? "en" : "ar");
  // Each part on its own: one an old browser cannot run leaves the rest working, and the
  // page keeps the Arabic words written into it as it was published.
  const attempt = (part) => { try { part(); } catch (e) { /* this part left out */ } };
  attempt(renderEclipses);
  attempt(() => setLanguage(initial));
  attempt(paintStars);
  let resizeTimer = 0;
  window.addEventListener("resize", () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(() => attempt(paintStars), 200); });
  attempt(loadBuild);
  attempt(readDevice);
  attempt(measureRefresh);
  attempt(approach);
})();
