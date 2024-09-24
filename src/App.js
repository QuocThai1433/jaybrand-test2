import "./App.scss";
import { Footer } from "./components/Footer/Footer.jsx";
import { HomePage } from "./components/Homepage/HomePage.jsx";
import { Product } from "./components/Product/Product.jsx";
import { SlideShow } from "./components/Slide-show/SlideShow.jsx";

function App() {
  return (
    <div className="App">
      <HomePage />
      <SlideShow />
      <Product />
      <Footer /> 
      <div className="copyright">
        <label>© 2020 Bản quyền thuộc về HHK </label>
        <label>Facebook | Twitter | Zalo | LinkedIn</label>
      </div>
    </div>
  );
}

export default App;
