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
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    >
                    {isPaused ? (
                        // Pause icon
                        <path d="M6 4h4v16H6zm8 0h4v16h-4z" />
                    ) : (
                        // Play icon
                        <path d="M5 3v18l15-9L5 3z" />
                    )}
                    </svg>
            </button>
        </div>
    );
};

export default TechSlider;
