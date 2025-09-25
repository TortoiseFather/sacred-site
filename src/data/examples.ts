import { assetUrl } from '../lib/assetUrl'

type Example = { title: string; body: string; image?: string }
type ExamplesByStep = Record<string, Record<string, Example>>

export const examplesByStep: ExamplesByStep = {
  '1-concept-assurance': {
    d0: {
      title: 'Deliverable D0 – Generic Concept',
      body: `D0 is produced by Step 0 and captures the high-level concept for a railway system.
Examples:
• A fully autonomous version of the S-Bahn Berlin operating at GoA-4.
• A fully autonomous service between Swalwell Junction and Newcastle upon Tyne.

It is the abstract idea of the autonomous system that Step 1 will start shaping.`,
    },
    d1: {
      title: 'Deliverable D1 – Scenario Definition (Initial)',
      body: `D1 is a specific list of operational scenarios defining scope of operation.
Examples:
• Between Swalwell and Newcastle, operate during peak hours regardless of weather, excluding extreme closures.
• Route includes tunnels → risks include structural hazards and visual impairment.
D1 is high-level and only as good as the materials given; later SACRED steps iterate and refine it.`,
    },
    d2: {
      title: 'Deliverable D2 – MoSCoW Structure',
      body: `D2 records the Must/Should/Could/Would requirements, comparing D0 wishes to the state-of-the-art (SotA). It bounds the system’s scope before later verification.`,
    },
    a: {
      title: 'Artefact A – State of the Art (SotA)',
      body: `The SotA as understood by the operator: what technology is realistically available now (not absolute). Used for early feasibility and later Step 6 design assurance.`,
    },
    b: {
      title: 'Artefact B – Initial ODM (if given)',
      body: `If an ODM already exists, provide it here to shape D1. If not, SACRED Step 2 derives it.`,
    },
    c: {
      title: 'Artefact C – Initial SOC',
      body: `Initial operating contexts (e.g., speed limits, signal visibility ranges). May be given or derived from D2.`,
    },
    d: {
      title: 'Artefact D – Area of Operation',
      body: `Which route(s) the AS covers and, for partial autonomy, which functions are autonomous vs. manual.`,
    },
    e2: {
      title: 'E2 – Example: Top-Level State Machine',
      body: `Step 1.3 produces a top-level domain/state model: the route as states with milestones triggering transitions.
        See the example below.`,
      image: assetUrl('images/TrainSM.png'),
    },
  },
}
