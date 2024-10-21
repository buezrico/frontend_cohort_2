import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-800 via-slate-600 to-teal-800">
      <Calculator />
    </div>
  );
}

export default App;
