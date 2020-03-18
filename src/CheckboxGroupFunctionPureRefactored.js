import React, { useCallback, useState } from 'react';

const Checkbox = React.memo(function({ name, option, checked, onChange }) {
  return (
    <label>
      <input
        type="checkbox"
        name={name}
        value={option.value}
        checked={checked}
        onChange={onChange}
      />
      {option.text}
    </label>
  );
});

function CheckboxGroup() {
  const [options, setOptions] = useState([
    { value: '1', text: 'Option 1' },
    { value: '2', text: 'Option 2' },
    { value: '3', text: 'Option 3' },
  ]);
  const [checkedValues, setCheckedValues] = useState({});

  const handleChange = useCallback((event) => {
    const checkedValue = event.target.value;

    setCheckedValues((previousState) => ({
      ...previousState,
      [checkedValue]: !previousState[checkedValue],
    }));
  }, []);

  return (
    <div>
      {
        options.map((option) => (
          <Checkbox
            key={option.value}
            name="my-checkbox-group"
            option={option}
            selected={!!checkedValues[option.value]}
            onChange={handleChange}
          />
        ))
      }
    </div>
  );
}

export default CheckboxGroup;
