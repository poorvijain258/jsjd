class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
      this.input2 = createInput("Enter Correct Option No...")
      

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.Question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  
    this.message = createElement("h2");
  }

  hide(){
     this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.message.hide();

  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

  
    //Create html() and position() for each question, input and answers.
    this.Question.html("Question:What starts and ends with the letter 'E', but has only one letter?")
    this.Question.position(100,70);

    this.option1.html("1:Everyone");
    this.option1.position(150,110);

    this.option2.html("2:Estimate");
    this.option2.position(150,130);

    this.option3.html("3:Envelope");
    this.option3.position(150,150);

    this.option4.html("4:Example");
    this.option4.position(150,170);


    this.input1.position(150, 230);
    this.input2.position(390,230);
    this.button.position(280, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    this.message.html("Thank You, Your Answer Has Been Submitted");
    this.message.position(300,300);
     
    })


  }
}
