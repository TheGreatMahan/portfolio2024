import React, { useState } from "react";

const TechCard = ({ image, tech }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div
            className="bg-silver p-2 flex justify-center items-center size-24 rounded-3xl mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer relative"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <img
                src={image}
                alt="Technology"
                className="max-w-full max-h-full rounded-3xl"
            />
            {showTooltip && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 p-2 bg-space-gray text-white text-xs rounded-lg shadow-md">
                    {tech}
                </div>
            )}
        </div>
    );
};

export default TechCard;
