import {Barriecito, Fira_Code, Joan} from "next/font/google";
import localFont from "next/font/local";
import "./fonts";


export const firaCode = Fira_Code({
    subsets: ["latin"],
    variable: "--font-fira",
});

export const joan = Joan({
    subsets:["latin", "latin-ext"],
    weight: "400",
    variable: "--font-joan",
});

export const barriecito = Barriecito({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-barriecito"
});

export const armiesDisplay = localFont({
    src: "./fonts/ArmiesDisplayRegular.ttf",
    weight: "400",
    style: "normal",
    variable: "--font-armies",
});
