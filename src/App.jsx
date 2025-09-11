import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import MenuLeft from "./layouts/MenuLeft";
import HomeSlider from "./components/HomeSlider";
import ProductBanner from "./components/ProductBanner";

function App() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isProducts = pathname === "products";

  return (
    <>
      <ToastContainer />
      <Header />
      {isProducts && <ProductBanner />}
      {isHome && <HomeSlider />}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <MenuLeft />
            </div>
            <div className="col-sm-9 padding-right">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
