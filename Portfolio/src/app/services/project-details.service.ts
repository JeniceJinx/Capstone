import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailsService {

  constructor() { }

  //project details

  projectDetails = [
    {
      projectTitle: "Java app ",
      projectTech: "Java ",
      basicConcept: "basic java application "
      },
      {
      projectTitle: "javascrip  game app ",
      projectTech: "JavaScript ",
      basicConcept: "loops, if statements "
      },
      {
      projectTitle: "SQL DB ",
      projectTech: "SQL",
      basicConcept: "basic  SQL "
      },
      {
      projectTitle: "Python app ",
      projectTech: "python ",
      basicConcept: "basic python application "
      },
      {
      projectTitle: "web page ",
      projectTech: "HTML CSS Javascript ",
      basicConcept: "basic web application "
      },
      {
      projectTitle: "portfolio",
      projectTech: "Angular ",
      basicConcept: "basic Angular application "
      },
      
  ]
}
