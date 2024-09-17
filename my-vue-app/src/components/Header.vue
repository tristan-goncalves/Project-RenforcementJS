<template>
    <header>
        <nav class="navbar">
        <div class="logo">
            <a href="#">Mon Site de Renforcement JS</a>
        </div>
        <ul class="nav-links">
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À propos</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        </nav>
    </header>
</template>
 
  <script>
  export default {
    name: 'MonHeader',
  }
  </script>
 
<style scoped>
    header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
        font-weight: bold; 
    }

    body {
        padding-top: 60px; 
    }

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px;
        padding-left: 30px;
        padding-right: 30px;
        background-color: #424242;
    }

    .logo a {
        color: #fff;
        text-decoration: none;
        font-size: 24px;
    }

    .nav-links {
        list-style: none;
        display: flex;
    }

    .nav-links li {
        margin-left: 20px;
    }

    .nav-links a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
    }
</style>

