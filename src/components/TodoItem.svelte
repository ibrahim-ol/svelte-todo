<script>
  import { createEventDispatcher } from "svelte";
  import TodoTick from "./TodoTick.svelte";
  export let item = {};
  const dispatch = createEventDispatcher();
  const deleteItem = () => {
    dispatch("delete", {
      id: item.id
    });
  };
  let editItem = false;
  const updateItem = e => {
    console.log(item.todo);
    dispatch("update", {
      id: item.id,
      content: item
    });
    editItem = false;
  };
  const init = el => el.focus();
  const makeEditable = () => (editItem = !editItem);
  const completeItem = () => {
    item.complete = !item.complete;
    console.log(item);
    dispatch("update", {
      id: item.id,
      content: item
    });
  };
</script>

<li class="py-1 whitespace-no-wrap flex justify-between items-center w-full">
  {#if !editItem}
    <span
      on:click={makeEditable}
      class={(item.complete ? 'line-through opacity-25' : '') + ' truncate flex-1 mr-2'}>
      {item.todo}
    </span>
  {:else}
    <form on:submit|preventDefault={updateItem}>
      <input
        on:blur={makeEditable}
        class="px-2 "
        bind:value={item.todo}
        use:init />
    </form>
  {/if}
  <TodoTick on:completed={completeItem} on:delete={deleteItem} {item} />
</li>
