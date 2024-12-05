import React from 'react';
import SubSectionText from "./SubSectionText";
import Me from "../images/profile-pic.png";
import BioElement from "./BioElement";
import ArrowElement from "./ArrowElement";
import GlowingLink from "./GlowingLink";
import Skills from "./Skills";
import Projects from "./Projects";

function MainBody() {
  const explanations = {
    bac: {
      header: "Mathematics Bacalureat. Obtained July 2020",
      description: (
        <div>
          <p>4 year highschool experience that was full of joy brought by amazing friends.</p>
          <p><strong>Relevant Coursework:&nbsp;</strong>Biology, Probability & Statistics, Calculus, Algebra, Differential equations, Trigonometry, Electricity and Magnetism, Mechanical Systems, Chemistry</p>
        </div>
      )
    }
  };

  return (
    <main className="flex-grow px-4 md:px-[25%] py-16">
      <section className="mb-16">
        <SubSectionText id="about" text="About Me" />
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <BioElement title="Name" text="Mohamed Hazem Hassine" />
            <BioElement title="Born" text="2001" />
            <BioElement title="Birthplace" text="Sayada, Tunisia 🇹🇳" />
            <BioElement title="Domicile" text="Lamta, Tunisia 🇹🇳" />
            <BioElement
              title="Email"
              id="contact"
              text="hazemhassine.edu (at) gmail (dot) com"
            />
            <BioElement
              title="Current status"
              text="Computer Science Masters student at Passau University"
            />
          </div>
          <div className="relative">
            <img
              className="w-full max-w-sm rounded-lg shadow-lg"
              src={Me}
              alt="Mohamed Hazem Hassine"
            />
          </div>
        </div>
      </section>

      <section className="mb-16">
        <SubSectionText text="Online Presence" />
        <ul className="space-y-4">
          <li>
            <ArrowElement>
              <GlowingLink
                link="https://www.linkedin.com/in/hazem-hassine/"
                text="LinkedIn"
              />
            </ArrowElement>
          </li>
          <li>
            <ArrowElement>
              <GlowingLink
                link="https://www.github.com/HazemHassine/"
                text="Github"
              />
            </ArrowElement>
          </li>
          <li>
            <ArrowElement>
              <GlowingLink
                link="https://www.instagram.com/mhazem_hassine/"
                text="Instagram"
              />
            </ArrowElement>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <SubSectionText text="Education" />
        <ul className="space-y-6">
          <li>
            <ArrowElement>
              <p className="font-semibold">Mathematics Bacalaureat</p>
              <p className="text-gray-400 mt-1">Sayada Highschool 2020</p>
            </ArrowElement>
          </li>
          <li>
            <ArrowElement>
              <p className="font-semibold">Bachelor in Computer Science, Software Engineering and Information Systems</p>
              <p className="text-gray-400 mt-1">Higher Institut of Mathematics and Informatics Monastir, 2020-2023</p>
            </ArrowElement>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <SubSectionText text="Research" />
        <ul>
          <li>
            <ArrowElement more={explanations.education}>
              <p className="font-semibold flex items-center">
                Advancing Low-Resource Healthcare through Multi-Domain Federated Learning
                <GlowingLink text="Link" link="https://drive.google.com/file/d/1Ix_5tSBENqvzqQR9TCKYZN18e8zSIEJd/view?usp=sharing" className="ml-2" />
              </p>
              <div className="text-gray-400 mt-2">
                <p>Machine Learning Researcher Intern</p>
                <p>Memory of End of Studies Project. <GlowingLink className="inline" link="https://basira-lab.com/" unhighlighted_text="Work done at" text="Basira Lab" /></p>
                <p>Presented on July 5<sup>th</sup>, 2023</p>
              </div>
            </ArrowElement>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <SubSectionText text="Professional Experience" />
        <ul className="space-y-6">
          <li>
            <ArrowElement>
              <p className="font-semibold">Information Systems Specialist</p>
              <div className="text-gray-400 mt-1">
                <p>The Independent High Authority for the Elections, (<a className="text-teal-300 hover:text-teal-200" href="https://www.isie.tn/">ISIE</a>), Sep 2023 - Feb 2024</p>
              </div>
            </ArrowElement>
          </li>
          <li>
            <ArrowElement>
              <p className="font-semibold">Part-time Freelance Web Developer</p>
              <div className="text-gray-400 mt-1">
                <p>Remote, (ReactJs, TailwindCss, NextJs), 2021-2024</p>
              </div>
            </ArrowElement>
          </li>
          <li>
            <ArrowElement>
              <p className="font-semibold">Freelance Web Developer</p>
              <div className="text-gray-400 mt-1">
                <p>Remote, (ReactJs, TailwindCss, NextJs)</p>
              </div>
            </ArrowElement>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <SubSectionText text="Extracurricular Activities" />
        <ul className="space-y-6">
          <li>
            <ArrowElement>
              <p className="font-semibold">Junior Chamber International (JCI) Sayada Member</p>
              <div className="text-gray-400 mt-1">
                <p>Social Responsibility, 2024</p>
              </div>
            </ArrowElement>
          </li>
          <li>
            <ArrowElement>
              <p className="font-semibold">Social Media Manager</p>
              <div className="text-gray-400 mt-1">
                <p>Tunisian Association for Artificial Intelligence (<a href="https://atia.org.tn/" className="text-teal-300 hover:text-teal-200">ATIA</a>)</p>
              </div>
            </ArrowElement>
          </li>
        </ul>
      </section>

      <section className="mb-16">
        <SubSectionText text="Projects" id="projects" />
        <Projects />
      </section>

      <section>
        <Skills id="skills" />
      </section>
    </main>
  );
}

export default MainBody;
