import { useContext } from 'react';
import { AuthContext } from '../firebase/AuthProvider';


const useAuth = () => {
   return useContext(AuthContext)
};

export default useAuth;