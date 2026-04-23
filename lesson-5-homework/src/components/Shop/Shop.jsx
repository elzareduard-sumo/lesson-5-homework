import React, { useMemo } from "react";
import "./Shop.css";

const DUMMY_IMAGES = [
  "https://picsum.photos/id/0/300/200",
  "https://picsum.photos/id/2/300/200",
  "https://picsum.photos/id/3/300/200",
  "https://picsum.photos/id/4/300/200",
  "https://picsum.photos/id/20/300/200",
];
const productsData = [
  { id: 1, title: "продукт 1" },
  { id: 2, title: "продукт 2" },
  { id: 3, title: "продукт 3" },
  { id: 4, title: "продукт 4" },
  { id: 5, title: "продукт 5" },
];
const ProductCard = ({ id, title, images }) => {
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }, [images]);
  const handleBuyClick = () => {
    console.log(`[LOG] товар выбран: ID = ${id}, Название = "${title}"`);
  };
  return (
    <div className="product-card">
      <img src={randomImage} alt={title} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <button onClick={handleBuyClick} className="buy-btn">
          Купить
        </button>
      </div>
    </div>
  );
};
const Shop = () => {
  return (
    <div className="shop-container">
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>Магазин</h2>
      <div className="products-grid">
        {productsData.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            images={DUMMY_IMAGES}
          />
        ))}
      </div>
    </div>
  );
};
export default Shop;
