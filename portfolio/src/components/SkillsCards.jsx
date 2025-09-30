import React, { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';


const SkillsCards = () => {
  const { theme } = useContext(ThemeContext);

  const skillsData = [
    {
      id: 1,
      name: 'PostgreSQL',
      icon: '🐘',
      percentage: 82,
      category: 'Database',
      description: 'Advanced open-source relational database',
      barColor: 'bg-gradient-to-r from-blue-500 to-indigo-600'
    },
    {
      id: 2,
      name: 'Firebase',
      icon: '🔥',
      percentage: 80,
      category: 'Backend',
      description: "Google's platform for web and mobile applications",
      barColor: 'bg-gradient-to-r from-yellow-400 to-orange-500'
    },
    {
      id: 3,
      name: 'Tailwind CSS',
      icon: '🎨',
      percentage: 95,
      category: 'Styling',
      description: 'Utility-first CSS framework for rapid UI development',
      barColor: 'bg-gradient-to-r from-cyan-400 to-blue-500'
    },
    {
      id: 4,
      name: 'Docker',
      icon: '🐳',
      percentage: 75,
      category: 'DevOps',
      description: 'Containerization platform for consistent deployments',
      barColor: 'bg-gradient-to-r from-blue-400 to-blue-600'
    },
    {
      id: 5,
      name: 'AWS',
      icon: '☁️',
      percentage: 70,
      category: 'Cloud',
      description: 'Amazon Web Services for cloud infrastructure',
      barColor: 'bg-gradient-to-r from-orange-400 to-yellow-500'
    },
    {
      id: 6,
      name: 'Git',
      icon: '📝',
      percentage: 90,
      category: 'Tools',
      description: 'Version control system for tracking changes',
      barColor: 'bg-gradient-to-r from-red-400 to-pink-500'
    },
    {
      id: 7,
      name: 'Node.js',
      icon: '💚',
      percentage: 90,
      category: 'Backend',
      description: 'Server-side JavaScript runtime for scalable applications',
      barColor: 'bg-gradient-to-r from-green-400 to-green-600'
    },
    {
      id: 8,
      name: 'Next.js',
      icon: '▲',
      percentage: 90,
      category: 'Framework',
      description: 'React framework for production-ready applications',
      barColor: 'bg-gradient-to-r from-black to-gray-800'
    }
  ];

  const darkMode = theme === 'dark';

  return (
    <div className={`min-h-screen transition-colors duration-300 px-20 ${darkMode ? 'bg-black' : 'bg-gray-50'}`}>
      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {skillsData.map((card) => (
          <div
            key={card.id}
            className={`rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${
              darkMode
                ? 'bg-gray-800 border border-gray-700'
                : 'bg-white border border-gray-100'
            }`}
          >
            {/* Header with icon, name and percentage */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl overflow-hidden">{card.icon}</span>
                <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {card.name}
                </h2>
              </div>
              <span className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {card.percentage}%
              </span>
            </div>

            {/* Progress bar */}
            <div className={`w-full rounded-full h-2 mb-4 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div
                className={`h-2 rounded-full ${card.barColor}`}
                style={{ width: `${card.percentage}%` }}
              ></div>
            </div>

            {/* Category */}
            <h3 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {card.category}
            </h3>

            {/* Description */}
            <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCards;