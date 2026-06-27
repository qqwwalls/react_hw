import Movie from './components/Movie';
import PersonalPage from './components/PersonalPage';
import moviePoster from './assets/movie_poster.png';
import portraitImg from './assets/portrait.png';
import './App.css';

const App = () => {
  return (
    <div className="App" style={{ padding: '30px', display: 'flex', gap: '40px', flexWrap: 'wrap', backgroundColor: '#f5f7fa', minHeight: '100vh' }}>
      
      <section>
        <h1 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '20px' }}>Завдання 1 (Функціональний компонент)</h1>
        <Movie 
          title="Дюна: Частина друга"
          director="Дені Вільнев"
          year={2024}
          studio="Warner Bros. Pictures"
          poster={moviePoster}
        />
      </section>

      <section>
        <h1 style={{ fontSize: '24px', color: '#2c3e50', marginBottom: '20px' }}>Завдання 2 (Класовий компонент)</h1>
        <PersonalPage 
          name="Олена"
          phone="+380 99 123 4567"
          email="olena.dev@example.com"
          city="Київ, Україна"
          experience="Студентка курсу «Використання фреймворків Angular, React». Розробляю сучасні веб-додатки."
          skills={['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Git']}
          photo={portraitImg}
        />
      </section>

    </div>
  );
};

export default App;
