const stats = [
  { k: '48k', v: 'Verified creators' },
  { k: '2.1k', v: 'Brands onboard' },
  { k: '$4.1M', v: 'Paid out via escrow' },
  { k: '4.8×', v: 'Avg. campaign ROI' },
];

const quotes = [
  { q: 'We replaced three tools and one freelancer manager with getColabb. Briefs land, payouts just happen.', a: 'Nina, Brand Lead · Lumo' },
  { q: 'I finally get paid on time, with receipts. The verified stats closed deals I used to lose.', a: 'Aria, Creator · 240k' },
];

export default function Trust() {
  return (
    <section>
      <div className="container">
        <div className="glass-card" style={{ padding: 40 }}>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {stats.map((s) => (
              <div key={s.v}>
                <div className="display grad-text" style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>{s.k}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{s.v}</div>
              </div>
            ))}
          </div>
          <div style={{ height: 1, background: 'var(--glass-border)', margin: '32px 0', opacity: .6 }} />
          <div className="grid grid-2">
            {quotes.map((q) => (
              <blockquote key={q.a} style={{ margin: 0 }}>
                <div className="display" style={{ fontSize: 22, lineHeight: 1.3 }}>&ldquo;{q.q}&rdquo;</div>
                <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-3)' }}>— {q.a}</div>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
