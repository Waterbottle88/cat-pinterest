import React from "react";
import { useDispatch } from "react-redux";
import { addSaved } from "../store/savedSlice";

const ImageCard = ({url, id}) => {
    const dispatch = useDispatch();

    const addSavedHandler = () => {
        const save = {url, id}
        dispatch(addSaved(save))
    }

    return(
        <div className="relative rounded-3xl drop-shadow-xl" key={id}>
            <img 
                src={url} 
                alt="Cat" 
                className='object-cover basis-80 h-80 rounded-3xl'
            />
            <div className="flex flex-row justify-center">
            <button type="button" className="bg-green-200 rounded-3xl p-1 mt-1" onClick={() => addSavedHandler()}>Add to saved</button>
            <a href={url} className="ml-1 bg-cyan-500 rounded-3xl p-1 mt-1">Download</a>
            </div>
        </div>
    );
};

export default ImageCard;