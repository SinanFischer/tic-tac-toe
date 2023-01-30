let fields = []; 


currentShape = 'cross'
 
function fillShape(id) {
    if (currentShape === 'cross') {
        fields[id] = 'cross';
        currentShape = 'circle'; 
    }

    else {
        fields[id] = 'circle';
        currentShape = 'cross'; 
        console.log('ARray gleich circle ');
    }

    playerMove(); 
 
}

function playerMove() {
    for (i = 1; i < fields.length ; i++)
    if (fields[i] === 'cross') {
        document.getElementById(`cross-${i}`).style = "display:flex"; 
        console.log('wurde gecrossed');
    }

    else if  (fields[i] === 'circle') {
        document.getElementById(`circle-${i}`).style = "display:flex";     
                                             
        console.log('wurde gecirceld');
    }

    else {}

}