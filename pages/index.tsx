import React, { ReactElement } from 'react';
import Head from 'next/head'
import Layout from '../components/layout';
import 'glider-js/glider.min.css';

function Home() {
  return (
    <div className={styles.container}>
       <Head>
         <title>Indie Brands</title>
         <meta name="description" content="Indie brands application" />
         <link rel="icon" href="/favicon.ico" />
       </Head>
      <div>home</div>
     </div>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
export default Home
