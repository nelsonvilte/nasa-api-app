import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Search from './components/Search'
import CardList from './components/CardList';
function App() {
  return (
    <div className="App">
      <Header/>
      <main className=".bg-light">
        <section className="container">
          <Search/>
          <CardList/>
        </section>

      </main>
    </div>
  );
}

export default App;
