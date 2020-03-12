using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using db.Interfaces;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace db.Models
{
    public class Reserva : IMongoDBCollection
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Contato { get; set; }
        public string Telefone { get; set; }
        public string Data { get; set; }
        public string Unidade { get; set; }
        public string NomeUnidade { get; set; }
        [BsonIgnore]
        public string NomeUnidadeLimpo
        {
            get
            {
                if (string.IsNullOrWhiteSpace(NomeUnidade) == false) return NomeUnidade.Replace("Estaca", ""); else return "";
            }
        }
        public List<Horario> Horarios { get; set; }
        public DateTime DataCriacao { get; set; }
    }
}
