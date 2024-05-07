<script>
    import { onMount } from 'svelte';
    import Navbar from '../component/Navbar.svelte';
  
      /** @type {Array<{ name: string, model: string, car_info: string, type:string,id: string }>} */
  let vehicles = [];
  
    const AllVehicle = async () => {
      try {
        const response = await fetch('http://localhost:4000/cars', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
  
        const json = await response.json();
        // console.log(json)
  
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
          <p>Model: {vehicle.model}</p>
          <p>Info: {vehicle.car_info}</p>
          <p>Type: {vehicle.type}</p>
          <p>ID: {vehicle.id}</p>
        </li>
      {/each} 
    </ul>
  </div>
  