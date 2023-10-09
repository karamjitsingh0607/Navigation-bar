let navigation=document.getElementById('navigation');

let differList=document.getElementsByClassName('differ-list');
let differListHeading=document.getElementsByClassName('differ-list-heading');
let dropList=document.getElementsByClassName('drop-list');

let underList=document.getElementsByClassName('under-list');
let underListElement=document.getElementsByClassName('under-list-element');
let underdropList=document.getElementsByClassName('under-drop-list');

let hamburger=document.getElementById('hamburger');
let allList=document.getElementById('all-lists');

let Top=document.getElementById('top');
let middle=document.getElementById('middle');
let bottom=document.getElementById('bottom');


hamburger.addEventListener('click',()=>{
    if(!allList.classList.contains('active')){
        allList.classList.add('active');
        hamburger.querySelector('.line').classList.add('active');
        Top.style.y=`${18.5}px`;
        bottom.style.y=`${18.5}px`;
        middle.style.opacity=0;
        Top.style.rotate=`${45}deg`;
        bottom.style.rotate=`${-45}deg`;
    }else{
        allList.classList.remove('active');
        hamburger.querySelector('.line').classList.remove('active');
        Top.style.rotate=`${0}deg`;
        bottom.style.rotate=`${0}deg`;
        Top.style.y=`${10.5}px`;
        bottom.style.y=`${26.5}px`;
        middle.style.opacity=1;
    }
})

document.addEventListener('touchstart',(e)=>{
    if(!navigation.contains(e.target)){
        allList.classList.remove('active');
        Top.style.y=`${10.5}px`;
        bottom.style.y=`${26.5}px`;
        middle.style.opacity=1;
        Top.style.rotate=`${0}deg`;
        bottom.style.rotate=`${0}deg`;
    }
})

for(let i=0;i<differList.length;i++){
    if(window.innerWidth>920){
        differList[i].addEventListener('mouseenter',()=>{
            dropList[i].classList.add('active');
        })
        differList[i].addEventListener('mouseover',()=>{
            dropList[i].classList.add('active');
        })
        differList[i].addEventListener('mouseleave',()=>{
            dropList[i].classList.remove('active');
        })
    }else{
        differListHeading[i].addEventListener('click',()=>{
            if(!dropList[i].classList.contains('active')){
                dropList[i].style.height=dropList[i].scrollHeight+'px';
                dropList[i].classList.add('active');
            }else{
                dropList[i].classList.remove('active');
                dropList[i].style.height=0;
            }
        })
        document.addEventListener('touchstart',(e)=>{
            if(!differList[i].contains(e.target)){
                dropList[i].style.height=0;
                dropList[i].classList.remove('active');
            }
        })
    }
}

for(let i=0;i<underList.length;i++){
    if(window.innerWidth>920){
        underList[i].addEventListener('mouseenter',()=>{
            underdropList[i].classList.add('active');
        })
        underList[i].addEventListener('mouseover',()=>{
            underdropList[i].classList.add('active');
        })
        underList[i].addEventListener('mouseleave',()=>{
            underdropList[i].classList.remove('active');
        })
    }else{
        underListElement[i].addEventListener('click',()=>{
            if(!underdropList[i].classList.contains('active')){
                underdropList[i].classList.add('active');
                underdropList[i].style.height=underdropList[i].scrollHeight+'px';
                dropList[1].style.height=`${dropList[1].scrollHeight+underdropList[i].scrollHeight}px`;
            }else{
                underdropList[i].classList.remove('active');
                underdropList[i].style.height=0;
                dropList[1].style.height=`${Math.abs(dropList[1].scrollHeight-underdropList[i].scrollHeight)}px`;
            }
        })
        document.addEventListener('touchstart',(e)=>{
            if(!underList[i].contains(e.target)){
                underdropList[i].style.height=0;
                underdropList[i].classList.remove('active');
            }
        })
    }
}