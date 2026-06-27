import Movie from './components/Movie';
import PersonalPage from './components/PersonalPage';
import './App.css';

const App = () => {
  return (
    <div className="App" style={{ padding: '30px', display: 'flex', gap: '40px', flexWrap: 'wrap', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      
      <section>
        <h1 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '20px' }}>Завдання 1 (Функціональний компонент)</h1>
        <Movie 
          title="Термінатор 2: Судний день"
          director="Джеймс Кемерон"
          year={1991}
          studio="Carolco Pictures"
          poster="https://image.tmdb.org/t/p/w500/5M0j0B18abu8hFcg0NVn45h3X9S.jpg"
        />
      </section>

      <section>
        <h1 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '20px' }}>Завдання 2 (Класовий компонент)</h1>
        <PersonalPage 
          name="Арнольд Шварценеггер"
          phone="+1 (310) 555-0199"
          email="arnold@governator.com"
          city="Лос-Анджелес, Каліфорнія, США"
          experience="Голлівудський актор, 38-й Губернатор Каліфорнії, професійний бодібілдер (7-разовий переможець 'Містер Олімпія')."
          skills={['Бодібілдинг', 'Акторська майстерність', 'Політика', 'I\'ll be back', 'Лідерство']}
          photo="https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"
        />
      </section>

    </div>
  );
};

export default App;
