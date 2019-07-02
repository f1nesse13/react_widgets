import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
function Root() {
  return (
    <div>
      <Clock />
      <Tabs
        tabArray={[
          { title: 'One', content: 'First tabs content' },
          { title: 'Two', content: 'Second tabs content' },
          { title: 'Three', content: 'Third tabs content' }
        ]}
      />
    </div>
  );
}

export default Root;
