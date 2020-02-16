import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';

const FatalErrorModal = () => {
  const refresh = () => {
    window.location.reload(false);
  }

  return (
    <Modal isOpen >
      <ModalHeader>Fatal error</ModalHeader>
      <ModalBody>
        Something has gone wrong, I appologise. D: 
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={refresh}>
          Restart
        </Button>
      </ModalFooter>
    </Modal>
  )
}

export default FatalErrorModal
