<script setup lang="ts">
import ProductList01 from "./components/ProductList01.vue";
import ProductList02 from "./components/ProductList02.vue";
</script>

<template>
  <div class="container">
    <main>
      <h2>Composition API</h2>
      <ProductList01 />
    </main>
    <main>
      <h2>Options API</h2>
      <ProductList02 />
    </main>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
  width: 100%;
  padding: 26px;
  border: 1px solid;
}

main {
  flex: 1;
}

h2 {
  text-align: left;
}
</style>
