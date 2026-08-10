import type { Feature } from "./types";

export const features: Feature[] = [
  {
    slug: "ai-agent-voices",
    name: "Multilingual Voice Library",
    short: "Natural, lifelike voices tuned for Omani Arabic and eight more languages, so every caller hears a familiar accent.",
    heroTitle: "Voices Your Callers Recognise as Their Own",
    heroSub: "Choose from a library of natural AI voices tuned for Omani Arabic, Gulf dialects, and eight international languages, all responding in under a second.",
    sections: [
      {
        h: "How it works",
        p: [
          "Every agent speaks through a neural voice engine that renders speech in real time, with sub-second latency from the moment your caller finishes talking. You pick a voice from our curated library, adjust pace, warmth, and formality, and preview it against your own scripts before going live.",
          "Voices are not generic text-to-speech presets. Each one is tuned on regional pronunciation patterns, so place names like Salalah, Sohar, and Al Amerat, along with common Omani honourifics, are spoken the way your customers actually say them.",
        ],
        bullets: [
          "Preview any voice against your real call scripts before deployment",
          "Adjust speaking rate, tone, and formality per agent",
          "Switch voices per campaign, department, or time of day",
        ],
      },
      {
        h: "Why voice quality decides the call",
        p: [
          "Callers form a judgement about an automated line within the first few seconds. A robotic or mispronouncing voice signals that the conversation will be frustrating, and hang-up rates climb. A voice that sounds local and unhurried keeps people on the line long enough for the agent to actually help.",
          "Because AI Customer Care voices stream with sub-second response times, conversations keep a human rhythm, no awkward gaps, no talking over each other, no dead air while the system thinks.",
        ],
      },
      {
        h: "Built for how Oman speaks",
        p: [
          "Oman is multilingual by default. A single business day can bring calls in Omani Arabic, English, Hindi, Urdu, Malayalam, and more. Our agents detect the caller's language and handle the whole conversation in it, using a voice appropriate to that language rather than an accented compromise.",
          "For businesses serving both Omani nationals and the expatriate community, this means one phone number that greets everyone properly, without hiring separate teams for each language.",
        ],
      },
    ],
    bullets: [
      "Omani Arabic voices tuned for local pronunciation and honourifics",
      "Eight additional languages including English, Hindi, Urdu, and Malayalam",
      "Sub-second speech generation for natural conversational rhythm",
      "Per-agent controls for pace, warmth, and formality",
      "Automatic language detection with matching native voice",
    ],
  },
  {
    slug: "ai-talk-block",
    name: "Open Conversation Blocks",
    short: "A conversational building block that lets your agent handle open-ended dialogue inside any structured call flow.",
    heroTitle: "Free-Flowing Conversation, Exactly Where You Want It",
    heroSub: "Place an Open Conversation Block anywhere in a call flow and the agent talks freely inside the limits you set, then hands control back to the flow.",
    sections: [
      {
        h: "How it works",
        p: [
          "Most call flows are a mix of structure and conversation. You want a fixed greeting, a verified identity step, a payment reminder, but in between, callers ask questions in their own words. The Open Conversation Block is the node you place wherever unscripted dialogue belongs.",
          "Inside a block you define the agent's goal, the knowledge it can draw on, and the conditions that end it, for example, once the caller confirms a booking date or asks for a human. When the condition is met, the flow resumes at the next step with everything the caller said captured as structured variables.",
        ],
        bullets: [
          "Define a goal, allowed knowledge sources, and exit conditions per block",
          "Captured answers become variables usable later in the flow",
          "Set guardrails on topics the agent must decline or escalate",
        ],
      },
      {
        h: "Why structure plus conversation wins",
        p: [
          "Pure decision-tree IVRs frustrate callers because real questions never fit the menu. Pure open-ended bots frustrate businesses because calls wander and outcomes are unpredictable. Open Conversation Blocks give you both: the predictability of a designed flow with the flexibility of genuine conversation at each step.",
          "Because each block has an explicit goal, you can measure it. You know exactly which conversational step callers complete, abandon, or escalate from, and tune that one block without rebuilding the whole flow.",
        ],
      },
      {
        h: "Conversations that respect local etiquette",
        p: [
          "Gulf phone culture values greeting and courtesy before business. A block can be configured to open with proper pleasantries in Omani Arabic, take the caller's pace, and only then move to the task, something rigid IVR menus have never done well.",
          "For Omani businesses in insurance, clinics, and government-facing services, this means automation that feels respectful rather than abrupt, which directly shows up in completion rates.",
        ],
      },
    ],
    bullets: [
      "Goal-directed open conversation inside any structured flow",
      "Exit conditions that return control to the flow automatically",
      "Caller answers captured as reusable structured variables",
      "Topic guardrails with automatic escalation on out-of-scope requests",
      "Per-block analytics on completion, abandonment, and escalation",
    ],
  },
  {
    slug: "ai-workflow-builder",
    name: "Call Journey Designer",
    short: "A visual drag-and-drop canvas for designing complete call journeys, no code, no telephony expertise required.",
    heroTitle: "Design Complete Call Journeys on a Visual Canvas",
    heroSub: "Drag, connect, and publish. The Call Journey Designer turns the call script your team already trusts into a live customer service flow, no code, no vendor ticket.",
    sections: [
      {
        h: "How it works",
        p: [
          "The Call Journey Designer is a visual canvas where each node is a step in the call: greetings, open conversation blocks, data lookups, condition branches, SMS sends, transfers, and hang-ups. You connect nodes with logic, if the caller is an existing customer, branch here; if the balance is overdue, branch there.",
          "Workflows can call your own systems mid-conversation through REST API nodes, so the agent can check an order status or book an appointment while the caller is still on the line. Publish with one click; every change is versioned, and you can roll back instantly.",
        ],
        bullets: [
          "Drag-and-drop nodes for every call action, from greeting to hang-up",
          "Branching logic on caller data, time of day, or conversation outcomes",
          "One-click publish with full version history and instant rollback",
        ],
      },
      {
        h: "Why visual beats scripts and vendors",
        p: [
          "Traditional IVR changes mean raising a ticket with a telecom vendor and waiting weeks. On a visual canvas, the person who understands your customers, an operations lead, not a developer, can adjust the journey the same afternoon a problem is spotted.",
          "Versioning also changes how teams improve. You can duplicate a live workflow, test a new opening in a sandbox, compare results in the analytics dashboard, and promote the winner, an iteration loop measured in days, not quarters.",
        ],
      },
      {
        h: "Local journeys for local realities",
        p: [
          "Omani call patterns have their own shape: traffic spikes after Maghrib, quiet Fridays, Ramadan hours that invert the usual day. The builder includes schedule-aware branching so your agent greets differently, routes differently, and sets expectations differently depending on the local calendar.",
          "Prayer-time pauses, public holidays announced by royal decree, and Khareef-season surges in Dhofar can all be modelled as branches, so the automated experience always matches what is actually happening in Oman.",
        ],
      },
    ],
    bullets: [
      "No-code visual canvas covering the entire call journey",
      "Mid-call REST API lookups against your own systems",
      "Schedule-aware branching for Ramadan, holidays, and local hours",
      "Sandbox testing with side-by-side workflow comparison",
      "Full version history with one-click rollback",
    ],
  },
  {
    slug: "call-analytics-dashboard",
    name: "Conversation Analytics",
    short: "Real-time dashboards showing call volumes, outcomes, sentiment, and containment, the numbers behind every conversation.",
    heroTitle: "Every Call, Measured. Every Trend, Visible.",
    heroSub: "A live dashboard that turns thousands of conversations into clear metrics: resolution rates, sentiment, peak hours, and the exact moments callers ask for a human.",
    sections: [
      {
        h: "How it works",
        p: [
          "Every call your AI agents handle is scored and aggregated in real time. The dashboard shows volume by hour, language mix, average handling time, containment rate, escalation reasons, and caller sentiment derived from the conversation itself, not from a survey nobody answers.",
          "Drill down from any chart to the underlying calls. If Tuesday evenings show a sentiment dip, two clicks take you to the transcripts that caused it. Filters cover campaign, workflow, language, agent voice, and outcome, and every view exports to CSV or feeds your BI tools via API.",
        ],
        bullets: [
          "Live metrics for volume, containment, handling time, and sentiment",
          "Drill-down from any aggregate straight to individual transcripts",
          "Exports and API feeds for your existing BI stack",
        ],
      },
      {
        h: "Why measurement changes the outcome",
        p: [
          "Phone lines have historically been a black box: managers knew how many calls came in, but not what happened inside them. When every conversation is transcribed and scored, the phone becomes your richest source of customer intelligence, surfacing product complaints, pricing confusion, and delivery issues days before they appear anywhere else.",
          "Containment and escalation metrics also keep automation honest. You see precisely where the AI resolves issues and where it hands off, so investment goes to the workflows that need it rather than the ones that merely feel problematic.",
        ],
      },
      {
        h: "Reporting that fits Omani operations",
        p: [
          "Dashboards run on Gulf Standard Time with the Sunday-to-Thursday business week reflected in every default view, and Ramadan comparisons built in so seasonal shifts are not mistaken for performance changes.",
          "Because all analytics are processed and stored in Oman, reporting on customer conversations stays within national borders, a straightforward answer when your compliance team asks where the data lives under the Oman Personal Data Protection Law.",
        ],
      },
    ],
    bullets: [
      "Real-time containment, sentiment, and outcome tracking",
      "Language-mix and peak-hour analysis across all campaigns",
      "One-click drill-down from charts to full transcripts",
      "GST time zone and Sunday–Thursday week defaults",
      "All analytics data processed and stored inside Oman",
    ],
  },
  {
    slug: "call-history-monitoring",
    name: "Call Records and Live Oversight",
    short: "Searchable transcripts, recordings, and live call monitoring in one place, with full audit trails.",
    heroTitle: "Every Conversation on Record, Every Live Call in View",
    heroSub: "Search any transcript, replay any recording, and watch live calls as they happen, with an audit trail built for regulated industries.",
    sections: [
      {
        h: "How it works",
        p: [
          "Each call produces a complete record: audio recording, time-aligned transcript, the workflow path taken, every API call made, and the final outcome. The history view is fully searchable, by phone number, keyword spoken in the call, date range, workflow, language, or outcome.",
          "Live monitoring shows calls in progress with a real-time transcript stream. Supervisors can watch a conversation unfold, and if something needs a human, trigger an immediate warm transfer without the caller redialling.",
        ],
        bullets: [
          "Full-text search across every transcript ever recorded",
          "Live transcript streaming for calls in progress",
          "Supervisor-initiated takeover mid-call",
        ],
      },
      {
        h: "Why visibility builds trust in automation",
        p: [
          "Teams adopt AI agents faster when nothing is hidden. Being able to replay exactly what the agent said, and see why it said it, turns scepticism into a review process. Disputed conversations stop being one person's word against another's; the record settles it in seconds.",
          "Call history is also your training corpus. The best real conversations become templates for new workflows, and the worst ones become test cases, so quality compounds over time instead of plateauing.",
        ],
      },
      {
        h: "Records that satisfy Omani compliance",
        p: [
          "Recordings and transcripts are stored encrypted in Oman with configurable retention periods, so you can match whatever your sector regulator or internal policy requires, and prove deletion when retention expires.",
          "Access is role-based and every playback or export is itself logged, giving you the audit trail the Oman Personal Data Protection Law expects when personal data in recorded calls is accessed. Data subject requests are simple: find every call from a number, export it, or erase it.",
        ],
      },
    ],
    bullets: [
      "Complete recordings, transcripts, and workflow traces per call",
      "Keyword and phone-number search across full history",
      "Real-time monitoring with supervisor takeover",
      "Configurable retention with provable deletion",
      "Role-based access and logged playback for Personal Data Protection Law audit trails",
    ],
  },
  {
    slug: "knowledge-base",
    name: "Knowledge Base",
    short: "Upload documents, FAQs, and policies once, your AI agents answer from them accurately on every call.",
    heroTitle: "Teach Your Agent Once. It Answers Every Caller.",
    heroSub: "Upload your policies, price lists, and FAQs, and every agent replies from your approved content, in the caller's own language, on every call.",
    sections: [
      {
        h: "How it works",
        p: [
          "The Knowledge Base ingests your documents, PDFs, Word files, spreadsheets, web pages, or plain text, and indexes them for retrieval during live calls. When a caller asks a question, the agent retrieves the relevant passages and answers from them, rather than improvising.",
          "Content is organised into collections you assign per agent, so the clinic booking line knows clinic policies and the billing line knows billing rules. Updates are instant: replace a price list at noon and every call after noon quotes the new prices. Documents uploaded in Arabic answer English callers, and vice versa.",
        ],
        bullets: [
          "Ingests PDFs, Office documents, web pages, and plain text",
          "Per-agent collections so each line knows only what it should",
          "Cross-language retrieval between Arabic and English content",
        ],
      },
      {
        h: "Why grounded answers matter",
        p: [
          "An AI agent that guesses is a liability; one that cites your actual policy is an asset. Grounding every answer in approved documents keeps the agent consistent with what your website, contracts, and staff say, and when it cannot find an answer, it says so and escalates instead of inventing one.",
          "Centralising knowledge also fixes a human problem: staff answers drift. New joiners quote old prices; veterans remember exceptions that no longer exist. A single maintained knowledge base means the phone line is always as current as the document you updated this morning.",
        ],
      },
      {
        h: "Bilingual knowledge for a bilingual market",
        p: [
          "Most Omani businesses maintain documentation in a mix of Arabic and English, a tariff sheet in one, a warranty policy in the other. AI Customer Care retrieves across both, so a caller asking in Omani Arabic gets an accurate answer even if the source document is English.",
          "All uploaded content is stored and processed within Oman, keeping proprietary documents and customer-facing policies under the same in-country protection as your call data.",
        ],
      },
    ],
    bullets: [
      "Answers grounded strictly in your approved documents",
      "Instant updates, new content is live on the very next call",
      "Arabic–English cross-language question answering",
      "Automatic escalation when no confident answer exists",
      "In-country storage of all uploaded knowledge",
    ],
  },
  {
    slug: "outbound-ai-email",
    name: "Post-Call Email Follow-Up",
    short: "Send personalised follow-up emails automatically from call outcomes, confirmations, summaries, and next steps.",
    heroTitle: "Every Call Ends. The Follow-Up Sends Itself.",
    heroSub: "AI Customer Care drafts and sends personalised emails the moment a call ends, booking confirmations, quotes, summaries, in Arabic, English, or both.",
    sections: [
      {
        h: "How it works",
        p: [
          "Add an email node anywhere in a workflow and the agent sends a message triggered by what happened on the call. The content is composed from the conversation itself: the appointment the caller chose, the plan they asked about, the documents they need to bring.",
          "You control the frame, templates with your branding, approved wording, and mandatory disclosures, while the AI fills in the specifics of each conversation. Emails send from your own domain, and delivery, opens, and replies are tracked back to the originating call.",
        ],
        bullets: [
          "Trigger emails from any workflow step or call outcome",
          "Templates lock branding and disclosures while AI personalises details",
          "Delivery and engagement tracked against the source call",
        ],
      },
      {
        h: "Why written follow-up multiplies call value",
        p: [
          "Spoken information evaporates. A caller who agrees to an appointment at 10:40 on Thursday will misremember it by Saturday, unless it arrived in writing seconds after the call. Automatic follow-up turns every verbal agreement into a documented one, cutting no-shows and repeat calls.",
          "For sales conversations, the follow-up email is where interest becomes action: the quote, the payment link, the brochure, sent while the conversation is still fresh instead of when a human gets around to it.",
        ],
      },
      {
        h: "Bilingual by default",
        p: [
          "AI Customer Care sends the email in the language the call happened in, Omani Arabic callers get Arabic emails with correct right-to-left formatting, English callers get English, or both side by side, the format many Omani businesses already use for official correspondence.",
          "Dates can render in both Gregorian and Hijri calendars, and templates support the formal register expected in Gulf business communication rather than a translated Western casual tone.",
        ],
      },
    ],
    bullets: [
      "Automatic personalised emails triggered by call outcomes",
      "Arabic, English, or dual-language messages with RTL support",
      "Branded templates with locked compliance wording",
      "Gregorian and Hijri date rendering",
      "Open, delivery, and reply tracking linked to each call",
    ],
  },
  {
    slug: "outbound-sms",
    name: "Outbound SMS",
    short: "Trigger SMS confirmations, reminders, and links directly from call flows, delivered to Omani networks in seconds.",
    heroTitle: "The Text Message That Closes the Loop",
    heroSub: "Send confirmations, OTP-style references, payment links, and reminders straight from your call flows, reliably delivered across Omani networks.",
    sections: [
      {
        h: "How it works",
        p: [
          "Place an SMS node in any workflow and the agent texts the caller at the right moment: a booking reference the instant it is confirmed, a location pin when directions are requested, a payment link when a balance is discussed. Messages can also be scheduled, a reminder 24 hours before the appointment the agent just booked.",
          "Content merges workflow variables with your approved templates, and every send is logged against the call that produced it, with delivery receipts visible in call history.",
        ],
        bullets: [
          "SMS from any workflow step, immediate or scheduled",
          "Variable merge for references, times, links, and names",
          "Delivery receipts attached to the originating call record",
        ],
      },
      {
        h: "Why SMS still wins in Oman",
        p: [
          "SMS remains the one channel that reaches every phone on every network with no app, no data plan, and near-total open rates. For time-critical information, appointment times, reference numbers, links, nothing else combines reach and immediacy the same way.",
          "Pairing voice with SMS also shortens calls. Instead of the agent spelling out a long reference or URL twice, it simply says the details are on their way by text, a better experience and a lower per-call cost.",
        ],
      },
      {
        h: "Delivered properly in Oman",
        p: [
          "Messages route through connections optimised for Omantel, Ooredoo Oman, and Vodafone Oman subscribers, with Arabic character encoding handled correctly so messages arrive readable, not as garbled symbols or split fragments.",
          "Sender IDs display your business name rather than a random number, and templates can be aligned with local telecom regulations on commercial messaging, including honouring opt-outs automatically across all future campaigns.",
        ],
      },
    ],
    bullets: [
      "Instant or scheduled SMS triggered by call events",
      "Correct Arabic encoding and branded sender IDs",
      "Optimised delivery to all three Omani mobile networks",
      "Automatic opt-out handling across campaigns",
      "Every message logged with delivery status in call history",
    ],
  },
  {
    slug: "rest-apis-and-webhooks",
    name: "Integration APIs and Event Hooks",
    short: "Connect AI Customer Care to your CRM, ERP, and internal tools with clean REST APIs and real-time webhooks.",
    heroTitle: "Your Systems and Your Phone Line, Finally Talking",
    heroSub: "Full REST APIs and real-time webhooks connect our agents to your CRM, booking system, and internal tools, during the call, not after it.",
    sections: [
      {
        h: "How it works",
        p: [
          "The platform is built API-first. REST endpoints let you trigger outbound calls, fetch transcripts and analytics, manage knowledge base content, and update workflows programmatically, everything the dashboard does, your code can do.",
          "Webhooks push events to your systems the moment they happen: call started, call completed with outcome payload, escalation triggered, SMS delivered. Inside workflows, API nodes call your endpoints mid-conversation, so the agent can check inventory or create a ticket while the caller is still speaking. Authentication uses scoped keys, and every payload is signed.",
        ],
        bullets: [
          "REST endpoints covering calls, transcripts, analytics, and content",
          "Signed webhooks for real-time call and message events",
          "Mid-call API nodes for live lookups against your systems",
        ],
      },
      {
        h: "Why integration is the difference between a toy and a tool",
        p: [
          "A voice agent that cannot see your data can only chat. One connected to your CRM can greet the caller by name, see their open order, and act on it, the difference between answering the phone and actually serving the customer.",
          "Webhooks flip the direction too: a failed delivery in your ERP can trigger an outbound call within seconds, or a completed call can write its summary straight into the customer record, no swivel-chair data entry, no lag.",
        ],
      },
      {
        h: "Integrating with the systems Omani businesses run",
        p: [
          "Omani mid-market companies typically run a mix of global CRMs, regional ERPs, and home-grown booking tools. Because AI Customer Care integrates over plain REST and standard webhooks, all of them connect the same way, no proprietary middleware, no vendor lock-in.",
          "API traffic terminates at infrastructure hosted in Oman, so integrations that carry customer data keep that data in-country end to end, simplifying your Personal Data Protection Law data-flow mapping.",
        ],
      },
    ],
    bullets: [
      "API-first platform, everything in the dashboard is scriptable",
      "Real-time signed webhooks for every call and message event",
      "Live mid-call lookups into CRMs, ERPs, and custom tools",
      "Scoped API keys with per-key permissions",
      "In-country API infrastructure for end-to-end data residency",
    ],
  },
  {
    slug: "smart-call-escalation-with-triggers",
    name: "Smart Call Escalation with Triggers",
    short: "Define exactly when a call should reach a human, by sentiment, keywords, caller value, or repeated failure, and it will.",
    heroTitle: "The Right Calls Reach Humans. Automatically.",
    heroSub: "Set precise triggers, frustration detected, VIP caller, sensitive topic, repeated misunderstanding, and AI Customer Care escalates before the moment is lost.",
    sections: [
      {
        h: "How it works",
        p: [
          "Escalation triggers are rules you attach to any workflow. They fire on signals from the live conversation: negative sentiment crossing a threshold, specific keywords like cancellation or complaint, a caller failing to be understood twice, a customer flagged high-value in your CRM, or an explicit request for a person.",
          "When a trigger fires, the configured action runs instantly, warm transfer to the right queue, a callback booked into an agent's calendar, or an alert to a supervisor watching the live monitor. Triggers are prioritised, so a safety-related keyword outranks a routine routing rule.",
        ],
        bullets: [
          "Triggers on sentiment, keywords, caller attributes, and failure loops",
          "Actions include warm transfer, scheduled callback, and supervisor alerts",
          "Priority ordering so critical triggers always win",
        ],
      },
      {
        h: "Why escalation design is where automation succeeds or fails",
        p: [
          "The worst automated experiences are not the ones that fail to answer, they are the ones that trap a frustrated caller in a loop. Well-designed escalation is what makes callers trust automation: they learn that saying the problem clearly either gets it solved or gets them to someone who can.",
          "Precise triggers also protect your team's time. Humans stop receiving the calls a machine handles well and start receiving only the ones where empathy, judgement, or authority genuinely change the outcome.",
        ],
      },
      {
        h: "Escalation with Gulf sensibilities",
        p: [
          "In Oman, some conversations simply belong with a person, condolences, serious complaints, negotiations with long-standing customers. Triggers let you encode that cultural judgement: certain phrases, account histories, or caller categories route straight to senior staff without the caller ever having to insist.",
          "Sentiment detection is tuned for Omani Arabic speech patterns, so politeness formulas are not misread as satisfaction and rising frustration is caught even when it is expressed with characteristic Gulf restraint.",
        ],
      },
    ],
    bullets: [
      "Real-time sentiment and keyword triggers tuned for Omani Arabic",
      "CRM-driven rules for VIP and high-value callers",
      "Automatic escalation after repeated misunderstanding",
      "Warm transfer, callback, or supervisor alert actions",
      "Priority-ordered rules with full trigger audit logs",
    ],
  },
  {
    slug: "warm-transfers",
    name: "Briefed Staff Handovers",
    short: "When calls move to humans, the full conversation moves with them, no repeating, no starting over.",
    heroTitle: "Handovers Where Nobody Repeats Themselves",
    heroSub: "When an agent transfers a call, your staff receive the caller's identity, issue, and full conversation summary before they say hello.",
    sections: [
      {
        h: "How it works",
        p: [
          "When a transfer is triggered, by an escalation rule, a workflow step, or the caller's request, AI Customer Care first briefs the receiving human. The staff member sees or hears a concise summary: who is calling, what they need, what has already been verified, and what the AI already tried.",
          "The caller stays on the line with the AI, which sets expectations naturally, until the human accepts. Only then is the call bridged. If no one is available, the system offers a scheduled callback and books it into the queue instead of dumping the caller into hold music indefinitely.",
        ],
        bullets: [
          "Receiving agent briefed before the bridge, not after",
          "Caller held conversationally, never in silent limbo",
          "Automatic callback offer when no human is free",
        ],
      },
      {
        h: "Why context transfer is the whole point",
        p: [
          "The single most cited frustration with phone support is repeating your story. A transfer without context resets the call to zero and tells the customer their first five minutes were wasted. A warm transfer with a summary means the human's first sentence proves they already understand, the fastest trust-builder in customer service.",
          "It also cuts real cost: handled-twice conversations are the most expensive calls in any operation. Context handover typically removes several minutes of rediscovery from every escalated call.",
        ],
      },
      {
        h: "Continuity across languages",
        p: [
          "In Oman's multilingual service environment, the AI may handle a call in Malayalam or Urdu while the available specialist works in Arabic or English. AI Customer Care bridges that gap by delivering the handover summary in the staff member's preferred language, whatever language the call itself was in.",
          "Transfer targets can follow Omani schedules too, routing to the Muscat office during its hours, to an on-call number after them, and adjusting automatically for Ramadan working hours and public holidays.",
        ],
      },
    ],
    bullets: [
      "Full conversation summary delivered before the human joins",
      "Cross-language handover briefs for multilingual teams",
      "Verified caller details passed forward, no re-authentication",
      "Schedule-aware routing across offices and on-call staff",
      "Callback booking when no agent is available",
    ],
  },
];
