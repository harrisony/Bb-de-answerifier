var injector = document.createElement("script");injector.src = "//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js";injector.type="text/javascript";document.getElementsByTagName("head")[0].appendChild(injector);
// stupid blackboard
var $j = jQuery.noConflict();

var questions = $j('.contentListPlain');
$j(questions).children().each(function(){
  $j(this).find('.contentListRight').remove();
  $j(this).find('.reviewTestSubCellForIconBig').empty();
  $j(this).find('.correctAnswerFlag').remove();
  $j(this).find('.details td[valign=top] tr:contains("Selected Answer:")').remove();
  $j(this).find('.details td[valign=top] tr:contains("Answer Feedback:")').remove();
  $j(this).find('.details td[valign=top] tr:contains("Response Feedback:")').remove();
  //$j(this).find('.details tr td[valign=top]:contains("Response Feedback:")').parent().remove()
  //$j(this).find('.details td[valign=top] .quesTable').remove();
  $j(this).find('.details td[valign=top] li.matchingAnswers td[headers!=question]').remove();
  $j(this).find('.details td[valign=top] .reviewQuestionsAnswerDiv .answerTextSpan pre').text('free text entry');
  $j(this).find('.details td[valign=top] .reviewQuestionsAnswerDiv').each(function(i) {
    $j(this).parent().siblings().text(String.fromCharCode('A'.charCodeAt() + i) + '.');
  });
});
