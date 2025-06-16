import { useState } from 'react'
import './ExpenseTracker.css'

function ExpenseTracker () {
    // Estados para los campos del formulario
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('comida');

    // Estado para la lista de gastos
    const [expenses, setExpenses] = useState([]);

    const handleChangeDescription = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setDescription(valor);
    }

    const handleChangeAmount = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setAmount(valor);
    }

    const handleChangeCategory = (event) => {
        const valor = event?.target?.value || '';

        if(valor === '') return

        setCategory(valor);
    }    


    return (
        <div className="expense-tracker">
            <header className="et-header">
                <h1>Control de Gastos</h1>
            </header>

            <main className="et-main-content">
                <section className="et-form-section">
                    <h2>Añadir gasto</h2>

                    <form className='et-expense-form'>
                        <div className='et-form-group'>
                            <label htmlFor='description'> Descipción:</label>
                            <input 
                                id='description'
                                className='et-form-input'
                                type='text'
                                placeholder='¿En qué has gastado?'
                                value={description}
                                onChange={(event) => handleChangeDescription(event)}
                            />
                        </div>
                        <div className='et-form-group'>
                            <label htmlFor='amount'> Cantidad (€):</label>
                            <input 
                                id='amount'
                                className='et-form-input'
                                type='number'
                                step='0.01'
                                placeholder='0.00'
                                value={amount}
                                onChange={(event) => handleChangeAmount(event)}
                            />
                        </div>
                        <div className='et-form-group'>
                            <label htmlFor='category'> Categoría:</label>
                            <select
                                id='category'
                                className='et-form-select'
                                value={category}
                                onChange={(event) => handleChangeCategory(event)}
                            >
                                <option value='comida'>🍕 Comida</option>
                                <option value='transporte'>🚌 Transporte</option>
                                <option value='entretenimiento'>🕹️ Entretenimiento</option>
                                <option value='salud'>🏥 Salud</option>
                                <option value='otros'>📑 Otros</option>
                            </select>
                        </div>

                        <button type='submit' className='et-submit-btn'>Añadir Gasto</button>
                    </form>
                </section>

                <section className="et-list-section">
                    <h2>Lista Gastos</h2>
                    <p>Total de gastos: {expenses.length}</p>
                </section>
            </main>
        </div>
    )
}

export default ExpenseTracker