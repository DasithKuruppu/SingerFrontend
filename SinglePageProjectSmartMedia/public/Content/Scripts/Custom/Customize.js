$(document).ready(function () {
    var currentpath = '';


    $(window).on('hashchange', function (e) {
        currentpath = window.location.href.split('#')[1];

       
         if (currentpath == 'products') {

             $("#sitecontent").load("/SubPages/Products_List.html #maincontent");

             //$.get("/SubPages/Products_List.html", function (data, status) {
             //    var extract = $(data).find('body');
             //    $("#sitecontent").html(extract);
             //});
         }
         else if (currentpath=="productdetail=45tydh") {
             $("#sitecontent").load("/SubPages/Product_Detail.html #mainproductcontent",function () {
                 $('#productImages').carousel({
                     auto: false,
                     period: 3000,
                     duration: 2000,
                     effect: "slowdown",
                     markers: {
                         type: "cycle",
                         position: "bottom-center"
                     },
                     height:450

                 });
             });
          
           
         }
         else if (currentpath == 'home') {
             window.location.href = '/index.html';
         }


    });
     $(window).on('load', function (e) {
         currentpath = window.location.href.split('#')[1];
         subpath = '';
         if (currentpath != null) {
             subpath = currentpath.split('?')[1];
             if (subpath != null) {
                 currentpath = currentpath.split('?')[0];

             }
         }
         if (currentpath == 'products') {

             $("#sitecontent").load("/SubPages/Products_List.html #maincontent");

             //$.get("/SubPages/Products_List.html", function (data, status) {
             //    var extract = $(data).find('body');
             //    $("#sitecontent").html(extract);
             //});
         }
         else if (currentpath == 'productdetail=45tydh') {
             $("#sitecontent").load("/SubPages/Product_Detail.html #mainproductcontent", function () {
                 $('#productImages').carousel({
                     auto: false,
                     period: 3000,
                     duration: 2000,
                     effect: "slowdown",
                     markers: {
                         type: "cycle",
                         position: "bottom-center"
                     },
                     height:450

                 });
             });
          
         }
       
      

    });

    $('#mainpageCorosal').carousel({
        auto: true,
        period: 3000,
        duration: 2000,
        effect:"slowdown",
        markers: {
            type: "cycle",
            position: "bottom-center"
        },
        height:400
    });

  

    $("#shoppingcartbtn").click(function () {
        $("#shoppingcartdetails").slideToggle(500);
    });
    $("#Userbtn").click(function () {
        $("#userdetails").slideToggle(500);
    });

    $(document.body).on('click', '#Sortbtn' ,function(){
        $("#Sortdetails").slideToggle(500);
        
    })
    jQuery(window).resize(checkWindowSize);
    checkWindowSize();
    $(document.body).on('click', '#productspecstab ul li a', function () {
        $("#productspecstab ul li").removeClass("active");
        $(this).parent().addClass("active");
        var TabId = $(this).attr('href').split('tab=')[1];

        $("#productspecstab .frame").css("display", "none");
        $("#" + TabId).css("display", "block");
       
    })
  

});


function checkWindowSize() {
    if (jQuery(window).width() >= 480) {
        $('.truncate').succinct({
            size: 100
        });
    }
    else if (jQuery(window).width() >= 320) {
        $('.truncate').succinct({
            size: 55
        });
    }
    else {
        $('.truncate').succinct({
            size: 150
        });
    }
}