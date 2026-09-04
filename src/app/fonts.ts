import {Cinzel_Decorative} from "next/font/google";
import localFont from "next/font/local";
import "./fonts";



export const CinzelDeco = Cinzel_Decorative({
    weight: ['400', '700', '900'],
    subsets: ["latin"],
    variable: "--font-CinzelDeco"
});


export const molen = localFont({
    src: "./fonts/MolenSurplus2.otf",
    variable: "--font-molen"
})




