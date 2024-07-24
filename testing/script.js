// Vue.createApp({
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     clearBtn() {
//       this.count = 0;
//     },
//   },
// }).mount("#app");

Vue.createApp({
  data() {
    return {
      numbersWay: "",
      resultNum: "",
      openBracket: true,
    };
  },
  methods: {
    plusNumbers(event) {
      this.numbersWay += event.target.innerText;
    },
    resultDis(event) {
      this.resultNum = eval(this.numbersWay);
    },
    deleteOneNumBtn(event) {
      const delBtn = this.numbersWay;

      if (delBtn.length < 1) {
        return;
      }
      this.numbersWay = delBtn.substring(0, delBtn.length - 1);
    },
    deleteAllBtn(event) {
      this.numbersWay = "";
      this.resultNum = "";
      this.openBracket = true;
    },
    bracketBtn(event) {
      if (this.openBracket) {
        this.numbersWay += "(";
      } else {
        this.numbersWay += ")";
      }
      this.openBracket = !this.openBracket;
    },
  },
}).mount("#app");
