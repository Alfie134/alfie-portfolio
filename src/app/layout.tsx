import NavBar from "../components/NavBar";
import "./globals.css";
import { armiesDisplay, barriecito, firaCode, herrVon, joan, monsieur} from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${firaCode.variable} ${joan.variable} ${barriecito.variable} ${armiesDisplay.variable} ${herrVon.variable} ${monsieur.variable}`}>
        <NavBar></NavBar>
        <main>{children}</main>
      </body>
    </html>
  );
}
