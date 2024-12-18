import Navbar from "./components/Navbar.jsx";
import AllCategory from "./components/AllCategory.jsx";
import Storys from "./components/Storys.jsx";
import Banner from "./components/Banner.jsx";
import PopulerProducts from "./components/PopulerProducts.jsx";
import Article from "./components/Article.jsx";

function App() {

  return (
    <div className="container mx-auto">
        <Navbar />
        <AllCategory />
        <Storys />
        <Banner />
        <PopulerProducts />
        <Article />

    </div>
  )
}

export default App
