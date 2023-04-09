<template>
    <nav class="main-nav">
  
      <router-link :to="{name:'Home'}">Blogs</router-link> 
   
      
      <router-link :to="{name:'AddBlog'}">Add Blog</router-link>

      <h1 class="ebro">ebrardev</h1>
    </nav>
  </template>

  
  <script>
  export default {
  }
  </script>
  
  <style>
  .main-nav {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      border-bottom: 3px solid black;
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      color: green;
      padding-right: 20px;
      
    }
    .main-nav a {
      display: inline-block;;
      text-decoration: none;
      margin: 0 10px;
      font-size:18px;
      color: #999
    }
    .main-nav a:hover {
      border-bottom: 1px solid green;
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      color: blueviolet;
    }
    a.router-link-active {
      color: rgb(0, 162, 0);
      font-weight: bold;
      transition: all 0.3s ease-in-out;
      text-decoration: none;
      border-bottom: 2px solid gray;
    }
    .ebro{
        font-size: 20px;
  font-weight: bold;
  color: blue;
  text-align: center;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  margin-left: auto;
    }
    .ebro:hover{
        color: blueviolet;
        transition: all 0.3s ease-in-out;
    }
  </style>