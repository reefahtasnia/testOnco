import React, { useState } from 'react';
import './CSS/newPost.css';

export default function NewQuestion() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    question: ''
  });
  const [activePage, setActivePage] = useState('questions');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleSaveDraft = () => {
    // Handle saving draft
    console.log('Saving draft:', formData);
  };

  const handleAddImage = () => {
    // Handle image upload
    console.log('Adding image');
  };

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
          <div className="menu-section">
            <span className="menu-title">MENU</span>
            <ul className="nav-menu">
              <li className={`nav-item ${activePage === 'questions' ? 'active' : ''}`}>
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
          </div>

          <div className="menu-section">
            <span className="menu-title">PERSONAL NAVIGATOR</span>
            <ul className="nav-menu">
              <li className={`nav-item ${activePage === 'your-questions' ? 'active' : ''}`}>
                <span>❓</span>
                Your questions
              </li>
              <li className={`nav-item ${activePage === 'your-answers' ? 'active' : ''}`}>
                <span>💬</span>
                Your answers
              </li>
              <li className={`nav-item ${activePage === 'likes-votes' ? 'active' : ''}`}>
                <span>❤️</span>
                Your likes & votes
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="page-title">New Question</h1>
        <form className="question-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <div className="select-wrapper">
              <select
                name="category"
                className="form-select"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Choose categories</option>
                <option value="general">General</option>
                <option value="technical">Technical</option>
                <option value="support">Support</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-input"
              placeholder="Type catching attention title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="question"
              className="form-textarea"
              placeholder="Type your question"
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="action-button add-image-btn"
              onClick={handleAddImage}
            >
              📷 Add Image
            </button>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                className="action-button draft-btn"
                onClick={handleSaveDraft}
              >
                Save as draft
              </button>
              <button type="submit" className="action-button publish-btn">
                ✈️ Publish
              </button>
            </div>
          </div>
        </form>
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
          <li className={`mobile-nav-item ${activePage === 'new' ? 'active' : ''}`}>
            <span>✏️</span>
            New
          </li>
          <li className={`mobile-nav-item ${activePage === 'profile' ? 'active' : ''}`}>
            <span>👤</span>
            Profile
          </li>
        </ul>
      </nav>
    </div>
  );
}

