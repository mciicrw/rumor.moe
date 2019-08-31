function el(type = 'div', className = '') {
  let element = document.createElement(type);
  if (className !== '') {
    element.className = className;
  }
  return element;
}

function eventToElement(event) {
  let container = el('div', 'event')

  let header = el('h3');
  header.appendChild(document.createTextNode(event.name));
  container.appendChild(header);
  
  let startElement = el('time');
  let start = new Date(event.start);
  startElement.setAttribute('datetime', start.toISOString());
  startElement.setAttribute('data-type', 'start');
  container.appendChild(startElement);
  
  let endElement = el('time');
  let end = new Date(event.end);
  endElement.setAttribute('datetime', end.toISOString());
  endElement.setAttribute('data-type', 'end');
  container.appendChild(endElement);

  if (event.hasOwnProperty('sections')) {
    let subcontainer = el('div', 'event-section-container');

    event.sections.forEach(subevent => {
      subcontainer.appendChild(eventToElement(subevent));
    });

    container.appendChild(subcontainer);
  }

  return container;
}

function countdown() {
  let elements = document.querySelectorAll('time');
  
  elements.forEach(element => {
    let time = new Date(element.getAttribute('datetime'));
    let type = element.getAttribute('data-type');
    let now = new Date();

    if (now.getTime() > time.getTime() && type === 'start') {
      element.className = 'hidden';
      return;
    }

    if (now.getTime() > time.getTime() && type === 'end') {
      element.textContent = 'Event has ended.'
      return;
    }

    let timeString = '';

    let duration = (time.getTime() - now.getTime()) / 1000;
    let days = Math.floor(duration / (60 * 60 * 24));
    if (days > 0) {
      timeString += `${days}d`;
    }
    let hours = Math.floor(duration % (60 * 60 * 24) / (60 * 60));
    timeString += ` ${hours}h`;
    let minutes = Math.floor(duration % (60 * 60) / (60));
    timeString += ` ${minutes}m`;
    let seconds = Math.floor(duration % 60);
    timeString += ` ${seconds}s`;

    if (type === 'start') {
      element.textContent = `Starts in ${timeString}`;
    } else if (type === 'end') {
      element.textContent = `Ends in ${timeString}`;
    }
  });
}

function initCountdown(events, rootElement) {
  events.forEach(event => {
    rootElement.appendChild(eventToElement(event));
  });
  countdown();
  setInterval(countdown, 1000);
}
