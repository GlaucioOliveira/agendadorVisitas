using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using db.Models;
using MongoDB.Driver;
using db.Interfaces;

namespace db.Services
{
    public class HorarioService : BaseService<Horario>, IDatabaseService
    {
        public HorarioService(IDatabaseSettings settings) : base(settings)
        {
        }
    }
}
