import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const Root = props => {
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
      <Weather />
      <Autocomplete nameList={props.nameList} />
    </div>
  );
};

export default Root;
