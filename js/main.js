jQuery.datetimepicker.setLocale('fr');

jQuery('#departdate').datetimepicker({
 timepicker:false,
 format:'d.m.Y'
});


jQuery('#retourtime').datetimepicker({
 datepicker:false,
});



jQuery('#retourDate').datetimepicker({
 format:'d.m.Y H:i'
});



jQuery(function(){
 jQuery('#date_timepicker_start').datetimepicker({
  format:'Y/m/d',
    minDate: 0,
  onShow:function( ct ){
   this.setOptions({
    maxDate:jQuery('#date_timepicker_end').val()?jQuery('#date_timepicker_end').val():false
   })
  },
  timepicker:false
 });
 jQuery('#date_timepicker_end').datetimepicker({
  format:'Y/m/d',
  onShow:function( ct ){
   this.setOptions({
    minDate:1+ jQuery('#date_timepicker_start').val()?jQuery('#date_timepicker_start').val():false
   })
  },
  timepicker:false
 });
});


var dateToDisable = new Date();
	dateToDisable.setDate(dateToDisable.getDate() + 4);
$('#specialdate').datetimepicker({
	beforeShowDay: function(date) {
		if (date.getMonth() == dateToDisable.getMonth() && date.getDate() == dateToDisable.getDate()) {
			return [true, "custom-date-style"];
		}

		return [true, ""];
	}
});
