import React from 'react';

const Header = () => {
  const handleClickBeranda = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  const handleClickAcara = () => {
    document.getElementById("acara").scrollIntoView({ behavior: "smooth" });
  }

  const handleClickGallery = () => {
    document.getElementById("gallery").scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="hidden lg:block fixed top-0 right-0 left-0 bg-transparent px-8 z-20">
      <div className="max-w-screen-2xl w-full mx-auto grid grid-cols-2">
        <ul className="flex w-full text-sm lg:text-base text-white main-color py-4 rounded-l-full rounded-r-full">
          <li className="py-3 px-4 xl:px-8 border border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 text-sm xl:text-base cursor-pointer" onClick={handleClickBeranda} style={{ cursor: 'pointer' }}>
            {' '}
            Beranda
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer" onClick={handleClickAcara} style={{ cursor: 'pointer' }}>
            {' '}
            Acara
          </li>
          <li className="py-3 px-4 xl:px-8 border border-transparent hover:border-white rounded-l-full rounded-r-full mx-1 xl:mx-3 cursor-pointer" onClick={handleClickGallery} style={{ cursor: 'pointer' }}>
            {' '}
            Galeri
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
