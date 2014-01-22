function inputFocus(){
	// jQuery('#content').focus();
  jQuery('.CodeMirror').addClass('CodeMirror-focused');
}

function autoSave(){
	$(function(){
      $('textarea').uniform();
      $('form').sisyphus({
        timeout: 1,
        onSave: function() {
          // $.jnotify('Data are saved to Local Storage', 500);
          // kludge on Uniform.js bug
          setTimeout(function(){
            $.uniform.update('textarea');
          }, 200);
          // console.log('sisyphus save');
        },
        onRestore: function() {
          // $.jnotify('Data are restored from Local Storage', 500);
          // kludge on Uniform.js bug
          setTimeout(function(){
            $.uniform.update('textarea');
          }, 200);
        },
        onRelease: function() {
          // $.jnotify('Data are removed from Local Storage', 'warning', 500);
          // kludge on Uniform.js bug
          setTimeout(function(){
            $.uniform.update('textarea');
          }, 500);
        }
      });
    });
}

function codeEditor(){
  CodeMirror.commands.autocomplete = function(cm) {
    CodeMirror.showHint(cm, CodeMirror.hint.javascript);
  };


  // Waiting on the issue to format these individually: https://github.com/marijnh/CodeMirror/issues/1919
  var editor = CodeMirror.fromTextArea(document.getElementById("text-editor"), {
    mode: {
      name: "markdown",
      highlightFormatting: true
    },
    lineNumbers: false,
    lineWrapping: true,
    autofocus: true,
    extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"},
    // onLoad: onLoadEditor()
    });

    // Clear Editor
    $('.clear-yes').on('click', function(){
      editor.setValue("");
      editor.clearHistory();
      $('.modal').removeClass('initial');
      inputFocus();
      // console.log('clear!');
    });
    editor.on("keyup", function() {
      editor.save();
      // console.log('saved to textarea');

      // Add wrapper elements

      if ($(".cm-formatting-header").length > 0) {
        // $(".cm-formatting-header").parent().addClass('cm-header-wrap');
        // console.log(this + 'exists');
      }
    });

    $('.save').click(function(){
      var existingText = $('#text-editor').val();
      editor.setValue(existingText);
      // console.log(existingText);
    });
  }

function setCookie(){
    if($.cookie('_scrtchpd') === 'true') {
      // Do nothing, the cookie exists

    } else {
      // Set the cookie and add the initial class
      $.cookie('_scrtchpd', 'true', { expires: 500 });
      $('#modal-info').addClass('initial');
    }

  // $.cookie('newscrtchpd', 'Cookie Set', { expires: 500 });
    $('.modal-close').on('click', function(){
     $('#modal-info').removeClass('initial');
     inputFocus();
     // console.log('close');
    });
}

function keepUrl(){
  $('.call-modal').on('click', function(e){
    e.preventDefault();

  });
}

function modal(){
  $('.call-modal').on('click', function(e){
    var modalID = $(this).attr('href');
    $(modalID).addClass('initial');
    // console.log(modalID);
  });
  $('.modal-close, .clear-cancel').on('click', function(){
   $('.modal').removeClass('initial');
   inputFocus();
   // console.log('close');
  });
}

 jQuery(document).ready(function() {
  	inputFocus();
    autoSave();
    setCookie();
    keepUrl();
    modal();
  });
 $(window).bind("load", function() {
     codeEditor();
  });



