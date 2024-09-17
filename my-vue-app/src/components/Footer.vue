<template>
    <footer class="footer">
        <div class="container">
        <p>&copy; 2024 Mon Site de Renforcement JS - Tous droits réservés</p>
        <ul class="footer-links">
            <li><a href="#">Mentions légales</a></li>
            <li><a href="#">Politique de confidentialité</a></li>
            <li><a href="#">Conditions générales d'utilisation</a></li>
        </ul>
        </div>
    </footer>
</template>
 
  <script>
  export default {
    name: 'MonFooter',
  }
  </script>
 
<style scoped>
    .footer {
        background-color: #424242;
        color: white;
        padding: 12px 0;
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
    }

    .footer p {
        margin: 0;
        font-size: 14px;
    }

    .footer-links {
        list-style-type: none;
        padding: 0;
        margin: 10px 0 0;
    }

    .footer-links li {
        display: inline;
        margin: 0 7px;
    }

    .footer-links a {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
    }

    .footer-links a:hover {
        text-decoration: underline;
    }
</style>

