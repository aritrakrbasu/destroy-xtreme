const urlParams = new URLSearchParams(window.location.search);
var spamcount = urlParams.get('spam');
var memepage = urlParams.get('memepage');
if(spamcount == null)
{
    spamcount = 100;
}
if(memepage == null)
{
    var memeurl = 'https://meme-api.herokuapp.com/gimme/'+spamcount;
}else
{
    var memeurl = 'https://meme-api.herokuapp.com/gimme/'+memepage+'/'+spamcount;
}
fetch(memeurl)
.then(function(response){
    return response.json();// convert it to a pure JavaScript object
})
.then(function(data){

    data.memes.forEach(meme => {
        console.log(meme)
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
        var div = document.createElement('div');
            div.innerHTML = "Spamming Hambuuuuuuuuuuuuuuuuuuuu , New meme id = "+data.id+"<br>check here <a href='http://xmeme-soh.herokuapp.com/memes/"+data.id+"' target='_blank'}>Click here </a>";
            document.body.appendChild(div);
        return true;
    })
    .catch((error) => {
        return false;
    });
}