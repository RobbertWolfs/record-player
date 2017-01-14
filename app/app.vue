<template lang="pug">
  #record-player
    .header
      .nav
        router-link(to="/") Home
        router-link(to="/about") About
    
      router-view.view(v-transition="fade")
</template>

<style lang="scss">
//  .slide-fade-enter-active, .slide-fade-leave-active {
//   transition: all .5s;
// }

// .slide-fade-enter {
//   opacity: 1;
//   transform: translateX(50%);
// }
// .slide-fade-leave-active {
//   opacity: 0;
//   transform: translateX(-50%);
// }


// .fade-enter-active, .fade-leave-active {
//   transition: opacity .5s
// }
// .fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
//   opacity: 0
// }


.header {
  height: 5vh;

  .nav {
      display: flex;
      height: 100%;
      justify-content: center;

      a {
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        width: 5rem;
      }
  }
}

.view {
    display: inline-block;
    min-height: 95vh;
    width: 100%;
}
</style>
