import React from "react";
import products from "../../json/products";
import "../Styles/App.css";

function Items({ activePopup }) {
  const setData = () => {
    activePopup(true);
  };

  return Object.values(products)[0].map((item) => {
    console.log(item);
    return (
      <>
        <article className="products__item item-product">
          <div className="item-products__labels"></div>
          <a href="#" className="item-product__image _ibg">
            <img src={item.imageUrl} alt="product" />
          </a>
          <div className="item-product__body">
            <div className="item-product__content">
              <h3 className="item-product__title">{item.title}</h3>
              <div className="item-product__text">{item.desc}</div>
            </div>
            <div className="item-product__prices">
              <div className="item-product__price">від {item.price}₴</div>
              <div className="item-product__price item-product__price_old">
                {item.old_price}
              </div>
            </div>
            <div class="item-product__actions actions-product">
              <div class="actions-product__body">
                <a
                  onClick={() => setData()}
                  class="actions-product__button button"
                >
                  Замовити
                </a>
              </div>
            </div>
          </div>
        </article>
      </>
    );
  });
}

export default Items;
