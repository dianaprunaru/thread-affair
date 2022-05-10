import HomeNewsletter from './homepage/home-newsletter';

export default function Main() {
  return (
    <main className="content">
      <header className="content-header">
        <div className="banner-main">
          <div className="banner-main-inner container">
            <div className="banner-info">
              <h1>Office suits</h1>
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
                <span>A tailored suit</span> that will fit you perfectly is a
                dream for everybody.
              </p>
              <p className="d-none d-lg-block">
                We provide you with the design and you choose if you like it or
                if you want to change the details with our online configurator.
              </p>
            </div>
          </div>
        </div>
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
              selection of premium fabrics from one of the world's oldest fabric
              mills, Vitale Barberis Canonico.
            </p>
          </header>

          <section className="product-tiles">
            {/* insert product-tile */}
          </section>

          <footer>
            <a href="" title="see more" className="catalog-preview-cta">
              See more
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
              <img src="\images\payment\amazon.jpg" alt=""></img>
            </li>
            <li>
              <img src="\images\payment\cirrus.jpg" alt=""></img>
            </li>
            <li>
              <img src="\images\payment\maestro.jpg" alt=""></img>
            </li>
            <li>
              <img src="\images\payment\visa.jpg" alt=""></img>
            </li>
            <li>
              <img src="\images\payment\mastercard.jpg" alt=""></img>
            </li>
            <li>
              <img src="\images\payment\paypal.jpg" alt=""></img>
            </li>
            <li>
              <img src="\images\payment\visa_electron.jpg" alt=""></img>
            </li>
          </ul>
        </section>
      </section>
    </main>
  );
}
