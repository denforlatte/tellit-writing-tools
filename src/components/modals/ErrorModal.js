import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

const ErrorModal = ({ errors }) => {
  if (!errors || errors.length <= 0) {
    return;
  }

  return (
    <div>{errors.map((error, i) => (
      <div key={i}>{error}</div>
    ))}</div>
  )
}

ErrorModal.propTypes = {
  errors: PropTypes.array,
}

const mapStateToProps = state => ({
  errors: state.appManagement.errors,
})

export default connect(mapStateToProps)(ErrorModal)
