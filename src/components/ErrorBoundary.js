import React, { Component } from 'react'
import FatalErrorModal from './modals/FatalErrorModal';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      errorMessage: null,
    }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // TODO log error to the server
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <FatalErrorModal/>
      )
    }

    return this.props.children;
  }
}

