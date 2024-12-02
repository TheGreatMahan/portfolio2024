import React from "react";
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
                <div>
                    👋 Hi there! I'm a recent software engineering graduate from
                    Fanshawe College. Driven and enthusiastic, I'm excited to
                    embark on my career journey in the tech industry.
                </div>
                <div>
                    🚀 As someone who's ambitious and eager to grow, I'm always
                    on the lookout for opportunities that will challenge me and
                    expand my skill set. I thrive in environments that foster
                    innovation and continuous learning.
                </div>
                <div>
                    💡 I have a deep passion for working with new technologies.
                    Staying ahead of tech trends and applying the latest tools
                    in my projects is something I truly enjoy and excel at.
                </div>
                <div>
                    🌱 Proactive by nature, I don't just wait for
                    opportunities—I create them. I'm keen on making significant
                    contributions and driving results wherever I go.{" "}
                </div>
                <div>
                    🌐 With a solid foundation in software engineering under my
                    belt, I am particularly enthusiastic about branching out
                    into specialized areas like Cloud, DevOps, and AI. My goal
                    is to get deeply involved in these fields, harnessing their
                    power to revolutionize how we build and deploy solutions in
                    our increasingly digital world. I'm eager to contribute to
                    projects that push the envelope in these exciting domains.
                </div>
                <div>
                    🏋️‍♂️ Outside of technology, I'm committed to personal
                    development through fitness. I believe in growing non-stop,
                    not just professionally but also personally. Working out
                    regularly helps me stay focused and energized, ready to
                    tackle new challenges both in and out of the tech arena.
                    This balance drives me to excel and push boundaries every
                    day.
                </div>
                <div>
                    💭 Let's connect and explore how we can drive the future of
                    technology together!
                </div>

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
