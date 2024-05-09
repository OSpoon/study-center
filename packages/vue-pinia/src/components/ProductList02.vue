<script>
import { useProductStore } from "../stores/ProductStore";
import { mapStores } from "pinia";
import { generateProductName, generatePrice } from "../utils";

export default {
  computed: {
    ...mapStores(useProductStore),
  },
  methods: {
    // 生成商品信息
    generateProduct() {
      this.productStore.addProduct({
        name: generateProductName(),
        price: generatePrice(),
      });
    },
  },
};
</script>

<template>
  <h4>所有的商品：</h4>
  <ul>
    <li v-for="product in productStore.products">
      {{ product.name }} / {{ product.price }}
    </li>
  </ul>
  <p>共{{ productStore.productCount }}件</p>
  <h4>低于 5000 的商品：</h4>
  <ul>
    <li v-for="product in productStore.productsCheaperThan(5000)">
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
