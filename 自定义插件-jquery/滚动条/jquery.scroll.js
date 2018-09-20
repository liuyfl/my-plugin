/*
*************************
滚动条自定义
*************************
*/
;(function($){
	$.fn.scrollbar=function(param){
		var that=this;
		var dtparam={
			scrollbar_width:'8px',
			scrollbar_height:'8px',
			scrollbar_bg:'#b9b9b9',
			scrollbar_thunmb:'#5595bb'
		};
		var init=function(){
			that.each(function(){
				var t=$(this);
				t.addClass('customscrollbar');
				t.wrapInner('<div class="customscrollbar_box"><div class="customscrollbar_container"></div></div>');
				var b=t.children('.customscrollbar_box');
				b.append('<div class="customscrollbar_scroll customscrollbar_scroll_horizontal"><div class="customscrollbar_bar"></div><div class="customscrollbar_thumb"></div></div>');
				b.append('<div class="customscrollbar_scroll customscrollbar_scroll_vertical"><div class="customscrollbar_bar"></div><div class="customscrollbar_thumb"></div></div>');
				// t.apply(showd);
				// showd();
			});
		};
		var showd=function(){
			that.each(function(){
				var s=$(this),
					b=s.children('.customscrollbar_box'),
					c=s.find('.customscrollbar_container'),
					vt=s.find('.customscrollbar_scroll_vertical'),
					ht=s.find('.customscrollbar_scroll_horizontal'),
					bh=b.outerHeight(),
					ch=c.outerHeight(),
					bw=b.outerWidth(),
					cw=c.outerWidth();
				if(ch>bh)
				{
					vt.css('display','block');
					var vth=vt.height(),o=Math.ceil(bh/ch*vth),t=vt.find('.customscrollbar_thumb');
					t.css('height',o+'px');
					s[0].addEventListener('wheel',scrolling);
				}
				else
				{
					vt.css('display','none');
				}
				if(cw>bw)
				{
					ht.css('display','block');
				}
				else
				{
					ht.css('display','none');
				}
			})
		};
		var scrolling=function(e){
			var s=this,d,p,c=$(this).find('.customscrollbar_container'),b=$(this).find('.customscrollbar_scroll_vertical'),r=b.find('.customscrollbar_thumb');
			e=e||window.event;
			if(e.wheelDelta)//IE,chrome
			{
				console.info(e.wheelDelta);
				if(e.wheelDelta > 0)
				{
					d=b.offset().top-c.offset().top;
					d-=10;
					if(d<0)
						d=0;
					else if(d>b.outerHeight()-r.height())
					{
						d=b.outerHeight()-r.height();
					}
					console.info(d);
					r.css('top',d+'px');
					console.info(-d/b.height()*c.height());
					c.css('top',-d/b.height()*c.height()+'px');
				}
				if(e.wheelDelta < 0)
				{
					d=b.offset().top-c.offset().top;
					d+=10;
					if(d<0)
						d=0;
					else if(d>b.outerHeight()-r.height())
					{
						d=b.outerHeight()-r.height();
					}
					console.info(d);
					r.css('top',d+'px');
					console.info(-d/b.height()*c.height());
					c.css('top',-d/b.height()*c.height()+'px');
				}
			}
			else if(e.detail)//firefox
			{
				console.info(e.detail);
				if(e.detail > 0)
				{

				}
				if(e.detail < 0)
				{

				}
			}
		};
		init();
		showd();
	}
})(jQuery);