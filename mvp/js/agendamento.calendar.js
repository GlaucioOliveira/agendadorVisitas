$(function() {
    $('input[name="data-agendamento"]').daterangepicker({
      singleDatePicker: true,
      showDropdowns: true,
      minYear: 2020,
      // isCustomDate: function (date){
      //   if(date.day() === 6)
      //   {
      //     return "text-light";
      //   }
      // },
      isInvalidDate: function(date)
      {
        if(date.day() === 0 || date.isBetween('2020-04-16', '2020-05-03') == false) 
        {
          return true;
        }
      },
      maxYear: parseInt(moment().format('YYYY'),10),
      locale: {
        "format": "DD/MM/YYYY",
        "daysOfWeek": [
        "Dom",
        "Seg",
        "Ter",
        "Qua",
        "Qui",
        "Sex",
        "Sáb"],
    "monthNames": [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ]
      }
    }, function(start, end, label) {
      //var years = moment().diff(start, 'years');
      //alert("You are " + years + " years old!");
      //talves verificar se o dia é valido...            
    });
  });