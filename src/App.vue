<template>

 <div id="app">
  <menu-header></menu-header>
  <router-view/>
  
</div>
    
    
   
</template>

<script>

import HeaderMenu from "@/components/HeaderMenu.vue"
export default {
  components: {
   'menu-header': HeaderMenu
  }
 
}
</script>


