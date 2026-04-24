import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer style={{ padding: '40px 0 64px' }}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'space-between', flexWrap: 'wrap', gap: 24 }}>
          <Wordmark size={26} tone="muted" />
          <div className="row" style={{ gap: 22, fontSize: 13, color: 'var(--ink-3)', flexWrap: 'wrap' }}>
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#roles">For creators</a>
            <a href="#roles">For brands</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>
            © {new Date().getFullYear()} getColabb · Made with care
          </div>
        </div>
      </div>
    </footer>
  );
}
