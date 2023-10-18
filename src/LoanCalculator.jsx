import React, { useState } from 'react';

function LoanCalculator() {
  const [principal, setPrincipal] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [months, setMonths] = useState('');
  const [totalPayment, setTotalPayment] = useState(null);
  const [totalInterest, setTotalInterest] = useState(null);

  const calculateTotalPayment = () => {
    const p = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12; // Tasa de interés mensual
    const n = parseInt(months);
    
    // Calcula el pago mensual
    const monthlyPayment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    
    // Calcula el monto total pagado
    const total = monthlyPayment * n;
    
    // Calcula la cantidad de intereses pagados
    const totalInterestPaid = total - p;
    
    setTotalPayment(monthlyPayment);
    setTotalInterest(totalInterestPaid);
  };

  return (
    <div>
      <h2>Calculadora de Préstamo</h2>
      <label>Monto del Préstamo:</label>
      <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
      />

      <label>Tasa de Interés (%):</label>
      <input
        type="number"
        value={interestRate}
        onChange={(e) => setInterestRate(e.target.value)}
      />

      <label>Plazo (meses):</label>
      <input
        type="number"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
      />

      <button onClick={calculateTotalPayment}>Calcular</button>

      {totalPayment !== null && totalInterest !== null && (
        <div>
          <h3>Total a Pagar por Mes: L{totalPayment.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
          <h3>Total Pagado en Intereses: L{totalInterest.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h3>
        </div>
      )}
    </div>
  );
}

export default LoanCalculator;
