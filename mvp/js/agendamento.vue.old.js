var app = new Vue({
    el: '#app',
    data: function() {
      return {
        enviado: false,
        horarios: {},
        estaca: {},
        estacas: {},
        reserva: { data: '', horario: '' }
      }
  },
  
    mounted () {
      //let uri = window.location.search.substring(1); 
      //let params = new URLSearchParams(uri);

      axios.get("assets/horarios.json")
      .then(response => (this.horarios = response.data));

      axios.get("assets/estacas.json")
           .then(response => (this.estacas = response.data));
    },
    
    methods: {
      enviarAgendamento: function () {
        //enviar post passando como parâmetor o objeto this.novaPeca;
        //o axios converte o objeto para string (JSON.stringify) automaticamente.
        this.enviado = true;
        
        $('#modalPromptReserva').modal('hide');
        // axios.post(apiURL() + "peca", this.novaPeca)
        //     .then(response => {
        //         this.redirecionando = true;
        //         app.atualizaListaPecasAlternativas();
        //         this.limpaFormulario();
        //     })
        //     .catch(e => {
        //         //this.errors.push(e)
        //     });
    }
      // atualizaReferencias: function() {
      //   this.AnosModeloSelecionado = [];
      //   this.novaPeca.Marca = this.marcaSelecionada.nome;
      // },
      // atualizaReferenciasAnos: function() {
      //    //atualiza o modelo selecionado;
      //    this.novaPeca.Modelo = this.modeloSelecionado.nome;        
      //    this.AnosModeloSelecionado = this.modeloSelecionado.ano;
      //  },

      //  atualizaAnoSelecionado: function() {
      //   this.novaPeca.Ano = this.anoSelecionado; 
      //  },

      //  enviarPecaAlternativa: function() {
      //    //enviar post passando como parâmetor o objeto this.novaPeca;
      //    //o axios converte o objeto para string (JSON.stringify) automaticamente.
      //    this.enviado = true;
      //    this.novaPeca.ModeloOrigem = this.modelo.id;
      //    axios.post("https://localhost:44300/peca", this.novaPeca)
      //   .then(response => {
      //     this.redirecionando = true;
      //     window.location.href = "http://127.0.0.1:5500/modelo.html?id=" + this.modelo.id;
      //   })
      //   .catch(e => {
      //     //this.errors.push(e)
      //   })

      //  }

    }
    
  })