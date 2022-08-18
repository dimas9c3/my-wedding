import Head from 'next/head';
import Content from '@/components/Content';

export default function Home() {

  return (
    <div>
      <Head>
        <title>Wedding Dimas & Intan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Content />
    </div>
  );
}
