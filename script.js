var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
          xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "4283fcf6201e43098c93b50a12075465");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function switchImage() {
    if (document.body.style.backgroundImage == 'url("cssback3.png")')
    {
        document.body.style.backgroundImage = 'url("cssback2.png")'
    }
    else
    {
        document.body.style.backgroundImage = 'url("cssback3.png")'
    }
}

function getCurrentTime() {
    var today = new Date();
    var currTime = today.getHours() + ":" + today.getMinutes();
    console.log(currTime);
    document.getElementById('myLink').innerHTML = text.currTime;

}
$(function () {
    $("#time").dialog({
        modal: true,
        autoOpen: false,
        title: "Current Time",
        width: 300,
        height: 150
    });
    $("#showTime").click(function () {
        $('#time').dialog('open');
    });
});