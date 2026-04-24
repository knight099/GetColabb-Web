import Icon from './Icon';
import BrandMark from './BrandMark';

/* A set of stylized in-app screens rendered as React, framed inside a .phone */

export function PhoneFrame({ children, style }) {
  return (
    <div className="phone" style={style}>
      <div className="phone-inner">
        <div className="phone-notch" />
        {children}
      </div>
    </div>
  );
}

const avatarColors = ['#8f7dff', '#8fd4c1', '#c4b0ff', '#7dd1f0', '#ffb3a3'];
function Avatar({ i = 0, size = 34, letter }) {
  return (
    <div
      style={{
        width: size, height: size, borderRadius: '50%',
        background: `linear-gradient(135deg, ${avatarColors[i % avatarColors.length]}, rgba(255,255,255,.5))`,
        border: '1px solid var(--glass-border)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#fff', fontWeight: 700, fontSize: size * 0.42, flexShrink: 0,
      }}
    >{letter}</div>
  );
}

/* 1 · Splash / Welcome */
export function ScreenSplash() {
  return (
    <div style={{ padding: '72px 24px 24px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 18 }}>
      <BrandMark size={84} />
      <div className="eyebrow">v 1.0 · Welcome</div>
      <h1 className="display" style={{ fontSize: 44 }}>
        get<span className="display-italic grad-text">Colabb</span>
      </h1>
      <p className="body" style={{ fontSize: 13, maxWidth: 220 }}>
        Where brands and creators build partnerships that actually perform.
      </p>
      <button className="btn btn-accent" style={{ marginTop: 8, width: '100%' }}>
        Get started <Icon name="arrow-right" size={14} color="#fff" />
      </button>
    </div>
  );
}

/* 2 · Smart matching */
export function ScreenMatch() {
  const rows = [
    { n: 'Rhea · Food', m: 96, i: 0, l: 'R' },
    { n: 'Kai · Tech', m: 89, i: 1, l: 'K' },
    { n: 'Mira · Wellness', m: 82, i: 2, l: 'M' },
    { n: 'Sol · Fashion', m: 78, i: 3, l: 'S' },
  ];
  return (
    <div style={{ padding: '64px 18px 18px', height: '100%', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div>
        <div className="eyebrow">Discover</div>
        <h3 className="display" style={{ fontSize: 22, marginTop: 4 }}>Top matches for <span className="display-italic" style={{ color: 'var(--accent)' }}>Lumo Skincare</span></h3>
      </div>
      <div className="glass-card" style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <span className="eyebrow">Ranking audience fit</span>
          <Icon name="sparkles" size={14} color="var(--accent)" />
        </div>
        {rows.map((x, idx) => (
          <div key={idx} className="row" style={{ gap: 10, padding: 8, borderRadius: 12, background: idx === 0 ? 'var(--accent-soft)' : 'transparent' }}>
            <Avatar i={x.i} letter={x.l} size={32} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontWeight: 600, fontSize: 12, color: 'var(--ink)' }}>{x.n}</div>
              <div style={{ display: 'flex', gap: 4, marginTop: 3, alignItems: 'center' }}>
                <div style={{ height: 4, flex: 1, background: 'rgba(0,0,0,.08)', borderRadius: 4, overflow: 'hidden' }}>
                  <div style={{ width: `${x.m}%`, height: '100%', background: 'linear-gradient(90deg,var(--accent),var(--accent-2))' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 700, color: 'var(--accent)' }}>{x.m}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 3 · Escrow / Payment */
export function ScreenEscrow() {
  return (
    <div style={{ padding: '64px 18px 18px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        <div className="eyebrow">Campaign #0412</div>
        <h3 className="display" style={{ fontSize: 22, marginTop: 4 }}>Escrow <span className="display-italic" style={{ color: 'var(--accent)' }}>Held</span></h3>
      </div>
      <div className="glass-card" style={{ padding: 18, textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: 6 }}>Amount locked</div>
        <div className="display" style={{ fontSize: 40 }}>$2,400<span style={{ fontSize: 18, color: 'var(--ink-3)' }}>.00</span></div>
        <div style={{ fontSize: 10, color: 'var(--ink-3)', marginTop: 4, fontFamily: 'var(--font-mono)', letterSpacing: '.12em' }}>AUTO-RELEASE · ON DELIVERY</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
          {['Brief', 'Draft', 'Post', 'Paid'].map((s, i) => (
            <div key={s} style={{ flex: 1, textAlign: 'center' }}>
              <div style={{
                width: 22, height: 22, borderRadius: '50%', margin: '0 auto 4px',
                background: i <= 1 ? 'linear-gradient(135deg,var(--accent),var(--accent-2))' : 'rgba(0,0,0,.08)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 700,
              }}>{i <= 1 ? '✓' : i + 1}</div>
              <div style={{ fontSize: 9, color: 'var(--ink-3)' }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card" style={{ padding: 12 }}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div className="row" style={{ gap: 10 }}>
            <Avatar i={1} letter="A" size={30} />
            <div>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Aria Chen</div>
              <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>Creator · accepted</div>
            </div>
          </div>
          <span className="chip chip-accent" style={{ fontSize: 10 }}>Signed</span>
        </div>
      </div>
    </div>
  );
}

/* 4 · Analytics */
export function ScreenAnalytics() {
  return (
    <div style={{ padding: '64px 18px 18px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div>
        <div className="eyebrow">Last 30 days</div>
        <h3 className="display" style={{ fontSize: 22, marginTop: 4 }}>ROI <span className="display-italic grad-text">4.8×</span></h3>
      </div>
      <div className="glass-card" style={{ padding: 16 }}>
        <svg viewBox="0 0 200 70" style={{ width: '100%', height: 80 }}>
          <defs>
            <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#5847e8" stopOpacity=".45" />
              <stop offset="1" stopColor="#5847e8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0,55 L20,48 L40,50 L60,38 L80,30 L100,35 L120,22 L140,15 L160,18 L180,8 L200,12 L200,70 L0,70Z" fill="url(#g1)" />
          <path d="M0,55 L20,48 L40,50 L60,38 L80,30 L100,35 L120,22 L140,15 L160,18 L180,8 L200,12" fill="none" stroke="#5847e8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="row" style={{ justifyContent: 'space-between', marginTop: 10 }}>
          {[['REACH', '1.24M'], ['ENG %', '6.8'], ['CPM', '$3.12']].map(([k, v]) => (
            <div key={k}>
              <div style={{ fontSize: 9, color: 'var(--ink-3)', fontFamily: 'var(--font-mono)', letterSpacing: '.14em' }}>{k}</div>
              <div style={{ fontWeight: 700, fontSize: 13, color: 'var(--ink)' }}>{v}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="glass-card" style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
        <div className="ftile" style={{ width: 36, height: 36 }}>
          <Icon name="shield" size={18} color="var(--accent)" />
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Verified at the source</div>
          <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>OAuth — Instagram · YouTube · TikTok</div>
        </div>
      </div>
    </div>
  );
}

/* 5 · Chat / Briefs */
export function ScreenChat() {
  const msgs = [
    { me: false, t: 'Love the brief! Can we push post date to Fri?', i: 1, n: 'Aria' },
    { me: true, t: 'Works for us — moved deliverable to Fri 5pm.' },
    { me: false, t: 'Perfect. Draft up tomorrow ✨', i: 1, n: 'Aria' },
  ];
  return (
    <div style={{ padding: '64px 18px 18px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div className="row" style={{ gap: 10 }}>
          <Avatar i={1} letter="A" size={34} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 13 }}>Aria Chen</div>
            <div style={{ fontSize: 10, color: 'var(--accent)' }}>● online</div>
          </div>
        </div>
        <span className="chip chip-accent" style={{ fontSize: 10 }}>Brief #0412</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ alignSelf: m.me ? 'flex-end' : 'flex-start', maxWidth: '80%' }}>
            <div className={m.me ? '' : 'glass'} style={{
              padding: '10px 12px', borderRadius: 16,
              background: m.me ? 'linear-gradient(135deg,var(--accent),var(--accent-2))' : undefined,
              color: m.me ? '#fff' : 'var(--ink)',
              fontSize: 12, lineHeight: 1.4,
              borderBottomRightRadius: m.me ? 4 : 16,
              borderBottomLeftRadius: m.me ? 16 : 4,
            }}>{m.t}</div>
          </div>
        ))}
      </div>
      <div className="glass" style={{ padding: '10px 14px', borderRadius: 100, fontSize: 12, color: 'var(--ink-3)' }}>
        Message Aria…
      </div>
    </div>
  );
}

/* 6 · Profile */
export function ScreenProfile() {
  return (
    <div style={{ padding: '64px 18px 18px', height: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <Avatar i={0} letter="A" size={74} />
        <div style={{ textAlign: 'center' }}>
          <div className="display" style={{ fontSize: 20 }}>Aria Chen</div>
          <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Beauty · SF · 240k IG</div>
        </div>
        <div className="row" style={{ gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          <span className="chip chip-accent" style={{ fontSize: 10 }}>Verified</span>
          <span className="chip" style={{ fontSize: 10 }}>Top 5% match</span>
          <span className="chip" style={{ fontSize: 10 }}>5.0 ★</span>
        </div>
      </div>
      <div className="grid grid-3" style={{ gap: 6 }}>
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <div key={i} style={{
            aspectRatio: '1/1', borderRadius: 12,
            background: `linear-gradient(135deg, ${avatarColors[i % avatarColors.length]}, ${avatarColors[(i + 1) % avatarColors.length]})`,
            border: '1px solid var(--glass-border)', opacity: .85,
          }} />
        ))}
      </div>
      <button className="btn btn-accent" style={{ width: '100%' }}>
        Invite to campaign
      </button>
    </div>
  );
}
