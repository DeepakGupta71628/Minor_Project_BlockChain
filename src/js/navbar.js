let nav = document.querySelector("#navbar-custom");

nav.innerHTML = `

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a style="margin-left: 60px; font-size: 3.5em; font-family: 'Nerko One', cursive;" class="navbar-brand" href="/">
  <img src="./img/college.png" width="90px" loading="lazy"/> BlockVote
</a>

<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a style="font-size: 1.1em;" class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a style="font-size: 1.1em; margin-left: 30px; margin-right: 35px;" class="nav-link" href="./how-it-works.html">How it Works</a>
    </li>
    <li class="nav-item">
      <button style="margin-right: 60px;" type="button" onClick="location.href='./vote.html'" class="btn-lg btn btn-warning">Cast Vote</button>
    </li>
  
  </ul>
</div>
</nav>`
