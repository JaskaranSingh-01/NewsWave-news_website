
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import NewsList from './Components/NewsList';



function App() {
  const [ category, setCategory ] = useState("");
  const [ searchTerm, setSearchTerm ] = useState("");

  return (
    <div className='main-body'>
      <div>
      <Navbar category={category} setCategory={setCategory} searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      </div>
      <div className='body-display'>
        <NewsList category={category} searchTerm={searchTerm} />
      </div>
      <div className='bg-dark'>
        <Footer />
      </div>
    </div>

  );
}

export default App;
