using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using db.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace db.Models
{
    public class Horario : IMongoDBCollection
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Data { get; set; }
        public string Hora { get; set; }
        public int Vagas { get; set; }
        public List<Reserva> Reservas { get; set; }
    }
}
