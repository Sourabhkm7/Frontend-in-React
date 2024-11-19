import React from 'react' // Import React for JSX and React components
import ReactDOM from 'react-dom/client' // Import ReactDOM for rendering the application
import App from './App.jsx' // Import the main App component
import './index.css' // Import global CSS styles
import { Provider } from 'react-redux' // Import Provider to connect Redux with the React app
import { store } from './app/store' // Import the Redux store

// Render the React application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Wrap the application with the Provider component to make the Redux store available throughout the app
  <Provider store={store}>
    {/* Render the main App component */}
    <App />
  </Provider>,
)
