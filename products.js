const productsGrid = document.querySelector('.grid-filter');
// const loadMore = document.querySelector('.main-products__more');
let quantityProducts = 225;
let dataLength = '';

if (productsGrid) {
  const fetchProducts = (quantity = 225) => {
  fetch('../product.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dataLength = data.length;
    productsGrid.innerHTML = '';
    for (let i = 0; i < data.length; i++) {
      if (i < quantity) {

        productsGrid.innerHTML += `

          <article class="card product-filter ${data[i].bike}" style="background-image: url('${data[i].country}');">

            <div class="card__header">
              <span class="card__status ${data[i].statusClass}">
              ${data[i].status}
              </span>
            </div>

            <picture class="card-model">
              <source srcset="${data[i].image}.webp" type="image/webp">
              <img loading="lazy" src="${data[i].image}.png" class="card-model__image" width="368"
                height="250" alt="${data[i].title}">
            </picture>

            <div class="card__moodel">
              <h3 class="card__model-name">
                ${data[i].title}
              </h3>
              <span class="card__model-prices price-filter">
                ${data[i].price}
              </span>
            </div>

            <button class="btn card__btn card__btn--track" type="button">
              <svg class="cursor-click cursor-click--track">
                <use xlink:href="img/sprite.svg#cursor-click"></use>
              </svg>

              <span class="card__btn-text card__btn-text--track">
                ${data[i].track}
              </span>
            </button>

          </article>

        `;
      }
    }
  });
};

fetchProducts(quantityProducts);

// loadMore.addEventListener('click', (e) => {
//   quantityProducts = quantityProducts + 5;
//   console.log(quantityProducts);
//   console.log(dataLength);

//   fetchProducts(quantityProducts);

//   if (quantityProducts == dataLength) {
//     loadMore.style.display = 'none';
//   } else {
//     loadMore.style.display = 'inline-flex';
//   }
// });

}
