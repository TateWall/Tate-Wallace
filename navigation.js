// navigation.js
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.createElement("nav");
  nav.className = "site-nav";

  nav.innerHTML = `
    <ul>
      <li><a href="index.html">Marketing Portfolio</a></li>
      <li><a href="about.html">About Me</a></li>
      <li><a href="interests.html">Personal Interests</a></li>
      <li><a href="services.html">Services Available</a></li>
    </ul>
  `;

  document.body.appendChild(nav);
});

