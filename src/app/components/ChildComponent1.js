import React from 'react';
import SubComponent from './SubComponet';

const ChildComponent1 = () => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px' }}>
      <h3>Child Component 1</h3>
      <SubComponent />
    </div>
  );
};

export default ChildComponent1;
