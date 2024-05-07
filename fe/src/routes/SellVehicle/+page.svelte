<script>
    let name = '';
    let model = '';
    let type = '';
    let car_info = '';
  
    const sellCar = async () => {
      try {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('model', model);
        formData.append('type', type);
        formData.append('car_info', car_info);
  
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
      <input type="text" id="name" bind:value={name} required/>
  
      <label for="model">Model:</label>
      <input type="text" id="model" bind:value={model} required/>
  
      <label for="type">Type:</label>
      <input type="text" id="type" bind:value={type} required/>
  
      <label for="about">About:</label>
      <textarea id="about" bind:value={car_info} required/>
  
      <button type="submit">Sell Car</button>
    </form>
  </div>
  