import React, { useState, ChangeEvent } from 'react';

interface NumberInputProps {
  onChange: (value: number) => void;
  textLabel?: string ;
  defaultValue?: number | string;
  step?:number | string;
}

const NumberInput = ({ onChange, 
                     textLabel="", 
                     defaultValue=0.05,
                     step=0.01
                     }: NumberInputProps) => {

  const [value, setValue] = useState<string>(defaultValue.toString());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    
    // Convert to number only if valid
    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      onChange(numericValue);
    } else {
      // Handle invalid input (optional)
      onChange(defaultValue); // Fallback to default
    }
  };

  return (
      <div className="textboxs">
    {textLabel}
      <input
      type="number"
      step={step.toString()}
      value={value}
      onChange={handleChange}
      onFocus={(e) => e.target.select()}
    />
    </div>
  );
};

export default NumberInput;
 
