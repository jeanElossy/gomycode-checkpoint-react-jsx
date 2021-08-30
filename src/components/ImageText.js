import React from 'react';
import windows from "../assets/imageInSrc.jpg";
import Video from './Video';

const ImageText = () => {
  return (
    <div className="mt-4">
      <div className="container-fluid text-center card__img p-4">
        <h1 className="title red mb-4">AYEGNON Jean Elossy Willy</h1> 
        <div className="d-flex gap-3">
          <div className="windows__img">
            <img src={windows} alt="image windows" className="img-responsive"/>
          </div>
          <br />
          <div className="ordi__img">
            <img src="/images/imageInPublic.jpg" alt="Image d'ordinateur" className="img-responsive"/>
          </div>
        </div> 
      </div>
      <br />
      <Video />
    </div>
  );
};
export default ImageText;