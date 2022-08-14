class UI {
  constructor(node) {
    this.node = node;

    this.prodImgSelector = ".js-product-img";
    this.prodNameSelector = ".js-product-name";
    this.prodCatSelector = ".js-product-category";
    this.prodDescSelector = ".js-product-description";
    this.prodPriceSelector = ".js-product-price";

    this.prodImgEl = this.node.querySelector(this.prodImgSelector);
    this.prodNameEl = this.node.querySelector(this.prodNameSelector);
    this.prodCatEl = this.node.querySelector(this.prodCatSelector);
    this.prodDescEl = this.node.querySelector(this.prodDescSelector);
    this.prodPriceEl = this.node.querySelector(this.prodPriceSelector);
  }

  setProdImg = function (src) {
    this.prodImgEl.src = src;
  };

  setProdName = function (name) {
    this.prodNameEl.textContent = name;
  };

  setProdCat = function (category) {
    this.prodCatEl.textContent = category;
  };

  setProdDesc = function (description) {
    this.prodDescEl.textContent = description;
  };

  setProdPrice = function (price) {
    this.prodPriceEl.textContent = price;
  };

  appendTo(listElement) {
    listElement.appendChild(this.node);
  }
}

class Product {
  constructor(productInfo) {
    this.imageSrc = productInfo.imageSrc;
    this.name = productInfo.name;
    this.category = productInfo.category;
    this.description = productInfo.description;
    this.price = productInfo.price;
  }

  getImg = function () {
    return this.imageSrc;
  };

  getName = function () {
    return this.name;
  };

  getCategory = function () {
    return this.category;
  };

  getDesc = function () {
    return `${this.name} is ${this.description}`;
  };

  getPrice = function () {
    return `€${this.price}`;
  };
}

const Poduct1 = new Product({
  imageSrc: "src/img/discatcher.jpeg",
  name: "DisCatcher Target",
  category: "Discgolf",
  description:
    "a chain grid that catches fast and slow putts, heavy and light discs like no other target",
  price: 399,
});

const productImg = Poduct1.getImg();
const productName = Poduct1.getName();
const productCat = Poduct1.getCategory();
const productDesc = Poduct1.getDesc();
const productPrice = Poduct1.getPrice();

const UITemplate = document.querySelector(".js-product");
const ShopUI = new UI(UITemplate);

ShopUI.setProdImg(productImg);
ShopUI.setProdName(productName);
ShopUI.setProdCat(productCat);
ShopUI.setProdDesc(productDesc);
ShopUI.setProdPrice(productPrice);

const Poduct2 = new Product({
  imageSrc: "src/img/dog.jpeg",
  name: "Hero SuperAero",
  category: "Discgolf",
  description: "a disc that floats like a butterfly, holds up like a SuperHero",
  price: 14,
});

const productImg2 = Poduct2.getImg();
const productName2 = Poduct2.getName();
const productCat2 = Poduct2.getCategory();
const productDesc2 = Poduct2.getDesc();
const productPrice2 = Poduct2.getPrice();

const UIElement2 = UITemplate.cloneNode(true);
const ShopUI2 = new UI(UIElement2);

ShopUI2.setProdImg(productImg2);
ShopUI2.setProdName(productName2);
ShopUI2.setProdCat(productCat2);
ShopUI2.setProdDesc(productDesc2);
ShopUI2.setProdPrice(productPrice2);

const ProductListElement = document.querySelector(".js-product-list");
ShopUI2.appendTo(ProductListElement);
