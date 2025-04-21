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
    <div className="text-[9px] font-['Press_Start_2P'] max-w-4xl mx-auto bg-[#282828] p-12 rounded-lg shadow-lg animate-float">
      <h2 className="text-[18px] text-[#fabd2f] mb-6 text-center">Create Your Character</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-[14px] text-[#b8bb26]">Character Details</h3>
          
          <div>
            <label htmlFor="name" className="block text-[#83a598] mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={formData.character_name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#3c3836] border-2 border-[#504945] rounded text-[#ebdbb2] focus:border-[#83a598] focus:ring-2 focus:ring-[#83a598] transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="race" className="block text-[#83a598] mb-1">Race</label>
            <input
              type="text"
              id="race"
              value={formData.traits}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#3c3836] border-2 border-[#504945] rounded text-[#ebdbb2] focus:border-[#83a598] focus:ring-2 focus:ring-[#83a598] transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="class" className="block text-[#83a598] mb-1">Class</label>
            <input
              type="text"
              id="class"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#3c3836] border-2 border-[#504945] rounded text-[#ebdbb2] focus:border-[#83a598] focus:ring-2 focus:ring-[#83a598] transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="background" className="block text-[#83a598] mb-1">Background</label>
            <textarea
              id="background"
              value={formData.background}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-[#3c3836] border-2 border-[#504945] rounded text-[#ebdbb2] focus:border-[#83a598] focus:ring-2 focus:ring-[#83a598] transition-all duration-300"
              required
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[14px] text-[#b8bb26]">World Settings</h3>
          
          <div>
            <label htmlFor="worldName" className="block text-[#83a598] mb-1">World Name</label>
            <input
              type="text"
              id="worldName"
              value={formData.genre}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#3c3836] border-2 border-[#504945] rounded text-[#ebdbb2] focus:border-[#83a598] focus:ring-2 focus:ring-[#83a598] transition-all duration-300"
              required
            />
          </div>

          <div>
            <label htmlFor="worldDescription" className="block text-[#83a598] mb-1">World Description</label>
            <textarea
              id="worldDescription"
              value={formData.world_description}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-2 bg-[#3c3836] border-2 border-[#504945] rounded text-[#ebdbb2] focus:border-[#83a598] focus:ring-2 focus:ring-[#83a598] transition-all duration-300"
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-4 px-6 bg-[#83a598] text-[#282828] font-bold rounded-lg hover:bg-[#b8bb26] active:bg-[#fabd2f] transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#83a598]/50"
        >
          Begin Your Adventure
        </button>
      </form>
    </div>
  );
};

export default CharacterForm; 