
import "./globals.css";
import Navbar from "./../component/Navbar/Navbar";
import Footer from "./../component/footer/Footer";
import { ThemeProvider } from "../../context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="containerCard"
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
      
    </html>
  );
}
