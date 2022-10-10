<template>
  <div class="home">
    <h2>home</h2>
  </div>
</template>

<script>
import SideBar from '../components/sideBar.vue'
import { test } from '../services';

export default {
  name: "Home",
  components: { SideBar },
  mounted() {
    test().then(res => {
      console.log(res);
    })
  }
}
</script>
