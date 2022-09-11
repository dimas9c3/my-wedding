import { useEffect, useState } from 'react';
import { useAppContext } from '@/components/context';
export default function Front() {
  const [to, setTo] = useState('');
  const [, dispatch] = useAppContext();

  const handleOpen = () => {
    dispatch({ type: 'CHANGE_TOGGLE_BUKA', payload: true });
  };

  useEffect(() => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    let kepada = params.kepada;

    if (kepada !== null) {
      localStorage.setItem('kepada', kepada);
    } else {
      kepada = localStorage.getItem('kepada');
    }

    setTo(kepada);
  }, []);

  return (
    <div className="flex main-color w-full h-screen justify-center items-center">
      <div className="max-w-screen-2xl mx-auto ">
        <div className="flex flex-col text-white text-center my-auto">
          <h4 className="font-great-vibes text-5xl mt-6">Dimas</h4>
          <h4 className="font-great-vibes text-5xl">&</h4>
          <h4 className="font-great-vibes text-5xl mt-1">Intan</h4>
        </div>
        <div className="flex flex-col text-white text-center my-auto">
          <h4 className="mt-6">Kepada Yth :</h4>
          <h4 className="font-semibold text-lg">{to}</h4>
        </div>
        <div className="flex flex-col pt-4">
          <button
            onClick={handleOpen}
            className="h-12 px-6 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-md md:text-base transition-colors duration-150 focus:shadow-outline hover:bg-indigo-800 transition delay-150 duration-300 ease-in-out animate-fade"
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}
