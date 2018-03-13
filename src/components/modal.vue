<template>
<!--实现点击蒙层关闭弹框的交互行为：
   1、外层添加click事件并传入close方法，
   2、在props添加一个show，
   3、同时在.model中添加@click.stop，避免造成点击弹框任何地方都会关闭modal弹框-->
  <transition name="modal-fade">
    <div class="modal-backdrop" @click="close" v-show="show">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <slot name="header">
            <h2>this is header of model</h2>
            <button type="button" class="btn-close" @click="close">x</button>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">body</slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">footer
            <button type="button" class="btn-green" @click="close">关闭</button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Modal',
  props: ['show'],
  data () {
    return {

    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }

}
</script>

<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
  }
  .modal-header, .modal-footer {
    padding: 15px;
    display: flex;
  }
  .modal-header {
    color: #4aae9b;
    border-bottom: 1px solid #eeeeee;
    justify-content: space-between;
  }
  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }
  .modal-body {
    position: relative;
    padding:20px 10px;
  }
  .btn-close {
    border: none 0 ;
    padding: 20px;
    cursor: pointer;
    font-weight: bold;
    background-color: transparent;
  }
  .btn-green {
    color: #ffffff;
    background-color: #4aae9b;
    border: 1px solid #4aae9b;
    border-radius: 2px;
  }
  /* 弹框淡入淡出效果 transition */
  .modal-fade-enter, .modal-fade-leave-active{
    opacity: 0;
  }
  .modal-fade-enter-active, .modal-fade-leave-active{
    transition: opacity .5s ease;
  }
</style>
