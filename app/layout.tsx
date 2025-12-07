import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
    title: "Misbaur Choudhury — Business Analyst",
    description: "Business Analyst Portfolio — Misbaur Choudhury",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="antialiased" suppressHydrationWarning>
                <Navbar />
                <main className="pt-28">
                    <div className="container">{children}</div>
                </main>
            </body>
        </html>
    );
}
