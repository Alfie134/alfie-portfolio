import {Mail, Phone, MapPin, Github, Linkedin, Heart} from "lucide-react"

export default function ContactPage() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center 
        bg-gradient-to-b from-[#2D3824] to-[#8D9867] text-center pt-20">
            <h1 className="text-4xl font-bold mb-4 text-[#B6AD90]">
                Get in touch!
            </h1>
            <p className="text-xl font-bold max-w-xl mb-4 text-[#B6AD90]">
                Feel free to contact me on the following medias!
            </p>
            <div className="flex justify-center space-x-10 text-lg text-[#B6AD90]">
                <a href="mailto:alberteoegendahl@gmail.com" className="flex flex-col items-center">
                    <Mail className="w-25 h-25 mb-2"/>
                    <span className="font-bold text-xl"> Email </span>
                    <p> alberteoegendahl@gmail.com </p>
                </a>
                <a href="tel:+4540436072" className="flex flex-col items-center">
                    <Phone className="w-25 h-25 mb-2"/>
                    <span className="font-bold text-xl"> Phone </span>
                    <p> +45 40 43 60 72 </p>
                </a>
                <div className="flex flex-col items-center">
                    <MapPin className="w-25 h-25 mb-2"/>
                    <span className="font-bold text-xl"> Location </span>
                    <p> Silkeborg, Denmark </p>
                </div>
                <div className="flex flex-col items-center">
                    <Heart className="w-25 h-25 mb-2"/>
                    <span className="font-bold text-xl"> Socials </span>
                    <p> LinkedIn: </p>
                    <p> GitHub: </p>
                </div>
            </div>
        </section>
    );
}
