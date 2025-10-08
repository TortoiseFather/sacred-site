export type CitationEntry = {
  id: string              // "30"
  text: string            // display text
  authors?: string
  year?: string
  venue?: string
  url?: string            // optional: doi or link
}

export const citations: Record<string, CitationEntry> = {
  '1': {
    id: '1',
    text: 'DIN DKE SPEC 99004:2025-05, Specification of ODD in Rail Transport'
  },
  '2': {
    id: '2',
    text: 'BS EN 50129:2019 Safety related electronic systems for signalling'
  },
  '5': {
    id: '5',
    text: 'Gibert et al., Deep Multitask Learning for Railway Track Inspection (2017)'
  },
  '6': {
    id: '6',
    text: 'Hong et al., Railway Accident Causation Analysis (2023)'
  },
  '7': {
    id: '7',
    text: 'Hunter et al., Safety Analysis of Autonomous Railway Systems: An Introduction to the SACRED Methodology (2024)'
  },
  '8': {
    id: '8',
    text: 'Hunter et al., Insights from Railway Professionals: Rethinking Railway Assumptions Regarding Safety and Autonomy (2025)'
  },
  '9': {
    id: '9',
    text: 'Hunter J., On SACRED: A Document (2025)'
  },
  '14': {
    id: '14',
    text: 'Medossi G., Handbook of Optimisation in the Railway Industry (2018)'
  },
  '15': {
    id: '15',
    text: 'RAIB Report R22/2022 (Carmont Derailment, Scotland)'
  },
  '17': {
    id: '17',
    text: 'Moreno et al., A Survey on Future Railway Radio Communications Services (2015)'
  },
  '18': {
    id: '18',
    text: 'Anderson & Lee, The How of Fault Tolerance (1981)'
  },
  '20': {
    id: '20',
    text: 'Reichmann et al., Grades of Automation for Shunting Operations (2025)'
  },
  '30': {
    id: '30',
    text: 'Hawkins et al., Guidance on the Safety Assurance of Autonomous Systems in Complex Environments (SACE) (2022)'
  },
  '31': {
    id: '31',
    text: 'Osborne & Hawkins, Defining an Effective Context for the Safe Operation of Autonomous Systems (2024)'
  },
  '32': {
    id: '32',
    text: 'Salvi et al., Fuzzy Interpretation of Operational Design Domains in Autonomous Driving (2022)'
  },
  '40': {
    id: '40',
    text: 'Benerecetti et al., Dynamic State Machines for Modelling Railway Control Systems (2019)'
  }
}