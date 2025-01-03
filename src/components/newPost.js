import React, { useState } from 'react';
import './CSS/forum.css';

export default function NewPost() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    question: ''
  });

  const mustReadPosts = [
    'Please read rules before you start working on a platform',
    'Vision & Strategy of Alemhelp'
  ];

  const featuredLinks = [
    'Alemhelp source-code on GitHub',
    'Golang best-practices',
    'Alem.School dashboard'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="forum-container">
      {/* Left Sidebar */}
      <aside className="forum-sidebar">
        <div className="forum-search-container">
          <input type="text" placeholder="Search" className="forum-search-input" />
          <svg className="forum-search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.5 17.5L13.875 13.875" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="forum-menu-section">
          <div className="forum-menu-label">MENU</div>
          <nav className="forum-nav-menu">
            <button className="forum-nav-item">
              <span className="forum-nav-icon">📑</span>
              Questions
            </button>
            <button className="forum-nav-item">
              <span className="forum-nav-icon">🏷️</span>
              Tags
            </button>
            <button className="forum-nav-item">
              <span className="forum-nav-icon">📊</span>
              Ranking
            </button>
          </nav>
        </div>

        <div className="forum-menu-section">
          <div className="forum-menu-label">PERSONAL NAVIGATOR</div>
          <nav className="forum-nav-menu">
            <button className="forum-nav-item active">
              <span className="forum-nav-icon">❓</span>
              Your questions
            </button>
            <button className="forum-nav-item">
              <span className="forum-nav-icon">💬</span>
              Your answers
            </button>
            <button className="forum-nav-item">
              <span className="forum-nav-icon">❤️</span>
              Your likes & votes
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="forum-main-content">
        <h1 className="forum-page-title">New Question</h1>
        <form onSubmit={handleSubmit} className="forum-new-post-form">
          <div className="forum-form-group">
            <select 
              className="forum-select"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="">Choose categories</option>
              <option value="treatment">Treatment</option>
              <option value="support">Support</option>
              <option value="lifestyle">Lifestyle</option>
            </select>
          </div>

          <div className="forum-form-group">
            <input
              type="text"
              className="forum-input"
              placeholder="Type catching attention title"
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
            />
          </div>

          <div className="forum-form-group">
            <textarea
              className="forum-textarea"
              placeholder="Type your question"
              value={formData.question}
              onChange={(e) => setFormData({...formData, question: e.target.value})}
              rows={10}
            />
          </div>

          <div className="forum-form-actions">
            <button type="button" className="forum-button-secondary">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.66669 13.3333L10 10M10 10L13.3334 13.3333M10 10V17.5M16.6667 13.9524C17.6846 13.1117 18.3334 11.8399 18.3334 10.4167C18.3334 7.88536 16.2813 5.83333 13.75 5.83333C13.5679 5.83333 13.3975 5.73833 13.3051 5.58145C12.2184 3.73736 10.2199 2.5 7.91669 2.5C4.46491 2.5 1.66669 5.29822 1.66669 8.75C1.66669 10.4718 2.36289 12.0309 3.48897 13.1613" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Add Image
            </button>
            <div className="forum-button-group">
              <button type="button" className="forum-button-outline">
                Save as draft
              </button>
              <button type="submit" className="forum-button-primary">
                Publish
              </button>
            </div>
          </div>
        </form>
      </main>

      {/* Right Sidebar */}
      <aside className="forum-right-sidebar">
        <section className="forum-sidebar-section">
          <h3 className="forum-section-title">
            <span>⭐</span>
            Must-read posts
          </h3>
          <ul className="forum-link-list">
            {mustReadPosts.map((post, index) => (
              <li key={index} className="forum-link-item">
                <a href="#">{post}</a>
              </li>
            ))}
          </ul>
        </section>

        <section className="forum-sidebar-section">
          <h3 className="forum-section-title">
            <span>🔗</span>
            Featured links
          </h3>
          <ul className="forum-link-list">
            {featuredLinks.map((link, index) => (
              <li key={index} className="forum-link-item">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}

