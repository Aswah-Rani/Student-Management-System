import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import Form from "./pages/Form";
import Login from "./pages/Login";
import Student from "./pages/Student";
import NotFound from "./pages/NotFound";
import Update from "./pages/Update";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        
        <Header />

        <main className="flex-grow container mx-auto p-6">
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/login" element={<Login />} />
            <Route path="/student" element={<Student />} />
            <Route path="/Update" element={<Update />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;


