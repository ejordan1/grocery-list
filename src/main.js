import $ from 'jquery';
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

$(document).ready(function() {
  // Defines function to get list
  function getUsers() {
    axios.get(`https://r11ze6nefi.execute-api.us-west-2.amazonaws.com/test/groceryusers`)
      .then(response => {
        console.log(response)
        // $(".output").append(`<br>${response.data[x].userName}`);
      });
  }
  getUsers();

  $(".userInput").submit(function(event){
    event.preventDefault();

    let userName = $('#itemName').val();

    // Adds new entry to database
    try {
      const params = {
        "userName": userName
      }
      axios.post(`https://r11ze6nefi.execute-api.us-west-2.amazonaws.com/test/groceryusers/${userName}`, params );
    } catch (err) {
      $(".output").append(`An error occured: ${err}`);
    }

    getUsers();

  });
});
