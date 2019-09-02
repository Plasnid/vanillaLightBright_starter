/**
 * this is modified from the original at 
 * https://codepen.io/jonsamp/pen/xOQbAZ
 * 
 * The code has been changed to use vanilla js only
 */

//1.  so where do we start....we start when the dom is ready!

    console.log('Your document is ready!');

    //2.  lets set up variables to hold onto the colour class, blinking and interval
    



    //3.  lets get an array of all the potential colours to select from
    let colourSelectors = ;

    //4.  for each colour selector we are going to add a click, and the actions that happen in that click

    //what is targ?
    colourSelectors.forEach(targ => {
        
        targ.addEventListener("click", function(){
            //here we are setting all the colours to not be selected
            colourSelectors.forEach(colSel =>{
                colSel.classList.add('not-selected');
            });
            
            







            //here we are removing not-selected class from the element we have clicked on 
            targ.classList.remove('not-selected');
        });
    });

    //5.  lets select all the articles from the document as same them as an array named allBoxes
    let allBoxes = ;
    //what is the difference between boxo and all boxes?  Notice that we are collecting
    //elements from the document then using forEach to update them
    allBoxes.forEach(boxo =>{
        //again we collect each element from the screen(in this case lightBright points), and give them a listener
        boxo.addEventListener("click",function(e) {
            //we removed all the colours from the selected box
            decolour(boxo);
            //if a colour has been selected, we add the colour to the clicked element
            if(colorClass){
                e.target.classList.toggle(colorClass);
            }
        });
    });

    //6.  here we would like to add a click event to an item with the ID of toggle-blink
    
        //if it is blinking already, we stop the blink
        if (blinking) {
            blinking = false;
            clearInterval(interval)
        } else { 
            //otherwise if it isn't blinking, we make it blink!
            blinking = true;
            let blinkBoxes = Array.from(document.querySelectorAll('article.cyan, article.yellow, article.magenta'));
            if (colorClass) {
                //since blink is active, we make the blink button see through
                document.querySelector('#toggle-blink').classList.toggle('opacity');
                //we set a function, and give it a wait time until it runs, what is that wait time?
                interval = setInterval(function(){
                    blinkBoxes.forEach(blinkBox => {
                        blinkBox.classList.toggle('blink')
                    });
                },350);
            }
        }
	});
});

//in this function we remove all the colours from a target
function decolour(targ){
    targ.classList.remove("magenta");
    targ.classList.remove("yellow");
    targ.classList.remove("cyan");
}