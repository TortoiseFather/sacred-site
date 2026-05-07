import { assetUrl } from '../lib/assetUrl'

type ExampleType = 'substep' | 'deliverable' | 'extra' | 'artefact'

type Example = {
  title: string
  image?: string
  body?: string
  type: ExampleType
  substepNumber?: string
}

type ExamplesByStep = Record<string, Record<string, Example>>

export const examplesByStep: ExamplesByStep = {
  '0-preliminary': {
    '0-1': {
      title: '0.1 Route Scoping.',
      type: 'substep',
      substepNumber: '0.1',
    },
    '0-2': {
      title: '0.2 Stakeholder Gathering.',
      type: 'substep',
      substepNumber: '0.2',
    },
    d0: {
      title: 'Deliverable D0 – Generic Concept',
      type: 'deliverable',
    },
    '0a': {
      title: 'Artefact 0A - Area Report',
      type: 'artefact',
    },
    '0b': {
      title: 'Artefact 0B - Funding Allocation',
      type: 'artefact',
    },
  },

  '1-concept-assurance': {
    '1-1': {
      title: '1.1 SotA Comparison',
      type: 'substep',
      substepNumber: '1.1',
    },
    '1-2': {
      title: '1.2 Mission Statement (MoSCoW)',
      type: 'substep',
      substepNumber: '1.2',
    },
    '1-3': {
      title: '1.3 Top-level Domain Model',
      image: assetUrl('Images/signalsabstracted.png'),
      type: 'substep',
      substepNumber: '1.3',
    },
    '1-e': {
      title: 'Operational Domain Model',
      type: 'extra',
    },
    '1.1-e': {
      title: 'The Ecosystem',
      type: 'extra',
    },
    '1.2-e': {
      title: 'The Safe Operating Concept',
      type: 'extra',
    },
    '1.3-e': {
      title: 'The Context of Safe Operation',
      type: 'extra',
    },
    d1: {
      title: 'Scenario Definition (Initial)',
      type: 'deliverable',
    },
    d2: {
      title: 'MoSCoW Structure',
      type: 'deliverable',
    },
    a: {
      title: 'State of the Art (SotA)',
      type: 'extra',
    },
    b: {
      title: 'Initial ODM',
      type: 'extra',
    },
    c: {
      title: 'Initial SOC',
      type: 'extra',
    },
    d: {
      title: 'Area of Operation',
      type: 'extra',
    },
    e2: {
      title: 'E2 – Example: Top-Level State Machine',
      body: ``,
      image: assetUrl('Images/signalsabstracted.png'),
      type: 'extra',
    },
  },

  '2-hazard-identification': {
    '2-1': {
      title: 'Operational Feature Mapping',
      type: 'substep',
      substepNumber: '2.1',
    },
    '2-2': {
      title: 'Environmental Risk Mapping',
      type: 'substep',
      substepNumber: '2.2',
    },
    '2-3': {
      title: 'Eco-Ego Classification',
      type: 'substep',
      substepNumber: '2.3',
    },
    '2-4': {
      title: 'Hazard Compensation',
      type: 'substep',
      substepNumber: '2.4',
    },
    '2-5': {
      title: 'EcoEgo Hazard Analysis',
      type: 'substep',
      substepNumber: '2.5',
    },
    '2-6': {
      title: 'Identification of Components',
      type: 'substep',
      substepNumber: '2.6',
    },
    '2-e': {
      title: 'Manifestations of Uncertainty.',
      type: 'extra',
    },
    e: {
      title: 'Domain Knowledge',
      type: 'extra',
    },
    d3: {
      title: 'Hazard Register',
      type: 'deliverable',
    },
    d4: {
      title: 'Fault Tree',
      type: 'deliverable',
    },
    d5: {
      title: 'EcoEgo Assignment',
      type: 'deliverable',
    },
    d6: {
      title: 'State Map',
      type: 'deliverable',
    },
    d7: {
      title: 'Verified ODM',
      type: 'deliverable',
    },
    e2: {
      title: 'Bridge Example',
      type: 'extra',
    },
  },

  '3-requirements': {
    '3-1': {
      title: 'Hazard Validation',
      type: 'substep',
      substepNumber: '3.1',
    },
    '3-2': {
      title: 'Mitigation Review',
      type: 'substep',
      substepNumber: '3.2',
    },
    '3-3': {
      title: 'Requirement Encapsulation',
      type: 'substep',
      substepNumber: '3.3',
    },
    '3-4': {
      title: 'ODM Iteration',
      type: 'substep',
      substepNumber: '3.4',
    },
    '3-5': {
      title: 'Requirement Assurance',
      type: 'substep',
      substepNumber: '3.5',
    },
    f: {
      title: 'RAIB Reports',
      type: 'extra',
    },
    g: {
      title: 'Interviews',
      type: 'extra',
    },
    d8: {
      title: 'Hazard Register',
      type: 'deliverable',
    },
    d9: {
      title: 'Assurance Traceability Matrix',
      type: 'deliverable',
    },
    d10: {
      title: 'Limitation Report',
      type: 'deliverable',
    },
  },

  '4-metrics': {
    '4-1': {
      title: 'Requirement to Metric Translation',
      type: 'substep',
      substepNumber: '4.1',
    },
    '4-2': {
      title: 'Operational Metric Definition',
      type: 'substep',
      substepNumber: '4.2',
    },
    '4-3': {
      title: 'Environmental Metric Definition',
      type: 'substep',
      substepNumber: '4.3',
    },
    '4-4': {
      title: 'Context Calibration',
      type: 'substep',
      substepNumber: '4.4',
    },
    '4-5': {
      title: 'Verification or Iteration',
      type: 'substep',
      substepNumber: '4.5',
    },
    d11: {
      title: 'Requirements Based Metrics',
      type: 'deliverable',
    },
    d12: {
      title: 'System-Specific Metrics',
      type: 'deliverable',
    },
    d13: {
      title: 'Route-Specific Metrics',
      type: 'deliverable',
    },
    d14: {
      title: 'Unified Metrics',
      type: 'deliverable',
    },
    d15: {
      title: 'Criticality Determination',
      type: 'deliverable',
    },
    d16: {
      title: 'Scoped SOC',
      type: 'deliverable',
    },
    '4.1-e': {
      title: 'Top Level Hazard Analysis.',
      type: 'extra',
    },
    '4-e': {
      title: 'Milestones',
      type: 'extra',
    },
  },

  '5-safety-actualisation': {
    '5-1': {
      title: 'Failure Trigger Detection',
      type: 'substep',
      substepNumber: '5.1',
    },
    '5-2': {
      title: 'Minimum Risk State Determination',
      type: 'substep',
      substepNumber: '5.2',
    },
    '5-3': {
      title: 'TRAP Analysis',
      type: 'substep',
      substepNumber: '5.3',
    },
    d17: {
      title: 'TRAP Table',
      type: 'deliverable',
    },
    '5-e': {
      title: 'TRAP Paradigm',
      type: 'extra',
    },
  },

  '6-design-assurance': {
    '6-1': {
      title: 'Technology Scoping',
      type: 'substep',
      substepNumber: '6.1',
    },
    '6-2': {
      title: 'SotA TRAP',
      type: 'substep',
      substepNumber: '6.2',
    },
    '6-3': {
      title: 'Operational State Validation',
      type: 'substep',
      substepNumber: '6.3',
    },
    '6-4': {
      title: 'Simulation and Experimentation',
      type: 'substep',
      substepNumber: '6.4',
    },
    '6-5': {
      title: 'Boundary Definition',
      type: 'substep',
      substepNumber: '6.5',
    },
    '6-6': {
      title: 'Restriction or continuation?',
      type: 'substep',
      substepNumber: '6.6',
    },
    d18: {
      title: 'SotA Capability Assessment',
      type: 'deliverable',
    },
    '6-e': {
      title: 'OpenBVE',
      type: 'extra',
    },
  },

  '7-soc': {
    '7-1': {
      title: 'SOC Boundary Definition',
      type: 'substep',
      substepNumber: '7.1',
    },
    '7-2': {
      title: 'Fallback Behaviour Definition',
      type: 'substep',
      substepNumber: '7.2',
    },
    '7-3': {
      title: 'SOC Finalization',
      type: 'substep',
      substepNumber: '7.3',
    },
    d19: {
      title: 'Safe Operating Concept',
      type: 'deliverable',
    },
  },
}