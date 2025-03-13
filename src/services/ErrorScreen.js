import ErrorHandling from '../screens/errorHandling';
import ErrorBoundary from 'react-native-error-boundary';

const ErrorScreen = ({ children }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorHandling} children={true}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorScreen;
