import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

$(document).ready(function() {

  $("#userInput").submit(function(){

    let userName = $('#itemName').val();
    let x = $("#testUser").val();
    try {
      const params = {
        "userName": "Fred"
      }
      axios.post(`https://r11ze6nefi.execute-api.us-west-2.amazonaws.com/test/groceryusers/${userName}`, params );
    } catch (err) {
      $("#test").append(`An error occured: ${err}`);
    }

    function getUsers() {
      axios.get(`https://r11ze6nefi.execute-api.us-west-2.amazonaws.com/test/groceryusers`)
        .then(response => {
          console.log(response);
          $("#test").append(`<br>${response.data[x].userName}`);
        });
    }

    getUsers();

  });
});
