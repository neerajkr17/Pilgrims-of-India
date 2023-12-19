import React, { useState } from 'react';

const Sidebar = () => {
    const [selectedState, setSelectedState] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    
    const states = [
                { id: 1, name: 'Varanasi' },
                { id: 2, name: 'Mathura' },
                { id: 3, name: 'Vrindavan' },
                { id: 4, name: 'Bodhgaya' },
                { id: 5, name: 'Chardham'},
                { id: 6, name: 'Gangotri'},
                { id: 7, name: 'Yamunotri'},
                { id: 8, name: 'Badrinath'},
                { id: 9, name: 'Kedarnath'},
                { id: 10, name: 'Haridwar'},
                { id: 11, name: 'Rishikesh'},
                { id: 12, name: 'Nasik'},
                { id: 13, name: 'Shirdi'},
                { id: 14, name: 'Mahabaleshwar'},
                { id: 15, name: 'Nanded'},
                { id: 16, name: 'Palitana'},
                { id: 17, name: 'Dwarka'},
                { id: 18, name: 'Pushkar'},
                { id: 19, name: 'Hampi'},
                { id: 20, name: 'Gokarna'},
                { id: 21, name: 'Omkareshwar'},
                { id: 22, name: 'Ujjain'},
                { id: 23, name: 'Mahakaleshwar'},
                { id: 24, name: 'Maheshwar'},
                { id: 25, name: 'Guruwayur'},
                { id: 26, name: 'Chidabaram'},
                { id: 27, name: 'Madurai'},
                { id: 28, name: 'Kanyakumari'},
                { id: 29, name: 'Rameshwaram'},
                { id: 30, name: 'Tanjore'},
                { id: 31, name: 'Trichy'},
                { id: 32, name: 'Tirupati'},
                { id: 33, name: 'Puttaparthi'},
                { id: 34, name: 'Bhubaneshwar'},
                { id: 35, name: 'Puri'},
                { id: 36, name: 'Konark'},
                { id: 37, name: 'Deoghar'},
                { id: 38, name: 'Kolkata'},
                { id: 39, name: 'Kangra'},
                { id: 40, name: 'Dharamshala'},
                { id: 41, name: 'Manikaran'},
                { id: 42, name: 'Chamunda Devi'},
                { id: 43, name: 'Renukaji'},
                { id: 44, name: 'Chintpurni'},
                { id: 45, name: 'Paonta Sahib'},
                { id: 46, name: 'Naina Devi'},
                { id: 47, name: 'Vaisno Devi'},
                { id: 48, name: 'Jammu'},
                { id: 49, name: 'Amritsar'},
                { id: 50, name: 'Anandpur Sahib'},
                { id: 51, name: 'Mansa Devi'},

    ];

    const filteredStates = states.filter((state) =>
    state.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const showStateInfo = (state) => {
    setSelectedState(state);
    // Implement the logic to display state information
  };

    return (
        <>
        <nav className="navbar bg-body-tertiary ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://www.incredibleindia-tourism.org/images/icon5.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                    {/* Add a placeholder or label here */}
                    <span style={{ margin: '0 20px' }}>|</span>
                    Pilgrimage Tours
                </a>
            </div>
        </nav>
        <div className="state-list">
            {filteredStates.map(state => (
                <div key={state.id} className="state-item" onClick={() => showStateInfo(state)}>
                    <h2>{state.name}</h2>
                </div>
            ))}
        </div>
    </>
    );
};

export default Sidebar;
