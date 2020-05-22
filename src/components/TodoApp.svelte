<script>
  import TodoItem from "./TodoItem.svelte";
  import dayjs from "dayjs";
  import { loadTodos, updateTodos } from "./../utils/storage";
  let todos = loadTodos();
  let date = dayjs().date();
  let month = dayjs().format("MMM");
  let year = dayjs().year();
  let day = dayjs().format("dddd");
  let showInput = false;
  let todo = "";
  const toggleInput = () => {
    showInput = !showInput;
  };
  const addTodo = () => {
    if (!!todo) {
      todos[todos.length] = { id: todos.length, todo: todo, completed: false };
      updateTodos(todos);
    }
    todo = "";
  };
  const init = el => el.focus();
  const handleDelete = e => {
    todos = todos.filter(v => v.id !== e.detail.id);
    updateTodos(todos);
  };
  const handleUpdate = e => {
    updateTodos(todos);
  };
</script>

<style>

</style>

<div
  class="relative flex-1 overflow-hidden flex flex-col items-center px-6 pb-16">
  <div class="w-full flex justify-between items-center text-sm ">
    <div class="flex items-center">
      <span class="text-5xl mr-1 font-bold">{date}</span>
      <span class="text-xs text-gray-600">
        <span class="font-semibold text-black">{month}</span>
        <br />
        {year}
      </span>
    </div>
    <div class="font-medium">{day}</div>
  </div>
  <div class="w-full flex-1 self-start text-left overflow-y-auto">
    <ul>
      {#each todos as t (t.id)}
        <TodoItem on:update={handleUpdate} on:delete={handleDelete} item={t} />
      {/each}
    </ul>
  </div>
  {#if showInput}
    <form on:submit|preventDefault={addTodo}>
      <div class="flex my-1">
        <input
          use:init
          bind:value={todo}
          class="border-2 h-10 p-3 text-sm border-green-400 rounded-l-md w-full
          border-r-0" />
        <button
          on:click={addTodo}
          class="rounded-r-md bg-green-400 border-2 border-green-400 border-l-0
          focus:outline-none px-3 text-xs text-white">
          Add
        </button>
      </div>
    </form>
  {/if}
  <button
    on:click={toggleInput}
    class="rounded-full h-12 w-12 border-0 shadow-2xl bg-green-500 text-white
    text-2xl absolute bottom-0 focus:outline-none leading-none">
    <span>+</span>
  </button>
</div>
