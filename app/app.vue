
<template lang="pug">
  #record-player
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
    min-height: 100vh;
    width: 100%;
}
</style>
