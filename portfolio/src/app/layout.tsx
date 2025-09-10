import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WaveDivider from "./components/WaveDivider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Header/>
        <WaveDivider color="#3b82f6" height={120} variant="soft"></WaveDivider>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
