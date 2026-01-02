import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";

export default function ProjectsPage() {
    return (
        <main className="bg-[#050505] min-h-screen text-white">
            <Navbar />
            <div className="pt-32">
                <ProjectsSection />
            </div>
        </main>
    );
}
