import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Home from "./pages/Home";

export default function App() {

  let products = [
    {
      title:"Product 1",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum animi pariatur ",
      image:"/images/burger1.png",
      price:350
    },
    {
      title:"Product 2",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum animi ",
      image:"/images/twister.png",
      price:250
    },
    {
      title:"Product 3",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum ",
      image:"/images/combo.png",
      price:450
    },
    {
      title:"Product 4",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum ",
      image:"/images/chickandchips.png",
      price:400
    }
  ]

  return (
    <div>
       <Home products={products}/>
       
    </div>
  );
}
