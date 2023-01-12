<script>
    import { fade } from 'svelte/transition'
	export let withTransition = false
</script>


<h1>Is it worth?</h1>
<p in:fade={{delay: withTransition ? 500 : 0}}>Let's say that you want to buy something.</p>
<p in:fade={{delay: withTransition ? 1250 : 0}}>What <em>is</em> its value in <em>your</em> life?</p>
<p in:fade={{delay: withTransition ? 2500 : 0}}>
	<span>I mean, ok, you know the price, but this is so artificial!</span>
	<span>How much time do you need to be able to afford what you want</span>
</p>
<button on:click in:fade={{delay: withTransition ? 4000 : 0}}>Let's see &nbsp; 👉</button>

<style lang="sass">
	h1
		margin-top: 2rem
	button
		margin-top: 2rem
</style>