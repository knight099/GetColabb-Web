import Icon from './Icon';

const items = [
  { icon: 'sparkles', t: 'Smart matching', d: 'Our model reads audience overlap, engagement quality, and brand fit — then ranks creators you\'d actually pick.' },
  { icon: 'lock',     t: 'Escrow payments', d: 'Funds lock when a deal is signed. Creators post, brands approve, payout releases — no chasing invoices.' },
  { icon: 'chart',    t: 'Verified analytics', d: 'OAuth-connected platforms feed live reach, engagement, and audience demographics. No screenshots.' },
  { icon: 'bolt',     t: 'Briefs & drafts', d: 'Shape campaign briefs, review drafts, and resolve revisions in one shared thread — history kept.' },
  { icon: 'shield',   t: 'Trust & safety', d: 'Every creator and brand is ID-verified. Disputes are mediated with signed delivery evidence.' },
  { icon: 'users',    t: 'Team seats', d: 'Loop in marketers, managers, and approvers. Role-based access with activity audit on every change.' },
];

export default function Features() {
  return (
    <section id="features">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow">What you get</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: 10 }}>
            Six tools, <span className="display-italic grad-text">one workspace.</span>
          </h2>
          <p className="body" style={{ marginTop: 10 }}>
            Everything you need to run a creator campaign end-to-end — no tab switching, no workarounds.
          </p>
        </div>
        <div className="grid grid-3">
          {items.map((f) => (
            <div key={f.t} className="glass-card" style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div className="ftile">
                <Icon name={f.icon} size={22} color="var(--accent)" />
              </div>
              <div className="display" style={{ fontSize: 22 }}>{f.t}</div>
              <p className="body" style={{ fontSize: 14, margin: 0 }}>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
