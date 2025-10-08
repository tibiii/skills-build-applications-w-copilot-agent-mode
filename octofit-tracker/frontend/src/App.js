import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import './App.css';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-primary bg-primary shadow-sm mb-4">
        <div className="container">
          <Link className="navbar-brand fw-bold text-white d-flex align-items-center" to="/">
            <img src="/octofitapp-small.png" alt="Octofit Logo" className="octofit-logo me-2" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="text-center mt-5">
              <h1 className="display-4 fw-bold">Welcome to <span className="text-primary">Octofit Tracker</span>!</h1>
              <p className="lead mt-3">Track your fitness, join teams, compete on the leaderboard, and get personalized workout suggestions.</p>
              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/activities" className="btn btn-primary btn-lg">View Activities</Link>
                <Link to="/leaderboard" className="btn btn-outline-primary btn-lg">Leaderboard</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
