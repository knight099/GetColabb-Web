import './globals.css';

export const metadata = {
  title: 'getColabb — Brand × Creator partnerships, friction-free',
  description:
    'Where brands and creators build partnerships that actually perform. Smart matching, escrow payments, verified analytics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="aurora-bg"><span /></div>
        {children}
      </body>
    </html>
  );
}
