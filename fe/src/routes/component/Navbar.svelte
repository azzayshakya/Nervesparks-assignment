<script>
    import { goto } from '$app/navigation';
    import Home from '../Home/+page.svelte'
    import DealerAuth from '../DealerAuth/+page.svelte'
 
   
    function handleHome() {
      console.log("Home clicked");
      goto('/');
    }
  
    function handleLogin() {
      console.log("Login clicked");
      goto('Login');
    }
  
    function handleSignup() {
      console.log("Signup clicked");
      goto('SignUp');
    }

  
    function handleLogout() {
      console.log("Logout clicked");
      localStorage.removeItem('authToken');
      console.log("after remove item",localStorage.getItem("authToken"))
      // Navigate to home or any other appropriate page after logout
      goto('Home');
    }
    function handleDealer() {
     
      goto('DealerAuth');
    }
    function handleViewItem(){
       goto("") 
    }
  </script>
  
  <div class="header">
    <div class="Vdekho">
      V dekho
    </div>
    <div class="navbarmid">
      <ol>
        <li>
          <button class="button" on:click={handleHome}>Home</button>
        </li>
        <li>
            <button class="button" on:click={handleDealer}>Dealer</button>
        </li>
        <li>
            <button class="button" on:click={handleViewItem}>view vehical</button>
        </li>
        <li>
            <a href="/SellVehicle">Sell vehicle</a>
        </li>
      </ol>
    </div>
  
  
    <div>
        <!-- {#if localStorage.getItem("authToken")}
          <button class="button" on:click={handleLogout}>Logout</button>
        {:else}
          <button class="button" on:click={handleLogin}>Login</button>
          <button class="button" on:click={handleSignup}>Signup</button>
        {/if} -->
      </div>
  </div>
  
  <style>
    /* Add your styles for the header here */
    .header {
      background-color: #333;
      color: white;
      padding: 5px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
    }
  
    .button {
      padding: 8px 16px;
      background-color: #555;
      border: none;
      border-radius: 4px;
      color: white;
      cursor: pointer;
      margin-left: 10px;
    }
  
    .button:hover {
      background-color: #777;
    }
  
    .navbarmid ol {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    .navbarmid ol li {
      padding: 0px 10px;
      list-style-type: none;
    }
  </style>
  