(function () {
  Array.prototype.forEach.call(document.querySelectorAll('[data-random]'), function (el) {
    try {
      const [a, b] = JSON.parse(el.dataset.random)
      el.classList.add('random-' + (Math.floor(Math.random() * (b - a + 1)) + a))
    } catch (e) {
    }
  })
})();
