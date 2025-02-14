import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationSearchPanel = (props) => {
  const {
    activeField,
    inputValue,
    setPickup,
    setDestination,
    setPanelOpen,
    setVehiclePanel,
  } = props;

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (inputValue && inputValue.length >= 3) {
        setLoading(true);
        setError(null);

        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`,
            {
              params: { input: inputValue },
              headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
              },
            }
          );

          setSuggestions(response.data);
        } catch (err) {
          console.error('Error fetching suggestions:', err);

          
          if (err.response?.status === 401) {
            localStorage.removeItem('token'); // Clear invalid token
            window.location.href = '/login'; // Redirect to login page
          } else {
            setError('Failed to fetch suggestions. Please try again.');
          }

          setSuggestions([]);
        } finally {
          setLoading(false); 
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [inputValue]);

 
  const handleSuggestionClick = (suggestion) => {
    const selectedAddress = suggestion.description || suggestion;

    
    if (activeField === 'pickup') {
      setPickup(selectedAddress);
    } else if (activeField === 'destination') {
      setDestination(selectedAddress);
    }

    
    // setPanelOpen(false);
    // setVehiclePanel(true);
  };

  return (
    <div>
      {/* Loading state */}
      {loading && <p>Loading suggestions...</p>}

      {/* Error state */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Display suggestions */}
      {suggestions.map((sugg, index) => (
        <div
          key={index}
          onClick={() => handleSuggestionClick(sugg)}
          className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-4 justify-start cursor-pointer"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <h4 className="font-medium">
            {sugg.description || sugg}
          </h4>
        </div>
      ))}

      {!loading && suggestions.length === 0 && inputValue.length >= 3 && (
        <p>No suggestions found.</p>
      )}
    </div>
  );
};

export default LocationSearchPanel;