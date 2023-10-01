import React from 'react';
import './HomeScreen.css';
import Nav from './Nav.js';
import Banner from './Banner';
import requests from './Request';
import Row from './Row';

function HomeScreen() {

  return (
    <div className='homescreen'>
    <Nav/>
    <Banner/>
    <Row title= 'NETFLIX ORIGINALS'
    fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow />
    <Row title ='TRENDING NOW'
    fetchUrl={requests.fetchTrending}/>
    
    

    </div>
  );
}

export default HomeScreen;