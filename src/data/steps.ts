export type Step = {
  number: number
  title: string
  slug: string
  summary: string
  diagramSrc?: string         // (used on home if you want)
  subDiagramSrc?: string      // shown at top of step page
  implementationMd: string
  subHotspots?: Array<{
    id: string
    x: number; y: number; w: number; h: number
    rx?: number
    label?: string
    content: string
  }>
  next?: { slug: string; number: number; title: string }
}
export const steps: Step[] = [
{
number: 0,
title: 'Concept',
slug: '0-preliminary',
summary: 'Scope the route and compile foundational artefacts to judge viability.',
diagramSrc: '/diagrams/Step-0.svg',
implementationMd: `**Inputs**: route name, public docs, stakeholder list.\n\n**Do**:\n- Collate signal maps and service patterns.\n- Capture known constraints (timetables, platforms, junctions).\n- Record data gaps + assumptions.\n\n**Outputs**: a route dossier to seed Step 1.`,
},
{
number: 1,
title: 'Step 1: Concept Assurance',
slug: '1-concept-assurance',
summary: 'Define purpose, stakeholders, assumptions, and a first-pass ODM with MoSCoW requirements.',
diagramSrc: '/diagrams/Step-1.svg',
implementationMd: `**Do**:\n- Define MoSCoW: Must/Should/Could/Would.\n- Draft the ODM at high level (as understood by the system).\n- State the Scenario Definition and an initial SOC sketch.\n\n**Outputs**: Concept brief, MoSCoW list, v0 ODM.`,
},
{
 number: 2,
    title: 'Step 2: Hazard Identification',
    slug: '2-hazard-identification',
    summary: 'Map operational features and environmental risks; classify hazards by ego-vehicle vs ecosystem responsibility.',
    subDiagramSrc: '/diagrams/Step-2.svg',
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
diagramSrc: '/diagrams/Step-3.svg',
implementationMd: `**Do**:\n- Turn hazards into testable requirements.\n- Trace each to actors and operational contexts.\n- Prepare interview/review plans with practitioners.\n\n**Outputs**: Requirements spec + traceability matrix.`,
},
{
number: 4,
title: 'Step 4: Metrics that Matter',
slug: '4-metrics',
summary: 'Define CSO/SOC/OSM metrics to monitor and control safety, aligned to the operation states.',
diagramSrc: '/diagrams/Step-4.svg',
implementationMd: `**Do**:\n- Specify Context of Safe Operation (CSO) variables.\n- Compose Safe Operating Contexts (SOC) from CSO thresholds.\n- Define Operational Support Metrics (OSM) for runtime monitoring.\n\n**Outputs**: Metrics catalogue with thresholds & rationale.`,
},
{
number: 5,
title: 'Step 5: Failure Management',
slug: '5-safety-actualisation',
summary: 'Declare what “failure” means early, design mitigations, and define minimum-risk states and transitions.',
diagramSrc: '/diagrams/Step-5.svg',
implementationMd: `**Do**:\n- Enumerate failure modes & detection logic.\n- Define MRS (Minimum-Risk State) triggers & behaviours.\n- Align with ecosystem procedures (signaller comms, station ops).\n\n**Outputs**: Failure-handling playbook & state diagrams.`,
},
{
number: 6,
title: 'Step 6: Autonomous System Design Assurance',
slug: '6-design-assurance',
summary: 'Map technology to gaps surfaced by TRAP; ensure each tech adds assurance without introducing unmanaged risks.',
diagramSrc: '/diagrams/Step-6.svg',
implementationMd: `**Do**:\n- Select sensing/comms/control tech to close gaps.\n- Define performance envelopes & validation plans.\n- Extend TRAP to the technologies themselves.\n\n**Outputs**: Tech spec + verification plan.`,
},
{
number: 7,
title: 'Step 7: Safe Operating Context (SOC)',
slug: '7-soc',
summary: 'Integrate metrics, requirements and failure modes into an actionable SOC for deployment and audit.',
diagramSrc: '/diagrams/Step-7.svg',
implementationMd: `**Do**:\n- Consolidate metric thresholds into operational guardrails.\n- Define activation/transition rules across contexts.\n- Produce operator‑facing artefacts and audit trails.\n\n**Outputs**: SOC pack ready for trials/deployment.`,
},
]


// simple helpers
export function getStepBySlug(slug: string) {
return steps.find(s => s.slug === slug)
}


