import React from 'react'
import Header from '../../components/header/Header.jsx'
import Footer from '../../components/footer/Footer.jsx'
import Banner from '../../components/banner/Banner.jsx'
import RowList from '../../components/rows/rowlist/RowList.jsx'

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </div>
  );
}
