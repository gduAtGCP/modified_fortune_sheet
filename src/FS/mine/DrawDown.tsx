import React, { useState, ChangeEvent } from 'react';

interface DropdownSelectionProps {
  options: string[];
  onChange: (selectedValue: string) => void;
  defaultValue?: string;
  width?: number;
  textLabel?: string;
}

const DropdownSelection = ({ 
    options=[" "], onChange, 
    defaultValue="HHHHHH", width=50,
        textLabel=""
}: DropdownSelectionProps) => {
    // let initValue:string;
    // if (!defaultValue){
    //     initValue=options[0] || '';}
    // else{
    //     initValue=defaultValue;
    // }

  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedValue(value);
    onChange(value);
  };

  return (
          <div className="textboxs">
              {textLabel}
    <select       value={selectedValue}
          onChange={handleChange}
          style={{
                      width: `${width}px`,
          }}
          >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select></div>
  );
};

export default DropdownSelection;
 
