import React from 'react';

const ForumPage = () => {
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: '#F5F5F5',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '250px',
      backgroundColor: '#fff',
      borderRight: '1px solid #E0E0E0',
      padding: '20px',
    },
    mainContent: {
      flex: 1,
      padding: '20px',
    },
    rightSidebar: {
      width: '300px',
      backgroundColor: '#fff',
      borderLeft: '1px solid #E0E0E0',
      padding: '20px',
    },
    card: {
      backgroundColor: '#fff',
      border: '1px solid #E0E0E0',
      borderRadius: '8px',
      padding: '15px',
      marginBottom: '15px',
    },
    cardHeader: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    cardBody: {
      marginBottom: '10px',
    },
    cardFooter: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      color: '#888',
    },
    buttonGroup: {
      display: 'flex',
      gap: '10px',
      marginBottom: '20px',
    },
    button: {
      padding: '8px 16px',
      borderRadius: '20px',
      border: 'none',
      cursor: 'pointer',
    },
    activeButton: {
      backgroundColor: '#3B82F6',
      color: '#fff',
    },
    postLinks: {
      marginBottom: '20px',
    },
    postLink: {
      display: 'block',
      color: '#3B82F6',
      textDecoration: 'none',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      {/* Left Sidebar */}
      <div style={styles.sidebar}>
        <h3>MENU</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#3B82F6' }}>
              Questions
            </a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              Tags
            </a>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#333' }}>
              Ranking
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.button, ...styles.activeButton }}>New</button>
          <button style={styles.button}>Top</button>
          <button style={styles.button}>Hot</button>
          <button style={styles.button}>Closed</button>
        </div>

        {/* Card */}
        {[1, 2, 3].map((_, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.cardHeader}>
              <img
                src="https://via.placeholder.com/40"
                alt="User Avatar"
                style={styles.avatar}
              />
              <div>
                <strong>Username</strong>
                <p style={{ fontSize: '12px', color: '#888' }}>5 min ago</p>
              </div>
            </div>
            <div style={styles.cardBody}>
              <h4>Title of the Question</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Consequat aliquet maecenas ut sit nulla.
              </p>
            </div>
            <div style={styles.cardFooter}>
              <span>125 views</span>
              <span>15 comments</span>
              <span>155 votes</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div style={styles.rightSidebar}>
        <div style={styles.postLinks}>
          <h4>Must-read posts</h4>
          <a href="#" style={styles.postLink}>
            Please read rules before you start working on a platform
          </a>
          <a href="#" style={styles.postLink}>
            Vision & Strategy of Alemhelp
          </a>
        </div>
        <div style={styles.postLinks}>
          <h4>Featured links</h4>
          <a href="#" style={styles.postLink}>
            Alemhelp source-code on GitHub
          </a>
          <a href="#" style={styles.postLink}>
            Golang best-practices
          </a>
          <a href="#" style={styles.postLink}>
            Alem.School dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForumPage;
