import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Burger from '/burger.png';
import Pizza from '/pizza.png';
import cheezCake from '/cheezCake.png';
import drink from '/drink.png';
import PrData from '../../Data/ProductData';
import NavList from '../../COMPONENTS/NavList';
import ItemList from '../../COMPONENTS/ItemList';
import { addToCart } from '../../store/cartSlice';
import '../../App.css';

function Main() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cartItems, setCartItems] = useState([]);

  const dispatch = useDispatch();

  // Static product categories
  const Products = [
    { id: 1, item: Burger, itemText: 'Burger', category: 'Burger' },
    { id: 2, item: Pizza, itemText: 'Pizza', category: 'Pizza' },
    { id: 3, item: cheezCake, itemText: 'CheezCake', category: 'cheesecake' },
    { id: 4, item: drink, itemText: 'Drink', category: 'drink' },
  ];

  // Filter products based on selected category
  const filteredItems = selectedCategory
    ? PrData.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase())
    : PrData;

  // Log updated cart items for debugging
  // useEffect(() => {
  //   console.log('Updated cart items:', cartItems);
  // }, [cartItems]);

  // Handle adding items to cart
  function handleAddToCart(price, images, title, category, id) {
    // Update local state
    setCartItems((prev) => [...prev, { price, images, title, category, id }]);

    // Dispatch to Redux store
    dispatch(
      addToCart({
        ProductId: id,
        quantity: 1,
        price,
      })
    );
  }

  return (
    <div className="w-96">
      <p className="text-xl font-semibold mb-5">Menu</p>

      {/* Navigation List */}
      <div className="flex justify-between items-center" key={Products.id}>
        {Products.map((product) => (
          <NavList
            product={product}
            key={product.id}
            onClick={() => setSelectedCategory(product.category)}
          />
        ))}
      </div>

      {/* Item List */}
      <div className="w-96 my-5 h-[450px] flex flex-col gap-y-4 p-2 overflow-auto custom-scroll">
        {filteredItems.map((item) => (
          <ItemList
            key={item.id}
            item={item}
            onClick={() =>
              handleAddToCart(item.price, item.images, item.title, item.category, item.id)
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
