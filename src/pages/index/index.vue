<template>
  <view>
    <u-navbar :background="background" back-text="返回" title="demo!" />
    <view class="content">
      <u-button @click="testChange(a)">
        测试vuex{{ a }}
      </u-button>
      <u-button @click="postClick">
        测试axios发送请求
      </u-button>
      {{ resData }}
      我是DEMO
      <wjh-logo />12
      <image style="width: 100px; height:100px;" src="@/static/images/uni.png" mode="" />
    </view>
  </view>
</template>

<script>
import { selectPageParamConfig } from '@/api/demo.js'
import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState
} from 'vuex'
export default {
  data() {
    return {
      resData: null,
      show: true,
      background: {
        // backgroundColor: '#001f3f',

        // 导航栏背景图
        // background: 'url(https://cdn.uviewui.com/uview/swiper/1.jpg) no-repeat',
        // 还可以设置背景图size属性
        // backgroundSize: 'cover',

        // 渐变色
        backgroundImage: 'linear-gradient(45deg, rgb(28, 187, 180), rgb(141, 198, 63))'
      }
    }
  },
  computed: {
    ...mapState({
      a: (state) => state.demo.a
    }),
    ...mapGetters({
      getAA: 'demo/getA'
    })
  },
  methods: {
    ...mapMutations({
      testChangeMutation: 'demo/changeA'
    }),
    ...mapActions({
      testChange: 'demo/changeTest'
    }),
    async  postClick() {
      try {
        this.resData = '开始请求........................'
        const resData = await selectPageParamConfig({})
        this.resData = `请求结果：${JSON.stringify(resData)}`
      } catch (e) {
        this.resData = '请求失败'
        console.log(e)
      }

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
