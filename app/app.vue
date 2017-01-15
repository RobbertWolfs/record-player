
<template lang="pug">
  #record-player
    .header
      .nav
        router-link(to="/") About
        router-link(to="/records") Records
   
    transition(name="slide-left")
      router-view.view

</template>

<style lang="scss">
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
