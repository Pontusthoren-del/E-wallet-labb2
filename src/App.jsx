import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import AddCard from "./views/AddCard";

function App() {
    return (
        <div className="appContainer">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addcard" element={<AddCard />} />
            </Routes>
        </div>
    );
}

export default App;
