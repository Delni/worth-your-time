<script lang="ts">
  import { fade, fly } from 'svelte/transition';
  import Salary from './lib/pages/Salary.svelte'
  import Introduction from './lib/pages/Introduction.svelte'
  import Target from './lib/pages/Target.svelte'
  import Result from './lib/pages/Result.svelte'
    import { onDestroy, onMount } from 'svelte'

  let page = 0
  let loaded = false
  let touched = false
  let motion = 1
  const nextPage = () => {
    touched = true
    motion = 1
    if(page + 1 >= 4) {
      stepBackwards(3)
    } else {
      page++
    }
  }

  const previousPage = () => {
    motion = -1
    page--
  }

  const stepBackwards = (times: number) => {
    for (let index = 0; index < times; index++) {
      setTimeout(previousPage, 200 * index)
    }
  }

  
  const listener = ({key, target}: KeyboardEvent) => key == 'Enter' 
    && (target as HTMLElement).tagName !== "BUTTON" 
    && nextPage()

	onMount(() => {
    loaded = true
		document.addEventListener('keydown', listener)
	})
	onDestroy(() => {
		document.removeEventListener('keydown', listener)
	})

</script>

{#if loaded }
<main>
  {#if page == 0 }
    <article class="page" in:fly={{x: 250 * motion }} out:fly={{x: -250 * motion }}>
      <section>
        <Introduction on:click={nextPage} withTransition={!touched}/>
      </section>
    </article>
  {:else if page == 1 }
    <article class="page" in:fly={{x: 250 * motion }} out:fly={{x: -250 * motion }}>
      <Salary on:next={nextPage} on:previous={previousPage}/>
    </article>
  {:else if page == 2 }
    <article class="page" in:fly={{x: 250 * motion }} out:fly={{x: -250 * motion }}>
      <Target on:next={nextPage} on:previous={previousPage}/>
    </article>
  {:else }
    <article class="page" in:fly={{x: 250 * motion }} out:fly={{x: -250 * motion }}>
      <section>
        <Result on:next={nextPage} on:previous={previousPage}/>
      </section>
    </article>
  {/if}
</main>
{/if}

<style lang=sass>
.page
  position: fixed
  top: 0
  left: 0
  width: 100vw
  height: 100vh
  display: flex
  flex-flow: column
  justify-content: center
  :global(section)
    display: flex
    flex-flow: column nowrap
    max-width: 500px
    width: calc(100% - 4rem)
    padding: 2rem
    margin: auto
    :global(h2)
      margin-bottom: 0
    :global(small)
      margin-bottom: 2rem

</style>