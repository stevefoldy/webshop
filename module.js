const UI = function () {
  this.prodImgSelector = ".js-product-img";
  this.prodNameSelector = ".js-product-name";
  this.prodCatSelector = ".js-product-category";
  this.prodDescSelector = ".js-product-description";
  this.prodPriceSelector = ".js-product-price";

  this.prodImgEl = document.querySelector(this.prodImgSelector);
  this.prodNameEl = document.querySelector(this.prodNameSelector);
  this.prodCatEl = document.querySelector(this.prodCatSelector);
  this.prodDescEl = document.querySelector(this.prodDescSelector);
  this.prodPriceEl = document.querySelector(this.prodPriceSelector);
};

UI.prototype.setProdImg = function (src) {
  this.prodImgEl.src = src;
};

UI.prototype.setProdName = function (name) {
  this.prodNameEl.textContent = name;
};

UI.prototype.setProdCat = function (category) {
  this.prodCatEl.textContent = category;
};

UI.prototype.setProdDesc = function (description) {
  this.prodDescEl.textContent = description;
};

UI.prototype.setProdPrice = function (price) {
  this.prodPriceEl.textContent = price;
};

const Product = function () {
  this.imageSrc = "src/img/discatcher.jpeg";
  this.name = "DisCatcher Target";
  this.category = "Discgolf";
  this.description =
    "a chain grid that catches fast and slow putts, heavy and light discs like no other target";
  this.price = 399;
};

Product.prototype.getImg = function () {
  return this.imageSrc;
};

Product.prototype.getName = function () {
  return this.name;
};

Product.prototype.getCategory = function () {
  return this.category;
};

Product.prototype.getDesc = function () {
  return `${this.name} is ${this.description}`;
};

Product.prototype.getPrice = function () {
  return `€${this.price}`;
};

const ProductFactory = new Product();

const productImg = ProductFactory.getImg();
const productName = ProductFactory.getName();
const productCat = ProductFactory.getCategory();
const productDesc = ProductFactory.getDesc();
const productPrice = ProductFactory.getPrice();

const ShopUI = new UI();

ShopUI.setProdImg(productImg);
ShopUI.setProdName(productName);
ShopUI.setProdCat(productCat);
ShopUI.setProdDesc(productDesc);
ShopUI.setProdPrice(productPrice);
