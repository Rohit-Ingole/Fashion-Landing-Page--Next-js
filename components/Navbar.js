const Navbar = ({ openNav }) => {
  return (
    <>
      <div className="nav">
        <div className="menu" onClick={openNav}>
          <div className="hamburger"></div>
        </div>
        <div className="logo">ROHIT.GO</div>
        <div className="cart">
          <i className="bx bx-cart-alt"></i>
        </div>
      </div>
      <div id="myNav" className="nav-overlay">
        <div className="nav-overlay-content">
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="sci">
        <i className="bx bxl-facebook-circle"></i>
        <i className="bx bxl-instagram-alt"></i>
        <i className="bx bxl-youtube"></i>
        <i className="bx bxl-twitter"></i>
      </div>
      <div className="fashion">FASHION</div>
    </>
  );
};

export default Navbar;
