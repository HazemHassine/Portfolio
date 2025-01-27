import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SubSectionText from "./SubSectionText";
import Me from "../images/profile-pic.png";
import BioElement from "./BioElement";
import ArrowElement from "./ArrowElement";
import GlowingLink from "./GlowingLink";
import Skills from "./Skills";
import Projects from "./Projects";

function FadeInSection({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInVariants}>
      {children}
    </motion.div>
  );
}

function MainBody() {

  return (
    <main className="flex-grow px-4 md:px-[25%] py-16">
      <FadeInSection>
        <section className="mb-16">
          <SubSectionText id="about" text="About Me" />
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <BioElement title="Name" text="Mohamed Hazem Hassine" />
              <BioElement title="Born" text="2001" />
              <BioElement title="Birthplace" text="Sayada, Tunisia 🇹🇳" />
              <BioElement title="Domicile" text="Passau, Germany 🇩🇪" />
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
              <motion.img
                className="w-full max-w-sm rounded-lg shadow-lg"
                src={Me}
                alt="Mohamed Hazem Hassine"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </section>
      </FadeInSection>

      <FadeInSection>
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
      </FadeInSection>

      <FadeInSection>
        <section className="mb-16">
          <SubSectionText text="Education" />
          <ul className="space-y-6">
          <li>
              <ArrowElement>
                <p className="font-semibold">
                  Masters in Computer Science
                </p>
                <p className="text-gray-400 mt-1">
                  Univeristy of Passau,
                  2024 - Current
                </p>
              </ArrowElement>
            </li>
          <li>
              <ArrowElement>
                <p className="font-semibold">
                  Bachelor in Computer Science, Software Engineering and
                  Information Systems
                </p>
                <p className="text-gray-400 mt-1">
                  Higher Institut of Mathematics and Informatics Monastir,
                  2020 - 2023
                </p>
              </ArrowElement>
            </li>
            <li>
              <ArrowElement>
                <p className="font-semibold">Mathematics Bacalaureat</p>
                <p className="text-gray-400 mt-1">Sayada Highschool 2020</p>
              </ArrowElement>
            </li>
            
          </ul>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="mb-16">
          <SubSectionText text="Professional Experience" />
          <ul className="space-y-6">
            <li>
              <ArrowElement>
                <p className="font-semibold">Information Systems Specialist</p>
                <div className="text-gray-400 mt-1">
                  <p>
                    The Independent High Authority for the Elections, (
                    <a
                      className="text-teal-300 hover:text-teal-200"
                      href="https://www.isie.tn/"
                    >
                      ISIE
                    </a>
                    ), Sep 2023 - Feb 2024
                  </p>
                </div>
              </ArrowElement>
            </li>
            <li>
              <ArrowElement>
                <p className="font-semibold">Machine Learning Researcher Intern</p>
                <div className="text-gray-400 mt-1">
                  <p>
                  Brain And SIgnal Research & Analysis Lab, (
                    <a
                      className="text-teal-300 hover:text-teal-200"
                      href="https://basira-lab.com/"
                    >
                      Basira Lab
                    </a>
                    ), Feb 2023 - Aug 2023
                  </p>
                </div>
              </ArrowElement>
            </li>
            <li>
              <ArrowElement>
                <p className="font-semibold">Part-time Freelance Web Developer</p>
                <div className="text-gray-400 mt-1">
                  <p>Remote, (ReactJs, TailwindCss, NextJs), 2021-2023</p>
                </div>
              </ArrowElement>
            </li>
          </ul>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="mb-16">
          <SubSectionText text="Extracurricular Activities" />
          <ul className="space-y-6">
            <li>
              <ArrowElement>
                <p className="font-semibold">
                  Junior Chamber International (JCI) Sayada Member
                </p>
                <div className="text-gray-400 mt-1">
                  <p>Social Responsibility, 2024</p>
                </div>
              </ArrowElement>
            </li>
            <li>
              <ArrowElement>
                <p className="font-semibold">Social Media Manager</p>
                <div className="text-gray-400 mt-1">
                  <p>
                    Tunisian Association for Artificial Intelligence (
                    <a
                      href="https://atia.org.tn/"
                      className="text-teal-300 hover:text-teal-200"
                    >
                      ATIA
                    </a>
                    )
                  </p>
                </div>
              </ArrowElement>
            </li>
          </ul>
        </section>
      </FadeInSection>

      <FadeInSection>
        <section className="mb-16">
          <SubSectionText text="Projects" id="projects" />
          <Projects />
        </section>
      </FadeInSection>

      <FadeInSection>
        <section>
          <Skills id="skills" />
        </section>
      </FadeInSection>
    </main>
  );
}

export default MainBody;
