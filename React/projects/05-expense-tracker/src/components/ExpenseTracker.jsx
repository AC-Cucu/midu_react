import './ExpenseTracker.css'

function ExpenseTracker () {
    return (
        <div className="expense-tracker">
            <header className="et-header">
                <h1>Control de Gastos</h1>
            </header>

            <main className="et-main-content">
                <section className="et-form-section">
                    <h2>Añadir gasto</h2>
                    {/* Aquí irá nuestro formulario */}
                </section>

                <section className="et-list-section">
                    <h2>Lista Gastos</h2>
                    {/* Aquí irá nuestra lista */}
                </section>
            </main>
        </div>
    )
}

export default ExpenseTracker