import { PiMicrosoftExcelLogo, PiMicrosoftPowerpointLogo, PiMicrosoftWordLogo } from "react-icons/pi";
import { SiJira, SiMysql, SiFigma, SiSalesforce, SiAdp } from "react-icons/si";

export default function Tools() {
    const tools = [
        { label: "JIRA", icon: SiJira },
        { label: "MS Excel", icon: PiMicrosoftExcelLogo },
        { label: "MS Word", icon: PiMicrosoftWordLogo },
        { label: "MS PowerPoint", icon: PiMicrosoftPowerpointLogo },
        { label: "SQL (basic)", icon: SiMysql },
        { label: "Figma (basic)", icon: SiFigma },
        { label: "Salesforce", icon: SiSalesforce },
        { label: "ADP Reporting", icon: SiAdp },
    ];

    return (
        <section id="tools" className="py-20">
            <h2 className="text-3xl font-semibold mb-6">Tools I Use</h2>

            <div className="flex flex-wrap gap-4">
                {tools.map(({ label, icon: Icon }) => (
                    <span
                        key={label}
                        className="
              flex flex-col items-center gap-4
              px-3 py-1.5
              rounded-lg
              text-sm font-medium
              bg-blue-50
              hover:bg-blue-100 transition-colors
            ">
                        <Icon size={40} className="text-blue-700" />
                        {label}
                    </span>
                ))}
            </div>
        </section>
    );
}
