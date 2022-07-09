import { Presentation } from "./components/presentation";
import { getSlides } from "./data";

function App() {
  return (
    <div className="App">
      <Presentation slides={getSlides()} />
    </div>
  );
}

export default App;
