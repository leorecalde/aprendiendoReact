import "bootstrap/dist/css/bootstrap.min.css";
import Informacion from "./components/Informacion";

function App() {
  return (
  <main className="container my-4">
      <h1 className="text-center">Primer Proyecto React</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br /> Vero
        modi nihil harum perferendis molestiae, soluta quia aliquid, quibusdam
        ad tenetur suscipit facilis eos doloremque optio totam quae libero, ea
        dolore!
      </p>
      {/*invocar mis componentes*/}
      <Informacion></Informacion>
    </main>
  );
}

export default App;
