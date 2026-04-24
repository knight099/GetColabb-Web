import Icon from './Icon';

const steps = [
  { n: '01', t: 'Create your profile', d: 'Creators link socials via OAuth for verified stats. Brands set up team seats and brand kit in minutes.' },
  { n: '02', t: 'Match & message', d: 'Brands browse ranked creators by audience fit. Creators discover briefs matched to their niche.' },
  { n: '03', t: 'Sign the brief', d: 'Scope, deliverables, timeline, and rate are signed together. Funds lock in escrow the moment both agree.' },
  { n: '04', t: 'Post & get paid', d: 'Creator delivers, brand approves, payout releases automatically. Analytics roll in live — done.' },
];

export default function HowItWorks() {
  return (
    <section id="how">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow">How it works</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: 10 }}>
            From pitch to <span className="display-italic grad-text">payout,</span> in four taps.
          </h2>
        </div>
        <div className="grid grid-2">
          {steps.map((s, i) => (
            <div key={s.n} className="glass-card" style={{ padding: 28, display: 'flex', gap: 20 }}>
              <div style={{
                flexShrink: 0, width: 60, height: 60, borderRadius: 20,
                background: 'linear-gradient(135deg,var(--accent),var(--accent-2))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 600,
                boxShadow: '0 8px 20px rgba(88,71,232,.35)',
              }}>{s.n}</div>
              <div>
                <div className="display" style={{ fontSize: 22 }}>{s.t}</div>
                <p className="body" style={{ marginTop: 6 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
