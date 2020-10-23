<template>
  <div class="pannel">
    <h1>Settings</h1>

    <div class="dif">
      <h4>Difficulty</h4>
      <input v-on:click="changeDiff(0)" class="checkButton" type="radio" id="easy" name="diff" />
      <label for="easy">Easy</label>
      <input v-on:click="changeDiff(1)" class="checkButton" type="radio" id="medium" name="diff" checked />
      <label for="medium">Medium</label>
      <input v-on:click="changeDiff(2)" class="checkButton" type="radio" id="hard" name="diff" />
      <label for="hard">Hard</label>
      <input v-on:click="changeDiff(3)" class="checkButton" type="radio" id="brutal" name="diff" />
      <label for="brutal">Brutal</label>
    </div>
    <div class="theme">
      <h4>Theme</h4>
      <input v-on:click="changeTheme(0)" class="checkButton" type="radio" id="moderne" name="theme" />
      <label for="moderne">Moderne</label>
      <input v-on:click="changeTheme(1)" class="checkButton" type="radio" id="retro" name="theme" checked />
      <label for="retro">Retro</label>
    </div>
    <div class="quit">
      <MenuButton class="buttonQuit" v-on:click.native="validation()"
        >Valider</MenuButton
      >
    </div>
  </div>
</template>
<script>
import MenuButton from "./MenuButton.vue";

export default {
  data() {
    return {
      options: [{ difficulty: 1 }],
    };
  },
  components: {
    MenuButton,
  },
  methods: {
    validation() {
      this.$parent.setting = false;
      this.$parent.menu = true;
      console.log("Validate");
    },
    changeDiff(value){
        this.$parent.difficulty = value
        console.log(value);
    },
    changeTheme(value){
        this.$parent.theme = value
        console.log(value);
    },
  },
};
</script>
<style>
@import "../../styles/main.css";
</style>