  <!-- <script>
  import {mapState,mapMutations,mapGetters} from 'vuex';
  export default {
  
  
  
  computed:{
  
    ...mapState([
      'make',
      'fieldContent',
      'models',
      'makeSelected',
      'carType',
      'carCondition',
      'priceUnavailable',
      'yearsUnavailable',
      'clickedFieldContent',
     
      
      
      
  
      ]),
      ...mapGetters([
        'carModelByMake',
      ])
  },
  
  
  methods:{
  
   
    ...mapMutations([
      'closeSelectionCard',
      'selectPriceAndYear',
      'disablePriceAndYear',
      'selectedFieldData',
      'toggleOptionsCard'
  
    
    ]),
    
  }
  
  }
  </script>
<template>

 <transition 
    enter-active-class="animate__animated animate__fadeIn animate__faster"
    leave-active-class="animate__animated animate__fadeOut animate__faster"
  >
   
  </transition>  


</template>


<style lang="scss" scoped>
.disableOptions{
  pointer-events: none;
  text-decoration: line-through;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.26);
  }
 
}

</style> -->