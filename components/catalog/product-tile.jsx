export default function ProductTile() {
  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <a href="" title="Thread Affair Gingham Suit">
            <img
              src="/images/products/product-01a.jpg"
              alt="Thread Affair Gingham Suit"
            ></img>
          </a>
        </div>

        <div className="product-tile-badge">
          <span className="badge badge-font-large">%</span>
        </div>

        <div className="product-tile-headings">
          <h1>
            <a href="" title="Thread Affair Gingham Suit">
              <span>Thread Affair</span> <span>Gingham</span> Suit
            </a>
          </h1>

          <h2>
            <a href="" title="Thread Affair Gingham Suit">
              Berlin fit-Regular
            </a>
          </h2>
        </div>
      </header>

      <section className="product-tile-info">
        <div className="product-tile-pricing">
          <span className="product-price-regular">399</span>
          <span className="product-price">
            USD <span>299</span>
          </span>
        </div>
      </section>

      <footer className="product-tile-controls">
        <button
          className="button product-tile-a2c"
          type="button"
          title="Add to Cart"
        >
          Add to Cart
        </button>
      </footer>
    </article>
  );
}
