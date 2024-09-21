import React, { useState } from 'react';

const ForMemo = ()=>{
    const [value, setValue] = useState("");

    const change = (event) =>{
        setValue(event.target.value)
    }
    return (
        <>
        <Memo value={value}/>
        <input type='text'onChange={change}></input>
        </>
    )
}
const Memo = React.memo((props) =>{
    return(
        <div className='content'>
            <h3 className='title'>React.Memo</h3>
            <p className = 'text'>React.memo — это функция, которая оптимизирует производительность функциональных компонентов. Она предназначена для предотвращения ненужного повторного рендеринга компонента, когда его пропсы и состояние не изменились.</p>
            <p className = 'text'>React.memo использует механизм мемоизации, чтобы запоминать предыдущий результат рендеринга компонента и сравнивать его с текущими пропсами. Если пропсы не изменились, React.memo предотвращает повторный рендеринг компонента, возвращая сохраненный результат. </p>
            
            <p className = 'text'>React.memo также принимает второй необязательный аргумент в виде функции сравнения (compareFunction), которая позволяет контролировать, какие пропсы должны считаться "равными". Если функция сравнения не указана, React.memo будет использовать поверхностное сравнение (shallow comparison) для сравнения пропсов.</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`    import React from 'react';

    const MyComponent = React.memo((props) => {
    // Компонент будет перерисовываться только при изменении пропсов с помощью 
    // compareFunction
    return (
        <div>
        {props.text}
        </div>
    );
    }, (prevProps, nextProps) => {
    // compareFunction - пользовательская функция сравнения пропсов
    // Возвращает true, если пропсы должны считаться равными и компонент не должен перерисовываться
    });`}
                </code>
            </pre>
            </div>
            <h5 className='title_2'>useMemo:</h5>
            <p className = 'text'>React хук useMemo предназначен для мемоизации вычислений в функциональных компонентах. Он позволяет сохранять результат вычислений и повторно использовать его, если входные значения (зависимости) не изменились. </p>
            <div className = 'code'>
            <pre>
                <code>
                    {`    import React, { useMemo } from 'react';

    const MyComponent = ({ data }) => {
    const processedData = useMemo(() => {
        // Вычисления, требующие много времени или ресурсов
        // Например, фильтрация или сортировка массива данных
        return processData(data);
    }, [data]); // Зависимость - значение пропса "data"

    return (
        <div>
        {processedData}
        </div>
    );
    };`}
                </code>
            </pre>
            </div>
            <p className = 'text'>В этом примере результат вычисления processData будет сохраняться и пересчитываться только при изменении значения пропса data. При последующих рендерах, если data не изменилось, будет использован сохраненный результат.</p>
            <div className = 'code'>
            <pre>
                <code>{`      import React, { useMemo } from 'react';

    const ExpensiveComponent = ({ propA, propB }) => {
    // Сложный компонент, требующий много ресурсов
    return (
        // ...
    );
    };

    const MyComponent = ({ data }) => {
    const cachedComponent = useMemo(() => {
        // Компонент будет кэширован при каждом изменении propA или propB
        return <ExpensiveComponent propA={propA} propB={propB} />;
    }, [propA, propB]);

    return (
        <div>
        {cachedComponent}
        </div>
    );
    };`}
                </code>
            </pre>
            </div>
            <p className = 'text'>В этом примере компонент ExpensiveComponent будет пересоздаваться только при изменении пропсов propA или propB.</p>
            <p className = 'text'>{props.value}</p>
        </div>
    );
});

export default ForMemo;