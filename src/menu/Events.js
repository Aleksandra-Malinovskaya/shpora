import React from 'react';
import { useState } from 'react';

const Events = () =>{
    const [showText, setShowText] = useState(false);

  const handleMouseOver = () => {
    setShowText((showText) => !showText);
  };

    return(
        <div className='content'>
            <h3 className='title'>Events</h3>
            <p className='text'>Cобытия (events) позволяют обрабатывать действия пользователя, такие как клики, наведение, отправка формы и другие. </p>
            <h5 className='title_2'>1. onClick (Клик):</h5>
            <p className = 'text'>Событие onClick возникает при клике на элементе.</p>
            <div className = 'code'>
                <pre>
                    <code>
                            {`    const handleClick = () => {
    console.log('Кликнули!');
    }

    const MyComponent = () => {
    return (
        <button onClick={handleClick}>Нажми меня</button>
    );
    }`}
                    </code>
                </pre>
            </div>
            <h5 className='title_2'>2. onChange (Изменение):</h5>
            <p className = 'text'>Событие onChange возникает при изменении значения элемента формы, такого как текстовое поле (input), флажок (checkbox) или выбор элемента списка (radio).</p>
            <div className = 'code'>
                <pre>
                    <code>
                            {`    const handleChange = (event) => {
    console.log('Изменилось значение:', event.target.value);
    }

    const MyComponent = () => {
    return (
        <input type="text" onChange={handleChange} />
        или
        <input type="text" onChange={event => handleChange(event)} />
    );
    }`}
                    </code>
                </pre>
            </div>
            <p className = 'text'>Вывод данных в консоль.</p>
            <input type="text" onChange={event => console.log(event.target.value)}></input>
            <h5 className='title_2'>3. onSubmit (Отправка формы):</h5>
            <p className = 'text'>Событие onSubmit возникает при отправке формы.</p>
            <div className = 'code'>
                <pre>
                    <code>
                            {`    const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Форма отправлена!');
    }

    const MyComponent = () => {
    return (
        <form onSubmit={handleSubmit}>
        {/* поля формы */}
        <button type="submit">Отправить</button>
        </form>
    );`}
                    </code>
                </pre>
            </div>
            <h5 className='title_2'>4. onMouseOver (Наведение курсора):</h5>
            <p className = 'text'>Событие onMouseOver возникает, когда курсор наводится на элемент.</p>
            <div className = 'code'>
                <pre>
                    <code>
                            {`    const handleMouseOver = () => {
    console.log('Курсор наведен!');
    }

    const MyComponent = () => {
    return (
        <div onMouseOver={handleMouseOver}>Наведите курсор на меня</div>
    );
    }`}
                    </code>
                </pre>
            </div>
            <p onMouseOver={handleMouseOver}>Наведи курсор</p>
            {showText && <p className='text'>Этот текст может быть скрыт или показан</p>}
            <h5 className='title_2'>5. onKeyDown (Нажатие клавиши):</h5>
            <p className = 'text'>Событие onKeyDown возникает при нажатии клавиши на клавиатуре.</p>
            <div className = 'code'>
                <pre>
                    <code>
                            {`    const handleKeyDown = (event) => {
  console.log('Нажата клавиша:', event.key);
}

const MyComponent = () => {
  return (
    <input type="text" onKeyDown={handleKeyDown} />
  );
}`}
                    </code>
                </pre>
            </div>
            <p className='text'>Существует множество других событий, таких как onFocus, onBlur, onScroll и т. д., которые могут быть использованы в зависимости от конкретных потребностей приложения.</p>
        </div>
    )
}

export default Events;