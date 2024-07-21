const headerHTML = `
<div class="section-navbar">
      <section class="top_txt">
        <div class="head container">
          <div class="head_txt">
            <p>Free shipping, 30-day return or refund guarantee.</p>
          </div>
          <div class="sign_in_up">
            <a href="#">SIGN IN</a>
            <a href="#">SIGN UP</a>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="navbar-brand">
          <a href="index.html">
            <img
              src="./images/TechTonic.png"
              alt="TechTonic eCommerse logo"
              class="logo"
              width="100%"
              height="auto"
            >
          </a>
        </div>
        <nav class="navbar">
          <ul>
            <li class="nav-item">
              <a href="/" class="nav-link">Home</a>
            </li>
            <li class="nav-item">
              <a href="about.html" class="nav-link">about</a>
            </li>
            <li class="nav-item">
              <a href="products.html" class="nav-link">product</a>
            </li>
            <li class="nav-item">
              <a href="contact.html" class="nav-link">contact</a>
            </li>
          </ul>
          <a href="addToCart.html" class="nav-link add-to-cart-button" id="cartValue">
            <i class="fa-solid fa-cart-shopping"> 0</i>
          </a>
          <button class="hamburger-menu-btn">
            <i class="fa-solid fa-bars"></i>
          </button>
        </nav>
      </div>
    </div>`;

const headerElem = document.querySelector('.section-header');
headerElem.insertAdjacentHTML('afterbegin', headerHTML)