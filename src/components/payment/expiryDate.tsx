import React, { useState } from 'react';

function CreditCardExpirationDateInput() {
  const [expirationDate, setExpirationDate] = useState('');

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    let formattedValue = inputValue.replace(/\D/g, '');
    if (formattedValue.length > 4) {
      formattedValue = formattedValue.substr(0, 4);
    }
    if (formattedValue.length > 2) {
      formattedValue = formattedValue.substr(0, 2) + '/' + formattedValue.substr(2);
    }
    setExpirationDate(formattedValue);
  };

  return (
    <input
      className="input__expiry"
      type="text"
      value={expirationDate}
      onInput={handleInputChange}
      placeholder="MM/YY"
    />
  );
}

export default CreditCardExpirationDateInput;