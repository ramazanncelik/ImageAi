"use client"
import { useContext, createContext, useState, useMemo } from 'react';

const HomePageContext = createContext();

export const HomePageProvider = ({ children }) => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false)

    const generateImage = async () => {
        try {
            setIsSubmitting(true);
            const response = await fetch('/api/generate', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    prompt
                })
            });

            if (!response.ok) throw new Error(response.statusText || response.status);

            const generatedImage = await response.json();
            setImage(generatedImage);
            setIsSubmitting(false);
            setError(null);
        } catch (error) {
            setError(error)
            setIsSubmitting(false);
            throw new Error('Failed to generate');
        }
    }

    const changePrompt = async (newPrompt) => {
        setPrompt(newPrompt);
        window.scrollTo(0, 0);
    }

    const data = useMemo(
        () => ({
            prompt,
            setPrompt,
            generateImage,
            changePrompt,
            image,
            error,
            isSubmitting
        }),
        [prompt, image, error, isSubmitting]
    );

    return (
        <HomePageContext.Provider value={data}>
            {children}
        </HomePageContext.Provider>
    )
}

export const useHomePage = () => {
    const context = useContext(HomePageContext);
    return context;
}
