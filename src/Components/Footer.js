import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h4 className="footer-heading">TriceNews</h4>
      <p className="footer-copy">&copy;{currentYear}</p>
    </footer>
  );
};

export default Footer;
