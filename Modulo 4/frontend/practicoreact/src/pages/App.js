import '../styles/components/Pages/App.css';
import { Header } from '../components/layout/Header';
import { Main } from '../components/layout/Main';
import { Footer } from '../components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Header titulo='Modulo 4 - Ivan Antoff' />
      <Main 
        titulo='Bienvenidos!' 
        subtitulo='Esto es un componente de prueba'
        cuerpo='Este componente posee titutlo, subtitulo y cuerpo para generar esta vista.'
      />
      <Footer />
    </div>
  );
}

export default App;
