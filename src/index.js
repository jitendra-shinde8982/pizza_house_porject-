import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <h1>Hello</h1>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Jitu's Pizza House</h1>
    </header>
  );
}
function Menu() {
  return (
    <div className="menu">
      <h2>This is Our Menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzObj={pizza} key={pizza.name} />
        ))}
      </ul>

      {/* <Pizza
        Name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        imgName="pizzas/focaccia.jpg"
        price="6"
      /> */}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isopen = hour >= openHour && hour <= closeHour;
  console.log(isopen);
  return (
    <footer className="footer">
      {isopen && (
        <div className="order">
          <p>
            we are open until until {closeHour}:00. come visit us or order
            online.
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

function Pizza(props) {
  if (props.pizzObj.soldOut)
    return (
      <li className="pizza sold-out">
        <img src={props.pizzObj.photoName} alt={props.pizzObj.name} />
        <div>
          <h3>{props.pizzObj.name}</h3>
          <p>{props.pizzObj.ingredients}</p>
          <span>{props.pizzObj.price}</span>
        </div>
      </li>
    );
  return (
    <li className="pizza">
      <img src={props.pizzObj.photoName} alt={props.pizzObj.name} />
      <div>
        <h3>{props.pizzObj.name}</h3>
        <p>{props.pizzObj.ingredients}</p>
        <span>{props.pizzObj.price}</span>
      </div>
    </li>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
