import { Route, Routes, useLocation } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'
import Error404 from './containers/errors/Error404';
import Home from './containers/pages/Home';
import ForYou from './containers/pages/ForYou';
import Notifications from './containers/pages/Notifications';
import Bookmarks from './containers/pages/Bookmarks';
import Profile from './containers/pages/Profile';
import TweetPost from './containers/pages/TweetPost';
import Login from './containers/pages/Login';
import SignUp from './containers/pages/SignUp';
import ProtectedRoutes from './hocs/ProtectedRoutes';
import Settings from './containers/pages/Settings';

const AnimatedRoutes = () => {

  const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        {/* Error Display */}
        <Route path="*" element={<Error404 />} />

        {/* Home Display */}
        <Route index element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Home />} />
          <Route path="/foryou" element={<ForYou />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tweetpost" element={<TweetPost />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
