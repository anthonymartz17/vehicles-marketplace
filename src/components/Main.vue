<template>
  <main :class="['main-container',{centered: $route.name != 'searchResults'}]">
    <transition appear enter-active-class="animate__animated animate__fadeIn" >
      <router-view class="router-view" />
    </transition>
    
  </main>
</template>

<script>


// import AdComponent from './Advertisements.vue'

export default {

// components:{
//   // AdComponent
// }




}
</script>

<style lang="scss" scoped>
.main-container{
  display: flex;
  flex-direction: column;
  // justify-content: center;
  width: 100%;
  min-height: 70vh;
 
 @include desktop{
  justify-self: center;
 }
 

}
.centered{
  @include desktop{
     padding: 0 15em;
  }

}

</style>