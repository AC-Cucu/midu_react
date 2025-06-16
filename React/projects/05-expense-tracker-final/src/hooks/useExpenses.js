import { useState, useEffect } from 'react';

export function useExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [monthlyBudget, setMonthlyBudget] = useState(1000);

  // Cargar datos al iniciar
  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    const savedBudget = localStorage.getItem('monthlyBudget');
    
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
    if (savedBudget) {
      setMonthlyBudget(parseFloat(savedBudget));
    }
  }, []);

  // Guardar gastos
  useEffect(() => {
    if (expenses.length > 0) {
      localStorage.setItem('expenses', JSON.stringify(expenses));
    }
  }, [expenses]);

  // Guardar presupuesto
  useEffect(() => {
    localStorage.setItem('monthlyBudget', monthlyBudget.toString());
  }, [monthlyBudget]);

  // Funciones del hook
  const addExpense = (expenseData) => {
    const newExpense = {
      id: Date.now(),
      ...expenseData,
      date: new Date().toLocaleDateString('es-ES')
    };
    setExpenses(prev => [newExpense, ...prev]);
  };

  const deleteExpense = (id) => {
    setExpenses(prev => prev.filter(expense => expense.id !== id));
  };

  const getExpensesByCategory = (category) => {
    return expenses.filter(expense => expense.category === category);
  };

  // Cálculos
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return {
    expenses,
    monthlyBudget,
    setMonthlyBudget,
    addExpense,
    deleteExpense,
    getExpensesByCategory,
    totalExpenses
  };
}
