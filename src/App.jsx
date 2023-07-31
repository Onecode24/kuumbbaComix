import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./styles/index.css";
// import Layout from "./components/layouts";
import Home from "./pages/home";
import SerachIcon from "./assets/icons/search.svg";
import EspaceIcon from "./assets/icons/espace-icon.svg";
import Twitter from "./assets/icons/twitter.svg";
import Facebook from "./assets/icons/facebook.svg";
import Instagram from "./assets/icons/instagram.svg";
import Youtube from "./assets/icons/youtube.svg";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div >
      <nav className="bg-orange flex py-5 px-10 items-center justify-between">
         <div className="flex items-center w-2/3">
            <h2 className="text-2xl montserrat-extrabold">
               <Link Link to="/">KuumbaComix.</Link>
            </h2>
            <ul className="flex ml-5 w-2/3 justify-around montserrat-regular">
               <li>
                  <Link to="/">Acceuil</Link>
               </li>
               <li>
                  <Link to="/">Catégorie</Link>
               </li>
               <li>
                  <Link to="/">Abonnement</Link>
               </li>
               <li>
                  <Link to="/">Communauté</Link>
               </li>
            </ul>
         </div>

         <ul className="flex w-1/5 justify-around montserrat-regular items-center">
            <div>
               <input type="text" name="" id="" className="hidden" />
               <li>
                  <Link to="/">
                     <img src={SerachIcon} alt="" />
                  </Link>
               </li>
            </div>
            <li className="text-white flex px-2 py-2 items-center border-white border rounded-lg">
               <img src={EspaceIcon} alt="" />
               <Link to="/" className="px-2">Mon Espace</Link>
            </li>
         </ul>
      </nav>

      <div>
         <Outlet />
      </div>

      <footer className="flex justify-evenly bg-orange-light py-5 montserrat-semibold">
         <div className="flex icons">
            <img src={Twitter} alt="Twitter" />
            <img src={Facebook} alt="Facebook" />
            <img src={Youtube} alt="Youtube" />
            <img src={Instagram} alt="Instagram" />
         </div>
         <ul>
            <li>A propos</li>
            <li>Contact</li>
            <li>Mentions légales</li>
         </ul>
         <ul>
            <li>CGU</li>
            <li>Confidentialité</li>
            <li>Charte de cookies</li>
         </ul>
         <ul>
            <li>Gérer mes cookies</li>
            <li>Applications mobiles</li>
            <li>Nous rejoindre</li>
         </ul>
         <ul>
            <li>Presse</li>
         </ul>
      </footer>
    </div>
  );
}