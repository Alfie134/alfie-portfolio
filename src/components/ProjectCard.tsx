import Image from "next/image";
import Link from "next/link";


interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}


export default function ProjectCard ({title, description, image, link}: ProjectCardProps) {
    return (
        <Link href={link} className="text-[#E5DED1]">
            <div className="">
                <Image src={image}
                    alt={title}
                    width={600}
                    height={350}
                    className="obeject-cover rounded-xl">
                </Image>
                <div>
                    <h3 className="text-[#E5DED1]">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </Link>
    )
}