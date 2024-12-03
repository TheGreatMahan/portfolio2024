import React from "react";

const ProjectCard = (props) => {
    return (
        <div className="rounded-xl w-full bg-space-gray relative min-h-[100px] flex py-4 max-sm:flex-col max-lg:w-[88%] max-lg:mx-auto">
            <img
                className="size-48 rounded-lg my-auto m-4 max-sm:w-auto "
                src={props.image}
                alt="Logo"
            />
            <div className="w-full relative min-h-16">
                <div className="absolute top-2 right-2 italic">
                    {props.year}
                </div>
                <div className="absolute bottom-2 right-2 italic max-sm:hidden">
                    {props.technologies}
                </div>
                <div
                    className="
                w-full my-auto flex flex-col 
                md:flex-row md:mx-4 md:space-x-4
                max-md:mx-4 max-md:space-y-2 max-md:my-3"
                >
                    <div className="flex-col space-y-2 max-md:mr-8 md:mr-28 mt-2 sm:mb-10">
                        <a
                            className="font-bold text-sky-500 italic uppercase"
                            href={props.link?.href}
                        >
                            {props.link?.title}
                        </a>
                        <div className="">{props.explanation}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
