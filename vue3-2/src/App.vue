<template>
  <h1>{{people.name}} - {{people.age}}</h1>
  <div>App root</div>
  <Parent/>
</template>

<script setup>
import { provide, reactive } from "vue";
import Parent from "./Parent";

const people = reactive({name: 'dao', age: '32'});
provide('people', people);

</script>
