 <script type="text/javascript">
      $(function() {
        $('form').submit(function(){
          $.post('404.html', function() {
            window.location = '404.html';
          });
          return false;
        });
      });
      </script>
