<template>
    <div class="post">
      <router-link :to="{ name: 'Post', params: { id: post.id } }">
        <h3>
          {{ post.title }}
        </h3>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ["post"],
    setup(props) {},
  };
  </script>
  
  <style>
 .post{
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    background-color: #fff;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19);
    border: 1px solid #eee;
    box-sizing: border-box;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    border-left: 4px solid purple;
    border-right:  4px solid black ;
}
h3{
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    text-align: center;
    color: #333;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
}



  </style>