import type { Guideline } from "./types";

export const guidelines: Guideline[] = [
  {
    slug: "oman",
    country: "Oman",
    region: "Middle East",
    summary:
      "Oman regulates automated and AI-assisted calling through its Personal Data Protection Law (Royal Decree 6/2022), telecom regulations administered by the sector regulator, and long-standing cultural norms around courtesy and prayer times. Because VoxCare is built and hosted inside the Sultanate, Omani businesses can deploy AI phone agents while keeping customer data under Omani jurisdiction. This page is general educational guidance, not legal advice; consult qualified Omani counsel before launching a calling campaign.",
    sections: [
      {
        h: "The Personal Data Protection Law (Royal Decree 6/2022)",
        p: [
          "Oman's Personal Data Protection Law was issued by Royal Decree 6/2022 and came into force in February 2023, making Oman one of the Gulf states with a comprehensive, standalone data protection statute. The law is overseen by the Ministry of Transport, Communications and Information Technology (MTCIT), which also issued executive regulations that flesh out how controllers and processors must operate in practice.",
          "The Personal Data Protection Law is consent-centric: as a general rule, personal data may only be processed with the express consent of the data subject, subject to limited exceptions. A recorded phone conversation with an identifiable customer is personal data, and voice recordings can reveal far more than a name and number, so call-handling systems sit squarely within the law's scope.",
          "Certain categories receive heightened protection. Processing sensitive data such as health information, financial data in some contexts, genetic or biometric data, and data revealing ethnic origin or religious beliefs can require a permit from MTCIT before processing begins. Clinics, insurers, and banks using AI phone agents should map their call flows against these categories carefully.",
        ],
        bullets: [
          "In force since February 2023 under Royal Decree 6/2022, with executive regulations from MTCIT.",
          "Express consent is the default legal basis for processing personal data, including voice recordings.",
          "Sensitive-data processing (health, biometric, and similar categories) may require an MTCIT permit.",
          "Data subjects hold rights of access, correction, erasure, and the right to withdraw consent.",
          "Controllers must notify the ministry and affected individuals of qualifying data breaches.",
        ],
      },
      {
        h: "Telecom licensing and disclosure for AI calls",
        p: [
          "Telecommunications in Oman operate under a class and individual licensing regime historically administered by the Telecommunications Regulatory Authority (TRA), whose functions were folded into the broader MTCIT structure as the sector was reorganised. Businesses that place calls at scale should do so through properly licensed operators and services rather than grey routes, both for legal cleanliness and for call-quality reasons.",
          "Omani law does not yet contain a dedicated statute on AI voice disclosure, but the direction of travel internationally and the Personal Data Protection Law's transparency principle point the same way: the person answering the phone should understand who is calling, on whose behalf, and that they are speaking with an automated agent. Deception about the nature of the caller undermines the validity of any consent gathered on the call.",
          "Call recording deserves special attention. Because recordings are personal data under the Personal Data Protection Law, callers should be told near the start of the call that it is being recorded and why, and recordings should be retained only as long as the stated purpose requires.",
        ],
        bullets: [
          "Route traffic through licensed Omani operators; avoid unlicensed international grey routes.",
          "Open every AI call by identifying the business and stating that the caller is an automated assistant.",
          "Announce call recording early and tie retention periods to a documented purpose.",
          "Honour opt-out requests immediately and log them so the same number is not redialled.",
        ],
      },
      {
        h: "Calling hours, culture, and etiquette in Oman",
        p: [
          "There is no published national do-not-call registry in Oman comparable to those in Singapore or the UK, so responsibility for respectful outreach rests with the calling business. Sensible practice is to confine outbound calls to roughly 9am to 8pm local time, to avoid the Friday midday prayer window entirely, and to pull back sharply during Ramadan, when daytime calls are widely considered intrusive and early-evening calls collide with iftar.",
          "Omani business culture places a high value on greetings and unhurried courtesy. An AI agent that launches straight into a pitch will feel abrasive; one that greets the customer properly, ideally in Arabic with an English option, and allows space for a response will perform better and generate fewer complaints. Public holidays, including Eid al-Fitr, Eid al-Adha, and National Day in November, should be treated as no-call days for marketing traffic.",
        ],
        bullets: [
          "Recommended window: roughly 9am to 8pm Gulf Standard Time, weekdays and Saturday.",
          "Avoid Friday prayer hours, daytime hours in Ramadan, and Eid and National Day holidays.",
          "Offer Arabic as the default language with a clear switch to English.",
          "Maintain your own suppression list in the absence of a national do-not-call registry.",
        ],
      },
      {
        h: "Why VoxCare's in-Oman hosting matters",
        p: [
          "The Personal Data Protection Law and its executive regulations impose conditions on transferring personal data outside the Sultanate, and many Omani organisations, particularly in government-adjacent, financial, and health sectors, prefer or are required to keep customer data on Omani soil. Because VoxCare's platform, call processing, and storage run in data centres inside Oman, customer voice data does not need to cross borders at all, which removes the hardest compliance question before it is asked.",
          "VoxCare's tooling maps directly onto Personal Data Protection Law obligations: configurable consent capture and logging, automatic AI-agent disclosure at the start of every call, recording announcements, retention schedules you control, per-number suppression lists, and calling-hour guards tuned to Omani prayer times, Ramadan schedules, and public holidays. Compliance settings are defaults, not afterthoughts, so your team can focus on the conversation rather than the paperwork.",
        ],
        bullets: [
          "All call audio, transcripts, and metadata hosted in Oman, avoiding cross-border transfer analysis.",
          "Built-in consent logs and data-subject request workflows aligned with Personal Data Protection Law rights.",
          "Automatic disclosure scripts, recording notices, and Ramadan-aware calling calendars.",
        ],
      },
    ],
  },
  {
    slug: "austria",
    country: "Austria",
    region: "Europe",
    summary:
      "Austria applies the EU GDPR alongside its own Telecommunications Act, which makes unsolicited marketing calls without prior consent an administrative offence. AI callers must be transparent about their automated nature and handle voice data under strict GDPR rules. This is general guidance for education only, not legal advice.",
    sections: [
      {
        h: "Data protection framework",
        p: [
          "Austria enforces the GDPR through its national Datenschutzgesetz, with the Datenschutzbehoerde as supervisory authority. Voice recordings of identifiable individuals are personal data, and processing them requires a lawful basis, a clear purpose, and defined retention limits.",
          "Austria is notable for an active data protection authority and a litigious privacy community, so sloppy consent records or vague privacy notices carry real enforcement risk.",
        ],
      },
      {
        h: "Consent and disclosure for automated calls",
        p: [
          "Under section 174 of the Austrian Telecommunications Act 2021, marketing calls, and automated calling machines in particular, require the recipient's prior consent. Cold-calling consumers without opt-in consent is prohibited and fined as an administrative offence.",
          "An AI agent should state at the outset that it is an automated system, name the business it represents, and explain how the recipient's number was obtained if asked. Consent gathered through deception is invalid.",
        ],
        bullets: [
          "Prior opt-in consent is required for marketing calls to consumers.",
          "Automated dialling systems face explicit statutory restrictions.",
          "Caller ID must not be suppressed on marketing calls.",
        ],
      },
      {
        h: "Calling hours and etiquette",
        p: [
          "There is no single statutory calling-hours clause, but Austrian practice treats calls outside roughly 8am to 8pm on weekdays, and any Sunday or public-holiday calls, as unreasonable. Austrians value formality; agents should use polite forms of address and get to the point efficiently.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare enforces opt-in-only campaign lists, plays a configurable automated-agent disclosure in German or English, logs consent evidence for each number, and blocks dialling outside your configured Austrian calling window and holiday calendar.",
        ],
      },
    ],
  },
  {
    slug: "brazil",
    country: "Brazil",
    region: "Latin America",
    summary:
      "Brazil combines the LGPD data protection law with telemarketing-specific rules, including the mandatory 0303 prefix for telemarketing calls and the national Nao Me Perturbe do-not-call platform. AI callers must respect both layers. This summary is educational guidance only and is not legal advice.",
    sections: [
      {
        h: "Data protection: the LGPD",
        p: [
          "The Lei Geral de Protecao de Dados (LGPD), in force since 2020, is Brazil's comprehensive data protection law, supervised by the ANPD. It recognises several legal bases including consent and legitimate interest, but call recordings and phone numbers are personal data in every case.",
          "Controllers must honour data-subject rights such as access, deletion, and revocation of consent, and must be able to demonstrate the legal basis for each processing activity.",
        ],
      },
      {
        h: "Telemarketing rules and disclosure",
        p: [
          "Anatel, the telecom regulator, requires active telemarketing calls to be made from numbers with the 0303 prefix so recipients can identify marketing traffic before answering. Anatel has also taken aggressive action against abusive short-duration robocalls, blocking operators that generate mass nuisance traffic.",
          "An AI voice agent should identify the company, state its automated nature, and offer an immediate opt-out. Brazilians file complaints readily through consumer channels such as Procon, so transparency is also reputational protection.",
        ],
        bullets: [
          "Use the 0303 prefix for active telemarketing calls.",
          "Register against and honour the Nao Me Perturbe do-not-call list, which covers telecoms and several other sectors.",
          "Avoid short-duration mass dialling patterns that trigger Anatel blocking.",
        ],
      },
      {
        h: "Calling hours and norms",
        p: [
          "State-level Procon rules commonly restrict telemarketing to business hours, typically weekdays roughly 9am to 9pm and Saturday mornings, with Sundays and holidays off-limits. Warm, personable openings work well culturally, but calls should still respect the recipient's time.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare supports prefix-aware outbound numbering, suppression-list synchronisation for do-not-call registries, LGPD-aligned consent and deletion workflows, and per-state calling-hour windows for Brazilian campaigns.",
        ],
      },
    ],
  },
  {
    slug: "denmark",
    country: "Denmark",
    region: "Europe",
    summary:
      "Denmark is among the strictest countries in Europe for phone marketing: the Consumer Contracts Act bans unsolicited sales calls to consumers outside a few narrow exceptions, and the GDPR governs all voice data. Treat outbound consumer calling in Denmark as opt-in only. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection framework",
        p: [
          "Denmark applies the GDPR supplemented by the Danish Data Protection Act, with Datatilsynet as the supervisory authority. Recording and analysing calls requires a lawful basis, transparent notice, and disciplined retention, and automated processing of voice data must be described plainly in privacy notices.",
        ],
      },
      {
        h: "The near-total ban on cold calls",
        p: [
          "Under the Danish Consumer Contracts Act, businesses may not call consumers for sales purposes without a prior request, except in a handful of sectors such as newspaper subscriptions and insurance, and even those exceptions are narrowly construed. This makes Denmark effectively an opt-in market for consumer telemarketing.",
          "Business-to-business calling is treated more leniently, but the CPR-register also lets individuals mark themselves against direct marketing, and those markers must be checked and respected.",
        ],
        bullets: [
          "Consumer cold calling is prohibited by default, not merely restricted.",
          "Check the CPR Robinson list before any permitted campaign.",
          "AI agents should disclose their automated nature and the business identity immediately.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "For calls that are lawful, Danish norms favour weekday daytime contact, roughly 9am to 8pm, never Sundays or holidays. Danish communication style is direct and informal; long scripted preambles are counterproductive.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare lets you restrict Danish campaigns to documented opt-in contacts, attaches consent evidence to every dial attempt, applies Robinson-list suppression, and enforces conservative calling windows by default.",
        ],
      },
    ],
  },
  {
    slug: "egypt",
    country: "Egypt",
    region: "Middle East",
    summary:
      "Egypt's Personal Data Protection Law No. 151 of 2020 requires consent for processing personal data and specific permission for electronic direct marketing, with a licensing regime overseen by a dedicated data protection centre. Cultural norms around prayer times and Ramadan shape acceptable calling windows. This overview is educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: Law No. 151 of 2020",
        p: [
          "Egypt's Personal Data Protection Law establishes consent as the primary basis for processing personal data and creates the Personal Data Protection Centre as regulator, with licensing and permit requirements for controllers and processors. Executive regulations were long-awaited, so businesses should verify the current implementation status with counsel before relying on specifics.",
          "The law addresses electronic marketing directly: marketing communications require the recipient's consent, sender identification, and a clear opt-out mechanism.",
        ],
      },
      {
        h: "Disclosure and consent for AI calls",
        p: [
          "AI voice agents calling Egyptian numbers should identify the business, disclose that the call is automated, and state the marketing purpose up front, since the Personal Data Protection Law's marketing provisions hinge on informed consent. Cross-border transfer of Egyptians' personal data generally requires a permit and an adequate level of protection at the destination.",
        ],
        bullets: [
          "Obtain and log consent before marketing calls.",
          "Identify the sender and provide a working opt-out on every call.",
          "Treat call recordings as regulated personal data with permit-aware transfer rules.",
        ],
      },
      {
        h: "Calling hours and cultural norms",
        p: [
          "Egypt has no public do-not-call registry, so self-managed suppression lists are essential. Avoid Friday prayers, adjust drastically for Ramadan daytime and iftar, and keep calls within roughly 10am to 9pm; evenings run late culturally, but marketing calls late at night are still resented. Arabic-first conversations with courteous greetings perform best.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare provides Arabic-native voice agents, consent capture and logs, automatic disclosure lines, Ramadan-aware scheduling, and suppression lists, with data residency options that simplify transfer analysis for Gulf and Egyptian deployments.",
        ],
      },
    ],
  },
  {
    slug: "germany",
    country: "Germany",
    region: "Europe",
    summary:
      "Germany is one of Europe's toughest telemarketing environments: the Act Against Unfair Competition requires express prior consent for consumer marketing calls, automated calling machines require consent under the Telecommunications Act, and fines reach 300,000 euros per violation. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection framework",
        p: [
          "The GDPR applies together with the Federal Data Protection Act (BDSG), enforced by federal and state authorities. Call recording is particularly sensitive: recording a telephone conversation without the consent of participants can violate section 201 of the Criminal Code, so two-sided notice and consent for recording is standard practice.",
        ],
      },
      {
        h: "Consent and disclosure",
        p: [
          "Section 7 of the UWG (Act Against Unfair Competition) prohibits marketing calls to consumers without their prior express consent, and to businesses without at least presumed consent. The Bundesnetzagentur actively fines violators and also enforces the caller-ID rules; suppressing the calling number on marketing calls is itself unlawful.",
          "Automated calling systems face an additional explicit consent requirement, so an AI dialler needs documented opt-in that covers automated calls specifically. The agent should disclose its automated nature and the advertiser's identity at the start of the call.",
        ],
        bullets: [
          "Express opt-in before any consumer marketing call; keep dated consent records.",
          "Never suppress caller ID on advertising calls.",
          "Fines of up to 300,000 euros per unlawful call campaign are available to the regulator.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Courts have treated calls outside normal hours as harassment; a safe window is weekdays 9am to 8pm and Saturdays with caution, never Sundays or public holidays. German business culture expects formal address (Sie), precision, and brevity.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare stores per-number consent evidence including scope for automated calls, forces caller-ID presentation, plays recording notices before capture, and locks German campaigns to compliant hours and opt-in lists.",
        ],
      },
    ],
  },
  {
    slug: "hong-kong",
    country: "Hong Kong",
    region: "Asia-Pacific",
    summary:
      "Hong Kong's Personal Data (Privacy) Ordinance regulates person-to-person direct marketing that uses personal data, while the Unsolicited Electronic Messages Ordinance covers pre-recorded calls and provides a do-not-call register for them. Live and automated calls therefore sit under different regimes. This is educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: the PDPO",
        p: [
          "The Personal Data (Privacy) Ordinance (PDPO), overseen by the Privacy Commissioner for Personal Data, includes a dedicated direct-marketing part: before using a person's data for marketing, you must notify them of the intended use and the kinds of data involved and receive their indication of no objection. Breaching these provisions, or ignoring an opt-out, is a criminal offence.",
        ],
      },
      {
        h: "Automated calls and the UEMO",
        p: [
          "The Unsolicited Electronic Messages Ordinance (UEMO) regulates commercial electronic messages, including pre-recorded voice and video calls, and backs three do-not-call registers administered by the Communications Authority (OFCA). Numbers on the relevant register must not receive pre-recorded commercial calls without consent.",
          "Person-to-person live calls are outside the UEMO registers, but an AI voice agent conducting a synthetic conversation is prudently treated like a pre-recorded call: disclose the automated nature, identify the business, and honour both UEMO registrations and PDPO opt-outs.",
        ],
        bullets: [
          "Screen pre-recorded and AI call campaigns against the OFCA do-not-call registers.",
          "Provide sender identification and a functional unsubscribe route.",
          "Honour PDPO direct-marketing opt-outs permanently; violations are criminal.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Reasonable calling hours in Hong Kong are roughly 9am to 9pm; avoid public holidays and Lunar New Year. Bilingual Cantonese and English handling is expected, and efficient, courteous calls suit the fast-paced business culture.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare manages register screening, opt-out ledgers that satisfy PDPO record-keeping, automated-agent disclosure lines in Cantonese and English, and calling-hour policies tuned per campaign.",
        ],
      },
    ],
  },
  {
    slug: "ireland",
    country: "Ireland",
    region: "Europe",
    summary:
      "Ireland applies the GDPR and the ePrivacy Regulations 2011, under which automated calling machines require prior consent and live marketing calls must respect opt-out preferences recorded in the National Directory Database. The Data Protection Commission is one of Europe's most prominent regulators. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection framework",
        p: [
          "Ireland enforces the GDPR through the Data Protection Act 2018 under the Data Protection Commission (DPC). Voice recordings and call metadata are personal data; controllers need a lawful basis, transparent notices, and retention discipline, and the DPC has shown willingness to prosecute unsolicited-marketing offences.",
        ],
      },
      {
        h: "Consent and disclosure",
        p: [
          "The ePrivacy Regulations (S.I. 336/2011) draw a sharp line: fully automated calls, meaning calls made by automated systems that play messages without live human interaction, require the subscriber's prior consent. Live marketing calls are permitted unless the number is opted out in the National Directory Database or the person has objected directly.",
          "An AI conversational agent is safest treated under the automated-call rule: obtain prior consent, open with the business identity and an automated-agent disclosure, and record the consent trail.",
        ],
        bullets: [
          "Prior opt-in consent for automated calls; NDD opt-out screening for live calls.",
          "Marketing offences under the ePrivacy Regulations are prosecutable per call.",
          "Present a valid caller ID and honour objections immediately.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Typical acceptable hours are weekdays 9am to 8pm; Sunday calling is poorly received. Irish conversational style rewards warmth and a little small talk, but the agent should be upfront about purpose.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare screens against opt-out data, maintains consent records for automated-call campaigns, plays configurable disclosures, and confines dialling to your Irish calling windows.",
        ],
      },
    ],
  },
  {
    slug: "japan",
    country: "Japan",
    region: "Asia-Pacific",
    summary:
      "Japan governs marketing calls mainly through the Act on Specified Commercial Transactions, which mandates clear identification and bans re-solicitation of people who refuse, alongside the APPI for personal data. There is no national do-not-call registry, so refusal tracking is the operative discipline. This is educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: the APPI",
        p: [
          "The Act on the Protection of Personal Information (APPI), supervised by the Personal Information Protection Commission, governs the use of phone numbers and call recordings. Purposes of use must be specified and published, third-party provision generally requires consent, and cross-border transfers carry notification and consent conditions.",
        ],
      },
      {
        h: "Telemarketing rules and disclosure",
        p: [
          "The Act on Specified Commercial Transactions requires telemarketing sellers to state, at the start of the call, the business name, the caller, the products, and the fact that the call is a solicitation. Critically, once a consumer indicates they do not wish to conclude a contract, re-soliciting them is prohibited.",
          "For AI agents, this translates to an immediate, unambiguous opening disclosure and rigorous refusal logging so a number that said no is never called again for the same offer.",
        ],
        bullets: [
          "Identify seller, purpose, and solicitation status at the top of the call.",
          "Re-solicitation after refusal is unlawful; keep permanent refusal records.",
          "No national do-not-call registry exists, so internal suppression lists carry the load.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Reasonable hours are roughly 9am to 8pm; avoid the New Year holidays and Obon in mid-August. Japanese etiquette expects formal politeness levels (keigo), apologies for the intrusion, and a graceful close; abrupt or pushy scripts damage the brand disproportionately.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare supports Japanese-language agents with keigo-appropriate scripting, mandatory opening disclosures, permanent refusal suppression, and holiday-aware scheduling for Japanese campaigns.",
        ],
      },
    ],
  },
  {
    slug: "malaysia",
    country: "Malaysia",
    region: "Asia-Pacific",
    summary:
      "Malaysia's Personal Data Protection Act 2010, significantly amended in 2024, gives individuals the right to stop direct-marketing processing, and the communications regulator polices scam and nuisance calls aggressively. Multicultural calendar awareness matters as much as law. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: the PDPA",
        p: [
          "The Personal Data Protection Act 2010 applies to personal data processed in commercial transactions, overseen by the Personal Data Protection Commissioner. The 2024 amendments added breach notification duties, data protection officer requirements, and heavier penalties, signalling a stricter enforcement era.",
          "Section 43 gives data subjects the right to require a data user to stop processing their data for direct marketing; such notices must be honoured and retained.",
        ],
      },
      {
        h: "Consent and disclosure",
        p: [
          "Consent is the baseline for processing under the PDPA, and marketing calls should rest on documented consent or a clearly defensible existing-customer relationship. AI callers should disclose their automated nature and the company identity; with widespread phone-scam anxiety in Malaysia, an undisclosed synthetic voice invites complaints and blocking by carriers under MCMC anti-scam initiatives.",
        ],
        bullets: [
          "Honour section 43 direct-marketing cessation notices permanently.",
          "Disclose the business and the automated nature of the call at the start.",
          "Expect carrier-level filtering of suspicious call patterns under MCMC programmes.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Keep calls within roughly 9am to 9pm, avoid Friday prayer hours for Muslim customers, and respect Ramadan rhythms plus the festive seasons of Hari Raya, Chinese New Year, and Deepavali. Offering Bahasa Malaysia, English, and Chinese options reflects the customer base.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare provides multilingual agents, consent and cessation-notice ledgers, prayer-time and festival calling calendars, and pacing controls that keep campaigns clear of nuisance-call thresholds.",
        ],
      },
    ],
  },
  {
    slug: "philippines",
    country: "Philippines",
    region: "Asia-Pacific",
    summary:
      "The Philippines regulates voice outreach through the Data Privacy Act of 2012, enforced by an active National Privacy Commission that has issued circulars against unfair unsolicited marketing, with the SIM Registration Act reshaping the calling landscape. Consent and transparency are the anchors. This overview is educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: the Data Privacy Act",
        p: [
          "Republic Act 10173, the Data Privacy Act of 2012, requires a lawful basis such as consent for processing personal information, with the National Privacy Commission (NPC) as regulator. The NPC has publicly targeted unsolicited marketing texts and calls, and its guidance treats marketing outreach without a proper basis as an unfair processing practice.",
          "Call recordings are personal data, and the country's anti-wiretapping statute makes surreptitious recording especially hazardous, so explicit recording notices are essential.",
        ],
      },
      {
        h: "Consent and disclosure",
        p: [
          "Marketing calls should rest on freely given, informed, recorded consent, and the caller must identify the business and the purpose. An AI agent should say it is automated; given the volume of scam calls Filipinos receive, credibility depends on immediate, verifiable identification.",
        ],
        bullets: [
          "Obtain and document consent before marketing calls; honour withdrawal instantly.",
          "Announce call recording plainly to stay clear of wiretapping liability.",
          "Expect scrutiny from an assertive NPC with complaint-driven enforcement.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Sensible hours run roughly 9am to 8pm; avoid Holy Week, All Saints' Day, and the long Christmas season for promotional traffic. Warm, respectful conversation using po and opo courtesy particles in Filipino, with easy English switching, matches local expectations.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare captures consent artifacts per contact, plays recording and automated-agent notices, supports Filipino and English voices, and applies holiday-aware calling calendars for Philippine campaigns.",
        ],
      },
    ],
  },
  {
    slug: "qatar",
    country: "Qatar",
    region: "Middle East",
    summary:
      "Qatar was the first Gulf state with a standalone data protection law, Law No. 13 of 2016, which requires consent-based processing and gives regulators authority over direct marketing, while the Communications Regulatory Authority oversees telecom conduct. Prayer times and Ramadan shape acceptable calling practice. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: Law No. 13 of 2016",
        p: [
          "Qatar's Personal Data Privacy Protection Law (PDPPL) requires that personal data be processed transparently, fairly, and generally with consent, with the National Cyber Governance and Assurance Affairs function under the NCSA acting as regulator and guidance issuer. Direct marketing provisions require the sender's identity to be clear and an opt-out to be available.",
          "Separate rules apply within the Qatar Financial Centre, which runs its own data protection regime for QFC-registered firms, so entity registration determines which framework governs.",
        ],
      },
      {
        h: "Consent and disclosure for AI calls",
        p: [
          "Electronic direct marketing requires prior consent under the PDPPL, and each communication must identify the originator and offer a means to object. An AI agent should add an explicit automated-caller disclosure; regulator guidance stresses transparency about processing methods.",
        ],
        bullets: [
          "Prior consent before electronic marketing communications.",
          "Clear originator identity and a working opt-out on every call.",
          "Check whether PDPPL or the QFC regime applies to your entity.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Keep calls between roughly 9am and 8pm, avoid Friday prayers, and restructure schedules around Ramadan and the Eids. Arabic-first greetings, patience, and courtesy are expected; Qatar has no public do-not-call registry, so private suppression lists are the norm.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare offers Gulf Arabic voices, consent logging, automatic identification and opt-out handling, prayer-time-aware scheduling, and regional data residency that eases Gulf transfer questions.",
        ],
      },
    ],
  },
  {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    region: "Middle East",
    summary:
      "Saudi Arabia's Personal Data Protection Law, enforced from September 2024 after a grace period, is one of the region's most demanding regimes, requiring consent for marketing and imposing conditions on cross-border transfers, with SDAIA as regulator and CST governing telecom conduct. This summary is educational guidance only, not legal advice.",
    sections: [
      {
        h: "Data protection: the Saudi Personal Data Protection Law",
        p: [
          "The Saudi Personal Data Protection Law, issued by Royal Decree M/19 of 2021 and amended in 2023, became fully enforceable in September 2024 under the Saudi Data and AI Authority (SDAIA). It requires a legal basis for processing, registration obligations for some controllers, and breach notification, with meaningful administrative fines and even criminal exposure for sensitive-data violations.",
          "Cross-border transfers are permitted only under specified conditions such as adequacy, appropriate safeguards, or specific exceptions, which makes in-region hosting attractive for voice data.",
        ],
      },
      {
        h: "Consent and disclosure for AI calls",
        p: [
          "The Personal Data Protection Law and its implementing regulations require consent for using personal data in direct marketing, along with a clear mechanism to opt out. The Communications, Space and Technology Commission (CST) additionally polices spam and nuisance communications at the network level.",
          "AI callers should identify the business, disclose the automated nature of the call, and honour opt-outs across all channels. SDAIA has also published AI ethics guidance emphasising transparency of automated systems.",
        ],
        bullets: [
          "Consent before marketing communications, with easy withdrawal.",
          "Document processing purposes and retention in Arabic-capable records.",
          "Plan transfers carefully; default to in-region processing where possible.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Respect the five daily prayer pauses, avoid Friday midday entirely, and invert schedules during Ramadan when evenings become active hours. A window of roughly 9am to 9pm outside prayer times suits normal periods, and formal Arabic greetings set the right tone.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare pairs Arabic-native agents with prayer-time-aware dialling, consent and opt-out ledgers mapped to Personal Data Protection Law duties, disclosure scripts, and Gulf data residency that simplifies Saudi transfer analysis.",
        ],
      },
    ],
  },
  {
    slug: "singapore",
    country: "Singapore",
    region: "Asia-Pacific",
    summary:
      "Singapore's PDPA created one of the world's clearest telemarketing regimes: businesses must check the Do Not Call Registry before calling Singapore numbers, and breaches attract substantial financial penalties from the PDPC. AI callers fit neatly into this framework if they disclose and screen properly. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: the PDPA",
        p: [
          "The Personal Data Protection Act 2012, administered by the Personal Data Protection Commission (PDPC), governs collection, use, and disclosure of personal data on a consent-plus-reasonableness model, supplemented by deemed consent and legitimate interests provisions added in 2020 amendments. Voice recordings are personal data and must be covered by notification and purpose limitation.",
        ],
      },
      {
        h: "The Do Not Call Registry",
        p: [
          "The PDPA's Do Not Call provisions require checking Singapore telephone numbers against the DNC Registry within a prescribed validity window before sending marketing messages or making marketing calls, unless the user has given clear and unambiguous consent. Senders must identify themselves, and caller ID must not be concealed.",
          "The PDPC enforces actively, and financial penalties for DNC and data breaches can reach significant sums, so registry hygiene is not optional.",
        ],
        bullets: [
          "Screen against the DNC Registry before every marketing campaign, within result validity periods.",
          "Clear and unambiguous consent overrides registry listing but must be provable.",
          "Always present calling-line identity and sender identification.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Reasonable calling hours are roughly 9am to 9pm; avoid Chinese New Year, Hari Raya, Deepavali, and Christmas. Singaporean customers value efficiency and precision; multilingual capability across English, Mandarin, Malay, and Tamil is a mark of quality.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare automates DNC screening with validity tracking, stores consent evidence, enforces caller-ID presentation and disclosure lines, and schedules within Singapore-appropriate hours.",
        ],
      },
    ],
  },
  {
    slug: "sri-lanka",
    country: "Sri Lanka",
    region: "Asia-Pacific",
    summary:
      "Sri Lanka's Personal Data Protection Act No. 9 of 2022, South Asia's first comprehensive data protection law, phases in obligations under a new Data Protection Authority and includes explicit rules for direct marketing and solely automated decisions. Calling etiquette spans multiple languages and religious calendars. This overview is educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: the PDPA 2022",
        p: [
          "The Personal Data Protection Act No. 9 of 2022 established the Data Protection Authority of Sri Lanka and introduced GDPR-influenced duties: lawful bases including consent, data-subject rights, breach handling, and controller accountability, with provisions brought into force in stages from 2023 onward.",
          "The Act specifically addresses direct marketing, requiring that individuals can object, and gives data subjects rights around decisions made solely by automated processing, which is directly relevant to AI call systems.",
        ],
      },
      {
        h: "Consent and disclosure",
        p: [
          "Marketing calls should rest on consent or another defensible basis, with the business identified and objections honoured permanently. An AI agent should disclose its automated nature; the Act's automated-processing rights make transparency about machine handling a statutory theme rather than mere courtesy.",
        ],
        bullets: [
          "Log consent and objection events per number; there is no national do-not-call registry.",
          "Disclose business identity and automated nature at call start.",
          "Watch the phased commencement of the Act and Authority guidance for new duties.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Suitable hours are roughly 9am to 8pm; avoid Poya (full moon) days, which are monthly public holidays, plus Vesak and the April Sinhala and Tamil New Year period. Sinhala, Tamil, and English coverage respects the trilingual reality of the market.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare offers multilingual agents, objection and consent ledgers, Poya-aware holiday calendars, and disclosure defaults aligned with the PDPA's transparency expectations.",
        ],
      },
    ],
  },
  {
    slug: "thailand",
    country: "Thailand",
    region: "Asia-Pacific",
    summary:
      "Thailand's PDPA, fully effective since June 2022, is a GDPR-style law with criminal as well as administrative penalties, and regulators have pushed telemarketing toward explicit consent while the NBTC works to curb scam-call traffic. Buddhist holidays and a courtesy-centred culture shape etiquette. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection: the Thai PDPA",
        p: [
          "The Personal Data Protection Act B.E. 2562 (2019), enforced from June 2022 under the Personal Data Protection Committee, requires a lawful basis for processing, with consent as the practical default for marketing uses. Uniquely in the region, certain violations carry criminal penalties alongside administrative fines.",
          "Phone numbers, call recordings, and voiceprints are personal data; using them for telemarketing without a valid basis exposes the caller to complaints that the PDPC has shown willingness to pursue.",
        ],
      },
      {
        h: "Consent and disclosure",
        p: [
          "Telemarketing to Thai consumers should proceed on documented, specific consent, with the caller identifying the business and purpose immediately. Given Thailand's severe scam-call problem and NBTC countermeasures including number-blocking and labelling, an undisclosed AI voice risks being flagged as fraudulent traffic.",
        ],
        bullets: [
          "Collect specific, informed consent before marketing calls and honour withdrawal.",
          "Identify the business and disclose the automated nature at call start.",
          "Keep call patterns clean to avoid NBTC anti-scam filtering.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Call between roughly 9am and 8pm, avoiding Songkran in April, Buddhist holy days, and royal commemorations. Thai interactions prize gentleness and face-saving politeness; agents should open with the polite particles khrap or kha and never pressure the customer.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare provides Thai-language agents tuned for polite register, consent ledgers, disclosure defaults, holiday-aware scheduling, and pacing that stays clear of anti-scam thresholds.",
        ],
      },
    ],
  },
  {
    slug: "united-arab-emirates",
    country: "United Arab Emirates",
    region: "Middle East",
    summary:
      "The UAE combines a federal data protection law (Federal Decree-Law No. 45 of 2021) with hard-edged telemarketing regulations introduced in 2024 that impose licensing, calling-hour limits of 9am to 6pm, and steep fines, plus separate DIFC and ADGM regimes in the financial free zones. This overview is educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection framework",
        p: [
          "Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data establishes consent-centred processing with the UAE Data Office as regulator, while DIFC Law No. 5 of 2020 and the ADGM Data Protection Regulations govern entities in those free zones. Voice recordings are personal data under all three regimes.",
        ],
      },
      {
        h: "Telemarketing rules of 2024",
        p: [
          "Cabinet resolutions on telemarketing effective from 2024 require companies making marketing calls to hold appropriate licences, obtain approval for telemarketing activity, call only from registered local numbers, and respect consumers who refuse: a customer who declines may not be called again for the same product for a set period. Violations attract fines that scale to hundreds of thousands of dirhams plus licence suspension.",
          "Calls are restricted to 9am to 6pm, and callers must not use personal mobile numbers for campaigns. The TDRA supervises the telecom side, and consumers can report violators through dedicated channels.",
        ],
        bullets: [
          "Marketing calls only from licensed businesses on registered numbers, 9am to 6pm.",
          "Do not re-call consumers who refused; maintain refusal registers.",
          "AI agents should disclose automation and identity immediately.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Within the statutory 9am-to-6pm window, still avoid Friday prayers and adjust for Ramadan. Arabic and English bilingual handling is standard, and courteous greetings matter across the Emirates' diverse population.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare hard-enforces the UAE calling window, tracks refusal cooling-off periods, uses registered numbering, logs consent, and provides bilingual agents with automatic disclosure lines.",
        ],
      },
    ],
  },
  {
    slug: "united-kingdom",
    country: "United Kingdom",
    region: "Europe",
    summary:
      "The UK regulates voice marketing through UK GDPR and the Privacy and Electronic Communications Regulations (PECR): automated marketing calls require prior consent, live calls must be screened against the Telephone Preference Service, and the ICO issues six-figure fines for breaches. This is general educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection framework",
        p: [
          "UK GDPR and the Data Protection Act 2018, enforced by the Information Commissioner's Office (ICO), govern voice recordings, transcripts, and phone numbers as personal data. Controllers need a lawful basis, transparent privacy information, and retention limits, and the ICO publishes detailed direct-marketing guidance.",
        ],
      },
      {
        h: "PECR: automated versus live calls",
        p: [
          "Under PECR regulation 19, automated marketing calls, those delivering messages without live human interaction, are permitted only with the subscriber's prior specific consent, a materially higher bar than for live calls. Live marketing calls are allowed unless the number is registered with the Telephone Preference Service (TPS) or Corporate TPS, or the person has objected.",
          "A conversational AI agent should be treated as an automated call requiring prior consent. Callers must also present a valid caller ID, and claims-management and pension cold calls face outright bans.",
        ],
        bullets: [
          "Prior specific consent for automated calls; TPS and CTPS screening for live calls.",
          "ICO fines for unlawful calling campaigns can reach 500,000 pounds under PECR.",
          "Always display a contactable calling-line identity.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Industry practice keeps marketing calls within roughly 9am to 8pm on weekdays and daytime Saturday, avoiding Sundays and bank holidays. British customers respond to brevity, upfront honesty about purpose, and an easy exit from the call.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare stores automated-call consent records, runs TPS and CTPS screening, forces caller-ID presentation, and applies UK-appropriate calling hours and opt-out propagation across campaigns.",
        ],
      },
    ],
  },
  {
    slug: "venezuela",
    country: "Venezuela",
    region: "Latin America",
    summary:
      "Venezuela has no comprehensive data protection statute; privacy rests on constitutional provisions, a landmark 2011 Constitutional Chamber ruling on habeas data, and sector rules from CONATEL and consumer-protection law, so careful consent practice is the safest path. This overview is educational guidance, not legal advice.",
    sections: [
      {
        h: "Data protection landscape",
        p: [
          "Article 60 of the Venezuelan Constitution protects private life, honour, and reputation, and Article 28 provides a habeas data right to access and correct information held about oneself. A 2011 Constitutional Chamber decision articulated data-processing principles including purpose limitation and consent, but there is still no general data protection law or dedicated authority.",
          "In the absence of detailed legislation, following recognised principles, informed consent, purpose limitation, security, and access rights, is both prudent and aligned with the constitutional framework.",
        ],
      },
      {
        h: "Consent and disclosure",
        p: [
          "Marketing calls should rest on documented consent, with the business clearly identified and opt-outs honoured. CONATEL regulates telecommunications operators and messaging conduct, and consumer-protection rules penalise misleading commercial practices, which an undisclosed synthetic caller could implicate.",
        ],
        bullets: [
          "Work from consented contact lists; no national do-not-call registry exists.",
          "Identify the business and disclose the automated nature of the call.",
          "Honour habeas data style requests for access and correction.",
        ],
      },
      {
        h: "Hours and etiquette",
        p: [
          "Reasonable calling hours run roughly 9am to 7pm; power and network conditions make late-evening calls impractical as well as impolite. Venezuelan conversational culture is warm and personal, so a friendly Spanish-language greeting and unhurried tone fit expectations.",
        ],
      },
      {
        h: "How VoxCare helps",
        p: [
          "VoxCare applies consent-first list management, Spanish-language agents, disclosure defaults, opt-out ledgers, and configurable calling windows suited to Venezuelan conditions.",
        ],
      },
    ],
  },
];
