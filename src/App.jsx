import Navbar from "./components/Navbar.jsx";
import AllCategory from "./components/AllCategory.jsx";
import Storys from "./components/Storys.jsx";
import Banner from "./components/Banner.jsx";
import PopulerProducts from "./components/PopulerProducts.jsx";
import Article from "./components/Article.jsx";
import PopularCategory from "./components/PopularCategory.jsx";
import SpecialBrands from "./components/SpecialBrands.jsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <>
          <div className="container mx-auto">
              <Navbar/>
              <AllCategory/>
              <Storys/>
              <Banner/>
              <PopulerProducts/>
              <Article/>
              <PopulerProducts flash={true} title="Flash Ürünler" titleColor="text-white text-2xl" timer={true}
                               background="bg-[url('https://cdn.dsmcdn.com/homepage/prod/2024-12-17/6e618057-66e9-4c7b-8fc4-317d34375a5b.png')]"/>
              <PopularCategory/>
              <SpecialBrands/>
          </div>
          <Footer/>
      </>
  )
}

export default App
