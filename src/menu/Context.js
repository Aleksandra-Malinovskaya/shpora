import React from 'react';
import { useContext } from 'react';
import MyContext from './MyContext';

const Context= () =>{
    const cont = useContext(MyContext);
    return(
        <div className='content'>
            <h3 className='title'>{cont}</h3>
            <p className = 'text'>Context предоставляет способ передачи данных через дерево компонентов без явной передачи пропсов от родительских компонентов к дочерним.</p>
            <p className = 'text'>Пропс-дриллинг (props drilling) - это паттерн, который возникает, когда компоненту нужно передать данные через несколько уровней других компонентов.</p>
            <p className = 'text'>Пример пропс-дриллинга:</p>
            <div className = 'code'>
            <pre>
                <code>
                        {`  const GrandParentComponent = ({ value }) => {
    return (
        <ParentComponent value={value} />
    );
    }

    const ParentComponent = ({ value }) => {
    return (
        <ChildComponent value={value} />
    );
    }

    const ChildComponent = ({ value }) => {
    return (
        <div>{value}</div>
    );
    }`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Чтобы избежать проблемы пропс-дриллинга, в React можно использовать более продвинутые паттерны, такие как контекст (context), который позволяет передавать данные глубже в иерархию компонентов без явного прокидывания свойств через каждый уровень.</p>
            <p className='text'>Для работы с Context в React необходимо выполнить следующие шаги:</p>
            <p className = 'text'>Шаг 1: Создание контекста</p>
            <div className = 'code'>
            <pre>
                <code>
                        {`  // MyContext.js
    import React from 'react';

    const MyContext = React.createContext();

    export default MyContext;`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Шаг 2: Предоставление значения контекста</p>
            <p className = 'text'>Затем  нужно предоставить значение контекста внутри компонента-провайдера. Компонент-провайдер обертывает дерево компонентов, которым нужен доступ к контексту.   </p>
            <div className = 'code'>
            <pre>
                    <code>{`    // App.js
    import React from 'react';
    import MyContext from './MyContext';
    import ComponentA from './ComponentA';

    const App = () => {
    const value = 'Hello, Context!';

    return (
        <MyContext.Provider value={value}>
        <ComponentA />
        </MyContext.Provider>
    );
    }

    export default App;`}
                </code>
            </pre>
            </div>
            <p className = 'text'>В этом примере используется MyContext.Provider для предоставления значения контекста. Значение value будет доступно всем дочерним компонентам, которые подписаны на этот контекст.</p>
            <p className = 'text'>Шаг 3: Использование хука useContext</p>
            <div className = 'code'>
            <pre>
                    <code>{`    // ComponentA.js
    import React, { useContext } from 'react';
    import MyContext from './MyContext';
    import ComponentB from './ComponentB';

    function ComponentA() {
    const value = useContext(MyContext);

    return (
        <div>
        <h2>Component A</h2>
        <p>Received value from Context: {value}</p>
        <ComponentB />
        </div>
    );
    }

    export default ComponentA;`}
                </code>
            </pre>
            </div>
            <p className = 'text'>В этом примере  импортируем useContext из react и вызываем его, передавая контекст MyContext. Хук useContext возвращает текущее значение контекста, которое мы присваиваем переменной value.</p>
            <p className = 'text'>Шаг 4: Подписка на контекст (еще один вариант) </p>
            <p className = 'text'>Есть еще один вариант подписаться на контекст в компонентах, где нужны переданные значения. Для этого используется MyContext.Consumer.</p>
            <div className = 'code'>
            <pre>
                        <code>{`    // ComponentA.js
    import React from 'react';
    import MyContext from './MyContext';
    import ComponentB from './ComponentB';

    function ComponentA() {
    return (
        <div>
        <h2>Component A</h2>
        <MyContext.Consumer>
            {(value) => (
            <p>Received value from Context: {value}</p>
            )}
        </MyContext.Consumer>
        <ComponentB />
        </div>
    );
    }

    export default ComponentA;`}
                </code>
            </pre>
            </div>
            <p className = 'text'>В этом примере используется MyContext.Consumer для получения значения контекста и отображения его внутри компонента. Значение контекста будет доступно внутри функции-рендерера в виде аргумента.</p>
            <p className = 'text'>Злоупотребление контекстом может привести к ряду проблем:</p>
            <ul>
                <li>Проблемы с производительностью</li>
                <li>Сложность отладки и тестирования</li>
                <li>Нарушение инкапсуляции</li>
                <li>Затруднения с рефакторингом</li>
            </ul>
            <p className = 'text'>Рекомендуется использовать контекст там, где он действительно необходим, например, для глобального состояния приложения или темизации (dark||light мод).</p>
        </div>
    );
}

export default Context;