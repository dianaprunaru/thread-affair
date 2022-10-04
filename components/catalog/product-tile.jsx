export default function ProductTile({ product = {} }) {
  const { productPrice = '', productName = '', productImage = '' } = product;

  return (
    <article className="product-tile">
      <header className="product-tile-header">
        <div className="product-tile-image">
          <a href="" title={productName}>
            <img src={productImage} alt={productName}></img>
          </a>
        </div>

        <div className="product-tile-badge">
          <span className={productPrice}>%</span>
        </div>

        <div className="product-tile-headings">
          <h1>
            <a href="" title={productName}>
              {productName}
            </a>
          </h1>

          <h2>
            <a href="" title={productName}>
              Berlin fit-Regular
            </a>
          </h2>
        </div>
      </header>

      <section className="product-tile-info">
        <div className="product-tile-pricing">
          <span className="product-price-regular">399</span>
          <span className="product-price">
            USD <span>{productPrice}</span>
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
