import Header from "./header/Header"
import MainBody from "./MainBody/MainBody"
import Footer from "./MainBody/Footer";

export default function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <MainBody/>
      <Footer/>
    </div>
  )
}
