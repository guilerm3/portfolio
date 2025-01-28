import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Content, ParticlesJSComponent } from './pages'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ParticlesJSComponent/>} />
        <Route path="/content" element={<Content/>} />
      </Routes>
    </Router>
  );
}

export default App