/* ══════════════════════════════════════════════════════════════════
   PROJECT DETAILS
   Isi halaman tersendiri tiap proyek: apa fungsinya, cara memakainya
   langkah demi langkah, dan tangkapan layar yang menyertainya.

   Sengaja dipisah dari projects.ts supaya kartu di beranda tetap
   ramping. Beranda menjawab "ini apa"; halaman ini menjawab "bagaimana
   memakainya".

   Aturan isi: langkah ditulis sebagai yang benar-benar dilakukan
   pengguna, bukan sebagai daftar fitur. "Tempel datanya, tekan
   jalankan" berguna; "mendukung 70 field" tidak memberi tahu apa pun
   tentang cara memakainya.
   ══════════════════════════════════════════════════════════════════ */

export interface Langkah {
  title: string;
  body: string;
  /** tangkapan layar yang menyertai langkah ini */
  image?: string;
  /** keluaran terminal yang sebenarnya, untuk langkah yang dijalankan
   *  lewat baris perintah dan karenanya tidak punya jendela untuk difoto */
  terminal?: { command: string; output: string };
}

export interface DetailProyek {
  /** 1-2 paragraf: apa masalahnya, dan apa yang alat ini lakukan */
  overview: string[];
  /** siapa yang memakainya dan untuk apa */
  builtFor: string;
  steps: Langkah[];
  /** contoh nyata: masukan apa, keluaran apa */
  example?: { input: string; output: string };
  /** hal yang sengaja tidak dilakukan, ditulis terbuka */
  limits?: string[];
}

