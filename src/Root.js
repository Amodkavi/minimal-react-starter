import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
export default Root;
