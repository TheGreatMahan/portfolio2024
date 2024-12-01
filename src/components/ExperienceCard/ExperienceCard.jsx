import React from "react";

const ExperienceCard = (props) => {
    return (
        <div className="rounded-xl w-full bg-space-gray relative min-h-[100px] flex">
            <div className="absolute top-2 right-2 italic">
                {props.location}
            </div>
            <div className="absolute bottom-2 right-2 italic">{props.year}</div>
            <div
                className="
                w-full my-auto flex flex-col 
                md:flex-row md:mx-4 md:space-x-4
                max-md:mx-4 max-md:space-y-2 max-md:my-3"
            >
                <img
                    className="size-12 rounded-full my-auto"
                    src={props.image}
                    alt="Logo"
                />
                <div className="flex-col space-y-2 mr-10">
                    <div className="font-bold">{props.name}</div>

                    <div>{props.explanation}</div>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
