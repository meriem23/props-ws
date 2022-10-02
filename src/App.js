import "./App.css";
import Card from "./Components/Card";
import Header from "./Components/Header";

function App() {
  const myProducts = [
    {
      id: "0",
      productName: "Phone",
      productDescription: "Nice phone",
      productButton: "Buy this phone",
    },
    {
      id: "1",
      productName: "TV",
      productDescription: "Nice TV",
      productButton: "Buy this TV",
    },
    {
      id: "2",
      productName: "game",
      productDescription: "Nice game",
      productButton: "Buy this game",
    },
  ];

  const myName = "Mohamed" //camelCase
  const isWorking = true //camelCase
  const MyAge = 19 //pascalCase
  const myAlert = () => {
    alert("Hello ")
  }
  return (
    <div className="App-header">
      {/* {myProducts.map((product) => (
        <Card product={product} key={product.id} />
      ))} */}
      <Header myName={myName} isWorking={isWorking} myAlert={myAlert}>
        {/* <p>Hello</p> */}
        {MyAge}
      </Header>
    </div>
  );
}

export default App;
