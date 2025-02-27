import React from 'react';

const ReactRouter = () =>{
    return(
        <div className='content'>
            <h3 className='title'>React Router</h3>
            <p className = 'text'>Основная цель роутинга в веб-приложениях заключается в том, чтобы позволить пользователям перемещаться по различным частям приложения БЕЗ ПЕРЕЗАГРУЗКИ страницы. Вместо того, чтобы каждый раз отправлять запрос на сервер и загружать новую страницу, роутинг позволяет динамически обновлять только необходимые компоненты или данные в соответствии с выбранным маршрутом.</p>
            <p className = 'text'>Основные компоненты, которые присутствуют в react-router-dom v6:</p>
            <p className = 'text'>1. BrowserRouter: Это компонент, который оборачивает ваше приложение и предоставляет контекст для маршрутизации. Он используется для настройки основного маршрутизатора в приложении.</p>
            <p className = 'text'>2. Routes: Это компонент, который содержит определения маршрутов и соответствующих им компонентов. Вы определяете маршруты внутри компонента Routes, используя элемент Route.</p>
            <p className = 'text'>3. Route: Компонент Route используется для определения отдельных маршрутов и связанных с ними компонентов. Вы можете определить маршруты с помощью элемента Route, указывая путь URL и связанный с ним компонент, который будет отображаться при совпадении маршрута.</p>
            <p className = 'text'>4. Link и NavLink: Компоненты Link и NavLink используются для создания ссылок для навигации между маршрутами. Они работают аналогично версии 5, позволяя пользователю переходить к соответствующим маршрутам без перезагрузки страницы. NavLink также предоставляет возможности для стилизации активных ссылок и текущего маршрута.</p>
            <p className = 'text'>5. Outlet: Компонент Outlet является контейнером, в котором будут отображаться компоненты, связанные с соответствующими маршрутами. Он заменяет Switch из версии 5 и автоматически выбирает и рендерит компонент, соответствующий текущему маршруту.</p>
            <p className = 'text'>6. useNavigate: Хук useNavigate используется для программной навигации между маршрутами. Он позволяет вам переходить к другим маршрутам из компонентов или обработчиков событий.</p>
            <p className = 'text'>7. useParams: Хук useParams используется для получения параметров маршрута, переданных через URL. Он позволяет вам извлекать и использовать динамические данные из пути маршрута.</p>
            <p className = 'text'>8. useLocation: Хук useLocation используется для получения информации о текущем URL. Он предоставляет доступ к объекту location, который содержит информацию о текущем пути, параметрах и других деталях URL.</p>
            <p className = 'text'>Прежде чем начать использовать React Router Dom v6 в проекте, необходимо установить его с помощью менеджера пакетов npm или yarn.</p>
           <div className = 'code'>
            <pre>
                <code>
                    {`  npm install react-router-dom@next`}
                </code>
            </pre>
            </div>
            <p className = 'text'>После установки React Router Dom v6 можно начать использовать его в проекте. Для этого необходимо импортировать необходимые компоненты и обернуть приложение в BrowserRouter. Вот как это делается:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`    import React from 'react';
    import ReactDOM from 'react-dom';
    import { BrowserRouter } from 'react-router-dom';
    import App from './App';

    ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
    );`}
                </code>
            </pre>
            </div>
            <p className = 'text'>В некоторых случаях может потребоваться ограничить доступ к определенным маршрутам и дать доступ к ним только для аутентифицированных пользователей. Для этого можно создать компонент PrivateRoute, который будет проверять статус аутентификации пользователя и редиректить его в случае необходимости.</p>
        </div>
    );
}

export default ReactRouter;