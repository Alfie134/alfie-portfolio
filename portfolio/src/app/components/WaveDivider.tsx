import React from "react";

interface WaveDividerProps {
    color?: string;
    height?: number;
    variant?: "soft" | "high" | "double" | "zigzag";
    flipped?: boolean;
}

const WaveDivider: React.FC<WaveDividerProps> = ({
    color = "#f3f4f6", // default light gray
    height = 100, // default height
    variant = "soft", //default wave style
    flipped = true,
}) => {
    let path = "";

    switch (variant){
        case "soft":
            path = "M0,50 C180,80 540,20 720,50 C900,80 1260,20 1440,50 L1440,100 L0,100 Z";
            break;
        case "high":
            path = "M0,40 C360,120 1080,-40 1440,40 L1440,100 L0,100 Z";
            break;
        case "double":
            path = "M0,50 C360,20 720,80 1080,50 C1260,30 1440,70 1440,50 L1440,100 L0,100 Z";
            break;
        case "zigzag":
            path = "M0,50 L360,30 L720,70 L1080,30 L1440,50 L1440,100 L0,100 Z";
            break;
    }

    return (
        <svg viewBox="0 0 1440 100"
            width="100%"
            height={height}
            preserveAspectRatio="none"
            style={{
                transform: flipped ? "rotate(180deg)" : "none",
                position: "relative",
                top: "20px",
                }}>
            
            <path d={path} fill={color}/>
        </svg>
    ) 
};

export default WaveDivider;