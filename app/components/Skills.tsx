export default function Skills() {
    const skills = ["Requirement Gathering", "FRD / BRD / SRS", "User Stories", "Test Case Design", "Gap Analysis", "Stakeholder Communication", "UAT Support", "SDLC", "Agile (Scrum)"];

    return (
        <section id="skills" className="py-20">
            <h2 className="text-3xl font-semibold mb-6">Skills</h2>
            <div className="flex flex-wrap gap-3">
                {skills.map((s) => (
                    <span
                        key={s}
                        className="
    inline-flex
    items-center
    px-3
    py-1
    rounded-xl
    text-sm
    font-medium
    text-white
    bg-primary
  ">
                        {s}
                    </span>
                ))}
            </div>
        </section>
    );
}
