import React from 'react';
import "../CSS/Component.css"

const VirtualDOM = () =>{
    return(
        <div className='content'>
            <h3 className='title'>VirtualDOM</h3>
            <p className='text'>DOM - это сокращение от "Document Object Model" (объектная модель документа). Когда ты открываешь веб-страницу в браузере, браузер создает структуру документа, которую можно представить в виде дерева элементов. Эти элементы - это HTML-теги, например, div, p, h1 и другие. DOM позволяет нам манипулировать этой структурой, изменять содержимое, стили, добавлять и удалять элементы.</p>
            <p className='text'>Виртуальный DOM - это промежуточное представление DOM в памяти компьютера. React создает виртуальное дерево элементов, которое точно соответствует текущему состоянию компонентов. Затем React сравнивает это виртуальное дерево с реальным DOM и определяет, какие изменения необходимо внести.</p>
            <h3 className='title'>Reconciliation</h3>
            <p className='text'>Reconciliation - это процесс, при котором React сравнивает предыдущее состояние компонента с новым состоянием и определяет, какие изменения нужно внести в пользовательский интерфейс.</p>
            <div className = 'code'>
                <pre>
                    <code>
                        {`import React, { useState } from 'react';

    function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count => count + 1);
    };

    const decrement = () => {
        setCount(count => count - 1);
    };

    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
    }

    export default Counter;`}
                    </code>
                </pre>
            </div>
            <p className='text'>После изменения состояния count, React запускает процесс reconciliation. Он сравнивает предыдущий виртуальный DOM с новым виртуальным DOM, чтобы определить, какие изменения необходимо внести в реальный DOM.</p>
            <p className='text'>Таким образом, при взаимодействии с компонентом Counter, React обновляет только те части интерфейса, которые реально нуждаются в изменениях. </p>
        </div>
    )
}

export default VirtualDOM;