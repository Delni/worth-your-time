<script lang="ts">
  import { fly } from 'svelte/transition';
  import Salary from './lib/Salary.svelte'
  import Introduction from './lib/Introduction.svelte'
  import Target from './lib/Target.svelte'
  import Result from './lib/Result.svelte'

  let page = 0
  let motion = 1
  const nextPage = () => {
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

</script>

<main>
  {#if page == 0 }
    <article class="page" in:fly={{x: 250 * motion }} out:fly={{x: -250 * motion }}>
      <section>
        <Introduction on:click={nextPage}/>
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
        <Result on:click={nextPage}/>
      </section>
    </article>
  {/if}
</main>

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
    width: 100%
    padding: 2rem
    margin: auto

</style>