import React from 'react';

function ItemList({ item, onClick }) {

  const { price, title, images, category,id,sub_title} = item;
    function handleClick() {
        // console.log(price, title, images, category,'id:'+id);
        

        onClick(price, images, title, category,);
    }

    return (
        <div className="flex border-2 items-center justify-between p-2 rounded-lg" >
            <div>
                <img src={images} alt="productImage" className="w-full h-20 ml-2" />
            </div>
            <div >
                <h2>{title}</h2>
                <p>{sub_title}</p> 
                <span>{price}</span>
            </div>
            <button
                className="w-8 text-lg rounded-md text-white bg-[#F54748] h-7 text-center"
                onClick={handleClick} // Corrected spelling
            >
                +
            </button>
        </div>
    );
}

export default ItemList;
