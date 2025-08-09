import { useState } from 'react';
import './App.css';

function App() {
  const [tools, setTools] = useState([
    {
      id: 1,
      name: "ChatGPT",
      category: "Writing",
      description: "AI-powered writing assistant for essays and research.",
      link: "https://chat.openai.com",
      glow: "var(--neon-blue)"
    },
    {
      id: 2,
      name: "GitHub Copilot",
      category: "Coding",
      description: "AI pair programmer for faster coding.",
      link: "https://github.com/features/copilot",
      glow: "var(--neon-green)"
    },
    {
      id: 3,
      name: "Elicit",
      category: "Research",
      description: "AI research assistant for papers and summaries.",
      link: "https://elicit.org",
      glow: "var(--neon-pink)"
    }
  ]);

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="neon-text text-4xl text-center mb-12">
        ✨ AI Tool Finder for Students ✨
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tools.map((tool) => (
          <div 
            key={tool.id} 
            className="neon-card"
            style={{ '--glow-color': tool.glow }}
          >
            <h2 className="text-2xl mb-2" style={{ color: tool.glow }}>
              {tool.name}
            </h2>
            <p className="text-gray-300 mb-4">{tool.description}</p>
            <a 
              href={tool.link} 
              target="_blank" 
              rel="noreferrer"
              className="neon-button inline-block"
            >
              Try Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
