<template>
  <div class="item" v-for="item in grades" v-bind:key="item.id">
    <AttributeStars
      :type="item.type"
      :rating="item.rating"
      :color="item.color"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AttributeStars from "./components/AttributeBadge.vue";

@Options({
  components: {
    AttributeStars
  },
})
export default class App extends Vue {
  private grades = [
    {id: 1, type: "text", rating: 100, color: "#F00"},
    {id: 2, type: "text", rating: 100, color: "#0298D5"},
    {id: 2, type: "number", rating: 100, color: "#0298D5"}
  ];
  private type = "text";
  private rating = 100;
  private color = "#F00";
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.item {
  margin: 3px;
}
</style>
