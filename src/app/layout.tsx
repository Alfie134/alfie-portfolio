import NavBar from "../components/NavBar";
import "./globals.css";
import { firaCode, joan, molen, hali, frunchy} from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${molen.variable} ${frunchy.variable} ${hali.variable} ${joan.variable}`}>
        <NavBar></NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
