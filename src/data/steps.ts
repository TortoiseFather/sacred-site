export const __STEPS_MODULE_URL__ = import.meta.url;
console.log('[steps.ts] loaded from:', import.meta.url);
import type { SubHotspot } from '../components/SubDiagram'
export type Step = {
  number: number
  title: string
  slug: string
  summary: string
  diagramSrc?: string         // (used on home if you want)
  subDiagramSrc?: string      // shown at top of step page
  implementationMd: string
  subHotspots?: SubHotspot[]   // <-- use the exported type here
  next?: { slug: string; number: number; title: string }
}

export const steps: Step[] = [
{
number: 0,
title: 'Concept',
slug: '0-preliminary',
summary: 'Scope the route and compile foundational artefacts to judge viability.',
diagramSrc: 'diagrams/step-0.svg',
implementationMd: `**Inputs**: route name, public docs, stakeholder list.\n\n**Do**:\n- Collate signal maps and service patterns.\n- Capture known constraints (timetables, platforms, junctions).\n- Record data gaps + assumptions.\n\n**Outputs**: a route dossier to seed Step 1.`,
},
{
  number: 1,
  title: 'Concept Assurance',
  slug: '1-concept-assurance',
  summary: 'Define purpose, stakeholders, assumptions, and a first-pass ODM with MoSCoW requirements.',
  subDiagramSrc: 'diagrams/step-1.svg',
  subHotspots: [
    // Inputs/deliverables (parallelograms) → link to example pages
    { id: 'd0', label: 'Deliverable D0', kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/d0', x: 1,   y: 181, w: 161, h: 90 },
    { id: 'd2', label: 'Deliverable D2', kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/d2', x: 465, y: 279, w: 120, h: 59 },
    { id: 'd1', label: 'Deliverable D1', kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/d1', x: 900, y: 200, w: 120, h: 59 },
    { id: 'a',  label: 'Artefact A',     kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/a',  x: 476, y: 1,   w: 96,  h: 59 },
    { id: 'b',  label: 'Artefact B',     kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/b',  x: 580, y: 1,   w: 96,  h: 59 },
    { id: 'c',  label: 'Artefact C',     kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/c',  x: 690, y: 1,   w: 96,  h: 59 },
    { id: 'd',  label: 'Artefact D',     kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/d',  x: 793, y: 1,   w: 96,  h: 59 },

    // Sub-steps (rectangles) → inline detailed info (markdown, with cross-links)
    {
      id: '1-1', label: '1.1 SotA comparison', kind: 'info', x: 229, y: 200, w: 111, h: 59,
      content: `**Goal.** Explore current *state of the art* to assess whether the concept in [D0](#/steps/1-concept-assurance/examples/d0) is feasible and to surface gaps/assumptions.

**Activities**
- Survey comparable rail automation deployments (operator reports, standards, academic/industry case studies).
- Distil capabilities and constraints relevant to your route (communication coverage, signalling, platform geometry, adhesion limits, sensing limits).
- Record findings as **Artefact [A] SotA** (see [A](#/steps/1-concept-assurance/examples/a)).

**Why it matters**
- Even if [A] is initially provided, 1.1 validates and contextualises it for your operation and feeds **Step 6 (AS Design Assurance)**.

**Example (E1).** Driverless operation on Paris Métro Line 1 demonstrates feasibility of GoA-4 in certain contexts. This does **not** directly transfer to open mainline conditions but informs risk and requirement baselines.`
    },
    {
      id: '1-2', label: '1.2 Mission Statement Generation', kind: 'info', x: 359, y: 200, w: 120, h: 59,
      content: `**Goal.** Actualise [D0](#/steps/1-concept-assurance/examples/d0) into *requirements* using **MoSCoW** (Must/Should/Could/Would) → becomes **[D2](#/steps/1-concept-assurance/examples/d2)**.

**Must (examples)**
- Detect large, static objects in the track corridor; infer own corridor via track extraction.
- Enumerate environmental risks for Step 2 hazard identification.
- Operate in a representative subset of the S-Bahn Berlin’s typical operation.
- Be theoretically realisable within the tech envelope characterised in **[A](#/steps/1-concept-assurance/examples/a)**.
- Achieve performance comparable to human drivers for the scoped tasks.

**Should**
- Detect moving objects relevant to risk.
- Represent known-knowns and known-unknowns consistently between Scenario Definition and ODM; support Criticality Determination (Step 4).
- Operate in typical non-disastrous adverse conditions (e.g., rain/snow) day or night.
- Be representable in simulation as per Step 6.

**Could**
- Expand to full network and extreme conditions with sufficient data.
- Discover new hazards not present in Steps 2/3 given broader observation.

**Would**
- Employ track-side sensing only when on-vehicle sensing is infeasible for the scoped scenario.`
    },
    {
      id: '1-3', label: '1.3 Top-level Domain Model', kind: 'info', x: 494, y: 200, w: 120, h: 59,
      content: `**Goal.** Draft a *top-level ODM* as a state machine representing the route: e.g., *Idle → Pre-Departure → Departure → Cruise → Station_Arrival → Passenger_Alighting → Passenger_Boarding → Station_Departure → …*

**Method**
- Identify *milestones* that trigger transitions (e.g., platform edge detected, departure signal cleared, speed limit change).
- For each state, record entry/exit conditions and safety-relevant variables (speed, signal aspect visibility, train integrity).
- Align with Scenario Definition in **[D1](#/steps/1-concept-assurance/examples/d1)** and boundary conditions from **[C](#/steps/1-concept-assurance/examples/c)**.
- Produce an illustrative example **[E2](#/steps/1-concept-assurance/examples/e2)** to validate narrative coherence and support stakeholder review.`
    },
  ],
  implementationMd: `Use interviews + document reviews to define stakeholders, assumptions and an initial ODM/SOC sketch. Produce D2 in MoSCoW and record the boundary conditions that shape Step 2 hazards and Step 6 assurance.`,
},


{
 number: 2,
    title: 'Step 2: Hazard Identification',
    slug: '2-hazard-identification',
    summary: 'Map operational features and environmental risks; classify hazards by ego-vehicle vs ecosystem responsibility.',
    subDiagramSrc: 'diagrams/step-2.svg',
    subHotspots: [
      { id: 'ego-analysis', x: 163, y: 288, w: 86, h: 43, label: 'Ego Hazard Analysis',
        content: 'Hazards owned by the ego-vehicle given onboard capabilities and duties.' },
      { id: 'eco-analysis', x: 249, y: 288, w: 86, h: 43, label: 'ECO Hazard Analysis',
        content: 'Hazards managed by signalling/ops/infrastructure; clarifies interfaces and handoffs.' },
    ],
    implementationMd: `**Do**:
- Map mandatory operations (signals, junctions, limits).
- Identify environmental interfaces (overpasses, fencing, trespass vectors).
- Build fault trees (e.g., SPAD: seen/misread/disregarded/system error).

**Outputs**: Hazard register linked to actors/components.`,
},
{
number: 3,
title: 'Step 3: Requirements Capturing & Assurance',
slug: '3-requirements',
summary: 'Validate hazards and derive verifiable requirements that tie back to the ODM and stakeholders.',
diagramSrc: 'diagrams/step-3.svg',
implementationMd: `**Do**:\n- Turn hazards into testable requirements.\n- Trace each to actors and operational contexts.\n- Prepare interview/review plans with practitioners.\n\n**Outputs**: Requirements spec + traceability matrix.`,
},
{
number: 4,
title: 'Step 4: Metrics that Matter',
slug: '4-metrics',
summary: 'Define CSO/SOC/OSM metrics to monitor and control safety, aligned to the operation states.',
diagramSrc: 'diagrams/step-4.svg',
implementationMd: `**Do**:\n- Specify Context of Safe Operation (CSO) variables.\n- Compose Safe Operating Contexts (SOC) from CSO thresholds.\n- Define Operational Support Metrics (OSM) for runtime monitoring.\n\n**Outputs**: Metrics catalogue with thresholds & rationale.`,
},
{
number: 5,
title: 'Step 5: Failure Management',
slug: '5-safety-actualisation',
summary: 'Declare what “failure” means early, design mitigations, and define minimum-risk states and transitions.',
diagramSrc: 'diagrams/step-5.svg',
implementationMd: `**Do**:\n- Enumerate failure modes & detection logic.\n- Define MRS (Minimum-Risk State) triggers & behaviours.\n- Align with ecosystem procedures (signaller comms, station ops).\n\n**Outputs**: Failure-handling playbook & state diagrams.`,
},
{
number: 6,
title: 'Step 6: Autonomous System Design Assurance',
slug: '6-design-assurance',
summary: 'Map technology to gaps surfaced by TRAP; ensure each tech adds assurance without introducing unmanaged risks.',
diagramSrc: 'diagrams/step-6.svg',
implementationMd: `**Do**:\n- Select sensing/comms/control tech to close gaps.\n- Define performance envelopes & validation plans.\n- Extend TRAP to the technologies themselves.\n\n**Outputs**: Tech spec + verification plan.`,
},
{
number: 7,
title: 'Step 7: Safe Operating Context (SOC)',
slug: '7-soc',
summary: 'Integrate metrics, requirements and failure modes into an actionable SOC for deployment and audit.',
diagramSrc: 'diagrams/step-7.svg',
implementationMd: `**Do**:\n- Consolidate metric thresholds into operational guardrails.\n- Define activation/transition rules across contexts.\n- Produce operator‑facing artefacts and audit trails.\n\n**Outputs**: SOC pack ready for trials/deployment.`,
},
]


// simple helpers
export function getStepBySlug(slug: string) {
return steps.find(s => s.slug === slug)
}

