import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import NewsSection from './components/NewsSection';

function News() {
  return (
    <>
        <Navbar logo="/images/white-logo.png"/>

        <Header title="Latest News" subtitle="Initial news content with images, ready for your edits."/>

        <NewsSection />

    </>
  );
}

export default News;