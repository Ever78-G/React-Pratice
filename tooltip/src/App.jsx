import TooltipText from "./tooltip/TooltipText";

function App() {
  return (
    <div className="App">
      <p>
        <TooltipText tooltip={"texto generado"}>Lorem ipsum</TooltipText> dolor sit amet consectetur adipisicing elit.
      </p>
      <p>
        Asperiores, libero non <TooltipText tooltip="soy un tooltip">mollitia facilis vel labore</TooltipText> necessitatibus iste voluptatem reiciendis.
      </p>
      <p> 
        <TooltipText tooltip="último texto">Mollitia</TooltipText> dicta quae tenetur vero. Ex, doloremque!
      </p>
    </div>
  );
}

export default App;
