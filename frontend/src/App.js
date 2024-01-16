import React from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import HomeScreen from "./screens/HomeScreen";
import { EventScreen} from './screens/EventScreen';

const App = () => {
  return (
    <>
    <Router>
   <Header/>
   <main>
   <Container>
   <Routes>
    <Route path="/" exact element={<HomeScreen />} />
    <Route path="/event/:id" element={<EventScreen />} />
    </Routes>
      </Container>
      </main>
      <Footer/>
      </Router>
    </>
  );
}
export default App;