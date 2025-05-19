// components/LoadingScreen.tsx
'use client';
import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";
import ShipOceanLoadingScene from "../ShipOceanSceane/ShipOceanLoadingScene";

const LoadingScreen = ({ visible }: { visible: boolean }) => {
    const [shouldRender, setShouldRender] = useState(true);

    useEffect(() => {
        if (!visible) {
            const timeout = setTimeout(() => {
                setShouldRender(false);
            }, 1000); // match the fade-out duration

            return () => clearTimeout(timeout);
        } else {
            setShouldRender(true); // ensure it shows again if re-used
        }
    }, [visible]);

    if (!shouldRender) return null;

    return (
        <div className={`loading-body ${!visible ? "fade-out" : ""}`}>
            <ShipOceanLoadingScene/>
        </div>
    );
};

export default LoadingScreen;
