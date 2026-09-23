function Footer() {
  return (
    <footer id="footer" className="footer">
      <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      <p>
        Contact:{" "}
        <a href="mailto:student@example.com">student@example.com</a>
      </p>
    </footer>
  );
}

export default Footer;
