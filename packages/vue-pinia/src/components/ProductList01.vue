<script setup lang="ts">
import { useProductStore } from "../stores/ProductStore";
import { generatePrice, generateProductName } from "../utils";

const store = useProductStore();

// 生成商品信息
const generateProduct = () => {
  store.addProduct({ name: generateProductName(), price: generatePrice() });
};
</script>

<template>
  <h4>所有的商品：</h4>
  <ul>
    <li v-for="product in store.products">
      {{ product.name }} / {{ product.price }}
    </li>
  </ul>
  <p>共{{ store.productCount }}件</p>
  <h4>低于 5000 的商品：</h4>
  <ul>
    <li v-for="product in store.productsCheaperThan(5000)">
      {{ product.name }} / {{ product.price }}
    </li>
  </ul>
  <button @click="generateProduct()">Add Product</button>
</template>

<style scoped>
h4 {
  text-align: left;
}
</style>
