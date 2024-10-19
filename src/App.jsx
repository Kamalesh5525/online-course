
import './App.css'; // Import your CSS styles
import Header from './components/Header'; // Import Header
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetailPage from './pages/CourseDetailPage';
import Dashboard from './components/Dashboard';


const courses = [
  {
    id: '1',
    title: 'React Basics',
    description: 'Learn the basics of React.',
    color: '#61dafb',
  },
  {
    id: '2',
    title: 'Advanced React',
    description: 'Dive deeper into React concepts.',
    color: '#f05a28',
  },
  
];

const App = () => (
  <Router>
    <Header /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/courses" element={<CourseCatalog courses={courses} />} />
      <Route path="/courses/:id" element={<CourseDetailPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

export default App;
