import ErrorMessage from "./components/ErrorMessage";
import List from "./components/List";
import { foodItems} from "./constants/items";

function App() {


  return (
    <>
      <h1>Food Items</h1>
      {foodItems.length === 0 && <ErrorMessage />}
      {foodItems.length > 0 && <List foodItems={foodItems} />}
      
    </>
  );
}

export default App;
