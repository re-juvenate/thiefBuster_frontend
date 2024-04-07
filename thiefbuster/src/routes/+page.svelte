<nav class="navbar">
    <ul class="navbar-list">
        <li><img src="logo.png" alt="Logo"></li>
        <li><a href="#about">About</a></li>
        <li><a href="#usage">Usage</a></li>
        <li><a href="#etc">Etc</a></li>
    </ul>
</nav>

<h1 class="title"><span class="pinyon-script">T </span>HIEF BUSTER</h1>
<p class="subtitle">Your AI companion for catching thieves.</p>

<style>

    @font-face{
        font-family: HelveticaDisplay;
        src: url("../src/assets/fonts/HelveticaNowDisplay-Regular.otf")
    }
    @font-face {
    font-family: Roslindale;
    src: url("../src/assets/fonts/RoslindaleVariableDisplay.ttf");
    }

    @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap')

    
    .roslindale{
        font-family: Roslindale;
    }

    .pinyon-script{
    font-family: "Pinyon Script", cursive;
    font-weight: 400;
    font-size: 23vh;
    font-style: normal;
    }
    
    .subtitle{
        font-weight: 300;
        font-size: 1rem;
        margin: 0 auto;
        text-align: center;
        align-items: center;
    }

    .title {
        font-family: roslindale;
        font-weight: lighter;
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

<script>
    import { onMount } from 'svelte';

    onMount(() => {
        const navbar = document.querySelector('.navbar');

        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar instanceof HTMLElement && window.scrollY > navbar.offsetHeight) {
                navbar.classList.add('scrolled');
            } else {
                if (navbar) {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    });
</script>