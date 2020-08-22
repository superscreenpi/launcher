import React from 'react';

export interface Props {
  icon: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextField: React.FC<Props> = ({ value, icon, label, onChange }) => {
  return (
    <div className="field">
      <label>
        <i className={`fas fa-${icon}`} />
        {label}
      </label>
      <input type="text" value={value} onChange={(e): void => onChange(e.target.value)} />
    </div>
  );
};
