import React, {useState} from 'react'; 
import {useForm, Controller} from "react-hook-form";
import {Modal, message, Input, DatePicker} from 'antd';

const Forms = () =>{
    const {handleSubmit, control, formState: {errors}} = useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [formData, setFormData] = useState({});

    const onSubmit = (value) =>{
    setFormData(value);
    setIsModalVisible(true);
    console.log(value);
    message.success('Успешно зарегистрировано');
}
    return(
        <div className='content'>
            <h3 className='title'>Формы</h3>
            <p className = 'text'>В React существует несколько способов использования форм в приложении, в зависимости от потребностей и предпочтений разработчика.</p>
            <p className = 'text'>1. Управляемые компоненты форм:</p>
            <p className = 'text'>В этом подходе значения полей формы хранятся в состоянии компонента. Каждое поле формы связано с состоянием и обновляется через callback-функцию.</p>
            <p className = 'text'>2. Неуправляемые компоненты форм:</p>
            <p className = 'text'>В этом подходе значения полей формы хранятся непосредственно в DOM, а не в состоянии компонента.</p>
            <p className = 'text'>3. Ref-подход:</p>
            <p className = 'text'>В этом случае значения полей формы считываются через ref, которые позволяют получить доступ к DOM-элементам. </p>
            <p className = 'text'>4. Библиотеки управления формами:</p>
            <p className = 'text'>Существуют библиотеки, такие как React Hook Form и Formik , которые предоставляют более высокоуровневые решения для работы с формами. </p>
            <h5 className='title_2'>React Hook Form:</h5>
            <p className = 'text'>React Hook Form - это библиотека, которая значительно упрощает процесс работы с формами в React приложениях. Она позволяет создавать интерактивные и дружественные формы с минимумом лишнего кода.</p> 
            <p className = 'text'>Установка библиотеки:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  npm install react-hook-form`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Основы использования:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`    //Импорт библиотеки
    import { useForm } from 'react-hook-form'

    //Инициализация Хука
    const { register, handleSubmit, formState: { errors } } = useForm()

    //Создание Формы
    <form onSubmit={handleSubmit(onSubmit)}>

    {/* Добавление Полей */
    <input
    type='number'
    {...register('age', {
        required: 'Обязательное поле',
        min: {
        value: 18,
        message: 'Вам должно быть 18 лет или больше'
    }
    })}
    />
    <p>{errors.age?.message}</p>}
    
    //Кнопка отправки
    <button type="submit">Отправить</button>
    </form>

    //Обработка Отправки
    const onSubmit = (data) => {
        console.log(data);
    };`}
                </code>
            </pre>
            </div>
            <p className = 'text'>register - это функция из библиотеки react-hook-form, которая используется для связывания инпутов и других элементов формы с состоянием и валидацией формы.</p>
            <p className = 'text'>Когда ты вызываешь register('fieldName', validationRules), библиотека react-hook-form выполняет следующие действия:</p>
            <p className = 'text'>1. Регистрирует поле внутри твоей формы, связывая его с именем fieldName.</p>
            <p className = 'text'>2. Применяет указанные правила валидации (validationRules) к этому полю.</p>
            <div className = 'code'>
            <pre>
                <code>{`    //Использование нескольких правил
    <input
    {...register('age', {
      required: 'Укажите возраст',
      min: { value: 18, message: 'Вам должно быть 18 лет или больше' }
    })}
    />

    //Поле с типом radio или checkbox
    <input type="radio" {...register('gender', { required: 'Выберите пол' })} value="male" />
    <input type="radio" {...register('gender', { required: 'Выберите пол' })} value="female" />

    //Поле с паттерном валидации
    <input
    {...register('email', {
     required: 'Поле обязательно для заполнения',
     pattern: {
       value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$/,
       message: 'Введите корректный email',
    },
    })}
    />`}
                </code>
            </pre>
            </div>
            <h5 className='title_2'>Formik:</h5>
            <p className = 'text'>Formik - это еще одна библиотека для управления формами в приложениях на React. Её основная цель - упростить и облегчить процесс работы с формами, сбора данных от пользователя и их валидации. </p>
            <p className = 'text'>Установка библиотеки:</p>
            <div className = 'code'>
            <pre>
                <code>
                    {`  npm install formik`}
                </code>
            </pre>
            </div>
            <p className = 'text'>Основы использования:</p>
            <div className = 'code'>
            <pre>
                <code>{`    //Импорт библиотеки
    import { Formik, Form, Field, ErrorMessage } from 'formik';

    //Создание Формы
    <Formik
    initialValues={{ username: '', email: '' }}
    onSubmit={(values) => {
        console.log(values);
    }}
    >
        <Form>
    {/* Добавление Полей *
    <Field
    type="email"
    name="email"
    placeholder="Электронная почта"
    validate={(value) => {
        let error;
        if (!value) {
        error = 'Поле обязательно';
        } else if (!/S+@S+.S+/.test(value)) {
        error = 'Некорректный адрес';
        }
        return error;
    }}
    />
    <ErrorMessage name="email" component="div" /}
        </Form>
    </Formik>
    
    //Кнопка отправки
    <button type="submit">Отправить</button>
    </form>

    //Обработка Отправки
    const onSubmit = (data) => {
        console.log(data);
    };`}
                </code>
            </pre>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Имя:</label>
            <Controller
                name = 'name'
                control={control}
                rules = {{
                    required: 'Поле обязательно для заполнения',
                }}
                render = {({field}) => <Input {...field} placeholder = "Имя"/>}
            />
            <p>{errors.name?.message}</p>
        </div>
        <div>
            <label>Email:</label>
            <Controller
                name = "email"
                control={control}
                rules={{
                    required: 'Поле обязательно для заполнения',
                    pattern: {
                        value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                        message: 'Введите корректный email',
                    }
                }}
                render={({field}) => <Input {...field} placeholder = 'Email'/>}
            />
            <p>{errors.email?.message}</p>
        </div>
        <div>
            <label>Дата рождения:</label>
            <Controller
                name="date"
                control={control}
                rules = {{
                    required: 'Поле обязательно для заполнения',
                }}
                render={({ field }) => <DatePicker {...field} placeholder = "Дата рождения" />
            }
            />
            <p>{errors.date?.message}</p>
        </div>
        <button type="submit">
            Отправить
        </button>
    </form>
    <Modal
      title="Данные формы"
      visible={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
    >
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </Modal>
        </div>
    );
}

export default Forms;