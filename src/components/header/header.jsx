import { useState } from "react";
import "./header.css";

function HeaderBlock() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        {/* Логотип */}
        <div className="header__logo">
          <span className="logo__black">Мастер</span>
          <span className="logo__blue">Книг</span>
        </div>

        {/* Навигация */}
        <nav className={`header__nav ${menuOpen ? "active" : ""}`}>
          <a href="#top-books" className="nav__link" onClick={() => setMenuOpen(false)}>Читательский топ</a>
          <a href="#gift-cards" className="nav__link" onClick={() => setMenuOpen(false)}>Подарочные сертификаты</a>
          <a href="#new-releases" className="nav__link" onClick={() => setMenuOpen(false)}>Новинки от издательства</a>
        </nav>

        {/* Телефон */}
        <a href="tel:88001234546" className="header__phone">
          8 (800) 555 35 35
        </a>

        {/* Бургер */}
        <button
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default HeaderBlock;