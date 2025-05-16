// app/page.tsx or pages/index.tsx

'use client';
import { useEffect, useMemo } from 'react';
import Image from 'next/image';
import Header from './components/Header';
import Head from 'next/head';
import TechSlider from './components/Slider/TechSlider';

export default function Home() {
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
      <Head>
        <title>GitHub Landing with Parallax Zoom and Scroll</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>

      <main className="bg-gradient-to-b from-[#0B1033] to-[#1A1F3D] text-white min-h-screen font-inter">
        <Header />

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
            <button
              type="button"
              className="border border-white rounded-md text-white font-semibold text-sm py-3 px-5 hover:bg-white hover:text-[#0B1033] transition"
            >
              View Portfolio
            </button>
          </form>

        </section>

        <section
          id="mascots-container"
          className="relative mt-20 max-w-5xl mx-auto parallax-zoom transition-opacity duration-500 ease-out"
        >
          <Image
            src="data:image/jpeg;base64,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"
            alt="GitHub mascots"
            width={400}
            height={300}
            className="mx-auto"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 -mb-20 h-48 rounded-xl bg-gradient-to-t from-[#5c4bca]/40 to-transparent blur-3xl"
          />
        </section>

        <div className="bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#1f2937] py-12">
          <section
            id="code-editor-container"
            className="max-w-6xl mx-auto bg-[#161b22] border border-[#30363d] rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] p-4"
          >
            <iframe
              src="https://terminal-aw3z.onrender.com/"
              width="800px"
              height="1200px"
              className="w-full h-[400px] rounded-lg border border-[#21262d] shadow-inner"
              allowFullScreen
            ></iframe>
          </section>
        </div>

        <section>
          <div>
            <TechSlider />
          </div>
        </section>

      </main>
    </>
  );
}
