<script>
import ColorPickerGame from "./components/ColorPickerGame.vue";
import Recap_01_02_2023 from "./components/Recap_01_02_2023.vue";
import { colorManager } from "./composables/color-manager";

const { color, colors, addColor, removeColor } = colorManager();


export default {
  components: { ColorPickerGame, Recap_01_02_2023 },
  data() {
    return {
      currentLesson: "color-picker-game",
    };
  },
};
</script>

<template>
  <ColorPickerGame v-if="currentLesson === 'color-picker-game'" />
  <Recap_01_02_2023 v-else />
  Current color is at: {{ colors }}
</template>

<style scoped></style>
