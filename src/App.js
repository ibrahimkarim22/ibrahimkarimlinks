import "../src/scss/app.scss";
import Home from "./components/Home";
import Sky from "./components/Sky";

function App() {
  return (
    <>
    <div className="main-grid">
      <Home />
      <Sky />
      </div>
    <footer className="footer">
      <div>&copy; Ibrahim Karim 2025</div>
    </footer>
    </>
  );
}

export default App;
