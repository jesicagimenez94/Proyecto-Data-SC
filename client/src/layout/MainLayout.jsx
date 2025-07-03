//////////////////////////////////////////////////////////
// Importaciones
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

//////////////////////////////////////////////////////////
// MainLayout es un componente que envuelve a todos los componentes de la aplicación

const MainLayout = ({children}) => {
  return (
    <>
      <Header />
      <main className="w-full">
          {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;