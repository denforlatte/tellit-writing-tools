import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const ErrorModal = ({ errors }) => {
  if (!errors || errors.length <= 0) {
    return null;
  }

  // TODO close modal
  const toggle = () => console.log('toggle');

  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Computer says no</ModalHeader>
      <ModalBody>
        {errors.map((error, i) => (
          <div key={i}>{error}</div>
        ))}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Dismiss
        </Button>
      </ModalFooter>
    </Modal>
  );
};

ErrorModal.propTypes = {
  errors: PropTypes.array,
};

const mapStateToProps = state => ({
  errors: state.appManagement.errors,
});

export default connect(mapStateToProps)(ErrorModal);
