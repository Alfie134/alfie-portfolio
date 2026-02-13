import {Barriecito, Fira_Code, Joan} from "next/font/google";
import localFont from "next/font/local";
import "./fonts";

/* New Fonts */
export const firaCode = Fira_Code({
    subsets: ["latin"],
    variable: "--font-fira",
});

export const molen = localFont({
    src: "./fonts/MolenSurplus2.otf",
    variable: "--font-molen"
})

export const frunchy = localFont({
    src: "./fonts/Frunchy.ttf",
    variable: "--font-frunchy"
})

export const hali = localFont({
    src: "./fonts/Halimun.ttf",
    variable: "--font-hali"
})



/*Older Fonts*/
export const joan = Joan({
    subsets:["latin", "latin-ext"],
    weight: "400",
    variable: "--font-joan",
});
