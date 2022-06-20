import { HashRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Paypal, Profile } from "./Pages";
import { ProtectedRoutes, LoadingScreen } from "./components";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <div className="App">
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/checkout" element={<Paypal />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
