import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row, Col, Spinner, Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import LoginForm from '../components/LoginForm';

const Login = ({ isLoading, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <Container>
      <br />
      <Row>
        <Col>
          {isLoading ? (
            <div style={{ display: 'flex', justifyContent: 'center' }} >
              <Spinner size='lg' color='primary'/>
            </div>
          ) : (
            <Card>
              <CardBody>
                <CardTitle>
                  <h2>Log In</h2>
                </CardTitle>
                <CardSubtitle>
                  <p></p>
                </CardSubtitle>
                <LoginForm />
                <br />
                <CardText>
                  Don't have an account? I'm not sure how you found my little web app, but it is currently in closed
                  alpha. Head over to <a href='https://dannywilkins.me'>dannywilkins.me</a> for updates on my projects!
                </CardText>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

Login.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.user.isLoading,
  isAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Login);
