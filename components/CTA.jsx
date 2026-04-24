import Icon from './Icon';
import BrandMark from './BrandMark';

export default function CTA() {
  return (
    <section id="download">
      <div className="container">
        <div className="glass-card" style={{
          padding: 'clamp(36px, 6vw, 72px)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 24,
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: 'radial-gradient(600px 300px at 50% 0%, rgba(143,125,255,.3), transparent 60%), radial-gradient(500px 300px at 50% 100%, rgba(143,212,193,.3), transparent 60%)',
          }} />
          <BrandMark size={64} />
          <h2 className="display" style={{ fontSize: 'clamp(32px, 5vw, 60px)', maxWidth: 720 }}>
            Your next collab is <span className="display-italic grad-text">one tap</span> away.
          </h2>
          <p className="body" style={{ maxWidth: 520 }}>
            Download getColabb and spin up your first campaign in minutes. Free to join. Pay only when you partner.
          </p>
          <div className="row" style={{ gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <a className="btn btn-primary" href="#">
              <Icon name="download" size={14} color="var(--bg)" /> App Store
            </a>
            <a className="btn btn-ghost" href="#">
              <Icon name="download" size={14} /> Google Play
            </a>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>
            Or join the waitlist — we ship invites every Friday.
          </div>
        </div>
      </div>
    </section>
  );
}
