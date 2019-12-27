<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" style="height:25px;">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input
        id="test"
        class="mui-input-numbox"
        type="number"
        :value="initcount"
        @change="countChange"
        ref="numbox"
        readonly
      />
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'

export default {
  mounted(){
    mui('.mui-numbox').numbox()
  },
  methods:{
    countChange(){
      //每当文本框数据被修改的时候,立即把最新的数据通过事件调用
      this.$store.commit('updateGoodsInfo'
      ,{id:this.goodsid,count:this.$refs.numbox.value})
      
    }
  },
  data(){
    return {
      
    }
  },
  props:[
    'initcount',
    'goodsid'
  ]
}
</script>

<style scoped lang="scss">
</style>