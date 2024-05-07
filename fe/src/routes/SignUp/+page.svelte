<script>
  import Navbar from '../component/Navbar.svelte'; 
  
  let name = '';
  let email = '';
  let phoneNumber = '';
  let password = '';
  let showPopup = false;
  let signUpButton = true;
  let selectedRole = '';
  let location = ''; 
  let DealerInfo =" ";// Initialize DealerInfo as null
  let UserInfo =" ";  // Initialize UserInfo as null

  // Add a new variable for the location field

  async function handleSignUp() {
    signUpButton = false;
    showPopup = true;

    try {
      const formData = {
        name,
        email,
        phoneNumber,
        password,
        selectedRole,
        location, // Include the location in the form data,
        DealerInfo,
        UserInfo
      };

      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'Failed to sign up');
      }
      alert('Sign up successful');
    } catch (error) {
      console.error(error);
      alert('An error occurred while signing up');
    } finally {
      showPopup = false;
      signUpButton = true;
    }
  }
</script>


<div class="page">


<Navbar/>


<div class="loginform">





<h1>Sign Up</h1>

<form on:submit|preventDefault={handleSignUp}>
  <div class="rowinform">
    <div class="leftside">
    <label for="name">Name:</label>


    </div>
  <input type="text" id="name" bind:value={name} required />

  </div>

  <div class="rowinform">
    <div class="leftside">
      <label for="email">Email:</label>
          

    </div>
  <input type="email" id="email" bind:value={email} required />

  </div>

  <div class="rowinform">
    <div class="leftside">
  <label for="phoneNumber">Phone Number:</label>

      
    </div>
  <input type="tel" id="phoneNumber" bind:value={phoneNumber} required />

  </div>
  <div class="rowinform">

    <div class="leftside">
  <label for="password">Password:</label>

      
    </div>
  <input type="password" id="password" bind:value={password} required />

  </div>
  <div class="rowinform">
    <div class="leftside">
  <label for="userType">User Type:</label>

      
    </div>
    <select class="rightside" bind:value={selectedRole} required>
      <option value="" disabled selected>Select User Type</option>
      <!-- <option value="admin">Admin</option> -->
      <option value="user">User</option>
      <option value="dealership">Dealership</option>
    </select>
  </div>

  {#if selectedRole === 'dealership' || selectedRole === 'user'} <!-- Show location field only if user type is 'dealership' or 'user' -->
 
  <div class="rowinform">
    <div class="leftside">
    <label for="location">Location:</label>


      
    </div>
    <input type="text" id="location" bind:value={location} required />

  </div>

  {/if}

  {#if selectedRole === 'dealership'}
  <div class="rowinform">
    <div class="leftside">
    <label for="DealerInfo">Dealer Info:</label>

      
    </div>
    <input type="text" id="DealerInfo" bind:value={DealerInfo} required />

  </div>
  {/if}

  {#if selectedRole === 'user'} <!-- Show UserInfo field only if user type is 'user' -->
   
  <div class="rowinform">
    <div class="leftside">
      <label for="UserInfo">User Info:</label>
      
    </div>
    <input type="text" id="UserInfo" bind:value={UserInfo} required />

  </div>
  {/if}
  
  



   <!-- Show DealerInfo field only if user type is 'dealership' -->
 

  


  {#if showPopup}
    <div class="bottominform">Please Wait!</div>
  {/if}
  <div class="bottominform">
  <button type="submit" disabled={!signUpButton}>Sign Up</button>


  </div>

</form>

</div>
</div>

<style>
  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 5px;
  }

  input {
    margin-bottom: 10px;
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    margin-top: 10px;
    padding: 8px 15px;
    border-radius: 5px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }



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
    min-height: 450px;
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
        /* border: 2px red solid;
         */
        
        color: black;
        background-color: rgb(216, 215, 215);
        border: black 1px solid;

}


</style>
