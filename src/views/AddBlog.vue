<template>
  <form>
    <label> Title:</label>
    <input type="text" v-model="title" required />
    <label> Content:</label>
    <textarea v-model="content" required></textarea>
    <button >Add Post</button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      content: ''
    }
  }

}
</script>

<style>

</style>