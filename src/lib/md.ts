import { marked, type Tokens, type RendererObject } from 'marked'


marked.use({ async: false })

const renderer: RendererObject = {
  link: function ({ href, title, tokens }: Tokens.Link) {
    const text = this.parser!.parseInline(tokens)
    if (href?.startsWith('ref:') || href?.startsWith('step:') || href?.startsWith('cite:')) {
      return `<a href="${href}"${title ? ` title="${title}"` : ''}>${text}</a>`
    }
    return `<a href="${href ?? '#'}"${title ? ` title="${title}"` : ''} target="_blank" rel="noreferrer">${text}</a>`
  },
}

marked.use({ renderer })

export function renderInline(md: string): string {
  return marked.parseInline(md ?? '') as string
}

export function renderBlock(md: string): string {
  return marked.parse(md ?? '') as string
}
