<template>
  <div id="formValidate">
    <button type="button" class="btn" @click="showModal">modal</button>
    <modal v-show="isModalVisible" @close="closeModal"/>
  </div>
</template>

<script>
import Modal from '@/components/modal.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      isModalVisible: false
    }
  },
  components: {
    Modal
  },
  methods: {
    showModal () {
      this.isModalVisible = true
    },
    closeModal () {
      this.isModalVisible = false
    }
  }
}
</script>
