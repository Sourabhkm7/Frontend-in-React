import { useEffect, useState } from 'react' // Importing necessary React hooks
import './App.css' // Importing global CSS for styling
import { ThemeProvider } from './contexts/Theme.js' // Context provider for theme
import ThemeBtn from './components/ThemeButton.jsx' // Theme toggle button component
import Card from './components/Card.jsx' // Card component to display themed content

function App() {
  // State to manage the current theme mode ("light" or "dark")
  const [themeMode, setThemeMode] = useState("light")

  // Function to set the theme to "light"
  const lightTheme = () => {
    setThemeMode("light")
  }

  // Function to set the theme to "dark"
  const darkTheme = () => {
    setThemeMode("dark")
  }

  // Effect to apply the selected theme by updating the <html> element's class
  useEffect(() => {
    const htmlElement = document.querySelector('html') // Select the <html> element
    htmlElement.classList.remove("light", "dark") // Remove any existing theme class
    htmlElement.classList.add(themeMode) // Add the current theme class
  }, [themeMode]) // Dependency array ensures this runs when `themeMode` changes

  return (
    <>
      {/* ThemeProvider makes the theme state and toggle functions available to children */}
      <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            {/* Theme button section */}
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn /> {/* Component to toggle between light and dark themes */}
            </div>

            {/* Card section */}
            <div className="w-full max-w-sm mx-auto">
              <Card /> {/* Component displaying content styled based on the current theme */}
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
