import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { clearAppErrors } from '../../actions/appManagementActions';

const ErrorModal = ({ errors, clearAppErrors }) => {
  if (!errors || errors.length <= 0) {
    return null;
  }

  const toggle = () => clearAppErrors();

  // TODO make this look prettier
  return (
    <Modal isOpen={true} toggle={toggle}>
      <ModalHeader toggle={toggle}>Computer says no</ModalHeader>
      <ModalBody>
        {Array.isArray(errors) ? (errors.map((error, i) => (
          <div key={i}>{error}</div>
        ))) : (
          <div>{errors}</div>
        )}
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
  clearAppErrors: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.appManagement.errors,
});

export default connect(mapStateToProps, { clearAppErrors })(ErrorModal);
