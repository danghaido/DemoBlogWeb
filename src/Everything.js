import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import PostLists from './components/PostLists';
import Post from "./components/Post";
import Posts from './components/Posts';
import Login from './components/Login';
import Stats from './components/Stats';
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes';
import NewPost from './components/NewPost';

function Everything({ user, setUser }) {
  const navigate = useNavigate();

  function logOut() {
    setUser(null);
    navigate("/");
  }

  return (
    <div>
      <nav className='nav-bar'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Post</Link>
        {user && <Link to="/stats">Stats</Link>}
        {!user && <Link to="/login">Login</Link>}
        {user && <Link to="/newpost">New Post</Link>}
        {user && (
          <span
            onClick={logOut}
            style={{ padding: 9, cursor: 'pointer', color: 'white' }}
          >
            Logout
          </span>
        )}
      </nav>

      <Routes>
        {/* Nếu chưa login, chuyển hướng từ "/" sang "/login" */}
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login onLogin={setUser} />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />}>
          <Route index element={<PostLists />} />
          <Route path=":slug" element={<Post />} />
        </Route>
        <Route path="/stats" element ={<ProtectedRoutes user = {user}> <Stats/> </ProtectedRoutes>} />
        <Route path="/newpost" element ={<ProtectedRoutes user = {user}> <NewPost/> </ProtectedRoutes>} />
        <Route path="*" element={<navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default Everything;