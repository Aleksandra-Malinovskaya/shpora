import React, { useRef } from 'react'


const Refs = () =>{
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return(
        <div className='content'>
            <h3 className='title'>Refs</h3>
            <p className = 'text'>Refs (ссылки) предоставляет способ доступа к DOM-узлам или React-элементам, созданным в методе render(). Позволяет ссылаться на значение, которое не требуется для рендеринга.</p>
            <p className = 'text'>Есть несколько хороших примеров использования ссылок:</p>
            <p className = 'text'>1. Управление фокусом, выделение текста.</p>
            <p className = 'text'>2. Выполнение анимаций.</p>
            <p className = 'text'>3. Интеграция со сторонними библиотеками, взаимодействующие с DOM.</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  import React, { useRef } from 'react'

const Test = () => {
    const textInput = useRef(null)
    const valid = () => {
        textInput.current.focus()
    }
    return (
        <div>
        <input type='text' ref={textInput}></input>
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    )
}

export default Test`}
                </code>
            </pre>
            </div>
            <input type='text' ref={textInput}></input>
            <button onClick={() => valid()}>
                Click to focus
            </button>
        </div>
    );
}

export default Refs;