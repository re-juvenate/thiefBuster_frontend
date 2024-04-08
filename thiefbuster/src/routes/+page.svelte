<!-- before scrolled -->

<nav class="navbar" class:scrolled={show}>
  <ul class="navbar-list">
    <li><img src="../src/assets/images/logo.png" alt="Logo"></li>
        <li><a href="#about">About</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#etc">Etc</a></li>
        <a style="--clr: #7808d0; float: right;" class="button" href="#demo">
            <span class="button__icon-wrapper">
              <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                  <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
              </span>
              Try the Demo
            </a>
    </ul>
</nav>

<!-- after scrolled -->
<nav class:scrolled={show} style="margin-top: 10px;">
  {#if show}
  <nav class="navbar">
    <ul class="navbar-list">
        <li><img src="../src/assets/images/logo.png" alt="Logo"></li>
        <a style="--clr: #7808d0; float: right;" class="button" href="#demo">
            <span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                     <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            Try the Demo
        </a>
    </ul>
</nav>
  {/if}
</nav>

<!-- Page elements -->
<h1 class="title"><span class="pinyon-script">T </span>HIEF BUSTER</h1>
<p class="subtitle">Your AI companion for catching criminals.</p>
<p></p>

<!-- CSS -->
<style>
    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
  
    @font-face{
        font-family: HelveticaDisplay;
        src: url("../src/assets/fonts/HelveticaNowDisplay-Regular.otf")
    }

    *{
        font-family: HelveticaDisplay;
    }
    @font-face {
    font-family: Roslindale;
    src: url("../src/assets/fonts/RoslindaleVariableDisplay.ttf");
    }


    
    .roslindale{
    
        font-family: Roslindale;
    }

    .pinyon-script{
    font-family: "Pinyon Script", cursive;
    font-weight: 400;
    font-size: 23vh;
    font-style: normal;
    }
    
    .helveticaDisplay{
        font-family: helveticaDisplay;
    }

    .scrolled {transform: translate(0,calc(-100% - 1rem))}
    
    nav {
      position: fixed;
      transition: 0.5s ease      
    }
    
    :global(body) {
        margin: 0;
        padding: 0;
        height: 200vh;
    }

    .subtitle{
        font-family: helveticaDisplay;
        font-weight: 300;
        font-size: 1.4rem;
        margin-top: 0rem;
        margin: 0 auto;
        text-align: center;
        align-items: center;
    }

    .title {
        font-family: roslindale;
        font-weight: lighter;
        height: 0vh;
        font-size: 6rem;
        margin: 25vh auto;
        text-align: center;
        align-items: center;
    }
    .navbar {
        position: sticky;
        top: 0;
        background-color: transparent;
        padding: 10px;
        transition: background-color 0.5s ease;
    }
    
    .navbarscrolled {
        background-color: #333; /* Change this to the color you want when scrolled */
    }
    
    .navbar-list {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    
    .navbar-list li {
        float: left;
    }
    .button {
      line-height: 1;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: .75rem;
      background-color: var(--clr);
      color: #fff;
      border-radius: 10rem;
      font-weight: 600;
      padding: .75rem 1.5rem;
      padding-left: 20px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: background-color .3s;
    }
    
    .button__icon-wrapper {
      flex-shrink: 0;
      width: 25px;
      height: 25px;
      position: relative;
      color: var(--clr);
      background-color: #fff;
      border-radius: 50%;
      display: grid;
      place-items: center;
      overflow: hidden;
    }
    
    .button:hover {
      background-color: #000;
    }
    
    .button:hover .button__icon-wrapper {
      color: #000;
    }
    
    .button__icon-svg--copy {
      position: absolute;
      transform: translate(-150%, 150%);
    }

    .button:hover .button__icon-svg:first-child {
      transition: transform .3s ease-in-out;
      transform: translate(150%, -150%);
    }

    .button:hover .button__icon-svg--copy {
      transition: transform .3s ease-in-out .1s;
      transform: translate(0);
    }
    .navbar-list li a {
        display: block;
        color: #333;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    .navbar-list li a:hover {
        text-decoration: underline;
    }
</style>

<!-- Script -->
<script>
  import {onMount, onDestroy} from 'svelte'
  const scrollNavBar = 60
  let show = false
  onMount(() => {
      window.onscroll = () => {
          if (window.scrollY > scrollNavBar) {
              show = true
          } else {
              show = false
          }
      }
  })
  
  onDestroy(() => {
      window.onscroll = () => {}
  })
</script>
