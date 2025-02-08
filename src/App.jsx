import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Content, Presentation } from './pages'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentation/>} />
        <Route path="/content" element={<Content/>} />
      </Routes>
    </Router>
  );
}

export default App