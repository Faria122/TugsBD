import TankFoundation from '@/assets/images/Image2.jpg';
import AsiaticOil from '@/assets/images/Image3.jpg';
import JamunaOil from '@/assets/images/Image4 (2).jpg';
import JettyPipeline from '@/assets/images/Image4.jpg';
import TankTerminal from '@/assets/images/Image5.jpg';


import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import CheckCircleIcon from '@/assets/icons/check-circle.svg';
import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "Tank Foundation",
    year: "2008",
    title: "Asiatic Oil Company North Potenga, Chittagong",
    results: [
      { title: "Industrial sheds an structures." },
      { title: "Stairs, Handrails and Ladders." },
      { title: "Access Platforms" },
    ],
    //link: "https://youtu.be/4k7IdSLxh6w",
    image: TankFoundation,
  },
  {
    company: "New Storage Tank",
    year: "2012",
    title: "Standard Asiatic Oil Company",
    results: [
      { title: "Space Frames" },
      { title: "Support structures for equipments/process plants." },
      { title: "Support structures in steel for all types of civil construction." },
    ],
   // link: "https://youtu.be/7hi5zwO75yc",
    image: AsiaticOil,
  },
  {
    company: "Jetty Pipeline",
    year: "2013",
    title: "Standard Asiatic Oil Company",
    results: [
      { title: "Customized and Integrated Solution." },
      { title: "Fabrication and erection." },
      { title: "All kinds of fabrication and erection drawings." },
    ],
    //link: "https://youtu.be/Z7I5uSRHMHg",
    image: JettyPipeline,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
       {/* <SectionHeader 
            eyebrow="Happy Clients" 
            title="What Clients say about me" 
            description="Don't just take my word for it. See what my clients have to say about my work."
            />*/}

        {/*<div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest 
          bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent 
          bg-clip-text text-center">
            Real-world Results
          </p>
        </div>*/}

        <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
          Major Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl 
        text-white/60 mt-4 max-w-md mx-auto">
          To be recognised as a leading general contracting company of choice providing solutions and delivering projects of any magnitude.
        </p>
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map(project => (
            <Card
              key={project.title}
              className="px-8 p-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20
          after:pointer-events-none">
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-2">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 
              inline-flex gap-2 font-bold uppercase tracking-widest text-sm 
              text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  {/*<a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full px-6
                rounded-xl font-semibold inline-flex items-center md:w-auto
                justify-center gap-2 mt-8">
                      <span>View Live Site</span>
                      <ArrowUpRightIcon className="size-4" />
                    </button>
                  </a>*/}
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
