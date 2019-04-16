import React from 'react';
import Person from './Person';

const PersonList = () => {

  const people = [
    {
      img: 10,
      name: 'Luki',
      job: 'Front End Developer'
    },
    {
      img: 20,
      name: 'John',
      job: 'Designer'
    },
    {
      img: 30,
      name: 'Mati',
      job: 'QA'
    },
  ];

  return (
   <section>
      <Person person={people[0]} />
      <Person person={people[1]} >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi corrupti aut nesciunt minus esse voluptates similique pariatur aspernatur laboriosam. Totam, nesciunt! Cumque similique distinctio hic omnis exercitationem vel velit ex!
      </Person>
      <Person person={people[2]} />
    </section>   
    
  );
};

export default PersonList;