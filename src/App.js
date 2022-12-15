
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from "./component/layout/scrolltop";
import AboutPage from "./pages/about";
import AchievementPage from "./pages/achievement";
import BlogPage from "./pages/blog";
import BlogDetails from "./pages/blog-single";
import BlogPageTwo from "./pages/blogtwo";
import ContactUs from "./pages/contact";
import GalleryPage from "./pages/gallery";
import GameListSection from "./pages/gamelist";
import GameListTwoSection from "./pages/gamelisttwo";
import HomePage from './pages/home';
import HomeTwo from './pages/hometwo';
import LogIn from "./pages/login";
import PartnerPage from "./pages/partner";
import ShopPage from "./pages/shop";
import ShopCart from "./pages/shopcart";
import ShopDetails from "./pages/shopdetails";
import SignUp from "./pages/signup";
import TeamPage from "./pages/team";
import TeamSinglePage from "./pages/team-single";
import ErrorPage from "./pages/errorpage";
import PassSection from "./component/section/Pass.js"
// import Footer from "./component/layout/footer";
// import Header from "./component/layout/header";
// import PageHeader from './component/layout/pageheader';
// import GameList from './component/section/gamelist';


function App() {
	return (
		// <div className="App">
		// 	<ShopPage />
		// </div>
		
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				
				<Route path="/" element={<HomeTwo />} />
				<Route path="/pass" element={<PassSection />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
