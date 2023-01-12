<script lang="ts">
    import { prompt } from './stores/input.store'
	import { tweened } from "svelte/motion";
	import { fade } from "svelte/transition";
  	import { circOut } from "svelte/easing";
    import ButtonBar from './components/ButtonBar.svelte'

	const finalValue = $prompt.target / ($prompt.weekly || 1) || 0
	const duration = 3000
	let percent = tweened(0, {
		duration,
		easing: circOut,
		interpolate: (_, to) => (t) => Math.round(to*t),
	});
	$: $percent = Math.round(finalValue * 100)

	
	const years = Math.floor(finalValue / 52)
	const weeks = Math.floor(finalValue - years * 52)
	const days = Math.floor((finalValue * 7 - (years * 52 + weeks) * 7)*100)/100

	const yearDelay = duration + 500 * (years / (years || 1))
	const weekDelay = yearDelay + 500 * (weeks / (weeks || 1))
	const dayDelay = weekDelay + 500 * (days / (days || 1))
	const endDelay = dayDelay + 500
</script>

<h2>Here you go</h2>
<p>You seek something worth <strong>{$percent}%</strong> of your weekly salary</p>
<h3>
	<span in:fade={{delay:duration}}>That is to say working for</span>
	<span in:fade={{delay:yearDelay}}> {#if years != 0}<strong>{years}</strong> years{/if}</span>
	<span in:fade={{delay:weekDelay}}>{#if weeks != 0}<strong>{weeks}</strong> weeks{/if}</span>
	<span in:fade={{delay:dayDelay}}>
		{#if weeks + years != 0 && days != 0} and{/if}
		{#if days != 0} <strong>{days}</strong> days{/if}
	</span>
	<span in:fade={{delay:endDelay}}>straight.</span>
</h3>
<p in:fade={{delay: endDelay + 500}}>Do you still think it's worth it ?</p>
<small in:fade={{delay: endDelay + 1000}}>Notice that we never asked you your currency. It is not relevant.</small>
<ButtonBar on:next on:previous>
	<span slot="next-label">Restart</span>
</ButtonBar>


<style lang="sass">
h2::after
	animation: clock 12s linear infinite
	content: " 🕐"

@keyframes clock
	0%
		content: " 🕛"
	8.3%
		content: " 🕐"
	16.6%
		content: " 🕑"
	25%
		content: " 🕒"
	33.3%
		content: " 🕓"
	41.6%
		content: " 🕔"
	50%
		content: " 🕕"
	58.3%
		content: " 🕖"
	66.6%
		content: " 🕗"
	75%
		content: " 🕘"
	83.3%
		content: " 🕙"
	91.6%
		content: " 🕚"
	100%
		content: " 🕛"
</style>