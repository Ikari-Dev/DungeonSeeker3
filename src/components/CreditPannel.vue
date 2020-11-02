<template>
    <div v-bind:class="{ pannelRetro: this.$parent.retro, pannel: this.$parent.moderne }">
        <h1>CREDIT</h1>
        <h3>DEV: Delcroix Florian</h3>
        <div v-bind:class="{ quitRetro: this.$parent.retro, quit: this.$parent.moderne }">
            <button v-on:click="quitter()" v-bind:class="{ menuButtonRetro: this.$parent.retro, menuButton: this.$parent.moderne }">
            Quitter
            </button>
        </div>
    </div>  
</template>
<script>

export default {
    methods: {
        quitter(){
            this.$parent.credit = false
            this.$parent.menu = true
            console.log("Quitter credit")
        }
    },
    created() {
        //document.getElementById("").classList.add("")
    }
}
</script>
<style>
    @import '../../styles/mainModerne.css';
    @import '../../styles/main.css';
</style>