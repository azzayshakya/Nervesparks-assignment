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
        let showPopup = false;
        let signInButton = true;
      
        async function handleSubmit() {
          signInButton = false;
          showPopup = true;
      
          try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('password', password);
      
            const response = await fetch('http://localhost:4000/DealerLogin', {
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
          
                localStorage.setItem("DealerauthToken",json.DealerauthToken)
                localStorage.setItem("DealerEmail",email)
                console.log("Dealer data baby",localStorage.getItem("DealerEmail"),localStorage.getItem("DealerauthToken"))
                alert(json.message)
                goto("/")
    
            }
      
          
            
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
    
      
      <h1>Dealer Login</h1>
      
      <form on:submit={handleSubmit}>
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} required />
      
        <label for="password">Password:</label>
        <input type="password" id="password" bind:value={password} required />
    
    
      
      
        {#if showPopup}
          <div>Please Wait!</div>
        {/if}
      
        <button type="submit" disabled={!signInButton}>Login</button>
    
    
    
        <div >
            <button class="homebutton" on:click={handleHomeClick}>Go To Home</button>
           </div>
      </form>
      
    
    
    <style>
      /* Vertical alignment */
      form {
        display: flex;
        flex-direction: column;
        align-items: center; /* Align items vertically */
      }
    
      /* Add margin to the home button */
      .homebutton {
        margin-top: 10px;
      }
      </style>