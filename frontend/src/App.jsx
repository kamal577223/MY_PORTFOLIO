import { useEffect, useState } from 'react';
import { fetchProjects } from './api';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const { data } = await fetchProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-blue-500/30">
      {/* Fixed Navigation */}
      <Navbar />

      <main className="pt-16">
        {/* Section 1: Introduction */}
        <Hero />

        {/* Section 2: Technical Expertise */}
        <Skills />

        {/* Section 3: Portfolio Gallery */}
        <section id="projects" className="max-w-6xl mx-auto px-8 py-20">
          <header className="mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent inline-block">
              Featured Projects 🚀
            </h2>
            <p className="text-slate-400 mt-2 text-lg">
              Real-world applications focusing on MERN stack and Database management.
            </p>
          </header>
          
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-blue-400 font-medium">Fetching from local MongoDB...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <article 
                  key={project._id} 
                  className="group relative p-6 border border-slate-800 rounded-2xl bg-slate-800/40 hover:bg-slate-800/60 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 shadow-xl hover:shadow-blue-500/10"
                >
                  <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mt-3 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10px] uppercase tracking-widest font-bold bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Decorative element for 'Future Demand' look */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping"></div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-10 border-t border-slate-800 text-center text-slate-500 text-sm">
        <p>© 2026 Kamal | Built with MERN Stack</p>
      </footer>
    </div>
  );
}

export default App;