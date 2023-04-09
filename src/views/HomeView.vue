<template>
  <div class="home">
  
   <div v-if="post.length">
    <div v-for="post in posts" :key="post.id">
       
    <SinglePost :post="post" />
    
    </div>

   </div>
  </div>
</template>

<script>
// @ is an alias to /src

import SinglePost from '../components/SinglePost.vue';

export default {
  name: 'HomeView',
  components: {
    SinglePost,

  },
  data(){
    return {
      posts:[],
     
  }
},

 
 
};
</script>
