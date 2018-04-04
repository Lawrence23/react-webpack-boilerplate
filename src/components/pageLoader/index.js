import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => (
  <div>
    <span>Loading</span>
  </div>
);

export default ReactDelayRender({ delay: 300 })(Loading);
