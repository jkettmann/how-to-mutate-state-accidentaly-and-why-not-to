import React from 'react';
import CheckboxGroupClass from './CheckboxGroupClass';
import CheckboxGroupClassPure from './CheckboxGroupClassPure';
import CheckboxGroupFunction from './CheckboxGroupFunction';
import CheckboxGroupFunctionPure from './CheckboxGroupFunctionPure';
import CheckboxGroupFunctionPureImmutable from './CheckboxGroupFunctionPureImmutable';
import CheckboxGroupFunctionPureRefactored from './CheckboxGroupFunctionPureRefactored';

function App() {
  return (
    <div>
      <div style={{ padding: 20, color: 'orange' }}>
        Class component: Works but might introduce bug in the future
        <CheckboxGroupClass />
      </div>

      <div style={{ padding: 20, color: 'red' }}>
        Class component: Doesn't work
        <CheckboxGroupClassPure />
      </div>

      <div style={{ padding: 20, color: 'orange' }}>
        Functional component: Works but might introduce bug in the future
        <CheckboxGroupFunction />
      </div>

      <div style={{ padding: 20, color: 'red' }}>
        Pure functional component: Doesn't work
        <CheckboxGroupFunctionPure />
      </div>

      <div style={{ padding: 20, color: 'green' }}>
        Pure functional component with immutable state: Works
        <CheckboxGroupFunctionPureImmutable />
      </div>

      <div style={{ padding: 20, color: 'green' }}>
        Pure functional component with immutable state: Works
        <CheckboxGroupFunctionPureRefactored />
      </div>
    </div>
  );
}

export default App;
