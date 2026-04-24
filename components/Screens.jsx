import {
  PhoneFrame, ScreenSplash, ScreenMatch, ScreenEscrow,
  ScreenAnalytics, ScreenChat, ScreenProfile,
} from './PhoneScreens';

const screens = [
  { C: ScreenSplash,    label: 'Welcome',   sub: 'A soft landing' },
  { C: ScreenMatch,     label: 'Discover',  sub: 'Ranked by audience fit' },
  { C: ScreenEscrow,    label: 'Escrow',    sub: 'Funds locked, auto-release' },
  { C: ScreenAnalytics, label: 'Insights',  sub: 'Verified at the source' },
  { C: ScreenChat,      label: 'Briefs',    sub: 'One shared thread' },
  { C: ScreenProfile,   label: 'Profile',   sub: 'Your verified portfolio' },
];

export default function Screens() {
  return (
    <section id="screens">
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 48 }}>
          <div className="eyebrow">Inside the app</div>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', marginTop: 10 }}>
            A quick tour of the <span className="display-italic grad-text">screens.</span>
          </h2>
          <p className="body" style={{ marginTop: 10 }}>
            Built for thumbs — glassy surfaces, quiet gradients, serious utility.
          </p>
        </div>

        <div style={{
          display: 'grid', gap: 40,
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          justifyItems: 'center',
        }}>
          {screens.map((s, i) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
              <PhoneFrame>
                <s.C />
              </PhoneFrame>
              <div style={{ textAlign: 'center' }}>
                <div className="step-num">0{i + 1}</div>
                <div className="display" style={{ fontSize: 20, marginTop: 4 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 2 }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
