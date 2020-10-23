<template>
    <div class="pannel">
        <h1>Credit</h1>
        <h3>Dev: Delcroix Florian</h3>
        <div class="quit">
            <MenuButton class="buttonQuit" v-on:click.native="quitter()">Quitter</MenuButton>
        </div>
    </div>  
</template>
<script>
import MenuButton from './MenuButton.vue'

export default {
    components: {
        MenuButton,
    },
    methods: {
        quitter(){
            this.$parent.credit = false
            this.$parent.menu = true
            console.log("Quitter credit")
        }
    },
}
</script>
<style>
    @import '../../styles/main.css';
</style>