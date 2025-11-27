import { marked, type Tokens, type RendererObject } from 'marked'

marked.use({ async: false })

const renderer: RendererObject = {
  link: function ({ href, title, tokens }: Tokens.Link) {
    const text = this.parser!.parseInline(tokens)
    if (!href) return text

    if (href.startsWith('cite:')) {
      return `<sup><a href="${href}" class="cite-link"${
        title ? ` title="${title}"` : ''
      }>${text}</a></sup>`
    }

    // Your existing internal refs
    if (href.startsWith('ref:') || href.startsWith('step:')) {
      return `<a href="${href}"${title ? ` title="${title}"` : ''}>${text}</a>`
    }

    // External links: open in new tab
    return `<a href="${href}"${
      title ? ` title="${title}"` : ''
    } target="_blank" rel="noreferrer">${text}</a>`
  },
}

marked.use({ renderer })

export function renderInline(md: string): string {
  return marked.parseInline(md ?? '') as string
}

export function renderBlock(md: string): string {
  return marked.parse(md ?? '') as string
}
