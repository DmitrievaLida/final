import { useState } from "react";
import "./WriteToPublisher.css";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const WriteToPublisher = () => {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);

  const isEmailValid = emailRegex.test(email);
  const showEmailError = emailTouched && email && !isEmailValid;

  const isDisabled = !topic || !message || !email || !isEmailValid;

  return (
    <div className="write">
      <h2 className="write__title">Написать в издательство</h2>

      <div className="write__field">
        <label className="write__label">Я хочу</label>
        <select
          className="write__select"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="">Выберите вариант</option>
          <option value="cooperation">Предложить сотрудничество</option>
          <option value="typo">Рассказать об опечатке</option>
          <option value="site-problem">Рассказать о проблеме на сайте</option>
          <option value="media">Написать про издательство в СМИ</option>
        </select>
      </div>

      <div className="write__field">
        <label className="write__label">Сообщение</label>
        <textarea
          className="write__textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>

      <div className="write__field">
        <label className="write__label">Электронная почта</label>
        <input
          type="email"
          className={'write__input ${
            showEmailError ? "write__input--error" : ""
          }'}  
          placeholder="example@mail.ru"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button className="write__button" disabled={isDisabled}>
        Отправить сообщение
      </button>
    </div>
  );
};

export default WriteToPublisher;
