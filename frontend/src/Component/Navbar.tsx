import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { authService } from '../authentication/authentication';
// import img from '../image/e.png';

type Params = {
  id: string;
};

type User = {
  currentUser:any;
};

type Cart = {
  count: number;
};

export const Navbar = () => {
  const { id } = useParams<Params>();
  const [cartLength, setCartLength] = useState(0);
  const navigate = useNavigate();
  const cart = useSelector<{cart: Cart}, Cart>(state => state.cart);
  const [currentUser, setCurrentUser] = useState< null>();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
   console.log("user",user)
    if (user) {
      setCurrentUser(user.currentUser);
    }
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const cartCounts = cart.reduce((acc:any, item:any) => acc + item.cartQuantity, 0);
    setCartLength(cartCounts);
  }, [cart.count]);

  const logOut = () => {
    authService.logout();
    navigate('/');
    window.location.reload();
  };
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);

    return (
      <>
        <div className="nav flex flex-wrap justify-between bg-[#e8e8e8]">
          <div className="flex justify-start inline-block">
            {/* <Link to="/">
              <img
                src={img}
                alt="hero img"
                className="h-[70px] w-[70px] pt-[5px]"
              />
            </Link> */}
          </div>
          <ul className="inline-block flex text-grey justify-end py-[20px] items-center">
            <li className="p-[10px] hover:bg-[orange] ">
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li className="p-[10px] hover:bg-[orange] ">
              {" "}
              <Link to="/">Contact</Link>
            </li>
            <li className="p-[10px] hover:bg-[orange] ">
              {" "}
              <Link to="/products"> Our Products </Link>
            </li>
            {/* if customer is logged in then cart is shown, if admin is logged in dashboard is shown */}
            {currentUser ? (
              currentUser === "user" ? (
                <>
                  <Link to="/cart">
                    <li className="p-[10px] hover:bg-[orange] ">
                      {" "}
                      <Link to="/cart"> Cart({cartLength}) </Link>
                    </li>
                  </Link>
                  <Link to="/">
                    <li
                      className="p-[10px] hover:bg-[orange] "
                      onClick={logOut}
                    >
                      {" "}
                      Logout{" "}
                    </li>
                  </Link>{" "}
                </>
              ) : (
                <>
                  <Link to="/dashboard">
                    <li className="p-[10px] hover:bg-[orange] "> Dashboard </li>
                  </Link>
                  <Link to="/">
                    <li
                      onClick={logOut}
                      className="p-[10px] hover:bg-[orange] "
                    >
                      {" "}
                      Logout{" "}
                    </li>
                  </Link>
                </>
              )
            ) : (
              <>
                <div
                  className="relative"
                  onMouseEnter={() => setShowDropdown(true)}
                >
                  <button
                    className="p-[10px] hover:bg-[orange] "
                    // className="font-medium text-white bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600"
                    onClick={() => setShowDropdown(!showDropdown)}
                  >
                    Sign Up
                  </button>
                  {showDropdown && (
                    <div
                      className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                      onMouseEnter={() => setShowDropdown(true)}
                      onMouseLeave={() => setShowDropdown(false)}
                    >
                      <div className="bg-white rounded-md shadow-xs">
                        <div className="py-1">
                          <Link
                            to="/register"
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
                          >
                            Admin
                          </Link>
                          <Link
                            to="/userRegister"
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
                          >
                            Customer
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div
                  className="relative"
                  onMouseEnter={() => setShowDropdown2(true)}
                >
                  <button
                    className="p-[10px] hover:bg-[orange] "
                    // className="font-medium text-white bg-orange-500 py-2 px-4 rounded-full hover:bg-orange-600"
                    onClick={() => setShowDropdown2(!showDropdown2)}
                  >
                    Login
                  </button>
                  {showDropdown2 && (
                    <div
                      className="absolute right-0 w-48 mt-2 origin-top-right rounded-md shadow-lg"
                      onMouseEnter={() => setShowDropdown2(true)}
                      onMouseLeave={() => setShowDropdown2(false)}
                    >
                      <div className="bg-white rounded-md shadow-xs">
                        <div className="py-1">
                          <Link
                            to="/login"
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
                          >
                            Admin
                          </Link>
                          <Link
                            to="/userLogin"
                            className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-500 hover:text-white"
                          >
                            Customer
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </ul>
        </div>
      </>
    );
}