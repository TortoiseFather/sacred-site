import Layout from '../components/Layout'
import { marked } from 'marked'

// Import raw markdown as text (Vite supports this)
import contactMd from '../content/contact.md?raw'

export default function Contact() {
  return (
    <Layout title="Contact">
      <article className="markdown bio">
        <div
          dangerouslySetInnerHTML={{
            __html: marked.parse(contactMd)
          }}
        />
      </article>
    </Layout>
  )
}
