fetch('https://meme-api.herokuapp.com/gimme/1')
.then(function(response){
    return response.json();// convert it to a pure JavaScript object
})
.then(function(data){
    var payload = {
        "name":data.memes[0].author,
        "caption":data.memes[0].title,
        "url":data.memes[0].url,
    }
    console.log(payload)

    fetch('https://xmeme-soh.herokuapp.com/memes',{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
    console.log('Success:', data);
    })
    .catch((error) => {
    console.error('Error:', error);
    });

})
.catch(function(err) {
    console.log(err);
  });