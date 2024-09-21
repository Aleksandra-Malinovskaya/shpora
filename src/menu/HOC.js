import React from 'react';

const HOC = () =>{
    return(
        <div className='content'>
            <h3 className='title'>HOС (Higher-Order Components)</h3>
            <p className = 'text'>HOC — это функции высшего порядка, которые принимают компонент и возвращают новый компонент с расширенным функционалом. Они помогают избежать дублирования кода, управлять состоянием, обеспечивают абстракцию поведения и позволяют добавлять функциональность к компонентам без изменения их кода.</p>
            <p className = 'text'>Создание HOC включает в себя определение функции, которая принимает компонент и возвращает новый компонент. </p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  const withLogger = (WrappedComponent) => {
  return (props) => {
    console.log('Component rendered:', WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
};`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Props могут быть переданы из HOC в оборачиваемый компонент следующим образом:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  const withExtraProps = (WrappedComponent) => {
  return (props) => {
    const extraProps = { additionalProp: "I'm extra!" };
    return <WrappedComponent {...props} {...extraProps} />;
  };
};`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Примеры использования HOC</p>
            <p className = 'text'>Аутентификация</p>
            <div className = 'code'>
            <pre>
                <code>{`    const withAuth = (WrappedComponent) => {
  return (props) => {
    const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.
    if (isAuthenticated) {
      return <WrappedComponent {...props} />;
    } else {
      return <p>Please log in to access this content.</p>;
    }
  };
};

const AuthenticatedComponent = withAuth(ProfileComponent);`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Управление состоянием</p>
            <div className = 'code'>
            <pre>
                <code>{`    import React, { useState } from 'react';

    // HOC
    const withCounter = (WrappedComponent) => {
    return (props) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
        setCount(count + 1);
        };

        return (
        <WrappedComponent
            count={count}
            incrementCount={incrementCount}
            {...props}
        />
        );
    };
    };

    // Компонент, который будет обернут HOC
    const Counter = ({ count, incrementCount }) => {
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={incrementCount}>Increment</button>
        </div>
    );
    };

    // Применение HOC к компоненту
    const CounterWithHOC = withCounter(Counter);

    // Компонент, использующий обернутый компонент с HOC
    const App = () => {
    return (
        <div>
        <h1>Counter App</h1>
        <CounterWithHOC />
        </div>
    );
    };`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Higher Order Components предоставляют инструмент для повышения переиспользуемости компонентов и добавления функциональности. </p>
        </div>
    );
}

export default HOC;