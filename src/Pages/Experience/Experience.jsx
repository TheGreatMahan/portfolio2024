import React from "react";
import ExperienceCard from "../../components/ExperienceCard/ExperienceCard";
import { experiences } from "../../constants/index";

const Experience = () => {
    return (
        <div className="py-5 flex justify-center items-center">
            <div className="container max-w-[1000px] w-full mx-4 flex-col space-y-5">
                {experiences.map((experience) => {
                    return (
                        <ExperienceCard
                            year={experience.year}
                            location={experience.location}
                            image={experience.image}
                            name={experience.name}
                            explanation={experience.explanation}
                            key={experience.name}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Experience;
