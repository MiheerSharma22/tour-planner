import { useState } from 'react';
import './Card.css';

function Card( {id, price, name, info, image , removeTour} ) {
    
    const tourPrice = `₹  ${price}`;
    const tourPlace = name;
 

    const [readMore , setreadMore] = useState(false);

    const tourInfo  = readMore ? info : `${info.substr(0,200)}... `;
    

    function readmoreHandler() {
        setreadMore(!readMore);
    }


    return(
        <div className="card w-[75%] md:w-[350px] lg:w-[400px] mb-[2rem] pt-[1rem] pb-[1rem] rounded-xl flex flex-col items-center h-fit">
            <img src={image} className="w-[95%] md:w-[380px] aspect-[1/1] object-cover mx-auto"></img>
            
            <div className='tour-info my-[20px]  mx-[15px]'>
                <p className=' text-green-500 font-bold text-[1.35rem] tracking-wide'>
                    {tourPrice}
                </p>
                <h3 className='text-[1.6rem] font-extrabold'>
                    {tourPlace}
                </h3>
                <p className='tour-description text-[1.2rem]'>
                    {tourInfo} 
                    <span className='more-less inline text-blue-500 font-medium text-[1.1rem] cursor-pointer' onClick={readmoreHandler}>{ readMore ? " Show Less" : " Read More"}</span>
                </p>
            </div>

            <button className='border border-[#b4161b] rounded-xl px-[80px] py-[10px] text-[1.2rem] font-bold bg-[#b4161b21] hover:text-white hover:bg-[#FF0000]  transition-all delay-50' onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;