  function randImg() {
    //create a limit for the loop
    let imgcount = 1;
    //create arrays that will contain the image and the values for the random int
    let newVal = [];
    let images = [];

    //loop to iterate and add to the arrays
    for (let i = 0; i < imgcount; i++) {
        //creating a random int between 1 and 2 for image number
        let randInt = Math.floor(Math.random() * 2) + 1;
        //creating a random int between 0 and 2 for image extension
        let randExtInt = Math.floor(Math.random() * 3);
        //Possible extensions
        let extensions = ['png', 'jpg', 'gif'];
        //selecting the extension
        let extension = extensions[randExtInt];

        //adding the value of randInt to the array to be used in getting images
        newVal.push(randInt);
        //adding the images from the folder to the array
        images.push(`<img src="gifs/face${randInt}.${extension}" style="width: 100px; height: 100px; margin:10px;">`);
    }
    //show the image after the button is clicked
    gifSpace.innerHTML = images.join('');
}
