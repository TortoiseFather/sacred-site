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
            <p>Autonomous railway systems are moving rapidly from concept to deployment. Advances in machine learning (ML), computer vision, and digital signalling mean that trains are increasingly capable of making decisions without direct human control. These developments promise safer, more efficient, and more sustainable transport. At the same time, they raise important questions: How can safety be assured when autonomy is introduced? Which existing standards apply? And what metrics can we use to judge whether a system is truly safe? <i>How can safety be assured when autonomy is introduced? Which existing standards apply? And what metrics can we use to judge whether a system is truly safe?</i></p>
            <p>Traditional railway safety practice is built around retrospective evidence: incident records, accident precursors, and historical failure rates [2,3]. These provide valuable benchmarks, but they are poorly suited to autonomy, where rare but highly critical failure modes may emerge in ways that past experience cannot capture. The challenge is therefore not only one of reliability, but of systematically identifying and reasoning about the interactions between the autonomous system, its environment, and the ecosystem in which it operates [14,15].</p>
            <p>We introduce the Safe Autonomy of Complex Railway Environments within a Digital space (SACRED) methodology. SACRED provides a structured, iterative process for:</p>
             <ul>
                <li>Systematically integrating safety assurance into the development of autonomous railway systems</li>
                <li>Generating a Safe Operating Concept (SOC) that defines the conditions under which the system can safely operate[16]</li>
                <li>generating an Operational Domain Model (ODM) that captures how the system perceives and interacts with its environment [20]</li>
                <li>Establishing measurable safety attributes that can be used to justify, with evidence, the acceptability of autonomous operation within a defined ODM[17,18]</li>
            </ul> 
            <h2>About SACRED</h2>
            <p>SACRED is a seven-step, ecosystem-aware safety methodology addressing the uncertainty present within the railway environment [1]</p>
             <ol>
                <li><b>Concept Assurance</b> – moving from abstract vision to defined variables, scenario definitions, and an initial ODM.</li>
                <li><b>Hazard Identification</b> – Identifying hazards from both the ego-vehicle (the train) and the ecosystem (infrastructure, environment, external actors).</li>
                <li><b>Requirements Capture and Assurance</b> – Validating hazards and formulating requirements by consulting professionals[13], reviewing incident data[15], and aligning with regulations[5,6].</li>
                <li><b>Metric Generation</b> – Determining hazard criticality and translating requirements into measurable, checkable metrics[19].</li>
                <li><b>Failure Management</b> Defining Trigger–Response–Assurance–Process cycles that prescribe how failures are detected, contained, and managed[16,18].</li>
                <li><b>Autonomous System Design Assurance</b> - Evaluating state-of-the-art technologies against the metrics and procedures, while recognising that every solution (vision, fusion, communication) introduces new dependencies [12,13].</li>
                <li><b>Safe Operating Context (SOC)</b>– Producing a dynamic, auditable set of conditions that constrain operation to safe bounds, linking ego performance to ecosystem responsibilities.</li>
            </ol> 
            <h2>Whole System Perspective</h2>
            <p>A distinctive feature of SACRED is its explicit distinction between ecosystem hazards (e.g., infrastructure faults, signalling errors, trespass, maintenance regimes) and ego-vehicle hazards (e.g., sensor failures, braking errors, misclassification). This ecoego split ensures that safety analysis does not stop at the train itself, but encompasses the wider railway system-of-systems.</p>
            <p>Inspired by the safety methodology AMLAS[1] and SACE[16] SACRED is not a one-pass process. Each stage can trigger iteration: new hazards may reshape the ODM, failure analyses may revise requirements, and emerging technologies may demand updates to the SOC. Each step concludes with artefacts that both support development and provide evidence for a safety case.</p>
            <h2>Towards Safe Autonomous Rail</h2>
            <p>SACRED complements existing standards rather than replacing them. Where traditional railway metrics focus on reliability and retrospective evidence, SACRED brings predictive assurance, eco–ego hazard framing, and measurable operating contexts. By combining established safety practices with forward-looking autonomy concepts, SACRED enables stakeholders — from developers to regulators — to build justified confidence in autonomous railway systems.</p>
            <h2>Bibliography</h2>
            <ul>
                    <li>[1] Guidance on the Assurance of Machine Learning in Autonomous Systems (AMLAS) Richard Hawkins, Colin Paterson, Chiara Picardi, Yan Jia, Radu Calinescu, Ibrahim Habli</li>
                    <li>[2] Kyriakidis, M., Hirsch, R., Majumdar, A. <i>Metro railway safety: An analysis of accident precursors</i>. Safety Science, 2012.</li>
                    <li>[3] SPARK, RSSB. <i>Measuring Safety Performance</i>. 2019.</li>
                    <li>[5] IEC 62290-1. <i>Railway applications – Urban guided transport management and command/control systems</i>. 2006.</li>
                    <li>[6] Delorme, F. <i>SNCF Rail Safety and the Fourth Industrial Revolution</i>. 2019.</li>
                    <li>[12] Berger, I., Rieke, R., Kolomeets, M., Chechulin, A., Kotenko, I. <i>Comparative Study of ML Methods for In-Vehicle Intrusion Detection</i>. Springer, 2019.</li>
                    <li>[13] Ribeiro, Q., Ribeiro, M., Castro, J. <i>Requirements Engineering for Autonomous Vehicles: A Systematic Literature Review</i>. ACM, 2022.</li>
                    <li>[14] Lovell, B.E. <i>A taxonomy of types of uncertainty</i>. Portland State University, 1995.</li>
                    <li>[15] Burton, S., Herd, B. <i>Addressing uncertainty in the safety assurance of ML</i>. Frontiers in Computer Science, 2023.</li>
                    <li>[16] Hawkins, R., Gauerhof, L., Rivett, R., Smith, S., Laher, S., Rasmus, A., Banks, A. <i>Guidance on the Safety Assurance of Autonomous Systems in Complex Environments (SACE)</i>. Assuring Autonomy International Programme, 2022.</li>
                    <li>[17] Fenelon, P., McDermid, J.A., Nicolson, M., Pumfrey, D.J. <i>Towards integrated safety analysis and design</i>. ACM SIGAPP Applied Computing Review, 1994.</li>
                    <li>[18] Kotek, L., Tabas, M. <i>HAZOP Study with Qualitative Risk Analysis for Prioritization of Corrective and Preventive Actions</i>. Procedia Engineering, 2012.</li>
                    <li>[19] BS EN 13803:2017. <i>Railway applications – Track – Track alignment design parameters</i>. British Standards Institution.</li>
                    <li>[20] Tonk, A., Boussif, A., Beugin, J., Collart-Dutilleul, S. <i>Towards a specified operational design domain for a safe remote driving of trains</i>. 2021.</li>
            </ul> 
          </article>
        </section>
      </div>
    </Layout>
  )
}