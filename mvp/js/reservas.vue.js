var app = new Vue({
  el: '#app',
  data: function () {
    return {
      reservas: {},
    }
  },

  mounted() {
    axios.get("https://localhost:44300/reserva/")
      .then(response => (this.reservas = response.data));
  }
})