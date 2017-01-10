<template lang="pug">
  #record-player
    .header
      .nav
        router-link(to="/") Home
        router-link(to="/about") About
    
    transition(name="slide-fade" appear)
      router-view.view
</template>

<style scoped>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .5s;
}
.slide-fade-enter, .slide-fade-leave-active {
  opacity: 0;
}
.slide-fade-enter {
  transform: translateX(31px);
}
.slide-fade-leave-active {
  transform: translateX(-31px);
}
</style>
