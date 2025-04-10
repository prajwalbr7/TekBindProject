import './index.css';

const Footer = () => {
  return (
    <footer className='FooterParentContainer'>
      <div className="footer-content">
        <h3>MyStore</h3>
        <p>Your one-stop shop for all amazing deals and quality products.</p>
        <div className="footer-links">
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
