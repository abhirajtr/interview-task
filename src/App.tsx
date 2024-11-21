import Header from "./components/Header"
import MainContent from "./components/MainContent"

const App = () => {
  return (
    <div className="container bg-black text-white min-h-screen flex flex-col">
      <Header />
      <main className="px-14">
        <MainContent />
      </main>
    </div>
  )
}

export default App