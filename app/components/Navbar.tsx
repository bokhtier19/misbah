"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const items = [
    { label: "Case Studies", href: "#case-studies" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm">
            <div className="container flex items-center justify-between h-16">
                <a href="#home" className="text-xl text-blue-600 font-semibold">
                    Misbaur
                </a>

                <div className="hidden md:flex items-center gap-8 text-sm">
                    {items.map((it) => (
                        <a key={it.href} href={it.href} className="nav-link text-gray-700">
                            {it.label}
                        </a>
                    ))}

                    <a href="/resume.pdf" className="btn-primary btn rounded-xl py-1 px-2 ml-4 text-sm">
                        Resume
                    </a>
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="menu">
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {open && (
                <div className="md:hidden bg-white/95">
                    <div className="container flex flex-col py-4 gap-3 text-sm">
                        {items.map((it) => (
                            <a key={it.href} href={it.href} onClick={() => setOpen(false)} className="py-1">
                                {it.label}
                            </a>
                        ))}

                        <a href="/resume.pdf" className="btn-primary mt-2 text-sm">
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
