import React from 'react'; // Importing React
import useTheme from '../contexts/Theme'; // Importing the custom theme context hook

export default function ThemeBtn() {
    // Destructuring values from the custom hook
    const { themeMode, lightTheme, darkTheme } = useTheme();

    // Handles theme toggle button change
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked; // Get the toggle state (checked/unchecked)
        if (darkModeStatus) {
            darkTheme(); // Enable dark theme if checked
        } else {
            lightTheme(); // Enable light theme if unchecked
        }
    };

    return (
        // Toggle button with accessibility and styling
        <label className="relative inline-flex items-center cursor-pointer">
            {/* Hidden checkbox used for toggling */}
            <input
                type="checkbox"
                value=""
                className="sr-only peer" // sr-only hides the input but keeps it accessible for screen readers
                onChange={onChangeBtn} // Trigger theme change on toggle
                checked={themeMode === "dark"} // Set initial state based on the current theme
            />
            {/* The visible toggle design */}
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            
            {/* Label text */}
            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
        </label>
    );
}
