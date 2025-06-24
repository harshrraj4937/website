'use client';
import { WorkProjectCard } from './WorkProject';

export default function ProjectShowcase() {
    const projects = [
        {
            title: 'Fastag Gateway',
            company: 'Stackfusion Pvt Ltd',
            industry: 'Fintech / Digital Payments',
            imageUrl: '/fastag-project.png',
            logoUrl: '/StackfusionLogo.png',
        },
        {
            title: 'CM4 Edge Device',
            company: 'Stackfusion Pvt Ltd',
            industry: 'Edge Computing',
            imageUrl: '/cm4-project.png',
            logoUrl: '/StackfusionLogo.png',
        },
        {
            title: 'Cloud Infra',
            company: 'Stackfusion Pvt Ltd',
            industry: 'Cloud Infrastructure',
            imageUrl: '/cloud-infrastructure.png',
            logoUrl: '/StackfusionLogo.png',
        },
        {
            title: 'Smart Dashboard',
            company: 'Stackfusion Pvt Ltd',
            industry: 'Smart Dashboards',
            imageUrl: '/dashboard-project.png',
            logoUrl: '/StackfusionLogo.png',
            logoTextColor: 'text-black',
        },
    ]
    return (
        <>
            <main className="text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-10 py-12">
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-3xl mx-auto">
                    Work Experience <span className="font-normal">Building Robust,</span>{' '}
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
                </div>
            </main>

            <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-8 px-4 text-left text-white">
                {projects.map((project, index) => (
                    <WorkProjectCard key={index} {...project} delay={index * 0.15}/>
                ))}
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
