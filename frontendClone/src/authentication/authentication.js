const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  export const authService =  {
    getCurrentUser,
    logout
  }