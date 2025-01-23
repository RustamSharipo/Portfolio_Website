function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element_show');
      }
    });
  }
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.main_websites_block');
  let elements_2 = document.querySelectorAll('.main_websites_block_2');
  let string = document.querySelectorAll('.main_abilities');
  let abilities = document.querySelectorAll('.main_abilities_strings');
  let add_abilities = document.querySelectorAll('.additional_skills');
  let conclusion = document.querySelectorAll('.about_me');
  for(let con of conclusion)
  {
    observer.observe(con);
  }
  for(let add_ab of add_abilities)
  {
    observer.observe(add_ab);
  }
  for(let ab of abilities)
  {
    observer.observe(ab);
  }
  for(let str of string)
  {
    observer.observe(str);
  }
  for (let elm of elements) {
    observer.observe(elm);
  }
  for(let elm_2 of elements_2)
  {
    observer.observe(elm_2)
  }