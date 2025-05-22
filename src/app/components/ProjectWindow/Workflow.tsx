import React from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const WorkflowSection = () => {
    return (
        <div className="bg-[#0D1117] text-[#8B949E] min-h-screen flex items-center justify-center p-6 relative font-[Inter]">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                {/* Left side */}
                <div className="flex flex-col justify-center space-y-6 max-w-md z-10">
                    <div>
                        <h2 className="text-white font-semibold text-lg leading-6 mb-1">Automate any workflow</h2>
                        <p className="text-[#8B949E] text-sm leading-5 mb-4">
                            Optimize your process with simple and secured CI/CD.
                        </p>
                        <a
                            href="#"
                            className="text-[#539BF5] text-sm font-normal hover:underline inline-flex items-center space-x-1"
                        >
                            <span>Discover GitHub Actions</span>
                            <i className="fas fa-chevron-right text-[#539BF5]" />
                        </a>
                    </div>

                    <div className="border-t border-[#30363D] pt-6 space-y-6">
                        {["Get up and running in seconds", "Build on the go", "Integrate the tools you love"].map(
                            (title, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-[#30363D] pb-3"
                                >
                                    <h3 className="text-[#8B949E] font-semibold text-lg leading-6">{title}</h3>
                                    <button
                                        aria-label="Expand"
                                        className="text-[#8A63E6] text-xl font-bold leading-none"
                                    >
                                        +
                                    </button>
                                </div>
                            )
                        )}
                    </div>
                </div>

                {/* Vertical mid line */}
                <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#30363D] translate-x-[-50%] z-0"></div>

                {/* Right side */}
                <div
                    className="relative rounded-xl p-6 z-10"
                    style={{
                        background: "radial-gradient(ellipse at center, #6B5BFF33 0%, #1E293B 80%)",
                    }}
                >
                    <div
                        className="absolute inset-0 rounded-xl pointer-events-none"
                        style={{ boxShadow: "0 0 20px 8px #6B5BFF99" }}
                    ></div>
                    <div className="relative bg-[#161B22] rounded-xl p-6 text-[#8B949E] text-xs font-normal leading-5 space-y-4">
                        <div className="flex justify-between items-center text-[#8B949E] font-semibold text-sm mb-2">
                            <span>45,167 workflow runs</span>
                            <div className="flex space-x-6">
                                {["Event", "Status", "Branch", "Actor"].map((label, index) => (
                                    <button key={index} className="flex items-center space-x-1 hover:text-white">
                                        <span>{label}</span>
                                        <i className="fas fa-chevron-down text-xs" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Workflow items */}
                        <div className="space-y-4">
                            {[
                                "Fix IE12 incompatibilities",
                                "Accessibility tests",
                                "Update changelog and release notes",
                                "Migrate to latest Storybook",
                                "Fix IE11 incompatibilities",
                            ].map((title, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-start space-x-4"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 text-[#3FB950] font-semibold text-sm mb-1">
                                            {index < 2 ? <i className="fas fa-check-circle" /> : null}
                                            <span>{title}</span>
                                        </div>
                                        <p className="text-[#8B949E] text-xs leading-4">
                                            Build, test and deploy #15078: pull request #239122 synchronize by mona
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end space-y-1 text-[#8B949E] text-xs">
                                        <div className="flex items-center space-x-1">
                                            <i className="far fa-calendar-alt" />
                                            <span>1 hour ago</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <i className="far fa-clock" />
                                            <span>5m 40s</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkflowSection;
