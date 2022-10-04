import Glide from '@glidejs/glide';
import { useEffect } from 'react';

const HomeCarousel = () => {
  useEffect(() => {
    const glide = new Glide('.glide', {
      type: 'carousel',
    });
    glide.mount();
  }, []);

  return (
    <div className="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">
          <li className="glide__slide">
            <img src="/images/banners/banner-01.jpg" alt="x" />
          </li>
          <li className="glide__slide">
            <img src="/images/banners/banner-02.jpg" alt="x" />
          </li>
          <li className="glide__slide">
            <img src="/images/banners/banner-03.jpg" alt="x" />
          </li>
        </ul>
      </div>

      <div className="glide__arrows" data-glide-el="controls">
        <button
          className="button glide__arrow glide__arrow--left"
          data-glide-dir="<"
        >
          prev
        </button>
        <button
          className="button glide__arrow glide__arrow--right"
          data-glide-dir=">"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default HomeCarousel;
