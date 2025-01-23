import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Content } from './pages'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<>OLÁ MUNDO!!!!!!!!!!</>} />
        <Route path="/content" element={<Content/>} />
      </Routes>
    </Router>
  );
}

export default App