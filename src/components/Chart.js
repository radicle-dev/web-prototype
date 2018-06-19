import React from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';

const Chart = props => <Line data={props.data} />;

Chart.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Chart;
