<script>
  export let item;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
  const clicked = () => dispatch("delete");
  const completed = () => dispatch("completed");
</script>

{#if !item.complete}
  <button
    on:click={completed}
    class="bg-green-700 rounded-full text-white h-5 w-5 font-black text-xs flex
    items-center justify-center focus:outline-none mr-1">
    &check;
  </button>
{/if}
<button
  on:click={clicked}
  class="bg-red-700 rounded-full text-white h-5 w-5 font-black text-xs flex
  items-center justify-center focus:outline-none">
  x
</button>
