import React from "react";
import { about } from "../../constants/index.js";
import { personal } from "../../assets";
import { ImGithub } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import { GrLinkedin } from "react-icons/gr";
import { SiLeetcode } from "react-icons/si";


const About = () => {
    return (
        <div className="py-5 flex justify-center items-center">
            <div className="mt-2 mb-20 flex-col container max-w-[600px] space-y-5 items-center mx-4">
                <img
                    className="size-60 rounded-full mb-10 mx-auto"
                    src={personal}
                />
                {
                    about.map(section => {
                        return <div>{section}</div>
                    })
                }
                <div className="pt-10 flex flex-row space-x-14">
                    <a href="https://github.com/TheGreatMahan">
                        <ImGithub className="size-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/mahan-m-6b8b09192/">
                        <GrLinkedin className="size-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
                    </a>
                    <a href="https://leetcode.com/u/mahan1/">
                        <SiLeetcode className="size-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
                    </a>
                    <a href="mailto:mehdipour.mahan@gmail.com">
                        <IoMdMail className="size-14 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
