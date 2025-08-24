import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#1d1d1d] text-white border-t border-gray-600 px-6 py-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* Newsletter */}
                <div>
                    <h3 className="uppercase text-sm tracking-wide mb-4">
                        Contact me for collaborations, portfolio requests, or project inquiries.
                    </h3>
                    <div className="flex items-center border-b border-gray-500 max-w-sm">
                        <input
                            type="email"
                            placeholder="Your email here"
                            className="bg-transparent w-full px-2 py-2 text-sm focus:outline-none"
                        />
                        <button className="text-xl">→</button>
                    </div>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="uppercase text-sm font-semibold mb-4">Social Media</h3>
                    <ul className="space-y-2 ">
                        <li><a href="#" className="hover:text-white">Facebook</a></li>
                        <li><a href="#" className="hover:text-white">Instagram</a></li>
                        <li><a href="#" className="hover:text-white">Pinterest</a></li>
                        <li><a href="#" className="hover:text-white">Twitter/X</a></li>
                    </ul>
                </div>

                {/* Let's Talk */}
                <div>
                    <h3 className="uppercase text-sm font-semibold mb-4">Let’s Talk</h3>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li>📧danekema9924@gmail.com</li>
                        <li>📞 404-200-0349</li>
                        <li>📍 comfort of my desk</li>
                    </ul>
                </div>

                {/* Navigation with React Router */}
                <div className="flex flex-col space-y-3 text-sm font-semibold">
                    <Link to="/" className="hover:text-gray-400">Home →</Link>
                    <Link to="/portfolio" className="hover:text-gray-400">Portfolio →</Link>
                    <Link to="/blog" className="hover:text-gray-400">Blog/News →</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact Us →</Link>
                </div>
            </div>

            {/* Bottom Branding */}
            <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between">
                <h1 className="text-3xl font-bold tracking-widest">DNL.DEV</h1>
                <span className="text-2xl">↗</span>
            </div>

            {/* Copyright */}
            <p className="mt-6 text-center !text-gray-500  text-xs">
                © 2025 DNL.DEV
                portfolio. All Rights Reserved.
            </p>
        </footer>
    );
}
