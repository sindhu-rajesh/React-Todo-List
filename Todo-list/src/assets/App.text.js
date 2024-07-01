import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // eslint-disable-next-line react/no-deprecated
  ReactDOM.render(<App />, div);
});






