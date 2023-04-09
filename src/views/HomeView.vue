<template>
  <div class="home">
  
   
    <SinglePost :post="post" />
    
    

  </div>
</template>

<script>
// @ is an alias to /src

import SinglePost from '../components/SinglePost.vue';
import getPosts from '../composables/getPosts.js';
import { ref } from 'vue';

export default {
  name: 'HomeView',
  components: {SinglePost},
    setup(){
      const posts = ref([])
      const {data} = getPosts();
      posts.value = data;
      console.log(posts)
      
    }
 
};

</script>
