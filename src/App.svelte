<script lang="ts">
  import { fly } from 'svelte/transition';
  import Salary from './lib/Salary.svelte'
  import Target from './lib/Target.svelte'
  import Result from './lib/Result.svelte'

  let page = 0
</script>

<main>
  {#if page == 0 }
  <div class="page" in:fly={{x: 1000 }} out:fly={{x: -1000 }}><Salary /></div>
  {:else if page == 1 }
  <div class="page" in:fly={{x: 1000 }} out:fly={{x: -1000 }}><Target /></div>
  {:else }
  <div class="page" in:fly={{x: 1000 }} out:fly={{x: -1000 }}><Result /></div>
  {/if}
  
</main>

<style lang=sass>
.page
  position: fixed
  top: 0
  left: 0
  width: 100vw
  // height: 100vh
</style>