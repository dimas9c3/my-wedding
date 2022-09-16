import { useEffect } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
import Location from '../public/assets/icons/location.svg';

const ContentIntan = () => {
  useEffect(() => {
    const audio = new Audio('/assets/bgm.mp3');
    audio.load();

    const audioPromise = audio.play();
    if (audioPromise !== undefined) {
      audioPromise
        .then((_) => {
          audio.loop = true;
          // autoplay started
        })
        .catch((err) => {
          // catch dom exception
          console.info(err);
        });
    }
  });

  return (
    <div>
      <Layout>
        {/* Header Mobile */}
        <section
          id="beranda"
          className="flex lg:hidden bg-cover bg-center w-full h-screen items-start"
        >
          <div className="flex flex-col w-full text-white text-center z-10">
            <Image
              src="/assets/prewedding-home-mobile.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
              placeholder="blur"
              loading="lazy"
            />
          </div>
        </section>
        {/* End Header Mobile */}
        <section
          id="beranda-dekstop"
          className="hidden lg:grid main-color py-14 lg:py-0 mb:pb-6 grid-flow-col grid-cols-2 gap-4 row-span-4 h-screen"
        >
          <div className="flex flex-col text-white px-8 pb-20 pt-28 justify-end">
            <div className="flex flex-col text-center my-auto">
              <p>
                “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir.”
              </p>
              <p>( QS. Ar- Rum 21 )</p>
            </div>
            <div className="flex flex-col ">
              <p className="font-habibi">Pernikahan dari</p>
              <h4 className="font-great-vibes text-5xl mb-4 mt-6">
                Intan & Dimas
              </h4>
              <p className="font-habibi ml-auto">01 Oktober 2022</p>
            </div>
          </div>
          <div className="flex w-full relative">
            <Image
              src="/assets/prewedding-home.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </section>
        <section
          id="acara"
          className="main-color grid grid-flow-row gap-4 row-span-4 h-fit"
        >
          <div></div>
          <div className="flex flex-col  w-full relative lg:h-full">
            <div className="absolute h-full w-full main-color bg-blur-2px lg:hidden"></div>
            <div className="flex flex-col w-full text-white text-center h-auto px-8 z-10 lg:my-auto">
              <div className="flex flex-col text-white px-8 justify-end lg:hidden">
                <div className="flex flex-col text-center my-auto">
                  <p>
                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                    menciptakan pasangan-pasangan untukmu dari jenismu sendiri,
                    agar kamu cenderung dan merasa tenteram kepadanya, dan Dia
                    menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada
                    yang demikian itu benar-benar terdapat tanda-tanda
                    (kebesaran Allah) bagi kaum yang berpikir.”
                  </p>
                  <p>( QS. Ar- Rum 21 )</p>
                </div>
                <div className="flex flex-col pt-6">
                  <p className="font-habibi font-bold">Pernikahan dari</p>
                  <h4 className="font-great-vibes text-5xl mt-6">Intan</h4>
                  <h4 className="font-great-vibes text-5xl">&</h4>
                  <h4 className="font-great-vibes text-5xl mt-1">Dimas</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full px-8 text-white font-habibi text-sm md:text-base lg:text-xl">
            <div className="flex flex-col w-1/2 text-center px-2 break-words ">
              <p>Putri dari</p>
              <p>Bapak Muhasyim</p>
              <p>Ibu Ety Supiyati</p>
            </div>
            <div className="flex flex-col w-1/2 text-center px-2 break-words">
              <p>Putra dari</p>
              <p>Bapak Mulyoso</p>
              <p>Ibu Siti Sholihah</p>
            </div>
          </div>
          <div className="flex flex-col pt-6">
            <div className="flex my-2 h-16 lg:h-20 justify-center">
              <img
                src="/assets/icons/ring.svg"
                className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
              />
              <div className="flex flex-col text-white font-habibi justify-between h-full">
                <p className="text-base md:text-lg lg:text-3xl mb-0">Ijab Qabul</p>
                <p className="text-xs md:text-base lg:text-lg">
                  01 Oktober 2022
                </p>
                <p className="text-xs md:text-base lg:text-lg">
                  Pukul 09.00 s.d Selesai
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col pt-6">
            <div className="flex my-2 h-16 lg:h-20 justify-center">
              <img
                src="/assets/icons/resepsi.svg"
                className="h-12 md:h-16 w-12 md:w-16  mr-6 my-auto"
              />
              <div className="flex flex-col text-white font-habibi justify-between h-full">
                <p className="text-base md:text-lg lg:text-3xl mb-0">Resepsi</p>
                <p className="text-xs md:text-base lg:text-lg">
                  01 Oktober 2022
                </p>
                <p className="text-xs md:text-base lg:text-lg">
                  Pukul 10.00 s.d Selesai
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full text-white text-center h-auto px-8 z-10 lg:my-auto">
            <p className="md:block mt-1 lg:mt-auto mx-auto text-sm text-white font-habibi">
              Bertempat di Gedung Kartini, Jalan Sukowati, Sragen Tengah, Kec. Sragen, Kabupaten Sragen
            </p>
          </div>
          <div
            className="flex flex-col w-full text-white text-center h-auto px-8 block my-2"
            dangerouslySetInnerHTML={{
              __html: `<iframe class='w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.318868541992!2d111.00421251415032!3d-7.429922075254474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a035112f8366f%3A0x90e13b9544290031!2sGEDUNG%20KARTINI!5e0!3m2!1sen!2sid!4v1663293530858!5m2!1sen!2sid" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
            }}
          ></div>

          <a
            className="justify-center items-center mx-auto"
            href="https://www.google.com/maps/place/GEDUNG+KARTINI/@-7.4299221,111.0042125,17z/data=!3m1!4b1!4m5!3m4!1s0x2e7a035112f8366f:0x90e13b9544290031!8m2!3d-7.429902!4d111.0065469"
            target="_blank"
          >
            <button className="px-6 flex justify-center items-center border-white border rounded-l-full rounded-r-full mx-auto text-white font-habibi text-sm  md:text-base">
              <Location className="h-8 md:h-10 w-8 md:w-10 mr-4" />
              Cek Lokasi
            </button>
          </a>
        </section>
        <section
          id="gallery"
          className="main-color inline-block pt-8 md:pt-0 lg:pt-32 pb-24 lg:pb-8 grid grid-flow-row gap-4 grid-rows-7 lg:grid-rows-5 grid-cols-2 lg:grid-cols-3 h-screen px-4 lg:px-8"
        >
          <h1 className="col-span-2 text-5xl font-great-vibes my-auto mx-auto text-white lg:hidden">Gallery</h1>
          <div className="flex row-span-3 ">
            <Image
              src="/assets/gallery-mobile/photo-1.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="flex row-start-3 col-start-2 row-span-3 lg:row-span-5 bg-white">
            <Image
              src="/assets/gallery-mobile/photo-2.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="flex row-span-1 col-start-2 lg:col-start-3 row-start-2  lg:row-span-2">
            <Image
              src="/assets/gallery-mobile/photo-3.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="flex row-span-1 lg:row-span-3">
            <Image
              src="/assets/gallery-mobile/photo-4.jpg"
              alt="Picture of the author"
              width={500}
              height={500}
              objectFit="cover"
              quality={100}
              loading="lazy"
              placeholder="blur"
            />
          </div>
          <div className="flex row-span-2 lg:row-span-2 col-span-2 lg:col-span-1 w-full relative">
            <Image
              src="/assets/gallery-mobile/photo-5.jpg"
              alt="Picture of the author"
              layout="fill"
              objectFit="cover"
              quality={100}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default ContentIntan;
