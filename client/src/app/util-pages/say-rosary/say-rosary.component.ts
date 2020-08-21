import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-say-rosary',
  templateUrl: './say-rosary.component.html',
  styleUrls: ['./say-rosary.component.css']
})
export class SayRosaryComponent implements OnInit {

  prayerTitle : string = "Sign of The Cross";
  prayer : string = `In the name of the Father,
  and of the Son,
  and of the Holy Spirit.
  Amen.`;

  constructor() { }

  ngOnInit() {
  }

  showPrayer(input:string){
    
    if(input == "SOTC"){
      this.prayerTitle = "Sign of The Cross."
      this.prayer = `In the name of the Father, 
      and of the Son,
      and of the Holy Spirit.
      Amen.`;

      
    }else if(input == "AP"){
      this.prayerTitle = "The Apostles Creed."
      this.prayer = `
      I believe in God,
      the Father almighty,
      Creator of heaven and earth.
      I believe in Jesus Christ,
      His only Son, our Lord.
      He was conceived by the power of the Holy Spirit,
      and born of the Virgin Mary.
      He suffered under Pontius Pilate,
      was crucified, died, and was buried.
      He descended to the dead.
      On the third day He rose again.
      He ascended into heaven,
      and is seated at the right hand of the Father.
      He will come again to judge
      the living and the dead.
      I believe in the Holy Spirit,
      the holy catholic Church,
      the communion of saints,
      the forgiveness of sins,
      the resurrection of the body,
      and the life everlasting.
      Amen.`;

      
    }else if(input == "OF"){
      this.prayerTitle = "Our Father."
      this.prayer = `
      Our Father, who art in heaven; 
      hallowed be Thy name;
      Thy kingdom come; 
      Thy will be done on earth as it is in heaven.
      Give us this day our daily bread; 
      and forgive us our trespasses
      as we forgive those who trespass against us, 
      and lead us not into temptation; 
      but deliver us from evil.
      Amen.`;

      
    }else if(input == "HM"){
      this.prayerTitle = "Hail Mary"
      this.prayer = `
      Hail, Mary, full of grace; the Lord is with thee;
      blessed art thou among women,
      and blessed is the fruit of thy womb, Jesus.
      Holy Mary, Mother of God, pray for us sinners,
      now and at the hour of our death.
      Amen. `;

      
    }else if(input == "GB"){
      this.prayerTitle = "Glory be to the Father"
      this.prayer = `
      Glory be to the Father,
      and to the Son,
      and to the Holy Spirit.
      As it was in the beginning,
      is now, and ever shall be,
      world without end.
      Amen.`;

      
    }else if(input == "HHQ"){
      this.prayerTitle = "Hail, Holy Queen."
      this.prayer = `
      Hail, Holy Queen, Mother of Mercy,
      our life, our sweetness and our hope,
      to thee do we cry,
      poor banished children of Eve;
      to thee do we send up our sighs,
      mourning and weeping in this vale of tears;
      turn, then, most gracious Advocate,
      thine eyes of mercy towards us,
      and after this, our exile,
      show unto us the blessed fruit of thy womb, Jesus.
      O clement, O loving, O sweet Virgin Mary!
      Pray for us, O holy Mother of God,
      that we may be made worthy
      of the promises of Christ.`

      
    }




  }

}
