<template>
    <div>
      <button @click="addItem">Ajouter un article</button>
      <ul class="item-list">
        <li v-for="(item, index) in items" :key="index" class="item" @click="deleteItem(index)">
          <span class="item-name">{{ item.name }}</span> 
          <span class="item-quantity"> (Quantité : {{ item.quantity }})</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MonButton',
    data() {
      return {
        items: [] // Liste pour stocker les items récupérés
      };
    },
    methods: {
      addItem() {
        const item = { name: 'Nouvel Article', quantity: 1 };
        axios.post('http://localhost:8080/api/add-item', item)
          .then(response => {
            console.log(response.data);
            this.fetchItems(); // Récupérer les items après avoir ajouté un nouvel item
          })
          .catch(error => {
            console.error(error);
          });
      },
      fetchItems() {
        axios.get('http://localhost:8080/api/items')
          .then(response => {
            this.items = response.data; // Mettre à jour les items récupérés
          })
          .catch(error => {
            console.error(error);
          });
      },
      deleteItem(index) {
        // Envoyer une requête DELETE avec l'index de l'élément
        axios.delete(`http://localhost:8080/api/items/${index}`)
          .then(response => {
            console.log(response.data);
            this.fetchItems(); // Actualiser la liste après suppression
          })
          .catch(error => {
            console.error(error);
          });
      }
    },
    mounted() {
      // Récupérer les items quand le composant est monté
      this.fetchItems();
    }
  };
  </script>
  
  <style scoped>
  /* Style pour le bouton */
  button {
    padding: 10px 20px;
    background-color: #008fbf;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #0071b2;
  }
  
  /* Style pour la liste */
  .item-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  
  /* Style pour chaque item de la liste */
  .item {
    background-color: #f9f9f9;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  }
  
  .item-name {
    font-weight: bold;
    font-size: 18px;
    color: #333;
  }
  
  .item-quantity {
    font-size: 14px;
    color: #666;
  }
  
  .item:hover {
    background-color: #f0f0f0;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  </style>
  