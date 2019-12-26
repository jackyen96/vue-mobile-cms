<template>
  <div>
    <div class="mui-numbox" data-numbox-min="1" :data-numbox-max="maxcount">
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1"
      @change="countChange" ref="numbox"/>
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
      this.$emit('get-count',parseInt(this.$refs.numbox.value))
    }
  },
  data(){
    return {
      
    }
  },
  props:[
    'maxcount'
  ],
  watch:{
    'maxcount': function(newVal, oldVal){
      mui(".mui-numbox").numbox().setOption('max',this.maxcount)
    }
  }
}
</script>

<style scoped lang="scss">
</style>