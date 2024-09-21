import React from 'react';
import "../CSS/Component.css"

const Props = () =>{
    return(
        <div className='content'>
            <h3 className='title'>Props</h3>
            <p className='text'>Пропсы (сокращение от properties) - это данные, которые передаются в компоненты React для настройки их поведения и внешнего вида. Они позволяют передавать информацию из родительского компонента в дочерний компонент.</p>
            <p className='text'>Пропсы передаются в компоненты в виде атрибутов при их использовании в JSX.</p>
            <div className = 'code'>
                <pre>
                    <code>
                            {`    // Родительский компонент
    const ParentComponent = () => {
    const message = "Привет, Redev!";
    return <ChildComponent message={message} />;
    }

    // Дочерний компонент
    const ChildComponent = (props) => {
    return <div>{props.message}</div>;
    }`}
                    </code>
                </pre>
            </div>
            <p className='text'>В этом примере родительский компонент передает сообщение "Привет, Redev!" в дочерний компонент через props. Дочерний компонент выводит это сообщение на экран.</p>
            <p className='text'>В классовых компонентах пропсы доступны через this.props. Например, this.props.message. </p>
            <div className = 'code'>
                <pre>
                    <code>
                        {`    //ParentComponent.js
    import ChildComponent from './ChildComponent';

    const ParentComponent = () => {
    return (
        <div>
            <ChildComponent 
                        name={'Sasha'} 
                    />
        </div>
    );
    }

    //ChildComponent.js
    import React from 'react'

    class ChildComponent extends React.Component{
    render(){
        return (
        <div>
            {this.props.name}
        </div>
        );
    }
    }`}
                    </code>
                </pre>
            </div>
            <p className='text'>Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую.</p>
            <p className='text'>Однако, можно использовать состояние компонента (state) для изменения пропсов. </p>
            <p className='text'>Пропсы в React играют важную роль в передаче данных и настройке компонентов. Они позволяют создавать  переиспользуемые компоненты.</p>
        </div>
    )
}

export default Props;