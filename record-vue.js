var record = new Vue({ 
  // vue 를 정의함과 동시에 export
  el: '#contents',

  data: {
      userText: ""
  },

  computed: {
      formattedText() {
          return this.userText.replace(/(?:\r\n|\r|\n)/g, '<br>')
          // googling
      }
  }
})

export default record;