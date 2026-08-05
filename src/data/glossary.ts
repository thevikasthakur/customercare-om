import type { GlossaryTerm } from "./types";

export const glossary: GlossaryTerm[] = [
  {
    slug: "after-call-work-acw",
    term: "After-Call Work (ACW)",
    short: "The wrap-up tasks an agent completes after a call ends, such as notes, tagging, and follow-up actions.",
    sections: [
      {
        h: "What is After-Call Work?",
        p: [
          "After-Call Work is everything an agent does once the caller hangs up: writing a summary of the conversation, updating the customer record, categorising the enquiry, scheduling callbacks, and triggering any follow-up processes.",
          "Although the customer is no longer on the line, ACW is still paid, scheduled time. It is normally measured in seconds per call and forms part of Average Handle Time.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "ACW is one of the largest hidden costs in a contact centre. If each of your agents spends two minutes wrapping up every call, a team of ten handling 60 calls a day each loses roughly 20 working hours daily to administration rather than conversation.",
          "Rushed wrap-up creates a different problem: incomplete notes mean the next agent starts from zero, forcing the customer to repeat themselves.",
        ],
        bullets: [
          "Directly inflates Average Handle Time and staffing requirements",
          "Poor-quality notes damage every future interaction with that customer",
          "Inconsistent tagging makes reporting and analytics unreliable",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare's AI phone agents generate the wrap-up automatically. Every call ends with a structured summary, disposition tags, and CRM updates written the moment the conversation closes, whether it happened in Omani Arabic, English, Hindi, or any other language VoxCare supports.",
          "For Omani businesses, that means human agents in Muscat or Salalah spend their time on the calls that genuinely need a person, not on typing up the ones that did not. All call data stays on infrastructure hosted inside Oman, in line with the Personal Data Protection Law (Royal Decree 6/2022).",
        ],
      },
    ],
    related: ["average-handle-time", "call-analytics", "workforce-management-wfm"],
  },
  {
    slug: "ai-receptionist",
    term: "AI Receptionist",
    short: "A virtual agent that answers inbound calls, greets callers, answers questions, and routes or books on a business's behalf.",
    sections: [
      {
        h: "What is an AI receptionist?",
        p: [
          "An AI receptionist is software that picks up your phone line the way a human front-desk employee would. It greets the caller, understands what they want in natural speech, answers common questions, takes messages, books appointments, and transfers the call to the right person when needed.",
          "Unlike a traditional IVR menu, an AI receptionist holds an open conversation: the caller simply says what they need instead of pressing digits through a menu tree.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Missed calls are missed revenue. Clinics, salons, real-estate offices, and trading companies routinely lose bookings because the phone rang during a busy hour, after closing, or during prayer or lunch breaks.",
          "An AI receptionist answers on the first ring, every hour of every day, and never puts a caller on hold because the desk is busy.",
        ],
        bullets: [
          "24/7 answering without night-shift staffing costs",
          "Consistent greeting and information on every single call",
          "Instant scaling during seasonal peaks such as Ramadan promotions or khareef tourism season",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare's AI receptionist speaks the way Oman speaks. It converses naturally in Omani Arabic and Gulf Arabic, switches to English, Standard Arabic, Swahili, Hindi, Bengali, Malayalam, or Tamil when the caller does, and pronounces local names and places correctly.",
          "Because VoxCare is hosted entirely within Oman, call recordings and caller data never leave the country, keeping deployments straightforward under the Personal Data Protection Law.",
        ],
      },
    ],
    related: ["conversational-ai", "call-flow", "bot-disclosure"],
  },
  {
    slug: "automatic-call-distribution-acd",
    term: "Automatic Call Distribution (ACD)",
    short: "A telephony system that routes each incoming call to the most appropriate agent or queue based on defined rules.",
    sections: [
      {
        h: "What is Automatic Call Distribution?",
        p: [
          "An ACD is the routing engine of a call centre. When a call arrives, the ACD decides where it should go: which queue, which team, which specific agent. Routing rules can consider the number dialled, the caller's language, time of day, agent skills, and current queue lengths.",
          "Common ACD strategies include round-robin distribution, longest-idle-agent routing, and skills-based routing, where calls about billing go to billing specialists and Arabic calls go to Arabic speakers.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Bad routing is expensive in two directions: customers bounce between departments repeating their story, and specialist agents sit idle while generalists drown.",
          "A well-tuned ACD shortens wait times, raises first-contact resolution, and balances workload fairly across the team.",
        ],
        bullets: [
          "Reduces transfers and repeated explanations",
          "Matches caller needs to agent skills, including language",
          "Provides the queue data that workforce planning depends on",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare acts as an intelligent layer in front of or alongside your ACD. The AI agent understands the caller's intent and language in the first few seconds, resolves routine requests entirely on its own, and hands the rest to your ACD with the intent, language, and context already attached.",
          "For multilingual markets like Oman, where a single queue may receive calls in Omani Arabic, Hindi, Swahili, and English within the same hour, intent-and-language detection before routing removes the guesswork.",
        ],
      },
    ],
    related: ["call-flow", "computer-telephony-integration-cti", "average-speed-of-answer-asa"],
  },
  {
    slug: "average-handle-time",
    term: "Average Handle Time (AHT)",
    short: "The average total time spent per call, combining talk time, hold time, and after-call work.",
    sections: [
      {
        h: "What is Average Handle Time?",
        p: [
          "Average Handle Time measures how long a customer interaction takes from start to finish. The standard formula is: (total talk time + total hold time + total after-call work) divided by the number of calls handled.",
          "AHT is usually tracked per agent, per team, and per call type, because a password reset and an insurance claim naturally take very different amounts of time.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "AHT drives staffing maths. Multiply your call volume by your AHT and you know how many agent-hours you must schedule; every second shaved from AHT compounds across thousands of calls.",
          "But AHT is a balance, not a race. Cutting it too aggressively pushes agents to rush callers off the line, which shows up later as repeat calls and lower satisfaction scores.",
        ],
        bullets: [
          "Core input for forecasting and scheduling",
          "Useful for spotting broken processes when one call type balloons",
          "Dangerous as a standalone target without quality metrics beside it",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare reduces AHT from both ends. The AI agent fully handles routine calls, removing them from human queues altogether, and when it does transfer a call, the human agent receives the caller's identity, intent, and history up front, eliminating the slowest part of most calls: the opening interrogation.",
          "Automated wrap-up then removes most after-call work, so Omani teams see handle time fall without anyone hurrying a customer.",
        ],
      },
    ],
    related: ["after-call-work-acw", "average-speed-of-answer-asa", "first-response-time-frt"],
  },
  {
    slug: "average-speed-of-answer-asa",
    term: "Average Speed of Answer (ASA)",
    short: "The average time callers wait in queue before an agent picks up.",
    sections: [
      {
        h: "What is Average Speed of Answer?",
        p: [
          "ASA measures the average number of seconds between a call entering the queue and an agent answering it. It excludes time spent in IVR menus in most definitions, though centres should state clearly what their measurement includes.",
          "ASA is closely tied to service level targets, such as answering 80 percent of calls within 20 seconds, and to abandonment rate, since callers who wait too long simply hang up.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Waiting on hold is the single most universally disliked part of phoning a business. Research across markets consistently shows abandonment climbing sharply after the first minute of queue time.",
          "Every abandoned call is a customer you paid to attract who left before you could serve them, and many never call back.",
        ],
        bullets: [
          "Strong predictor of abandonment and caller frustration",
          "Highly sensitive to staffing gaps during peak periods",
          "Averages can hide painful outliers, so track percentiles too",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "An AI agent has no queue. VoxCare answers every call on the first ring, at 2 pm or 2 am, during Eid holidays and weekday rushes alike, effectively driving ASA to zero for the calls it handles.",
          "For calls that need a human, VoxCare keeps the caller productively engaged, verifying identity and capturing the issue, so queue time becomes preparation time rather than dead air. Omani businesses get big-enterprise responsiveness without big-enterprise headcount.",
        ],
      },
    ],
    related: ["first-response-time-frt", "service-level-agreement-sla", "automatic-call-distribution-acd"],
  },
  {
    slug: "bot-disclosure",
    term: "Bot Disclosure",
    short: "The practice of telling customers clearly when they are speaking with an AI system rather than a human.",
    sections: [
      {
        h: "What is bot disclosure?",
        p: [
          "Bot disclosure means openly informing a caller or chat user that they are interacting with an automated agent. A typical disclosure is a brief statement at the start of the call, such as introducing the assistant as a virtual agent, together with an easy path to reach a human.",
          "As voice AI becomes harder to distinguish from human speech, disclosure has shifted from a courtesy to an ethical baseline, and in several jurisdictions a legal requirement.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Trust is fragile. Customers who discover mid-conversation that they were unknowingly talking to a machine tend to feel deceived, even if the machine served them well. Customers told up front generally engage comfortably.",
          "Transparency also aligns with data protection principles. Oman's Personal Data Protection Law (Royal Decree 6/2022) is built on informed, express consent, and callers can only consent meaningfully to automated processing they know is happening.",
        ],
        bullets: [
          "Preserves customer trust and brand credibility",
          "Supports the consent and transparency principles in Oman's Personal Data Protection Law",
          "Reduces escalation friction by offering a human path early",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare agents introduce themselves honestly, in the caller's own language, with disclosure phrasing you control. Every deployment includes a clear, configurable route to a human agent, and disclosure behaviour is logged so you can evidence it.",
          "Because disclosure wording matters culturally as much as legally, VoxCare provides natural-sounding disclosures in Omani Arabic and each supported language rather than a stiff translated boilerplate.",
        ],
      },
    ],
    related: ["ai-receptionist", "conversational-ai", "gdpr"],
  },
  {
    slug: "call-analytics",
    term: "Call Analytics",
    short: "The measurement and analysis of call data, from volumes and durations to intents, outcomes, and sentiment.",
    sections: [
      {
        h: "What is call analytics?",
        p: [
          "Call analytics turns raw telephony activity into decision-ready information. At the basic level it covers volumes, durations, wait times, and abandonment. At the advanced level it analyses the content of conversations: what customers asked about, how they felt, whether the issue was resolved, and which topics are trending.",
          "Modern platforms combine metadata (when, how long, from where) with conversation intelligence extracted by AI from transcripts.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Your phone lines are a continuous, unfiltered survey of what customers actually need. Without analytics, that intelligence evaporates the moment each call ends.",
          "Analytics reveals patterns no individual agent can see: a spike in delivery complaints after a courier change, a product question that suggests confusing packaging, a competitor being mentioned more often each month.",
        ],
        bullets: [
          "Identifies the root causes behind call volume",
          "Quantifies the impact of process and product changes",
          "Feeds forecasting, staffing, and training decisions",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "Every VoxCare conversation is transcribed, categorised, and scored automatically, including calls in Omani Arabic and Gulf dialects that generic analytics tools transcribe poorly. Dashboards show intents, outcomes, sentiment, and language mix across your entire call traffic.",
          "All of this processing happens on infrastructure inside Oman, so gaining analytical insight never means exporting customer conversations abroad.",
        ],
      },
    ],
    related: ["speech-analytics", "customer-satisfaction-csat", "average-handle-time"],
  },
  {
    slug: "call-center-agent-turnover",
    term: "Call Center Agent Turnover",
    short: "The rate at which contact centre agents leave and must be replaced, one of the industry's most persistent cost drivers.",
    sections: [
      {
        h: "What is agent turnover?",
        p: [
          "Agent turnover, or attrition, is the percentage of contact centre staff who leave within a period, usually a year. It is calculated as departures divided by average headcount, and contact centres have long recorded some of the highest turnover rates of any industry, frequently above 30 percent annually.",
          "Turnover includes both voluntary resignations and involuntary exits, and each replacement carries recruiting, training, and lost-productivity costs.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Replacing a trained agent typically costs several months of that agent's salary once hiring, onboarding, and the productivity ramp are counted. High turnover also erodes quality, since a queue staffed mostly by newcomers resolves fewer issues on the first try.",
          "The main driver is well documented: repetitive, low-autonomy work. Answering the same five questions two hundred times a day burns people out.",
        ],
        bullets: [
          "Recruitment and training costs recur with every departure",
          "Service quality drops as average tenure falls",
          "Burnout from repetitive calls is the leading cause of attrition",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare absorbs exactly the calls that cause burnout: opening hours, order status, appointment changes, password resets, repeated in every language your customers speak. Human agents keep the varied, judgement-heavy conversations that make the job engaging.",
          "For Omani employers, this also supports retention of trained national talent: fewer people doing more meaningful work is a stronger proposition than a large floor of exhausted script-readers.",
        ],
      },
    ],
    related: ["workforce-engagement-management-wem", "after-call-work-acw", "workforce-management-wfm"],
  },
  {
    slug: "call-flow",
    term: "Call Flow",
    short: "The designed path a call follows from the first ring to resolution, including greetings, questions, branches, and handoffs.",
    sections: [
      {
        h: "What is a call flow?",
        p: [
          "A call flow is the map of what happens during a call: how the caller is greeted, what information is gathered, which branches the conversation can take, when the system acts on its own, and when it escalates to a person.",
          "In traditional IVR systems, call flows are rigid menu trees. In conversational AI systems, the flow is a set of goals and guardrails, and the actual path adapts to whatever the caller says.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "The call flow is your customer's experience, made concrete. A well-designed flow feels effortless; a poor one traps callers in loops, asks for information twice, or dead-ends without a human option.",
          "Flow design also determines automation yield: how many calls complete without human help, and whether escalations arrive with useful context or as cold transfers.",
        ],
        bullets: [
          "Defines what can be resolved without an agent",
          "Sets escalation points and the context passed at handoff",
          "Directly shapes customer effort and satisfaction",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare replaces menu trees with goal-driven conversation. You define what the agent should achieve, verify a booking, capture a complaint, answer from your knowledge base, and the AI navigates there naturally regardless of how the caller phrases things or which languages they use.",
          "Flows are versioned and testable, so an Omani business can pilot a new booking flow on a subset of traffic before rolling it out to every caller.",
        ],
      },
    ],
    related: ["automatic-call-distribution-acd", "ai-receptionist", "customer-effort-score"],
  },
  {
    slug: "computer-telephony-integration-cti",
    term: "Computer Telephony Integration (CTI)",
    short: "Technology that connects phone systems with business software so calls and customer data move together.",
    sections: [
      {
        h: "What is CTI?",
        p: [
          "Computer Telephony Integration links your telephone infrastructure to your business applications. Classic CTI features include screen pops that open the caller's CRM record as the phone rings, click-to-dial from within software, and automatic logging of calls against customer records.",
          "CTI is the plumbing that lets a conversation and its data travel as one unit instead of living in disconnected systems.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Without CTI, agents juggle windows and retype information, and every call starts with the caller spelling out details the company already holds.",
          "With CTI, the agent greets the caller by name, sees their history instantly, and the call is logged automatically, which cuts handle time and improves data quality simultaneously.",
        ],
        bullets: [
          "Eliminates manual lookup and duplicate data entry",
          "Enables personalised greetings and context-aware service",
          "Keeps CRM records complete without relying on agent discipline",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare connects to your CRM, booking systems, and ticketing tools through APIs, so its AI agents do what CTI does for humans, but autonomously: they recognise the caller, read the relevant records, act on them, and write back the outcome, all during the call.",
          "Integrations run from VoxCare's Oman-hosted environment, so customer records synchronised during calls remain within the Sultanate, simplifying compliance with the Personal Data Protection Law.",
        ],
      },
    ],
    related: ["automatic-call-distribution-acd", "omnichannel-support", "call-analytics"],
  },
  {
    slug: "conversational-ai",
    term: "Conversational AI",
    short: "AI systems that understand and respond in natural human language, by voice or text, across turns of dialogue.",
    sections: [
      {
        h: "What is conversational AI?",
        p: [
          "Conversational AI is the family of technologies that lets software hold genuine dialogue with people. For voice, the pipeline combines speech recognition to hear, natural language understanding to interpret, a reasoning layer to decide, and speech synthesis to reply, all fast enough that the exchange feels like a normal conversation.",
          "It differs from scripted chatbots and IVR menus in one fundamental way: it handles language the customer actually uses, including interruptions, topic changes, and mixed languages, rather than requiring the customer to adapt to the machine.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "The telephone remains the channel customers reach for when something matters, and it has historically been the hardest to automate well. Conversational AI changes that economics: routine calls can now be resolved end to end with no queue and no human cost per call.",
          "Quality varies enormously by language, however. Systems trained mostly on English or Standard Arabic often stumble on Gulf dialects, which is exactly where most real Omani phone conversations happen.",
        ],
        bullets: [
          "Automates the highest-cost, highest-stakes channel: voice",
          "Available around the clock at flat, predictable cost",
          "Dialect coverage is the deciding quality factor in Gulf markets",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare is conversational AI built for Oman first. Its agents converse naturally in Omani Arabic and Gulf Arabic, alongside English, Standard Arabic, Swahili, Hindi, Bengali, Malayalam, and Tamil, reflecting the languages actually spoken across the Sultanate's homes and workplaces.",
          "The full stack runs on infrastructure inside Oman, so the intelligence and the data both stay local.",
        ],
      },
    ],
    related: ["natural-language-processing-nlp", "ai-receptionist", "retrieval-augmented-generation-rag"],
  },
  {
    slug: "customer-effort-score",
    term: "Customer Effort Score (CES)",
    short: "A metric measuring how easy or difficult customers found it to get their issue resolved.",
    sections: [
      {
        h: "What is Customer Effort Score?",
        p: [
          "CES asks customers a single question after an interaction, typically some variant of how easy the company made it to handle their issue, answered on a numeric scale. The score is the average response, sometimes reported as the percentage choosing the easy end of the scale.",
          "CES emerged from research suggesting that reducing effort predicts loyalty better than delighting customers does: people rarely leave because service was merely adequate, but they do leave because it was exhausting.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "High effort has recognisable symptoms: repeating information to multiple agents, being transferred repeatedly, calling back about the same issue, or navigating hostile phone menus. Each symptom is measurable and fixable.",
          "Effort is also the honest lens on automation. A bot that deflects calls but fails to resolve them lowers costs on paper while raising effort, and the churn arrives later.",
        ],
        bullets: [
          "Stronger loyalty predictor than satisfaction alone in many studies",
          "Points directly at broken journeys, not just unhappy moments",
          "Keeps automation projects honest about real resolution",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare attacks effort at its sources: no hold queue, no menu tree, no language barrier, and no repeating yourself, because context follows the caller into any human handoff. A caller in Sohar can state their issue once, in their own dialect, and either get it resolved immediately or reach a human who already knows the story.",
          "VoxCare can also run the CES survey itself at the end of calls, in the caller's language, feeding scores straight into your analytics.",
        ],
      },
    ],
    related: ["customer-satisfaction-csat", "net-promoter-score-nps", "call-flow"],
  },
  {
    slug: "customer-satisfaction-csat",
    term: "Customer Satisfaction (CSAT)",
    short: "A metric capturing how satisfied customers were with a specific interaction, product, or service.",
    sections: [
      {
        h: "What is CSAT?",
        p: [
          "CSAT is measured by asking customers to rate their satisfaction with a recent experience, most often on a 1-to-5 scale. The published score is usually the percentage of respondents choosing the top ratings, so a CSAT of 85 percent means 85 percent of respondents were satisfied or very satisfied.",
          "Because it is tied to a specific interaction, CSAT is a transactional metric: it tells you how Tuesday's support call went, not how the customer feels about your brand overall.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "CSAT is the fastest feedback loop a service team has. Tracked per agent, per call type, and per channel, it shows precisely where experience is strong and where it is breaking.",
          "Its weaknesses are worth knowing: response rates are often low, unhappy customers respond disproportionately, and customers who abandoned the queue never get surveyed at all.",
        ],
        bullets: [
          "Immediate, interaction-level feedback",
          "Comparable across teams, channels, and time",
          "Survey response bias means it should be read alongside behavioural data",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare collects CSAT conversationally at the end of every call, in whichever of its nine supported languages the conversation happened, which lifts response rates well above emailed surveys. It also estimates sentiment from the conversation itself, giving you a satisfaction signal even from callers who skip the survey.",
          "For Omani businesses, that means satisfaction data covering the whole customer base, not just the segment comfortable answering an English web form.",
        ],
      },
    ],
    related: ["net-promoter-score-nps", "customer-effort-score", "call-analytics"],
  },
  {
    slug: "first-response-time-frt",
    term: "First Response Time (FRT)",
    short: "How long a customer waits before receiving the first meaningful response to their enquiry.",
    sections: [
      {
        h: "What is First Response Time?",
        p: [
          "FRT measures the elapsed time between a customer reaching out and the first substantive reply from the business. On the phone it is close to speed of answer; on email, chat, and social channels it is the gap before a real response, not counting automated acknowledgements.",
          "It is typically reported as an average or median per channel, and often written into service level agreements with per-channel targets.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Customers judge responsiveness before they judge anything else. A fast, competent first response signals that the issue is in good hands; a slow one triggers repeat contacts across other channels, multiplying workload for the same underlying issue.",
          "Expectations are also channel-specific and rising: what counted as fast for email a decade ago now reads as neglect on chat or messaging.",
        ],
        bullets: [
          "First impression metric for every support channel",
          "Slow FRT breeds duplicate tickets and channel-hopping",
          "A common headline commitment in SLAs",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "On voice, VoxCare makes FRT effectively instant: calls are answered immediately and the first response is a substantive one, because the AI can actually resolve requests rather than merely acknowledging them.",
          "Businesses across Oman, from Muscat clinics to logistics firms in Sohar, can promise callers a real answer within seconds at any hour, without a night shift on the payroll.",
        ],
      },
    ],
    related: ["average-speed-of-answer-asa", "service-level-agreement-sla", "omnichannel-support"],
  },
  {
    slug: "gdpr",
    term: "GDPR",
    short: "The European Union's General Data Protection Regulation, the influential template for modern privacy laws including Oman's Personal Data Protection Law.",
    sections: [
      {
        h: "What is GDPR?",
        p: [
          "The General Data Protection Regulation is the European Union's data privacy law, in force since May 2018. It governs how organisations collect, process, store, and transfer the personal data of individuals in the EU, and applies extraterritorially to businesses anywhere that offer goods or services to EU residents.",
          "Its core principles include lawful basis for processing, purpose limitation, data minimisation, individual rights such as access and erasure, breach notification duties, and heavy penalties, up to 20 million euros or 4 percent of global annual turnover.",
        ],
      },
      {
        h: "GDPR versus Oman's Personal Data Protection Law",
        p: [
          "Oman's Personal Data Protection Law, issued by Royal Decree 6/2022 and in force since February 2023, follows the same broad philosophy as GDPR but differs in important ways. Understanding both matters for any Omani business with international customers.",
          "The headline differences concern legal basis, permits, and enforcement.",
        ],
        bullets: [
          "Legal basis: GDPR offers six lawful bases including legitimate interests; Oman's Personal Data Protection Law is consent-centric, requiring express written consent for most processing, with narrower exceptions",
          "Sensitive data: the Personal Data Protection Law requires a permit from Oman's Ministry of Transport, Communications and Information Technology before processing categories such as health, genetic, or biometric data; GDPR has no equivalent permit regime",
          "Cross-border transfers: GDPR uses adequacy decisions and standard contractual clauses; the Personal Data Protection Law requires that transfers not prejudice national interests and follows ministerial regulation",
          "Penalties: GDPR fines scale with global turnover; Personal Data Protection Law penalties are fixed-sum fines under Omani law, with administrative and criminal dimensions",
          "Scope: GDPR applies extraterritorially by design; the Personal Data Protection Law is anchored in processing connected to Oman",
        ],
      },
      {
        h: "Why it matters for customer service",
        p: [
          "Phone calls are personal data processing: recordings capture voices, names, phone numbers, and often health or financial details. Any AI system handling calls must answer where recordings are stored, who can access them, what consent covers them, and how deletion requests are honoured.",
          "An Omani business serving European tourists or expatriate customers may find both regimes relevant at once, so building to the stricter reading of each requirement is the safe posture.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare is hosted entirely within Oman, so recordings, transcripts, and customer records stay in-country by architecture, not by policy promise. Consent capture, retention schedules, access controls, and deletion workflows are built into the platform to align with the Personal Data Protection Law's consent-first model.",
          "That same discipline, explicit consent, minimal data, documented processing, also covers the ground GDPR cares about most, giving internationally exposed Omani businesses a defensible position under both frameworks.",
        ],
      },
    ],
    related: ["bot-disclosure", "call-analytics", "speech-analytics"],
  },
  {
    slug: "natural-language-processing-nlp",
    term: "Natural Language Processing (NLP)",
    short: "The field of AI concerned with understanding, interpreting, and generating human language.",
    sections: [
      {
        h: "What is NLP?",
        p: [
          "Natural Language Processing is the branch of artificial intelligence that enables machines to work with human language: recognising what words were said, extracting meaning and intent, identifying entities like names and dates, judging sentiment, and composing fluent responses.",
          "In a voice agent, NLP sits between the ears and the mouth: speech recognition produces text, NLP works out what the customer means and what to say, and speech synthesis turns the reply back into voice.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "NLP quality decides whether automation feels like service or like an obstacle. Weak NLP forces customers into keyword games; strong NLP handles hesitation, slang, code-switching, and indirect requests the way an attentive human would.",
          "Arabic presents particular challenges: the written standard differs substantially from spoken dialects, and Gulf dialects differ again from Egyptian or Levantine speech. Callers in Oman also routinely mix Arabic and English, or speak Swahili, Hindi, Malayalam, Tamil, or Bengali.",
        ],
        bullets: [
          "Determines how accurately intent is understood on the first attempt",
          "Dialect and code-switching support separates usable systems from frustrating ones",
          "Underpins downstream features like analytics, routing, and summarisation",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare's language stack is tuned for the way Oman actually talks: Omani and Gulf Arabic as first-class dialects, seamless switching to English or Standard Arabic mid-sentence, and full conversations in Swahili, Hindi, Bengali, Malayalam, and Tamil for the Sultanate's diverse communities.",
          "All language processing runs in-country, so the linguistic intelligence never requires shipping voice data abroad.",
        ],
      },
    ],
    related: ["conversational-ai", "speech-analytics", "retrieval-augmented-generation-rag"],
  },
  {
    slug: "net-promoter-score-nps",
    term: "Net Promoter Score (NPS)",
    short: "A loyalty metric based on how likely customers are to recommend a company to others.",
    sections: [
      {
        h: "What is Net Promoter Score?",
        p: [
          "NPS asks one question: how likely are you to recommend us, on a scale of 0 to 10. Respondents scoring 9 or 10 are promoters, 7 or 8 are passives, and 0 to 6 are detractors. The score is the percentage of promoters minus the percentage of detractors, giving a range from -100 to +100.",
          "Unlike CSAT, which rates a single interaction, NPS aims at overall relationship strength and is usually measured periodically rather than after every contact.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Recommendation intent is a proxy for the behaviours that grow a business: repeat purchase, retention, and word of mouth. In relationship-driven markets like Oman, where personal recommendation carries exceptional weight, the underlying behaviour matters even more than the score.",
          "The number alone is not actionable, though. The value lies in the follow-up question, why did you give that score, and in comparing NPS across customer segments and journeys.",
        ],
        bullets: [
          "Single comparable number for leadership and benchmarking",
          "The verbatim reasons behind scores are where the insight lives",
          "Service experiences are among the strongest movers of NPS in either direction",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "Every effortless call nudges NPS upward, and every unanswered ring nudges it down; VoxCare shifts thousands of small moments in the right direction by making the phone channel instant, multilingual, and reliable.",
          "VoxCare can also conduct NPS outreach by voice, asking the question and the follow-up in the customer's own language and clustering the spoken reasons into themes, reaching customers a web survey never would.",
        ],
      },
    ],
    related: ["customer-satisfaction-csat", "customer-effort-score", "call-analytics"],
  },
  {
    slug: "omnichannel-support",
    term: "Omnichannel Support",
    short: "A support model where phone, chat, email, and messaging channels share one conversation history and context.",
    sections: [
      {
        h: "What is omnichannel support?",
        p: [
          "Omnichannel support means a customer can start on one channel and continue on another without losing the thread. The WhatsApp message, yesterday's phone call, and last week's email all belong to one continuous record that any agent, human or AI, can see.",
          "It differs from multichannel support, where a business is present on many channels but each operates as a silo with its own queue, history, and blind spots.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Customers do not think in channels; they think in problems. Being asked to re-explain an issue because it moved from chat to phone is one of the most reliable generators of frustration in modern service.",
          "Siloed channels also fragment your data: the same customer appears as three unrelated contacts, making analytics, personalisation, and workload planning all less accurate.",
        ],
        bullets: [
          "One customer, one history, regardless of channel",
          "Escalations carry full context instead of starting over",
          "Unified data improves both service and analytics",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare treats voice as a first-class citizen of the omnichannel record. Calls handled by its AI agents are transcribed, summarised, and written into the same customer timeline as chats and emails, so a follow-up on any channel picks up exactly where the phone call left off.",
          "In Oman, where a customer might WhatsApp in English and phone in Omani Arabic within the same day, VoxCare keeps that one relationship stitched together across languages as well as channels.",
        ],
      },
    ],
    related: ["computer-telephony-integration-cti", "first-response-time-frt", "conversational-ai"],
  },
  {
    slug: "predictive-dialer",
    term: "Predictive Dialer",
    short: "An outbound calling system that dials numbers automatically and connects answered calls to available agents.",
    sections: [
      {
        h: "What is a predictive dialer?",
        p: [
          "A predictive dialer automates outbound calling by dialling multiple numbers ahead of agent availability, using statistical models to predict how many calls will be answered and when agents will free up. Answered calls are connected to agents; unanswered, busy, and voicemail results are filtered out.",
          "It sits at the aggressive end of a dialler family that also includes progressive diallers, which dial one number per available agent, and preview diallers, which let the agent review the record before dialling.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "For outbound teams, dialling by hand wastes most of the shift on ringing tones and wrong numbers. Predictive dialling can multiply talk time per agent hour several times over.",
          "The trade-off is abandoned calls: when the model over-dials, answered customers hear silence and hang up, which damages brand reputation and, in many jurisdictions, breaches telemarketing rules. Consent obligations, such as those under Oman's Personal Data Protection Law, apply to outbound contact lists too.",
        ],
        bullets: [
          "Dramatically increases agent talk time on outbound campaigns",
          "Over-aggressive pacing creates abandoned calls and complaints",
          "Contact lists and call recordings remain regulated personal data",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare rethinks the problem: instead of pacing humans faster, its AI agents place the outbound calls themselves. Appointment reminders, delivery confirmations, payment follow-ups, and satisfaction check-ins are conducted start to finish by the AI, in the customer's preferred language, with no silent-call risk because there is no agent shortage to predict around.",
          "Campaign consent status and outcomes are logged automatically, keeping outbound activity in Oman auditable and Personal Data Protection Law-aware.",
        ],
      },
    ],
    related: ["automatic-call-distribution-acd", "workforce-management-wfm", "bot-disclosure"],
  },
  {
    slug: "retrieval-augmented-generation-rag",
    term: "Retrieval-Augmented Generation (RAG)",
    short: "An AI technique that grounds a language model's answers in a business's own documents, retrieved at question time.",
    sections: [
      {
        h: "What is RAG?",
        p: [
          "Retrieval-Augmented Generation combines two steps. When a question arrives, the system first retrieves the most relevant passages from a trusted knowledge base, your price lists, policies, product manuals, FAQs, then passes those passages to the language model, which composes an answer grounded in that retrieved material.",
          "The alternative, letting the model answer purely from its training data, risks confident but wrong answers about your specific business, since no general model was trained on your clinic's opening hours or your return policy.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "For customer service, accuracy is non-negotiable: an AI that misquotes a price or invents a warranty term creates real liability. RAG is the standard defence, because answers trace back to documents you control.",
          "RAG also makes updates instant. Change the document and the next call reflects it, with no model retraining, which matters for businesses whose offers, schedules, and stock change weekly.",
        ],
        bullets: [
          "Grounds answers in your documents, sharply reducing fabrication",
          "Knowledge updates take effect immediately",
          "Answers are traceable to their source passages for auditing",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare's AI agents answer from your knowledge base using RAG, retrieving in real time during the call and responding in the caller's language even when the source documents are written in another, an English product sheet can back an answer delivered in Omani Arabic.",
          "Your documents and the retrieval index are stored on VoxCare's Oman-hosted infrastructure, so proprietary business knowledge stays inside the Sultanate.",
        ],
      },
    ],
    related: ["conversational-ai", "natural-language-processing-nlp", "ai-receptionist"],
  },
  {
    slug: "service-level-agreement-sla",
    term: "Service Level Agreement (SLA)",
    short: "A documented commitment defining the service standards a provider or team promises, such as response times and uptime.",
    sections: [
      {
        h: "What is an SLA?",
        p: [
          "A Service Level Agreement is a formal commitment to measurable service standards. Between companies, it appears in contracts: uptime guarantees, support response times, resolution targets, and remedies if targets are missed. Inside a contact centre, the service level is the operational target, classically expressed as answering a given percentage of calls within a set number of seconds, such as 80/20.",
          "Good SLAs specify the metric, the measurement window, the exclusions, and what happens when the commitment is breached.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "SLAs convert vague promises of good service into commitments you can staff for, report on, and be held to. They anchor customer expectations and give operations a concrete target for scheduling and escalation design.",
          "Missed SLAs carry real costs: contractual penalties, credits, and the reputational cost of a promise visibly broken.",
        ],
        bullets: [
          "Turns service quality into measurable, enforceable commitments",
          "Drives staffing and prioritisation decisions",
          "Requires honest measurement, including abandoned and after-hours contacts",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "AI agents make aggressive SLAs affordable. VoxCare answers every call within seconds regardless of volume spikes, so speed-of-answer commitments that would require heavy overstaffing become the platform's default behaviour.",
          "Dashboards track attainment continuously, letting an Omani service provider evidence its SLA performance to clients, including government and enterprise clients who increasingly require in-country data handling under the Personal Data Protection Law alongside their service guarantees.",
        ],
      },
    ],
    related: ["average-speed-of-answer-asa", "first-response-time-frt", "workforce-management-wfm"],
  },
  {
    slug: "speech-analytics",
    term: "Speech Analytics",
    short: "Technology that transcribes and analyses voice conversations to surface topics, sentiment, compliance issues, and trends.",
    sections: [
      {
        h: "What is speech analytics?",
        p: [
          "Speech analytics converts recorded or live calls into transcripts and then mines those transcripts for meaning: what topics arose, how the customer's sentiment moved, whether required disclosures were spoken, which competitor names came up, and where the conversation succeeded or failed.",
          "It extends call analytics from metadata, how long, how many, into content, what was actually said, and can score every call rather than the tiny sample a human QA team reviews.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Traditional quality assurance listens to perhaps two percent of calls; speech analytics reads all of them. That completeness catches compliance lapses, coaching needs, and emerging customer issues that sampling almost always misses.",
          "Accuracy in the caller's real dialect is the make-or-break factor: analytics built on transcripts that garble Gulf Arabic produces confident nonsense.",
        ],
        bullets: [
          "One hundred percent call coverage instead of sampled QA",
          "Early warning on complaints, churn signals, and compliance gaps",
          "Transcription accuracy in local dialects determines everything downstream",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare applies speech analytics across every conversation its agents handle, with transcription tuned for Omani and Gulf Arabic as well as the other seven languages it speaks. Dashboards surface topic trends, sentiment shifts, and outcome rates without anyone re-listening to audio.",
          "Because voice recordings are sensitive personal data under Oman's Personal Data Protection Law, all transcription and analysis happens on VoxCare's in-country infrastructure with access controls and retention policies you configure.",
        ],
      },
    ],
    related: ["call-analytics", "natural-language-processing-nlp", "gdpr"],
  },
  {
    slug: "workforce-engagement-management-wem",
    term: "Workforce Engagement Management (WEM)",
    short: "The discipline of keeping contact centre staff motivated, developed, and supported, extending WFM beyond scheduling.",
    sections: [
      {
        h: "What is WEM?",
        p: [
          "Workforce Engagement Management broadens workforce management from pure scheduling into the human side of contact centre work: quality management and coaching, performance feedback, recognition, skill development, flexible scheduling, and tools that reduce day-to-day friction for agents.",
          "The premise is simple: engaged agents serve customers better and stay longer, so investing in the agent experience is investing in the customer experience.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Contact centre attrition is driven less by pay than by the texture of the work: monotony, rigid schedules, and feeling like a cog. WEM addresses those causes directly, and centres that practise it consistently report lower turnover and higher quality scores.",
          "Engagement also shows up in the customer's ear. Callers can hear the difference between an agent who is present and one who is counting the minutes.",
        ],
        bullets: [
          "Tackles the root causes of burnout and attrition",
          "Links coaching and quality feedback to real conversation data",
          "Agent experience and customer experience rise and fall together",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare improves the substance of agents' work by absorbing the repetitive call types, leaving humans the varied, judgement-rich conversations that make service work satisfying. Its conversation analytics also give team leads concrete, example-based coaching material from every call rather than a sampled few.",
          "For Omani teams, that means development paths built on meaningful work, a stronger story for attracting and keeping national talent in service careers.",
        ],
      },
    ],
    related: ["workforce-management-wfm", "call-center-agent-turnover", "speech-analytics"],
  },
  {
    slug: "workforce-management-wfm",
    term: "Workforce Management (WFM)",
    short: "The forecasting, scheduling, and real-time adjustment of contact centre staffing to match predicted demand.",
    sections: [
      {
        h: "What is Workforce Management?",
        p: [
          "WFM is the operational discipline of having the right number of suitably skilled people available at the right times. Its cycle runs: forecast contact volumes from history and known events, translate volumes into required staff using handle-time and service-level maths, build schedules that respect labour rules and preferences, then adjust intraday as reality diverges from forecast.",
          "In practice WFM balances three forces that pull against each other: service levels, labour cost, and employee schedule quality.",
        ],
      },
      {
        h: "Why it matters",
        p: [
          "Staffing is the dominant cost of any contact centre, typically well over half of the total budget. Overstaff and money idles; understaff and queues balloon, abandonment rises, and agents burn out covering the gap.",
          "Forecasting is hardest exactly where the stakes are highest: seasonal peaks, marketing launches, Ramadan schedule shifts, and unexpected events all break the historical pattern.",
        ],
        bullets: [
          "Largest single lever on contact centre cost",
          "Forecast errors surface immediately as queues or idle time",
          "Local calendars, including Ramadan and Eid, reshape demand patterns in Oman",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare changes the WFM equation by making a large share of demand elastic: the AI layer absorbs volume spikes instantly, so forecast misses no longer translate directly into abandoned calls. Human staffing can be planned around the smaller, steadier stream of complex calls.",
          "VoxCare's analytics also sharpen the forecast itself, showing exactly which intents drive volume at which hours across Oman's working week, so schedulers plan on evidence rather than averages.",
        ],
      },
    ],
    related: ["workforce-engagement-management-wem", "average-handle-time", "service-level-agreement-sla"],
  },
];
