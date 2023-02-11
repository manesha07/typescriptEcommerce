export default function authHeader() {
  const user = JSON.parse(localStorage.getItem("user"));
    const adminToken = JSON.parse(localStorage.getItem("token"));
    console.log("uutmathiokeb",user);
    if (user && adminToken) {
      return {'Content-Type': 'application/json',
      'Authorization': `Bearer ${ adminToken}`};
    //   return { "x-auth-token": user.accessToken };
    } else {
      return {};
    }
  }