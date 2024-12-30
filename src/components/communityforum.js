import React, { useState } from 'react';
import './CSS/forum.css';
import Navbar from './Nav';

export default function Forum() {
  const [activeTab, setActiveTab] = useState('new');
  const [activePage, setActivePage] = useState('home');

  const posts = [
    {
      id: 1,
      author: 'Golanginya',
      avatar: '/placeholder.svg?height=40&width=40',
      time: '5 min ago',
      title: 'Top 5 Tips for Managing Chemotherapy Side Effects',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla',
      views: 125,
      comments: 15,
      upvotes: 155
    },
    {
      id: 2,
      author: 'Linuxoid',
      avatar: '/placeholder.svg?height=40&width=40',
      time: '25 min ago',
      title: 'Understanding the Emotional Impact of a Cancer Diagnosis',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum vitae etiam lectus amet enim.',
      views: 125,
      comments: 15,
      upvotes: 155
    },
    {
      id: 3,
      author: 'AizhanMaratovna',
      avatar: '/placeholder.svg?height=40&width=40',
      time: '2 days ago',
      title: 'Benefits of Joining a Cancer Support Group',
      preview: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat aliquet maecenas ut sit nulla',
      views: 125,
      comments: 15,
      upvotes: 155
    }
  ];

  const mustReadPosts = [
    'Please read rules before you start working on a platform',
    'Vision & Strategy of Alemhelp'
  ];

  const featuredLinks = [
    'Alemhelp source-code on GitHub',
    'Golang best-practices',
    'Alem.School dashboard'
  ];

  return (
    <div className="container">
      {/* Left Sidebar */}
      <aside className="sidebar">
        <div className="search-container">
          <input type="text" placeholder="Search" className="search-input" />
          <span className="search-icon">🔍</span>
        </div>
        <nav>
          <ul className="nav-menu">
            <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
              <span>📱</span>
              Questions
            </li>
            <li className={`nav-item ${activePage === 'tags' ? 'active' : ''}`}>
              <span>🏷️</span>
              Tags
            </li>
            <li className={`nav-item ${activePage === 'ranking' ? 'active' : ''}`}>
              <span>📊</span>
              Ranking
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <div className="filter-tabs">
          <button 
            className={`tab ${activeTab === 'new' ? 'active' : ''}`}
            onClick={() => setActiveTab('new')}
          >
            New
          </button>
          <button 
            className={`tab ${activeTab === 'top' ? 'active' : ''}`}
            onClick={() => setActiveTab('top')}
          >
            Top
          </button>
          <button 
            className={`tab ${activeTab === 'hot' ? 'active' : ''}`}
            onClick={() => setActiveTab('hot')}
          >
            Hot
          </button>
          <button 
            className={`tab ${activeTab === 'closed' ? 'active' : ''}`}
            onClick={() => setActiveTab('closed')}
          >
            Closed
          </button>
        </div>

        <div className="post-list">
          {posts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-header">
                <div className="user-info">
                  <img src={post.avatar} alt={post.author} className="avatar" />
                  <div className="user-meta">
                    <span className="username">{post.author}</span>
                    <span className="post-time">{post.time}</span>
                  </div>
                </div>
                <button className="more-options">⋮</button>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-preview">{post.preview}</p>
              <div className="post-metrics">
                <span className="metric">👁️ {post.views}</span>
                <span className="metric">💬 {post.comments}</span>
                <span className="metric">⬆️ {post.upvotes}</span>
              </div>
            </article>
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="right-sidebar">
        <section className="sidebar-section">
          <h3 className="section-title">⭐ Must-read posts</h3>
          <ul className="link-list">
            {mustReadPosts.map((post, index) => (
              <li key={index} className="link-item">{post}</li>
            ))}
          </ul>
        </section>

        <section className="sidebar-section">
          <h3 className="section-title">🔗 Featured links</h3>
          <ul className="link-list">
            {featuredLinks.map((link, index) => (
              <li key={index} className="link-item">{link}</li>
            ))}
          </ul>
        </section>
      </aside>

      {/* Mobile Navigation */}
      <nav className="mobile-nav">
        <ul className="mobile-nav-list">
          <li className={`mobile-nav-item ${activePage === 'home' ? 'active' : ''}`}>
            <span>🏠</span>
            Home
          </li>
          <li className={`mobile-nav-item ${activePage === 'search' ? 'active' : ''}`}>
            <span>🔍</span>
            Search
          </li>
          <li className={`mobile-nav-item ${activePage === 'tags' ? 'active' : ''}`}>
            <span>🏷️</span>
            Tags
          </li>
          <li className={`mobile-nav-item ${activePage === 'ranking' ? 'active' : ''}`}>
            <span>📊</span>
            Ranking
          </li>
        </ul>
      </nav>
    </div>
  );
}

