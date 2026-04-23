import Layout from '../components/Layout'

export default function Supplemental() {
  return (
    <Layout title="Supplemental Material">
      <div className="container">
        <h1></h1>
        <p className="small">
          Additional documents, datasets, and supporting materials for the SACRED methodology.
        </p>

        <ul className="supp-list">
          <li>
            <a href="/files/etcs.pdf" target="_blank" rel="noreferrer">
              Full PhD Thesis. (Currently dummy until submission.)
            </a>
          </li>
          <li>
            <a href="/files/Swalwell.pdf" target="_blank" rel="noreferrer">
              A historical account of Swalwell Junction. (PDF)
            </a>
          </li>

          <li>
            <a href="/files/qna.pdf" target="_blank" rel="noreferrer">
              The results of the questionnaire as well as a loose transcript of some interviews. (PDF)
            </a>
          </li>
          <li>
            <p>
              Note: Not all participants wished for extensive notes to be taken during interview, furthermore, notes were deleted where interview swayed extensively off topic from the specified conversation, as noted within the ethical approval form.
            </p>
          </li>
          <li>
            <a href="/files/rssb.pdf" target="_blank" rel="noreferrer">
              The output of the RSSB Safety Tool. (PDF)
            </a>
          </li>
          <li>
            <a href="/files/etcs.pdf" target="_blank" rel="noreferrer">
              An analysis on ETCS usage within the UK. (PDF)
            </a>
          </li>
        </ul>
      </div>
    </Layout>
  )
}