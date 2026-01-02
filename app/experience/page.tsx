import ExperienceSection from "../components/ExperienceSection";
import Navbar from "../components/Navbar";

export default function ExperiencePage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white">
            <Navbar />
            <div className="pt-32">
                <ExperienceSection />
            </div>
        </main>
    );
}
