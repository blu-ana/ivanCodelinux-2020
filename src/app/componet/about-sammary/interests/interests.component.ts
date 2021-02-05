import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interests',
  template: `
               <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="interests">
              <div class="w-100">
                <h2 class="mb-5">Interests</h2>
                <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid
                  skier
                  and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free
                  climbing,
                  and
                  kayaking.</p>
                <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television
                  shows,
                  I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology
                  advancements
                  in the front-end web development world.</p>
              </div>
            </section>
  `,
  styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
