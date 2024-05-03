<!-- Header.svelte -->

<script>
    // import { navigate } from 'svelte-routing';

    import login from '../pages/Login.svelte';
    // You can add any logic here, such as handling login/signup actions
    function handleLogin() {
      // Logic for handling login
      console.log("Login clicked");
      window.location.href = '/login';
    }
  
    function handleSignup() {
      // Logic for handling signup
      console.log("Signup clicked");
      
    }
  </script>
  
  <div class="header">
    <div class="Vdekho">
        V dekho
    </div>
    <div class="navbarmid">
        <ol>
            <li>Home</li>
            <li>
                About
            </li>       
        </ol>
    </div>
    
    <div>
      <button class="button" on:click={handleLogin}>Login</button>
      <button class="button" on:click={handleSignup}>Signup</button>
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
    .navbarmid ol{
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        

        
    }
    .navbarmid ol li{
        padding: 0px 10px;
        
        list-style-type: none;
        
        
    }
  </style>