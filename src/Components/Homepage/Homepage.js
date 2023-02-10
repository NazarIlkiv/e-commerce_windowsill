import React from "react";
import "../Styles/App.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";

import slide01 from "./img/slides/slide1.jpg";
import slide02 from "./img/slides/slide2.jpg";
import slide03 from "./img/slides/slide3.jpg";
import slide04 from "./img/slides/slide4.jpg";
import slide05 from "./img/slides/slide6.jpg";
import slide06 from "./img/slides/slide8.jpg";
import slide07 from "./img/slides/slide8.jfif";
import slide08 from "./img/slides/slide9.jpg";
import slide09 from "./img/slides/slide10.jpg";
import kraft_white from "./img/product/kraft_white_mat.jpg";
import crystalit_white from "./img/product/crystalit_white_glossy.png";
import crystalit_santorini from "./img/product/crystalit_santorini_glossy.png";
import plastolit_alikante_marmur from "./img/product/plastolit_alikante_marmur.jpg";
import why01 from "./img/why/03.jpg";
import user_icon from "./img/testimonial/avatars/user_icon.png";
import rating from "./img/testimonial/rating.svg";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <>
      <section className="page__main main">
        <div className="main__container ">
          <div className="main__content">
            <div className="main-header header-main">
              <h1 className="header-main__title">
                Якісні підвіконня за доступною ціною
              </h1>
              <div className="header-main__text text text_big">
                <p>
                  Інтернет-магазин <b>NiK</b> пропонує Вам широкий асортимент
                  підвіконників для вирішення будь-яких будівельних та
                  дизайнерських рішень. Якщо у Вас є питання або ж Ви знаєте,
                  яке підвіконня Вам потрібно - зателефонуйте нам і Ви
                  допоможемо Вам!
                </p>
              </div>
              <div className="header-main__actions">
                <a href="/products" className="header-main__button button">
                  Асортимент підвіконь
                </a>
                <Link
                  to="/contacts"
                  className="header-main__button button button_dark"
                >
                  Наші контакти
                </Link>
              </div>
            </div>
          </div>
          <div className="body-main-block__slider slider-main-block swiper">
            <div class="slider-main-block__wrapper swiper-wrapper">
              <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={true}
                pagination={{ clickable: true }}
                slidesPerView={1}
                loop={true}
              >
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide09} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide02} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide03} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide04} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide05} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide06} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide07} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide08} alt="header image" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div class="slider-main-block__slide swiper-slide">
                    <img src={slide01} alt="header image" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section className="page__products products">
        <div className="products__container">
          <div className="products-title__body">
            <h2 className="header-main__title">Бестселери</h2>
          </div>
          <div className="products__items">
            <article className="products__item item-product">
              <div className="item-products__labels"></div>
              <a href="/products" className="item-product__image _ibg">
                <img src={kraft_white} alt="product" />
              </a>
              <div className="item-product__body">
                <div className="item-product__content">
                  <h3 className="item-product__title">Kraft - Білий</h3>
                  <div className="item-product__text">
                    Біле матове підвіконня
                  </div>
                </div>
                <div className="item-product__prices">
                  <div className="item-product__price">230₴</div>
                  <div className="item-product__price item-product__price_old"></div>
                </div>
              </div>
            </article>
            <article className="products__item item-product">
              <div className="item-products__labels">
                <div className="item-product__label item-product__label_sale">
                  -5%
                </div>
              </div>
              <a href="/products" className="item-product__image _ibg">
                <img src={crystalit_white} alt="product" />
              </a>
              <div className="item-product__body">
                <div className="item-product__content">
                  <h3 className="item-product__title">Crystalit - Білий</h3>
                  <div className="item-product__text">
                    Біле глянцеве підвіконня
                  </div>
                </div>
                <div className="item-product__prices">
                  <div className="item-product__price">450₴</div>
                  <div className="item-product__price item-product__price_old">
                    480₴
                  </div>
                </div>
              </div>
            </article>
            <article className="products__item item-product">
              <div className="item-products__labels">
                <div className="item-product__label item-product__label_new">
                  New
                </div>
              </div>
              <a href="/products" className="item-product__image _ibg">
                <img src={crystalit_santorini} alt="product" />
              </a>
              <div className="item-product__body">
                <div className="item-product__content">
                  <h3 className="item-product__title">Crystalit - Санторіні</h3>
                  <div className="item-product__text">
                    Під біле дерево, глянець
                  </div>
                </div>
                <div className="item-product__prices">
                  <div className="item-product__price">480₴</div>
                  <div className="item-product__price item-product__price_old"></div>
                </div>
              </div>
            </article>
            <article className="products__item item-product">
              <div className="item-products__labels"></div>
              <a href="/products" className="item-product__image _ibg">
                <img src={plastolit_alikante_marmur} alt="product" />
              </a>
              <div className="item-product__body">
                <div className="item-product__content">
                  <h3 className="item-product__title">
                    Plastolit - Аліканте Мармур
                  </h3>
                  <div className="item-product__text">
                    Чорний Мармур, глянець
                  </div>
                </div>
                <div className="item-product__prices">
                  <div className="item-product__price">410₴</div>
                  <div className="item-product__price item-product__price_old">
                    490₴
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="page__more more">
        <div className="more__container">
          <a href="/products" class="more__button button">
            Більше
          </a>
        </div>
      </section>
      <sections className="page__why why">
        <div className="why__container">
          <div className="why__images images-why">
            <div className="images-why__item images-why__item_1">
              <img src={why01} />
            </div>
          </div>
          <div className="why__content">
            <div className="why__header header-main">
              <a className="header-main__label">Чому обирають нас?</a>
              <h2 className="header-main__title">
                Чому обирають саме наш онлайн-магазин?
              </h2>
              <ul className="header-main__list">
                <li>Приємна вартість у порівняні з конкурентами.</li>
                <li>Безкоштовна та доступна консультація.</li>
                <li>Широкий асортимент підвіконня на будь-який смак.</li>
                <li>Доставка по всій Україні.</li>
              </ul>
            </div>
          </div>
        </div>
      </sections>
      <sections className="page__testimonials testimonials">
        <div className="testimonials__container">
          <div className="testimonials__header header-main">
            <a className="header-main__label">Відгуки</a>
            <h2 className="header-main__title">
              Зверніть увагу на відгуки наших клієнтів
            </h2>
            <div className="header-main__body">
              <div className="header-main__actions"></div>
            </div>
          </div>
          <div className="testimonials__items">
            <article className="testimonials__item item-testimonial">
              <div className="item-testimonial__user user-testimonial">
                <div className="user-testimonial__avatar user-testimonial__avatar_1">
                  <img src={user_icon} alt="avatars" />
                </div>
                <div className="user-testimonial__body">
                  <div className="user-testimonial__title">Андрій</div>
                  <div className="user-testimonial__company">м.Львів</div>
                </div>
              </div>
              <h4 className="item-testimonial__title">"Приємна вартість"</h4>
              <div className="item-testimonial__text">
                <p>
                  Придбав у цьому магазині два підвіконня Crystalit. В діапазоні
                  двох днів мені їх привезли. Всім задоволений, особливо хочу
                  підкрелити <b>приємну вартість підвіконнь</b>, оскільки у
                  інших магазинах мені рахували дорожче.
                </p>
              </div>
              <div className="item-testimonial__rating">
                <img src={rating} alt="rating" />
              </div>
            </article>
            <article className="testimonials__item item-testimonial">
              <div className="item-testimonial__user user-testimonial">
                <div className="user-testimonial__avatar user-testimonial__avatar_2">
                  <img src={user_icon} alt="avatars" />
                </div>
                <div className="user-testimonial__body">
                  <div className="user-testimonial__title">Микола</div>
                  <div className="user-testimonial__company">м.Первомайськ</div>
                </div>
              </div>
              <h4 className="item-testimonial__title">"Швидкі терміни"</h4>
              <div className="item-testimonial__text">
                <p>
                  Замовив через Нову Пошту підвіконня Plastolit Аліканте Мармур,
                  <b>
                    {" "}
                    хлопці відправили підвіконня одразу зранку наступного дня
                    після замовлення
                  </b>
                  . Підвіконням задоволений.
                </p>
              </div>
              <div className="item-testimonial__rating">
                <img src={rating} alt="rating" />
              </div>
            </article>
            <article className="testimonials__item item-testimonial">
              <div className="item-testimonial__user user-testimonial">
                <div className="user-testimonial__avatar user-testimonial__avatar_3">
                  <img src={user_icon} alt="avatars" />
                </div>
                <div className="user-testimonial__body">
                  <div className="user-testimonial__title">Оксана</div>
                  <div className="user-testimonial__company">
                    м.Львів(Рясне)
                  </div>
                </div>
              </div>
              <h4 className="item-testimonial__title">
                “Якісне обслуговування”
              </h4>
              <div className="item-testimonial__text">
                <p>
                  Робила ремонт у квартирі, потрібно було підвіконня.
                  Зателефонувала цій компанії, молодий спеціаліст приїхав, зняв
                  заміри, продемонстрував взірці та відповів на всі мої питання,
                  тому хочу подякувати за <b>якісне обслуговування</b>.
                </p>
              </div>
              <div className="item-testimonial__rating">
                <img src={rating} alt="rating" />
              </div>
            </article>
          </div>
        </div>
      </sections>
    </>
  );
}

export default Homepage;
