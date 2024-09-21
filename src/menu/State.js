import React, {useState} from 'react'; 
import "../CSS/State.css"

const State = () =>{
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount((count) => count + 1);
    }

    const decrement = () =>{
        setCount((count) => count - 1);
    }
    return(
        <div className='content'>
            <h3 className='title'>State</h3>
            <p className = 'text'>Cостояние (state) представляет собой данные, которые используются внутри компонента для отслеживания и обновления информации. Состояние позволяет компонентам быть динамичными и реагировать на изменения данных или взаимодействие пользователя.</p>
            <p className = 'text'>В React есть возможность использовать state в функциональных компонентах, путем использования хука useState.</p>
            <p className = 'text'>Хук `useState` позволяет функциональным компонентам в React добавлять локальное состояние.</p>
            <p className = 'text'>Он возвращает массив с парой значений:</p>
            <p className = 'text'>- текущее значение состояния</p>
            <p className = 'text'>- функцию для его обновления.</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <p>Счетчик: {count}</p>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};`}
                </code>
            </pre>
        </div>
        <p className="text"><button onClick={decrement}>Уменьшить</button>
             Счетчик: {count} 
            <button onClick={increment}>Увеличить</button>
        </p>
            <h5 className='title_2'>State с объектом:</h5>
            <p className = 'text'>Важно помнить, что при обновлении объекта в состоянии нужно создавать новый объект вместо изменения существующего, чтобы соблюсти принцип неизменяемости.</p>
            <div className = 'code'>
            <pre>
                <code>{`    import React, { useState } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // создаем новый объект с обновленным свойством
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div>
      <h1>Профиль пользователя</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Введите ваше имя"
      />
      <input
        type="number"
        name="age"
        value={user.age}
        onChange={handleChange}
        placeholder="Введите ваш возраст"
      />
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
    </div>
  );
};

export default UserProfile;`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Не изменяй существующее состояние напрямую: Вместо этого создавай новый объект с помощью оператора spread. Это позволяет React правильно отслеживать изменения состояния и ререндерить компонент при необходимости.</p>
            <p className = 'text'>Используй функцию для обновления состояния: Когда новое состояние зависит от предыдущего, всегда! используй функцию для обновления, чтобы избежать проблем с конкурентным обновлением состояния.</p>
            <p className = 'text'>Функция-setter (например **`setState`**) - асинхронная операция! Когда мы вызываем **`setState`**, React не обновляет состояние и не рендерит компонент немедленно. Вместо этого он помещает обновление в очередь. После этого React **применяет все обновления** **состояния** **за один раз** перед следующим рендером компонента.</p>
            <h5 className='title_2'>State в классах</h5>
            <div className = 'code'>
            <pre>
                <code>{`    class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
    this.setState({ count: this.state.count + 1 });
    this.setState((state)=> { count: state.count + 1 });
}`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Оба способа делают одно и то же - увеличивают значение count на 1.Но второй способ может быть предпочтительным в некоторых ситуациях, например, когда обновление состояния зависит от предыдущего состояния, чтобы избежать потенциальных проблем с асинхронностью.</p>
        </div>
    );
}

export default State;