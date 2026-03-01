(function () {
  var DEFAULT_LANGUAGE = 'en';
  var SUPPORTED_LANGUAGES = ['ru', 'en'];
  var SWITCH_LABELS = {
    en: { ru: 'RU', en: 'EN', divider: ' : ' },
    ru: { ru: 'ру', en: 'англ', divider: ' : ' }
  };
  var RUSSIAN_TIMEZONES = {
    'Europe/Kaliningrad': true,
    'Europe/Moscow': true,
    'Europe/Kirov': true,
    'Europe/Volgograd': true,
    'Europe/Astrakhan': true,
    'Europe/Saratov': true,
    'Europe/Ulyanovsk': true,
    'Europe/Samara': true,
    'Asia/Yekaterinburg': true,
    'Asia/Omsk': true,
    'Asia/Novosibirsk': true,
    'Asia/Barnaul': true,
    'Asia/Tomsk': true,
    'Asia/Novokuznetsk': true,
    'Asia/Krasnoyarsk': true,
    'Asia/Irkutsk': true,
    'Asia/Chita': true,
    'Asia/Yakutsk': true,
    'Asia/Khandyga': true,
    'Asia/Vladivostok': true,
    'Asia/Ust-Nera': true,
    'Asia/Magadan': true,
    'Asia/Sakhalin': true,
    'Asia/Srednekolymsk': true,
    'Asia/Kamchatka': true,
    'Asia/Anadyr': true
  };

  var translations = {
    en: {
      nav_about: 'about me',
      nav_skills: 'skills',
      nav_projects: 'projects',
      nav_contacts: 'contacts',
      preview_title: 'Hi, i\'m dan',
      preview_role: 'programmer',
      about_head: 'about me',
      about_text: 'I\'m Daniel, I\'m 21.<br />I have been in the programming field for 5 years now.<br />Graduated from IT Top College in the area of software development.<br />Now I am receiving higher education at IT Top.<br />I like to automate things, create unique and unusual projects.<br />Let\'s create something together!',
      skills_head: 'skills',
      skills_languages_head: 'Languages',
      skills_level_confident: 'confident',
      skills_languages_csharp_text: 'The main language for<br />backend development',
      skills_languages_python_text: 'Scripts, bots, utilities',
      skills_level_base: 'base',
      skills_languages_html_text: 'Basic interface edits',
      skills_frameworks_head: 'Frameworks',
      skills_frameworks_csharp_text: 'ASP.net, WPF/WF<br />Xamarin',
      skills_frameworks_python_text: 'Aiogram, bs4, requests, asyncpg',
      skills_frameworks_html_text: 'Bootstrap, UIKit',
      skills_tools_head: 'Programmer tools',
      skills_soft_head: 'Soft skills',
      skills_soft_learning_head: 'Learning ability',
      skills_soft_learning_text: 'I quickly master new technologies when necessary<br />I accept criticism and feedback positively<br />It\'s interesting to grow as a backend developer',
      skills_soft_independence_head: 'Independence',
      skills_soft_independence_text: 'Searching for solutions through documentation and other resources<br />Ability to independently understand the code base',
      skills_soft_communication_head: 'Communication',
      skills_soft_communication_text: 'I\'m not afraid to ask clarifying questions<br />Experience communicating with non-technical specialists<br />Teamwork',
      skills_hard_head: 'Hard skills',
      skills_hard_databases_head: 'Databases',
      skills_hard_databases_text: 'PostgreSQL<br />SQLite<br />Design of structure for product tasks<br />Basic SQL queries',
      skills_hard_tools_head: 'Tools and environment',
      skills_hard_tools_text: 'Git<br />Docker (base - launch and deployment)<br />Linux<br />Testing',
      skills_hard_api_head: 'Working with APIs and integrations',
      skills_hard_api_text: 'Swagger/OpenAPI<br />JSON<br />Integration of third-party services',
      projects_head: 'projects',
      projects_table_type: '-type-',
      projects_table_project: '-project-',
      projects_table_role: '-area of responsibility-',
      projects_row_1_type: 'Telegram',
      projects_row_1_project: 'Yantarik',
      projects_row_1_role: 'Development',
      projects_row_2_type: 'Telegram',
      projects_row_2_project: 'IT TOP Journal',
      projects_row_2_role: 'Development',
      projects_row_3_type: 'Telegram',
      projects_row_3_project: 'Group Notes',
      projects_row_3_role: 'Development',
      projects_row_4_type: 'Application',
      projects_row_4_project: 'Library software',
      projects_row_4_role: 'Development',
      projects_row_5_type: 'Application',
      projects_row_5_project: 'Smart Home',
      projects_row_5_role: 'Development',
      projects_row_6_type: 'Website',
      projects_row_6_project: 'Voting Website',
      projects_row_6_role: 'Website layout',
      contacts_head: 'contacts',
      contacts_telegram: 'Telegram',
      contacts_mail: 'E-mail'
    },
    ru: {
      nav_about: 'обо мне',
      nav_skills: 'навыки',
      nav_projects: 'проекты',
      nav_contacts: 'контакты',
      preview_title: 'Прив, я даня',
      preview_role: 'программист',
      about_head: 'обо мне',
      about_text: 'Меня зовут Даниил, мне 21.<br />Я в программировании уже 5 лет.<br />Окончил колледж IT TOP по направлению разработки ПО.<br />Сейчас получаю высшее образование в IT TOP.<br />Люблю автоматизировать процессы и создавать уникальные проекты.<br />Давайте создадим что-то вместе!',
      skills_head: 'навыки',
      skills_languages_head: 'Языки',
      skills_level_confident: 'уверенно',
      skills_languages_csharp_text: 'Основной язык для<br />backend-разработки',
      skills_languages_python_text: 'Скрипты, боты, утилиты',
      skills_level_base: 'база',
      skills_languages_html_text: 'Базовые правки интерфейсов',
      skills_frameworks_head: 'Фреймворки',
      skills_frameworks_csharp_text: 'ASP.net, WPF/WF<br />Xamarin',
      skills_frameworks_python_text: 'Aiogram, bs4, requests, asyncpg',
      skills_frameworks_html_text: 'Bootstrap, UIKit',
      skills_tools_head: 'Инструменты разработчика',
      skills_soft_head: 'Софт-скиллы',
      skills_soft_learning_head: 'Обучаемость',
      skills_soft_learning_text: 'Быстро осваиваю новые технологии при необходимости<br />Позитивно принимаю критику и обратную связь<br />Интересно расти как backend-разработчик',
      skills_soft_independence_head: 'Самостоятельность',
      skills_soft_independence_text: 'Ищу решения через документацию и другие источники<br />Умею самостоятельно разбираться в кодовой базе',
      skills_soft_communication_head: 'Коммуникация',
      skills_soft_communication_text: 'Не боюсь задавать уточняющие вопросы<br />Есть опыт общения с нетехническими специалистами<br />Командная работа',
      skills_hard_head: 'Хард-скиллы',
      skills_hard_databases_head: 'Базы данных',
      skills_hard_databases_text: 'PostgreSQL<br />SQLite<br />Проектирование структуры под продуктовые задачи<br />Базовые SQL-запросы',
      skills_hard_tools_head: 'Инструменты и окружение',
      skills_hard_tools_text: 'Git<br />Docker (база - запуск и деплой)<br />Linux<br />Тестирование',
      skills_hard_api_head: 'Работа с API и интеграциями',
      skills_hard_api_text: 'Swagger/OpenAPI<br />JSON<br />Интеграция сторонних сервисов',
      projects_head: 'проекты',
      projects_table_type: '-тип-',
      projects_table_project: '-проект-',
      projects_table_role: '-зона ответственности-',
      projects_row_1_type: 'Telegram',
      projects_row_1_project: 'Yantarik',
      projects_row_1_role: 'Разработка',
      projects_row_2_type: 'Telegram',
      projects_row_2_project: 'IT TOP Журнал',
      projects_row_2_role: 'Разработка',
      projects_row_3_type: 'Telegram',
      projects_row_3_project: 'Групповые заметки',
      projects_row_3_role: 'Разработка',
      projects_row_4_type: 'Приложение',
      projects_row_4_project: 'ПО для библиотеки',
      projects_row_4_role: 'Разработка',
      projects_row_5_type: 'Приложение',
      projects_row_5_project: 'Умный дом',
      projects_row_5_role: 'Разработка',
      projects_row_6_type: 'Веб-сайт',
      projects_row_6_project: 'Сайт для голосования',
      projects_row_6_role: 'Верстка сайта',
      contacts_head: 'контакты',
      contacts_telegram: 'Telegram',
      contacts_mail: 'Почта'
    }
  };

  var currentLanguage = detectLanguageByUserContext();
  var langSwitch = document.getElementById('langSwitch');

  applyLanguage(currentLanguage);

  if (langSwitch) {
    langSwitch.addEventListener('click', function () {
      var activeLanguage = normalizeLanguage(document.documentElement.getAttribute('lang'));
      var nextLanguage = activeLanguage === 'ru' ? 'en' : 'ru';

      applyLanguage(nextLanguage);
    });
  }

  function applyLanguage(language) {
    var selectedLanguage = isSupportedLanguage(language) ? language : DEFAULT_LANGUAGE;
    var dictionary = translations[selectedLanguage] || translations[DEFAULT_LANGUAGE];
    var elements = document.querySelectorAll('[data-i18n]');

    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var key = element.getAttribute('data-i18n');
      if (!key || !dictionary[key]) {
        continue;
      }
      element.innerHTML = dictionary[key];
    }

    document.documentElement.setAttribute('lang', selectedLanguage);
    currentLanguage = selectedLanguage;
    updateSwitchState(selectedLanguage);
  }

  function updateSwitchState(language) {
    if (!langSwitch) {
      return;
    }

    updateSwitchLabels(language);

    var options = langSwitch.querySelectorAll('[data-lang-value]');
    for (var i = 0; i < options.length; i++) {
      var option = options[i];
      var optionLanguage = option.getAttribute('data-lang-value');
      option.classList.toggle('active', optionLanguage === language);
    }

    var ariaLabel = language === 'ru' ? 'Переключить язык' : 'Switch language';
    langSwitch.setAttribute('aria-label', ariaLabel);
  }

  function updateSwitchLabels(language) {
    var labels = SWITCH_LABELS[language] || SWITCH_LABELS.en;
    var ruOption = langSwitch.querySelector('[data-lang-value=\"ru\"]');
    var enOption = langSwitch.querySelector('[data-lang-value=\"en\"]');
    var divider = langSwitch.querySelector('.lang-switch-divider');

    if (ruOption) {
      ruOption.textContent = labels.ru;
    }
    if (enOption) {
      enOption.textContent = labels.en;
    }
    if (divider) {
      divider.textContent = labels.divider;
    }
  }

  function detectLanguageByUserContext() {
    var locales = [];
    if (navigator.languages && navigator.languages.length) {
      locales = locales.concat(navigator.languages);
    }
    if (navigator.language) {
      locales.push(navigator.language);
    }

    for (var i = 0; i < locales.length; i++) {
      var locale = normalizeLocale(locales[i]);
      if (locale.indexOf('ru') === 0 || extractRegionCode(locale) === 'RU') {
        return 'ru';
      }
    }

    var timezone = getCurrentTimezone();
    if (timezone && RUSSIAN_TIMEZONES[timezone]) {
      return 'ru';
    }

    return 'en';
  }

  function getCurrentTimezone() {
    try {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch (error) {
      return '';
    }
  }

  function extractRegionCode(locale) {
    if (!locale || typeof locale !== 'string') {
      return '';
    }

    var parts = locale.replace('_', '-').split('-');
    for (var i = parts.length - 1; i >= 0; i--) {
      var part = parts[i].toUpperCase();
      if (/^[A-Z]{2}$/.test(part)) {
        return part;
      }
    }

    return '';
  }

  function isSupportedLanguage(language) {
    return SUPPORTED_LANGUAGES.indexOf(language) !== -1;
  }

  function normalizeLanguage(language) {
    if (!language || typeof language !== 'string') {
      return '';
    }

    return language.toLowerCase().slice(0, 2);
  }

  function normalizeLocale(locale) {
    if (!locale || typeof locale !== 'string') {
      return '';
    }

    return locale.replace('_', '-').toLowerCase();
  }
})();
