import React from "react";
import { projects } from "../../constants/index";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
    return (
        <div className="py-5 flex justify-center items-center">
            <div className="container max-w-[1000px] flex-col space-y-5">
                {projects.map((project) => {
                    return <ProjectCard 
                        image={project.image}
                        year={project.year}
                        technologies={project.technologies}
                        link={project.link}
                        explanation={project.explanation}
                        key={project.link.title}
                    />;
                })}
            </div>
        </div>
    );
};

export default Projects;
