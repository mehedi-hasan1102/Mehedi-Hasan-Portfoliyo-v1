// // import React from 'react';
// // import Navbar from './Navbar';
// // import { Outlet } from 'react-router-dom';
// // import SocialSidebar from './SocialSidebar';


// // const Layout = () => {
// //     return (
// //         <div>
             
// //             < Navbar />
// //             <SocialSidebar />
// //             <Outlet/>

// //         </div>
// //     );
// // };

// // export default Layout;
// import React from 'react';
// import Navbar from './Navbar';
// import SocialSidebar from './SocialSidebar';
// import HeroSection from './HeroSection';
// import AboutMe from './AboutMe';
// import ProjectSection from './ProjectSection';
// import ContactMe from './ContactMe';


// const Layout = () => {
//     return (
//         <div>
             
//             < Navbar />
//             <SocialSidebar />
//             <HeroSection />
//             <AboutMe />
//             <ProjectSection />
//             <ContactMe/>


//         </div>
//     );
// };

// export default Layout;
import React from "react";
import Navbar from "./Navbar";
import SocialSidebar from "./SocialSidebar";
import HeroSection from "./HeroSection";
import AboutMe from "./AboutMe";
import ProjectSection from "./ProjectSection";
import ContactMe from "./ContactMe";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main > 
        <HeroSection />
        <AboutMe />
        <ProjectSection />
        <ContactMe />
      </main>
    </>
  );
};

export default Layout;
