import React from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div>
      <Header />
      <ItemListContainer greeting={"Bienvenidos a Outer Wilds Ventures!"} />
      <Banner />
      <Footer />
    </div>
  )
}

export default App;