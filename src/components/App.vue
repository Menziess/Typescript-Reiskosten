<!-- src/components/App.vue -->

<template>
  <div>

    <Navbar></Navbar>

    <div class="row">

      <div class="col s12 m4 l3">
        <Card></Card>
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import Navbar from "./Nav.vue";
import Card from "./Card.vue";

@Component({
  props: {},
  components: {
    Navbar,
    Card
  }
})
export default class Nav extends Vue {}
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
