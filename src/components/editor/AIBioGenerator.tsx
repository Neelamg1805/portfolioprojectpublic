import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "../../store/portfolioSlice.ts";
import { generateBio } from "../../lib/ai.ts";
import { Button } from "../ui/button.tsx";
import { Textarea } from "../ui/textarea.tsx";
import { Label } from "../ui/label.tsx";
import { Loader2, Sparkles } from "lucide-react";

export default function AIBioGenerator() {
  const dispatch = useDispatch();
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!skills.trim() || !experience.trim()) return;
    
    setIsGenerating(true);
    try {
      const bio = await generateBio(
        skills.split(",").map(skill => skill.trim()),
        experience
      );
      dispatch(updateUserData({ bio }));
    } catch (error) {
      console.error("Error generating bio:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <div className="flex items-center gap-2 mb-2">
        <Sparkles className="h-4 w-4 text-blue-500" />
        <h4 className="font-medium text-blue-800">AI Bio Generator</h4>
      </div>
      <p className="text-sm text-blue-700 mb-3">
        Let AI write a professional bio for you based on your skills and experience
      </p>
      <div className="space-y-3">
        <div>
          <Label htmlFor="skills" className="text-blue-800">Your Skills (comma separated)</Label>
          <Textarea
            id="skills"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="e.g. React, Node.js, UI/UX Design"
            className="bg-white"
          />
        </div>
        <div>
          <Label htmlFor="experience" className="text-blue-800">Your Experience</Label>
          <Textarea
            id="experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Briefly describe your experience"
            className="bg-white"
          />
        </div>
        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating || !skills.trim() || !experience.trim()}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isGenerating ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Generating...
            </>
          ) : (
            "Generate Bio"
          )}
        </Button>
      </div>
    </div>
  );
}