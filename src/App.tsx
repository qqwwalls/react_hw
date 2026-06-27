import CityFunctional from './components/CityFunctional';
import CityClass from './components/CityClass';
import BookFunctional from './components/BookFunctional';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Завдання 1: Місто (Функціональний компонент)</h1>
      <CityFunctional />
      
      <hr />
      
      <h1>Завдання 2: Місто (Класовий компонент)</h1>
      <CityClass />
      
      <hr />
      
      <h1>Завдання 3: Улюблена книга (Функціональний компонент)</h1>
      <BookFunctional />
    </div>
  );
};

export default App;
