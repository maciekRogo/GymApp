// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import NavMobile from "./NavMobile.jsx";
// import styles from "../css/Nav.module.css";
// const Nav = () => {
//     // const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//     //
//     // useEffect(() => {
//     //     const handleResize = () => setIsMobile(window.innerWidth < 768);
//     //     window.addEventListener('resize', handleResize);
//     //     return () => window.removeEventListener('resize', handleResize);
//     // }, []);
//     //
//     // if (isMobile) {
//     //     return <NavMobile />;
//     // }
//
//     return (
//         <div>
//             <nav>
//                 <img src="../img/img.png" alt="Logo" />
//                 <ul>
//                     <li><Link to="/">Strona główna</Link></li>
//                     <li><Link to="/cennik">Cennik</Link></li>
//                     <li><Link to="/portfolio">Portfolio</Link></li>
//                     <li><Link to="/zaufali">Zaufali mi</Link></li>
//                     <li><Link to="/omnie">O mnie</Link></li>
//                     <li><Link to="/kontakt">Kontakt</Link></li>
//                 </ul>
//             </nav>
//         </div>
//     );
// };
//
// export default Nav;