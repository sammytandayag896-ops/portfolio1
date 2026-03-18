// Contact card interactions

document.addEventListener('DOMContentLoaded', function () {

  const contactItems = document.querySelectorAll('.contact-item');

  contactItems.forEach(function (item) {
    item.addEventListener('click', function (e) {
      const value = item.querySelector('.contact-value');
      if (!value) return;

      const text = value.textContent.trim();

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          showCopied(value);
        });
      }
    });
  });

  function showCopied(el) {
    const original = el.textContent;
    el.textContent = 'copied!';
    el.style.color = '#888';
    setTimeout(function () {
      el.textContent = original;
    }, 1500);
  }

});
