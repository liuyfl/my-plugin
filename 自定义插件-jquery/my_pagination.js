function my_pagination(param){
  var defaults={
    tableclass:'',
    itemclass:'',
    pagerclass:'',
    itemnumber:'',
    tableheight:'',
    itemheight:'',
  };
  $.extend(defaults,param);
  var first=1,
      last=1,
      pageitem=Math.floor(defaults['tableheight']/defaults['itemheight']),
      totalpage=Math.ceil(defaults['itemnumber']/pageitem);
  function tablereset(){
    var origin=$('.'+defaults['tableclass']).find('.'+defaults['itemclass']),
        html,
        rhtml='',
        rpage='<li><a href="#" data-page="first">&laquo;</a></li>',
        opage,
        count,
        flag=false;
    // $('.'+defaults['tableclass']).html('');
    for(var i=1;i<=totalpage;i++)
    {
      html='<div class="datapager" data-page="'+i+'">';
      for(var j=0;j<pageitem;j++)
      {
        count=(i-1)*pageitem+j;
        if(count<defaults['itemnumber'])
          html+=origin[(i-1)*pageitem+j].outerHTML;
        else
          break;
      }
      html+='</div>';
      if(i<=5)
      {
        if(i==1)
          opage='<li class="active"><a href="#" data-page="'+i+'">'+i+'</a></li>';
        else
          opage='<li><a href="#" data-page="'+i+'">'+i+'</a></li>';
        rpage+=opage;
      }
      else
      {
        if(!flag)
        {
          opage='<li class="disabled"><a href="#">...</a></li>';
          rpage+=opage;
          flag=true;
        }
       
      }
      rhtml+=html;
    }
    rpage+='<li><a href="#" data-page="last">&raquo;</a></li>';
    $('.'+defaults['tableclass']).html(rhtml);
    $('.'+defaults['pagerclass']).find('.pagination').html(rpage);
  }
  function pageination_init(){
    $('.'+defaults['tableclass']).find('.datapager').css('display','none');
    $('.'+defaults['tableclass']).find('.datapager[data-page="'+first+'"]').css('display','block');
  }
  $(document).on('click','.'+defaults['pagerclass']+' .pagination a',function(){
    var target=$(this).attr('data-page');
    if(target=='first')
      target=1;
    else if(target=='last')
      target=totalpage;
    else if(target==null)
      return;
    else 
      target=parseInt(target);
    $('.'+defaults['tableclass']).find('.datapager').css('display','none');
    if(totalpage<=5)
    {
      $('.'+defaults['pagerclass']).find('.pagination li').removeClass('active');
      $(this).parent().addClass('active');
      first=target;
      $('.'+defaults['tableclass']).find('.datapager[data-page="'+first+'"]').css('display','block');
    }
    else
    {
      var h=target+2,f=target-2,html;
      if(h<=totalpage&&(f>=1))
      {
        html='<li><a href="#" data-page="first">&laquo;</a></li>';
        for(var i=f;i<=h;i++)
          if(i==target)
            html+='<li class="active"><a href="#" data-page="'+i+'">'+i+'</a></li>';
          else
           html+='<li><a href="#" data-page="'+i+'">'+i+'</a></li>';
        if(h<totalpage)
          html+='<li class="disabled"><a href="#">...</a></li>';
        html+='<li><a href="#" data-page="last">&raquo;</a></li>';
        $('.'+defaults['pagerclass']).find('.pagination').html(html);
      }
      else if(h>totalpage)
      {
        f=totalpage-4;
        html='<li><a href="#" data-page="first">&laquo;</a></li>';
        if(f>1)
          html+='<li class="disabled"><a href="#">...</a></li>';
        for(var i=f;i<=totalpage;i++)
          if(i==target)
            html+='<li class="active"><a href="#" data-page="'+i+'">'+i+'</a></li>';
          else
           html+='<li><a href="#" data-page="'+i+'">'+i+'</a></li>';
        html+='<li><a href="#" data-page="last">&raquo;</a></li>';
        $('.'+defaults['pagerclass']).find('.pagination').html(html);
      }
      else if(f<1)
      {
        h=5;
        html='<li><a href="#" data-page="first">&laquo;</a></li>';
        for(var i=1;i<=h;i++)
          if(i==target)
            html+='<li class="active"><a href="#" data-page="'+i+'">'+i+'</a></li>';
          else
           html+='<li><a href="#" data-page="'+i+'">'+i+'</a></li>';
        if(h<totalpage)
          html+='<li class="disabled"><a href="#">...</a></li>';
        html+='<li><a href="#" data-page="last">&raquo;</a></li>';
         $('.'+defaults['pagerclass']).find('.pagination').html(html);
      }
      first=target;
      $('.'+defaults['tableclass']).find('.datapager[data-page="'+first+'"]').css('display','block');
    }
  });
  this.size_reset=function (){
    pageitem=Math.floor($('.'+defaults['tableclass']).height()/defaults['itemheight']);
    totalpage=Math.ceil(defaults['itemnumber']/pageitem);
    tablereset();
    $('.'+defaults['pagerclass']+' .pagination a[data-page="'+first+'"]').click();
  }
  tablereset();
  pageination_init();
}