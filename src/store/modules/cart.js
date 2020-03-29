// 初始化数据
const state = {
  // 商品列表
  shopList: [
    { id: 1, name: '酸辣土豆丝', price: 12 },
    { id: 2, name: '鱼香肉丝', price: 23 },
    { id: 3, name: '西红柿鸡蛋汤', price: 8 },
    { id: 4, name: '东北大米', price: 2 },
    { id: 5, name: '蟹肉煲', price: 98 }
  ],
  // 添加到购物车的商品
  added: []
}

// 在组件中拿到 state 的数据需要 getters 处理
// getter 抛出去的数据
// 然后 利用 mapGetters 辅助函数将 store 中的 getter 映射到局部计算属性
const getters = {
  // 商品列表
  shopList: state => state.shopList,
  // 购物车列表
  cartList: state => {
    // action 提交的 Mutation 只有 id 和 num 字段
    return state.added.map(({ id, num }) => {
      let product = state.shopList.find(val => val.id === id)
      return {
        ...product,
        num
      }
    })
  },
  // 计算总价
  totalPrice: (state, getters) => {
    // getters中可以调用getters里面的方法
    let total = 0
    getters.cartList.forEach(product => {
      total += product.num * product.price
    })
    return total
  },
  // 计算总数量
  totalNumber: (state, getters) => {
    let count = 0
    getters.cartList.forEach(product => {
      count += product.num
    })
    return count
  }
}

// action 异步的数据
// commit来分发actions
const actions = {
  // 添加到购物车
  addToCart({ commit }, product) {
    //传递一个add的方法，携带参数id
    commit('add', {
      id: product.id
    })
  },
  // 删除购物车某商品
  delProductOnce({ commit }, product) {
    commit('del', {
      id: product.id
    })
  },
  // 清空购物车
  clearAllCart({ commit }) {
    commit('clearAll')
  }
}

// mutation
// 分发出来了一个add的方法
// 在mutations中接受,mutation中可以直接拿到state里面所有的数据
const mutations = {
  // 添加到购物车
  add(state, { id }) {
    let record = state.added.find(val => val.id === id)
    if (!record) {
      // 如果没有记录
      const obj = {
        id,
        num: 1
      }
      state.added.push(obj)
    } else {
      record.num += 1
    }
    console.log(state.added.length)
  },
  del(state, { id }) {
    state.added.forEach((item, index) => {
      if (item.id === id) {
        item.num -= 1
        if (item.num === 0) {
          state.added.splice(index, 1)
        }
      }
    })
  },
  // 清空购物车
  clearAll(state) {
    // 这里不能通过 length = 0 来清空
    // state.added.length = 0
    state.added = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
