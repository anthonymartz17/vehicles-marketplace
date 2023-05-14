<template>
  <VehiclesDisplay/>
</template>

<script>
import VehiclesDisplay from '../components/VehiclesDisplay.vue'
import {mapMutations} from 'vuex'

export default {


  created(){
    this.selectElectricCars(this.$route.name)
  },


  components:{
    VehiclesDisplay,
  },
  methods:{


    ...mapMutations([
      'selectElectricCars'
    ])

  },

}
</script>

<style>

</style>