let productCards = document.querySelector('.product-cards');
let recomendationCards = document.querySelector('.recomendation-cards')
let products = [
    {
        image: "images/products/brokkoli.png",
        category: "Овощи",
        name: "Брокколи",
        cost: 130
    },
    {
        image: "images/products/bananas.png",
        category: "Свежее",
        name: "Бананы",
        cost: 140
    },
    {
        image: "images/products/orehi.png",
        category: "Злаки",
        name: "Белые орехи",
        cost: 150
    },
    {
        image: "images/products/tomato.png",
        category: "Овощи",
        name: "Веганский красный томат",
        cost: 170
    },
    {
        image: "images/products/mung.png",
        category: "Для здоровья",
        name: "Бобы мунг",
        cost: 110
    },
    {
        image: "images/products/funduk.png",
        category: "Орехи",
        name: "Коричневый фундук",
        cost: 120
    },
    {
        image: "images/products/eggs.png",
        category: "Свежее",
        name: "Яйца",
        cost: 170
    },
    {
        image: "images/products/bread.png",
        category: "Свежее",
        name: "Чёрный хлеб",
        cost: 150
    },
    {
        image: "images/products/kabachok.png",
        category: "Овощи",
        name: "Кабачок",
        cost: 120
    },
    {
        image: "images/products/onion.png",
        category: "Овощи",
        name: "Лук",
        cost: 170
    },
    {
        image: "images/products/cabbage.png",
        category: "Овощи",
        name: "Капуста",
        cost: 170
    }
];

for (let i = 0; i < 8; i++) {
    productCards.innerHTML += `
        <div class="product-card">
            <p class="product-card__category">${products[i].category}</p>
            <img src="${products[i].image}" alt="" class="product-card__img">
            <p class="product-card__title">${products[i].name}</p>
            <div class="product-card__footer">
              <div class="product-card__price">
                <p class="product-card__old-price">200р.</p>
                <p class="product-card__new-price">${products[i].cost}р.</p>
              </div>
              <div class="product-card__rating">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
              </div>
            </div>
        </div>
    `
}

recomendationCards.innerHTML += `
    <div class="product-card">
            <p class="product-card__category">${products[0].category}</p>
            <img src="${products[0].image}" alt="" class="product-card__img">
            <p class="product-card__title">${products[0].name}</p>
            <div class="product-card__footer">
              <div class="product-card__price">
                <p class="product-card__old-price">200р.</p>
                <p class="product-card__new-price">${products[0].cost}р.</p>
              </div>
              <div class="product-card__rating">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
              </div>
            </div>
        </div>
`

for (let i = 8; i <= 12; i++) {
    recomendationCards.innerHTML += `
        <div class="product-card">
            <p class="product-card__category">${products[i].category}</p>
            <img src="${products[i].image}" alt="" class="product-card__img">
            <p class="product-card__title">${products[i].name}</p>
            <div class="product-card__footer">
              <div class="product-card__price">
                <p class="product-card__old-price">200р.</p>
                <p class="product-card__new-price">${products[i].cost}р.</p>
              </div>
              <div class="product-card__rating">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
                <img src="images/icons/star.png" alt="">
              </div>
            </div>
        </div>
    `
}