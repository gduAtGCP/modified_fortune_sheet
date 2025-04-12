import React, { useState, ChangeEvent } from 'react';

interface CheckTextInputProps {
  onCheckChange: (checked: boolean) => void;
  defaultValue?: boolean;
  textLabel?: string;
  // onTextChange: (text: string) => void;
}

const CheckBox = ({ 
    onChange, 
    defaultValue = false,
    textLabel = "Checkboxdefault"
    }: CheckTextInputProps) => {

  const [checked, setChecked] = useState<boolean>(defaultValue);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };

  return (
    <div className="textboxs" >
      <input
        type="checkbox"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      {textLabel}
    </div>
  );
};

export default CheckBox;
 
