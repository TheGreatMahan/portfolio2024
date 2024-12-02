import React from "react";
import TechCard from "../../components/TechCard/TechCard";
import { technologies } from "../../constants";

const Technologies = () => {
    return (
        <div className="py-5 flex justify-center items-center w-full content-center">
            <div className="container max-w-[1000px] w-full grid grid-cols-4 sm:grid-cols-7 lg:grid-cols-8 gap-y-6 content-center">
                {technologies.map((technology, index) => {
                    return <TechCard key={index} image={technology.image} tech={technology.tech} />;
                })}
            </div>
        </div>
    );
};

export default Technologies;
