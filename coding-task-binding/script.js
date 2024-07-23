// const { generate } = require("@vue/compiler-core");

Vue.createApp({
  data() {
    return {
      headline: "Attribute Binding is awesome",
      imageAttrs: {
        src: "https://picsum.photos/id/237/200/300",
        alt: "A cute dog",
      },
    };
  },
  methods: {
    getNewId() {
      return this.headline.toLowerCase().replace(/\s+/g, "-");
    },
  },
}).mount("#app");
