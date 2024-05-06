<script>
	// import Signup from './Signup.svelte';


import Navbar from '../component/Navbar.svelte'; 

import { goto } from '$app/navigation';
    import Home from "../Home/+page.svelte"
    // import Dealerlogin from '../DealerAuth/Login.svelte'
    // import DealerSignup from '../DealerAuth/Signup.svelte'


    function handleLogin() {
      console.log("Login clicked");
      goto('DealerLogin');
    }
  
    function handleSignup() {
      // console.log("Signup clicked");
      goto('DealerSignUp');
    }
    function handleLogout(){
      localStorage.removeItem("DealerauthToken");
      goto("Home")
    }


</script>


<div>

  <Navbar/>
  
<h1>dealler Page</h1>

{#if localStorage.getItem("DealerauthToken")}
 <div>
  you  are already in.
  <button class="button" on:click={handleLogout}>Logout</button>
 </div>
        {:else}
        <div class="butotn">
          <button class="button" on:click={handleLogin}> dealer Login</button>
          <button class="button" on:click={handleSignup}>Signup</button>
        
        </div>
        {/if}



<div>
  <button class="button" on:click={handleLogout}>Logout</button>

</div>
</div>




  


<style>
  
  </style>