export default function StepDiagram({ src, alt }: { src?: string; alt?: string }) {
if (!src) return null
return (
<div className="diagram-wrap" style={{ marginTop: 16 }}>
<img src={src} alt={alt ?? 'Step diagram'} />
</div>
)
}