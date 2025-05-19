import HeaderActions from "./Social";

export default function Header() {
    return (
        <header className="bg-[#0B1033] sticky top-0 z-49 shadow-md backdrop-blur-sm">
            <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-6 py-5">
                <div className="flex items-center space-x-8">
                    <a href="#" className="flex items-center">
                        <span className="text-xl sm:text-2xl font-extrabold text-white tracking-wide hover:text-purple-400 transition-colors duration-300">
                            Harshraj Sadwelkar
                        </span>
                    </a>
                    <ul className="hidden md:flex space-x-8 text-base font-medium text-white">
                        {["Resources", "Open Source"].map(
                            (item) => (
                                <li key={item} className="relative group cursor-pointer hover:text-purple-400 transition-colors duration-300">
                                    <span>
                                        {item} <i className="fas fa-caret-down text-sm ml-1" />
                                    </span>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                <div className="hidden md:flex items-center space-x-5">
                    <HeaderActions/>
                </div>
            </nav>
        </header>
    );
}
