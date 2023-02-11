// import { render, fireEvent, waitFor, screen } from "@testing-library/react";
// import { BrowserRouter } from "react-router-dom";
// import { Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";


// import "@testing-library/jest-dom";
// import { getByTestId } from "@testing-library/react";
// import AddProduct from "./AddProduct";

// test("loads and displays Add Procuct page", async () => {
//   render(
//     <Provider store={store}>
//       <AddProduct />
//       <BrowserRouter>
//         <Routes>
//           <Route exact path="/addproduct" element={<AddProduct />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   );

//   expect(screen.getByText("Add Product")).toBeInTheDocument();
// });


import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import "@testing-library/jest-dom";
import { getByTestId } from "@testing-library/react";
import AddProduct from "./AddProduct";

test("loads and displays AddProduct", async () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AddProduct />
        {/* <BrowserRouter>
        <Routes>
          <Route exact path="/products" element={<Products />} />
          
        </Routes>
      </BrowserRouter> */}
      </BrowserRouter>
    </Provider>
  );

  expect(screen.getByText("Add Product")).toBeInTheDocument();
});
