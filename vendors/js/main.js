$(document).ready(function() {
      $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['Ruby', 'Rails', 'Javascript', 'Backbone'],

        'afterLoad': function(anchorLink, index){
          if(index == 2){
            $('#iphone-ga-info, #iphone-ga, #iphone-eddeo').addClass('active');
          }
        },

        'onLeave': function(index, nextIndex, direction){
          if (index == 3 && direction == 'down'){
            $('.section').eq(index -1).removeClass('moveDown').addClass('moveUp');
          }
          else if(index == 3 && direction == 'up'){
            $('.section').eq(index -1).removeClass('moveUp').addClass('moveDown');
          }

          $('#staticImg').toggleClass('active', (index == 2 && direction == 'down' ) || (index == 4 && direction == 'up'));
          $('#staticImg').toggleClass('moveDown', nextIndex == 4);
          $('#staticImg').toggleClass('moveUp', index == 4 && direction == 'up');
        }
      });
    });