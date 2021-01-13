import Item from "./Item";
import DND from "./dnd";
import "./app.css";
function App() {
  return (
    <div className="app">
      <h1>Drag here to remove Items</h1>
      <div className="app__main">
        <DND id="dnd-1" className="dnd">
          <h1>Store 1</h1>
          <Item id="item-1" className="item" draggable>
            <h1>Item 1</h1>
          </Item>
          <Item id="item-1" className="item" draggable>
            <h1>Item 2</h1>
          </Item>
          <Item id="item-1" className="item" draggable>
            <h1>Item 3</h1>
          </Item>
          <Item id="item-1" className="item" draggable>
            <h1>Item 4</h1>
          </Item>
          <Item id="item-1" className="item" draggable>
            <h1>Item 5</h1>
          </Item>
        </DND>
        <DND id="dnd-2" className="dnd">
          <h1>Store 2</h1>
          <Item id="item-2" className="item" draggable>
            <h1>Item 1</h1>
          </Item>
        </DND>
      </div>
    </div>
  );
}

export default App;
