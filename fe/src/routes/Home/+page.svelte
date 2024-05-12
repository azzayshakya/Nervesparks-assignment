<script >
  import { onMount } from 'svelte';
  import Navbar from '../component/Navbar.svelte';
    import { goto } from '$app/navigation';
  // import { goto } from '@sveltejs/kit';

  let authToken = localStorage.getItem('authToken');
  let userType = '';
  let selectedCar = null;

  function getUserTypeFromToken() {
    if (authToken) {
      const decodedToken = atob(authToken.split('.')[1]);
      const { type } = JSON.parse(decodedToken);
      userType = type;
      console.log('User Type:', userType);
    } else {
      console.log('No auth token found');
    }
  }
 /** @type {Array<{ name: string, model: string, car_info: string, type: string, id: string }>} */
 let cars = [];
  async function fetchCards() {
    try {
      const response = await fetch('http://localhost:4000/cars', {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      });
      const data = await response.json();
      cars = data.data;
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  }
  // function handleButtonClick(car: { name: string, model: string, car_info: string, type: string, id: string }) {
  //   selectedCar = car;
  //   goto(`/CarDetails/${car.id}`) // Navigate to child component with car id
  // }
  // function handleButtonClick(car: { name: string, model: string, car_info: string, type: string, id: string }) {
  //   selectedCar = car;
  //   goto(`/CarDetails/${car.id}`)
  // }
 

  onMount(async () => {
    getUserTypeFromToken();
    if (authToken) {
      await fetchCards();
    } else {
      console.log('No auth token found');
    }
  });
</script>

<Navbar />

<div>
  <ul>
    {#each cars as car}
      <li>
        <h2>{car.name}</h2>
        <p>Model: {car.model}</p>
        <p>Info: {car.car_info}</p>
        <p>Type: {car.type}</p>
        <p>ID: {car.id}</p>
        {#if userType === 'user'}
          <button >Buy</button>
        {:else if userType === 'dealership'}
        <button on:click={() => (car.id)}>Add to Cars</button>
        {/if}
      </li>
    {/each} 
  </ul>
</div>
