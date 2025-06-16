import { useState } from 'react'
import './ExpenseTracker.css'

function ExpenseTracker () {
    // Estados para los campos del formulario
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('comida');

    // Estado para la lista de gastos
    const [expenses, setExpenses] = useState([]);

    return (
        <div className="expense-tracker">
            <header className="et-header">
                <h1>Control de Gastos</h1>
            </header>

            <main className="et-main-content">
                <section className="et-form-section">
                    <h2>Añadir gasto</h2>
                    <p>Descripción: {description}</p>
                    <p>Cantidad: {amount}</p>
                    <p>Categoría: {category}</p>
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