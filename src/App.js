import { useContext } from "react";
import { Routes, Route, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserContext } from "./contexts/user.context";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";
import RootLayout from "./routes/dashboard/dashboard.component";
import ErrorPage from "./routes/error-page/error-page.component";
import CategoriesPreview from "./routes/categories-preview/categories-preview.component";
import Category from "./routes/category/category.component";
import CategoriesWrapper from "./routes/categories-wraper/categories-wrapper.component";

const App = () => {
  const { currentUser } = useContext(UserContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage/>,
      children: [
        { index: true, element: <Home /> },
        {
          path: "shop",
          element: <CategoriesWrapper />,
          children: [
            { index: true, element: <CategoriesPreview /> },
            {path: ':category', element: <Category/>}
          ],
        },
        {
          path: "shop/:category",
          element: <Category />,
        },
        { path: "auth", element: currentUser ? <Home /> : <Authentication /> },
        { path: "checkout", element: <Checkout /> },
      ],
    },
  ]);
  return <RouterProvider router={router}/>
  // return (
  //   <Routes>
  //     <Route path="/" element={<Navigation />}>
  //       <Route index element={<Home />} />
  //       <Route
  //         path="shop"
  //         element={<CategoriesPreview />}
  //       >
  //         <Route path=':category' element={<Category />} />
  //       </Route>
  //       <Route
  //         path="auth"
  //         element={
  //           currentUser ? <Navigate to="/" replace /> : <Authentication />
  //         }
  //       />
  //       <Route path="checkout" element={<Checkout />} />
  //     </Route>
  //   </Routes>
  // );
};

export default App;
