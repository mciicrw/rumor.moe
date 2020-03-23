let globalOffset = 0;
const ONE_DAY    = 24 * 60 * 60;
const ONE_HOUR   = 60 * 60;
const ONE_MINUTE = 60;

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

    let rowspan = Math.floor(1 + event.sections.length);
    container.style.gridRow = `span ${rowspan}`;
  }

  return container;
}

function countdown() {
  let elements = document.querySelectorAll('time');
  
  elements.forEach(element => {
    if (element.classList.contains('no-refresh')) {
      return;
    }

    let time = new Date(element.getAttribute('datetime'));
    let type = element.getAttribute('data-type');
    let now = new Date();

    if (now.getTime() - globalOffset > time.getTime() && type === 'start') {
      element.textContent = '';
      element.className = 'hidden no-refresh';
      element.parentElement.classList.remove('event-unstarted');
      return;
    }

    if (now.getTime() - globalOffset > time.getTime() && type === 'end') {
      element.textContent = 'Event has ended.';
      element.classList.add('no-refresh');
      element.parentElement.classList.remove('event-ends-soon');
      element.parentElement.classList.add('event-ended');
      return;
    }

    let timeString = '';

    let duration = (time.getTime() - (now.getTime() - globalOffset)) / 1000;
    let days = Math.floor(duration / (ONE_DAY));
    if (days > 0) {
      timeString += `${days}d`;
    } else {
      element.parentElement.classList.add('event-ends-soon');
    }
    let hours = Math.floor(duration % (ONE_DAY) / (ONE_HOUR));
    timeString += ` ${hours}h`;
    let minutes = Math.floor(duration % (ONE_HOUR) / (ONE_MINUTE));
    timeString += ` ${minutes}m`;
    let seconds = Math.floor(duration % ONE_MINUTE);
    timeString += ` ${seconds}s`;

    if (type === 'start') {
      element.textContent = `Starts in ${timeString}`;
      element.parentElement.classList.add('event-unstarted');
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
