$(document).ready(function () {

    $.ajaxSetup({ cache: false });
    $("html").niceScroll({
        cursorcolor:"#fab347"
    });
    $(".table-right").niceScroll({
        cursorcolor:"#fab347"
    });
    $(".table-resrv").niceScroll({
        cursorcolor:"#fab347"
    });
    $(".notes").niceScroll({
        cursorcolor:"#fab347"
    });



    var orderitems=[];
    var order=[];
    var appendclass = 0;
    var count=0;
    var flag = false;

    $('.btn-coffe').click(function(){
        count ++;
        if(!flag && jQuery.inArray($(this).attr('name'), orderitems) == -1 ){
            count =0;
            appendclass++;
            var tag1 = "<div class='choose-meal ' id = '"+$(this).attr('name')+"'>" +
                 "<span class='getname'>"+ $(this).attr('name')+"</span>" +
                 "<input  class='getNumer' type=\"text\" value='1'>" +
                 "<span class='plus' >+ <script>    $('.plus').click(function () {\n" +
                 "        var plusspan  = $(this).next().next().attr('price');\n" +
                 "        var plusitem  = parseInt( $(this).prev().val());\n" +
                 "        plusitem++;\n" +
                 "        $(this).prev().val(plusitem);\n" +
                 "        var total = plusitem * plusspan;\n" +
                 "        $(this).next().next().text(total+' ');\n" +
                 "    });</script></span>" +
                 "<span class='mins' >-<script> $('.mins').click(function () {\n" +
                 "\n" +
                 "        var minsspan = $(this).next().attr('price');\n" +
                 "      var minsitem = parseInt($(this).prev().prev().val());\n" +
                 "      minsitem--;\n" +
                 "      if (minsitem <= 0) {\n" +
                 "\n" +
                 "      minsitem =1;    \n" +
                 "      } else {\n" +
                 "          $(this).prev().prev().val(minsitem);\n" +
                 "          var total = minsitem * minsspan;\n" +
                 "          $(this).next().text(total+' ');\n" +
                 "\n" +
                 "      }\n" +
                 "\n" +
                 "  });</script></span>" +
                 "<span class='getprice "+$(this).attr('name')+"' price='"+$(this).attr('price')+"'style=\" margin-left:5px;\">"+$(this).attr('price').trim()+" </span><span>EGP</span>" +
                 "</div>"   ;

            orderitems.push($(this).attr('name'));
            $(".table-resrv").append(tag1);
                flag = true;
        }else{

            var itemcont =  $("#"+$(this).attr('name')+ " input").val();
            var itemspan = parseInt($('.'+$(this).attr('name')).attr('price'));
            var item2 = parseInt(itemcont);
            item2++;
            $("#"+$(this).attr('name')+ " input").val(item2);

            var total = item2 * itemspan;
            $('.'+$(this).attr('name')).text(total+' ');
            flag =false;
        }
    });


    setInterval(function(){

        var cellar = [];
        var cell = $('.choose-meal .getprice').text();
        cellar =cell.match(/\S+/g);

        var c = 0;
        if(cellar == null){

        }else {

            for(var i=0;i<cellar.length;i++){
                c += parseInt(cellar[i]);
            }
            $(".gettotal").text(c);

        }
    }, 100);





    });



