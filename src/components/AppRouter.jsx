import React from "react";
import {Routes, Route} from 'react-router-dom';
import Saved from "./Saved";
import ImageList from "./ImageList";

const AppRouter = () => {
    return(
        <Routes>
            <Route index element={<ImageList/>}/>
            <Route path="/saved" element={<Saved/>}/>
        </Routes>
    );
};

export default AppRouter;