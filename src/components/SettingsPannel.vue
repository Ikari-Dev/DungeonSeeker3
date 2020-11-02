<template>
  <div v-bind:class="{ pannelRetro: this.$parent.retro, pannel: this.$parent.moderne }">
    <h1>SETTINGS</h1>

    <div v-bind:class="{ diffRetro: this.$parent.retro, diff: this.$parent.moderne }">
      <h4>Difficulty</h4>
      <input v-on:click="changeDiff(0)" v-bind:class="{ checkButtonRetro: this.$parent.retro, checkButton: this.$parent.moderne }" type="radio" id="easy" name="diff" :checked="this.$parent.difficulty[0]" />
      <label for="easy">Easy</label>
      <input v-on:click="changeDiff(1)" v-bind:class="{ checkButtonRetro: this.$parent.retro, checkButton: this.$parent.moderne }" type="radio" id="medium" name="diff" :checked="this.$parent.difficulty[1]" />
      <label for="medium">Medium</label>
      <input v-on:click="changeDiff(2)" v-bind:class="{ checkButtonRetro: this.$parent.retro, checkButton: this.$parent.moderne }" type="radio" id="hard" name="diff" :checked="this.$parent.difficulty[2]" />
      <label for="hard">Hard</label>
      <input v-on:click="changeDiff(3)" v-bind:class="{ checkButtonRetro: this.$parent.retro, checkButton: this.$parent.moderne }" type="radio" id="brutal" name="diff" :checked="this.$parent.difficulty[3]" />
      <label for="brutal">Brutal</label>
    </div>
    <div class="theme">
      <h4>Theme</h4>
      <input v-on:click="changeTheme(0)" v-bind:class="{ checkButtonRetro: this.$parent.retro, checkButton: this.$parent.moderne }" type="radio" id="moderne" name="theme" :checked="this.$parent.moderne" />
      <label for="moderne">Moderne</label>
      <input v-on:click="changeTheme(1)" v-bind:class="{ checkButtonRetro: this.$parent.retro, checkButton: this.$parent.moderne }" type="radio" id="retro" name="theme" :checked="this.$parent.retro"/>
      <label for="retro">Retro</label>
    </div>
    <div v-bind:class="{ quitRetro: this.$parent.retro, quit: this.$parent.moderne }">
        <button v-on:click="validation()" v-bind:class="{ menuButtonRetro: this.$parent.retro, menuButton: this.$parent.moderne }">
          Validation
        </button>
    </div>
  </div>
</template>
<script>
import MenuButton from "./MenuButton.vue";

export default {
  data() {
    return {
      
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
        this.clearDiff()
        this.$parent.difficulty[value] = true
        console.log(value);
    },
    changeTheme(value){
        if(value == 0){
          this.$parent.moderne = true
          this.$parent.retro = false
        }
        else{
          this.$parent.retro = true
          this.$parent.moderne = false
        }
        console.log(value);
    },
    clearDiff(){
        for(let i = 0; i < 4; i++){
          this.$parent.difficulty[i] = false
        }
    },
  },
};
</script>
<style>
@import "../../styles/mainModerne.css";
@import "../../styles/main.css";
</style>