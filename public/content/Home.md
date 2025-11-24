Introduction:
-------------

Autonomous railway systems are moving rapidly from concept to deployment. Advances in machine learning (ML), computer vision, and digital signalling mean that trains are increasingly capable of making decisions without direct human control. These developments promise safer, more efficient, and more sustainable transport. At the same time, they raise important questions:

*   How can safety be assured when considering autonomy?
    
*   How do existing safety standards apply regarding autonomy?
    
*   To what degree can we judge safety?
    
*   What exactly do people mean when they say 'autonomy'?
    

Traditional railway safety practice relies on retrospective evidence: incident reports, accident precursors and historical failure rates [[41]](cite:41) [[42]](cite:42). These provide useful benchmarks, but they fall short when considering autonomy. Rare, high-impact failures may surface in ways that analogue operation has never revealed, and past behaviour is not a reliable guide for predicting autonomous failure modes. It is therefore difficult to forecast how an autonomous system might fail by using conventional operation as the reference point.

Instead, we tackle this uncertainty by systematically identifying and reasoning about the interactions between the autonomous system, its environment, and the ecosystem in which it operates [[10]](cite:10) [[4]](cite:4).

We introduce the Safe Autonomy of Complex Railway Environments within a Digital space (SACRED) methodology. SACRED provides a structured, iterative process for:

*   Systematically integrating safety assurance into the development of autonomous railway systems
    
*   Generating a Safe Operating Concept (SOC) that defines the conditions under which the system can safely operate [[30]](cite:30)
    
*   generating an Operational Domain Model (ODM) that captures how the system perceives and interacts with its environment [[31]](cite:31)
    
*   Establishing measurable safety attributes that can be used to justify, with evidence, the acceptability of autonomous operation within a defined ODM[[43](cite:43),[44](cite:44)]
    

About SACRED:
-------------

SACRED is a seven-step, ecosystem-aware safety methodology addressing the uncertainty present within the railway environment [[45]](cite:45)

1.  **Concept Assurance** – moving from abstract vision to defined variables, scenario definitions, and an initial ODM.
    
2.  **Hazard Identification** – Identifying hazards from both the ego-vehicle (the train) and the ecosystem (infrastructure, environment, external actors).
    
3.  **Requirements Capture and Assurance** – Validating hazards and formulating requirements by consulting professionals[[8](cite:8)[46](cite:46)], reviewing incident data[[15]](cite:note1), and aligning with regulations[[47](cite:47),[48](cite:48)].
    
4.  **Metric Generation** – Determining hazard criticality and translating requirements into measurable, checkable metrics.
    
5.  **Failure Management** Defining Trigger–Response–Assurance–Process cycles that prescribe how failures are detected, contained, and managed.
    
6.  **Autonomous System Design Assurance** - Evaluating state-of-the-art technologies against the metrics and procedures, while recognising that every solution (vision, fusion, communication) introduces new dependencies [[49](cite:49),[46](cite:46)].
    
7.  **Safe Operating Context (SOC)**– Producing a dynamic, auditable set of conditions that constrain operation to safe bounds, linking ego performance to ecosystem responsibilities.
    

Put simply, SACRED describes how to get from A to B by first describing A, describing B and then describing everything in-between, exploring the possible risks, mitigation strategies and designing acceptable risk metrics.

Whole System Perspective
------------------------

As automation transforms industries, there is a risk that the focus on technological innovation is placing the proverbial cart before the horse, technologies are developed before the understanding of the immediate and societal implications of the technology are understood. 

A distinctive feature of SACRED is its explicit distinction between ecosystem hazards (e.g., infrastructure faults, signalling errors, trespass, maintenance regimes) and ego-vehicle hazards (e.g., sensor failures, braking errors, misclassification). This ecoego split ensures that safety analysis does not stop at the train itself, but encompasses the wider railway system-of-systems.

Inspired by the safety methodology AMLAS[[50]](cite:50) and SACE[[30]](cite:30) SACRED is not a one-pass process. Each stage can trigger iteration: new hazards may reshape the ODM, failure analyses may revise requirements, and emerging technologies may demand updates to the SOC. Each step concludes with artefacts that both support development and provide evidence for a safety case.

Towards Safe Autonomous Rail
----------------------------

Contemporary research has struggled to properly define terms and classifications for railway automation. Different companies have different ideas of the State of the Art. The Grades of Automation (GoA), seen as the standard in much of the west, is disputed by the classification of Fully Automatic Operation (FAO) in the East, neither GoA or FAO are entirely compatable with the European Train Control System.

Railway classification is a hydra, find an issue with one classification and two more fill the gap. We do not present SACRED as a replacement for any State of the Art classification system, SACRED rather, is a methodology for the assurance of technology agnostic of classification. 

SACRED brings predictive assurance, eco–ego hazard framing, and measurable operating contexts, to assist in the understanding of a railway system, arguing that the best path towards safe autonomous rail, first begins with an in-depth understanding of the railway environment and the limitations present within a given system.