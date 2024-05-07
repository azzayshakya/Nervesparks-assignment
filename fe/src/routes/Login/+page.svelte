<script>
	

  import Navbar from '../component/Navbar.svelte'; 
  
  import { goto } from '$app/navigation';
      import Home from "../Home/+page.svelte"
  
  
      function handleHomeClick() {
        // Logic for handling login
        console.log("Login clicked");
        goto('Home');  
      }
  
  
  
  
  
  
      let email = '';
      let password = '';
      let selectedRole = '';
      let showPopup = false;
      let signInButton = true;
    
      async function handleSubmit() {
        console.log(email,password,selectedRole)
        signInButton = false;
        showPopup = true;
    
        try {
          const formData = new FormData();
          formData.append('email', email);
          formData.append('password', password);
          formData.append('selectedRole',selectedRole)
    
          const response = await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(Object.fromEntries(formData))
          });
    
          const json = await response.json();
    
          if(!json.success){
              alert(json.message)
          }
          if(json.success){
        
              localStorage.setItem("authToken",json.authToken)
              localStorage.setItem("userEmail",email)
              console.log("datababy",localStorage.getItem("authToken"),localStorage.getItem("userEmail"))
              alert(json.message)
              goto("/")
  
          }
    
          localStorage.setItem('authToken', json.authToken);
          localStorage.setItem('userEmail', email);
          alert('Login successful');
        } catch (error) {
          console.error(error);
          alert('An error occurred while logging in');
        } finally {
          showPopup = false;
          signInButton = true;
        }
      }
  </script>
  
  <Navbar/>

  <div class="page">

  <div class="loginform">

  
    
    <h1>Login</h1>
    
    <form on:submit={handleSubmit}>
      <div class="rowinform">

        <div class="leftside">
        <label class="label" for="email">Email:</label>
        </div>


        <div>
        <input type="email" id="email" bind:value={email} required />
        </div>

      </div>

      <div class="rowinform">
        <div class="leftside">
        <label class="label" for="password">Password:</label>
      </div>
        <div>
      <input type="password" id="password" bind:value={password} required />


        </div>

      </div>

      <div class="rowinform">
       <div class="leftside">
        <label class="label" for="userType">User Type:</label>
       </div>
  <select class="rightside" bind:value={selectedRole} required>
    <option value="" disabled selected>Select User Type</option>
    <option value="user">User</option>
    <option value="dealership">Dealership</option>
  </select>



      </div>
     
    
      

      
  
  
    
    
      {#if showPopup}
        <div  class="bottominform">Please Wait!</div>
      {/if}

      <div  class="bottominform" >
      <button type="submit" disabled={!signInButton}>Login</button>


      </div>
    
  
  
  
      <!-- <div >
          <button class="homebutton" on:click={handleHomeClick}>Go To Home</button>
         </div>
    </form> -->

  </div>
    
  
      
</div>
  <style>

    .page{
      /* border: 2px red solid; */
      
     

    }
    /* Vertical alignment */
    form {
      display: flex;
      flex-direction: column;
      align-items: center; /* Align items vertically */
    }


  
    /* Add margin to the home button */
    .homebutton {
      margin-top: 10px;}

      .loginform{
        border-radius: 52px;
    /* border: 2px rgb(213, 213, 213) solid; */
    border: 2px black solid;
    padding: 20px;
    margin: 20px;
    width:300px ;
    /* width: 380px; */
    height: 300px;
    /* border: 2px red solid; */
    background-color: white;
    /* border: 2px blue solid; */
    background: rgba( 255, 255, 255, 0.4);
   backdrop-filter:blur(10px) ;
   
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;

      margin-left: 35%;

      }

      .loginform .rowinform{
        margin-top: 20px;
        
      }

      .loginform .rowinform{
        margin-top: 20px;
        /* border: 2px blue solid; */
        width: 250px;
        display: flex;
        align-items: center;
        
      }
      .loginform .rowinform .leftside{
        /* border: 2px red solid; */
        width: 150px;
      }

      .loginform .rowinform label{
       /* border: 2px red solid; */
       font-size: 15px;
      }
      .loginform .rowinform input{
       /* border: 2px red solid; */
       font-size: 15px;
       width: 150px;
       padding: 5px;


      }
      .loginform .rowinform .rightside{
       /* border: 2px red solid; */
       font-size: 15px;
       padding: 5px 0px;
       padding-left: 25px;
       /* width: 100px; */

       

      }
      .loginform .bottominform{
        margin-top:20px;
        
      }
      .loginform .bottominform button{
        /* margin-top:20px; */
        width: 100px;
        font-size: 15px;
        font-weight: 500;
        padding: 5px;
        
      }

</style>