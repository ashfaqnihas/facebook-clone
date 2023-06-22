import Header from './Header';
import './App.css';
import SideBar from "./SideBar"
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import { useStatevalue } from './StateProvider';

function App() {

  const [{user},dispatch] = useStatevalue();
  //const user = null

  return (
    <div className="app">
    {!user ? (
      <Login />
      )
    :(
      <>
      <Header />
      <div className="app_body">
        <SideBar />
        <Feed />
      <Widgets />
      </div>
            </>
    )
    }
      

    </div>
  );
}

export default App;
