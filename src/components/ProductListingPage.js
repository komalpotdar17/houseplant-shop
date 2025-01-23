import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';


const plants = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', image: '/aloe.jpg' },
  { id: 2, name: 'Snake Plant', price: 15, category: 'Air Purifiers', image: '/snake.jpg' },
  { id: 3, name: 'Peace Lily', price: 20, category: 'Flowers', image: '/lily.jpg' },
  // Add 3 more plants...
];

const ProductListingPage = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  const categories = [...new Set(plants.map(plant => plant.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div className="category">
            {plants.filter(plant => plant.category === category).map(plant => (
              <div key={plant.id}>
                <img src={plant.image} alt={plant.name} />
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>
                <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
