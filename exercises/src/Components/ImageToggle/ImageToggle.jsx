import React, {useRef } from 'react';
import budapestImg from "./budapest.jpg";
import amsterdamImg from "./amsterdam.jpg"

const ImageToggle = () => {
const imgRef1=useRef();
const imgRef2=useRef();

return (
    <div>
        <img ref={imgRef1} src={budapestImg} alt="" width="500" height="300" onMouseEnter={() => imgRef1.current.style.filter='grayscale(100%)'} onMouseLeave={() => imgRef1.current.style.filter='none'}/>
        <img ref={imgRef2} src={amsterdamImg} alt="" width="500" height="300" onMouseEnter={() => imgRef2.current.style.filter='grayscale(100%)'} onMouseLeave={() => imgRef2.current.style.filter='none'}/>
    </div>
);
};

export default ImageToggle;