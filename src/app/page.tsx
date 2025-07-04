// app/page.tsx or pages/index.tsx

'use client';
import { useEffect, useMemo, useState } from 'react';
import Header from './components/Header';
import Head from 'next/head';
import TechSlider from './components/Slider/TechSlider';
import ProjectShowcase from './components/ProjectWindow/Project';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import HelloRidesCard from './components/ProjectWindow/ProjectCard';
import WorkflowSection from './components/ProjectWindow/Workflow';
import MoneyMonitorCard from './components/ProjectWindow/MoneyMonitorCard';
import FalconViewer from './components/Falcon/FalconViewer';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const mascots = document.getElementById('mascots-container');
    const codeEditor = document.getElementById('code-editor-container');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      const mascotsScale = Math.max(0.85, 1 - scrollY * 0.0007);
      const codeEditorTranslateY = Math.min(100, scrollY * 0.15);
      const codeEditorScale = 1.05 + Math.min(0.05, scrollY * 0.0003);

      if (mascots) {
        mascots.style.transform = `scale(${mascotsScale})`;

        // Fade out mascots when scrolled down ~500px or more
        mascots.style.opacity = scrollY < 500 ? '1' : '0';
      }

      if (codeEditor) {
        codeEditor.style.transform = `translateY(${codeEditorTranslateY}px) scale(${codeEditorScale})`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate delay for fade-out (you can also use window.onload or real data loading)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 1.5s to allow fade-out

    return () => clearTimeout(timeout);
  }, []);

  function getExperience(): string {
    const startDate = new Date("2022-12-05");
    const now = new Date();

    const diffInMs = now.getTime() - startDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25); // account for leap years

    // Round to 1 decimal if less than 10 years
    const experience = diffInYears < 10 ? diffInYears.toFixed(1) : Math.floor(diffInYears).toString();

    return `${experience}+ years`;
  }

  const experience = useMemo(() => getExperience(), []);

  return (
    
    <>
    <LoadingScreen visible={isLoading} />
      <Head>
        <title>GitHub Landing with Parallax Zoom and Scroll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <main className="bg-gradient-to-b from-[#020202] to-[#1A1F3D] text-white min-h-screen font-inter backdrop-blur-md">
        <Header />
        <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <FalconViewer/>
        </div>

        <section className="max-w-[1280px] mx-auto px-4 mt-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto text-white">
            From concept to code {' '}
            {/* <br className="hidden sm:block" /> */}
            built for scale, designed for people.
          </h1>
          <p className="mt-4 text-sm sm:text-base max-w-md mx-auto text-gray-300">
            I’m a full-stack developer with {experience} experience crafting performant applications.
            <br className="hidden sm:block" />
            Drop your email below and let’s discuss your next big idea.
          </p>

          <form
            action="#"
            method="POST"
            className="mt-8 flex flex-col sm:flex-row justify-center items-stretch gap-3 max-w-xl mx-auto"
          >
            <div className="flex w-full overflow-hidden rounded-md shadow-md">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-grow py-3 px-4 text-gray-800 text-sm bg-gradient-to-r from-white to-[#e6e6e6] placeholder-gray-500 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#49d663] cursor-pointer hover:bg-[#2c8c3a] text-white font-semibold text-sm px-5 transition whitespace-nowrap"
              >
                Let’s Build Something
              </button>
            </div>
          </form>

        </section>

        <section
          id="mascots-container"
          className="relative mt-20 max-w-5xl mx-auto parallax-zoom transition-opacity duration-500 ease-out"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -mb-20 h-48 rounded-xl bg-gradient-to-t from-[#5c4bca]/40 to-transparent blur-3xl"
          />
        </section>        
          <div>
            <TechSlider />
          </div>
        <section
        className="relative pt-12 pb-20 px-4">
        <ProjectShowcase/>
        </section>
        <HelloRidesCard/>
        <MoneyMonitorCard/>
        <WorkflowSection/>
      </main>
    </>
  );
}
