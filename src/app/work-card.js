import { useState, useEffect } from "react";
import "./work-card.css";

export default function WorkCard({ images = [], label, wide = false}) {
    const[currentImage, setCureentImage] = useState(0);
    const[flipped, setFlipped] = useState(false);

    useEffect(() => {
        if(!flipped) return;
        const interval = setInterval(() => {
            setCureentImage((prev) => (prev + 1) % images.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [flipped, images.length]);

    return(
        <div 
            className={`card-wrapper ${wide ? "card-wrapper-wide" : ""}`}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => { setFlipped(false); setCureentImage(0);}}
        >
            <div className={`card-inner ${flipped ? "is-flipped" : ""}`}>
                {/* Front */}
                <div className="card-front">
                    <div className={wide ? "card-image-wide" : "card-image"} />
                </div>

                {/* Back */}
                <div className="card-back">
                    {images.length > 0 ? (
                        <div
                            className="card-slideshow-img"
                            style={{backgroundImage: `url(${images[currentImage]})`, backgroundSize: "cover", backgroundPosition: "center"}}
                            />
                    ) : (
                        <p>No images yet</p>
                    )}
                    <div className="card-dots">
                        {images.map((_, i) => (
                            <span key={i} className={`dot ${i === currentImage ? "dot-active" : ""}`}/>
                        ))}
                    </div>
                </div>
            </div>
            <p className="card-label"> {label} </p>
        </div>
    )
}