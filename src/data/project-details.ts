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
  "salve-co": {
    overview: [
      "A small clothing label sells through WhatsApp and Instagram. A full online store would add a cart and a checkout that the way it actually sells does not use.",
      "So the site does one job: make people want the shirt, then get them into the chat with the right product already named. The three tees are presented as tracks on an album, using the label's own campaign photos.",
    ],
    builtFor: "A clothing label that takes its orders through WhatsApp.",
    steps: [
      {
        title: "Open on the drop",
        body: "The first screen is the label's chrome logo and its three campaign posters, so the look is clear before anyone reads a word.",
        image: "/projects/salve-co.jpg",
      },
      {
        title: "Scroll through the photos",
        body: "Full-width photos open the Album and Vintage Lavesh tracks. On a phone, Vintage Lavesh switches to a portrait photo instead of cropping the wide one.",
        image: "/projects/salve-02-scene.jpg",
      },
      {
        title: "See the shirt from each side",
        body: "Each track switches between views of the shirt, such as front and back. Album and Vintage Lavesh also show it being worn.",
        image: "/projects/salve-03-track.jpg",
      },
      {
        title: "Order in one tap",
        body: "The order button opens WhatsApp with the message already written, including the size if one is picked. While browsing the products, a small player bar shows the current track and keeps the order button on screen.",
      },
      {
        title: "Browse the lookbook",
        body: "The lookbook opens any photo at full size and ends with a link to the label's Instagram.",
        image: "/projects/salve-04-lookbook.jpg",
      },
    ],
    limits: [
      "There is no cart, stock count or online payment. Those are handled in the chat, on purpose.",
      "Prices and sizes are set in one small config file. Until they are filled in, the page says the price is available via chat and hides the size buttons.",
    ],
  },

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

  "macro-divergence-terminal": {
    overview: [
      "Putting IHSG (~6,500) and the Nikkei (~66,000) on one price axis is a visual lie, and picking which foreign markets even matter is usually a guess dressed up as intuition. This site measures it instead: every candidate index is correlation-tested against IHSG daily returns over three years, rebased to 100, and the ones that actually move together are the ones on the chart.",
      "The measurement turned up a result that runs against the usual assumption — ASEAN and Asian neighbours track IHSG more closely than Wall Street does, and China, despite being the largest trading partner, tracks it the least. The site is built around that finding: a divergence panel with two references (regional median and S&P 500) surfaces the days IHSG breaks from the pack, which is exactly where local news becomes the explanation worth reading.",
    ],
    builtFor:
      "My own reading of what moved IHSG on a given day, without re-deriving the correlation numbers or the news-to-session mapping by hand every time.",
    steps: [
      {
        title: "Rebase, not overlay",
        body: "All seven indices start at 100 on the same date, so the chart answers 'who outperformed whom' instead of showing seven lines at unrelated scales. Each index can be toggled from the toolbar.",
        image: "/projects/macro-divergence-terminal.jpg",
      },
      {
        title: "Read the divergence panel",
        body: "The default view is IHSG minus the median of Nikkei/SET/KOSPI/STI on the same session — median, not mean, so one index having a bad data day doesn't drag the reference down. A second view compares against the S&P 500's prior session instead, because global risk appetite and regional movement often disagree by a wide margin.",
      },
      {
        title: "News is pinned to the session it could move",
        body: "An article published at 19:00 on a Tuesday didn't move Tuesday's candle — it moved Wednesday's. Weekend news attaches to Monday. Anything published after the cutoff carries an 'after hours' tag rather than being silently reattributed.",
      },
      {
        title: "Macro and micro are separated on purpose",
        body: "Every article is tagged with a category (what it's about) and a scale (how wide it reaches). Five dividend announcements can't bury a central bank rate decision, because company news is deliberately excluded from competing for the day's headline slot — it gets its own panel, grouped by ticker.",
      },
      {
        title: "The impact map shows where the pressure is coming from",
        body: "Each article is tagged with the region its headline names, and the map lights up regions that are talking about Indonesia more than their own baseline — a z-score against each region's own recent median, not raw article counts, because raw counts would just show Indonesia lit up every single day.",
      },
      {
        title: "Keyboard-first navigation",
        body: "Arrow keys move by day, shift+arrow jumps to the next significant day, and a command bar takes a date, a keyword, or a ticker — searching by ticker is instant because it reads a precomputed daily index rather than opening the month's full news file.",
      },
    ],
    limits: [
      "It's a static site with no language model in the loop — every number in the summary panel (tone, dominant theme, corroboration) is traced back to the headlines that produced it, and can be recomputed by rerunning the same rule.",
      "The event-study panel only opens once the archive covers at least 120 news-bearing sessions; below that, whatever comes out is noise dressed as a finding.",
      "News backfill is still in progress. Prices go back to 2006; the news archive is being extended toward two years through scheduled runs rather than in one pass.",
    ],
  },

  "live-order-flow-terminal": {
    overview: [
      "Running trade on Stockbit disappears the moment it scrolls off screen, and the stock you didn't happen to be watching today is the one you'll want to study tomorrow. This application scrapes the live tape for 500+ stocks in the background and writes every single row to disk every three seconds — watched or not.",
      "What you actually look at is a footprint panel: one candle per column, buy volume growing right, sell volume growing left, neither side netted against the other so a busy price level with equal buying and selling doesn't cancel out to a misleading zero.",
    ],
    builtFor:
      "My own intraday reading of order flow, where the cost of not recording a stock today is that it's gone for good.",
    steps: [
      {
        title: "Everything is recorded, only the watchlist is shown",
        body: "The scraper runs in the background against all 500+ stocks crossing the tape. Typing a ticker into the watchlist adds it to the panel view — it doesn't change what gets recorded, which was already happening for every stock.",
        image: "/projects/live-order-flow-terminal.jpg",
      },
      {
        title: "Read the footprint",
        body: "The candle stands in the middle of its column; volume bars grow outward — sells to the left in red, buys to the right in green. A thin yellow line marks the point of control: the price with the most volume traded in that candle.",
      },
      {
        title: "Switch what the bar length measures",
        body: "Volume (total lots), frequency (trade count), lots-per-trade (average ticket size), or rupiah-per-trade — only one at a time, because two different metrics can't share one bar length without one of them lying.",
      },
      {
        title: "Check history for a day you weren't watching live",
        body: "The history tab reads back from the recorded ticks, ranked by how complete the day's capture was, so a stock that only occurred to you the next morning is still there to study.",
        image: "/projects/live-order-flow-terminal-02-history.jpg",
      },
      {
        title: "Get pinged instead of watching the screen",
        body: "Trigger detection runs across the full 500+ stock background scan and pushes alerts to Telegram, so the screen doesn't have to be the thing catching the move.",
      },
    ],
    limits: [
      "It scrapes an authenticated data source (Stockbit), so there's no public demo — screenshots come from my own session.",
      "What's captured is whatever the page actually renders. If the source page is filtered, the recording is filtered too; the tool doesn't invent rows the page never sent.",
      "It's a Chrome-driven scraper, not an official API integration, so a Stockbit page redesign can break it until the selectors are updated.",
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
      },
      {
        title: "Let the validators run",
        body: "Before any figure is used, six validators check the schema, look for anomalies, cross-check independent sources against each other, and score the quality of the day's file. Anything that fails is reported with a code, a severity, and the row it came from.",
        image: "/projects/market-terminal-04-validators.jpg",
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
        image: "/projects/market-terminal-05-tests.jpg",
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
        body: "There is no page you can reach without signing in. Ask for the library, the comics list or the dashboard and the server sends you back to this screen. That is the security layer doing its job.",
        image: "/projects/tbagsbook-01-login.jpg",
      },
      {
        title: "Sign in with Google",
        body: "There is no manual registration and no password to steal. Sign-in goes through Google OAuth 2.0 only, so the platform never stores a credential it could lose.",
        image: "/projects/tbagsbook-02-google.jpg",
      },
      {
        title: "Set up two-factor authentication",
        body: "Required, not optional. A QR code is generated for Google Authenticator or Authy, and from then on a six-digit code is needed on every new sign-in. Verification allows one step of clock drift either way, so a slightly wrong phone clock does not lock you out.",
        image: "/projects/tbagsbook-03-2fa.jpg",
      },
      {
        title: "The session is held on the server",
        body: "Session cookies are httpOnly so no script can read them, marked secure in production, and expire after seven days. Because the session lives in PostgreSQL rather than only in the cookie, any device can be signed out from the server side.",
        image: "/projects/tbagsbook-04-session.jpg",
      },
      {
        title: "Read, collect, and earn",
        body: "Past the door: browse books and comics, save them to a personal library, leave comments, and earn coins from reading activity that feed a light rewards system.",
        image: "/projects/tbagsbook-05-library.jpg",
      },
      {
        title: "See where you are signed in",
        body: "The activity page lists every session with its IP, time and user agent. Any of them can be revoked, and one control signs out every device at once.",
        image: "/projects/tbagsbook-06-activity.jpg",
      },
    ],
    limits: [
      "Failed sign-in attempts are rate limited per IP address, so a stolen email cannot be brute forced from one machine.",
      "Uploads go to Cloudinary rather than the application server, so the server never holds user files directly.",
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
