import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <NavBar color="#333d29"></NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
