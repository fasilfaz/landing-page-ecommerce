import { Routes, Route } from 'react-router-dom';

// Import page components
import LandingPage from './pages/LandingPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRoutes;