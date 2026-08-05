import type { Integration } from "./types";

export const integrations: Integration[] = [
  {
    slug: "able-cdp",
    name: "Able CDP",
    category: "Marketing",
    short: "Attribute every VoxCare call to the campaign that sparked it, so your Omani marketing spend is measured end to end.",
    sections: [
      {
        h: "What Able CDP does with VoxCare",
        p: [
          "Able CDP stitches the customer journey together across ads, forms, and phone calls. When a VoxCare AI agent answers or places a call, the outcome is attached to the visitor's existing journey in Able CDP, so a booking made in Omani Arabic over the phone is credited to the ad or page that produced it.",
          "That gives marketing teams in Oman a true picture of which channels drive phone conversations, not just clicks.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect Able CDP from the VoxCare integrations panel with an API key. After each call, VoxCare pushes a call-outcome event with the caller's phone number and your chosen tags. Able CDP matches the number to a known profile and forwards conversions to your ad platforms.",
        ],
        bullets: [
          "One-time API key setup, no code required",
          "Call outcomes mapped to your funnel stages",
          "Phone-number identity matching handled by Able CDP",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "VoxCare shares metadata only: phone number, timestamp, call outcome, and tags. Recordings and transcripts never leave VoxCare's infrastructure in Oman, keeping the integration aligned with the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Send call outcomes to Able CDP journeys",
      "Attribute bookings to marketing campaigns",
      "Match callers to known visitor profiles",
      "Forward phone conversions to ad platforms",
      "Tag calls by campaign or funnel stage",
    ],
  },
  {
    slug: "activecampaign",
    name: "ActiveCampaign",
    category: "Marketing",
    short: "Trigger ActiveCampaign automations from AI call results and keep contact records current after every conversation.",
    sections: [
      {
        h: "What ActiveCampaign does with VoxCare",
        p: [
          "ActiveCampaign automations can start the moment a VoxCare call ends. A caller who asked about pricing gets a follow-up sequence in their preferred language; a customer who confirmed an appointment gets a reminder flow; a missed call adds the contact to a callback list.",
          "Contacts created or updated by your AI agents flow into ActiveCampaign with tags describing what happened on the call.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Authorize VoxCare with your ActiveCampaign API URL and key, then map call outcomes to tags, lists, and custom fields. VoxCare updates the contact after each call and can fire a site-tracking event that your automations listen for.",
        ],
        bullets: [
          "Outcome-to-tag mapping you control",
          "Automatic contact creation for new callers",
          "Custom field sync for call summaries",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Only contact details, tags, and short outcome summaries are synced. Full call audio and transcripts stay on VoxCare servers hosted in Oman, with residency controls that satisfy Oman Personal Data Protection Law requirements.",
        ],
      },
    ],
    capabilities: [
      "Start automations from call outcomes",
      "Tag contacts by conversation topic",
      "Create contacts for first-time callers",
      "Sync call summaries to custom fields",
      "Segment audiences by call language",
    ],
  },
  {
    slug: "airtable",
    name: "Airtable",
    category: "Productivity",
    short: "Log every AI call as a structured Airtable record your team can filter, sort, and build views on.",
    sections: [
      {
        h: "What Airtable does with VoxCare",
        p: [
          "Airtable becomes a living call log for your business. Each VoxCare conversation lands as a new record with caller number, language used, intent, outcome, and duration, ready for the views, dashboards, and interfaces your team already builds in Airtable.",
          "VoxCare agents can also read from Airtable mid-call, checking an inventory base or a bookings table before answering a customer in Muscat or Salalah.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect with an Airtable personal access token, pick a base and table, and map VoxCare fields to your columns. Writes happen within seconds of a call ending; lookups run in real time during the conversation.",
        ],
        bullets: [
          "Field mapping with your existing column names",
          "Real-time lookups during live calls",
          "One base per VoxCare agent or a shared table",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "You choose exactly which fields sync. By default only structured metadata is written; recordings and full transcripts remain inside VoxCare's Oman-hosted environment in line with the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Write call records to any base",
      "Look up Airtable data during calls",
      "Map outcomes to your own columns",
      "Filter and report on call activity",
      "Keep separate tables per agent",
    ],
  },
  {
    slug: "aritic",
    name: "Aritic",
    category: "Marketing",
    short: "Feed AI call activity into Aritic PinPoint so lead scores and nurture journeys reflect real phone conversations.",
    sections: [
      {
        h: "What Aritic does with VoxCare",
        p: [
          "Aritic PinPoint scores and nurtures leads across channels, and VoxCare adds the missing one: the phone. Calls answered by your AI agents update lead scores, move contacts between segments, and advance nurture journeys based on what was actually said and decided on the call.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Link your Aritic account with API credentials, then define rules such as raising a score when a caller asks about a product or dropping a contact into a re-engagement segment after a declined offer. VoxCare applies the rules automatically after each call.",
        ],
        bullets: [
          "Score adjustments driven by call intent",
          "Segment moves on call outcomes",
          "Journey triggers without manual data entry",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Aritic receives lead identifiers, scores, and outcome tags only. Voice data and transcripts are stored solely on VoxCare infrastructure in Oman, consistent with Oman Personal Data Protection Law data-residency expectations.",
        ],
      },
    ],
    capabilities: [
      "Update lead scores from call intent",
      "Move contacts between segments",
      "Trigger nurture journeys after calls",
      "Sync outcome tags to lead profiles",
      "Track phone touchpoints in journeys",
    ],
  },
  {
    slug: "asana",
    name: "Asana",
    category: "Productivity",
    short: "Turn call follow-ups into Asana tasks automatically, assigned to the right teammate with full context.",
    sections: [
      {
        h: "What Asana does with VoxCare",
        p: [
          "When a caller needs something a human must handle, such as a refund review, a site visit, or a complex quote, VoxCare creates an Asana task in the right project with a summary of the request, the caller's details, and a due date. Nothing discussed on the phone falls through the cracks.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect Asana with OAuth, choose target projects, and set routing rules, for example billing questions to the finance project and service requests to operations. Tasks include a short call summary written by the AI agent and a link back to the call record in VoxCare.",
        ],
        bullets: [
          "Rule-based routing to projects and assignees",
          "AI-written task descriptions with caller context",
          "Due dates set from promises made on the call",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Tasks carry summaries and contact details, not audio. Recordings stay within VoxCare's Oman data centers, and you can restrict which fields appear in task descriptions to meet your Oman Personal Data Protection Law obligations.",
        ],
      },
    ],
    capabilities: [
      "Create tasks from call requests",
      "Route tasks by topic and team",
      "Attach AI call summaries to tasks",
      "Set due dates from call commitments",
      "Link tasks back to call records",
    ],
  },
  {
    slug: "autoklose",
    name: "Autoklose",
    category: "Sales",
    short: "Sync AI-qualified callers into Autoklose campaigns and pause sequences the moment a prospect picks up the phone.",
    sections: [
      {
        h: "What Autoklose does with VoxCare",
        p: [
          "Autoklose runs your email outreach; VoxCare covers the phone. Prospects your AI agents qualify on calls are added to the right Autoklose campaign, and contacts who speak with an agent are paused or removed from sequences so they never receive an awkward automated email after a live conversation.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect with your Autoklose API key and map call outcomes to campaign actions: add, pause, remove, or switch. VoxCare applies the action within moments of the call ending, keeping outreach and phone activity in step.",
        ],
        bullets: [
          "Add qualified callers to campaigns",
          "Auto-pause sequences after live calls",
          "Outcome-based campaign switching",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Only contact records and outcome flags cross to Autoklose. Conversation content remains on VoxCare's Oman-hosted platform, supporting compliance with the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Enroll qualified leads in campaigns",
      "Pause emails after phone contact",
      "Sync call outcomes to prospects",
      "Switch campaigns by call result",
      "Keep outreach and calls coordinated",
    ],
  },
  {
    slug: "aweber",
    name: "AWeber",
    category: "Marketing",
    short: "Grow AWeber lists from phone conversations and tag subscribers by what they asked your AI agents.",
    sections: [
      {
        h: "What AWeber does with VoxCare",
        p: [
          "Callers who agree to hear from you by email are added to your AWeber lists directly from the conversation, with tags that capture their interest, such as a product line, a branch location, or a service plan. Your newsletters and follow-ups start from real spoken intent, not guesswork.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Authorize AWeber via OAuth and choose which lists VoxCare can write to. During a call, the AI agent confirms consent verbally, collects the email address, and subscribes the caller with the tags your rules assign.",
        ],
        bullets: [
          "Verbal consent captured before any subscription",
          "Interest tags applied automatically",
          "List selection by agent or call type",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "AWeber receives the email address, name, and tags, nothing more. The call itself, including the recorded consent, is retained only on VoxCare servers in Oman in keeping with Oman Personal Data Protection Law requirements.",
        ],
      },
    ],
    capabilities: [
      "Subscribe callers with spoken consent",
      "Tag subscribers by call interest",
      "Route signups to specific lists",
      "Capture email addresses on calls",
      "Trigger welcome emails after calls",
    ],
  },
  {
    slug: "chrome-extension",
    name: "Chrome Extension",
    category: "Productivity",
    short: "See live VoxCare call context and click-to-call from any web page your team already works in.",
    sections: [
      {
        h: "What the Chrome Extension does with VoxCare",
        p: [
          "The VoxCare Chrome Extension puts your AI call platform inside the browser. Phone numbers on any page become click-to-call links handled by VoxCare, and a side panel shows recent calls, live agent activity, and AI summaries without switching tabs.",
          "When a call is escalated from an AI agent to a person, the extension pops the caller's history so your teammate joins the conversation informed.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Install the extension from the Chrome Web Store and sign in with your VoxCare workspace. It detects phone numbers on pages you visit, offers one-click dialing through your VoxCare numbers, and surfaces call notifications in real time.",
        ],
        bullets: [
          "Click-to-call on any web page",
          "Escalation pop with caller history",
          "Workspace sign-in with role-based access",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "The extension is a window into your VoxCare workspace, not a copy of it. All call data it displays is fetched from and stays on VoxCare's Oman-hosted infrastructure, so nothing is stored in the browser beyond your session.",
        ],
      },
    ],
    capabilities: [
      "Click-to-call from any page",
      "Live call activity side panel",
      "Escalation alerts with caller context",
      "AI call summaries in the browser",
      "Workspace sign-in and permissions",
    ],
  },
  {
    slug: "clicksend-sms",
    name: "ClickSend SMS",
    category: "Messaging",
    short: "Send confirmations, reminders, and follow-up texts through ClickSend the moment an AI call wraps up.",
    sections: [
      {
        h: "What ClickSend SMS does with VoxCare",
        p: [
          "A phone call often needs a written follow-up. Through ClickSend, VoxCare sends the caller an SMS right after the conversation: an appointment confirmation, a payment link, directions to your branch, or a summary of what was agreed, in Arabic or English to match the call.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Add your ClickSend credentials, write message templates with variables such as name, time, and location, and attach them to call outcomes. When an outcome fires, VoxCare fills the template and ClickSend delivers the text to Omani and international numbers.",
        ],
        bullets: [
          "Template messages with call variables",
          "Language matched to the conversation",
          "Delivery status visible in VoxCare",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "ClickSend receives only the destination number and the rendered message text. Call recordings and transcripts never pass through the SMS pipeline and remain hosted in Oman under VoxCare's Oman Personal Data Protection Law controls.",
        ],
      },
    ],
    capabilities: [
      "Send SMS after call outcomes",
      "Confirm bookings by text",
      "Deliver payment and info links",
      "Match SMS language to the call",
      "Track delivery status in VoxCare",
    ],
  },
  {
    slug: "clickup",
    name: "ClickUp",
    category: "Productivity",
    short: "Convert customer requests from AI calls into ClickUp tasks with statuses, assignees, and priorities set by rule.",
    sections: [
      {
        h: "What ClickUp does with VoxCare",
        p: [
          "Every actionable request that reaches your AI phone agents can become a ClickUp task: a support ticket in your service space, a lead in your sales list, or an internal follow-up. Priorities and statuses are set from the call, so an urgent complaint arrives flagged as urgent.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect ClickUp with OAuth, pick spaces and lists, and define how call intents map to task templates. VoxCare fills in the caller's details, an AI summary, and custom fields, then assigns the task according to your routing rules.",
        ],
        bullets: [
          "Intent-to-list routing rules",
          "Priority set from call urgency",
          "Custom fields populated automatically",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Tasks contain summaries and structured fields only. The underlying audio and full transcript stay on VoxCare's servers in Oman, and field-level controls let you exclude any personal data your Oman Personal Data Protection Law policy requires.",
        ],
      },
    ],
    capabilities: [
      "Create tasks from call intents",
      "Set priority from call urgency",
      "Auto-assign by routing rules",
      "Fill custom fields from call data",
      "Link tasks to VoxCare call records",
    ],
  },
  {
    slug: "close-integration",
    name: "Close",
    category: "CRM",
    short: "Log AI calls as native Close activities and keep lead statuses moving without manual data entry.",
    sections: [
      {
        h: "What Close does with VoxCare",
        p: [
          "Close is built around calling, and VoxCare slots straight into that rhythm. Conversations handled by your AI agents are logged as call activities on the matching lead, complete with direction, duration, outcome, and an AI-written note, and lead statuses advance based on what happened.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect with a Close API key. VoxCare matches callers to leads by phone number, creates new leads for unknown numbers if you allow it, and writes the activity within seconds of hang-up. Status changes follow the outcome map you configure.",
        ],
        bullets: [
          "Phone-number lead matching",
          "AI call notes on every activity",
          "Outcome-driven status updates",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Close stores the activity metadata and notes you approve; recordings do not leave VoxCare. All voice data is retained in Oman, aligned with the Oman Personal Data Protection Law and your internal residency rules.",
        ],
      },
    ],
    capabilities: [
      "Log calls as Close activities",
      "Match callers to existing leads",
      "Advance lead statuses by outcome",
      "Create leads for new callers",
      "Attach AI notes to activities",
    ],
  },
  {
    slug: "convertkit",
    name: "ConvertKit",
    category: "Marketing",
    short: "Add callers to ConvertKit with tags from the conversation and kick off the right email sequence automatically.",
    sections: [
      {
        h: "What ConvertKit does with VoxCare",
        p: [
          "ConvertKit sequences work best when they start from real intent, and a phone call is intent at its clearest. VoxCare subscribes consenting callers to your ConvertKit account, tags them by what they discussed, and starts the sequence that fits, whether that is onboarding, a product waitlist, or a local event in Muscat.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect with your ConvertKit API secret, map call topics to tags and forms, and let your AI agents collect email addresses with verbal consent. Subscribers appear in ConvertKit moments after the call ends.",
        ],
        bullets: [
          "Consent-first email capture on calls",
          "Topic tags applied at subscription",
          "Sequence selection by call outcome",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "ConvertKit receives the subscriber's email, name, and tags only. The spoken conversation, including recorded consent, stays within VoxCare's Oman-hosted environment per Oman Personal Data Protection Law requirements.",
        ],
      },
    ],
    capabilities: [
      "Subscribe callers to forms",
      "Tag by conversation topic",
      "Start sequences from call outcomes",
      "Capture consent verbally on calls",
      "Sync subscriber updates after calls",
    ],
  },
  {
    slug: "copper",
    name: "Copper",
    category: "CRM",
    short: "Keep Copper records fresh with AI call logs, new leads, and pipeline updates synced after every conversation.",
    sections: [
      {
        h: "What Copper does with VoxCare",
        p: [
          "Copper users live in Google Workspace, and VoxCare keeps their CRM current without leaving it. Calls handled by AI agents appear as activities on people and companies, unknown callers become leads, and opportunities move stages when a call changes the deal.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect with your Copper API key and email. VoxCare matches callers to people by phone number, logs the activity with an AI summary, and applies your pipeline rules, for example moving an opportunity to Negotiation after a pricing call.",
        ],
        bullets: [
          "Activity logging on people and companies",
          "Lead creation for unknown callers",
          "Pipeline stage rules tied to outcomes",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Only structured records and summaries reach Copper. Recordings and transcripts are kept exclusively on VoxCare infrastructure in Oman, supporting your obligations under the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Log AI calls on Copper records",
      "Create leads from new callers",
      "Move opportunities by call result",
      "Sync AI summaries as activity notes",
      "Match callers by phone number",
    ],
  },
  {
    slug: "drip",
    name: "Drip",
    category: "Marketing",
    short: "Send call events into Drip so e-commerce workflows react to what customers say on the phone.",
    sections: [
      {
        h: "What Drip does with VoxCare",
        p: [
          "Drip automates e-commerce marketing on events, and VoxCare supplies a rich new event source: the phone call. An order inquiry, a delivery question, or a product complaint handled by your AI agent becomes a custom event in Drip that your workflows can branch on.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect with your Drip API token and account ID, then choose which call outcomes fire events and which fields ride along. VoxCare identifies the customer by phone or email and records the event on their Drip profile in near real time.",
        ],
        bullets: [
          "Custom events per call outcome",
          "Customer matching by phone or email",
          "Workflow branching on call topics",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Events carry outcome names and the properties you whitelist, never audio or transcripts. Conversation content stays on VoxCare's Oman-hosted platform in line with the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Fire Drip events from calls",
      "Branch workflows on call topics",
      "Match callers to customer profiles",
      "Whitelist the fields that sync",
      "React to complaints and inquiries",
    ],
  },
  {
    slug: "google-calendar",
    name: "Google Calendar",
    category: "Calendar",
    short: "Let AI agents book, reschedule, and cancel appointments directly on your Google Calendar during the call.",
    sections: [
      {
        h: "What Google Calendar does with VoxCare",
        p: [
          "Your AI phone agents become full-time schedulers. During a call, in Omani Arabic or any of eight other languages, the agent checks real availability on your Google Calendar, offers open slots, books the appointment, and handles reschedules and cancellations, all before the caller hangs up.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect Google Calendar with OAuth and choose which calendars each agent may read and write. You set working hours, buffer times, and slot lengths; the agent respects them and adds the caller's details to the event, with invitations sent if you enable them.",
        ],
        bullets: [
          "Live availability checks mid-call",
          "Working hours and buffers enforced",
          "Reschedules and cancellations handled by voice",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Calendar events contain the booking details you configure, nothing else. The voice conversation that produced the booking is stored only in Oman on VoxCare infrastructure, consistent with Oman Personal Data Protection Law residency rules.",
        ],
      },
    ],
    capabilities: [
      "Book appointments during calls",
      "Check live calendar availability",
      "Reschedule and cancel by voice",
      "Enforce hours and buffer rules",
      "Send event invites to callers",
    ],
  },
  {
    slug: "hubspot",
    name: "HubSpot",
    category: "CRM",
    short: "Sync contacts, log calls, and update deals in HubSpot automatically after every AI conversation.",
    sections: [
      {
        h: "What HubSpot does with VoxCare",
        p: [
          "HubSpot becomes the system of record for everything your AI agents handle. Calls are logged on contact timelines with AI summaries, new callers become contacts, deals progress through your pipeline based on outcomes, and tickets open when a customer reports a problem.",
          "Your Omani sales and service teams see the full phone history next to emails and meetings, in the CRM they already use.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Install the VoxCare app from the integrations panel using HubSpot OAuth. Map call outcomes to deal stages, ticket pipelines, and contact properties. Sync is bidirectional for contact data, so agents greet repeat callers by name and know their history.",
        ],
        bullets: [
          "Timeline logging with AI summaries",
          "Deal stage and ticket automation",
          "Bidirectional contact sync for caller context",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "HubSpot receives structured records and summaries you approve, while recordings and transcripts remain on VoxCare's Oman-hosted platform. Property-level controls help you meet Oman Personal Data Protection Law minimization requirements.",
        ],
      },
    ],
    capabilities: [
      "Log calls on contact timelines",
      "Advance deals from call outcomes",
      "Open tickets from reported issues",
      "Create contacts for new callers",
      "Give agents caller history context",
    ],
  },
  {
    slug: "mailchimp",
    name: "Mailchimp",
    category: "Marketing",
    short: "Grow Mailchimp audiences from phone calls and segment them by what customers actually asked about.",
    sections: [
      {
        h: "What Mailchimp does with VoxCare",
        p: [
          "Phone callers are some of your warmest contacts, and Mailchimp helps you keep the conversation going. VoxCare adds consenting callers to your audiences, applies tags and merge fields from the call, and can trigger a customer journey the moment the subscription lands.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect Mailchimp with OAuth and select target audiences. Your AI agent confirms consent on the call, collects the email address, and VoxCare subscribes the contact with tags such as product interest, branch, or preferred language for future campaigns.",
        ],
        bullets: [
          "Audience selection per agent or call type",
          "Tags and merge fields from call data",
          "Journeys triggered on subscription",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Mailchimp holds the subscriber profile only. The call recording, including verbal consent, stays on VoxCare servers in Oman, keeping your marketing stack aligned with the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Add callers to audiences",
      "Segment by call interest tags",
      "Store language preference for campaigns",
      "Trigger journeys after subscription",
      "Capture consent before syncing",
    ],
  },
  {
    slug: "microsoft-outlook",
    name: "Microsoft Outlook",
    category: "Calendar",
    short: "Book meetings on Outlook calendars and send follow-up emails from your own domain after AI calls.",
    sections: [
      {
        h: "What Microsoft Outlook does with VoxCare",
        p: [
          "For teams on Microsoft 365, VoxCare works directly with Outlook. AI agents check calendar availability and book appointments during the call, and follow-up emails, confirmations, summaries, or requested documents go out from your organization's own mailbox rather than a third-party sender.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect through Microsoft 365 with admin-consented OAuth. Choose which mailboxes and calendars VoxCare may use, set scheduling rules, and pick email templates for each call outcome. Bookings and messages are created through Microsoft Graph within seconds of the call.",
        ],
        bullets: [
          "Outlook calendar booking mid-call",
          "Follow-up email from your domain",
          "Admin-scoped Microsoft 365 permissions",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Outlook receives event details and the email content you template, never call audio. Conversations remain stored in Oman on VoxCare infrastructure, supporting Oman Personal Data Protection Law compliance across your Microsoft estate.",
        ],
      },
    ],
    capabilities: [
      "Book Outlook meetings during calls",
      "Send follow-ups from your mailbox",
      "Check availability across calendars",
      "Template emails per call outcome",
      "Scope access with admin consent",
    ],
  },
  {
    slug: "pipedrive-voxcare-integration",
    name: "Pipedrive",
    category: "CRM",
    short: "Create deals, log activities, and move your Pipedrive pipeline forward from every AI-handled call.",
    sections: [
      {
        h: "What Pipedrive does with VoxCare",
        p: [
          "Pipedrive's pipeline stays honest when every phone conversation is captured. VoxCare logs AI calls as activities on persons and deals, creates new deals when a caller shows buying intent, and nudges deals between stages according to the outcome of the conversation.",
          "Salespeople in Oman start their day with a pipeline that already reflects last night's after-hours calls answered by AI.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect Pipedrive with OAuth, map call intents to pipelines and stages, and decide when a call should create a deal versus only log an activity. Caller matching uses phone numbers, and every activity includes an AI summary and a link to the call.",
        ],
        bullets: [
          "Deal creation on buying intent",
          "Stage movement mapped to outcomes",
          "Activities with AI summaries and links",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Pipedrive stores deals, activities, and notes; VoxCare keeps the voice data. Recordings and transcripts stay on Oman-hosted servers, satisfying the residency controls expected under the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Create deals from buying intent",
      "Log calls as Pipedrive activities",
      "Move deals between stages",
      "Match callers to persons",
      "Summarize calls in activity notes",
    ],
  },
  {
    slug: "salesforce-voxcare-integration",
    name: "Salesforce",
    category: "CRM",
    short: "Log AI calls as Salesforce tasks, update leads and cases, and give agents CRM context on every call.",
    sections: [
      {
        h: "What Salesforce does with VoxCare",
        p: [
          "VoxCare treats Salesforce as the enterprise source of truth. Calls are logged as completed tasks against leads, contacts, and accounts; cases open or update when customers report issues; and opportunity fields change when a call moves a deal. Before answering, AI agents can read the caller's Salesforce history to personalize the conversation.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect via Salesforce OAuth with a dedicated integration user and granular object permissions. Field mappings and flow triggers are configured in VoxCare, so your admins keep full control of what writes where, and existing Salesforce automations fire as usual.",
        ],
        bullets: [
          "Task logging on leads, contacts, and accounts",
          "Case creation and updates from calls",
          "Read access for caller personalization",
          "Integration-user permission model",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Salesforce receives structured fields, task subjects, and approved summaries only. All audio and transcripts remain on VoxCare's platform hosted in Oman, and field-level sync controls support Oman Personal Data Protection Law data-minimization policies.",
        ],
      },
    ],
    capabilities: [
      "Log calls as Salesforce tasks",
      "Open and update cases from calls",
      "Update leads and opportunities",
      "Personalize calls with CRM history",
      "Control sync at the field level",
    ],
  },
  {
    slug: "slack",
    name: "Slack",
    category: "Messaging",
    short: "Get real-time Slack alerts for escalations, missed calls, and daily AI call digests in your team channels.",
    sections: [
      {
        h: "What Slack does with VoxCare",
        p: [
          "Slack keeps your team in the loop without opening another dashboard. VoxCare posts to the channels you choose when a call needs a human, when a VIP customer rings, or when a caller reports an urgent issue, and sends a daily digest of call volume, outcomes, and languages handled.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Add the VoxCare app to your Slack workspace, pick channels per alert type, and set the rules, for example escalations to a support channel and new qualified leads to sales. Messages include the AI summary and a button to open the full call in VoxCare.",
        ],
        bullets: [
          "Channel routing per alert type",
          "Escalation alerts with call summaries",
          "Scheduled digests of call activity",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Slack messages contain summaries and metadata, never audio files. Recordings and transcripts stay behind VoxCare's Oman-hosted workspace, which team members open with their own permissions, in line with the Oman Personal Data Protection Law.",
        ],
      },
    ],
    capabilities: [
      "Alert channels on escalations",
      "Notify on missed or VIP calls",
      "Post daily call digests",
      "Route alerts by team and topic",
      "Deep-link to full call records",
    ],
  },
  {
    slug: "zapier",
    name: "Zapier",
    category: "Automation",
    short: "Connect VoxCare call events to thousands of apps with Zaps, no code and no waiting on custom builds.",
    sections: [
      {
        h: "What Zapier does with VoxCare",
        p: [
          "Zapier extends VoxCare to the long tail of tools your business runs on. Call events, such as call completed, appointment booked, lead qualified, or escalation raised, become Zap triggers, and Zapier actions can also start outbound VoxCare calls, for instance dialing a new form lead within a minute of submission.",
        ],
      },
      {
        h: "How it works",
        p: [
          "Connect VoxCare in Zapier with an API key, pick a trigger event, and map the call fields into any downstream app: a spreadsheet, an accounting tool, a WhatsApp platform, or your own webhook. Actions let other apps enqueue calls for your AI agents.",
        ],
        bullets: [
          "Triggers for every major call event",
          "Actions to start outbound AI calls",
          "Field mapping into thousands of apps",
        ],
      },
      {
        h: "Data residency for Oman",
        p: [
          "Zaps carry only the metadata fields you map; recordings and transcripts are never exposed through the Zapier connection. Voice data stays on VoxCare's Oman infrastructure, keeping automations Oman Personal Data Protection Law friendly.",
        ],
      },
    ],
    capabilities: [
      "Trigger Zaps from call events",
      "Start outbound calls from any app",
      "Map call fields into other tools",
      "Automate without writing code",
      "Chain multi-step workflows",
    ],
  },
];
