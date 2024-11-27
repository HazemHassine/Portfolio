import React from "react";
import SubSectionText from "./SubSectionText";
import Me from "../images/profile-pic.png";
import BioElement from "./BioElement";
import ArrowElement from "./ArrowElement";
import GlowingLink from "./GlowingLink";
import Skills from "./Skills";
import Projects from "./Projects";

function MainBody() {
    return (
        <div className="px-[5%] md:px-[25%] sm:px-[5%]">
            <SubSectionText text="About Me" />
            <div className="sm:flex sm:flex-col relative">
                <BioElement title="Name" text="Mohamed Hazem Hassine" />
                <BioElement title="Born" text="2001" />
                <BioElement title="Birthplace" text="Sayada, Tunisia 🇹🇳" />
                <BioElement title="Domicile" text="Lamta, Tunisia 🇹🇳" />
                <BioElement
                    title="Email"
                    text="hazemhassine.edu (at) gmail (dot) com"
                />
                <BioElement
                    title="Current status"
                    text="Computer Science Masters student at Passau University"
                />
                <div className="sm:relative md:absolute lg:absolute h-80 top-0 right-0 ">
                    <div
                        className="-z-30 sm:hidden absolute h-20 w-80 -bottom-10 blur-xl right-0 bg-gray-900"
                        alt="Mohamed Hazem Hassine, picture"
                    />
                    <div
                        className="-z-30 sm:hidden absolute ml-[50%] h-80 w-20 -bottom-10 blur-3xl self-center bg-gray-900"
                        alt="Mohamed Hazem Hassine, picture"
                    />
                    <img
                        className="w-80 drop-shadow-2xl"
                        src={Me}
                        alt="Mohamed Hazem Hassine"
                    />
                </div>
            </div>
            <SubSectionText text="Online Presence" />
            <ol>
                <ul>
                    <ArrowElement>
                        <GlowingLink
                            link="https://www.linkedin.com/in/hazem-hassine/"
                            text="LinkedIn"
                        />
                    </ArrowElement>
                </ul>
                <ul>
                    <ArrowElement>
                        <GlowingLink
                            link="https://www.github.com/HazemHassine/"
                            text="Github"
                        />
                    </ArrowElement>
                </ul>
                <ul>
                    <ArrowElement>
                        <GlowingLink
                            link="https://www.instagram.com/mhazem_hassine/"
                            text="Instagram"
                        />
                    </ArrowElement>
                </ul>
            </ol>
            <SubSectionText text="Education" />
            <ul className="flex flex-col gap-5">
                <ArrowElement>
                    <p>
                        Mathematics Bacalaureat
                    </p>
                    <p className="text-gray-300 pl-4 mt-1">Sayada Highschool 2020</p>
                </ArrowElement>
                <ArrowElement>
                    <p>
                        Bachelor in Computer Science, Software Engineering and Information Systems
                    </p>
                    <p className="text-gray-300 pl-4 mt-1">Higher Institut of Mathematics and Informatics Monastir, 2020-2023</p>
                </ArrowElement>
            </ul>
            <SubSectionText text="Research" />
            <ul>
                <ArrowElement>
                    <p className="flex">
                        Advancing Low-Resource Healthcare through Multi-Domain Federated
                        Learning, <GlowingLink text="Link" link="https://drive.google.com/file/d/1Ix_5tSBENqvzqQR9TCKYZN18e8zSIEJd/view?usp=sharing" />
                    </p>
                    <div className="text-gray-300 pl-4 mt-1">
                        <p>Machine Learning Researcher Intern</p>
                        <p>Memory of End of Studies Project. <GlowingLink className="inline" link="https://basira-lab.com/" unhighlighted_text="Work done at" text="Basira Lab" /></p>
                        <p>Presented on July 5<sup>th</sup>, 2023</p>
                    </div>
                </ArrowElement>
            </ul>
            <SubSectionText text="Professional Experience" />
            <ul>
                <ArrowElement>
                    <p>Information Systems Specialist</p>
                    <div className="text-gray-300 pl-4 mt-1 mb-2">
                        <p>The Independent High Authority for the Elections, (<a className="drop-shadow-[0_0_5px_rgba(181,232,83,02)]" href="https://www.isie.tn/">ISIE</a>), Sep 2023 - Feb 2024</p>
                    </div>
                </ArrowElement>

                <ArrowElement><p>Part-time Freelance Web Developer</p>
                    <div className="text-gray-300 pl-4 mt-1 mb-2">
                        <p>Remote, (ReactJs, TailwindCss, NextJs), 2021-2024</p>
                    </div></ArrowElement>
                <ArrowElement><p>Freelance Web Developer</p>
                    <div className="text-gray-300 pl-4 mt-1 mb-2">
                        <p>Remote, (ReactJs, TailwindCss, NextJs)</p>
                    </div></ArrowElement>
            </ul>
            <SubSectionText text="Extracurricular Activities"/>
            <ul>
                <ArrowElement>
                    <p>Junior Chamber International (JCI) Sayada Member</p>
                    <div className="text-gray-300 pl-4 mt-1 mb-2">
                        <p>Social Responsibility, 2024</p>
                    </div>
                </ArrowElement>

                <ArrowElement><p>Social Media Manager</p>
                    <div className="text-gray-300 pl-4 mt-1 mb-2">
                        <p>Tunisian Association for Artiﬁcial Intelligence (<a href="https://atia.org.tn/" className="drop-shadow-[0_0_5px_rgba(181,232,83,02)]">ATIA</a>)</p>
                    </div></ArrowElement>
            </ul>
            <SubSectionText text="Projects"/>
            <Projects/>
            <div className="text-center">
            <h3 className="text-5xl text-teal-500 my-5 drop-shadow-[0_0_5px_rgba(20,144,186,0.7)]">Skills</h3>
            </div>
            <Skills/>
            
        </div>
    );
}

export default MainBody;
