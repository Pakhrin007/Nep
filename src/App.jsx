import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pricing from './navbar/Pages/Pricing';
import LandingPage from './landing-page';
import Blog from './navbar/Pages/Blog';
import BlogDetail from './navbar/Pages/Blog/blog-details';
import AiAssistant from "./navbar/Pages/Features/ai-assistant/index"
import Collaboration from "./navbar/Pages/Features/collaboration/index"
import Documents from "./navbar/Pages/Features/documents/index"
import HumanResource from "./navbar/Pages/Features/human-resource/index"
import ProjectManagement from "./navbar/Pages/Features/project-management/index"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/ai-assistant" element={<AiAssistant />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/human-resource" element={<HumanResource />} />
        <Route path="/project-management" element={<ProjectManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
