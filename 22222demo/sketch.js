let inputField;
let sendussy;
let botResponse = "thanks for coming to my sleepover";

//let capture;

let bot = new RiveScript();
//create new bot

function preload(){
  bot.loadFile("bot.txt").then(botLoaded);
}

function botLoaded(){
  console.log("chatbot loaded");
  bot.sortReplies();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  inputField = createInput();
  inputField.position(width/8, height/3);
  sendussy = createButton("send");
  sendussy.position(width/8,inputField.height + height/3+20);
  sendussy.style("background-color", color(200,200,100,200))
  sendussy.style('color', color(255,255,255))

  sendussy.mousePressed(chat);

  //capture = createCapture(VIDEO);
  //capture.hide();
}

function keyTyped(){
  if (keyCode == ENTER){
    chat();
  }
}

function draw() {
  background(230,180,130);
  //background(200,215,100);
  fill(200,150,100);
  //fill(250,200,100);
  noStroke();
  rect(width/2,0,width/2, height)

  textAlign(CENTER);
  fill('white')
  text('you', width/4, 50);
  text('bot', width/2 +width/4, 50);

  push();
  rectMode(CENTER);
  text(botResponse, width/2 + width/4,
  height/3, width/4);
  pop();


  //image(capture, width/2 - 50,height/2,100,100*capture.height/capture.width);
}

function chat(){
  let input = inputField.value();
  console.log(input);
  //rivescript auto "tolower, no punc"

  bot.reply("local-user", input).then(respond);

}

function respond(_reply){
  botResponse= _reply; //save response
}
