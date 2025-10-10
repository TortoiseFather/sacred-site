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
summary: 'There is an expectation that Step 0 has been completed prior to the deployment of the SACRED methodology. Step 0 is the collection of basic information regarding the route, it\'s stakeholders and basic characteristics. The purpose of Step 0 is to take these charactersitics and use it to create a requirements document [D0](ref:d0).',
diagramSrc: 'diagrams/step-0.svg',
subHotspots:[
{id: '0-1', label: '0.1 Route Scoping', kind: 'link', navigateTo: '/steps/0-preliminary/examples/0-1',x:0,y:73,w:120,h:60},
{id: '0-2', label: '0.2 Stakeholder Gathering', kind: 'link', navigateTo: '/steps/0-preliminary/examples/0-2',x:170,y:73,w:120,h:60},
{ id: 'd0', label: 'Deliverable D0', kind: 'info', x: 370,   y: 73, w: 120, h: 60 },
{ id: '0b', label: 'Artefact 0B', kind: 'info', x: 252,   y: 139, w: 117, h: 60 },
{ id: '0a', label: 'Artefact 0A', kind: 'info', x: 252,   y: 0, w: 117, h: 60 },
],
implementationMd: `**Inputs**: route name, public docs, stakeholder list.\n\n**Do**:\n- Collate signal maps and service patterns.\n- Capture known constraints (timetables, platforms, junctions).\n- Record data gaps + assumptions.\n\n**Outputs**: a route dossier to seed Step 1.`,
},
{
  number: 1,
  title: 'Concept Assurance',
  slug: '1-concept-assurance',
  summary: 'Establish the conceptual foundation for a given railway system or route. Moving from understanding the wider state of the art (SotA) and existing systems, into defining the mission statement and intended purpose of the proposed system, then into scoping the operational area, culminating in a scenario definition that expresses how the system is expected to behave within that area. Step 1 is about finding the correct questions to answer and in summary, assuring the given concept.',
  subDiagramSrc: 'diagrams/step-1.svg',
  subHotspots: [
    // Inputs/deliverables (parallelograms) → link to example pages
  { id: 'd0', label: 'Deliverable D0', kind: 'info', x: 1,   y: 181, w: 161, h: 90 },
  { id: 'd2', label: 'Deliverable D2', kind: 'info', x: 465, y: 279, w: 120, h: 59 },
  { id: 'd1', label: 'Deliverable D1', kind: 'info', x: 900, y: 200, w: 120, h: 59 },
  { id: 'a',  label: 'Artefact A',     kind: 'info', x: 476, y: 1,   w: 96,  h: 59 },
  { id: 'b',  label: 'Artefact B',     kind: 'info', x: 580, y: 1,   w: 96,  h: 59 },
  { id: 'c',  label: 'Artefact C',     kind: 'info', x: 690, y: 1,   w: 96,  h: 59 },
  { id: 'd',  label: 'Artefact D',     kind: 'info', x: 793, y: 1,   w: 96,  h: 59 },

    // Sub-steps (rectangles) → inline detailed info (markdown, with cross-links)
    { id: '1-1', label: '1.1 SotA Comparison',         kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/1-1', x: 229, y: 200, w: 111, h: 59 },
    { id: '1-2', label: '1.2 Mission Statement',       kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/1-2', x: 359, y: 200, w: 120, h: 59 },
    { id: '1-3', label: '1.3 Top-level Domain Model',  kind: 'link', navigateTo: '/steps/1-concept-assurance/examples/1-3', x: 494, y: 200, w: 120, h: 59 },
  ],
  implementationMd: `Use interviews + document reviews to define stakeholders, assumptions and an initial ODM/SOC sketch. Produce D2 in MoSCoW and record the boundary conditions that shape Step 2 hazards and Step 6 assurance.`,
},


{
 number: 2,
    title: 'Hazard Identification',
    slug: '2-hazard-identification',
    summary: 'Transition from conceptual understanding to environmental comprehension. Step 2 draws upon the Manifestations of Uncertainty as defined by Lovell [[4]](cite:4) as interporated by Burton to apply to Autonomy [[10]](cite:10).  \n\n Uncertainty in autonomous systems does not arise solely from technical limitations, but from the interaction between the system and the world it inhabits. Lovell distinguishes between what the system does not yet know and the intrinsic variability of the world, while Burton extends this by showing how these uncertainties manifest operationally.   \n\n Within the railway domain, the environmnet is both structured and unpredictable, the same signal, the same track, may produce radically different risk profiles depending on weather, traffic, or human interaction.   \n\n It is these features which we aim to map within step 2. By decomposing the route into its operational features and environmental risks, and by classifying each hazard from both eco (ecosystem) and ego (vehicle) perspectives, we begin to see how uncertainty flows through the system of systems that constitutes rail operation [[11]](cite:11),[[6]](cite:6)',
    subDiagramSrc: 'diagrams/step-2.svg',
    subHotspots: [
        { id: 'd3', label: 'Deliverable D3', kind: 'info', x: 140,   y: 310, w: 120, h: 59 },
        { id: 'd4', label: 'Deliverable D4', kind: 'info', x: 276, y: 310, w: 120, h: 59 },
        { id: 'd5', label: 'Deliverable D5', kind: 'info', x: 353, y: 390, w: 120, h: 59 },
        { id: 'b',  label: 'Artefact B',     kind: 'info', x: 0, y: 1,   w: 82,  h: 99 },
        { id: 'c',  label: 'Artefact C',     kind: 'info', x: 140, y: 1,   w: 82,  h: 99 },
        { id: 'e',  label: 'Artefact E',     kind: 'info', x: 290, y: 1,   w: 82,  h: 99 },
        { id: 'd6',  label: 'Deliverable D6',     kind: 'info', x: 819, y: 325,   w: 120,  h: 59 },
        { id: 'd7',  label: 'Deliverable D7',     kind: 'info', x: 1000, y: 210,   w: 120,  h: 59 },

          // Sub-steps (rectangles) → inline detailed info (markdown, with cross-links)
          { id: '2-1', label: '2.1 Operational Feature Mapping',         kind: 'link', navigateTo: '/steps/2-hazard-identification/examples/2-1', x: 70, y: 210, w: 120, h: 59 },
          { id: '2-2', label: '2.2 Environmental Risk Mapping',       kind: 'link', navigateTo: '/steps/2-hazard-identification/examples/2-2', x: 210, y: 210, w: 120, h: 59 },
          { id: '2-3', label: '2.3 Eco-Ego Classification',  kind: 'link', navigateTo: '/steps/2-hazard-identification/examples/2-3', x: 353, y: 210, w: 120, h: 59 },
          { id: '2-4', label: '2.4 Hazard Compensation',  kind: 'link', navigateTo: '/steps/2-hazard-identification/examples/2-4', x: 497, y: 210, w: 120, h: 59 },
          { id: '2-5a', label: '2.5a Ego Hazard Analysis',  kind: 'link', navigateTo: '/steps/2-hazard-identification/examples/2-5', x: 660, y: 149, w: 120, h: 59 },
          { id: '2-5b', label: '2.5b Eco Hazard Analysis',  kind: 'link', navigateTo: '/steps/2-hazard-identification/examples/2-5', x: 660, y: 271, w: 120, h: 59 },
          { id: '2-6', label: '2.6 Identification of Components',  kind: 'link', navigateTo: '/steps/2-hazard-identification/examples/2-6', x: 820, y: 210, w: 120, h: 59 },
    ],
    implementationMd: `**Do**:
- Map mandatory operations (signals, junctions, limits).
- Identify environmental interfaces (overpasses, fencing, trespass vectors).
- Build fault trees (e.g., SPAD: seen/misread/disregarded/system error).

**Outputs**: Hazard register linked to actors/components.`,
},
{
number: 3,
title: 'Requirements Capturing & Assurance',
slug: '3-requirements',
summary: 'Validate hazards and derive verifiable requirements that tie back to the ODM and stakeholders.',
subDiagramSrc: 'diagrams/step-3.svg',
subHotspots: [
        { id: 'd5', label: 'Deliverable D5', kind: 'info', x: 0,   y: 0, w: 120, h: 61 },
        { id: 'd1', label: 'Deliverable D1', kind: 'info', x: 130, y: 0, w: 120, h: 61 },
        { id: 'd7', label: 'Deliverable D7', kind: 'info', x: 420,y:0, w: 120, h: 61},
        { id: 'd7', label: 'Deliverable D7', kind: 'info', x: 730,y:269, w: 120, h: 61},
        { id: 'd8',  label: 'Deliverable D8',     kind: 'info', x: 200, y: 268, w: 120, h: 61  },
        { id: 'd9',  label: 'Deliverable D9',     kind: 'info', x: 500, y: 268,   w: 120,  h: 61 },
        { id: 'f',  label: 'Artefact F',     kind: 'info', x: 668, y: 0,   w: 80,  h: 62 },
        { id: 'g',  label: 'Artefact G',     kind: 'info', x: 810, y: 0,   w: 80,  h: 62 },
        { id: 'd10',  label: 'Deliverable D10',     kind: 'info', x: 951, y: 158,   w: 120,  h: 61 },

          // Sub-steps (rectangles) → inline detailed info (markdown, with cross-links)
          { id: '3-1', label: '3.1 Hazard Validation',         kind: 'link', navigateTo: '/steps/3-requirements/examples/3-1', x: 200, y: 158, w: 122, h: 62 },
          { id: '3-2', label: '3.2 Mitigation Review',       kind: 'link', navigateTo: '/steps/3-requirements/examples/3-2', x: 350, y: 158, w: 122, h: 62 },
          { id: '3-3', label: '3.3 Requirements Encapsulation',  kind: 'link', navigateTo: '/steps/3-requirements/examples/3-3', x: 499, y: 158, w: 122, h: 62 },
          { id: '3-4', label: '3.4 ODM iteration',  kind: 'link', navigateTo: '/steps/3-requirements/examples/3-4', x: 648, y: 158, w: 122, h: 62 },
          { id: '3-5', label: '3.5 Requirement Assurance',  kind: 'link', navigateTo: '/steps/3-requirements/examples/3-5', x: 798, y: 158, w: 122, h: 62 },
 ],
implementationMd: `**Do**:\n- Turn hazards into testable requirements.\n- Trace each to actors and operational contexts.\n- Prepare interview/review plans with practitioners.\n\n**Outputs**: Requirements spec + traceability matrix.`,
},
{
number: 4,
title: 'Metrics that Matter',
slug: '4-metrics',
summary: 'Define CSO/SOC/OSM metrics to monitor and control safety, aligned to the operation states.',
diagramSrc: 'diagrams/Step-4.svg',
implementationMd: `**Do**:\n- Specify Context of Safe Operation (CSO) variables.\n- Compose Safe Operating Contexts (SOC) from CSO thresholds.\n- Define Operational Support Metrics (OSM) for runtime monitoring.\n\n**Outputs**: Metrics catalogue with thresholds & rationale.`,
},
{
number: 5,
title: 'Failure Management',
slug: '5-safety-actualisation',
summary: 'Declare what “failure” means early, design mitigations, and define minimum-risk states and transitions.',
diagramSrc: 'diagrams/step-5.svg',
implementationMd: `**Do**:\n- Enumerate failure modes & detection logic.\n- Define MRS (Minimum-Risk State) triggers & behaviours.\n- Align with ecosystem procedures (signaller comms, station ops).\n\n**Outputs**: Failure-handling playbook & state diagrams.`,
},
{
number: 6,
title: 'Autonomous System Design Assurance',
slug: '6-design-assurance',
summary: 'Map technology to gaps surfaced by TRAP; ensure each tech adds assurance without introducing unmanaged risks.',
diagramSrc: 'diagrams/step-6.svg',
implementationMd: `**Do**:\n- Select sensing/comms/control tech to close gaps.\n- Define performance envelopes & validation plans.\n- Extend TRAP to the technologies themselves.\n\n**Outputs**: Tech spec + verification plan.`,
},
{
number: 7,
title: 'Safe Operating Context',
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

