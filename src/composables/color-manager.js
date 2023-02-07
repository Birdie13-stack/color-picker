import { ref, onMounted, onUnmounted, watch } from "vue";
import { reactive } from "@vue/reactivity";


export function colorManager () {
     const color = ref("");
     let colors = ref([]);
     
     const addColor = (color) => {
          colors.value = [...colors.value, color];
     };
     const removeColor = () => {};
     const fetchColors = () => {
          const defaultColors = [
               { name: "Red", hex: "#FF0000" },
               { name: "Green", hex: "#00FF00" },
          ];
          // get colors in localStorage
          const storedColors = localStorage.getItem("colors");
          console.log("storedColors", storedColors);
          if (storedColors) {
               return (colors.value = JSON.parse(storedColors));
          }
          colors.value = defaultColors;
     }

     onMounted(() => {
          fetchColors();
     })

    watch(colors, (val) => {
    localStorage.setItem("colors", JSON.stringify(colors.value));
    });

    return {
     colors,
     color,
     addColor,
    };

}
