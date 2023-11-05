import './assets/style.sass'
const data = {
  "unread":3,
  "messages":[
  
  {
      "author": "Mark Webber ",
      "type": "reaction",
      "post": " My first tournament today!",
      "unread": true,
      "time_stamp": "1m",
      "avatar": "./assets/images/avatar-mark-webber.webp"
  },{
      "author": "Angela Gray",
      "type": "follow",
      "unread": true,
      "time_stamp": "5m",
      "avatar": "./assets/images/avatar-angela-gray.webp"
  },{
      "author": "Jacob Thompson",
      "type": "group_join",
      "group": "Chess club",
      "unread": true,
      "time_stamp": "1 day",
      "avatar": "./assets/images/avatar-jacob-thompson.webp"
  },{
      "author": "Rizky Hasanuddin",
      "type": "dm",
      "dm": "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      "unread": false,
      "time_stamp": "5 days",
      "avatar": "./assets/images/avatar-rizky-hasanuddin.webp"
  },{
      "author": "Kimberly Smith",
      "type": "comment_picture",
      "unread": false,
      "time_stamp": "1 week",
      "pic": "./assets/images/image-chess.webp",
      "avatar": "./assets/images/avatar-kimberly-smith.webp"
  },{
      "author": "Nathan Peterson",
      "type": "reaction",
      "post": "5 end-game strategies to increase your win rate",
      "unread": false,
      "time_stamp": "2 weeks",
      "avatar": "./assets/images/avatar-nathan-peterson.webp"
  },{
      "author": "Anna Kim",
      "type": "left_group",
      "group": "Chess club",
      "unread": false,
      "time_stamp": "2 weeks",
      "avatar": "./assets/images/avatar-anna-kim.webp"
  }
]
  }

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
      <span><a href="#">${element.author}</a>Reacted to your recent post <a href="#">${element.post}</a></span>
      <div class="dot"></div>
    </div>
    <span class="time_stamp">${element.time_stamp}</span>
  `
  container.innerHTML = code

}else if(element.type =="follow"){
          const code = `
          <img src=${element.avatar} alt="avatar">
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
          <img src=${element.avatar} alt="avatar">
          <div id="text">
          
          <span><a href="#">${element.author}</a> has joined your club <a href="#">${element.group}</a></span>
          
          <div class="dot"></div>
          </div>
          <span class="time_stamp">${element.time_stamp}</span>
         `
         container.innerHTML = code
        }else if(element.type =="dm"){
          const code = `
          <img src=${element.avatar} alt="avatar">
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
            <img src=${element.avatar} alt="avatar">
            <div id="text">
            
            <span><a href="#">${element.author}</a> commented on your picture</span>
            <div class="dot"></div>
            </div>
            <span class="time_stamp">${element.time_stamp}</span>
            <img id="post_img" src=${element.pic} alt="picture">
          `
          container.innerHTML = code
        }else if(element.type =="left_group"){
          const code = `
          <img src=${element.avatar} alt="avatar">
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

function removeUnreadClass() {
  var unreadElements = document.getElementsByClassName('unread');
  for (var i = 0; i < unreadElements.length; i++) {
    unreadElements[i].classList.remove('unread');
  }
}
document.getElementById("readall").addEventListener('click', removeUnreadClass)
  