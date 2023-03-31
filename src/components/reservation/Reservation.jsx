import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useForm } from 'react-hook-form';
import './reservation.css';
import table from '../../assets/images/table.jpg';


const Reservation = () => {


    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset,

    } = useForm({
        mode: 'onBlur',
    });

    const [submitted, setSubmitted] = useState(false);
    const [showSubmitButton, setShowSubmitButton] = useState(true);

    const onSubmit = (data) => {
        alert(JSON.stringify(data));
        setSubmitted(true);
        setShowSubmitButton(false);
        reset();
    }

    return (<section id='book'>
        <Container>
            <Row>
                <Col lg='6' md='6'>
                    <div className='form_img w-100'>
                        <img src={table} alt='' className='table_image w-100' />
                    </div>
                </Col>

                <Col lg='6' md='6'>
                    <div className='form_content'>
                        <h2>Забронюйте столик вже зараз!</h2>
                        <p>Ми одразу ж виконаємо всі побажання.</p>
                    </div>
                    <div className='table_form'>
                        <form className='book_table row' onSubmit={handleSubmit(onSubmit)}>
                            <div className='form_group col-md-12'>

                                <input className='input_field' placeholder="Введіть своє ім'я" disabled={submitted} {...register('firstName', {
                                    required: 'Це поле є обов`язковим.',
                                    minLength: {
                                        value: 2,
                                        message: 'Будь ласка, не менше двох символів.'
                                    }
                                })} />

                                <div className='error_msg'>
                                    {errors?.firstName && <p>{errors?.firstName.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>

                                <input className='input_field' placeholder="Введіть своє прізвище" disabled={submitted} {...register('lastName', {
                                    required: 'Це поле є обов`язковим.',
                                    minLength: {
                                        value: 2,
                                        message: 'Будь ласка, не менше двох символів.'
                                    }
                                })} />

                                <div className='error_msg'>
                                    {errors?.lastName && <p>{errors?.lastName.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>

                                <input className='input_field' placeholder="Введіть свій Email" type='email' id='email' name='email' disabled={submitted} {...register('email', {
                                    required: 'Це поле є обов`язковим.',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Пошта повинна мати вірний формат.'
                                    }
                                })} />

                                <div className='error_msg'>
                                    {errors?.email && <p>{errors?.email.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>

                                <input className='input_field' placeholder="Ведіть свій номер телефону" type='tel' id='phoneNumber' name='phoneNumber' disabled={submitted} {...register('phone', {
                                    required: 'Це поле є обов`язковим.',
                                    minLength: {
                                        value: 6,
                                        message: 'Будь ласка, не менше 6 символів.'
                                    },
                                    maxLength: {
                                        value: 12,
                                        message: 'Будь ласка, не більше 12 символів.'
                                    }
                                })} />

                                <div className='error_msg'>
                                    {errors?.phone && <p>{errors?.phone.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>

                                <select className='input_field' disabled={submitted} label='select...' {...register("table", {
                                    required: 'Будь ласка, оберіть тип столика.'
                                })}>
                                    <option value="">Обрати тип столика...</option>
                                    <option value="1">1 місце</option>
                                    <option value="2">2 місця</option>
                                    <option value="3">3 місця</option>
                                    <option value="4">4 місця</option>
                                    <option value="6">6 місць</option>
                                    <option value="8">8 місць</option>
                                    <option value="10">10 місць</option>
                                </select>
                                <div className='error_msg'>
                                    {errors?.table && <p>{errors?.table.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12' >
                                <label className='l-radio'>
                                    <input className='radio_btn' type='radio' id='inside' value='Inside' disabled={submitted} {...register('position', {
                                        required: 'Будь ласка, оберіть розміщення столика.'
                                    })} /> Приміщення
                                </label>
                                <label className='l-radio'>
                                    <input className='radio_btn' type='radio' id='outside' value='Outside' disabled={submitted} {...register('position', {
                                        required: 'Будь ласка, оберіть розміщення столика.'
                                    })} /> Тераса
                                </label>
                                <div className='error_msg'>
                                    {errors?.position && <p>{errors?.position.message || 'Error!'}</p>}
                                </div>
                            </div>

                            <div className='form_group col-md-12'>
                                {showSubmitButton && <input className='submit_btn' type='submit' value='Відправити' disabled={!isValid} />}
                            </div>
                        </form>
                        {submitted && <div><p>Дякуємо!<br /> Ми отримали ваші побажання, незабаром з вами зв'яжуться.</p></div>}
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    )
}

export default Reservation;