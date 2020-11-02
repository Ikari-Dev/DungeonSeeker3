<template>
    <div>
        <button v-bind:class="{ menuButtonRetro: this.$parent.retro, menuButton: this.$parent.moderne }">
            
            <slot></slot>
            
        </button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    @import '../../styles/mainModerne.css';
    @import '../../styles/main.css';
</style>