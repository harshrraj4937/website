import Image from 'next/image';

const MoneyMonitorCard = () => {
    return (
        <section
            className="relative flex justify-center items-center pt-12 pb-20 px-4"
            style={{
                background: 'linear-gradient(180deg, #1c1f2a 0%, #7f7de6 40%, #3a6a8a 80%)',
            }}
        >
            <div
                className="relative rounded-xl border border-[#bfc0ff33] shadow-[0_0_20px_#bfc0ff33] p-6 max-w-[720px] w-full"
                style={{ backdropFilter: 'blur(10px)' }}
            >
                <Image
                    src="/money-monitor.png"
                    alt="money-monitor hero"
                    className="rounded-lg shadow-lg"
                    width={600}
                    height={280}
                />

                <div
                    className="absolute top-1/2 -right-5 -translate-y-1/2 rounded-lg bg-[#161b22] p-4 max-w-[360px] w-full shadow-lg"
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
                    aria-label="Play"
                    className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-[#30363d] hover:bg-[#484f58] flex items-center justify-center text-[#8b949e] text-xs"
                >                ▶️
                    {/* <i className="fas fa-play" /> */}
                </button>
            </div>
        </section>
    );
};

export default MoneyMonitorCard;
