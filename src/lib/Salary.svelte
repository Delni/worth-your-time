<article>
	<h2>How much do you earn ?</h2>
	<small>Money is just the common value of your time.</small>

	<div class="input-group">
		<label for="weekly-income">Weekly income</label>
		<input type="number" name="weekly-income" id="weekly-income" bind:value={$prompt.weekly} on:change={inferYM} on:input={inferYM} on:submit={next}/>
	</div>
	<div class="input-group">
		<label for="monthly-income">Monthly income</label>
		<input type="number" name="monthly-income" id="monthly-income" bind:value={monthly} on:change={inferYW} on:input={inferYW} on:submit={next}/>
	</div>
	<div class="input-group">
		<label for="yearly-income">Yearly income</label>
		<input type="number" name="yearly-income" id="yearly-income" bind:value={yearly} on:change={inferMW} on:input={inferMW} on:submit={next}/>
	</div>
	<ButtonBar on:next on:previous/>
</article>


<script lang="ts">
	import ButtonBar from './components/ButtonBar.svelte';
	import {prompt} from './stores/input.store'
	import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher();
	const next = () => dispatch("next")

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
</script>


<style lang="sass">
article
	display: flex
	flex-flow: column nowrap
	max-width: 500px
	padding: 2rem
	margin: auto
	gap: 1rem
	h2
		margin-bottom: 0
	small
		margin-bottom: 2rem
	.input-group
		display: flex
		flex-flow: row nowrap
		justify-content: space-between

	input[type=number]
		border: 0
		border-bottom: 1px solid #fff
		background: #ffffff11
		text-align: right
</style>