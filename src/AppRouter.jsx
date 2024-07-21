import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import AuthenticationPage from './Pages/AuthPage';
import HomePage from './Pages/HomePage';
import CommunityPage from './Pages/CommunityPage';
import ProfilePage from './Pages/ProfilePage';
import PostFoodPage from './Pages/PostFoodPage';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';

const Layout = ({ filter, setFilter }) => (
  <div className="flex">
    <Sidebar />
    <div className="flex-1">
      <Navbar filter={filter} setFilter={setFilter} />
      <Outlet />
    </div>
  </div>
);

const AppRouter = () => {
  const [filter, setFilter] = useState('');

  return (
    <Routes>
      <Route path="/auth" element={<AuthenticationPage />} />
      <Route element={<Layout filter={filter} setFilter={setFilter} />}>
        <Route path="/" element={<HomePage filter={filter} />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/post-food" element={<PostFoodPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
