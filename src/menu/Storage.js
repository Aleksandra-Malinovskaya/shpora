import React from 'react';

const Storage = () =>{
    return(
        <div className='content'>
            <h3 className='title'>STORAGEs</h3>
            <h5 className='title_2'>Local Storage</h5>
            <p className = 'text'>Local Storage - это механизм, который позволяет веб-приложениям сохранять данные локально в браузере. Это означает, что данные будут сохранены после закрытия браузера и перезагрузки страницы.</p>
            <p className = 'text'>LocalStorage может быть использован для хранения различных типов данных, таких как строки, числа, булевы значения и объекты. Он может быть полезен для хранения пользовательских настроек. </p>
            <p className = 'text'>Для записи данных в LocalStorage можно использовать localStorage объекта window в JavaScript.</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  localStorage.setItem('myData', 'Hello, Redev!');`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Чтобы получить данные из LocalStorage, можно использовать метод getItem() объекта localStorage. </p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  const myData = localStorage.getItem('myData');
  console.log(myData); // Выводится "Hello, Redev!"`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Использование LocalStorage может улучшить пользовательский опыт, позволяя сохранять данные между визитами на сайт.</p>
            <h5 className='title_2'>Cookies</h5>
            <p className = 'text'>Cookies - это небольшие текстовые файлы, которые веб-сайты отправляют и хранят на компьютере пользователя через его веб-браузер. В контексте React приложений, cookies могут быть использованы для сохранения состояния приложения и обеспечения персонализации.</p>
            <p className = 'text'>Зачем нужно хранилище в виде Cookies?</p>
            <p className = 'text'>1. Сохранение состояния: Cookies позволяют хранить небольшие объемы данных, такие как пользовательские настройки, предпочтения, идентификаторы сессий и другие данные, которые нужно сохранить между различными запросами или сеансами пользователей.</p>
            <p className = 'text'>2. Аутентификация и авторизация: Cookies могут использоваться для хранения токенов аутентификации, позволяя пользователю оставаться аутентифицированным в приложении даже после перезапуска браузера.</p>
            <p className = 'text'>3. Персонализация и отслеживание: Cookies могут использоваться для анализа поведения пользователя на сайте и предоставления персонализированного опыта.</p>
            <h5 className='title_2'>Отличие от LocalStorage</h5>
            <p className = 'text'>1. Емкость данных: Cookies могут содержать до 4KB данных, в то время как Local Storage позволяет хранить около 5MB данных.</p>
            <p className = 'text'>2. Срок хранения: Cookies имеют срок хранения, который можно указать, в то время как данные в Local Storage хранятся неограниченное время, пока их явно не удалить.</p>
            <p className = 'text'>3. Передача данных: Cookies автоматически включаются в заголовки каждого HTTP-запроса к определенному домену, что делает их более подходящими для некоторых сценариев, таких как авторизация. Local Storage данные не автоматически передаются с каждым запросом.</p>
            <p className = 'text'>Установка Cookie:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  document.cookie = "user_id=123; expires=Fri, 31 Dec 2023 23:59:59 GMT; path=/";`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Получение Cookie:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  // Получение всех cookie в виде строки
    const allCookies = document.cookie;

    // Разбивка строки на отдельные cookie
    const cookiesArray = allCookies.split("; ");
    const cookies = {};
    cookiesArray.forEach(cookie => {
    const [name, value] = cookie.split("=");
    cookies[name] = value;
    });`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Удаление Cookie:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Cookies - это удобный механизм хранения небольших данных на стороне клиента, который можно использовать в React приложениях для сохранения состояния, аутентификации и персонализации.</p>
            <h5 className='title_2'>Session Storage</h5>
            <p className = 'text'>Session Storage - это еще один механизм хранения данных в браузере, который работает так же, как и LocalStorage. Однако Session Storage имеет ряд отличий от LocalStorage. Session Storage сохраняет данные только на время сеанса браузера. Это означает, что данные будут удалены после закрытия браузера или вкладки. Синтаксис такой же как и у LocalStorage.</p>
            <p className = 'text'>Использование Session Storage может помочь улучшить пользовательский опыт, позволяя сохранять временные данные между переходами на разные страницы сайта.</p>
            <h5 className='title_2'>localForage</h5>
            <p className = 'text'>localForage - это JavaScript-библиотека, предоставляющая удобный асинхронный интерфейс для работы с локальными хранилищами в браузерах. Эта библиотека позволяет сохранять данные в браузере пользователя, используя различные хранилища, такие как IndexedDB, WebSQL и localStorage, в зависимости от поддержки браузера.</p>
            <p className = 'text'>Установка localForage:</p>
            <div className = 'code'>
            <pre>
                <code>{`    npm install localforage`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Эта библиотека позволяет асинхронно сохранять и извлекать данные из различных хранилищ, обеспечивая более эффективное управление данными на стороне клиента. Работа с localForage интуитивно понятна и удобна для сохранения пользовательских настроек, кэширования данных и других задач, требующих локального хранения данных.</p>
        </div>
    );
}

export default Storage;