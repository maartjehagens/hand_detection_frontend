import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Practice from "./pages/Practice";
import Lessons from "./pages/Lessons";
import Challenge from "./pages/Challenge";
import Glossary from "./pages/Glossary";
import Settings from "./pages/Settings";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="Lessons" element={<Lessons />} />
                    <Route path="Practice" element={<Practice />} />
                    <Route path="Challenge" element={<Challenge />} />
                    <Route path="Glossary" element={<Glossary />} />
                    <Route path="Settings" element={<Settings />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);