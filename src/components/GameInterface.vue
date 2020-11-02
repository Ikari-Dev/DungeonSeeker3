<template>
    <div class="pannelInterface">
        <MenuButton v-on:click.native="retour()">Retour menu</MenuButton>
    </div>
</template>
<script>
import MenuButton from './MenuButton.vue'

export default {
    components: {
        MenuButton,
    },
    methods: {
        retour(){
            this.$parent.game = false
            this.$parent.menu = true
        },

    },
}
</script>
<style>
    @import '../../styles/mainModerne.css';
    @import '../../styles/main.css';
</style>