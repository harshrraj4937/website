'use client'; // Required for interactive components in App Router

import React, { useState } from "react";
import Image from "next/image";
import "./TechSlider.css";

const techLogos = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL" },
    // Repeats
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
];

const TechSlider = () => {
    const [isPaused, setIsPaused] = useState(false);

    const togglePause = () => setIsPaused((prev) => !prev);

    return (
        <div className={`slider-container ${isPaused ? "paused" : ""}`}>
            <div className="slider-track">
                {techLogos.map((logo, index) => (
                    <div key={index} className="logo-wrapper">
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={50}
                            height={50}
                            unoptimized
                        />
                    </div>
                ))}
            </div>
            <button className="play-pause" onClick={togglePause}>
                {isPaused ? "▶️" : "⏸️"}
            </button>
        </div>
    );
};

export default TechSlider;
