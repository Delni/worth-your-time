<script>
    import ButtonBar from './components/ButtonBar.svelte'
	import { prompt } from './stores/input.store'
</script>

<section>
	<h2>What is the cost of that thing you want? 🤑</h2>
	<small>They tell you a price so you can't put a value on it</small>

	<input type="number" name="cost" id="cost" bind:value={$prompt.target} autofocus/>
	<ButtonBar on:next on:previous/>
</section>
