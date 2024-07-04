import React from 'react';
import ProductCard from './ProductCard';


const productsData = [
{
    img:"/clothes-4.jpg",
    title:"Skirt",
    desc:"Black floral wrap",
    rating:4,
    price:"120.00",
},
{
    img:"/jacket-4.jpg",
    title:"Jacket",
    desc:"Mens winter leather Jacket",
    rating:4,
    price:"300.00",
},
{
    img:"/sports-4.jpg",
    title:"Shoes",
    desc:"Treckking and running shoe",
    rating:4,
    price:"600.00",
},
{
    img:"/jacket-2.jpg",
    title:"Jacket",
    desc:"Mens winter leather Jacket",
    rating:4,
    price:"300.00",
},
{
    img:"/jacket-6.jpg",
    title:"Jacket",
    desc:"Mens full sleeve jacket",
    rating:5,
    price:"600.00",
},
{
    img:"/watch-2.jpg",
    title:"Smart watch",
    desc:"Smart watch vital plus",
    rating:4,
    price:"500.00",
},
{
    img:"/party-wear-2.jpg",
    title:"Part Wear",
    desc:"Womens party wear",
    rating:5,
    price:"1000.00",
},
];

const NewProducts = () => {
  return (
     <div>
        <div className='container pt-16'>
    <h2 className='font-medium text-2xl pb-4'>
New Products
    </h2>

    <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
    lg:grid-col-3 xl:grid-col-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
        {productsData.map((item,index) => ( 
            <ProductCard
             key={index} 
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
            />
     ))}

    </div>
    </div>
    </div>
  );
};

export default NewProducts;
