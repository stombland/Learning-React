import React from "react";

const Header = () => {
    const Fruit = 'Mango';
    const Fruit2 = 'Orange';
  return (
    <>
      <h1><br /><b>Welcome to Fruits</b></h1>
      <ul>
        <li>Apple</li>
        <li>{Fruit}</li>
        <li>{Fruit2}</li>
      </ul>
    </>
  );
};

export default Header;
