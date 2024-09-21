import React from 'react';
import "../CSS/Component.css"

const Key = () =>{
    return(
        <div className='content'>
            <h3 className='title'>Key, Fragment</h3>
            <p className = 'text'>Ключи помогают React определять, какие элементы были изменены, добавлены или удалены. Их необходимо указывать, чтобы React мог сопоставлять элементы массива с течением времени.</p>
            <p className = 'text'>Лучший способ выбрать ключ — это использовать строку, которая будет явно отличать элемент списка от его соседей. Чаще всего ты будешь использовать ID из твоих данных как ключи. </p>
            <div className = 'code'>
            <pre>
                <code>
                        {`  const todoItems = todos.map((todo) =>
        <li key={todo.id}>
            {todo.text}
        </li>
    );`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Ключи нужно определять непосредственно внутри массивов. Если не указать ключи, в консоли увидим ошибку. </p>
            <p className = 'text'>Добавляя key, мы помогаем механизму reconciliation тем, что с key он сверяет не попарно, а ищет компоненты с тем же key (тег / имя компонента при этом учитывается) — это уменьшает количество перерисовок интерфейса. Обновлены/добавлены будут только те элементы, которые были изменены/не встречались в предыдущем дереве. </p>
            <h5 className='title_2'>Fragment:</h5>
            <p className = 'text'>С помощью фрагментов можно сгруппировать список дочерних элементов без добавления дополнительных узлов в DOM.</p>
            <div className = 'code'>
            <pre>
                    <code>{`    import React, { Fragment } from 'react';

    //Заменяем теги div на Fragment:
    const ChildComponent = () => <Fragment>
        <h1>Hello Child Component</h1>
        <h1>Hello Child Component</h1>
    </Fragment>`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Существует сокращенная запись (импортировать не нужно) - недостаток сокращенной записи: нельзя использовать атрибуты, например className или key.</p>
        </div>
    );
}

export default Key;