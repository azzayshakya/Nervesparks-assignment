<script>

	import './styles.css';
	
	
</script>

<div class="app">
	<div>
		<slot/>
	</div>


</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
