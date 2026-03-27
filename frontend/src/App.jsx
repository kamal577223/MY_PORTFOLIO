import { useEffect, useState } from 'react';
import { fetchProjects } from './api';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 

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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto p-8 pt-24">
        {/* Hero Section comes first */}
        <Hero />

        {/* Section Header for Projects */}
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent inline-block">
            Featured Projects 🚀
          </h1>
          <p className="text-slate-400 mt-2 text-lg">
            A showcase of my work in Software Development and Data Science.
          </p>
        </header>
        
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-blue-400 animate-pulse">Connecting to local database...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project._id} 
                className="group p-6 border border-slate-800 rounded-2xl bg-slate-800/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <h2 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h2>
                <p className="text-slate-400 mt-2 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] uppercase tracking-wider font-bold bg-slate-700 text-blue-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        
      </main>
    </div>
  );
}

export default App;