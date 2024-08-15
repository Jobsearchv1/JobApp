
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../../components/Banner';
import SearchSection from '../../components/SearchSection'; // Assurez-vous que le chemin est correct
import MapComponent from '../../components/MapComponent'; // Assurez-vous que le chemin est correct

const Home = () => {
    const navigate = useNavigate();
    const [location, setLocation] = useState('');
  
    const handleSearch = (searchLocation) => {
      setLocation(searchLocation);
    };
  
    return (
      <div>
        <SearchSection onSearch={handleSearch} />
        <Banner />
        <div className="map-container" style={{ marginTop: '20px' }}>
          <MapComponent location={location} zoom={13} />
        </div>
      </div>
    );
  };
  
  export default Home;