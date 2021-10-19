import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header/Header';
import Hero from './Components/Pages/Home/Hero/Hero';
import DetailsHeader from './Components/Pages/Home/DetailsHeader/DetailsHeader';
import Footer from './Components/Shared/Footer/Footer';
import Services from './Components/Pages/Home/Services/Services';
import Doctors from './Components/Pages/Home/Services/Doctors/Doctors';
import NotFound from './Components/Pages/NotFound/NotFound';
import Login from './Components/Pages/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './Components/Pages/Register/Register';
import Contact from './Components/Pages/Contact/Contact';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

function App() {
  return (





    <AuthProvider>

      <BrowserRouter>
        <Switch>

          <Route exact path="/">
            <Header></Header>
            <Hero></Hero>
            <DetailsHeader></DetailsHeader>
            <Services></Services>
            <Doctors></Doctors>
            <Footer></Footer>
          </Route>

          <Route path="/login">
            <Header></Header>
            <Login></Login>
            <Footer></Footer>
          </Route>

          <Route path="/signup">
            <Header></Header>
            <Register></Register>
            <Footer></Footer>
          </Route>

          <PrivateRoute path="/doctors">
            <Header></Header>
            <Doctors></Doctors>
            <Footer></Footer>
          </PrivateRoute>

          <Route path="/contact">
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
          </Route>

          <Route path="/services">
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>



        </Switch>
      </BrowserRouter>


    </AuthProvider>



  );
}

export default App;
