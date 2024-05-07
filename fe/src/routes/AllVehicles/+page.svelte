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
      // vehicles = await AllVehicle();
    });  
  </script>
  
  <div>
    <Navbar />
    
    <h1>Welcome to the Vehicle Page</h1>
    <p>All vehicle page.</p>
  
    <!-- <ul>
      {#each vehicles as vehicle}
        <li>
          <h2>{vehicle.name}</h2>
          <p>Model: {vehicle.model}</p>
          <p>Info: {vehicle.car_info}</p>
          <p>Type: {vehicle.type}</p>
          <p>ID: {vehicle.id}</p>
        </li>
      {/each} 
    </ul> -->


      <ul>
        <li>
          <p><span>name :</span>jflkasdjl</p>
          <p><span>name :</span>hkhfjsdhflsd</p>
          <p><span>name :</span>ehy  </p>
          <p><span>name :</span>fhadskjhf</p>
        </li>

        <li>
          <p>jflkasdjl</p>
          <p>hkhfjsdhflsd</p>
          <p>ehy  </p>
          <p>fhadskjhf</p>
        </li>

        
        <li>
          <p>jflkasdjl</p>
          <p>hkhfjsdhflsd</p>
          <p>ehy  </p>
          <p>fhadskjhf</p>
        </li>

        
        <li>
          <p>jflkasdjl</p>
          <p>hkhfjsdhflsd</p>
          <p>ehy  </p>
          <p>fhadskjhf</p>
        </li>

        
        <li>
          <p>jflkasdjl</p>
          <p>hkhfjsdhflsd</p>
          <p>ehy  </p>
          <p>fhadskjhf</p>
        </li>

        
        <li>
          <p>jflkasdjl</p>
          <p>hkhfjsdhflsd</p>
          <p>ehy  </p>
          <p>fhadskjhf</p>
        </li>

      </ul>
  



  </div>


  <style>
    ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      border: 1px red solid;

      
    }
    ul li{
      font-size: 20px;
      text-decoration: none;
      list-style-type: none;
      width: 200px;
      border: 1px rgb(39, 38, 38) solid;
      margin: 10px 10px;


      border-radius: 52px;
    /* border: 2px rgb(213, 213, 213) solid; */
    /* border: 2px black solid; */
    padding: 20px;
    margin: 20px;
    min-width:250px ;
    /* width: 380px; */
    min-height: 200px;
    /* border: 2px red solid; */
    background-color: white;
    /* border: 2px blue solid; */
    background: rgba( 255, 255, 255, 0.4);
   backdrop-filter:blur(10px) ;

   
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      

      
      

    }

    ul li span{
      color: red;
    }


  </style>
  