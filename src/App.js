import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbaar/>
<Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/register" element={<Register />} />
    <Route exact path="/navbaar" element={<Navbaar />} />
    <Route exact path="/overview" element={<Overview />} />
    <Route exact path="/edit" element={<EditProduct/>} />
    <Route exact path="/add" element={<AddProduct />} />
    <Route exact path="/dropdown" element={<Dropdown />} />
    <Route exact path="/card" element={<Card />} />
    <Route exact path="/orderdetail" element={<Orderdetail />} />
    <Route exact path="/inventory" element={<Inventory/>} />
  </Routes>
    </div>
  );
}

export default App;