export const projectDetails: Record<string, DetailProyek> = {
  "equity-terminal": {
    overview: [
      "Reading a company's financials usually means copying numbers into a spreadsheet, rebuilding the same formulas every time, and hoping none of them drifted since the last company you looked at.",
      "Equity Terminal removes that step. You paste the raw Key Statistics page from your data provider, and it reconstructs the figures that are not reported directly, runs the ratios, and writes out a full investment thesis you can check line by line.",
    ],
    builtFor:
      "Anyone reading Indonesian listed companies who wants the arithmetic done consistently, and wants to see where each number came from.",
    steps: [
      {
        title: "Open the tool",
        body: "It runs entirely in the browser. Nothing to install, no account, and your data never leaves your machine.",
        image: "/projects/equity-terminal-01-input.jpg",
      },
      {
        title: "Paste the raw data",
        body: "Go to the Key Statistics or Financials page of your data source, select everything, and paste it into the box. The layout does not matter; the parser reads more than 70 fields wherever they appear.",
        image: "/projects/equity-terminal-02-filled.jpg",
      },
      {
        title: "Add the ticker (optional)",
        body: "Only used to label the output. Leave it blank if you would rather not.",
        image: "/projects/equity-terminal-06-ticker.jpg",
      },
      {
        title: "Run the analysis",
        body: "Press the button, or Ctrl + Enter. The tool reconstructs EBIT, interest expense, NOPAT and invested capital when they are not reported, then runs profitability, credit risk, and valuation.",
        image: "/projects/equity-terminal-03-result.jpg",
      },
      {
        title: "Read it in order",
        body: "The output is arranged the way an analyst would work through it: what the business earns, whether the earnings are real, whether it can service its debt, what it is worth, and what happens if you are wrong.",
        image: "/projects/equity-terminal-04-detail.jpg",
      },
      {
        title: "Give it sector context",
        body: "Leverage, EV/EBITDA and margin are shown but deliberately not scored until you supply a sector or peer median in the Context panel. Five times leverage is ordinary for a toll road and dangerous for a consumer company, and the tool does not guess which one you are holding.",
        image: "/projects/equity-terminal-05-scenario.jpg",
      },
    ],
    example: {
      input:
        "Current PE Ratio (TTM) 74.90\nReturn on Equity 12.4%\nTotal Debt 8,420,000\nEBITDA 2,310,000\n… and roughly seventy more lines, pasted as-is",
      output: `ROIC 9.1% against a cost of capital of 11.3%, so the company is destroying value at the current return.\nReverse DCF implies 14% growth for a decade to justify today's price.\nCredit risk: interest cover 2.1x, Altman Z-Score in the grey zone.\nScenario: bear −38%, base −9%, bull +21%, probability weighted.`,
    },
    limits: [
      "Beneish M-Score is deliberately not calculated. The summary data does not contain all eight of its variables, and a partial M-Score is worse than none.",
      "Any input that is missing is reported as UNKNOWN rather than interpolated or filled with a default.",
      "It is an analysis tool, not investment advice.",
    ],
  },

  "market-research-terminal": {
    overview: [
      "Indonesian market data arrives in pieces: daily broker summaries, OHLCV files per stock, and running trade ticks, none of which agree on format and none of which come with any guarantee that they are complete.",
      "This is the system that collects them, checks them, and turns them into research. Three desktop applications and one validation library, roughly 43,000 lines of Python, written without pandas, numpy or scipy so that every statistical function can be read and checked.",
    ],
    builtFor:
      "My own daily research on IDX, and as the data layer that everything else I build on top of the market depends on.",
    steps: [
      {
        title: "Collect the data",
        body: "The collector downloads OHLCV through yfinance and scrapes broker summaries with Selenium. It detects missing dates, including today, and re-pulls anything that changed after a price adjustment.",
        image: "/projects/market-terminal-02-collector.jpg",
      },
      {
        title: "Let the validators run",
        body: "Before any figure is used, six validators check the schema, look for anomalies, cross-check independent sources against each other, and score the quality of the day's file. Anything that fails is reported with a code, a severity, and the row it came from.",
        terminal: {
          command: "python run_phase1.py --selftest",
          output: `Ran 176 tests in 0.269s======================================================  RINGKASAN======================================================  Test dijalankan : 176  Gagal           : 0  Error           : 0  Dilewati        : 0  SEMUA CRITICAL TEST LULUS. Phase 1 boleh dianggap selesai.`,
        },
      },
      {
        title: "Analyse one stock",
        body: "The analysis application opens on a single ticker: indicator heatmaps aligned to the candle chart, broker heatmaps, top brokers by value, and a tick-by-tick breakdown of the running trade.",
        image: "/projects/market-terminal-01-app.jpg",
      },
      {
        title: "Or research the whole market",
        body: "The research terminal works the other way round: sector seasonality, regression against the index, fund flow by broker category, price-level footprint, and a screener whose results can be backtested.",
        image: "/projects/market-terminal-03-research.jpg",
      },
      {
        title: "Run the tests before trusting anything",
        body: "1,383 automated tests must pass before a change counts as finished, including UI tests that run headless against a hand-written Tkinter stub.",
        terminal: {
          command: "python run_tests.py",
          output: `  APLIKASI ANALISA (saham_analyst)               331 test  LULUS  BLUMBERG TERMINAL (footprint & makro sektor)   876 test  LULUS  QUANT ENGINE PHASE 1 (data & validation)       176 test  LULUS  TOTAL                                         1383 test  SEMUA LULUS`,
        },
      },
    ],
    limits: [
      "The market data archive is not included in the repository. It is hundreds of thousands of files and it is not mine to redistribute.",
      "Survivorship bias in the sector indices cannot be corrected, and that is stated on screen rather than hidden.",
      "Findings that did not hold up are published in the application itself. Stock rotation ordering, for one, could not be distinguished from a dice roll.",
    ],
  },

  tbagsbook: {
    overview: [
      "A reading platform for books and comics, built as a full-stack application rather than a front end over someone else's service.",
      "The part I care about most is the login layer. Most side projects treat authentication as a checkbox; this one treats it as the feature, because a reading account holds a purchase history and a reading habit.",
    ],
    builtFor: "Readers who want a library that remembers where they were, and a login they can trust.",
    steps: [
      {
        title: "Every route leads here first",
        body: "There is no page you can reach without signing in. Ask for the library, the comics list or the dashboard and the server sends you back to this screen. That is the security layer doing its job, and it is why the screenshots below stop at this door.",
        image: "/projects/tbagsbook-01-login.jpg",
      },
      {
        title: "Sign in with Google",
        body: "There is no manual registration and no password to steal. Sign-in goes through Google OAuth 2.0 only, so the platform never stores a credential it could lose.",
      },
      {
        title: "Set up two-factor authentication",
        body: "Required, not optional. A QR code is generated for Google Authenticator or Authy, and from then on a six-digit code is needed on every new sign-in. Verification allows one step of clock drift either way, so a slightly wrong phone clock does not lock you out.",
        terminal: {
          command: "routes/auth.js — the actual verification",
          output: `const verified = speakeasy.totp.verify({  secret,  encoding: 'base32',  token,  window: 1        // toleransi satu langkah waktu});`,
        },
      },
      {
        title: "The session is held on the server",
        body: "Session cookies are httpOnly so no script can read them, marked secure in production, and expire after seven days. Because the session lives in PostgreSQL rather than only in the cookie, any device can be signed out from the server side.",
        terminal: {
          command: "server.js — cookie settings",
          output: `cookie: {  secure:   process.env.NODE_ENV === 'production',  httpOnly: true,                    // tidak bisa dibaca JavaScript  maxAge:   7 * 24 * 60 * 60 * 1000  // tujuh hari}`,
        },
      },
      {
        title: "Read, collect, and earn",
        body: "Past the door: browse books and comics, save them to a personal library, leave comments, and earn coins from reading activity that feed a light rewards system.",
      },
      {
        title: "See where you are signed in",
        body: "The activity page lists every session with its IP, time and user agent. Any of them can be revoked, and one control signs out every device at once.",
      },
    ],
    limits: [
      "Failed sign-in attempts are rate limited per IP address, so a stolen email cannot be brute forced from one machine.",
      "Uploads go to Cloudinary rather than the application server, so the server never holds user files directly.",
      "The screenshots stop at the login page on purpose. Showing more would mean publishing a real account's library, and that account is not mine to publish.",
    ],
  },

  "atlas-concierge": {
    overview: [
      "Booking a trip for a client means checking availability, assembling a package, quoting a price, and doing it again the moment one detail changes. It is slow, and most of the slowness is retyping.",
      "Atlas takes the request in plain language and does the assembling. What it never does is invent a number: the language model reads the sentence and writes the reply, while every price, date and availability check is recomputed on the server from the inventory table.",
    ],
    builtFor:
      "Travel agents handling corporate and group bookings, where the cost is the agent's time rather than the traveller's patience.",
    steps: [
      {
        title: "Start from the home page",
        body: "Everything begins from one entry point: search by hand if you already know what you want, or hand the whole request to the concierge if you do not.",
        image: "/projects/atlas-04-home.jpg",
      },
      {
        title: "Describe the trip in ordinary words",
        body: "Type it the way a client would say it. Atlas extracts the destination, the dates, the number of guests and the constraints, and shows you what it understood before it searches for anything.",
        image: "/projects/atlas-01-search.jpg",
      },
      {
        title: "Review what it assembled",
        body: "Results come back as complete options with the price broken down per night and per traveller, so the quote can be checked rather than trusted.",
        image: "/projects/atlas-02-results.jpg",
      },
      {
        title: "Or search hotels directly",
        body: "The manual path is still there. Filter by city, date and guests, and the same server-side pricing applies.",
        image: "/projects/atlas-05-hotels.jpg",
      },
      {
        title: "And flights the same way",
        body: "Flight search runs against seeded inventory in this prototype. Connecting a real supplier is a separate project, and it is marked as such rather than faked.",
        image: "/projects/atlas-06-flights.jpg",
      },
      {
        title: "Checkout",
        body: "Confirm and pay. The payment step is simulated here, and the interface says so plainly instead of implying otherwise.",
        image: "/projects/atlas-03-checkout.jpg",
      },
      {
        title: "Documents are issued automatically",
        body: "An e-ticket and hotel voucher are generated with a QR code and emailed to the buyer. If mail credentials are not configured the booking still succeeds, the documents stay available on the web, and the delivery status is shown as it actually is.",
        image: "/projects/atlas-07-orders.jpg",
      },
      {
        title: "The agent's side",
        body: "A B2B dashboard collects the bookings, so the person doing this all day has one place to look rather than a mailbox.",
        image: "/projects/atlas-08-dashboard.jpg",
      },
    ],
    limits: [
      "Without a Gemini key, Atlas still runs in full using a rule-based understanding engine. The badge on the page says which mode it is in.",
      "Flight booking was deliberately cut from scope. It needs a GDS or consolidator and ticketing authority, which is a separate project rather than a feature.",
      "Prices and inventory in this prototype are seeded data, not a live supplier feed.",
    ],
  },
};
