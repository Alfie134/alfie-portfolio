import "./globals.css";
import NavBar from "./components/NavBar";
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
        <NavBar color="#f1c2a3"></NavBar>
        <WaveDivider color="#f1c2a3" height={120} variant="soft"></WaveDivider>
        <main>{children}</main>
      </body>
    </html>
  );
}
