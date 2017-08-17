$( document ).ready(function() {
  function showHex(){
          var hex =  document.querySelector("#color_hex_value"),
              body = document.querySelector("body");

          body.style.backgroundcolor = document.querySelector("#color_picker").value;
        }
});
