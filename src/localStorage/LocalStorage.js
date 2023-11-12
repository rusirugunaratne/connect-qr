// Save the username to local storage
export const saveUsernameToLocalStorage = (username) => {
    localStorage.setItem("username", username);
};

// Get the username from local storage
export const getUsernameFromLocalStorage = () => {
    return localStorage.getItem("username");
};
