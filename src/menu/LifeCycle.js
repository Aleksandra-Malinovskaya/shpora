import React from 'react';
import { useEffect } from 'react';

const LifeCycle = () =>{
    const apiRequest = async() => {
        try{
            const response = await fetch('https://todo-redev.herokuapp.com/api/users', {
                method: 'GET',
                headers:
                {
                'accept': 'application/json',
                }
            });
            const value = await response.json();
            console.log(value);
        }catch (error) {
            console.log(error);
          }
    }

    useEffect(() =>{
        apiRequest();
        return () => {console.log("WillUnMount")};
    }, []);

    return(
        <div className='content'>
            <h3 className='title'>Жизненный цикл (LifeCycle)</h3>
            <p className = 'text'>В React у компонентов есть свои "шаги", которые они проходят, когда создаются, обновляются или удаляются. Эти шаги называются "жизненным циклом" компонента.</p>
            <p className = 'text'>Методы жизненного цикла в React можно разделить на следующие группы:</p>
            <p className = 'text'>1. Методы монтирования (Mounting Methods):</p>
            <ul>
                <li>constructor()</li>
                <li>render()</li>
                <li>componentDidMount()</li>
            </ul>
            <p className = 'text'>2. Методы обновления (Updating Methods):</p>
            <ul>
                <li>shouldComponentUpdate()</li>
                <li>render()</li>
                <li>componentDidUpdate()</li>
            </ul>
            <p className = 'text'>3. Методы размонтирования (Unmounting Methods):</p>
            <ul>
                <li>componentWillUnmount()</li>
            </ul>
            <p className = 'text'>4. Методы обработки ошибок (Error Handling Methods):</p>
            <ul>
                <li>componentDidCatch()</li>
            </ul>
            <h5 className='title_2'>Жизненный цикл функциональных компонентов:</h5>
            <p className = 'text'>useEffect - это хук в React, предназначенный для работы с методами жизненного цикла в функциональных компонентах. 
По сути вот один такой хук заменяет основные методы жизненного цикла. </p>
            <ul>
                <li>Первый параметр: Функция, которая должна выполниться при монтировании компонента и при каждом обновлении.</li>
                <li>Второй параметр: Массив зависимостей определяет, на что конкретно должен реагировать useEffect. Если массив пуст, useEffect выполняется только при монтировании и размонтировании. Если в массиве указаны определенные значения, то useEffect будет выполняться только тогда, когда эти значения изменяются.</li>
            </ul>
            <div className = 'code'>
            <pre>
                <code>
                    {`    // Отработает как componentDidMount
    useEffect(() => { console.log("componentDidMount") }, []) 

    // Отработает как componentDidUpdate (но есть прикол. Покажу ниже)
    useEffect(() => { console.log("componentDidUpdate") }, [dependency]) 

    // Отработает как componentDidMount и componentDidUpdate
    useEffect(() => { console.log("componentDidMount и componentDidUpdate") }) 

    // Отработает как componentWillUnmount
    useEffect(() => {
    return () => console.log('componentWillUnmount')
    }, [])`}
                </code>
            </pre>
            </div>
            <h5 className='title_2'>Жизненный цикл классовых компонентов:</h5>
            <p className = 'text'>1. Mounting (Монтирование):</p>
            <ul>
                <li>constructor(): Вызывается при создании экземпляра компонента. Используется для инициализации состояния и привязки методов.</li>
                <li>render(): Отрисовывает компонент и возвращает React элементы.</li>
                <li>componentDidMount(): Вызывается после рендеринга компонента и его добавления в DOM. Используется для выполнения запросов к серверу, подписки на события и других побочных эффектов.</li>
            </ul>
            <div className = 'code'>
            <pre>
                <code>
                    {`  class MyComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = { count: 0 }
        this.increment = this.increment.bind(this)
    }

    increment () {
        this.setState({ count: this.state.count + 1 })
    }

    componentDidMount () {
        // Здесь можно выполнять запросы к серверу.
        console.log('Компонент был смонтирован!')
    }

    render () {
        return (
        <div>
            <p>Количество: {this.state.count}</p>
            <button onClick={this.increment}>+++</button>
        </div>
        )
    }
    }`}
                </code>
            </pre>
            </div>
            <p className = 'text'>2. Updating (Обновление):</p>
            <ul>
                <li>shouldComponentUpdate(nextProps, nextState): Вызывается перед обновлением компонента. Используется для оптимизации перерисовки компонента путем возврата false, если обновление не требуется.</li>
                <li>render(): Отрисовывает компонент и возвращает React элементы.</li>
                <li>componentDidUpdate(prevProps, prevState): Вызывается после обновления компонента и его рендеринга. Используется для выполнения дополнительных действий после обновления компонента, например, для выполнения запросов к серверу на основе новых пропсов.</li>
            </ul>
            <div className = 'code'>
            <pre>
                <code>
                    {`  class MyComponent extends React.Component {
    shouldComponentUpdate (nextProps, nextState) {
        // В этом примере компонент будет обновляться только при изменении свойства name.
        return nextProps.name !== this.props.name
    }

    componentDidUpdate (prevProps, prevState) {
        // Здесь можно выполнять действия после обновления компонента.
        console.log('Компонент был обновлен!')
    }

    render () {
        return <div>Hello, {this.props.name}!</div>
    }
    }`}
                </code>
            </pre>
            </div>
            <p className = 'text'>3. Unmounting (Размонтирование):</p>
            <ul>
                <li>componentWillUnmount(): Вызывается перед удалением компонента из DOM. Используется для выполнения необходимых очисток, отписки от событий и освобождения ресурсов.</li>
            </ul>
            <div className = 'code'>
            <pre>
                <code>
                        {`  import React from 'react'

    class WillUnmountExample extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
        time: 0
        }
    }

    componentDidMount () {
        this.timerID = setInterval(() => {
        this.setState(prevState => ({
            time: prevState.time + 1
        }))
        }, 1000)
    }

    componentWillUnmount () {
        clearInterval(this.timerID)
        alert('Компонент удален из DOM')
    }

    render () {
        return (
        <div>
            <p>Время: {this.state.time} секунд</p>
        </div>
        )
    }
    }

    export default WillUnmountExample`}
                </code>
            </pre>
            </div>
            <p className = 'text'>4. Error Handling (Обработка ошибок):</p>
            <ul>
                <li>componentDidCatch(error, info): Вызывается при возникновении ошибки в дочерних компонентах. Используется для отлавливания и обработки ошибок.</li>
            </ul>
        </div>
    );
}

export default LifeCycle;