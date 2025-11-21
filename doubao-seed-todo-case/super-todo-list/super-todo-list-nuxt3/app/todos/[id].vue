<template>
  <div class="todo-detail">
    <h1>{{ todo.title }}</h1>
    <p>{{ todo.description }}</p>
    <p>Due date: {{ todo.dueDate }}</p>
    <p>Priority: {{ todo.priority }}</p>
    <p>Status: {{ todo.status }}</p>
    <p>Created by: {{ todo.User.username }}</p>
    <h2>Files:</h2>
    <ul>
      <li v-for="file in todo.TodoFiles" :key="file.id">
        <a :href="'/files/' + file.path" download>{{ file.filename }}</a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
const { data: todo } = await useFetch(`/api/todos/${id}`);
</script>

<style>
.todo-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
