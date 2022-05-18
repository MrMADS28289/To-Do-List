import { Link, Route, Routes } from "react-router-dom";
import ToDoApp from "./Components/ToDoApp";
import Login from './Components/Login'
import Regester from './Components/Regester'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./firebase.init";
import { signOut } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import RequireAuth from "./Components/RequireAuth";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="h-full pb-96 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <nav className="mx-6 flex justify-between items-start">
        <Link to='/' className="text-3xl text-center text-success font-bold py-4">My To-Do App</Link>
        {
          !user ? <Link className="text-xl text-center text-success font-bold py-4" to='/login'>Login</Link>
            :
            <button onClick={() => {
              signOut(auth)
              toast.success('Logout success')
            }} className="text-xl text-center text-success font-bold py-4">Logout</button>
        }
      </nav>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <ToDoApp />
          </RequireAuth>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/regester' element={<Regester />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
