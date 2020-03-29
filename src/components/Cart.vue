<template>
  <div class="cart">
    <h4>已选菜单</h4>
    <table class="table table-hover table-bordered">
      <thead class="thead-light">
        <tr>
          <th>id</th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(cart, index) in cartList" :key="index">
          <td>{{ cart.id }}</td>
          <td>{{ cart.name }}</td>
          <td>{{ cart.price }}</td>
          <td>{{ cart.num }}</td>
          <td>
            <div @click="delProductOnce(cart)" class="btn btn-primary">删除一份</div>
          </td>
        </tr>
        <tr v-if="!cartList.length">
          <td colspan="6" class="text-center">您的购物车空空如也!</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'cart',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['cartList'])
  },
  methods: {
    ...mapActions(['delProductOnce'])
  }
}
</script>

<style scoped lang="css">
th {
  text-align: center;
}

.empty-desc {
  font-size: 16px;
  text-decoration-line: inherit;
}
</style>
