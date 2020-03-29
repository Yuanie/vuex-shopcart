<template>
  <div>
    <div class="item-wrapper">
      <div class="item">
        总数：
        <strong>{{ totalNumber }}</strong>
      </div>
      <div class="item">
        总价：
        <strong>{{ totalPrice }}</strong>
      </div>
    </div>
    <div @click="clearAllCart" class="btn btn-danger">清空购物车</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'info',
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['totalPrice', 'totalNumber'])
  },
  methods: {
    ...mapActions(['clearAllCart'])
  }
}
</script>

<style scoped lang="css">
.item-wrapper {
  display: flex;
  background-color: #dfdfdf;
  align-items: center;
  justify-content: center;
}

.item {
  flex: 1;
}
</style>
