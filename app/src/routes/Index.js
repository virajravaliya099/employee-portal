import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
const home = React.lazy(() => import('../views/Home'));
const about = React.lazy(() => import('../views/About'));
const login = React.lazy(() => import('../views/Login'));
const signup = React.lazy(() => import('../views/Signup'));

export default function Index() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Routes>
          <Route exact path="/" Component={home} />
          <Route exact path="login" Component={login} />
          <Route exact path="signup" Component={signup} />
          <Route exact path="about" Component={about} />
          <Route path="*" Component={<div>Not found</div>} />
        </Routes>
      </Router>
    </Suspense>
  );
}
