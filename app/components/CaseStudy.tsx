interface Props {
    title: string;
    description: string;
    details?: string;
    link?: string;
}

export default function CaseStudy({ title, description, details, link }: Props) {
    return (
        <div
            className="bg-white rounded-xl
        p-6
        border-primary
        border
        transition-all duration-200
        hover:-translate-y-1
      ">
            <h3 className="text-xl font-semibold mb-2 tracking-tight text-primary">{title}</h3>

            <p className="text-gray-700 mb-3 leading-relaxed">{description}</p>

            {details && <p className="text-sm text-muted mb-4 leading-relaxed">{details}</p>}

            {link && (
                <a href={link} className="text-primary font-semibold hover:underline underline-offset-4">
                    Read →
                </a>
            )}
        </div>
    );
}
