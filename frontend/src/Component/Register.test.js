import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { fireEvent, waitFor, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Register from "./Register";

test("testing", () => {
  render(
    <Provider store={store}>
      {/* <Login /> */}
      <BrowserRouter>
        <Register />
        {/* <Routes>
      
          <Route path="/login" element={<Login />} />
        </Routes> */}
      </BrowserRouter>
    </Provider>
  );

  fireEvent.click(screen.getByText("Register"));
  expect(screen.getByText("Register")).toBeInTheDocument();
});
