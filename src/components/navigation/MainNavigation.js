import React from 'react'
import {Link} from'react-router-dom';
import AuthContext from '../../context/auth-context';

import './MainNavigation.css'

const MainNavigation = props => (
 <AuthContext.Consumer>
     {context => {
         return (
         <header className='main-navigation'>
         <div className='main-navigation_logo'>
             <h1>Eventful</h1>
         </div>
     <nav className='main-navigation_items'>
     <ul>
         {!context.token && (
         <li>
             <Link to="/auth">Authenticate</Link>
         </li>
         )}
         <li>
             <Link to="/events">Events</Link>
         </li>
        {context.token && (
            <React.Fragment>
        <li>
             <Link to="/bookings">Bookings</Link>
         </li>
         <li>
             <button onClick={context.logout}>Logout</button>
         </li>
         </React.Fragment>
         )}
     </ul>
     </nav>
         </header>
         );
     }}
      
    </AuthContext.Consumer>
  );


export default MainNavigation;