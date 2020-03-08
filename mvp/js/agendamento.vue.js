var app = new Vue({
    el: '#app',
    data: function() {
      return {
      enviado: false,
      redirecionando: false,
      marcaSelecionada: [],
      modeloSelecionado: [],
      modelo: [],
      marcas: null,
      AnosModeloSelecionado: [],
      anoSelecionado: null,
      saida: '',
      novaPeca: {
        Marca: '',
        Modelo: '',
        ModeloOrigem: '',
        Ano: '',
        PecaNome: '',
        NecessitaAdaptacao: false,
        Observacao: ''
      },
      horarios: [
        {id: 0, hora: "09:00 - 09:15", vagas:0 },
        {id: 1, hora: "09:15 - 09:30", vagas:5 },
        {id: 2, hora: "09:30 - 09:45", vagas:3 },
        {id: 3, hora: "09:45 - 10:00", vagas:4 },
        {id: 4, hora: "10:00 - 10:15", vagas:0 },
        {id: 5, hora: "10:15 - 10:30", vagas:5 },
        {id: 6, hora: "10:30 - 10:45", vagas:3 },
        {id: 7, hora: "10:45 - 11:00", vagas:4 },
        {id: 8, hora: "11:00 - 11:15", vagas:3 },
        {id: 9, hora: "11:15 - 11:30", vagas:2 },
        {id: 10, hora: "11:30 - 11:45", vagas:7 },
        {id: 11, hora: "11:45 - 12:00", vagas:2 },
        {id: 12, hora: "12:00 - 12:15", vagas:1 },
        {id: 13, hora: "12:15 - 12:30", vagas:2 },
        {id: 14, hora: "12:30 - 12:45", vagas:5 },
        {id: 15, hora: "12:45 - 13:00", vagas:2 },
        {id: 16, hora: "13:00 - 13:15", vagas:0 },
        {id: 17, hora: "13:15 - 13:30", vagas:0 },
        {id: 18, hora: "13:30 - 13:45", vagas:2 },
        {id: 19, hora: "13:45 - 14:00", vagas:2 },
        {id: 20, hora: "14:00 - 14:15", vagas:7 },
        {id: 21, hora: "14:15 - 14:30", vagas:5 },
        {id: 22, hora: "14:30 - 14:45", vagas:8 },
        {id: 23, hora: "14:45 - 15:00", vagas:8 },
        {id: 24, hora: "15:00 - 15:15", vagas:6 },
        {id: 25, hora: "15:15 - 15:30", vagas:2 },
        {id: 26, hora: "15:30 - 15:45", vagas:7 },
        {id: 27, hora: "15:45 - 16:00", vagas:4 },
        {id: 28, hora: "16:00 - 16:15", vagas:8 },
        {id: 29, hora: "16:15 - 16:30", vagas:1 },
        {id: 30, hora: "16:30 - 16:45", vagas:3 },
        {id: 31, hora: "16:45 - 17:00", vagas:8 },
        {id: 32, hora: "17:00 - 17:15", vagas:5 },
        {id: 33, hora: "17:15 - 17:30", vagas:6 },
        {id: 34, hora: "17:30 - 17:45", vagas:0 },
        {id: 35, hora: "17:45 - 18:00", vagas:5 },
        {id: 36, hora: "18:00 - 18:15", vagas:4 },
        {id: 37, hora: "18:15 - 18:30", vagas:0 },
        {id: 38, hora: "18:30 - 18:45", vagas:7 },
        {id: 39, hora: "18:45 - 19:00", vagas:7 },
        {id: 40, hora: "19:00 - 19:15", vagas:7 },
        {id: 41, hora: "19:15 - 19:30", vagas:3 },
        {id: 42, hora: "19:30 - 19:45", vagas:7 },
        {id: 43, hora: "19:45 - 20:00", vagas:2 },
        {id: 44, hora: "20:00 - 20:15", vagas:8 },
        {id: 45, hora: "20:15 - 20:30", vagas:8 },
        {id: 46, hora: "20:30 - 20:45", vagas:2 },
        {id: 47, hora: "20:45 - 21:00", vagas:3 },
        {id: 48, hora: "21:00 - 21:15", vagas:8 }
    ],
    estaca: {},
    estacas: [
      {
          "nome": "Estaca Arsenal Brasil",
          "id": "1075276",
          "tipo": "Estaca",
          "presidente_estaca": "Marcus Elias Jeremias de Andrade",
          "telefone_residencial": "55 21-9-8813-9639",
          "telefone_trabalho": "55 21-9-8813-9639",
          "email": "mejandrade@hotmail.com"
      },
      {
          "nome": "Estaca Macaé Brasil",
          "id": "616184",
          "tipo": "Estaca",
          "presidente_estaca": "Wagner Destro",
          "telefone_residencial": "55 22-2773-3176",
          "celular": "55 22-99824-7113",
          "telefone_trabalho": "55 22-2753-5156",
          "email": "w_destro@yahoo.com.br"
      },
      {
          "nome": "Estaca Niterói Brasil",
          "id": "508624",
          "tipo": "Estaca",
          "presidente_estaca": "Leonardo Luchetti Cortinhas",
          "telefone_residencial": "55 21-9-8789-2702",
          "celular": "55 21-9-8789-2702",
          "email": "leonardo_cortinhas@hotmail.com"
      },
      {
          "nome": "Estaca Nova Iguaçu Brasil",
          "id": "526606",
          "tipo": "Estaca",
          "presidente_estaca": "Luís Henrique da Silva",
          "telefone_residencial": "55 21-3540-2526",
          "celular": "55 21-96954-3936",
          "email": "lhenriquesud@gmail.com"
      },
      {
          "nome": "Estaca Rio de Janeiro Brasil Andaraí",
          "id": "511838",
          "tipo": "Estaca",
          "presidente_estaca": "Fernando da Silva Torres",
          "telefone_residencial": "55 21-2051-3821",
          "celular": "55 21-99447-5373",
          "email": "rh-torres@uol.com.br"
      },
      {
          "nome": "Estaca Rio de Janeiro Brasil Campo Grande",
          "id": "526479",
          "tipo": "Estaca",
          "presidente_estaca": "Marcelo Alexandre Vascurado",
          "telefone_residencial": "55 21-2146-8957",
          "celular": "55 21-97474-7586",
          "telefone_trabalho": "55 21-3292-5895",
          "email": "marcelovascurado@gmail.com"
      },
      {
          "nome": "Estaca Rio de Janeiro Brasil Engenho de Dentro",
          "id": "1628577",
          "tipo": "Estaca",
          "presidente_estaca": "Antonio Alves Passos",
          "telefone_residencial": "55 21-3276-6619",
          "celular": "55 21-9-8182-7743",
          "email": "alves_passos@yahoo.com.br"
      },
      {
          "nome": "Estaca Rio de Janeiro Brasil Itaguaí",
          "id": "467111",
          "tipo": "Estaca",
          "presidente_estaca": "Joilton R. Melo",
          "telefone_residencial": "55 21-3782-2258",
          "celular": "55 21-98453-0266",
          "email": "joiltonrizomelo@gmail.com"
      },
      {
          "nome": "Estaca Rio de Janeiro Brasil Jacarepagua",
          "id": "527726",
          "tipo": "Estaca",
          "presidente_estaca": "Ramiro de Queiroz Martins Silva",
          "telefone_residencial": "55 21-3417-3327",
          "celular": "55 21-98164-5454",
          "telefone_trabalho": "55 21-96673-0476",
          "email": "ramiroqms@gmail.com"
      },
      {
          "nome": "Estaca Rio de Janeiro Brasil Madureira",
          "id": "515884",
          "tipo": "Estaca",
          "presidente_estaca": "Marco Antonio Nogueira de Campos Junior",
          "telefone_residencial": "55 21-3177-0956",
          "celular": "55 21-9-6807-2847",
          "telefone_trabalho": "55 21-9-7242-4821",
          "email": "marcocamposjr@hotmail.com"
      },
      {
          "nome": "Estaca Rio de Janeiro Brasil",
          "id": "506494",
          "tipo": "Estaca",
          "presidente_estaca": "Flávio Valladão Ferreira",
          "celular": "55 21-9-9177-7309",
          "email": "fvalladaof@gmail.com"
      }
  ],
      reserva: {
        data: '',
        horario: ''
      }
    }
  },
  
    mounted () {
      //let uri = window.location.search.substring(1); 
      //let params = new URLSearchParams(uri);

      // axios.get("https://localhost:44300/marca")
      //      .then(response => (this.marcas = response.data));

      //      axios.get("https://localhost:44300/modelo/" + params.get("id"))
      //      .then(response => (this.modelo = response.data));
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