import Card from "./Card";
export default function Main({products}) {
    return (
      <main>
        <div className="row">
          {
            products.map(product=><Card product={product}/>)
          }
       
        </div>
      </main>
    );
  }