import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <div className="mb-4 px-4 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium">
        Available for new opportunities in 2026
      </div>
      
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        Hi, I'm <span className="text-blue-500">Kamal</span>
      </h1>

      <div className="text-2xl md:text-4xl font-semibold text-slate-300 h-12">
        I am a{' '}
        <span className="text-emerald-400">
          <Typewriter
            words={['Software Developer', 'Data Scientist', 'MERN Stack Expert', 'SQL Enthusiast']}
            loop={0} // Infinitely loops
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </span>
      </div>

      <p className="mt-8 max-w-2xl text-slate-400 text-lg leading-relaxed">
        Building scalable web applications and designing complex database architectures. 
        Specialized in the MERN stack and Social Network Analysis.
      </p>

      <div className="mt-10 flex gap-4">
        <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-full font-bold transition-all shadow-lg shadow-blue-500/20">
          View My Work
        </a>
        <a href="#contact" className="px-8 py-3 border border-slate-700 hover:bg-slate-800 rounded-full font-bold transition-all">
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;