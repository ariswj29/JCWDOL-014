import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <h1 className="title">Hello, React!</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;