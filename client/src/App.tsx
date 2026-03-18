import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
// import Team from './pages/Team';
// import VisionMission from './pages/VisionMission';
// import Impact from './pages/Impact';
// import Training from './pages/Training';
// import Community from './pages/Community';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/team" element={<Team />} />
            <Route path="/vision-mission" element={<VisionMission />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/training" element={<Training />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;