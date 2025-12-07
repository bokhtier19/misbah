import { Pointer } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="py-24">
            <div className="flex flex-col md:flex-row items-center justify-center">
                {/* LEFT — TEXT */}
                <div className="flex-1 gap-16 items-center flex flex-col">
                    <h2 className="text-3xl font-bold mb-6">About Me</h2>

                    <p className="text-lg text-gray-700 mb-6">
                        I’m a detail-oriented Business Analyst who specializes in translating business needs into clear, actionable documentation. I bring structure, clarity, and alignment to teams by
                        ensuring requirements are understood and executed effectively.
                    </p>

                    <ul className="list-none pl-1 text-gray-700 space-y-2">
                        <li className="flex gap-2 items-center">
                            <Pointer className="rotate-90" />
                            Creating FRDs, BRDs, SRS, user stories, and test cases
                        </li>

                        <li className="flex gap-2 items-center">
                            <Pointer className="rotate-90" />
                            Conducting gap analysis and supporting UAT
                        </li>

                        <li className="flex gap-2 items-center">
                            <Pointer className="rotate-90" />
                            Documenting processes, workflows & acceptance criteria
                        </li>

                        <li className="flex gap-2 items-center">
                            <Pointer className="rotate-90" />
                            Collaborating with stakeholders and tech teams
                        </li>

                        <li className="flex gap-2 items-center">
                            <Pointer className="rotate-90" />
                            Working in Agile and Waterfall environments
                        </li>
                    </ul>
                </div>

                {/* Image Profile */}
                <div className="flex justify-center items-center flex-1 h-80 w-60 p-8 overflow-hidden">
                    <img src="/profile.jpeg" alt="Misbaur Choudhury" className="object-cover h-full w-full rounded-xl" />
                </div>
            </div>
        </section>
    );
}
