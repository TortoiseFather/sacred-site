import { useState } from 'react'
import Layout from '../components/Layout'
import SvgHotspots from '../components/SvgHotspots'
import type { Secondary } from '../components/SvgHotspots'
import StepNav from '../components/StepNav'

export default function Home() {
  const [secondary, setSecondary] = useState<Secondary | null>(null)

  return (
    <Layout>
      <div className="shell">
        <aside className="sidebar">
          <StepNav />
        </aside>

        <section className="content">
          <SvgHotspots onSecondarySelect={setSecondary} />
          {secondary && (
            <div className="info-panel card" role="region" aria-live="polite">
              <div className="badge">Detail</div>
              <h3>{secondary.label}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>
  {secondary.content}
</p>
            </div>
          )}
          <article className="bio">
            <h1> Introduction</h1>
            <p>Autonomous railway systems are moving rapidly from concept to deployment. Advances in machine learning (ML), computer vision, and digital signalling mean that trains are increasingly capable of making decisions without direct human control. These developments promise safer, more efficient, and more sustainable transport. At the same time, they raise important questions:</p>
              <ul>
              <li>How can safety be assured when considering autonomy?</li>
              <li>How do existing safety standards apply regarding autonomy?</li>
              <li>To what degree can we judge safety?</li>
              <li>What exactly do people mean when they say 'autonomy'?</li>
              </ul>
              <p>Traditional railway safety practice is built around retrospection, incident reports, accident precursors and historical failure rates [2,3]. Undeniably, this historical perspective provides valuable benchmarks, but when considering autonomy, where rare but highly critical failure modes may emerge in ways previously undiscovered? It is difficult to predict autonomous flaws using analogue operation as a milestick.</p>
              <p>Instead, we tackle this uncertainty by&nbsp;systematically identifying and reasoning about the interactions between the autonomous system, its environment, and the ecosystem in which it operates [14,15].</p>
              <p>We introduce the Safe Autonomy of Complex Railway Environments within a Digital space (SACRED) methodology. SACRED provides a structured, iterative process for:</p>
              <ul>
              <li>Systematically integrating safety assurance into the development of autonomous railway systems</li>
              <li>Generating a Safe Operating Concept (SOC) that defines the conditions under which the system can safely operate[16]</li>
              <li>Generating an Operational Domain Model (ODM) that captures how the system perceives and interacts with its environment [20]</li>
              <li>Establishing measurable safety attributes that can be used to justify, with evidence, the acceptability of autonomous operation within a defined ODM[17,18]</li>
              </ul>
              <h2>About SACRED:</h2>
              <p>SACRED is a seven-step, ecosystem-aware safety methodology addressing the uncertainty present within the railway environment [1]</p>
              <ol>
              <li><strong>Concept Assurance</strong> &ndash; moving from abstract vision to defined variables, scenario definitions, and an initial ODM.</li>
              <li><strong>Hazard Identification</strong> &ndash; Identifying hazards from both the ego-vehicle (the train) and the ecosystem (infrastructure, environment, external actors).</li>
              <li><strong>Requirements Capture and Assurance</strong> &ndash; Validating hazards and formulating requirements by consulting professionals[13], reviewing incident data[15], and aligning with regulations[5,6].</li>
              <li><strong>Metric Generation</strong> &ndash; Determining hazard criticality and translating requirements into measurable, checkable metrics[19].</li>
              <li><strong>Failure Management</strong> Defining Trigger&ndash;Response&ndash;Assurance&ndash;Process cycles that prescribe how failures are detected, contained, and managed[16,18].</li>
              <li><strong>Autonomous System Design Assurance</strong> - Evaluating state-of-the-art technologies against the metrics and procedures, while recognising that every solution (vision, fusion, communication) introduces new dependencies [12,13].</li>
              <li><strong>Safe Operating Context (SOC)</strong>&ndash; Producing a dynamic, auditable set of conditions that constrain operation to safe bounds, linking ego performance to ecosystem responsibilities.</li>
              </ol>
              <p>Put simply, SACRED describes how to get from A to B by first describing A, describing B and then describing everything in-between, exploring the possible risks, mitigation strategies and designing acceptable risk metrics.</p>
              <h2>Whole System Perspective</h2>
              <p>As automation transforms industries, there is a risk that the focus on technological innovation is placing the proverbial cart before the horse, technologies are developed before the understanding of the immediate and societal implications of the technology are understood.&nbsp;</p>
              <p>A distinctive feature of SACRED is its explicit distinction between ecosystem hazards (e.g., infrastructure faults, signalling errors, trespass, maintenance regimes) and ego-vehicle hazards (e.g., sensor failures, braking errors, misclassification). This ecoego split ensures that safety analysis does not stop at the train itself, but encompasses the wider railway system-of-systems.</p>
              <p>Inspired by the safety methodology AMLAS[1] and SACE[16] SACRED is not a one-pass process. Each stage can trigger iteration: new hazards may reshape the ODM, failure analyses may revise requirements, and emerging technologies may demand updates to the SOC. Each step concludes with artefacts that both support development and provide evidence for a safety case.</p>
              <h2>Towards Safe Autonomous Rail</h2>
              <p>Contemporary research has struggled to properly define terms and classifications for railway automation. Different companies have different ideas of the State of the Art. The Grades of Automation (GoA), seen as the standard in much of the west, is disputed by the classification of Fully Automatic Operation (FAO) in the East, neither GoA or FAO are entirely compatable with the&nbsp;<span data-huuid="15837008515366395956">European Train Control System.</span></p>
              <p>Railway classification is a hydra, find an issue with one classification and two more fill the gap. We do not present SACRED as a replacement for any State of the Art classification system, SACRED rather, is a methodology for the assurance of technology agnostic of classification.&nbsp;</p>
              <p>SACRED brings predictive assurance, eco&ndash;ego hazard framing, and measurable operating contexts, to assist in the understanding of a railway system, arguing that the best path towards safe autonomous rail, first begins with an in-depth understanding of the railway environment and the limitations present within a given system.</p>
              <h2>Bibliography</h2>
              <ul>
              <li>[1] Guidance on the Assurance of Machine Learning in Autonomous Systems (AMLAS) Richard Hawkins, Colin Paterson, Chiara Picardi, Yan Jia, Radu Calinescu, Ibrahim Habli</li>
              <li>[2] Kyriakidis, M., Hirsch, R., Majumdar, A. <em>Metro railway safety: An analysis of accident precursors</em>. Safety Science, 2012.</li>
              <li>[3] SPARK, RSSB. <em>Measuring Safety Performance</em>. 2019.</li>
              <li>[5] IEC 62290-1. <em>Railway applications &ndash; Urban guided transport management and command/control systems</em>. 2006.</li>
              <li>[6] Delorme, F. <em>SNCF Rail Safety and the Fourth Industrial Revolution</em>. 2019.</li>
              <li>[12] Berger, I., Rieke, R., Kolomeets, M., Chechulin, A., Kotenko, I. <em>Comparative Study of ML Methods for In-Vehicle Intrusion Detection</em>. Springer, 2019.</li>
              <li>[13] Ribeiro, Q., Ribeiro, M., Castro, J. <em>Requirements Engineering for Autonomous Vehicles: A Systematic Literature Review</em>. ACM, 2022.</li>
              <li>[14] Lovell, B.E. <em>A taxonomy of types of uncertainty</em>. Portland State University, 1995.</li>
              <li>[15] Burton, S., Herd, B. <em>Addressing uncertainty in the safety assurance of ML</em>. Frontiers in Computer Science, 2023.</li>
              <li>[16] Hawkins, R., Gauerhof, L., Rivett, R., Smith, S., Laher, S., Rasmus, A., Banks, A. <em>Guidance on the Safety Assurance of Autonomous Systems in Complex Environments (SACE)</em>. Assuring Autonomy International Programme, 2022.</li>
              <li>[17] Fenelon, P., McDermid, J.A., Nicolson, M., Pumfrey, D.J. <em>Towards integrated safety analysis and design</em>. ACM SIGAPP Applied Computing Review, 1994.</li>
              <li>[18] Kotek, L., Tabas, M. <em>HAZOP Study with Qualitative Risk Analysis for Prioritization of Corrective and Preventive Actions</em>. Procedia Engineering, 2012.</li>
              <li>[19] BS EN 13803:2017. <em>Railway applications &ndash; Track &ndash; Track alignment design parameters</em>. British Standards Institution.</li>
              <li>[20] Tonk, A., Boussif, A., Beugin, J., Collart-Dutilleul, S. <em>Towards a specified operational design domain for a safe remote driving of trains</em>. 2021.</li>
              </ul>
          </article>
        </section>
      </div>
    </Layout>
  )
}