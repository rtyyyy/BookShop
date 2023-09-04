import React, { useState } from 'react';
import './payment.css'
const FormatCreditCardNumber = (value: string) => {
  const cleanedValue = value.replace(/[^\d]/g, '');
  const formattedValue = cleanedValue.replace(/(\d{4})/g, '$1 ');
  return formattedValue.trim();
};

const CreditCardInput = () => {
  const [creditCardNumber, setCreditCardNumber] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCreditCardNumber(FormatCreditCardNumber(value));
  };

  return (
    <input
    className="input__number"
      type="text"
      value={creditCardNumber}
      onChange={handleInputChange}
      placeholder="XXXX XXXX XXXX XXXX"
      maxLength={19}
    />
  );
};

export default CreditCardInput