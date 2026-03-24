import { useEffect, useState } from 'react';
import { fetchProjects } from './api';

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
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold text-blue-400 mb-6">My Projects 🚀</h1>
      
      {loading ? (
        <p>Loading projects from local database...</p>
      ) : (
        <div className="grid gap-4">
          {projects.map((project) => (
            <div key={project._id} className="p-4 border border-slate-700 rounded-lg bg-slate-800">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-slate-400">{project.description}</p>
              <div className="mt-2 flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-blue-900 px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;