  const createSuccessNotification = (iconClass, fontColor, bgColor) => {
    const successNotification = document.createElement('div');
    const icon = document.createElement('i');
    icon.classList.add('fa', iconClass);
    successNotification.appendChild(icon);
    successNotification.style.fontSize = '40px';
    successNotification.style.color = fontColor;
    successNotification.style.background = bgColor;
    successNotification.style.borderRadius = '4px';
    successNotification.style.boxShadow = 'rgba(0, 0, 0, 0.1) 0px 2px 4px';
    successNotification.style.padding = '6px 26px 6px 26px';
    successNotification.style.bottom = '10px';
    successNotification.style.left = '10px';
    successNotification.style.position = 'fixed';
    successNotification.style.zIndex = '99999';
    document.body.appendChild(successNotification);
    setTimeout(function() {
      document.body.removeChild(successNotification);
    }, 4000);
  };

  const clickElementByContent = (content, pattern) => {
    const elements = document.querySelectorAll("i[data-alt='5'][class*='" + pattern + "'], i[title='" + content + "']");
    if (elements.length > 0) {
      elements[0].click();
      return true;
    }
    return false;
  };

  const clickElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) {
      element.click();
      return true;
    }
    return false;
  };

  const mangalibSelector = "i.fa.fa-heart-o";
  const translatorSelector = "i[data-alt='5']";

  const clickedMangaLib = clickElement(mangalibSelector);
  const clickedTranslator = clickElement(translatorSelector);

  let clickedReadManga = false;

  if (window.location.hostname === 'readmanga.live' || window.location.hostname === '24.mintmanga.one') {
    clickedReadManga = clickElementByContent("Сказать спасибо переводчику", "star-on-png");
  }

  if (clickedMangaLib) {
    createSuccessNotification('fa-heart', 'var(--red)', 'var(--button-default-bg)');
  } else if (clickedReadManga || clickedTranslator) {
    createSuccessNotification('fa-thumbs-up', 'darkgreen', 'lightgreen');
  }

  const wrapSelector = '#wrap > div.reader-controller';

  if (window.location.hostname === 'mangalib.me') {
    const ratingStSelector = '.reader-review__right';
    const ratingStElement = document.querySelector(ratingStSelector);
    if (ratingStElement) {
        ratingStElement.style.display = 'none';
    }
  } else if (window.location.hostname === 'readmanga.live' || window.location.hostname === '24.mintmanga.one') {
    const thumbsUpSelector = wrapSelector + ' i.fa.fa-thumbs-up.fa-lg, ' + wrapSelector + ' span.user-rating';
    const thumbsUpElements = document.querySelectorAll(thumbsUpSelector);
    for (const element of thumbsUpElements) {
        element.style.display = 'none';
    }
  }
  setTimeout(function() {
    const notyContainer = document.getElementById('noty_bottomLeft_layout_container');
    if (notyContainer) {
      notyContainer.style.display = 'none';
    }
  }, 250);
