import {wines } from "./wines.js"

const Whites = wines.filter( wines => wines.color === 'Blanco')

const Reds = wines.filter( wines => wines.color === 'Tinto')

const Cava = wines.filter( wines => wines.color === 'Cava') 

document.addEventListener('DOMContentLoaded', function() {
    var categories = [Whites, Reds, Cava]
    const wine_sections = ['whites','reds','cava']
    for (var i = 0; i < categories.length; i++){

        myfunction(categories[i], wine_sections[i]);
    }    
});
function myfunction(w, ws) {
     const properties = ['name','cepas','precio','dop','info']
    
    w.forEach( (e) => {
        var item_div = document.createElement("div");
        item_div.classList.add('item--card');
        document.getElementById(ws).appendChild(item_div);
        for (var i = 0; i < properties.length; i++){
            if (properties[i] === 'info') {
                var span = document.createElement('span');
                span.classList.add(properties[i])
                span.innerText = e[properties[i]];
                item_div.lastChild.appendChild(span)
            } else {
                var item = document.createElement("p")
                item.classList.add(properties[i])
                item.innerText = e[properties[i]]
                item_div.appendChild(item)                
            }

        }
    })
}



