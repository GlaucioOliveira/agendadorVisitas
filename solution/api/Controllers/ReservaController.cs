using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using db.Services;
using db.Models;

namespace api.Controllers
{
    //[DisableCors]
    [ApiController]
    [Route("[controller]")]
    public class ReservaController : ControllerBase
    {
        private readonly ReservaService _dbService;

        public ReservaController(ReservaService ReservaService)
        {
            _dbService = ReservaService;
        }

        //[HttpGet]
        //public ActionResult<List<Reserva>> Get() =>
        // _dbService.Get();

        [HttpGet]
        public ActionResult<List<Reserva>> Get()
        {
            return _dbService.GetOrdered();
        }

        [HttpGet("{id:length(24)}", Name = "GetReserva")]
        public ActionResult<Reserva> Get(string id)
        {
            var peca = _dbService.Get(id);

            if (peca == null)
            {
                return NotFound();
            }
            return peca;
        }

        [HttpPost]
        public ActionResult<Reserva> Create(Reserva reserva)
        {
            reserva.DataCriacao = DateTime.Now;
            _dbService.CreateAndUpdateCounter(reserva);
            return CreatedAtRoute("GetReserva", new { id = reserva.Id.ToString() }, reserva);
        }

        [HttpDelete("{id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var reserva = _dbService.Get(id);

            if (reserva == null)
            {
                return NotFound();
            }

            _dbService.RemoveAndUpdateCounter(reserva.Id);
            return NoContent();
        }
    }
}