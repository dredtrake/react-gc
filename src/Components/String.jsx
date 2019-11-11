import React from 'react';
import PropTypes from 'prop-types';

const String = ({size}) => (
    <hr className={`string string-size-${size}`} />
);

String.propTypes = {
    size: PropTypes.number.isRequired,
};

export default String;
