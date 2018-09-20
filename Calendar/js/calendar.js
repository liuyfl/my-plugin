var otherJS = 'lang/en.js';//js的地址，请自定义
document.write('<scr' + 'ipt type="text/javascript" src="'+otherJS+'"></scr' + 'ipt>');
function Calendar(param){
	var _self=this;
	var init=function(){
		var cur_date=new Date();
		_self.year=cur_date.getFullYear();
		_self.month=cur_date.getMonth()+1;
		_self.day=cur_date.getDate();
	}
	var outputHTML=function(param){
		var html='<div class="datebox">';
		html += '<input type="text" class="calendar-input"><span class="date-arrow"></span></div>';
		html += '<div class="calendar"><div class="calendar-top">';
		html += '<div class="calendar-preyear"></div>';
		html += '<div class="calendar-premonth"></div>';
		html += '<div class="calendar-nextmonth"></div>';
		html += '<div class="calendar-nextyear"></div>';
		html += '<div class="calendar-time">';
		html += '<input type="text" class="calendar-month">';
		html += '<input type="text" class="calendar-year"></div></div>';

		html += '<div class="calendar-index">';
		html += '<table cellspacing="0" cellspadding="0" border="0">';
		html += '<thead><tr align=center valign=middle>';
		for(var i=0;i<7;i++)
		{
			html += '<th>'+$lang['week'][i]+'</th>';
		}
		html += '</tr></thead>';
		html += '<tbody>';
		for(var i=0;i<6;i++)
		{
			html += '<tr align=center valign=middle>';
			for(var j=0;j<7;j++)
			{
				html += '<td >1</td>';
			}
			html += '</tr>';
		}
		html += '</tbody></table>';
		html += '</div></div>';
		document.write(html);
	}
	var adjustParam=function(param){
		var defaultparam={
			width:218,
			lang:'en'
		}
		$.extend(defaultparam,param);
		return defaultparam;
	}
	var adjustCSS=function(param)
	{
		
	}
	var addEvents=function()
	{
		function getFirstDay(year,month){//获取本月第一天
			var date=new Date(year,month,1);
			var firstday=date.getDay();
			return firstday;
		}
		function getDays(year,month){//获取本月的天数
			if(month==2)
			{
				if((year%4==0&&year%100!=0)||(year%400==0))
					return 29;
				else
					return 28;
			}
			else if(month==1||month==3||month==5||month==7||month==8||month==10||month==12)
				return 31;
			else
				return 30;
		}
		function showcalendar(year,month,day)
		{
			var html=$('.calendar-index table td');
			var firstday=getFirstDay(year,month-1);
			var days=getDays(year,month);
			var i,j,index=0,daycount=1,count=0;
			for(i=1;i<=(Math.ceil(days+firstday)/7);i++)
			{
				for(j=1;j<=7;j++)
				{
					if(index<firstday)
					{
						html[count++].innerHTML=" ";
						index++;
					}
					else
					{
						if(daycount==day)
						{
							html[count++].innerHTML="<font color=red>"+daycount+"</font>";
						}
						else
							html[count++].innerHTML=daycount;
						daycount++;
						index++;
					}
				}
			}
			$('.calendar-month').val(month);
			$('.calendar-year').val(year);
		}
		$('.calendar-nextmonth').click(function(){
			_self.month=_self.month+1;
			if(_self.month>12)
			{
				_self.year=_self.year+1;
				_self.month=1;
			}
			showcalendar(_self.year,_self.month,_self.day);
		});
		$('.calendar-nextyear').click(function(){
			_self.year=_self.year+1;
			showcalendar(_self.year,_self.month,_self.day);
		});
		$('.calendar-premonth').click(function(){
			_self.month=_self.month-1;
			if(_self.month<0)
			{
				_self.year=_self.year-1;
				_self.month=12;
			}
			showcalendar(_self.year,_self.month,_self.day);
		});
		$('.calendar-preyear').click(function(){
			_self.year=_self.year-1;
			showcalendar(_self.year,_self.month,_self.day);
		});
		showcalendar(_self.year,_self.month,_self.day);
	}
	var param=adjustParam(param);
	_self.param=param;
	init(param);
	outputHTML(param);
	adjustCSS(param);
	addEvents();
}