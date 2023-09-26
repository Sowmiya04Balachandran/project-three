

// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { CartProvider } from './CartContext';
// import AdminPage from './AdminPage/AdminPage';
// import UserPage from './UserPage/userpage';
// import CartButton from './CartButton';
// import CartModal from './CartModal';
// import Home from './Home';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <CartProvider>
//         <div className="App">
//           <header className="App-header">
//             <h1>Welcome to Pharmacy</h1>
//             <CartButton />
//           </header>
//           <main>
//             <Switch>
//               <Route path="/" exact component={Home} />
//               <Route path="/admin" component={AdminPage} />
//               <Route path="/user" component={UserPage} />
//             </Switch>
//           </main>
//           <CartModal />
//         </div>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CartProvider } from './store/CartContext';
import AdminPage from './AdminPage';
import UserPage from './userpage';
import HomePage from './Home';
import MainNavigation from './MainNavigation'; // Import MainNavigation
import './App.css';
//import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <CartProvider>
      <Router>
       <div>
            <MainNavigation />
         
          <main>
            <Switch>
              
              <Route path='/home' exact ><HomePage/></Route>
              <Route path="/admin" exact><AdminPage/></Route>
              <Route path="/store" exact><UserPage/></Route>
            </Switch>
          </main>
          </div>
      </Router>
    </CartProvider>
  );
}

export default App;
