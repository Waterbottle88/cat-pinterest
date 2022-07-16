import React from "react";
import { useSelector } from "react-redux";

const Saved = (url, id) => {   
    const saved = useSelector((state) => state.saved.images)

    return(
        <div>
            <h1 className="flex justify-center text-4xl m-5">Saved images</h1>
            <div className="flex flex-wrap justify-center gap-7 rounded-3xl drop-shadow-xl">
            {saved.map(photo => 
                <img src={photo.url} key={photo.id} alt="saved cat" className='object-cover basis-80 h-80 rounded-3xl'/>
            )}

            </div>
        </div>
    );
};

export default Saved;