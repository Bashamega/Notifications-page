import './assets/style.sass'
fetch('data.json')
  .then(response => response.text())
  .then(data => {
    const jsonData = JSON.parse(data);
    console.log(jsonData) 
    document.getElementById("number").innerHTML = jsonData.unread
    jsonData.messages.forEach(element => {
        const container = document.createElement('div')
        container.classList.add("message")
        if(element.unread){
            container.classList.add('unread')
        }
        if(element.type == "reaction"){
          const code = `
          <img src=${element.avatar}>
          <div id="text">
          <span>          <a href="#">${element.author}</a>
           Reacted to your recent post <a href="#">${element.post}</a></span>
          
          <div class="dot"></div>
          </div>
          <span class="time_stamp">${element.time_stamp}</span>
         `
         container.innerHTML = code

        }else if(element.type =="follow"){
          const code = `
          <img src=${element.avatar}>
          <div id="text">
          <span>           <a href="#">${element.author}</a>
           followed you</span>
          <div class="dot"></div>
          </div>
          <span class="time_stamp">${element.time_stamp}</span>
         `
         container.innerHTML = code
        }else if(element.type =="group_join"){
          const code = `
          <img src=${element.avatar}>
          <div id="text">
          
          <span><a href="#">${element.author}</a> has joined your club <a href="#">${element.group}</a></span>
          
          <div class="dot"></div>
          </div>
          <span class="time_stamp">${element.time_stamp}</span>
         `
         container.innerHTML = code
        }else if(element.type =="dm"){
          const code = `
          <img src=${element.avatar}>
          <div id="text">
          
          <span><a href="#">${element.author}</a> sent you a private message</span>
          <div class="dot"></div>
          </div>
          <span class="time_stamp">${element.time_stamp}</span>
          <div class="dm">${element.dm}</div>
         `
         container.innerHTML = code
        }else if(element.type =="comment_picture"){
          const code = `
            <img src=${element.avatar}>
            <div id="text">
            
            <span><a href="#">${element.author}</a> commented on your picture</span>
            <div class="dot"></div>
            </div>
            <span class="time_stamp">${element.time_stamp}</span>
            <img id="post_img" src=${element.pic}>
          `
          container.innerHTML = code
        }else if(element.type =="left_group"){
          const code = `
          <img src=${element.avatar}>
          <div id="text">
          
          <span><a href="#">${element.author} </a> left the group <a href="#">${element.group} </a></span>
          <div class="dot"></div>
          
          </div>
          <span class="time_stamp">${element.time_stamp}</span>
         `
         container.innerHTML = code
        }

        document.getElementById("Notifications").appendChild(container)
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
function removeUnreadClass() {
  var unreadElements = document.getElementsByClassName('unread');
  for (var i = 0; i < unreadElements.length; i++) {
    unreadElements[i].classList.remove('unread');
  }
}
document.getElementById("readall").addEventListener('click', removeUnreadClass)
  