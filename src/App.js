
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Swiper from 'swiper';
import 'swiper/css';
import ScrollToTop from "./component/layout/scrolltop";
import HomeTwo from './pages/hometwo';
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
