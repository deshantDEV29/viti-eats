import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./header_component/Header";
import Profile from "./Profile";
import Footer from "./footer_component/Footer";
import Login from "./login_component/Login";
import Signup from "./signup_component/Signup";
import Home from "./home_component/Home";
import Menu from "./home_component/Menu";
import About from "./about_component/About";
import Checkout from "./checkout_component/Checkout";
import Mpaisa from "./checkout_component/Mpaisa";
import Orders from "./orders_component/Orders";
import OrderTrack from "./orders_component/OrderTrack";
import Navigator from "./admin/dashboard_component/Navigator";
import Dashboard from "./admin/dashboard_component/Dashboard";
import AdminHeader from "./admin/dashboard_component/AdminHeader";
import Restaurant from "./admin/restaurant_component/Restaurant";
import FoodCategory from "./admin/food_component/FoodCategory";
import FoodItem from "./admin/food_component/FoodItem";
import VendorNavigator from "./order_retrieval/VendorNavigator";
import ProcessOrder from "./order_retrieval/ProcessOrder";
import VendorHome from "./order_retrieval/VendorHome";
import VendorHeader from "./order_retrieval/VendorHeader";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/menu" element={<MenuPage />}></Route>
            <Route path="/signup" element={<SignupPage />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/logout" element={<LoginPage />}></Route>
            <Route path="/orders" element={<OrdersPage />}></Route>
            <Route path="/ordertrack" element={<OrderTrackingPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/checkout" element={<CheckoutPage />}></Route>
            <Route path="/mpaisa" element={<Mpaisa />}></Route>
            <Route path="/admin/" element={<AdminDasboardPage />}></Route>
            <Route
              path="/admin/restaurant"
              element={<AdminRestaurantPage />}
            ></Route>
            <Route
              path="/admin/foodcategory"
              element={<AdminFoodCategoryPage />}
            ></Route>
            <Route
              path="/admin/fooditem"
              element={<AdminFoodItemPage />}
            ></Route>

            <Route path="/vendor/" element={<VendorHomePage />}></Route>
            <Route path="/vendor/order" element={<VendorOrderPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

function HomePage() {
  return (
    <div className="app__container">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__center">
        <Home />
      </div>
      <div className="app__bottom">
        <Footer />
      </div>
    </div>
  );
}

function MenuPage() {
  return (
    <div className="app__container">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__center">
        <Menu />
      </div>
      <div className="app__bottom">
        <Footer />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="app__container">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__center">
        <About />
      </div>
      <div className="app__bottom">
        <Footer />
      </div>
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="app__container">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__center">
        <Profile />
      </div>
      <div className="app__bottom">
        <Footer />
      </div>
    </div>
  );
}

function OrdersPage() {
  return (
    <div className="app__container">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__center">
        <Orders />
      </div>
      <div className="app__bottom">
        <Footer />
      </div>
    </div>
  );
}

function OrderTrackingPage() {
  return (
    <div className="app__container">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__center">
        <OrderTrack />
      </div>
      <div className="app__bottom">
        <Footer />
      </div>
    </div>
  );
}

function CheckoutPage() {
  return (
    <div className="app__container">
      <div className="app__top">
        <Header />
      </div>
      <div className="app__center">
        <Checkout />
      </div>
      <div className="app__bottom">
        <Footer />
      </div>
    </div>
  );
}

function SignupPage() {
  return (
    <div className="app__container">
      <Signup />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="app__container">
      <Login />
    </div>
  );
}

function AdminDasboardPage() {
  return (
    <div>
      <div className="app__top">
        <AdminHeader />
      </div>
      <div className="appadmin_center">
        <div className="admincontainer">
          <div className="app__left">
            <Navigator />
          </div>
          <div className="app__right">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminRestaurantPage() {
  return (
    <div>
      <div className="app__top">
        <AdminHeader />
      </div>
      <div className="appadmin_center">
        <div className="admincontainer">
          <div className="app__left">
            <Navigator />
          </div>
          <div className="app__right">
            <Restaurant />
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminFoodCategoryPage() {
  return (
    <div>
      <div className="app__container">
        <div className="app__top">
          <AdminHeader />
        </div>
        <div className="appadmin_center">
          <div className="admincontainer">
            <div className="app__left">
              <Navigator />
            </div>
            <div className="app__right">
              <FoodCategory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminFoodItemPage() {
  return (
    <div>
      <div className="app__container">
        <div className="app__top">
          <AdminHeader />
        </div>
        <div className="appadmin_center">
          <div className="admincontainer">
            <div className="app__left">
              <Navigator />
            </div>
            <div className="app__right">
              <FoodItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VendorHomePage() {
  return (
    <div>
      <div className="app__container">
        <div className="app__top">
          <VendorHeader />
        </div>
        <div className="appadmin_center">
          <div className="admincontainer">
            <div className="app__left">
              <VendorNavigator />
            </div>
            <div className="app__right">
              <VendorHome />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VendorOrderPage() {
  return (
    <div>
      <div className="app__container">
        <div className="app__top">
          <VendorHeader />
        </div>
        <div className="appadmin_center">
          <div className="admincontainer">
            <div className="app__left">
              <VendorNavigator />
            </div>
            <div className="app__right">
              <ProcessOrder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;
