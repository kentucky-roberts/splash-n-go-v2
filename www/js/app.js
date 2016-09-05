// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('splash-n-go', ['ionic', 'ionic.contrib.ui.hscrollcards', 'splash-n-go.controllers', 'splash-n-go.filters', 'splash-n-go.services', 'ionic.contrib.ui.cards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})


.directive('noScroll', function() {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $element.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'ScrollcardsController'
      }
    }
  })
  .state('tab.allNews', {
    url: '/news',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news.html',
        controller: 'NewsController'
      }
    }
  })
  .state('tab.news', {
    url: '/news/:newsId',
    views: {
      'tab-news': {
        templateUrl: 'templates/tab-news-details.html',
        controller: 'NewsDetailsController'
      }
    }
  })

 .state('tab.cards', {
      url: '/cards',
      views: {
        'tab-cards': {
          templateUrl: 'templates/tab-cards.html',
          controller: 'CardsCtrl'
        }
      }
    })

.state('tab.photos', {
     url: '/photos',
     views: {
       'tab-photos': {
         templateUrl: 'templates/tab-photos.html'
       }
     }
   })

   .state('tab.videos', {
        url: '/videos',
        views: {
          'tab-videos': {
            templateUrl: 'templates/tab-videos.html',
            controller: 'VideosController'
          }
        }
      })


  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })



    .state('tab.posts', {
        url: '/posts',
        views: {
          'tab-posts': {
            templateUrl: 'templates/tab-posts.html',
            controller: 'PostsController'
          }
        }
      })
      .state('tab.post-detail', {
        url: '/posts/:postId',
        views: {
          'tab-posts': {
            templateUrl: 'templates/post-detail.html',
            controller: 'PostDetailController'
          }
        }
      })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/photos');

});
