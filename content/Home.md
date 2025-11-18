Introduction:
-------------

Autonomous railway systems are moving rapidly from concept to deployment. Advances in machine learning (ML), computer vision, and digital signalling mean that trains are increasingly capable of making decisions without direct human control. These developments promise safer, more efficient, and more sustainable transport. At the same time, they raise important questions:

*   How can safety be assured when considering autonomy?
    
*   How do existing safety standards apply regarding autonomy?
    
*   To what degree can we judge safety?
    
*   What exactly do people mean when they say 'autonomy'?
    

Traditional railway safety practice relies on retrospective evidence: incident reports, accident precursors and historical failure rates [[2]](cite:2) [[3]](cite:3). These provide useful benchmarks, but they fall short when considering autonomy. Rare, high-impact failures may surface in ways that analogue operation has never revealed, and past behaviour is not a reliable guide for predicting autonomous failure modes. It is therefore difficult to forecast how an autonomous system might fail by using conventional operation as the reference point.

Instead, we tackle this uncertainty by systematically identifying and reasoning about the interactions between the autonomous system, its environment, and the ecosystem in which it operates [[14]](cite:14) [[15]](cite:15).

We introduce the Safe Autonomy of Complex Railway Environments within a Digital space (SACRED) methodology. SACRED provides a structured, iterative process for:

*   Systematically integrating safety assurance into the development of autonomous railway systems
    
*   Generating a Safe Operating Concept (SOC) that defines the conditions under which the system can safely operate [[16]](cite:16)
    
*   generating an Operational Domain Model (ODM) that captures how the system perceives and interacts with its environment [[20]](cite:20)
    
*   Establishing measurable safety attributes that can be used to justify, with evidence, the acceptability of autonomous operation within a defined ODM[[17](cite:17),[18](cite:18)]
    

About SACRED:
-------------

SACRED is a seven-step, ecosystem-aware safety methodology addressing the uncertainty present within the railway environment [[1]](cite:1)

1.  **Concept Assurance** – moving from abstract vision to defined variables, scenario definitions, and an initial ODM.
    
2.  **Hazard Identification** – Identifying hazards from both the ego-vehicle (the train) and the ecosystem (infrastructure, environment, external actors).
    
3.  **Requirements Capture and Assurance** – Validating hazards and formulating requirements by consulting professionals[[13]](cite:13), reviewing incident data[[15]](cite:15), and aligning with regulations[[5](cite:5),[6](cite:6)].
    
4.  **Metric Generation** – Determining hazard criticality and translating requirements into measurable, checkable metrics[[19]](cite:19).
    
5.  **Failure Management** Defining Trigger–Response–Assurance–Process cycles that prescribe how failures are detected, contained, and managed[[16](cite:16),[18](cite:18)].
    
6.  **Autonomous System Design Assurance** - Evaluating state-of-the-art technologies against the metrics and procedures, while recognising that every solution (vision, fusion, communication) introduces new dependencies [[12](cite:12),[13](cite:13)].
    
7.  **Safe Operating Context (SOC)**– Producing a dynamic, auditable set of conditions that constrain operation to safe bounds, linking ego performance to ecosystem responsibilities.
    

Put simply, SACRED describes how to get from A to B by first describing A, describing B and then describing everything in-between, exploring the possible risks, mitigation strategies and designing acceptable risk metrics.

Whole System Perspective
------------------------

As automation transforms industries, there is a risk that the focus on technological innovation is placing the proverbial cart before the horse, technologies are developed before the understanding of the immediate and societal implications of the technology are understood. 

A distinctive feature of SACRED is its explicit distinction between ecosystem hazards (e.g., infrastructure faults, signalling errors, trespass, maintenance regimes) and ego-vehicle hazards (e.g., sensor failures, braking errors, misclassification). This ecoego split ensures that safety analysis does not stop at the train itself, but encompasses the wider railway system-of-systems.

Inspired by the safety methodology AMLAS[[1]](cite:1) and SACE[[16]](cite:16) SACRED is not a one-pass process. Each stage can trigger iteration: new hazards may reshape the ODM, failure analyses may revise requirements, and emerging technologies may demand updates to the SOC. Each step concludes with artefacts that both support development and provide evidence for a safety case.

Towards Safe Autonomous Rail
----------------------------

Contemporary research has struggled to properly define terms and classifications for railway automation. Different companies have different ideas of the State of the Art. The Grades of Automation (GoA), seen as the standard in much of the west, is disputed by the classification of Fully Automatic Operation (FAO) in the East, neither GoA or FAO are entirely compatable with the European Train Control System.

Railway classification is a hydra, find an issue with one classification and two more fill the gap. We do not present SACRED as a replacement for any State of the Art classification system, SACRED rather, is a methodology for the assurance of technology agnostic of classification. 

SACRED brings predictive assurance, eco–ego hazard framing, and measurable operating contexts, to assist in the understanding of a railway system, arguing that the best path towards safe autonomous rail, first begins with an in-depth understanding of the railway environment and the limitations present within a given system.

Bibliography
------------

*   \[1\] Guidance on the Assurance of Machine Learning in Autonomous Systems (AMLAS) Richard Hawkins, Colin Paterson, Chiara Picardi, Yan Jia, Radu Calinescu, Ibrahim Habli
    
*   \[2\] Kyriakidis, M., Hirsch, R., Majumdar, A. _Metro railway safety: An analysis of accident precursors_. Safety Science, 2012.
    
*   \[3\] SPARK, RSSB. _Measuring Safety Performance_. 2019.
    
*   \[5\] IEC 62290-1. _Railway applications – Urban guided transport management and command/control systems_. 2006.
    
*   \[6\] Delorme, F. _SNCF Rail Safety and the Fourth Industrial Revolution_. 2019.
    
*   \[12\] Berger, I., Rieke, R., Kolomeets, M., Chechulin, A., Kotenko, I. _Comparative Study of ML Methods for In-Vehicle Intrusion Detection_. Springer, 2019.
    
*   \[13\] Ribeiro, Q., Ribeiro, M., Castro, J. _Requirements Engineering for Autonomous Vehicles: A Systematic Literature Review_. ACM, 2022.
    
*   \[14\] Lovell, B.E. _A taxonomy of types of uncertainty_. Portland State University, 1995.
    
*   \[15\] Burton, S., Herd, B. _Addressing uncertainty in the safety assurance of ML_. Frontiers in Computer Science, 2023.
    
*   \[16\] Hawkins, R., Gauerhof, L., Rivett, R., Smith, S., Laher, S., Rasmus, A., Banks, A. _Guidance on the Safety Assurance of Autonomous Systems in Complex Environments (SACE)_. Assuring Autonomy International Programme, 2022.
    
*   \[17\] Fenelon, P., McDermid, J.A., Nicolson, M., Pumfrey, D.J. _Towards integrated safety analysis and design_. ACM SIGAPP Applied Computing Review, 1994.
    
*   \[18\] Kotek, L., Tabas, M. _HAZOP Study with Qualitative Risk Analysis for Prioritization of Corrective and Preventive Actions_. Procedia Engineering, 2012.
    
*   \[19\] BS EN 13803:2017. _Railway applications – Track – Track alignment design parameters_. British Standards Institution.
    
*   \[20\] Tonk, A., Boussif, A., Beugin, J., Collart-Dutilleul, S. _Towards a specified operational design domain for a safe remote driving of trains_. 2021.