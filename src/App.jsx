import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' 

import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'
import Book from './components/book/book.jsx'
import GiftCart from './components/giftcard/giftcard.jsx'
import Subscribe from './components/subscribe/subscribe.jsx'
import Publish from './components/writeToPublisher/writetopublisher.jsx'

import UniversalBlock from './components/universalBlock/universalBlock.jsx'

import Book1 from './assets/images/book1.png'
import Book2 from './assets/images/book2.png'
import Book3 from './assets/images/book3.png'

import Book4 from './assets/images/book4.png'
import Book5 from './assets/images/book5.png'
import Book6 from './assets/images/book6.png'

import Card1 from './assets/images/card1.png'
import Card2 from './assets/images/card2.png'
import Card3 from './assets/images/card3.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Header />

  <div id="top-books">
    <UniversalBlock
      title="Топ 3 книги по мнению читателей"
      content={
        <div className="books-row">
          <Book image={Book1} author="Анви Рид" title="Общество забытых мучеников" description="Долгожданный финал дилогии в жанре темной академии" />
          <Book image={Book2} author="Олег Яковлев, Владимир Торин" title="Мистер Вечный Канун. Город Полуночи" description="Часть вторая" />
          <Book image={Book3} author="ParaCosm" title="Счастливого дня пробуждения" description="Готический роман: детальное описание экспериментов, рассуждения о жизни и смерти" />
        </div>
      }
    />
  </div>

  <div id="gift-cards">
    <UniversalBlock
      title="Подарочные сертификаты"
      content={
        <div className="books-row">
          <GiftCart image={Card1} price="1000" />
          <GiftCart image={Card2} price="1500" />
          <GiftCart image={Card3} price="3000" />
        </div>
      }
    />
  </div>

  <div id="new-releases">
    <UniversalBlock
      title="Новинки от издательства"
      content={
        <div className="books-row">
          <Book image={Book4} author="Анви Рид" title="Смерть под ореховым деревом" description="Мрачный ретеллинг «Щелкунчика» и сказок братьев Гримм" />
          <Book image={Book5} author="Арина Цимеринг" title="Как поймать монстра. Круг третий. Книга 1" description="Третий том мистических приключений в долбаной Ирландии" />
          <Book image={Book6} author="Владимир Торин" title="Мертвец с улицы Синих Труб" description="Новинка от соавтора бестселлера «Мистер Вечный Канун», автора «Птиц» и серии «Таинственные истории из Габена»" />
        </div>
      }
    />
  </div>

  <Subscribe />
  <Publish />
  <Footer />
</>
  )
}

export default App
