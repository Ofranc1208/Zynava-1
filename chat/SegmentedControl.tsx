import React, { useState } from 'react';
import styles from './SegmentedControl.module.css';

interface SegmentedControlProps {
  options: string[];
  onChange: (selected: string) => void;
  initial?: string;
}

const SegmentedControl: React.FC<SegmentedControlProps> = ({ options, onChange, initial }) => {
  const [selected, setSelected] = useState(initial || options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange(option);
  };

  return (
    <div className={styles.segmentedControl} role="group">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={selected === option ? styles.selected : styles.option}
          onClick={() => handleSelect(option)}
          aria-pressed={selected === option}
        >
          {option}
        </button>
      ))}
      <div
        className={styles.slider}
        style={{
          width: `${100 / options.length}%`,
          left: `${options.findIndex((o) => o === selected) * (100 / options.length)}%`,
        }}
      />
    </div>
  );
};

export default SegmentedControl; 