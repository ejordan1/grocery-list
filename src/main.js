import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Example } from './backend-code';
import axios from "axios";

let example = new Example();

$(document).ready(function() {

  $("#testSubmit").click(function(){
    let userName = "Fred";
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
