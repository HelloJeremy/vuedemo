<!-- index.vue -->
//index
<template>
  <div>
    <h1 class="logo">cnodejs Api Test</h1>
    <ul class="list">
      <li v-for="item in lists" v-text="item.title"></li>
    </ul>
  </div>
</template>
<script>
    export default {
        data() {
            return {
                    lists:[{
        id:1,
        title:"test title 1"
      },{
        id:2,
        title:"test title 2"
      }]
            }
    },
        created() {    
     this.$myApi.sendGetRequest('https://cnodejs.org/api/v1/topics')
         .then(
            res=> this.lists = res.data.data
        )
         .catch(err => console.log(err));
    }}
</script>