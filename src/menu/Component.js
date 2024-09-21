import React from 'react';
import "../CSS/Component.css"

const Component = () =>{
    return(
        <div className='content'>
            <h3 className='title'>Компоненты</h3>
            <p className = 'text'>Компоненты - это небольшие, переиспользуемые элементы пользовательского интерфейса, которые объединены вместе, чтобы создать более крупные приложения.</p>
            <p className = 'text'>Компоненты позволяют разбить интерфейс на независимые части, про которые легко думать в отдельности. </p>
            <h5 className='title_2'>Классовые компоненты:</h5>
            <p className = 'text'>Классовый компонент наследуется от базового класса React.Component и имеет доступ к дополнительным функциям, таким как состояние и методы жизненного цикла.</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  class MyComponent extends React.Component {
    render() {
        return <div>Hello, Redev!</div>;
        }
    }
    export default MyComponent;`}
                </code>
            </pre>
            </div>
            <h5 className='title_2'>Функциональные компоненты:</h5>
            <p className = 'text'>Во многом компоненты ведут себя как обычные функции JavaScript. Они принимают произвольные входные данные «пропсы» и возвращают React-элементы, описывающие, что мы хотим увидеть на экране. </p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  const MyComponent = () => {
        return <div>Hello, Redev!</div>;
    }
    export default MyComponent;`}
                </code>
            </pre>
            </div>
            <h5 className='title_2'>Stateless компоненты:</h5>
            <p className = 'text'>Они просто принимают props и возвращают JSX, который описывает, как должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и не могут изменять свое поведение в зависимости от событий или действий пользователя.</p>
            <div className = 'code'>
            <pre>
                <code>{`    const Greeting = ({name}) => {
        return <h1>Hello, {name}!</h1>;
    }`}
                </code>
            </pre>
            </div>
            <h5 className='title_2'>Stateful компоненты:</h5>
            <p className = 'text'>Stateful компоненты могут управлять состоянием и изменять свое поведение в зависимости от событий. Они используют внутреннее состояние, чтобы отслеживать изменения и обновлять UI в ответ на действия пользователя или другие события.</p>
            <div className = 'code'>
            <pre>
                <code>{`    import React, { useState } from 'react';

    const Counter = () => {
        const [count, setCount] = useState(0);

        const increment = () => {
            setCount(count => count + 1);
        };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
        );
    };`}
                </code>
            </pre>
            </div>
        </div>
    );
}

export default Component;