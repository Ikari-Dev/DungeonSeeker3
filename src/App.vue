<template>
  <div id="app" v-bind:class="{ appRetro: retro, app: moderne }">
    <transition
      name="fadeMenu"
      enter-active-class="menuIn"
      leave-active-class="menuOut">
      <div v-if="menu" v-bind:class="{ menuRetro: retro, menu: moderne }">
        <h1 v-bind:class="{ titleRetro: retro, title: moderne }">
          <span>DUNGEON</span> <br />SEEKER</h1>
        <ul>
          <li>
            <MenuButton v-on:click.native="startGame()">Start Game</MenuButton>
          </li>
          <li>
            <MenuButton v-on:click.native="chargeSettings()">Settings</MenuButton>
          </li>
          <li>
            <MenuButton v-on:click.native="chargeCredit()">Credits</MenuButton>
          </li>
        </ul>
        <p v-bind:class="{ versionRetro: retro, version: moderne }">Alpha 0.1</p>
      </div>
    </transition>
    <transition
      name="fadeOption"
      enter-active-class="pannelIn"
      leave-active-class="pannelOut">
      <div v-if="setting" v-bind:class="{ settingsRetro: retro, settings: moderne }">
        <SettingsPannel> </SettingsPannel>
      </div>
    </transition>
    <transition
      name="fadeOption"
      enter-active-class="pannelIn"
      leave-active-class="pannelOut">
      <div v-if="credit" v-bind:class="{ creditRetro: retro, credit: moderne }">
        <CreditPannel> </CreditPannel>
      </div>
    </transition>
    <transition name="test">

      <div v-if="game">
        <GameInterface></GameInterface>
      </div>

    </transition>
  </div>
</template>

<script>
import MenuButton from "./components/MenuButton.vue";
import SettingsPannel from "./components/SettingsPannel.vue";
import CreditPannel from "./components/CreditPannel.vue";
import GameInterface from "./components/GameInterface.vue";

export default {
  name: "app",
  data() {
    return {
      menu: true,
      setting: false,
      credit: false,
      difficulty: [
        { easy: false },
        { medium: true },
        { hard: false },
        { brutal: false },
      ],
      moderne: true,
      retro: false,
      game: false,
      
    };
  },
  methods: {
    startGame() {
      this.setting = false;
      this.credit = false;
      this.menu = false;
      this.game = true;
      console.log("start");
      //lancement de la partie
    },
    chargeCredit() {
      this.setting = false;
      this.menu = false;
      this.credit = true;
      console.log("Credit");
    },
    chargeSettings() {
      this.credit = false;
      this.menu = false;
      this.setting = true;
      console.log("Settings");
    },
  },
  components: {
    MenuButton,
    SettingsPannel,
    CreditPannel,
    GameInterface,
  },
  created() {
    document.title = "Dungeon Seeker 3"
    document.getElementById("app").classList.add("appRetro")
  },
  
};
</script>

<style>
@import "../styles/mainModerne.css";
@import "../styles/main.css";
</style>