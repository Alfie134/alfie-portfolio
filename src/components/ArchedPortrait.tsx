type ArchedPortritProps = {
    src?: string;
    alt?: string;
    className?: string; //sizing wrapper
    bgToneClassName?: string; //Colour behind photo inside arch
    focus?: string; //SVG preserveAspectRatio alignment
};

export default function ArchedPortrait({
    src = "/me.jpg",
    alt = "Portrait",
    className = "w-[220px] sm:w-[280px] md:w-[340px] lg:w-[380px]",
    bgToneClassName = "fill-[#2a0b12]/35",
    focus = "xMidYMin slice", // close-up friendly (keeps head higher)
}: ArchedPortritProps) {
    return (
        <div></div>
    )
}