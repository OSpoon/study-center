import { defineStore } from "pinia";

interface Product {
  name: string;
  price: number;
}

export const useProductStore = defineStore(
  // 唯一命名
  "product",
  {
    // 初始化 state
    state: (): {
      products: Product[];
    } => {
      return {
        products: [],
      };
    },
    getters: {
      // 访问状态
      productCount(state) {
        return state.products.length;
      },
      //接收参数时需返回一个函数类型
      productsCheaperThan(state) {
        return (price: number) => {
          return state.products.filter((product) => product.price < price);
        };
      },
    },
    // 修改状态
    actions: {
      addProduct(product: Product) {
        this.products.push(product);
      },
    },
  }
);
