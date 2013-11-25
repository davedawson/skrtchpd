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

 jQuery(document).ready(function() {
	inputFocus();
	autoSave();
});