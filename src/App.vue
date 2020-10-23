<template>
  <div id="app">
    <transition
      name="fadeMenu"
      enter-active-class="menuIn"
      leave-active-class="menuOut"
    >
      <div v-if="menu" class="menu">
        <h1 class="title">
          <span>Dungeon</span> <br />
          Seeker
        </h1>
        <ul>
          <li>
            <MenuButton v-on:click.native="startGame()">Start Game</MenuButton>
          </li>
          <li>
            <MenuButton v-on:click.native="chargeSettings()"
              >Settings</MenuButton
            >
          </li>
          <li>
            <MenuButton v-on:click.native="chargeCredit()">Credits</MenuButton>
          </li>
        </ul>

        <p class="version">Alpha 0.1</p>
      </div>
    </transition>
    <transition
      name="fadeOption"
      enter-active-class="pannelIn"
      leave-active-class="pannelOut"
    >
      <div v-if="setting" class="settings">
        <SettingsPannel> </SettingsPannel>
      </div>
    </transition>
    <transition
      name="fadeOption"
      enter-active-class="pannelIn"
      leave-active-class="pannelIn"
    >
      <div v-if="credit" class="credit">
        <CreditPannel> </CreditPannel>
      </div>
    </transition>
  </div>
</template>

<script>
import MenuButton from "./components/MenuButton.vue";
import SettingsPannel from "./components/SettingsPannel.vue";
import CreditPannel from "./components/CreditPannel.vue";

export default {
  name: "app",
  data() {
    return {
      menu: true,
      setting: false,
      credit: false,
      difficulty: 1,
      theme: 1,
    };
  },
  methods: {
    startGame() {
      this.setting = false;
      this.credit = false;
      this.menu = true;
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
  },
  created() {
    document.title = "Dungeon Seeker 3";
  },
};
</script>

<style>
@import "../styles/main.css";
</style>