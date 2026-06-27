type MovieProps = {
  title: string;
  director: string;
  year: number;
  studio: string;
  poster: string;
};

const Movie = (props: MovieProps) => {
  const { title, director, year, studio, poster } = props;

  return (
    <div className="movie-card" style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '12px', maxWidth: '350px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
      <img src={poster} alt={title} style={{ width: '100%', borderRadius: '8px', objectFit: 'cover' }} />
      <h2 style={{ marginTop: '16px', color: '#333' }}>{title}</h2>
      <div style={{ color: '#555', lineHeight: '1.6' }}>
        <p><strong>Режисер:</strong> {director}</p>
        <p><strong>Рік випуску:</strong> {year}</p>
        <p><strong>Кіностудія:</strong> {studio}</p>
      </div>
    </div>
  );
};

export default Movie;
