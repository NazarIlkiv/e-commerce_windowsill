import "../Styles/App.css";
import Items from "./Items";

function Products({ activePopup }) {
  return (
    <>
      <section className="page__products products">
        <div className="products-title__body">
          <h2 className="products-title__windowsill">Асортимент підвіконня:</h2>
        </div>
        ;
        <div className="products__container">
          <div className="products__items">{Items({ activePopup })}</div>
        </div>
      </section>
    </>
  );
}

export default Products;
