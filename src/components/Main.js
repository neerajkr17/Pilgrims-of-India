// import React from 'react';
// import Sidebar from './Sidebar';
// import Page from './Page';
// import './Main.css';

// // main component
// const Main = () => {
// return (
//     <div className='main'>
//     <div className='sidebar'>
//         <Sidebar/>
//     </div>
//     <div className='page'>
//         <Page/>
//     </div>
//     </div>
//     );
// };

// export default Main;

import React, {useState} from 'react';
import Sidebar from './Sidebar';
import Page from './Page';
import './Main.css';

const Main = () => {
  const [selectedState, setSelectedState] = useState(null);
  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar setSelectedState={setSelectedState} />
      </div>
      <div className='content'>
        <Page selectedState={selectedState} />
      </div>
    </div>
  );
};

export default Main;