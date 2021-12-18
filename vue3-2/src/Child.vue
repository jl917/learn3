<template>
  <div>child</div>
  <button @click="onClick">edit people</button>
  <h3>{{person.name}} - {{person.age}}</h3>
</template>

<script setup>
import { inject, onMounted } from 'vue';
onMounted(() => {
  person.age = 22
})

const onClick = () => {
  person.age = 88
}
const person = inject('people');
</script>
