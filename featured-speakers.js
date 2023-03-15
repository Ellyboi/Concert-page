/* eslint-disable camelcase */
function menuOpen() {
  document.getElementById('overlay').style.display = 'flex';
}

function menuClose() {
  document.getElementById('overlay').style.display = 'none';
}
menuOpen();
menuClose();
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
const onboardSpeakers = [
  {
    feature_img: './images/speaker_01.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Benkler studies commons-based peer production, and published his seminal book, The Wealth of Networks in 2006',
  },
  {
    feature_img: './images/speaker_02.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
  },
  {
    feature_img: './images/speaker_03.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'As the main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts.',
  },
  {
    feature_img: './images/speaker_04.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'European ingetration, political democracy and participation of youth through online as her major condern, Reda’s report outlining potential changes to EU copyright law was approved by the Parliament in July ',
  },
  {
    feature_img: './images/speaker_05.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Lila Tretikov is the Executive of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languag-es and used by nearly half a billion people around the world every month.',
  },
  {
    feature_img: './images/speaker_06.png',
    official_name: 'Yochai Benkler',
    nickname: 'Yochai',
    speaker_title: '<small>Berkman Professor of Entrepreneurial legal studies of Havard Law School</small>',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open-source move-ment',
  },
];
const feature_speakers = document.getElementById('feature');

const createElementAndAppendToParent = (newElement, className, id, parent, HTMLtext) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${HTMLtext}`;
  parent.appendChild(element);
  return element;
};

// eslint-disable-next-line no-undef
const speaker_heading = createElementAndAppendToParent('h2', 'featured_speakers', 'featured-speaker', feature_speakers, 'Featured Speakers');
const featured_speakers = createElementAndAppendToParent('div', 'speakers', 'speakers', feature_speakers, '');

onboardSpeakers.forEach((i) => {
  const speakers = createElementAndAppendToParent('div', 'main-speakers', 'speaker-1', featured_speakers, ` <img src='${onboardSpeakers[onboardSpeakers.indexOf(i)].feature_img}' alt="" class="feature_img">`);
  const specific_speakers = createElementAndAppendToParent('div', 'name_speakers', 'name_speakers', speakers, '');
  const speaker_names = createElementAndAppendToParent('h5', 'name', 'name', specific_speakers, '');
  const official_name = createElementAndAppendToParent('strong', 'official_name', 'official_name', speaker_names, `${onboardSpeakers[onboardSpeakers.indexOf(i)].official_name}`);
  const speaker_title = createElementAndAppendToParent('p', 'speaker_title', 'speaker_title', specific_speakers, '');
  const title = createElementAndAppendToParent('small', 'title', 'title', speaker_title, `${onboardSpeakers[onboardSpeakers.indexOf(i)].speaker_title}`);
  const speaker_description = createElementAndAppendToParent('p', 'description', 'description', specific_speakers, '');
  const description = createElementAndAppendToParent('span', 'description', 'description', speaker_description, `${onboardSpeakers[onboardSpeakers.indexOf(i)].description}`);
});