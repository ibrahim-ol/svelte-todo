<script>
  import TodoApp from "./components/TodoApp.svelte";
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    width: 400px;
    height: 550px;
    margin: 0 auto;
    border-radius: 15px;
  }
  main > div {
    height: 100%;
    width: 100%;
    border-radius: 15px;
  }
</style>

<main class="bg-white shadow-2xl">
  <div class="bg-purple-100 w-full h-full shadow-inner flex flex-col">
    <div
      class="h-12 flex flex-col items-center justify-center text-center
      shadow-inner bt-15 bg-white">
      <h1 class="text-xl font-semibold">Todos</h1>
    </div>
    <TodoApp />
  </div>
</main>
