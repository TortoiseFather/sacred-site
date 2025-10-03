import { assetUrl } from '../lib/assetUrl'

type Example = { title: string; body: string; image?: string }
type ExamplesByStep = Record<string, Record<string, Example>>

export const examplesByStep: ExamplesByStep = {
  '0-preliminary':{
    '0-1':{
      title: '0.1 Route Scoping.',
      body: 'The design of the actual route itself, where is the train going to operate. At the stages of route 0, this could be vague for hypothetical routes, "a system between Oxford and Cambridge" or specific in the case of upgrading a pre-existing route "Passing through signals S23/S24 in Newcastle Upon Tyne."'
    },
    '0-2':{
      title: '0.2 Stakeholder Gathering.',
      body: 'tba'
    },
     d0: {
      title: 'Deliverable D0 – Generic Concept',
      body: `Deliverable D0 is produced by Step 0 and is essentially the abstract idea of the autonomous system.
It captures a high-level concept for a railway system, for example:

• "A fully autonomous version of the S-Bahn Berlin operating at GoA-4."
• "A fully autonomous version of the UK mainline going between Swalwell Junction and Newcastle upon Tyne."

D0 sets the vision SACRED Step 1 will begin to shape into more concrete artefacts.`,
    },
    '0a': {
      title: 'Artefact 0A - Area Report',
      body: `Certain routes will be variable, depending on the quality of signalling or any pre-existing requirement, an area report exists as a `,
    },
    '0b': {
      title: 'Artefact 0B - Funding Allocation',
      body: `Conceptually, funding allocation exists as a restriction. However, within the scope of SACRED, budgetary concerns are only relevant when creating requirements(ref:d1) and assuring the state of the art during Step 6(ref:6-design-assurance)`,
    },

  },
  '1-concept-assurance': {
    '1-1': {
      title: '1.1 SotA Comparison',
      body: `**Purpose.** Establish whether the concept in [D0](ref:d0) is feasible *for this route and context*, and surface constraints/assumptions that will shape requirements and later **Step 6 (AS Design Assurance)**.

**Activities**
- Survey peer systems (metros, mainline pilots), standards (CBTC, ETCS, IEC/EN), supplier capabilities, and operator experience.
- Extract *capabilities & limits* relevant to your environment: signalling type, comms coverage, platform geometry, adhesion/low-adhesion handling, sensing ranges/occlusions, fail-safe behaviours.
- Map findings to scenarios in [D1](ref:d1) (e.g., tunnels, weather regime, peak loads).
- Record a concise **Artefact [A] SotA** (see [A](ref:a)): what exists, what’s proven, and what’s merely plausible.

**Evidence example (E1).** Paris Métro Line 1 (GoA-4) demonstrates driverless operation feasibility in segregated infrastructure. **Implication:** comparable autonomy on open mainline will need additional mitigations (trespass, weather variability, complex interlockings).`
    },
    '1-2': {
      title: '1.2 Mission Statement (MoSCoW)',
      body: `**Purpose.** Transform [D0](ref:d0) into *verifiable requirements* using **MoSCoW**, yielding **[D2](ref:d2)**.

### Must (illustrative)
- Detect large, static objects in the track corridor; infer corridor via track extraction.
- Enumerate environmental risks to seed Step 2 hazard identification.
- Operate over a representative subset of the S-Bahn Berlin typical service.
- Be realisable within the tech envelope evidenced in **[A](ref:a)**.
- Achieve performance comparable to human drivers for scoped tasks.

### Should
- Detect moving objects materially affecting risk.
- Keep Scenario Definition and ODM consistent re *known-knowns/known-unknowns* to enable Criticality Determination (Step 4).
- Operate in typical non-disastrous adverse conditions, day or night.
- Be representable in simulation for Step 6 evaluation.

### Could
- Expand to network-wide and extreme conditions with sufficient data and validation.
- Discover hazards not initially catalogued in Steps 2/3 via observation/analytics.

### Would
- Employ track-side sensing only where onboard sensing is infeasible for the scoped scenario.`
    },

    '1-3': {
      title: '1.3 Top-level Domain Model',
      body: `**Purpose.** Draft a *top-level Operational Domain Model (ODM)* as a **state machine** describing the journey lifecycle.

**Method**
- Identify **states** (e.g., *Idle → Pre-Departure → Departure → Cruise → Approach → Station_Arrival → Passenger_Alighting → Passenger_Boarding → Station_Departure → …*).
- Define **milestones** that trigger transitions (signal cleared, platform edge detected, speed profile change, door interlock closed). See **[E2](ref:e2)** for illustration.
- For each state, note entry/exit conditions and safety-critical variables (signal visibility, speed, train integrity) and monitoring responsibilities.
- Align with scenarios in **[D1](ref:d1)** and boundary conditions from **[C](ref:c)**.

**Output.** A reviewable narrative + schematic (e.g., **[E2](ref:e2)**) that stakeholders validate before Step 2 hazards.`,
      image: assetUrl('Images/trainsm.png'),
    },

    // ───────────────────────── DELIVERABLES / ARTEFACTS (inline panels via ref:…) ─────────────────────────
    d1: {
      title: 'Deliverable D1 – Scenario Definition (Initial)',
      body: `D1 is a specific list of operational scenarios defining exactly the scope of operation.

Examples:

• "When operating between Swalwell and Newcastle, the system is expected to operate during peak hours, regardless of weather, excluding extreme weather which causes a line to close."  
• "This route involves going through tunnels, meaning that the risks associated with tunnels must be considered, including risk of structural damage from tunnels and visual impairment."

D1 is not expected to be absolute and is only as good as the materials given; the rest of SACRED will iterate upon it.
As the Scenario Definition could be given (red) or a variable scoping of the environment (green) it is represented with a green/red gradient.`,
    },
    d2: {
      title: 'Deliverable D2 – MoSCoW Structure',
      body: `Deliverable D2 is the MoSCoW structure, which determines the scope of operation.
It compares the wishes defined within D0 to the state of the art and identifies what is specifically required.

It provides a structured way to capture requirements as Must/Should/Could/Would and is refined in later SACRED steps.
As a standalone document produced by the SACRED methodology, we represent the MoSCoW structure as purple.`,
},
    a: {
      title: 'Artefact A – State of the Art (SotA)',
      body: `Artefact A captures the state of the art as the operating party understands it.

It reflects the level of technology available to them — not necessarily the absolute global state of the art — and is used both to shape requirements in Step 1.1 and later in Step 6 for design assurance.`,
    },
    b: {
      title: 'Artefact B – Initial ODM',
      body: `Artefact B is an Operational Domain Model (ODM) if it is already given.

SACRED Step 2 is about iterating an ODM and generating one if none exists, but if one is provided up front it can be used immediately to shape Deliverable D1.`,
    },
    c: {
      title: 'Artefact C – Initial SOC',
      body: `Artefact C is the initial Safe Operating Context (SOC).

It is given or derived from Deliverable D2 and describes the context in which current railway systems operate, for example:

• Speed limits  
• Signal limits  
• Signal visibility lengths  

It anchors later safety analysis by bounding where the system is expected to operate safely.`,
    },
    d: {
      title: 'Artefact D – Area of Operation',
      body: `Artefact D specifies the area of operation — the specific route(s) the system covers.

For partial autonomy, it also clarifies what is expected to be autonomous and what is not.`,
    },
    e2: {
      title: 'E2 – Example: Top-Level State Machine',
      body: `E2 is an example of a top-level state machine produced in Step 1.3.

It scopes the route as a series of states, with transitions triggered through milestones (e.g., platform edge appears → Station Approach).

It provides a concrete way of representing the operational domain that stakeholders can review before hazard analysis in Step 2.`,
      image: assetUrl('Images/trainsm.png'),
    },
  },
    '2-hazard-identification':{
      '2-1': {
      title: 'tba',
      body: `tba`
    },
    '2-2':{
      title: 'tba',
      body: `tba`
    },
    '2-3':{
      title: 'tba',
      body: `tba`
    },
    '2-4':{
      title: 'tba',
      body: `tba`
    },
    '2-5':{
      title: 'tba',
      body: `tba`
    },
    '2-6':{
      title: 'tba',
      body: `tba`
    },
    e:{
      title: 'tba',
      body: `tba`
    },
    d3:{
      title: 'tba',
      body: `tba`
    },
    d4:{
      title: 'tba',
      body: `tba`
    },
    d5:{
      title: 'tba',
      body: `tba`
    },
    d6:{
      title: 'tba',
      body: `tba`
    },
    d7:{
      title: 'tba',
      body: `tba`
    },
    },
    '6-design-assurance':{
      '6-1': {
      title: 'tba',
      body: `tba`
    }
    }
}

