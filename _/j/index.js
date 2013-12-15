function inputFocus(){
	jQuery('#content').focus();
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
    // autofocus: true,
    extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"},
    // onLoad: onLoadEditor()
    });

    editor.on("keyup", function() {
      editor.save();
      // console.log('saved to textarea');
    });

    $('.save').click(function(){
      var existingText = $('#text-editor').val();
      editor.setValue(existingText);
      // console.log(existingText);
    });
  }

 jQuery(document).ready(function() {
  	inputFocus();
    autoSave();
  });
 $(window).bind("load", function() {
     codeEditor();
  });



