import { useState } from 'react';
import { useExpenses } from './hooks/useExpenses';
import './ExpenseTracker.css';

function ExpenseTracker() {
  const {
    expenses,
    totalExpenses,
    addExpense,
    deleteExpense,
    getExpensesByCategory,
    monthlyBudget,
    setMonthlyBudget
  } = useExpenses();

  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('comida');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() && amount > 0) {
      addExpense({
        description: description.trim(),
        amount: parseFloat(amount),
        category
      });
      setDescription('');
      setAmount('');
    }
  };

  const remainingBudget = monthlyBudget - totalExpenses;
  const budgetPercentage = monthlyBudget > 0 ? (totalExpenses / monthlyBudget) * 100 : 0;

  return (
    <div className="expense-tracker">
      <header className="header">
        <h1>💰 Control de Gastos</h1>
        <div className="budget-section">
          <label>
            Presupuesto Mensual: €
            <input
              type="number"
              value={monthlyBudget}
              onChange={(e) => setMonthlyBudget(parseFloat(e.target.value) || 0)}
              className="budget-input"
            />
          </label>
        </div>
      </header>

      <div className="dashboard">
        <div className="stats-grid">
          <div className="stat-card total">
            <h3>Total Gastado</h3>
            <p>€{totalExpenses.toFixed(2)}</p>
          </div>
          <div className="stat-card remaining">
            <h3>Presupuesto Restante</h3>
            <p className={remainingBudget < 0 ? 'negative' : 'positive'}>
              €{remainingBudget.toFixed(2)}
            </p>
          </div>
          <div className="stat-card percentage">
            <h3>% Gastado</h3>
            <p className={budgetPercentage > 90 ? 'warning' : ''}>
              {budgetPercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="progress-bar">
          <div 
            className="progress-fill"
            style={{ 
              width: `${Math.min(budgetPercentage, 100)}%`,
              backgroundColor: budgetPercentage > 90 ? '#e74c3c' : budgetPercentage > 70 ? '#f39c12' : '#27ae60'
            }}
          ></div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="expense-form">
        <div className="form-group">
          <input
            type="text"
            placeholder="Descripción del gasto..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            step="0.01"
            placeholder="Cantidad (€)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
          >
            <option value="comida">🍕 Comida</option>
            <option value="transporte">🚗 Transporte</option>
            <option value="entretenimiento">🎬 Entretenimiento</option>
            <option value="salud">⚕️ Salud</option>
            <option value="otros">📦 Otros</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Añadir Gasto
        </button>
      </form>

      <div className="expenses-list">
        <h2>Gastos Recientes</h2>
        {expenses.length === 0 ? (
          <p className="no-expenses">No hay gastos registrados</p>
        ) : (
          expenses.map(expense => (
            <div key={expense.id} className="expense-item">
              <div className="expense-info">
                <span className="expense-category">
                  {expense.category === 'comida' && '🍕'}
                  {expense.category === 'transporte' && '🚗'}
                  {expense.category === 'entretenimiento' && '🎬'}
                  {expense.category === 'salud' && '⚕️'}
                  {expense.category === 'otros' && '📦'}
                </span>
                <div>
                  <p className="expense-description">{expense.description}</p>
                  <small className="expense-date">{expense.date}</small>
                </div>
              </div>
              <div className="expense-actions">
                <span className="expense-amount">€{expense.amount.toFixed(2)}</span>
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="delete-btn"
                >
                  🗑️
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ExpenseTracker;
