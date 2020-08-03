import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  show: boolean = false;
  value:String;

  vues: boolean[];

  constructor() { 
    this.vues = [false,false,false,false,false,false,false,false];
  }

  ngOnInit() {
  }

  bibleVerse(verse:String){

    
    
    if(verse === "Luke 2:34-35"){

      this.value = `"Then Simeon blessed them and said to Mary, his mother: “This child is destined to cause the falling and 
      rising of many in Israel, and to be a sign that will be spoken against, so that the thoughts of many hearts will 
      be revealed. And a sword will pierce your own soul too.”"`;

      if(this.vues[0] == true){

        this.vues[0] = false;
      }else if(this.vues[0] == false){

        this.vues[0] = true;
      }


    }else if(verse === "Matt 2:13-15"){

    this.value = `When they had gone, an angel of the Lord appeared to Joseph in a dream. “Get up,” he said, 
    “take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him.”
    So he got up, took the child and his mother during the night and left for Egypt, where he stayed until the death of Herod. And 
    so was fulfilled what the Lord had said through the prophet: “Out of Egypt I called my son.”`;
    

    if(this.vues[1] == true){

      this.vues[1] = false;
    }else if(this.vues[1] == false){

      this.vues[1] = true;
    }

    
    }else if(verse === "Luke 2:41-51"){ 

      this.value=`Every year Jesus’ parents went to Jerusalem for the Festival of the Passover. When he was twelve years old, they went up to the festival, 
    according to the custom. After the festival was over, while his parents were returning home, the boy Jesus stayed behind in Jerusalem, but they 
    were unaware of it. Thinking he was in their company, they traveled on for a day. Then they began looking for him among their relatives and friends.
    When they did not find him, they went back to Jerusalem to look for him.After three days they found him in the temple courts, sitting among the teachers, 
    listening to them and asking them questions. Everyone who heard him was amazed at his understanding and his answers. When his parents saw him, they were 
    astonished. His mother said to him, “Son, why have you treated us like this? Your father and I have been anxiously searching for you.”
    “Why were you searching for me?” he asked. “Didn’t you know I had to be in my Father’s house?” But they did not understand what he was saying to them.
    Then he went down to Nazareth with them and was obedient to them. But his mother treasured all these things in her heart.`;

    if(this.vues[2] == true){

      this.vues[2] = false;
    }else if(this.vues[2] == false){

      this.vues[2] = true;
    }

    

    }else if(verse === "Luke 23:26-31"){
      
      this.value = `As the soldiers led him away, they seized Simon from Cyrene, who was on his way in from the country, and put the cross on him and made him carry 
    it behind Jesus.A large number of people followed him, including women who mourned and wailed for him.Jesus turned and said to them, “Daughters of Jerusalem, 
    do not weep for me; weep for yourselves and for your children.For the time will come when you will say, ‘Blessed are the childless women, the wombs that 
    never bore and the breasts that never nursed!’ Then

    “‘they will say to the mountains, “Fall on us!”
        and to the hills, “Cover us!”’
    
    For if people do these things when the tree is green, what will happen when it is dry?”`;

    if(this.vues[3] == true){

      this.vues[3] = false;
    }else if(this.vues[3] == false){

      this.vues[3] = true;
    }

    

    }else if(verse === "John 19:25-27"){

      this.value=`Near the cross of Jesus stood his mother, his mother’s sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus saw his mother there, 
    and the disciple whom he loved standing nearby, he said to her, “Woman, here is your son,” and to the disciple, “Here is your mother.” From that time on, 
    this disciple took her into his home.`

    if(this.vues[4] == true){

      this.vues[4] = false;
    }else if(this.vues[4] == false){

      this.vues[4] = true;
    }


    }else if(verse === "John 19:38"){

      this.value=`Later, Joseph of Arimathea asked Pilate for the body of Jesus. Now Joseph was a disciple of Jesus, 
    but secretly because he feared the Jewish leaders. With Pilate’s permission, he came and took the body away.`

    if(this.vues[5] == true){

      this.vues[5] = false;
    }else if(this.vues[5] == false){

      this.vues[5] = true;
    }


    

    }else if(verse === "John 19:39-42"){

      this.value=`He was accompanied by Nicodemus, the man who earlier had visited Jesus at night. Nicodemus brought a mixture of myrrh and aloes, about seventy-five pounds.
    Taking Jesus’ body, the two of them wrapped it, with the spices, in strips of linen. This was in accordance with Jewish burial customs.At the place where Jesus 
    was crucified, there was a garden, and in the garden a new tomb, in which no one had ever been laid.Because it was the Jewish day of Preparation and since the 
    tomb was nearby, they laid Jesus there.`

    if(this.vues[6] == true){

      this.vues[6] = false;
    }else if(this.vues[6] == false){

      this.vues[6] = true;
    }

  
    }

    
  }

  bibleVerseClose(verse:String){

    let value:String;
    
    if(verse === "Luke 2:34-35"){

    

    this.vues[0] = false;

    }else if(verse === "Matt 2:13-15"){

    value = `When they had gone, an angel of the Lord appeared to Joseph in a dream. “Get up,” he said, 
    “take the child and his mother and escape to Egypt. Stay there until I tell you, for Herod is going to search for the child to kill him.”
    So he got up, took the child and his mother during the night and left for Egypt, where he stayed until the death of Herod. And 
    so was fulfilled what the Lord had said through the prophet: “Out of Egypt I called my son.”`;

    this.vues[1] = false;

    }else if(verse === "Luke 2:41-51"){ 

    value=`Every year Jesus’ parents went to Jerusalem for the Festival of the Passover. When he was twelve years old, they went up to the festival, 
    according to the custom. After the festival was over, while his parents were returning home, the boy Jesus stayed behind in Jerusalem, but they 
    were unaware of it. Thinking he was in their company, they traveled on for a day. Then they began looking for him among their relatives and friends.
    When they did not find him, they went back to Jerusalem to look for him.After three days they found him in the temple courts, sitting among the teachers, 
    listening to them and asking them questions. Everyone who heard him was amazed at his understanding and his answers. When his parents saw him, they were 
    astonished. His mother said to him, “Son, why have you treated us like this? Your father and I have been anxiously searching for you.”
    “Why were you searching for me?” he asked. “Didn’t you know I had to be in my Father’s house?” But they did not understand what he was saying to them.
    Then he went down to Nazareth with them and was obedient to them. But his mother treasured all these things in her heart.`;
    
    this.vues[2] = false;

    }else if(verse === "Luke 23:26-31"){
      
    value = `As the soldiers led him away, they seized Simon from Cyrene, who was on his way in from the country, and put the cross on him and made him carry 
    it behind Jesus.A large number of people followed him, including women who mourned and wailed for him.Jesus turned and said to them, “Daughters of Jerusalem, 
    do not weep for me; weep for yourselves and for your children.For the time will come when you will say, ‘Blessed are the childless women, the wombs that 
    never bore and the breasts that never nursed!’ Then

    “‘they will say to the mountains, “Fall on us!”
        and to the hills, “Cover us!”’
    
    For if people do these things when the tree is green, what will happen when it is dry?”`;
    
    this.vues[3] = false;

    }else if(verse === "John 19:25-27"){

    value=`Near the cross of Jesus stood his mother, his mother’s sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus saw his mother there, 
    and the disciple whom he loved standing nearby, he said to her, “Woman, here is your son,” and to the disciple, “Here is your mother.” From that time on, 
    this disciple took her into his home.`
    
    this.vues[4] = false;

    }else if(verse === "John 19:38"){

    value=`Later, Joseph of Arimathea asked Pilate for the body of Jesus. Now Joseph was a disciple of Jesus, 
    but secretly because he feared the Jewish leaders. With Pilate’s permission, he came and took the body away.`

    this.vues[5] = false;

    }else if(verse === "John 19:39-42"){

    value=`He was accompanied by Nicodemus, the man who earlier had visited Jesus at night. Nicodemus brought a mixture of myrrh and aloes, about seventy-five pounds.
    Taking Jesus’ body, the two of them wrapped it, with the spices, in strips of linen. This was in accordance with Jewish burial customs.At the place where Jesus 
    was crucified, there was a garden, and in the garden a new tomb, in which no one had ever been laid.Because it was the Jewish day of Preparation and since the 
    tomb was nearby, they laid Jesus there.`

    this.vues[6] = false;

    }

    
  }

}
