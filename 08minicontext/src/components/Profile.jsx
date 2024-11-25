
import React, { useContext } from 'react'; // Import React and the useContext hook to use context
import UserContext from '../context/UserContext'; // Import the UserContext to access user-related data

function Profile() {
    // Access the `user` object from the UserContext using the useContext hook
    const { user } = useContext(UserContext);

    // Check if a user is logged in. If not, show a "Please Login" message.
    if (!user) return <div>Please Login</div>;

    // If the user is logged in, display a welcome message with their username.
    return <div>Welcome {user.username}</div>;
}

export default Profile; // Export the Profile component for use elsewhere
