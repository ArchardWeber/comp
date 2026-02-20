import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import AnimatedBackground from './components/AnimatedBackground';

export const metadata = {
  title: 'PT Qiprah Multi Service | Attitude for Success',
  description: 'PT Qiprah Multi Service - Perusahaan penyedia jasa alih daya (outsourcing) terpercaya sejak 2016. Layanan kebersihan, keamanan, supporting service, pemborongan, parkir, dan maintenance building.',
  keywords: 'outsourcing, alih daya, cleaning service, security, maintenance, semarang, qms',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <AnimatedBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
        <WhatsAppFloat />
      </body>
    </html>
  );
}
