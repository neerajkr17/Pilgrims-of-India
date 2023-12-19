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

import React from 'react';
import Sidebar from './Sidebar';
import Page from './Page';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Page />
      </div>
    </div>
  );
};

export default Main;

