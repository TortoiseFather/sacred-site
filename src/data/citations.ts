export type CitationEntry = {
  id: string 
  text: string     
  authors?: string
  year?: string
  venue?: string
  url?: string         
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
  'e1':{
    id:'e1',
    text: 'maliciously or otherwise.'
  },
  '3':{
    id:'3',
    text: 'Clegg, Dai; Barker, Richard (1994). Case Method Fast-Track: A RAD Approach. Addison-Wesley. ISBN 978-0-201-62432-8.'
  },
  '4':{
    id:'4',
    text:' Lovell, B. E. (1995). A Taxonomy of Types of Uncertainty. Portland, OR: Portland State University.'
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
  '10':{
    id:'10',
    text: 'Simon Burton, Benjamin Herd, Addressing uncertainty in the safety assurance of machine-learning Volume 5 - 2023 | https://doi.org/10.3389/fcomp.2023.1132580'
  },
  '11':{
    id:'11',
    text:'Tetsuo Uzuka - System of Systems in Railway March 2023 DOI: 10.1007/978-981-19-7776-3_16'
  },
  '12':{
    id:'12',
    text:'International Electrotechnical Commissions standard IEC 62267'
  },
  '13':{
    id:'13',
    text:'Urban rail transit FAO system: technological development and trends.'
  },
  '14': {
    id: '14',
    text: 'Medossi G., Handbook of Optimisation in the Railway Industry (2018)'
  },
  '15': {
    id: '15',
    text: 'RAIB Report R22/2022 (Carmont Derailment, Scotland)'
  },
  '16':{
    id: '16',
    text: 'Impact of signalling system on capacity – Comparing legacy ATC, ETCS level 2 and ETCS hybrid level 3 systems'
  },
  '17': {
    id: '17',
    text: 'Moreno et al., A Survey on Future Railway Radio Communications Services (2015)'
  },
  '18': {
    id: '18',
    text: 'Anderson & Lee, The How of Fault Tolerance (1981)'
  },
  '19':{
    id: '19',
    text: 'Ramírez Márquez, Roberto & Adin, Inigo & Goya, Jon & Alvarado, Unai & Brazález, Alfonso & Mendizabal, Jaizki. (2022). Freight Train in the Age of Self-Driving Vehicles. A Taxonomy Review. IEEE Access. PP. 1-1. 10.1109/ACCESS.2022.3144602.'
  },
  '20': {
    id: '20',
    text: 'Reichmann et al., Grades of Automation for Shunting Operations (2025)'
  },
  '21': {
    id: '21',
    text: 'People and Rail Systems Human Factors at the Heart of the Railway, Ann M. Mills, John R. Wilson, B. Norris'
  },
  '22':{
    id:'22',
    text:'Modeling and Measuring Situation Awareness in the Infantry Operational Environment, Endley Mica, Garland Daniel, Wampler Richard and Matthews Michael'
  },
  '23':{
    id:'23',
    text:'Reason, James (1990-04-12). "The Contribution of Latent Human Failures to the Breakdown of Complex Systems". Philosophical Transactions of the Royal Society of London. Series B, Biological Sciences. 327 (1241): 475–84. Bibcode:1990RSPTB.327..475R. doi:10.1098/rstb.1990.0090. JSTOR 55319. PMID 1970893'
  },
  '24':{
    id:'24',
    text:'Network Rail Weather Advisory Task Force Final Report, Slingo, Julia and Davies, Paul and Gowler, Hayley, 2021'
  },
  '25':{
    id:'25',
    text:'J. Boyd C. Spinney, C. Richards, G. Richards (Eds.), The essence of winning and losing (1995, 2010) Project on Government Oversight (Archives) http://pogoarchives.org/m/dni/john_boyd_compendium/essence_of_winning_losing.pdf'
  },
  '26':{
    id:'26',
    text:' Fault tolerance, principles and practice / P.A. Lee, T. Anderson. Lee, P. A., 1950-; Anderson, T.'
  },
  '27':{
    id:'27',
    text:'Moloney, W.: Applying Simulation Techniques to Train Railway Traction Drivers, Section 6.5. Ph.D. thesis, Birmingham, COLLEGE OF ENGINEERING AND PHYSICAL SCIENCES SCHOOL OF ENGINEERING DEPARTMENT OF CIVIL ENGINEERING (Sep 2017), https://etheses.bham.ac.uk/id/eprint/8370/1/Moloney18PhD.pdf'
  },
  '28':{
    id:'28',
    text:'Operational Design Domain Narrow frame provides safety, Salvi 2022, https://safe-intelligence.fraunhofer.de/en/articles/odd-narrow-frame-provides-safety'
  },
  '29':{
    id:'29',
    text:'Formalization of Operational Domain and Operational Design Domain for Automated Vehicles, Ali Shakeri, https://arxiv.org/abs/2408.14481'
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
  '33':{
    id: '33',
    text: 'Mainline Automatic Train Horn and Brake Performance Metric, Rustam Tagiew 2023 https://arxiv.org/abs/2307.02586'
  },
  '34':{
    id:'34',
    text:'Towards a Specified Operational Design Domain for a Safe Remote Driving of Trains, Simon Collart-Dutilleul, Julie Beugin, Abhimanyu Tonk, Abderraouf Boussif'
  },
  '35':{
    id:'35',
    text:'Maintaining Railway Safety in an Ever-Changing World, Peter Sheppard, Ross Dunsford 2024 https://doi.org/10.1080/09617353.2023.2289322'
  },
  '36':{
    id:'36',
    text:'A new index to evaluate the safety performance level of railway transportation systems, Valentino Sangiorgio, Agostino Marcello Mangini, Ilario Precchiazzi'
  },
  '37':{
    id:'37',
    text:'Milestone Determination for Autonomous Railway Operation, Josh Hunter, John McDermid, Simon Burton, Poppy Fynes, Mia Dempster. https://arxiv.org/abs/2510.06229'
  },
  '38':{
    id:'38',
    text:'https://www.routereports.com/case-study/seasonal-intelligence-platform'
  },
  '40': {
    id: '40',
    text: 'Benerecetti et al., Dynamic State Machines for Modelling Railway Control Systems (2019)'
  },
  'stateexplosion':{
    id:'stateexplosion',
    text: 'The concept of a system’s possible environmental and operational conditions increasing combinatorially, to the point where it becomes infeasible to model, analyse, or verify every potential state within the operational design domain.'
  },
  'SOCNote':{
    id:'SOC',
    text:'There is a lot of nuance in the SOC which will be covered throughout the SACRED methodology, as a note for the examples, communication is key in the event of a shifting internal speed limit, due to the safety criticality of timetabling, in general, the communication of intent is extremely relevant within SACRED step 6.'
  },
  'MilestoneNote':{
    id:'Milestone Note:',
    text:'Of course, in reality there would likely be a seperate state for "signal approach" which would have a milestone correlated with actual geographical location, however for this simplified example we aren\'t discussing that here.'
  },
  '41':{
    id:'41',
    text:'Kyriakidis, M., Hirsch, R., Majumdar, A. Metro railway safety: An analysis of accident precursors. Safety Science, 2012.'
  },
  '42':{
    id:'42',
    text:'SPARK, RSSB. Measuring Safety Performance. 2019.'
  },
  '43':{
    id:'43',
    text:'Fenelon, P., McDermid, J.A., Nicolson, M., Pumfrey, D.J. Towards integrated safety analysis and design. ACM SIGAPP Applied Computing Review, 1994.'
  },
  '44':{
    id:'44',
    text:'Kotek, L., Tabas, M. HAZOP Study with Qualitative Risk Analysis for Prioritization of Corrective and Preventive Actions. Procedia Engineering, 2012.'
  },
  '45':{
    id:'45',
    text:'Safety Analysis of Autonomous Railway Systems: An Introduction to the SACRED Methodology'
  },
  '46':{
    id:'46',
    text:'Ribeiro, Q., Ribeiro, M., Castro, J. Requirements Engineering for Autonomous Vehicles: A Systematic Literature Review. ACM, 2022.'
  },
  '47':{
    id:'47',
    text:'Delorme, F. SNCF Rail Safety and the Fourth Industrial Revolution. 2019.'
  },
  '48':{
    id:'48',
    text:'IEC 62290-1. Railway applications – Urban guided transport management and command/control systems. 2006'
  },
  'Incident Data':{
    id:'note1',
    text:'For example, data provided by the RAIB'
  },
  '49':{
    id:'49',
    text:'Berger, I., Rieke, R., Kolomeets, M., Chechulin, A., Kotenko, I. Comparative Study of ML Methods for In-Vehicle Intrusion Detection. Springer, 2019.'
  },
  '50':{
    id:'50',
    text:'Guidance on the Assurance of Machine Learning in Autonomous Systems (AMLAS) Richard Hawkins, Colin Paterson, Chiara Picardi, Yan Jia, Radu Calinescu, Ibrahim Habli'
  },
  '51':{
    id:'51',
    text:'Leezer3 and the BVE Team - OpenBVE - https://github.com/leezer3/OpenBVE/'
  },
  '52':{
    id:'52',
    text:'https://github.com/TortoiseFather/OpenBVE-ML-Plugins'
  },
  '53':{
    id:'53',
    text:'You Only Look Once: Unified, Real-Time Object Detection Joseph Redmon, Santosh Divvala, Ross Girshick, Ali Farhadi  	arXiv:1506.02640'
  },
  '54':{
    id:'54',
    text:'Dwyer, B., Nelson, J., Hansen, T., et al. (2025). Roboflow (Version 1.0) [Software]. Available from https://roboflow.com. Computer vision.'
  },
  '55':{
    id:'55',
    text:'Roboflow railway example, averaging 46\% recall. https://universe.roboflow.com/goal-lmqiu/railway-tfabb'
  },
  'Railvision':{
    id:'railvision',
    text:'https://railvision.io/'
  },
  '56':{
    id:'56',
    text:' Dist-YOLO: Fast Object Detection with Distance Estimation  Marek Vajgl, Petr Hurtik and Tomáš Nejezchleba https://doi.org/10.3390/app12031354'
  }
}