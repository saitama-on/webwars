
document.getElementById("generateButton").addEventListener("click", function(event){
    event.preventDefault();
    fetch('https://tti-server.onrender.com/generate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            prompt: document.getElementById('promptInput').value
        }),
    })
    .then(response => response.json())
    .then(data => {
        // Assuming 'data' contains an object with an 'imageUrl' propert
        
        // Find the image element and set its 'src' attribute
        document.getElementById('image').src = data[0];
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
