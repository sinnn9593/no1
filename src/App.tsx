import { BrowserRouter as Router, Route ,Routes} from 'react-router-dom';
import MoreDetails from "./components/MoreDetails"; // MoreDetails コンポーネントをインポート
import HomePage from "./components/HomePage";
import SamplePage from "./components/SamplePage";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/more-details" element = {<MoreDetails />} />
        <Route path="/samples" element = {<SamplePage />} />

      </Routes>
    </Router>
  );
}

export default App;
