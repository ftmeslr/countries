import { useState } from "react";
import { useTheme } from "../../../../contexts/ThemeContext";
import { Moon, Sun } from "../../../../assets/icons";


const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-3 text-gray-800 dark:text-gray-200 transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
            {theme === 'dark' ? (
                <div className="flex items-center gap-3">
                    <Sun />
                    <p>Light Mode</p>
                </div>
            ) : (
                <div className="flex items-center gap-3">
                    <Moon />
                    <p>Dark Mode</p>
                </div>
            )}
        </button>
    );
};
export const Header = () => {

    const [isLight, setIsLight] = useState();

    return (
        <div className="w-full py-8 shadow flex items-center justify-between px-8">
            <p className="font-bold text-xl">
                Where in the world?
            </p>
            <div>
                <ThemeSwitcher />
            </div>
        </div>
    )
}