// components/Header.tsx

export default function Header() {
    return (
        <header className="bg-[#0B1033]">
            <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-3">
                <div className="flex items-center space-x-6">
                    <a href="#" className="flex items-center">
                        <span className="text-lg sm:text-xl font-extrabold text-white tracking-wide hover:text-purple-400 transition-colors duration-300">
                            Harshraj Sadwelkar
                        </span>
                    </a>
                    <ul className="hidden md:flex space-x-6 text-sm font-normal">
                        {["Product", "Solutions", "Resources", "Open Source", "Enterprise"].map(
                            (item) => (
                                <li key={item} className="relative group cursor-pointer">
                                    <span>
                                        {item} <i className="fas fa-caret-down text-xs ml-1" />
                                    </span>
                                </li>
                            )
                        )}
                        <li className="cursor-pointer">Pricing</li>
                    </ul>
                </div>

                <div className="hidden md:flex items-center space-x-4">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <i className="fas fa-search" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search or jump to..."
                            className="bg-[#1A1F3D] rounded-md text-xs text-gray-300 placeholder:text-gray-400 pl-9 pr-12 py-1.5 w-[180px] focus:outline-none focus:ring-1 focus:ring-gray-500"
                        />
                        <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-[10px] font-semibold select-none">
                            /
                        </span>
                    </div>
                    <button className="text-sm font-normal">Sign in</button>
                    <button className="text-sm font-normal border border-white rounded-md px-3 py-1 hover:bg-white hover:text-[#0B1033] transition">
                        Sign up
                    </button>
                </div>
            </nav>
        </header>
    );
}
