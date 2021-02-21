import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';



function App() {
  return (
    <div className="app">
     {/*Nav*/}
     <Nav />
     {/*Banner*/}
     <Banner />

      <Row title="NETFLIX ORIGINALS" 
      fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance Novies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries}/>

      
    </div>
  );
}

export default App;
