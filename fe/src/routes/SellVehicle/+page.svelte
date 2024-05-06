<script>
    let carName = '';
    let model = '';
    let type = '';
    let about = '';
  
    const sellCar = async () => {
      try {
        const formData = new FormData();
        formData.append('carName', carName);
        formData.append('model', model);
        formData.append('type', type);
        formData.append('about', about);
  
        const response = await fetch('http://localhost:4000/sellCar', {
          method: 'POST',
          body: formData
        });
  
        const json = await response.json();
  
        if (!json.success) {
          alert(json.error || 'Failed to sell car');
        } else {
          alert(json.message || 'Car sold successfully');
        }
      } catch (error) {
        console.error(error);
        alert('An error occurred while selling the car');
      }
    }
  </script>
  
  <div>
    <h1>Sell Your Car</h1>
    <form on:submit|preventDefault={sellCar}>
      <label for="carName">Car Name:</label>
      <input type="text" id="carName" bind:value={carName} required/>
  
      <label for="model">Model:</label>
      <input type="text" id="model" bind:value={model} required/>
  
      <label for="type">Type:</label>
      <input type="text" id="type" bind:value={type} required/>
  
      <label for="about">About:</label>
      <textarea id="about" bind:value={about} required/>
  
      <button type="submit">Sell Car</button>
    </form>
  </div>
  