using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using db.Services;
using db.Models;
using Microsoft.AspNetCore.Cors;
using System.Net.Http;
using System.Text;

namespace api.Controllers
{
    //[DisableCors]
    [ApiController]
    [Route("[controller]")]
    public class AgendamentoController : ControllerBase
    {
        private readonly AgendamentoService _dbService;

        public AgendamentoController(AgendamentoService AgendamentoService)
        {
            _dbService = AgendamentoService;
        }

        [HttpGet]
        public ActionResult<List<Agendamento>> Get() =>
         _dbService.Get();

        [HttpGet("{date:length(10)}", Name = "GetAgendamento")]
        public ActionResult<Agendamento> Get(string date)
        {
            var agendamento = _dbService.GetByDate(date);

            //apaga os horários já preenchidos..
            agendamento.Horarios.RemoveAll(x => x.Vagas == 0);

            if (agendamento == null)
            {
                return NotFound();
            }

            return agendamento;
        }

        //[HttpGet("ListarAgendamentosAlternativas/{modelo}")]
        //public ActionResult<List<Agendamento>> ListarAgendamentosAlternativas(string modelo)
        //{
        //    var lista = _dbService.ListarAgendamentosAlternativas(modelo);
        //    return lista;
        //}

        //[HttpGet("ListarQuantidadeAgendamentosAlternativas")]
        //public ActionResult<List<AgendamentoQuantidadePorModelo>> ListarQuantidadeAgendamentosAlternativas()
        //{
        //    return _dbService.ListarQuantidadeAgendamentosAlternativas();
        //}

        [HttpPost]
        public ActionResult<Agendamento> Create(Agendamento agendamento)
        {
            agendamento.DataCriacao = DateTime.Now;
            agendamento.DataAlteracao = agendamento.DataCriacao;

            _dbService.Create(agendamento);
            return CreatedAtRoute("GetAgendamento", new { id = agendamento.Id.ToString() }, agendamento);
        }

        //[HttpPut("Curtida/{id}")]
        //public ActionResult<Agendamento> Curtida(string id)
        //{
        //    //precisa ter validação para não permitir um usuário logado curtir mais de uma vez
        //    var peca = _dbService.Get(id);
        //    peca.QuantidadeAprovacao += 1;
        //    _dbService.Update(id, peca);

        //    return CreatedAtRoute("GetAgendamento", new { id = peca.Id.ToString() }, peca);
        //}

        //[HttpPut("Reprovacao/{id}")]
        //public ActionResult<Agendamento> Reprovacao(string id)
        //{
        //    //precisa ter validação para não permitir um usuário logado curtir mais de uma vez
        //    var peca = _dbService.Get(id);
        //    peca.QuantidadeReprovacao += 1;
        //    _dbService.Update(id, peca);

        //    return CreatedAtRoute("GetAgendamento", new { id = peca.Id.ToString() }, peca);
        //}

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var peca = _dbService.Get(id);

            if (peca == null)
            {
                return NotFound();
            }

            _dbService.Remove(peca.Id);

            return NoContent();
        }
    }
}