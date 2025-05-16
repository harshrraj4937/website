'use client';

import Image from 'next/image';

export default function ProjectShowcase() {
    return (
        <>
            <main className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-12">
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
                    Work Experience <span className="font-normal">Building Robust,</span>{' '}
                    {/* <span className="font-semibold text-gray-500">building robust,</span> */}
                    <br />
                    <span className="font-semibold text-gray-500">
                        Scalable Software for Real-World needs
                    </span>
                    .
                </h1>
                <div className="inline-flex mt-8 border border-gray-600 rounded-full overflow-hidden text-xl font-normal text-white">
                    <button className="bg-transparent border border-gray-600 rounded-full px-4 py-2 text-white hover:bg-[#30363d] focus:outline-none focus:ring-2 focus:ring-white">
                        By industry
                    </button>
                    {/* <button className="px-4 py-2 hover:bg-[#30363d] focus:outline-none focus:ring-2 focus:ring-white">
                        By size
                    </button>
                    <button className="px-4 py-2 hover:bg-[#30363d] focus:outline-none focus:ring-2 focus:ring-white rounded-r-full">
                        By use case
                    </button> */}
                </div>
            </main>

            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-t border-b border-[#21262d] divide-x divide-[#21262d] text-left text-white">
                <div
                    className="p-8 flex flex-col justify-between border-l border-[#21262d] h-80 bg-[url('/fastag-project.png')] bg-cover bg-center relative"
                >
                    <div className="flex items-center space-x-3 mb-12 z-10">
                        <div className="relative w-16 h-16">
                            <Image
                                src="/StackfusionLogo.png"
                                alt="Company logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm font-semibold text-white">Stackfusion Pvt Ltd</span>
                    </div>
                    <div className="z-10">
                        <p className="text-xs text-gray-300 mb-1">Industry</p>
                        <p className="font-semibold text-white text-sm leading-snug max-w-[220px]">
                        Fintech / Digital Payments
                        </p>
                    </div>
                    {/* Optional: overlay to darken background for better contrast */}
                    <div className="absolute inset-0 bg-black/60 rounded-lg" />
                </div>

                <div className="p-8 flex flex-col justify-between border-l border-[#21262d] h-80">
                    <div className="flex items-center space-x-3 mb-12">
                        <div className="relative w-16 h-16"> {/* Set size of Image container */}
                            <Image
                                src="/StackfusionLogo.png"
                                alt="Company logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm font-semibold">Stackfusion Pvt Ltd</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Industry</p>
                        <p className="font-semibold text-white text-sm leading-snug max-w-[220px]">
                            Some description here
                        </p>
                    </div>
                </div>
                <div className="p-8 flex flex-col justify-between border-l border-[#21262d] h-80">
                    <div className="flex items-center space-x-3 mb-12">
                        <div className="relative w-16 h-16"> {/* Set size of Image container */}
                            <Image
                                src="/StackfusionLogo.png"
                                alt="Company logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm font-semibold">Stackfusion Pvt Ltd</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Industry</p>
                        <p className="font-semibold text-white text-sm leading-snug max-w-[220px]">
                            Some description here
                        </p>
                    </div>
                </div>
                <div className="p-8 flex flex-col justify-between border-l border-[#21262d] h-80">
                    <div className="flex items-center space-x-3 mb-12">
                        <div className="relative w-16 h-16"> {/* Set size of Image container */}
                            <Image
                                src="/StackfusionLogo.png"
                                alt="Company logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-sm font-semibold">Stackfusion Pvt Ltd</span>
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 mb-1">Industry</p>
                        <p className="font-semibold text-white text-sm leading-snug max-w-[220px]">
                            Some description here
                        </p>
                    </div>
                </div>
            </section>


            <footer className="max-w-7xl mx-auto flex justify-center items-center space-x-6 text-sm text-[#539bf5] border-t border-[#21262d] py-6">
                <a className="flex items-center space-x-1 hover:underline" href="#">
                    <span>Explore customer stories</span>
                    <i className="fas fa-chevron-right text-xs"></i>
                </a>
                <div className="border-l border-[#21262d] h-4"></div>
                <a className="flex items-center space-x-1 hover:underline" href="#">
                    <span>View all solutions</span>
                    <i className="fas fa-chevron-right text-xs"></i>
                </a>
            </footer>

            <button
                aria-label="Scroll to top"
                className="fixed bottom-6 right-6 w-8 h-8 rounded-full bg-[#21262d] text-[#8b949e] hover:text-white flex items-center justify-center"
            >
                <i className="fas fa-arrow-up"></i>
            </button>
        </>
    );
}
