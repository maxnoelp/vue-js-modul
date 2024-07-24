// let switcher = false;

// const button = document.querySelector("button");
// button.addEventListener("click", function (e) {
//   switcher = !switcher;
//   if (switcher) {
//     document.body.classList.add("body-off");
//     button.classList.add("button-off");
//   } else {
//     document.body.classList.remove("body-off");
//     button.classList.remove("button-off");
//   }
// });

Vue.createApp({
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleSwitcher() {
      this.isActive = !this.isActive;
    },
  },
}).mount("#app");
