import CaseStudy from "./CaseStudy";

export default function CaseStudyList() {
    const data = [
        {
            title: "Requirement Analysis for CRM Migration",
            description: "Gathered stakeholder requirements, mapped processes and created FRD to support migration.",
            details: "Reduced ambiguity and accelerated developer handoff.",
        },
        {
            title: "Sales Process Optimization",
            description: "Analyzed workflows and proposed reporting & workflow improvements to improve throughput.",
            details: "Defined acceptance criteria and UAT plans.",
        },
    ];

    return (
        <section id="case-studies" className="py-20">
            <h2 className="text-3xl font-semibold mb-8">Case Studies</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {data.map((d, i) => (
                    <CaseStudy key={i} {...d} />
                ))}
            </div>
        </section>
    );
}
