const sliderMenuHTML = `
<div class="slider-menu slidingEffect">
  <ul>
    <li class="">
      <a href="/" class="">Home</a>
    </li>
    <li class="">
      <a href="about.html" class="">About</a>
    </li>
    <li class="">
      <a href="products.html" class="">Product</a>
    </li>
    <li class="">
      <a href="contact.html" class="">Contact</a>
    </li>
  </ul>
</div>`;

const sliderMenuElem = document.querySelector('.slider-menu-container');

sliderMenuElem.insertAdjacentHTML('afterbegin', sliderMenuHTML);