import Head from 'next/head';
import { useAppContext } from '@/components/context';
import Content from '@/components/Content';
import Front from '@/components/Front';

export default function Home() {
  const [state, dispatch] = useAppContext();

  return (
    <div>
      <Head>
        <title>Wedding Dimas & Intan</title>
        <meta name="theme-color" content="#0f172a00" />
        <meta
          name="description"
          content="Mengundang Saudara/Saudari Untuk Menghadiri Pernikahan Dimas & Intan Pada 2 Oktober 2022"
        />
        <meta name="keywords" content="Wedding, Dimas, Intan" />
        <meta name="author" content="Dimas Hermawan" />
        <meta
          name="copyright"
          content="dimashermawan.com [dimas9c3@gmail.com]"
        />
        <meta name="robots" content="index, archive, follow, noodp" />
        <meta name="googlebot" content="index,archive,follow,noodp" />
        <meta name="msnbot" content="all,index,follow" />
        <meta property="og:title" content="Wedding Dimas & Intan" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Mengundang Saudara/Saudari Untuk Menghadiri Pernikahan Dimas & Intan Pada 2 Oktober 2022"
        />
        <meta property="og:site_name" content="wedding.dimashermawan.com" />
        <meta property="og:url" content="http://wedding.dimashermawan.com/" />
        <meta
          property="og:image"
          content="/assets/prewedding-home-mobile.jpg"
        />
        <link rel="canonical" href="http://wedding.dimashermawan.com/" />
        <meta name="geo.country" content="id" />
        <meta name="geo.placename" content="Indonesia" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!state.toggleOpen ? <Front /> : <Content />}
    </div>
  );
}
