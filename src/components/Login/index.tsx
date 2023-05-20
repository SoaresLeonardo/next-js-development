import { StateProps } from '@/redux/user';
import { useDispatch } from 'react-redux';

const Login = ({ currentUser: user }: StateProps) => {
  const dispatch = useDispatch();

  const handleUserLogin = () => {
    dispatch({
      type: 'user/login',
      payload: { name: 'Leonardo', email: 'leonardo@gmail.com' }
    });
  };

  const handleUserLogout = () => {
    dispatch({
      type: 'user/logout'
    });
  };

  return (
    <p onClick={user ? handleUserLogout : handleUserLogin}>
      {user ? 'Logout' : 'Login'}
    </p>
  );
};

export default Login;
