let v,w,y,z;

v = document.getElementById('btn1');
w = document.getElementById('myh4');

const x = [document.getElementById('Water'),
document.getElementById('Juice'),
document.getElementById('Shake'),
document.getElementById('Cake'),
document.getElementById('Rice')
];




v.onclick = function(){
    const holder = [];
    
    for (let i = 0; i < x.length;i++){
        if (x[i].checked){
            holder.push(x[i].id);
        }
    }
    w.textContent = `${holder.join(' , ')}`;
}