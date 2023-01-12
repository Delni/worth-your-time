<section>
	<h2>How much do you earn ?</h2>
	<small>Money is just the common value of your time</small>

	<div class="input-group">
		<label for="weekly-income">Weekly income</label>
		<input type="number" name="weekly-income" id="weekly-income" bind:value={$prompt.weekly} on:change={inferYM} on:input={inferYM} autofocus/>
	</div>
	<div class="input-group">
		<label for="monthly-income">Monthly income</label>
		<input type="number" name="monthly-income" id="monthly-income" bind:value={monthly} on:change={inferYW} on:input={inferYW}/>
	</div>
	<div class="input-group">
		<label for="yearly-income">Yearly income</label>
		<input type="number" name="yearly-income" id="yearly-income" bind:value={yearly} on:change={inferMW} on:input={inferMW}/>
	</div>
	<ButtonBar on:next on:previous/>
</section>


<script lang="ts">
	import ButtonBar from './components/ButtonBar.svelte';
	import {prompt} from './stores/input.store'
	import { onMount } from 'svelte'

	let monthly: number = 0
	let yearly: number = 0

	const inferYM = () => {
		monthly = $prompt.weekly * 4
		yearly = monthly * 12
	}

	const inferYW = () => {
		$prompt.weekly = monthly / 4
		yearly = monthly * 12
	}

	const inferMW = () => {
		monthly = yearly / 12
		$prompt.weekly = monthly / 4
	}

	onMount(inferYM)
</script>


<style lang="sass">
section
	gap: 1rem
	
	.input-group
		display: flex
		flex-flow: row nowrap
		justify-content: space-between
		align-items: center
</style>