<template>
<router-link class="routerLink" :to="{name:'searchResults'}" >
    <div class="btn btn-search"
      @click="searchVehicles($route.name)"
    >Search</div>
          
</router-link>

</template>

<script>
import {mapMutations} from 'vuex'
export default {

  methods:{

    ...mapMutations([
      'searchVehicles',
    ])
  }
 


}
</script>

<style lang="scss" scoped>

.btn-container{
  position: fixed;
  bottom: 0em;
  padding-inline: .5em;
}
.routerLink{
  @include desktop{
    display: flex;
    justify-content: flex-end;
  }
} 
   

</style>