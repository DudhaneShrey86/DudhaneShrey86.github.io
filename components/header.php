<header id="header-element">
  <div class="container">
    <nav>
      <div id="logo-container">
        <img src="./assets/images/logo.webp" alt="Shreyanshu Dudhane's Logo">
      </div>
      <div>
        <span id="ham-menu" onclick="toggleMenu()"><i class="mdi mdi-menu"></i></span>
        <div id="nav-links-container">
          <a class="nav-link" id="a-link" onclick="goTo('a')">About</a>
          <a class="nav-link" id="p-link" onclick="goTo('p')">Portfolio</a>
          <a class="nav-link" id="c-link" onclick="goTo('c')">Contact</a>
        </div>
      </div>
    </nav>
  </div>
  <div id="mobile-nav-links-container">
  <a class="mobile-nav-link" id="a-link" onclick="goTo('a'); toggleMenu()">About</a>
  <a class="mobile-nav-link" id="p-link" onclick="goTo('p'); toggleMenu()">Portfolio</a>
  <a class="mobile-nav-link" id="c-link" onclick="goTo('c'); toggleMenu()">Contact</a>
  </div>
</header>