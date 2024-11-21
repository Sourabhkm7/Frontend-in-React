import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // State variables for managing password options
  const [length, setLength] = useState(8) // Length of the password
  const [numAllowed, setNumAllowed] = useState(false) // Include numbers in password
  const [charAllowed, setCharAllowed] = useState(false) // Include special characters in password
  const [password, setPassword] = useState("") // Generated password

  // Reference to the password input field
  const passwordRef = useRef(null)

  // Function to generate a random password
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Default character set (letters)

    if (numAllowed) str += "0123456789" // Add numbers if allowed
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|<>?/~" // Add special characters if allowed

    for (let i = 0; i < length; i++) {
      // Randomly select characters from the string
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass) // Update the password state
  }, [length, numAllowed, charAllowed, setPassword])

  // Function to copy the password to the clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select() // Select the text in the password input field
    passwordRef.current?.setSelectionRange(0, 100) // Set the selection range
    window.navigator.clipboard.writeText(password) // Copy the text to clipboard
  }, [password])

  // Automatically generate a password when the component mounts or options change
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        {/* Title */}
        <h1 className="text-white text-center">Password Generator</h1>

        {/* Password display and copy button */}
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // Attach the ref to the input field
          />
          <button
            onClick={copyPasswordToClipboard} // Copy password to clipboard
            className="outline-none bg-blue-700 text-white py-0.5 shrink-0 hover:bg-blue-800 hover:scale-105 hover:shadow-md transition transform duration-200"
          >
            Copy
          </button>
        </div>

        {/* Controls for password options */}
        <div className="flex text-sm gap-x-2">
          {/* Slider for password length */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length} // Bind to state
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value) // Update length state
              }}
            />
            <label>Length: {length}</label>
          </div>

          {/* Checkbox to include numbers */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numInput"
              onChange={() => {
                setNumAllowed((prev) => !prev) // Toggle number inclusion
              }}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>

          {/* Checkbox to include special characters */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev) // Toggle special character inclusion
              }}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
