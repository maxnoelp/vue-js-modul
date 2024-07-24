Vue.createApp({
  data() {
    return {
      x: 12,
      y: 4,
      fruitBasket: [
        "🍏 Apple",
        "🍌 Banana",
        "🍉 Melon",
        "🫐 Blueberry",
        "🍓 Strawberry",
        "🍍 Ananas",
        "🥭 Mango",
      ],
      CorX: 0,
      CorY: 0,
    };
  },
  methods: {
    mouseMover(event) {
      this.CorX = event.clientX;
      this.CorY = event.clientY;
    },
    deleteFruits(index) {
      this.fruitBasket.splice(index, 1);
    },
  },
}).mount("#app");
