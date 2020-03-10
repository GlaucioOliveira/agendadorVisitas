using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using db.Models;
using MongoDB.Driver;
using db.Interfaces;

namespace db.Services
{
    public class AgendamentoService : BaseService<Agendamento>, IDatabaseService
    {
        public AgendamentoService(IDatabaseSettings settings) : base(settings)
        {
        }

        public Agendamento GetByDate(string data)
        {
            data = data.Replace("-", "/");
            return _collection.Find(x => x.Data == data).FirstOrDefault();
        }
    }
}
