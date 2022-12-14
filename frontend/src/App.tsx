import 'react-toastify /dist/ReactTostify.css';
import Header from "./components/Header";
import SalesCard from "./assets/SalesCard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}

export default App
