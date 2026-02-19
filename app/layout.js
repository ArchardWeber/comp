import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export const metadata = {
  title: 'PT Qiprah Multi Service | Attitude for Success',
  description: 'PT Qiprah Multi Service - Perusahaan penyedia jasa alih daya (outsourcing) terpercaya sejak 2016. Layanan kebersihan, keamanan, supporting service, pemborongan, parkir, dan maintenance building.',
  keywords: 'outsourcing, alih daya, cleaning service, security, maintenance, semarang, qms',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
