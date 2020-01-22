// function name(params) {
//       $.ajax({
//           type: "POST",
//           url: "https://smtl.gama.academy/leads/f5d1c3f0-39f4-11ea-96ea-713ae26a8736",
//           data: data,
//       });
// }

var nome = document.getElementById("nome");
var email = document.getElementById("email");

console.log(nome);

$.ajax({
    method: "POST",
    url: "https://smtl.gama.academy/leads/f5d1c3f0-39f4-11ea-96ea-713ae26a8736/",
    data: { name: name, email: email }
});

console.log(nome);


// $(document).ready(function () {
//     $("#b").on("click", function () {

//         var name = $("#nome").val();
//         var email = $("#email").val();

//         console.log(name);
//         $.ajax({
//             method: "POST",
//             url: "https://smtl.gama.academy/leads/f5d1c3f0-39f4-11ea-96ea-713ae26a8736",
//             data: { name: name, email: email }
//         });
//     });
// });
