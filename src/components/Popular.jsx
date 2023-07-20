import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/splide/css';
import {  ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";
import { Link } from "react-router-dom";
const Stories = ({toprateslaes }) => {
  const { items} = toprateslaes;
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
          1200: { perPage: 3},
          991: { perPage: 2.3},
          768: { perPage: 2},
          500: { perPage: 1.3},
          425: { perPage: 1},
        },
      };

      const dispatch = useDispatch();
      const onAddToCart = (prd) => {
        const { id, title, text, img, color, shadow, price } = prd;
        const item = { id, title, text, img, color, shadow, price };
        dispatch(setAddItemToCart(item));
      };

      const onCartToggle = () => {
        dispatch(setOpenCart({
            cartState: true
        }))
    }
  return (
    <>
     
     <div className="nike-container mb-11">
     <div className='grid items-center'>
        <h1 className='text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter
         drop-shadow-lg'>Popular Products</h1>
      </div>
        <div className="mt-7">
          <Splide options={splideOptions}>
            {items.map((item, i) => (
            
              <SplideSlide key={i} className="mb-0.5">
               
                <div className="relative grid items-center gap-4 pb-2 rounded-lg shadow shadow-slate-200 ring-1 ring-slate-200">
                <Link to={`/product/${item.id}`}>
                <div className="flex items-center h-52 justify-center">
                  
                  <img
                    src={item.img}
                    alt={`img/story/${i}`}
                    className="w-full h-auto object-cover shadow-md shadow-slate-200 rounded-tl-lg rounded-tr-lg"
                  />
                </div>
                </Link>
                
                  <div className="flex items-center justify-between w-full px-4">
                    <div className="flex items-center gap-0.5">
                      <StarIcon className="icon-style text-yellow-500 w-5 h-5" />
                      <span className="text-xs font-bold">{item.rating}</span>
                    </div>
                    <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
              <h1 className="text-black text-sm font-medium">${item.price}</h1>
            </div>
                    <div className="flex items-center gap-0.5">
                    <button
              type="button"
              className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
              onClick={()=> onAddToCart(item)}
            >
                      <ShoppingBagIcon  className="icon-style text-blue-600" />
                      </button>
                    </div>
                  </div>
                  <div className="grid items-center justify-items-start px-4">
                    <h1 className="text-base font-semibold lg:text-sm">{item.title}</h1>
                    <p className="text-sm text-justify lg:text-xs">{(item.text)}</p>
                  </div>
                  <div className="flex items-center justify-center px-4 w-full">
                    <button
                    onClick={()=> {onAddToCart(item); onCartToggle();}}
                    className="w-full bg-gradient-to-b from-slate-900 to-black shadow-md shadow-black text-center text-slate-100 py-1.5 button-theme">{item.btn}</button>
                  </div>
                </div>
              </SplideSlide>
              
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
};

export default Stories;