// import React from 'react'
// // import {Link} from 'react-router-dom';

// export const SideBar = () => {
//   return (
//     <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

//     {/* <Link className="sidebar-brand " to="/">
//         <div className="sidebar-brand-icon">
//             <img className="w-100" src="/images/logo-mercado-liebre.svg" alt="Mercado Liebre"/>
//         </div>
//     </Link> */}

    
//     <hr className="sidebar-divider my-0"/>

    
//     <li className="nav-item active">
//         {/* <Link className="nav-link" to="/">
//             <i className="fas fa-fw fa-tachometer-alt"></i>
//             <span>DASHBOARD</span></Link> */}
//     </li>

    
//     <hr className="sidebar-divider"/>

    
//     <div className="sidebar-heading">NAVEGACIÓN</div>

    
//     <li className="nav-item">
//         {/* <Link className="nav-link collapsed" to="/products">
//             <i className="fas fa-fw fa-folder"></i>
//             <span>Productos</span>
//         </Link> */}
//     </li>

    
//     <li className="nav-item">
//         {/* <Link className="nav-link" to="/users">
//             <i className="fas fa-fw fa-chart-area"></i>
//             <span>Usuarios</span></Link> */}
//     </li>

    
//     <li className="nav-item">
//         {/* <Link className="nav-link" to="/categories">
//             <i className="fas fa-fw fa-table"></i>
//             <span>Categorias</span></Link> */}
//     </li>

    
//     <hr className="sidebar-divider d-none d-md-block"/>
// </ul>
//   )
// }

import React from 'react';
import image from '../assets/images/logopyg.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} width="60" alt="Garras Amigas"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Garras Amigas</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Navegador</div>

                {/*<!-- Nav Item - Productos -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Productos</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Usuarios -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Usuarios</span></a>
                </li>

                {/*<!-- Nav Item - Categorias -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Categorias</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;