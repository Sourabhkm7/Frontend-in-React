import { useState } from 'react'
import { InputBox } from './components' // Custom InputBox component
import background from "./assets/background.jpg" // Background image import
import useCurrencyInfo from "./hooks/useCurrencyInfo" // Custom hook to fetch currency information

import './App.css' // Import global CSS

function App() {
  // State variables
  const [amount, setAmount] = useState(0) // Input amount for conversion
  const [from, setFrom] = useState("usd") // Source currency
  const [to, setTo] = useState("inr") // Target currency
  const [convertedAmount, setConvertedAmount] = useState(0) // Converted amount

  // Fetch currency information for the "from" currency
  const currencyInfo = useCurrencyInfo(from)

  // Extract available currency options
  const options = Object.keys(currencyInfo)

  // Swap the "from" and "to" currencies
  const swap = () => {
    setFrom(to) // Swap source to target
    setTo(from) // Swap target to source
    setConvertedAmount(amount) // Update converted amount to the original amount
    setAmount(convertedAmount) // Update the amount to the previously converted amount
  }

  // Perform currency conversion
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) // Multiply input amount by the conversion rate
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`, // Set background image
      }}
    >
      <div className="w-full">
        {/* Main container for the currency converter */}
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* Form for input and conversion */}
          <form
            onSubmit={(e) => {
              e.preventDefault() // Prevent page reload on form submission
              convert() // Trigger conversion
            }}
          >
            {/* Input box for "From" currency */}
            <div className="w-full mb-1">
              <InputBox
                label="From" // Label for the input
                amount={amount} // Value of the input field
                currencyOptions={options} // Dropdown options for currencies
                onCurrencyChange={(currency) => setFrom(currency)} // Handle "from" currency change
                selectCurrency={from} // Selected "from" currency
                onAmountChange={(amount) => setAmount(amount)} // Handle amount change
              />
            </div>
            {/* Swap button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap} // Trigger swap function
              >
                swap
              </button>
            </div>
            {/* Input box for "To" currency */}
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To" // Label for the input
                amount={convertedAmount} // Value of the converted amount
                currencyOptions={options} // Dropdown options for currencies
                onCurrencyChange={(currency) => setTo(currency)} // Handle "to" currency change
                selectCurrency={to} // Selected "to" currency
                amountDisable // Disable amount input for "to" field
              />
            </div>
            {/* Convert button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
