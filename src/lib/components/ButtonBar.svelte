<div class="button-bar">
	<button on:click={previous} type="reset">🚶 Back</button>
	<button on:click={next} type="submit"><slot name="next-label">Next 👉</slot></button>
</div>

<script lang="ts">
	import { createEventDispatcher, } from 'svelte'

	const dispatch = createEventDispatcher();
	const previous = () => dispatch("previous")
	const next = () => dispatch("next")
</script>

<style lang="sass">
.button-bar
	display: flex
	flex-flow: row nowrap
	justify-content: space-between
	margin-top: 2rem
</style>