import Icon from './Icon';
import { PhoneFrame, ScreenMatch, ScreenEscrow, ScreenAnalytics } from './PhoneScreens';

export default function Hero() {
  return (
    <section id="top" style={{ paddingTop: 40, paddingBottom: 40 }}>
      <div className="container">
        <div className="grid grid-2" style={{ alignItems: 'center', gap: 48 }}>
          <div className="fade-up" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <span className="chip chip-accent" style={{ alignSelf: 'flex-start' }}>
              <Icon name="sparkles" size={12} color="var(--accent)" /> Now in private beta
            </span>
            <h1 className="display" style={{ fontSize: 'clamp(40px, 6vw, 76px)' }}>
              Partnerships,<br />
              <span className="display-italic grad-text">finally</span> friction-free.
            </h1>
            <p className="body" style={{ fontSize: 17, maxWidth: 520 }}>
              getColabb is the mobile workspace where brands and creators go from first pitch to final
              payout — smart matching, escrow payments, and verified analytics. No DMs. No spreadsheets.
              No chase-ups.
            </p>
            <div className="row" style={{ gap: 12, flexWrap: 'wrap' }}>
              <a href="#download" className="btn btn-accent">
                Download the app <Icon name="arrow-right" size={14} color="#fff" />
              </a>
              <a href="#how" className="btn btn-ghost">
                See how it works
              </a>
            </div>
            <div className="row" style={{ gap: 16, marginTop: 6, fontSize: 12, color: 'var(--ink-3)' }}>
              <span className="row" style={{ gap: 6 }}><Icon name="shield" size={12} /> 48k creators</span>
              <span className="row" style={{ gap: 6 }}><Icon name="briefcase" size={12} /> 2.1k brands</span>
              <span className="row" style={{ gap: 6 }}><Icon name="star" size={12} /> 4.9 on the App Store</span>
            </div>
          </div>

          {/* Floating phone stack */}
          <div style={{ position: 'relative', minHeight: 680, display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'absolute', left: '5%', top: 40, transform: 'rotate(-7deg)', zIndex: 1, opacity: .92 }}>
              <PhoneFrame style={{ width: 260, height: 540 }}>
                <ScreenAnalytics />
              </PhoneFrame>
            </div>
            <div style={{ position: 'absolute', right: '5%', top: 80, transform: 'rotate(6deg)', zIndex: 1, opacity: .92 }}>
              <PhoneFrame style={{ width: 260, height: 540 }}>
                <ScreenEscrow />
              </PhoneFrame>
            </div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <PhoneFrame>
                <ScreenMatch />
              </PhoneFrame>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
