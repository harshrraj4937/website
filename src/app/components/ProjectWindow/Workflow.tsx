import React from "react";
import FeatureAccordion from "./FeatureAccordion";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const WorkflowSection = () => {
    return (
        <div className="bg-[#0D1117] text-[#8B949E] flex items-center justify-center p-6 relative font-[Inter]">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                {/* Left side */}
                <div className="flex flex-col justify-center space-y-6 max-w-md z-10">
                    <div>
                        <h2 className="text-white font-semibold text-lg leading-6 mb-1">Stay in Sync With Your Spending.</h2>
                        <p className="text-[#8B949E] text-sm leading-5 mb-4">
                            Simplify your budgeting with interactive graphs, smart breakdowns, and seamless tracking.
                        </p>
                        <a
                            href="https://pay-day-digital.onrender.com"
                            className="text-[#539BF5] text-sm font-normal hover:underline inline-flex items-center space-x-1"
                        >
                            <span>Try Money Monitor for free</span>
                            <i className="fas fa-chevron-right text-[#539BF5]" />
                        </a>
                    </div>
                    <FeatureAccordion />
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
                            <span>Currently Active 4 workflow runs</span>
                            {/* <div className="flex space-x-6">
                                {["Event", "Status", "Branch", "Actor"].map((label, index) => (
                                    <button key={index} className="flex items-center space-x-1 hover:text-white">
                                        <span>{label}</span>
                                        <i className="fas fa-chevron-down text-xs" />
                                    </button>
                                ))}
                            </div> */}
                        </div>

                        {/* Workflow items */}
                        <div className="space-y-4">
                            {[
                                {
                                    title: "Cloud HA PostgreSQL Clusters",
                                    description:
                                        "Provisioned with Terraform & Ansible on AWS, configured master-slave HA and Percona monitoring.",
                                    timeAgo: "14 hour ago",
                                    duration: "4m 12s",
                                },
                                {
                                    title: "Edge RTSP Video Streaming",
                                    description:
                                        "Deployed RTSP streaming via GStreamer on Raspberry Pi edge nodes, with secure MQTT pipelines.",
                                    timeAgo: "24 days ago",
                                    duration: "6m 05s",
                                },
                                {
                                    title: "Cloud-Native Monitoring Dashboard",
                                    description:
                                        "Prometheus + Grafana integration with Helm for Kubernetes metrics, 99.9% uptime achieved.",
                                    timeAgo: "16 hour ago",
                                    duration: "3m 45s",
                                },
                                {
                                    title: "Vehicle Rental Microservices",
                                    description:
                                        "Full-stack deployment on AWS with Kubernetes & Redis, auto-scaled using GitHub Actions pipeline.",
                                    timeAgo: "88 days ago",
                                    duration: "5m 58s",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-start space-x-4"
                                >
                                    <div className="flex-1">
                                        <div className="flex items-center space-x-2 text-[#3FB950] font-semibold text-sm mb-1">
                                            {/* {index < 2 ? <i className="fas fa-check-circle" /> : null} */}
                                            <span>{item.title}</span>
                                        </div>
                                        <p className="text-[#8B949E] text-xs leading-4">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-end space-y-1 text-[#8B949E] text-xs">
                                        <div className="flex items-center space-x-1">
                                            <i className="far fa-calendar-alt" />
                                            <span>{item.timeAgo}</span>
                                        </div>
                                        <div className="flex items-center space-x-1">
                                            <i className="far fa-clock" />
                                            <span>{item.duration}</span>
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
