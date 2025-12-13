import React, { createContext, useContext, useEffect, useState, type ReactNode } from 'react';


// 1. Define the type/shape of the context value
interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

// 2. Create the Context with an initial value or `null`
// The `!` tells TypeScript that this will be initialized later in the provider.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Function to determine the initial theme (remains the same)
const getInitialTheme = (): 'light' | 'dark' => {
    // ... logic ...
    return 'light'; // Simplified for example
};

// 3. Define props for the provider
interface ThemeProviderProps {
    children: ReactNode;
}

// 4. Create the Provider Component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove existing theme class (if any)
        root.classList.remove(theme === 'dark' ? 'light' : 'dark');

        // Add the current theme class
        root.classList.add(theme);

        // Save the new preference to localStorage
        localStorage.setItem('theme', theme);
    }, [theme]); // Reruns whenever 'theme' state changes

    // 4. Function to toggle the theme
    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
                {children}
        </ThemeContext.Provider>
    );
};


// 5. Custom Hook for easy consumption (most important change)
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};