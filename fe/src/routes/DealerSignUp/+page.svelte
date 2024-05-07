<script>
  import Navbar from '../component/Navbar.svelte'; 
  
  let name = '';
  let email = '';
  let phoneNumber = '';
  let password = '';
  let showPopup = false;
  let signUpButton = true;
  let selectedRole = '';
  let location = ''; // Add a new variable for the location field

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
        location // Include the location in the form data
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

<Navbar/>

<h1>Sign Up</h1>

<form on:submit|preventDefault={handleSignUp}>
  <label for="name">Name:</label>
  <input type="text" id="name" bind:value={name} required />

  <label for="email">Email:</label>
  <input type="email" id="email" bind:value={email} required />

  <label for="phoneNumber">Phone Number:</label>
  <input type="tel" id="phoneNumber" bind:value={phoneNumber} required />

  <label for="password">Password:</label>
  <input type="password" id="password" bind:value={password} required />

  <label for="userType">User Type:</label>
  <select bind:value={selectedRole} required>
    <option value="admin">Admin</option>
    <option value="user">User</option>
    <option value="dealership">Dealership</option>
  </select>

  {#if selectedRole === 'dealership'} <!-- Show location field only if user type is 'dealership' -->
    <label for="location">Location:</label>
    <input type="text" id="location" bind:value={location} required />
  {/if}

  {#if showPopup}
    <div>Please Wait!</div>
  {/if}

  <button type="submit" disabled={!signUpButton}>Sign Up</button>
</form>

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
</style>
