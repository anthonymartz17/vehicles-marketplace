<template>
  <div class="search-fields-container">        
    <p class="search-fields-container-title">Search for Your Vehicle!</p>
    <MakeModel/>
    <PriceYear/> 
    <SearchBtn/>       
    
    <router-link :to="{name:'Advance'}">
      <div class="btn btn-advanceSearch" @click="clearPropsVal" >Advanced Search</div>
    </router-link>      
   </div>
</template>

<script>
import {mapMutations} from 'vuex'
import MakeModel from './MakeModel.vue'
import PriceYear from './PriceYear.vue'
import SearchBtn from './SearchBtn.vue'

export default {

  components:{
    PriceYear,
    MakeModel,   
    SearchBtn,
  },
  methods:{
    ...mapMutations([  
      'clearPropsVal'     
    ])
  
  },
}
</script>

<style lang="scss" scoped>
 .search-fields-container{
  @include desktop{
    display: none;
  }
 }
  .btn{
    width: 100%;
    height: 3em;
    margin-block: .2em;
    font: $font-text-bold;
    text-align: center;
  }
  
  .btn-advanceSearch{
    
    color: $primary;
    transition: all .3s ease-in-out;
    border: 1px solid $lightestDark;
      &:hover{
      color: $light;
      border: 1px solid $light;
    }
    

  }

</style>