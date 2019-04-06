var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

$("sub").each(function() {
  if (this.previousSibling.tagName == "SUP") {
    this.style.marginLeft = "-0.55em";
  }
});
/*$("sup").each(function() {
    if (this.previousSibling.tagName == "SUB") {
        this.style.margin = "0 -0.24em 0 -0.32em";
    }
});
