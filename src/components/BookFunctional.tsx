const BookFunctional = () => {
  return (
    <div className="book-info">
      <h2>Функціональний компонент: Улюблена книга</h2>
      <p><strong>Назва книги:</strong> 1984</p>
      <p><strong>Автор:</strong> Джордж Орвелл</p>
      <p><strong>Жанр:</strong> Антиутопія, наукова фантастика</p>
      <p><strong>Кількість сторінок:</strong> 328</p>
      <div className="reviews">
        <h3>Рецензії:</h3>
        <ul>
          <li>"Шедевр, який змушує замислитися над багатьма речами в нашому світі."</li>
          <li>"Дуже похмура, але надзвичайно важлива книга для прочитання."</li>
          <li>"Класика, яка залишається актуальною й донині."</li>
        </ul>
      </div>
    </div>
  );
};

export default BookFunctional;
