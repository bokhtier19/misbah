export default function Documents() {
    return (
        <section id="documents" className="py-20">
            <h2 className="text-3xl font-semibold mb-6">Documents</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Sample FRD</li>
                <li>Sample BRD</li>
                <li>Sample SRS</li>
                <li>Sample Test Cases</li>
            </ul>

            <div className="mt-6">
                <a href="/resume.pdf" className="btn btn-primary">
                    View Resume (PDF)
                </a>
            </div>
        </section>
    );
}
