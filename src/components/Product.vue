<template>
  <div class="product">
    <h4>美味佳肴</h4>
    <table class="table table-hover table-bordered">
      <thead class="thead-dark">
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shop, index) in shopList" :key="index">
          <td>{{ shop.id }}</td>
          <td>{{ shop.name }}</td>
          <td>{{ shop.price }}</td>
          <td>
            <!-- 编写addToCart的方法，我们会到 cart.js 中的action里面去，
                 通过commit来分发actions -->
            <div @click="addToCart(shop)" class="btn btn-primary">购物车</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'product',
  data() {
    return {}
  },
  computed: {
    // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters(['shopList'])
  },
  methods: {
    ...mapActions(['addToCart'])
  }
}
</script>

<style scoped lang="css">
th {
  text-align: center;
}
/* tr:nth-child(2n + 1) {
  background: lightgray;
} */
</style>
