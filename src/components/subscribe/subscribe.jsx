import { useState } from "react";
import "./Subscribe.css";

const Subscribe = () => {
  const [agreed, setAgreed] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="subscribe">
      <h2 className="subscribe__title">
        Подписывайтесь на рассылку издательства МИФ
      </h2>

      <div className="subscribe__form">
        <input
          type="email"
          placeholder="Электронная почта"
          className="subscribe__input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="subscribe__button"
          disabled={!agreed}
        >
          Подписаться
        </button>
      </div>

      <label className="subscribe__agreement">
        <input
          type="checkbox"
          checked={agreed}
          onChange={() => setAgreed(!agreed)}
        />
        <span>
          Соглашаюсь с офертой и на обработку персональных данных
        </span>
      </label>
    </div>
  );
};

export default Subscribe;