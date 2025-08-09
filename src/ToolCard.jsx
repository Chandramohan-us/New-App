export const ToolCard = ({ tool }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden">
      <img src={tool.image} alt={tool.name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-bold text-lg dark:text-white">{tool.name}</h3>
        <p className="text-gray-600 dark:text-gray-300">{tool.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-yellow-500">⭐ {tool.rating}</span>
          <a href={tool.link} target="_blank" className="text-blue-500 hover:underline">
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};
