// src/routes/Papers.tsx
import Layout from '../components/Layout'

export default function Papers() {
  return (
    <Layout title="Publications.">
      <p>What follows is a list of papers published as part of the SACRED methodology research project.</p>
      <p>These papers showcase the SACRED methodology at different points of development and do not nesessarily represent the final product.</p>
      <p>The papers are shown in order of publication with a short description of the position of the project at time of publication.</p>
      <ul>
        <li><a href="https://link.springer.com/chapter/10.1007/978-3-031-05814-1_13">Investigating Human Error Within GoA-2 Metro Lines</a></li>
        <p>An investigative literature review, analysing the concept of failure within semi-autonomous railway systems, published May 2022 at  Reliability, Safety, and Security of Railway Systems 2022, this paper represents an initial overview of railway automation and layed the groundwork for the development of a railway-centric safety methodology.</p>
        <li><a href="https://arxiv.org/abs/2403.12114">Safety Analysis of Autonomous Railway Systems: An Introduction to the SACRED Methodology</a></li>
        <p>Published as a student position paper at the European Dependable Computing Conference - 2024, the initial SACRED paper details the initial concept for SACRED, detailing an initial overview of the methodology which portrays railway as a cyberphysical system, foucing on the case study of the S-bahn Berlin. A majority of this paper is outdated compared to SACRED as is present within this website, however it still discusses the foundations of the methodology to a satisfactory degree.</p>
        <li><a href="https://ieeexplore.ieee.org/abstract/document/11107382">Insights from Railway Professionals: Rethinking Railway assumptions regarding safety and autonomy</a></li>
        <p>Published as a full paper at the European Dependable Computing Conference - 2025, this paper shows an industry perspective regarding the state of the art technologies within rail, as well as industry perspectives on the SACRED methodology as a whole. This paper marks the shift from rail as a cyberphysical system, to railway as an ego-vehicle within an ecosystem.</p>
        <li><a href="https://arxiv.org/abs/2510.06229">Milestone Determination for Autonomous Railway Operation</a></li>
        <p>Published at the International Conference on Advanced Railways and Transportation - 2025, this paper discusses the process of implementation of the SACRED methodology, discussing how to create an Operational Domain Model and how to represent the system in the form of 'Milestones.'</p>
      </ul>
      <p>Additionally, outside of work on the SACRED methodology, I have published work in related fields. What follows is a list of work I have participated in:</p>
      <ul>
        <li><a href="https://www.mdpi.com/1424-8220/23/18/7930">EgoActive: Integrated wireless wearable sensors for capturing infant egocentric auditory–visual statistics and autonomic nervous system function ‘in the wild’</a></li>
        <p>As part of the WellcomeLEAP 1kd project, I developed a standalone Android Application for the purposes of information capturing, the device captured data from a third-party device and synchronised it between devices, making it ready for processing.</p>
        <li><a href="https://github.com/Supportive-IDE/pyguide">PyGuide: Supportive IDE.</a></li>
        <p>Translating programming error messages from technobabble to plain English for the purposes of teaching programming to newcomers, I participated in the rollout of the PyGuide IDE, soft-launching the software in highschools and with junior researchers.</p>
      </ul>
    </Layout>
  )
}
