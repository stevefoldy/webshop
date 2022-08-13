const UI = (function () {
  const prodImgSelector = ".js-product-img";
  const prodNameSelector = ".js-product-name";
  const prodCatSelector = ".js-product-category";
  const prodDescSelector = ".js-product-description";
  const prodPriceSelector = ".js-product-price";

  const prodImgEl = document.querySelector(prodImgSelector);
  const prodNameEl = document.querySelector(prodNameSelector);
  const prodCatEl = document.querySelector(prodCatSelector);
  const prodDescEl = document.querySelector(prodDescSelector);
  const prodPriceEl = document.querySelector(prodPriceSelector);

  return {
    setProdImg: (src) => {
      prodImgEl.src = src;
    },
    setProdName: (name) => {
      prodNameEl.textContent = name;
    },
    setProdCat: (category) => {
      prodCatEl.textContent = category;
    },
    setProdDesc: (description) => {
      prodDescEl.textContent = description;
    },
    setProdPrice: (price) => {
      prodPriceEl.textContent = price;
    },
  };
})();

const Product = (function () {
  const name = "DisCatcher Target";
  const category = "Discgolf";
  const description =
    "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
  const imageSrc = "src/img/discatcher.jpeg";
  const price = 399;

  return {
    getName: () => {
      return name;
    },
    getCategory: () => {
      return category;
    },
    getDesc: () => {
      return `${name} is ${description}`;
    },
    getImg: () => {
      return imageSrc;
    },
    getPrice: () => {
      return `€${price}`;
    },
  };
})();

const productImg = Product.getImg();
const productName = Product.getName();
const productCat = Product.getCategory();
const productDesc = Product.getDesc();
const productPrice = Product.getPrice();

UI.setProdImg(productImg);
UI.setProdName(productName);
UI.setProdCat(productCat);
UI.setProdDesc(productDesc);
UI.setProdPrice(productPrice);
