import React, { useState } from 'react';

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products = [
    {
      id: 1,
      title: 'Milk',
      description: "Fresh and organic cow's milk.",
      image: 'https://imgs.search.brave.com/bWBtMqzoQWJUrd1ozPhgA5Loo0Wby-6DEYrGfvrY7S0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb3ctaXMtc3Rh/bmRpbmctYm90dGxl/LW1pbGstYm90dGxl/LW1pbGtfMTAxNTM4/NC0xODg3MDQuanBn/P3NpemU9NjI2JmV4/dD1qcGc'
    },
    {
      id: 2,
      title: 'Ghee',
      description: 'Pure and organic cow ghee.',
      image: 'https://imgs.search.brave.com/Gb71T_LF8-qT3bTYaZOjQ1mW5bfantnj-9xLaDKUfzc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmFueWFuYm90YW5p/Y2Fscy5jb20vY2Ru/L3Nob3AvZmlsZXMv/Z2hlZS0zMTY1LWNv/bnRleHQtMDAxLmpw/Zz92PTE3MTgwNTUy/MTQmd2lkdGg9MTk0/Ng',
    },
    {
      id: 3,
      title: 'Honey',
      description: '100% pure and natural honey.',
      image: 'https://imgs.search.brave.com/gKaqGfQGNBZVbWD92XE9tkXDz-Z9jcwVA3atVzVTwNA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNDY5/Nzk5NjkwL3Bob3Rv/L2hvbmV5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1IczNH/NHZaS0xVRU53Qnl5/bVBUTUxReG9ieVBG/VHpSZkJRN00tZF9F/RjdrPQ',
    },
    {
      id: 4,
      title: 'Fruits',
      description: 'Fresh seasonal fruits delivered to your door.',
      image: 'https://imgs.search.brave.com/MlzDs7xPyXFeHHFdJGObiAyRUyqQWmRQ3bATv1jZqrw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTY4/Mjc4NzkxL3Bob3Rv/L2ZydWl0LWNvbXBv/c2l0aW9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1pR29J/MGhKRW41U0xMdDhs/MHFzaFBYYzVjREFu/ZWRVZGxoalBzNUU2/WXdVPQ',
    },
    {
      id: 5,
      title: 'Vegetables',
      description: 'Organic and fresh vegetables.',
      image: 'https://cdn.pixabay.com/photo/2017/11/01/17/01/vegetables-2892770_1280.jpg',
    },
    {
      id: 6,
      title: 'Cheese',
      description: 'Delicious artisanal cheese.',
      image: 'https://cdn.pixabay.com/photo/2016/07/20/11/34/cheese-1529730_1280.jpg',
    },
    {
      id: 7,
      title: 'Butter',
      description: 'Creamy and rich butter.',
      image: 'https://cdn.pixabay.com/photo/2021/03/30/18/22/butter-6638975_1280.jpg',
    },
    {
      id: 8,
      title: 'Yogurt',
      description: 'Homemade yogurt, rich in probiotics.',
      image: 'https://cdn.pixabay.com/photo/2017/06/27/19/57/yogurt-2457946_1280.jpg',
    },
    {
      id: 9,
      title: 'Organic Eggs',
      description: 'Farm-fresh organic eggs.',
      image: 'https://cdn.pixabay.com/photo/2016/03/05/19/02/eggs-1239820_1280.jpg',
    },
    {
      id: 10,
      title: 'Jam',
      description: 'Homemade fruit jam, perfect for breakfast.',
      image: 'https://cdn.pixabay.com/photo/2016/04/16/15/51/jam-1324714_1280.jpg',
    },
    {
      id: 11,
      title: 'Nuts',
      description: 'Assorted nuts for healthy snacking.',
      image: 'https://cdn.pixabay.com/photo/2014/10/25/15/06/almonds-487459_1280.jpg',
    },
    {
      id: 12,
      title: 'Herbs',
      description: 'Fresh herbs for cooking.',
      image: 'https://cdn.pixabay.com/photo/2016/07/31/10/45/herbs-1556858_1280.jpg',
    },
  ];

  const itemsPerSlide = 4;

  const goToNext = () => {
    if (currentIndex < Math.ceil(products.length / itemsPerSlide) - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="bg-white py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Products Available</h2>
        <div className="flex justify-between items-center">
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className={`p-2 bg-gray-200 rounded-full ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
          >
            &#10094; {/* Left Arrow */}
          </button>
          <div className="flex overflow-hidden">
            {products.slice(currentIndex * itemsPerSlide, (currentIndex + 1) * itemsPerSlide).map((product) => (
              <div key={product.id} className="bg-gray-100 p-5 rounded-lg shadow-md mx-2 w-1/4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-32 w-full object-cover rounded-t-lg"
                />
                <h3 className="mt-4 text-xl font-semibold text-gray-800">{product.title}</h3>
                <p className="text-gray-600">{product.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={goToNext}
            disabled={currentIndex >= Math.ceil(products.length / itemsPerSlide) - 1}
            className={`p-2 bg-gray-200 rounded-full ${currentIndex >= Math.ceil(products.length / itemsPerSlide) - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-300'}`}
          >
            &#10095; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
