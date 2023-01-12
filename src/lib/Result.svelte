<script lang="ts">
    import { prompt } from './stores/input.store'
	import { tweened } from "svelte/motion";
	import { fade } from "svelte/transition";
  	import { circOut } from "svelte/easing";
    import ButtonBar from './components/ButtonBar.svelte'


	let percent = tweened(0, {
		duration: 3000,
		easing: circOut,
		interpolate: (from, to) => (t) => Math.round(to*t),
	});
	$: $percent = Math.round($prompt.target / ($prompt.weekly || 1) * 100)

	$: years = Math.floor($percent / 100 / 52)
	$: weeks = Math.floor($percent / 100 - years * 52)
	$: days = Math.floor(($percent / 100 * 7 - (years * 52 + weeks) * 7)*10)/10
</script>

<h2>Here you go</h2>
<p>You seek something worth <strong>{$percent}%</strong> of your weekly salary</p>
<p in:fade={{delay: 3000}}>
	<span in:fade={{delay:3000}}>That is to say working for</span>
	<span in:fade={{delay:3500}}> {#if years != 0}<strong>{years}</strong> years{/if}</span>
	<span in:fade={{delay:4000}}>{#if weeks != 0}<strong>{weeks}</strong> weeks{/if}</span>
	<span in:fade={{delay:4500}}>
		{#if weeks + years != 0 && days != 0} and{/if}
		{#if days != 0} <strong>{days}</strong> days{/if}
	</span>
	<span in:fade={{delay:4750}}>straight.</span>
</p>
<p in:fade={{delay: 5500}}>Do you still think it's worth it ?</p>
<small in:fade={{delay: 6000}}>Notice that we never asked you your currency. It is not relevant.</small>
<ButtonBar on:next on:previous>
	<span slot="next-label">Restart</span>
</ButtonBar>