// ScrollReveal().reveal('.headerNavbar', {
//     delay: 375,
//     duration: 500,
//     left:1000
// });
$(document).ready(function(){

 $(".nav-items a").on('click', function(event) {
console.log('clicked');
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800 
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        
    ) // End if
  }
  });

console.log('Lets start here');
 const menuBtn = document.querySelector(".menu-icon span");
    const searchBtn = document.querySelector(".search-icon");
    const cancelBtn = document.querySelector(".cancel-icon");
    const items = document.querySelector(".nav-items");
    const form = document.querySelector("form");
    menuBtn.onclick = ()=>{
      items.classList.add("active");
      menuBtn.classList.add("hide");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
    cancelBtn.onclick = ()=>{
      items.classList.remove("active");
      menuBtn.classList.remove("hide");
      searchBtn.classList.remove("hide");
      cancelBtn.classList.remove("show");
      form.classList.remove("active");
      cancelBtn.style.color = "#ff3d00";
    }
    searchBtn.onclick = ()=>{
      form.classList.add("active");
      searchBtn.classList.add("hide");
      cancelBtn.classList.add("show");
    }
   
 $('#myCarousel').carousel({
    interval: 3000,
 })
var slideUp = {
    distance: '140%',
    origin: 'left',
    opacity: null,
    delay: 675,
    duration: 500,
    reset: true,
     interval: 600,
      rotate: {
        x: 20,
        z: 20
    }
};

ScrollReveal().reveal('.headerNavbar', slideUp);
var slideUp = {
    distance: '140%',
    origin: 'top',
    opacity: null,
    delay: 375,
    duration: 500,
    reset: true,
     interval: 600,
     easing:'cubic-bezier(0.5, 0, 0, 1)'

};
ScrollReveal().reveal('.headerShowcase', slideUp);
$(' #test').click(function(){
  // $('#table').css('display':'block');
  console.log('lets see');
  $('#table').css('display', 'block');
});
 // $(window).scroll(function(){
 //          var windowTop = $(window).scrollTop(),
 //          documentHeight = $(document).height(),
 //          windowHeight = $(window).height();
 //          var scroll = (windowTop / (documentHeight - windowHeight))*100;
 //          $('.scroll-line').css("width", (scroll + '%'));
 //        });




  // $("#myInput").on("keyup", function() {
  //   var value = $(this).val().toLowerCase();
  //   console.log(value);

  //    $("#myDiv").filter(function() {
  //      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
  //    });
  //  });

//   $.get("https://nepalcorona.info/api/v1/news" , function(data, status){

    
//     // alert("Data: " + data + "\nStatus: " + status);
    
// var fetchedArr=data
// console.log(data)
// for (var i = 0; i < fetchedArr.length; i++) {
//   var fetchedNames=fetchedArr[i];
//   var fetchedEmail=fetchedArr[i].email;
//     console.log(fetchedNames);
// // $('div tbody, #name')

// var x=fetchedNames;
// console.log(fetchedNames);
// var fetchedSource=$('div tbody, #name').prepend(fetchedNames);

// console.log(fetchedSource.childNodes.text);
// console.log(fetchedNames);
// $(' #email').prepend(fetchedName[i].email);
// $(' #address').prepend(fetchedName[i].address);


// for (fetchedName in fetchedNames) {
//   console.log(fetchedName);
// }
// var x =$('div tbody ,#name ');

// x.append(fetchedNames);
//     console.log(x);


    
    




// $('#addItem').click(function(e){
// var del=$('<button>X</button>');
// console.log(e)
//  var inputElement=$("<input type='text'>");
// // inputElement.css('width', 'fit-content');
// del.addClass('taek');
// // $('input').style('visibility':'visible');
// $('.flex').prepend(inputElement,del);
// })
// $('button').click(function(){
//   // $('input').empty();
//   console.log('CLicked k ');
//   $('.flex').remove();
// });
 

//  $.get("http://localhost:3000/posts" , function(data, status){
// var employee_data = data;

//     var table_data = '<tr>';
//     // var table_data = '<table class="table table-bordered table-striped">';
//     for(var count = 0; count<employee_data.length; count++)
//     {
//      var cell_data = employee_data[count];
     
    
//      for(var cell_count=0; cell_count<cell_data.length; cell_count++)
//      {
       

//       // if(count === 0)
//       // {
//       //  table_data += '<th>'+cell_data[cell_count]+'</th>';
//       // }
//       // else
//       // {
//       //  table_data += '<td>'+cell_data[cell_count]+'</td>';
//       // }
//      table_data += '<td>'+cell_data[cell_count]+'</td>';
     
//      }
     

//     }
//     // table_data += '</table>';
//     table_data += '</tr>';
    // console.log(table_data);
   
    
   // var x=$('tbody').html(table_data);
   

 // })
 $.ajax({
   url:"http://localhost:3000/posts",
   
  error: function() {
    $('#info').html('<p>An error has occurred</p>');
 },



   
  
  

   success:function(data)
   {
     // console.log( data);
    var employee_data = data;
    var table_data = '<tr>';
// console.log(table_data);
    // var table_data = '<table class="table table-bordered table-striped">';
    for(var count = 0; count<employee_data.length; count++)
    {
     var cell_data = employee_data[count];
     table_data += '<td>'+cell_data.id+'</td>';
     table_data += '<td>'+cell_data.name+'</td>';
     table_data += '<td>'+cell_data.username+'</td>';
     table_data += '<td>'+cell_data.email+'</td>';
     table_data += '<td>'+cell_data.phone+'</td>';
     table_data += '<td id=tableActions>Edit</td>';
     
     
     // for(var cell_count=0; cell_count<4; cell_count++)
     // {
     // console.log(cell_data);  

     //  // if(count === 0)
     //  // {
     //  //  table_data += '<th>'+cell_data[cell_count]+'</th>';
     //  // }
     //  // else
     //  // {
     //  //  table_data += '<td>'+cell_data[cell_count]+'</td>';
     //  // }
     // table_data += '<td>'+cell_data+'</td>';

     
     // }
     table_data += '</tr>';

    }
    // table_data += '</table>';
     
     console.log(table_data);
    $('tbody').html(table_data);
   }
 });



});

