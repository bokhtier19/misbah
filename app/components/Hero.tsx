import { Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="py-20 h-[90vh]">
            <div className="flex flex-col items-center justify-around text-center h-full">
                <p className="text-muted">Hi, I'm</p>
                <p className="text-4xl text-primary md:text-7xl uppercase font-extrabold tracking-wider ">Misbaur Choudhury</p>

                <p className="text-lg text-muted mb-6">Business Analyst · Requirement Engineering · Process Optimization</p>

                <p className="max-w-2xl text-gray-700 mb-8">
                    I translate complex requirements into clear documentation and actionable insights—FRDs, BRDs, SRS, user stories, and test cases. I help teams align, reduce ambiguity, and ship
                    high-quality outcomes.
                </p>

                <div className="flex gap-4">
                    <a href="/resume.pdf" className="btn btn-primary">
                        <Download /> Resume
                    </a>
                    <a href="#contact" className="btn  border-2 border-primary rounded-2xl">
                        Contact
                    </a>
                </div>
            </div>
        </section>
    );
}
