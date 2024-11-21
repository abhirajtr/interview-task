import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"

const App = () => {
  return (
    <div className="container bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="px-14">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App