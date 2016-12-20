// Initially disable the button
$("button").prop("disabled", true)


$("textarea").on("input", function() {
  if ($(this).val().length > 0) {
    $("button").prop("disabled", false)
  } else {
    $("button").prop("disabled", true)
  }
})
