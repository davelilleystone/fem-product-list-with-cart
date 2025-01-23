import data from "./data.js";
const createProducts = () => {
    return data
        .map((product) => {
        const { name: title, category, price, id, image: { mobile, tablet, desktop }, } = product;
        return `
      <article class="product-card" data-product-id=${id} data-product-description="${title}" data-product-price=${Number(price).toFixed(2)}>
        <picture class="product-card__image">
          <source srcset=${mobile} media="(max-width: 480px)">
          <source srcset=${tablet} media="(max-width: 768px)">
          <img src=${desktop} alt="${title}" class="product-card__img">
        </picture>
        <div class="product-card__buttons">
          <button class="product-card__button product-card__button--increment" data-btn="inc">+</button>
          <button class="product-card__button product-card__button--add " data-btn="add">Add to Cart</button>
          <button class="product-card__button product-card__button--decrement" data-btn="dec">-</button>
        </div>
        <div class="product__details">
          <span class="product-card__category">${category}</span>
          <h2 class="product-card__title">${title}</h2>
          <span class="product__price">$${Number(price).toFixed(2)}</span>
        </div>
      </article>
    `;
    })
        .join("");
};
export default createProducts;
//# sourceMappingURL=createProducts.js.map