function Header({ name, themeColor }) {
  const style = themeColor ? { color: themeColor } : {};

  return (
    <header className="header" style={style}>
      <h1 className="header-title">{name}</h1>
      <p className="header-subtitle">Web Developer &amp; Designer</p>
    </header>
  );
}

export default Header;
