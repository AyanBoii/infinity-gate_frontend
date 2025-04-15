import React, { useState } from "react";

interface CharacterFormProps {
  onSubmit: (formData: any) => void;
}

const CharacterForm: React.FC<CharacterFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    character_name: "Eldara Moonweaver",
    background: "A former elven archmage who left the Ivory Tower after a magical accident. Now seeks redemption through adventure.",
    traits: "Intelligent, Mysterious, Haunted by past mistakes, Seeks knowledge",
    description: "Tall and graceful with silver hair and glowing blue eyes. Wears flowing robes adorned with arcane symbols.",
    genre: "Fantasy",
    world_description: "A high-fantasy world with magic and mythical creatures. The realm is divided between the ancient elven forests, human kingdoms, and the mysterious Shadowlands.",
    main_conflict: "The ancient evil is rising and threatens the realm. Dark magic is corrupting the land, and only those with the gift of magic can hope to stop it.",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="w-full max-w-2xl p-6 bg-gray-800 rounded-lg shadow-lg text-white mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Create Your Character</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Character details */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            Character Details
          </h3>

          <div className="mb-4">
            <label htmlFor="character_name" className="block mb-1">
              Name
            </label>
            <input
              type="text"
              id="character_name"
              name="character_name"
              value={formData.character_name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="background" className="block mb-1">
              Background
            </label>
            <textarea
              id="background"
              name="background"
              value={formData.background}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="traits" className="block mb-1">
              Traits
            </label>
            <input
              type="text"
              id="traits"
              name="traits"
              value={formData.traits}
              onChange={handleChange}
              placeholder="Brave, curious, stubborn, etc."
              className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block mb-1">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>
        </div>

        {/* World settings */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
            World Settings
          </h3>

          <div className="mb-4">
            <label htmlFor="genre" className="block mb-1">
              Genre
            </label>
            <select
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Fantasy">Fantasy</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Post-Apocalyptic">Post-Apocalyptic</option>
              <option value="Cyberpunk">Cyberpunk</option>
              <option value="Historical">Historical</option>
              <option value="Steampunk">Steampunk</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="world_description" className="block mb-1">
              World Description
            </label>
            <textarea
              id="world_description"
              name="world_description"
              value={formData.world_description}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>

          <div className="mb-4">
            <label htmlFor="main_conflict" className="block mb-1">
              Main Conflict
            </label>
            <textarea
              id="main_conflict"
              name="main_conflict"
              value={formData.main_conflict}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-gray-700 rounded border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={2}
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors"
        >
          Begin Adventure
        </button>
      </form>
    </div>
  );
};

export default CharacterForm; 