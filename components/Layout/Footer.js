import React from 'react';
import Home from '../../public/assets/icons/home.svg';
import Calender from '../../public/assets/icons/calender.svg';
import Gallery from '../../public/assets/icons/gallery.svg';

const Footer = () => {
  const handleClickBeranda = () => {
    document.getElementById("beranda").scrollIntoView({ behavior: "smooth" });
  }

  const handleClickAcara = () => {
    document.getElementById("acara").scrollIntoView({ behavior: "smooth" });
  }

  const handleClickGallery = () => {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className=" fixed lg:hidden bottom-0 mb-1 mx-1 right-0 left-0 z-20">
      <div className="main-color w-full px-6 rounded-full shadow border-opacity-20 border border-white">
        <ul className=" flex items-center justify-evenly text-white text-xs font-light py-2 md:py-3">
          <li className="flex items-center font-medium  flex-col px-2 py-1" onClick={handleClickBeranda} style={{ cursor: 'pointer' }}>
            <Home className="h-6 w-6 mb-1" />
            <p>Beranda</p>
          </li>
          <li className="flex items-center  flex-col px-2 py-1" onClick={handleClickAcara} style={{ cursor: 'pointer' }}>
            <Calender className="h-6 w-6 mb-1" />
            <p>Acara</p>
          </li>
          <li className="flex items-center  flex-col px-2 py-1" onClick={handleClickGallery} style={{ cursor: 'pointer' }}>
            <Gallery className="h-6 w-6 mb-1" />
            <p>Galeri</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
