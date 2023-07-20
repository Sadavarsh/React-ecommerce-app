import React from "react";
import { useParams } from 'react-router-dom';
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";
import { useDispatch } from 'react-redux';
const ProductDetail = ({toprateslaes}) => {

  const {items} = toprateslaes;
  const {id} = useParams();

const product = items.find((item) => item.id === id)
const {title, price, description, color, text,btn,shadow,rating,img} = product;


const dispatch = useDispatch();

const onAddToCart = () => {
  const item = { id, title, text, img, color, rating, btn, description, shadow, price };

  dispatch(setAddItemToCart(item));
};

const onCartToggle = () => {
  dispatch(setOpenCart({
      cartState: true
  }))
}



  return (
    <React.Fragment>
      <div className={` mx-5 flex gap-10 mt-28 md:mt-32 lg:items-center md:flex-col `}>
        <div className=" bg-theme flex-1" >
          <img  src={img} alt="" className="p-2 transitions-theme hover:-rotate-12" />
          <div className="flex items-center pt-24 pb-4 justify-center gap-10 sm:flex-col">
            <button
              type="button"
              onClick={()=> onAddToCart()}
              className="bg-[#F78511] flex gap-2 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
            >
              <ShoppingBagIcon className="icon-style w-8 h-8   text-slate-900" />
              <p className="py-1.5 px-2">Add To Cart</p>
            </button>
            <button
              type="button"
              onClick={()=> {onAddToCart(); onCartToggle();}}
              className="bg-[#2CAB40]  blur-effect-theme button-theme px-5 py-2 shadow shadow-sky-200  text-white"
            >
              {btn}
            </button>
          </div>
        </div>
        <div className="w-[50vw] flex-1 md:w-full h-auto mr-16 md:pl-2 md:mr-2  ">
          <div className="p-2">
          <h1 className="text-gray-600 text-2xl py-2">{title}</h1>
          <p className=" text-xl py-2">{text}</p>
          </div>
        
          <div className="flex items-center justify-between w-28 my-2 gap-10">
            <div className="flex items-center bg-[#F1434E]  px-1 rounded blur-effect-theme">
              <h1 className="text-black text-xl font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 text-yellow-500 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-500">
                {rating}
              </h1>
            </div>
          </div>

         <div className="p-2">
          <p className="text-2xl mb-2">Product Details:</p>
          <p>{description}</p>
         </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetail;
