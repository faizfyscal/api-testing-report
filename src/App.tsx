import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import LandingPage from "./pages/LandingPage";
import ApiDashboard from "./pages/ApiDashboard";
import PerformanceDashboard from "./pages/PerformanceDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="api-dashboard" element={<ApiDashboard />} />
          <Route path="performance-dashboard" element={<PerformanceDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
