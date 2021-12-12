<template>
  <div class="home">
    <div>{{ this.$store.state.name }} {{ this.$store.state.age }}</div>
    {{ name }}:
    {{ age }}
    <div>
      <button @click="handleClick">方式1 按钮使用 mutation 中方法</button>
    </div>
    <div>
      <button @click="setName('小浪')">方式2 按钮使用 mutation 中方法</button>
    </div>
    <div>
      <button @click="changeName2('小浪')">方式1 按钮使用 action 中方法</button>
    </div>
    <div>
      <button @click="changeNameAsync('小浪2')">
        方式2 按钮使用 action 中方法
      </button>
    </div>
    <div>
      {{ this.$store.getters.getterName }}
    </div>
    <!-- <div>
      {{ this.$store.state.animal.animalName }}
    </div>
    <div>使用命名空间namespaced更方便:{{ animalName }}</div> -->
  </div>
</template>

<script>
// import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
import {
  mapState,
  mapMutations,
  mapActions,
  mapGetters,
} from '../my-vuex/index'

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState(['name', 'age']),
    // ...mapState('animal', ['animalName']),
    ...mapGetters(['getterName']),
  },
  methods: {
    ...mapMutations(['setName']),
    ...mapActions(['changeNameAsync']),
    handleClick() {
      this.$store.commit('setName', '李四')
    },
    changeName2() {
      this.$store.dispatch('changeNameAsync', '王五')
    },
  },
}
</script>
