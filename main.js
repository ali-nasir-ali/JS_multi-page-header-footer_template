class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <header class="name_box">
      <div class="logo_box"></div>
      <div class="name_maya">
        <a class="" href="index.html"><h2>Maya Nelson</h2></a>
      </div>
    
      <p>/</p>
      <div class="name_manager">
        <a class="" href="index.html"><p>PROJECT MANAGER</p></a>
      </div>
    
      <nav class="nav_bar">
        <ul>
          <li><a href="index.html">ABOUT ME</a></li>
          <li><a href="resume.html">RESUME</a></li>
          <li><a href="projects.html">PROJECTS</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </nav>
    
      <div class="ham_bar_box">
        <div class="ham_bar_one"></div>
        <div class="ham_bar_two"></div>
        <div class="ham_bar_three"></div>
      </div>
    </header>
      `;
  }
}

customElements.define("header-component", Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class="footer_contact">
      <div>
        <h3>Call</h3>
        <p>123-456-7890</p>
      </div>
      <div>
        <h3>Write</h3>
        <p>info@mysite.com</p>
      </div>
    </div>
    <div class="footer_social">
      <h3>Follow</h3>
      <!-- sicial links -->
      <a class="hero_social_link" href="#"><i class="fa fa-facebook"></i></a>
      <a class="hero_social_link" href="#"><i class="fa fa-twitter"></i></a>
      <a class="hero_social_link" href="#"><i class="fa fa-linkedin"></i></a>
      <a class="hero_social_link" href="#"><i class="fa fa-instagram"></i></a>
    </div>
    <div class="footer_copy_right">
      <p>&#x24B8; 2035 by Maya Nelson</p>
      <p>
        Powered and secured by
        <a
          class="footer_wix_link"
          alt="link to wix website"
          href="https://wix.com/?utm_campaign=vir_created_with"
          >Wix.com</a
        >
      </p>
      <p>
        The design of this website was made by
        <a
          class="footer_wix_link"
          alt="link to wix website"
          href="https://wix.com/?utm_campaign=vir_created_with"
          >Wix.com</a
        >
        , and is being used here for educational purposes only.
      </p>
    </div>
  </footer>
  
      `;
  }
}

customElements.define("footer-component", Footer);
