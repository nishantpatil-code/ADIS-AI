import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "../components/pages/home/JSX/Navbar";
import Footer from "../components/pages/home/JSX/Footer";
import WhatsAppButton from "../components/common/WhatsAppButton";
import ScrollToTop from "../components/common/ScrollToTop";
import Services from "../components/pages/service/Services";
import Services1 from "../components/pages/service/Services1";
import HomePage from "../components/pages/home/JSX/homePage";
import About from "../components/pages/about/About";
import AboutDetails from "../components/pages/aboutDetails/AboutDetails";
import Contact from "../components/pages/contact/Contact";
import Blog from "../components/pages/blog/Blog";
import News from "../components/pages/news/News";
import AwardsRecognition from "../components/pages/awards/AwardsRecognition";

function Layout() {   
  return (
    <>
      <Navbar />
      <main className="app-content">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services1" element={<Services1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/about-details" element={<AboutDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<News />} />
          <Route path="/awards" element={<AwardsRecognition />} />
        </Route>
      </Routes>
    </>
  );
}

