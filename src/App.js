import "./App.css";

import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import { useEffect, useState } from "react";
import Loader from "./components/loader/Loader";

function App() {
  const [listItems, setListItems] = useState([]);
  const [isCalling, setIsCalling] = useState(true);

  useEffect(() => {
    callToApi();
  }, []);

  const callToApi = async (text = "ingenuity") => {
    setIsCalling(true);
    try {
      const respuesta = await fetch(
        `https://images-api.nasa.gov/search?q=${text}&page=1&media_type=image`
      );
      const res = await respuesta.json();
      setListItems(res.collection.items);
      setIsCalling(false);
    } catch (error) {
      // console.log(error);
      setIsCalling(false);
    }
  };

  if (isCalling) return <Loader />;

  return (
    <div className="App">
      <Header />
      <main className=".bg-light">
        <section className="container">
          <div className="section-title  d-flex justify-content-center col-12 mt-4 ">
            <h2>Explora la biblioteca de imágenes de la NASA</h2>
          </div>
          <Search onCallToApi={callToApi} />
          <CardList listItems={listItems} />
        </section>
      </main>
    </div>
  );
}

export default App;
