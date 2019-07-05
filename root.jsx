import React from 'react';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';
import Weather from './frontend/weather';
import Autocomplete from './frontend/autocomplete';

const Root = props => {
  return (
    <div>
      <Clock />
      <Weather />
      <div className="small-widgets">
        <Tabs
          tabArray={[
            { title: 'One', content: 'First tabs content' },
            { title: 'Two', content: 'Second tabs content' },
            { title: 'Three', content: 'Third tabs content' }
          ]}
        />
        <Autocomplete nameList={props.nameList} />
      </div>
    </div>
  );
};

export default Root;
