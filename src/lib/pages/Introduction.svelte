<script>
    import { fade } from 'svelte/transition'
</script>


<h1>Worth It</h1>
<p in:fade={{delay: 250}}>Let's say that you want to buy something.</p>
<p in:fade={{delay: 1000}}>What <em>is</em> its value ?</p>
<p in:fade={{delay: 1500}}>
	<span>I mean, ok, you know the price, but this is so artificial !</span>
	<span>How much time do you need to be able to afford what you want</span>
</p>
<button on:click in:fade={{duration: 2000}}>Next &nbsp; 👉</button>

<style lang="sass">
	h1
		margin: 0
</style>