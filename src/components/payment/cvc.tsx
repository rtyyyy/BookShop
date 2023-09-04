import React, { useState } from 'react';

function CreditCardCvcInput() {
  const [cvc, setCvc] = useState('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    let formattedValue = inputValue.replace(/\D/g, '');
    if (formattedValue.length > 3) {
      formattedValue = formattedValue.substr(0, 3);
    }
    setCvc(formattedValue);
  };

  return (
    <input
      className="input__cvc"
      type="text"
      value={cvc}
      onInput={handleInputChange}
      placeholder="CVC"
    />
  );
}

export default CreditCardCvcInput;