<script>
    import { onMount } from 'svelte';
    import Navbar from '../component/Navbar.svelte';
  
      /** @type {Array<{ name: string, photo: string, model: string, info: string, id: string }>} */
  let vehicles = [];
  
    const AllVehicle = async () => {
      try {
        const response = await fetch('http://localhost:4000/AllVehicle', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const json = await response.json();
  
        if (!json.success) {
          alert(json.message);
        } else {
          return json.data;
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while fetching vehicle data');
      }
    }
  
    onMount(async () => {
      vehicles = await AllVehicle();
    });
  </script>
  
  <div>
    <Navbar />
    
    <h1>Welcome to the Vehicle Page</h1>
    <p>All vehicle page.</p>
  
    <ul>
      {#each vehicles as vehicle}
        <li>
          <h2>{vehicle.name}</h2>
          <img src={vehicle.photo} alt={vehicle.name} style="max-width: 200px;"/>
          <p>Model: {vehicle.model}</p>
          <p>Info: {vehicle.info}</p>
          <p>ID: {vehicle.id}</p>
        </li>
      {/each}
    </ul>
  </div>
  