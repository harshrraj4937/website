import { useState } from 'react';
import Image from 'next/image';

const FeatureAccordion = () => {
    const features = [
        {
            title: 'Get up and running in seconds',
            icons: [
                { src: '/croped-wheel.png', label: 'Fast Start' },
                { src: '/croped-wheel.png', label: 'Auto Deploy' },
            ],
        },
        {
            title: 'Build on the go',
            icons: [
                { src: '/croped-wheel.png', label: 'Mobile Dev' },
                { src: '/croped-wheel.png', label: 'Cloud Sync' },
            ],
        },
        {
            title: 'Integrate the tools you love',
            icons: [
                { src: '/sentry-logo.png', label: 'Self-Hosted Sentry' },
                { src: '/gitlab-logo.png', label: 'Self-Hosted Gitlab' },
            ],
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="border-t border-[#30363D] pt-6 space-y-6">
            {features.map((feature, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index}>
                        <div className="flex justify-between items-center border-b border-[#30363D] pb-3">
                            <h3 className="text-[#8B949E] font-semibold text-lg leading-6">
                                {feature.title}
                            </h3>
                            <button
                                aria-label="Expand"
                                onClick={() => toggle(index)}
                                className="text-[#8A63E6] text-xl font-bold leading-none"
                            >
                                {isOpen ? '-' : '+'}
                            </button>
                        </div>

                        <div
                            className={`
                                transition-all duration-300 ease-in-out overflow-hidden
                                ${isOpen ? 'max-h-40 opacity-100 pt-4' : 'max-h-0 opacity-0'}
                            `}
                        >
                            <div className="flex gap-6">
                                {feature.icons.map((icon, idx) => (
                                    <div key={idx} className="flex flex-col items-center text-xs text-[#8B949E]">
                                        <Image
                                            src={icon.src}
                                            alt={`Icon ${idx}`}
                                            width={52}
                                            height={52}
                                            className="rounded"
                                        />
                                        <span className="mt-1">{icon.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default FeatureAccordion;
