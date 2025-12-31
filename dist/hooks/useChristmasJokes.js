import { useState, useEffect, useCallback } from 'react';
import { GoogleGenAI, Type } from '@google/genai';
const API_KEY = process.env.API_KEY;
const FALLBACK_JOKES = [
    "What do you call an elf who sings? A wrapper!",
    "Why did the snowman call his dog Frost? Because Frost bites!",
    "What do you get if you cross a bell with a skunk? Jingle smells!",
    "What's a snowman's favorite drink? Iced tea!",
    "Why are Christmas trees so bad at knitting? They always drop their needles!",
    "What do you call a greedy elf? Elfish!",
    "What is Santa's favorite type of music? Wrap!",
    "How does a snowman get around? By riding an icicle!",
    "What do you call a broke Santa? Saint-Nickeless.",
    "What's the difference between the Christmas alphabet and the ordinary alphabet? The Christmas alphabet has No-el.",
    "What do you call an old snowman? Water.",
    "Why was the Christmas tree so happy? It had a lot of presents under it!"
];
export const useChristmasJokes = () => {
    const [jokes, setJokes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchJokes = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        if (!API_KEY) {
            console.warn("API key is missing. Using fallback jokes.");
            setJokes(FALLBACK_JOKES);
            setIsLoading(false);
            return;
        }
        try {
            const ai = new GoogleGenAI({ apiKey: API_KEY, vertexai: true });
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: {
                    role: 'user',
                    parts: [{ text: "Generate exactly 12 unique, short, cringe-worthy, family-friendly Christmas puns or jokes. Each joke should be a single sentence or a question and answer." }]
                },
                config: {
                    responseMimeType: 'application/json',
                    responseSchema: {
                        type: Type.OBJECT,
                        properties: {
                            jokes: {
                                type: Type.ARRAY,
                                description: "An array of 12 Christmas joke strings.",
                                items: {
                                    type: Type.STRING
                                }
                            }
                        }
                    }
                }
            });
            const jsonText = response.text.trim();
            const parsedResponse = JSON.parse(jsonText);
            if (parsedResponse.jokes && Array.isArray(parsedResponse.jokes) && parsedResponse.jokes.length > 0) {
                setJokes(parsedResponse.jokes.slice(0, 12));
            }
            else {
                throw new Error("Invalid joke format received from API.");
            }
        }
        catch (e) {
            console.error("Failed to fetch jokes from Gemini API:", e);
            setError("Could not fetch the festive fun. Using fallback jokes.");
            setJokes(FALLBACK_JOKES);
        }
        finally {
            setIsLoading(false);
        }
    }, []);
    useEffect(() => {
        fetchJokes();
    }, [fetchJokes]);
    return { jokes, isLoading, error };
};
