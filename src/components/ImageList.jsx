import React from "react";
import {useState, useEffect} from 'react';
import axios from 'axios';
import ImageCard from "./ImageCard";

const ImageList = () => {
  const [image, setImage] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  const scrollHandler = (e) => {
    if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 500){
      setFetching(true);
    }
  }

  useEffect(() => {
    if(fetching){
      axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=${currentPage}`)
        .then(response => {
          setImage([...image, ...response.data])
          setCurrentPage(prevState => prevState + 1)
        })
        .finally(() => setFetching(false));
    }
  }, [fetching])

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    }
  }, [])

    return(
        <div className="flex flex-wrap justify-center gap-7">
        {image.map(photo => 
            <ImageCard url={photo.url} id={photo.id}/>
        )}
        </div>
    );
};

export default ImageList;