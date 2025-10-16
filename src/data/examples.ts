import { assetUrl } from '../lib/assetUrl'

type Example = { title: string; image?: string; body?: string }
type ExamplesByStep = Record<string, Record<string, Example>>

export const examplesByStep: ExamplesByStep = {
  '0-preliminary':{
    '0-1':{
      title: '0.1 Route Scoping.',
    },
    '0-2':{
      title: '0.2 Stakeholder Gathering.',
    },
     d0: {
      title: 'Deliverable D0 – Generic Concept',
    },
    '0a': {
      title: 'Artefact 0A - Area Report',
    },
    '0b': {
      title: 'Artefact 0B - Funding Allocation',
    },

  },
  '1-concept-assurance': {
    '1-1': {
      title: '1.1 SotA Comparison',
    },
    '1-2': {
      title: '1.2 Mission Statement (MoSCoW)',
    },

    '1-3': {
      title: '1.3 Top-level Domain Model',
      image: assetUrl('Images/signalsabstracted.png'),
    },
    '1-e':{
      title:'Operational Domain Model'
    },
    '1.1-e':{
      title:'The Ecosystem'
    },
    '1.2-e':{
      title:'The Safe Operating Context'
    },

    // ───────────────────────── DELIVERABLES / ARTEFACTS (inline panels via ref:…) ─────────────────────────
    d1: {
      title: 'Deliverable D1 – Scenario Definition (Initial)',
    },
    d2: {
      title: 'Deliverable D2 – MoSCoW Structure',
},
    a: {
      title: 'Artefact A – State of the Art (SotA)',
    },
    b: {
      title: 'Artefact B – Initial ODM',
    },
    c: {
      title: 'Artefact C – Initial SOC',
    },
    d: {
      title: 'Artefact D – Area of Operation',

    },
    e2: {
      title: 'E2 – Example: Top-Level State Machine',
      body: ``,
      image: assetUrl('Images/signalsabstracted.png'),
    },
  },
    '2-hazard-identification':{
      '2-1': {
      title: 'Operational Feature Mapping',
    },
    '2-2':{
      title: 'Environmental Risk Mapping',
    },
    '2-3':{
      title: 'Eco-Ego Classification',
    },
    '2-4':{
      title: 'Hazard Compensation',
    },
    '2-5':{
      title: 'EcoEgo Hazard Analysis',
    },
    '2-6':{
      title: 'Identification of Components',
    },
    '2-e':{
      title: 'Manifestations of Uncertainty.'
    },
    e:{
      title: 'Domain Knowledge',
    },
    d3:{
      title: 'Hazard Register',
    },
    d4:{
      title: 'Fault Tree',
    },
    d5:{
      title: 'EcoEgo Assignment',
    },
    d6:{
      title: 'State Map',
    },
    d7:{
      title: 'Verified ODM',
    },
    e2:{
      title: 'Bridge Example'
    }
    },
    '3-requirements':{
      '3-1':{
        title: 'Hazard Validation',
      },
      '3-2':{
        title: 'Mitigation Review',
      },
      '3-3':{
        title: 'Requirement Encapsulation',
      },
      '3-4':{
        title: 'ODM Iteration',
      },
      '3-5':{
        title: 'Requirement Assurance',
      },
      'f':{
        title: 'RAIB Reports',
      },
      'g':{
        title: 'Interviews',
      },
      'd10':{
        title: 'Limitation Report',
      },
      'd9':{
        title: 'Assurance Traceability Matrix',
      },
      'd8':{
        title: 'Hazard Register',
      },
    },
    '4-metrics':{
      '4-e':{
        title:'Milestones'
      }
    },
    '5-safety-actualisation':{
      '5-e':{
        title:'TRAP Paradigm'
      },
    },
    '6-design-assurance':{
      '6-1': {
      title: 'six point one',
    }
    }
}

