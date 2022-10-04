import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductTile from './catalog/product-tile';
import HomeCarousel from './homepage/home-carousel';
import HomeNewsletter from './homepage/home-newsletter';

export default function Main() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products').then((response) => {
      const { data } = response;

      setProducts(data);
    });
  }, []);

  if (products.length <= 0) {
    return 'loading';
  }

  return (
    <main className="content">
      <header className="content-header">
        {/* <div className="banner-main">
          <div className="banner-main-inner container">
            <div className="banner-info">
              <h1>Office Suits</h1>
              <h2>Get back to work in style</h2>

              <a
                href=""
                title="Create your suit"
                className="button button-large"
              >
                Create your suit
              </a>
            </div>

            <div className="banner-copy">
              <p>
                <span>A tailored suit</span>
                that will fit you perfectly is a dream for everybody.
              </p>

              <p className="d-none d-lg-block">
                We provide you with the design and you choose if you like it or
                if you want to change the details with our online configurator.
              </p>
            </div>
          </div>
        </div> */}

        <HomeCarousel></HomeCarousel>
      </header>

      <section className="content-main">
        <section className="home-catalog-preview container">
          <header>
            <h1 className="section-title">
              <span>Glamour</span> Suits
            </h1>

            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles row">
            <div className="col-12 col-lg-3">
              <ProductTile product={products[0]}></ProductTile>
            </div>

            <div className="col-12 col-lg-3 offset-lg-1 mt-4 mt-lg-0">
              <ProductTile product={products[1]}></ProductTile>
            </div>

            <div className="col-12 col-lg-3 offset-lg-1 mt-4 mt-lg-0">
              <ProductTile product={products[2]}></ProductTile>
            </div>
          </section>

          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview container demo-flex">
          <header>
            <h1 className="section-title">
              <span>Layout</span> Flexbox
            </h1>

            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles">
            <ProductTile product={products[3]}></ProductTile>

            <ProductTile product={products[4]}></ProductTile>

            <ProductTile product={products[5]}></ProductTile>
          </section>

          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview container">
          <header>
            <h1 className="section-title">
              <span>Layout</span> Flex Utilities
            </h1>

            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles d-flex flex-column flex-lg-row justify-content-between">
            <div className="mb-5 mb-lg-0">
              <ProductTile product={products[6]}></ProductTile>
            </div>

            <div className="mb-5 mb-lg-0">
              <ProductTile product={products[7]}></ProductTile>
            </div>

            <div>
              <ProductTile product={products[0]}></ProductTile>
            </div>
          </section>

          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

        <section className="home-catalog-preview container demo-grid">
          <header>
            <h1 className="section-title">
              <span>CSS Grid</span> Layout
            </h1>

            <p>
              Accomplish new achievements with a bold new style from the
              brilliant collection of men’s designer suits.
            </p>
            <p>
              For the finest custom tailored experience, be sure to explore our
              selection of premium fabrics from one of the worlds oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles">
            <ProductTile product={products[1]}></ProductTile>

            <ProductTile product={products[2]}></ProductTile>

            <ProductTile product={products[3]}></ProductTile>
          </section>

          <footer>
            <a href="" title="See more" className="catalog-preview-cta">
              see more
            </a>
          </footer>
        </section>

        <HomeNewsletter></HomeNewsletter>

        <section className="home-payment container">
          <header>
            <h1 className="section-title">
              <span>How to</span> Pay
            </h1>
          </header>

          <ul>
            <li>
              <img src="/images/payment/amazon.jpg" alt=""></img>
            </li>

            <li>
              <img src="/images/payment/cirrus.jpg" alt=""></img>
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt=""></img>
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt=""></img>
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt=""></img>
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt=""></img>
            </li>

            <li>
              <img src="/images/payment/amazon.jpg" alt=""></img>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
