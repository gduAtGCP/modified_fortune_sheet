import React, { useState, ChangeEvent } from 'react';

interface TextInputProps {
  onChange: (value: string) => void;
  textLabel?: string ;
  defaultValue?: string;
}

const TextInput = ({ onChange, textLabel="", defaultValue="" }: NumberInputProps) => {
  const [value, setValue] = useState<string>(defaultValue.toString());

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    
      onChange(inputValue); 
  };

  return (
      <div className="textboxs">
    {textLabel}
      <input
      type="string"
      value={value}
      onChange={handleChange}
      onFocus={(e) => e.target.select()}
    />
    </div>
  );
};

export default TextInput;
 
