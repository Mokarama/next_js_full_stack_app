
import "./globals.css";
import Navbar from "./../component/Navbar/Navbar";
import Footer from "./../component/footer/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="containerCard"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
