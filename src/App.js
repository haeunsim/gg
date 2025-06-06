import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/MainPage';
import Goals from './pages/GoalsPage';
import Select from './pages/SelectPage';
import Balance from './pages/BalancePage';
import Lever from './pages/LeverPage';
import Slope from './pages/SlopePage';
import Result from './pages/ResultPage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route> {/* element={<Layout />} */}
          <Route path="/" element={<Main />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/select" element={<Select />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/lever" element={<Lever />} />
          <Route path="/slope" element={<Slope />} />
          <Route path="/result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
