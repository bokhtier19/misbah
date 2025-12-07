import { SiLinkedin, SiInstagram } from "react-icons/si";
import { Mail } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-20">
            <h2 className="text-3xl font-semibold mb-6">Contact</h2>

            <div className="grid md:grid-cols-2 gap-12">
                {/* LEFT — FORM */}
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                    {/* Your Access Key */}
                    <input type="hidden" name="access_key" value="1cd0600b-388a-4828-beca-dd1c510ab95a" />

                    <div>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input type="text" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input type="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Message</label>
                        <textarea name="message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" required></textarea>
                    </div>

                    <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                        Send Message
                    </button>
                </form>

                {/* RIGHT — CONTACT INFO */}
                <div className="space-y-8 ml-10">
                    <h3 className="text-xl font-semibold mb-3">Get In Touch</h3>
                    <p className="text-gray-700 mb-4">Feel free to reach out anytime.</p>

                    <a href="mailto:misbaur.analyst@gmail.com" className="flex items-center gap-3 text-gray-700 hover:text-blue-600">
                        <Mail size={22} />
                        misbaur.analyst@gmail.com
                    </a>

                    <div className="flex gap-5 mt-4">
                        <a href="https://linkedin.com/in/misbaur-choudhury" target="_blank" className="text-gray-700 hover:text-blue-600">
                            <SiLinkedin size={32} />
                        </a>

                        <a href="https://instagram.com/" target="_blank" className="text-gray-700 hover:text-pink-500">
                            <SiInstagram size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
