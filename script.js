fetch('https://meme-api.herokuapp.com/gimme/100')
.then(function(response){
    return response.json();// convert it to a pure JavaScript object
})
.then(function(data){

    data.memes.forEach(meme => {
        var payload = {
            "name":meme.author,
            "caption":meme.title,
            "url":meme.url,
        } 
        spamdata(payload)
    });

})
.catch(function(err) {
    console.log(err);
  });

function spamdata(payload)
{
    fetch('https://xmeme-soh.herokuapp.com/memes',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        console.log("#spamed");
        return true;
    })
    .catch((error) => {
        return false;
    });
}