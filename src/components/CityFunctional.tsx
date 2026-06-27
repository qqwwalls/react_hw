import maidanImg from '../assets/kyiv_maidan.png';
import sophiaImg from '../assets/kyiv_sophia.png';

const CityFunctional = () => {
  return (
    <div className="city-info">
      <h2>Функціональний компонент: Місто</h2>
      <p><strong>Назва міста:</strong> Київ</p>
      <p><strong>Країна:</strong> Україна</p>
      <p><strong>Рік заснування:</strong> 482</p>
      <div className="photos">
        <img 
          src={maidanImg} 
          alt="Київ - Майдан" 
          width="300" 
          height="300" 
          style={{ objectFit: 'cover' }}
        />
        <img 
          src={sophiaImg} 
          alt="Київ - Архітектура" 
          width="300" 
          height="300" 
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default CityFunctional;
