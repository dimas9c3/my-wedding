import Head from 'next/head';
import Content from '@/components/Content';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Wedding Dimas & Intan</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content />
    </div>
  );
}
