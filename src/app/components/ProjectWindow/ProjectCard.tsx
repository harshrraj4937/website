import Image from 'next/image';
import { useState } from 'react';

const HelloRidesCard = () => {
    const [visible, setVisible] = useState(true);
    
    return (
        <section
            className="relative flex justify-center items-center pt-12 pb-20 px-4"
            style={{
                background: 'linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(0, 200, 255, 1) 100%)',
            }}
        >
            <div
                className="relative rounded-xl border border-[#bfc0ff33] shadow-[0_0_20px_#bfc0ff33] p-6 max-w-[720px] w-full"
                style={{ backdropFilter: 'blur(10px)' }}
            >
                <Image
                    src="/hello-rides-project-card.png"
                    alt="Dark themed graph chart"
                    className="rounded-lg shadow-lg"
                    width={600}
                    height={280}
                />

                <div
                    className={`absolute top-1/2 -right-5 -translate-y-1/2 rounded-lg bg-[#161b22] p-4 max-w-[360px] w-full shadow-lg transition-opacity duration-700 ease-in-out ${
                        visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                    style={{ boxShadow: '0 0 20px #000000cc' }}
                    >
                    <div className="flex items-center space-x-2 mb-3 text-[11px] text-[#8b949e] font-semibold">
                        <i className="fab fa-github" />
                        <span>Hello-Rides - bike rental platform</span>
                        <span className="bg-[#a7f583] text-[#0e1114] rounded px-1.5 py-0.5 text-[9px] font-normal uppercase">
                            Proto type
                        </span>
                    </div>

                    <p className="text-[11px] text-[#8b949e] mb-3 leading-tight">
                        Hello-Rides is a full-stack bike rental platform that connects users looking to rent two-wheelers with
                        owners wanting to list their vehicles online.
                    </p>

                    <p className="text-[11px] text-[#8b949e] mb-3 leading-tight">
                        It offers seamless features for discovering, booking, and managing bike rentals in real-time.{' '}
                        <span className="font-semibold text-[#58a6ff]">
                            Tech Stack Django-Go-PostgreSQL-Redis-Next.js-Docker
                        </span>
                    </p>

                    <div className="bg-[#0d1117] rounded-md p-3 text-[11px] font-mono leading-snug text-[#8b949e]">
                        <div className="flex items-center space-x-2 mb-2">
                            <i className="fab fa-github" />
                            <span className="font-semibold">some code snippet</span>
                            <span className="bg-[#6e7681] text-[#c9d1d9] rounded px-1.5 py-0.5 text-[9px] font-normal uppercase">
                                AI
                            </span>
                        </div>
                        <pre className="overflow-x-auto rounded-md bg-[#161b22] p-2">
                            <code>
                                <span className="text-[#8b949e]">#City Routes</span>
                                <br />
                                <span className="text-[#8affbf]">
                                    cityRepo := &amp;citycontroller.CityCrud&#123;DB: db&#125;
                                </span>
                                <br />
                                <span className="text-[#8affbf]">
                                    cityService := &amp;citycontroller.CityService&#123;Repo: cityRepo&#125;
                                </span>
                                <br />
                                <span className="text-[#8affbf]">
                                    cityHandler := &amp;citycontroller.CityHandler&#123;Service: cityService&#125;
                                </span>
                                <br />
                                <br />
                                <span className="text-[#8b949e]">#Initialize Gin Server</span>
                                <br />
                                <span className="text-[#8affbf]">s := server.NewServer()</span>
                                <br />
                                <br />
                                <span className="text-[#8b949e]">#Register Routes</span>
                                <br />
                                <span className="text-[#8affbf]">
                                    authcontroller.RegisterAuthRoutes(s.Engine, authHandler)
                                </span>
                                <br />
                                <span className="text-[#8affbf]">
                                    vehiclecontroller.RegisterVehicleRoutes(s.Engine, vehicleHandler)
                                </span>
                                <br />
                                <span className="text-[#8affbf]">
                                    citycontroller.RegisterCityRoutes(s.Engine, cityHandler)
                                </span>
                            </code>
                        </pre>
                    </div>
                </div>

                <button
                    aria-label="Toggle"
                    onClick={() => setVisible((prev) => !prev)}
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#30363d] hover:bg-[#484f58] flex items-center justify-center text-[#8b949e]"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5-6h3m2 6a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h14z" />
                    </svg>

            </button>
            </div>
        </section>
    );
};

export default HelloRidesCard;
