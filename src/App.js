import './App.css';
import Navbar from './components/navbar/Navbar';
import ContactUs from './components/contact/ContactUs';
import {BrowserRouter as Router, Route,  Switch} from 'react-router-dom';
import Homepage from './components/home/Homepage';
import AboutUs from './components/about/AboutUs';
import FAQs from './components/faqs/FAQs';
import Error404 from './components/error/Error404';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route exact path="/about" component={AboutUs}/>
            <Route exact path="/contact" component={ContactUs}/>
            <Route exact path="/faqs" component={FAQs}/>
            <Route component={Error404}/>
          </Switch>
          </main>
      </Router>
    </div>
  );
}

export default App;
