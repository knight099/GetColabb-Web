import Wordmark from './Wordmark';

export default function Nav() {
  return (
    <nav className="nav glass">
      <a href="#top">
        <Wordmark size={30} />
      </a>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#how">How it works</a>
        <a href="#screens">Screens</a>
        <a href="#roles">For you</a>
      </div>
      <a href="#download" className="btn btn-accent" style={{ padding: '10px 18px', fontSize: 13 }}>
        Get the app
      </a>
    </nav>
  );
}
