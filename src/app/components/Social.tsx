import {
    FaLinkedin,
    FaGithub,
    FaInstagram,
    FaSearch,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function HeaderActions() {
    return (
        <div className="flex items-center space-x-4">
            {/* Search bar */}
            <div className="relative">
                <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
                    <FaSearch />
                </span>
                <input
                    type="text"
                    placeholder="Search or jump to..."
                    className="bg-[#1A1F3D] rounded-md text-sm text-gray-300 placeholder:text-gray-400 pl-9 pr-12 py-2 w-[200px] focus:outline-none focus:ring-1 focus:ring-gray-500"
                />
                <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 text-[11px] font-semibold select-none">
                    /
                </span>
            </div>

            {/* Social Icons */}
            <a
                href="https://www.linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition text-lg"
                aria-label="LinkedIn"
            >
                <FaLinkedin />
            </a>
            <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition text-lg"
                aria-label="GitHub"
            >
                <FaGithub />
            </a>
            <a
                href="https://leetcode.com/your-leetcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-orange-400 transition text-lg"
                aria-label="LeetCode"
            >
                <SiLeetcode />
            </a>
            <a
                href="https://www.instagram.com/your-instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-400 transition text-lg"
                aria-label="Instagram"
            >
                <FaInstagram />
            </a>
        </div>
    );
}
