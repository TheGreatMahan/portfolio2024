import React from "react";
import { projects } from "../../constants/index";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <div className="w-screen py-5 flex justify-center items-center">
            <div className="container max-w-[1000px] w-full mx-4 flex-col space-y-5">
                {projects.map((project) => {
                    return <ProjectCard 
                        image={project.image}
                        year={project.year}
                        technologies={project.technologies}
                        link={project.link}
                        explanation={project.explanation}
                        key={project.link}
                    />;
                })}
            </div>
        </div>
    );
};

export default Projects;
