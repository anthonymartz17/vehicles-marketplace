<template>
  <footer>
    <div class="footer-container">
      <Logo/>
      <small>© Auto Martz all rights reserved</small>
      <SocialMedia/>

    </div>

  </footer>
</template>

<script>
import Logo from './Logo.vue'
import SocialMedia from './SocialMedia.vue'
export default {
  components:{
    Logo,
    SocialMedia,
  }

}
</script>

<style lang="scss">
.footer-container{

  background: $lightDark;
  width: 100%;
  min-height:20vh;
  color: $light;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

</style>