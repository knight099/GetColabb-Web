import Icon from './Icon';

const roles = [
  {
    icon: 'sparkles',
    t: "For Creators",
    sub: 'Get booked by brands you actually love.',
    bullets: [
      'A verified portfolio that speaks for itself',
      'Transparent rate cards — no lowball DMs',
      'Escrow-backed payouts, fast',
      'Analytics you can share with one tap',
    ],
    cta: 'I\'m a creator',
  },
  {
    icon: 'briefcase',
    t: "For Brands",
    sub: 'Run high-ROI campaigns without the agency overhead.',
    bullets: [
      'Discover creators matched to your audience',
      'Team seats, approvals, and audit trails',
      'Escrow + deliverables tied together',
      'Live reach, engagement, and CPM dashboards',
    ],
    cta: 'I\'m a brand',
  },
];

export default function Roles() {
  return (
    <section id="roles">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow">Built for both sides</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: 10 }}>
            One app. Two <span className="display-italic grad-text">superpowers.</span>
          </h2>
        </div>
        <div className="grid grid-2">
          {roles.map((r) => (
            <div key={r.t} className="glass-card" style={{ padding: 32, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="ftile" style={{ width: 60, height: 60 }}>
                <Icon name={r.icon} size={28} color="var(--accent)" />
              </div>
              <div className="display" style={{ fontSize: 30 }}>{r.t}</div>
              <p className="body" style={{ margin: 0 }}>{r.sub}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {r.bullets.map((b) => (
                  <li key={b} className="row" style={{ gap: 10, fontSize: 14, color: 'var(--ink-2)' }}>
                    <span style={{
                      width: 22, height: 22, borderRadius: '50%',
                      background: 'var(--accent-soft)', color: 'var(--accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}><Icon name="check" size={12} color="var(--accent)" /></span>
                    {b}
                  </li>
                ))}
              </ul>
              <button className="btn btn-accent" style={{ alignSelf: 'flex-start' }}>
                {r.cta} <Icon name="arrow-right" size={14} color="#fff" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
