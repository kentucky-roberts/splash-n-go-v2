angular.module('splash-n-go.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('PostsController', function($scope, Posts) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.post = Posts.all();
  console.log($scope.post[0]);

  $scope.remove = function(post) {
    Posts.remove(post);
  };
})

.controller('PostDetailController', function($scope, $stateParams, Posts) {
  $scope.post = Posts.get($stateParams.postId);
})


.controller('MainCtrl', ['$scope', '$ionicModal', '$ionicSlideBoxDelegate', function ($scope, $ionicModal, $ionicSlideBoxDelegate) {

  	$scope.aImages = [{
      	'src' : 'img/demo-1.jpg',
      	'msg' : 'Swipe left, Tap/click to close'
    	}, {
        'src' : 'img/demo-2.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-3.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-4.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-5.jpg',
        'msg' : ''
      }, {
        'src' : 'img/demo-6.jpg',
        'msg' : ''
    }];

    $ionicModal.fromTemplateUrl('image-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $ionicSlideBoxDelegate.slide(0);
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    // Call this functions if you need to manually control the slides
    $scope.next = function() {
      $ionicSlideBoxDelegate.next();
    };

    $scope.previous = function() {
      $ionicSlideBoxDelegate.previous();
    };

  	$scope.goToSlide = function(index) {
      $scope.modal.show();
      $ionicSlideBoxDelegate.slide(index);
    }

    // Called each time the slide changes
    $scope.slideChanged = function(index) {
      $scope.slideIndex = index;
    };
  }
])




.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {
  var cardTypes = [{
      title: '',
    image: 'img/news-images/cover-images/cover-1.jpg'
  }, {
      title: '',
    image: 'img/news-images/cover-images/cover-2.jpg'
  }, {
      title: '',
    image: 'img/news-images/cover-images/cover-3.jpg'
  }, {
      title: '',
    image: 'img/news-images/cover-images/cover-4.jpg'
  }, {
    title: '',
    image: 'img/news-images/cover-images/cover-5.jpg'
    }, {
        title: '',
      image: 'img/news-images/cover-images/cover-6.jpg'
    },
    {
        title: '',
      image: 'img/news-images/cover-images/cover-7.jpg'
    },
    {
        title: '',
      image: 'img/news-images/cover-images/cover-8.jpg'
    }

];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

  $scope.cardSwiped = function(index) {
    $scope.addCard();
  };


  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})


.controller('VideosController', function($scope, $ionicSwipeCardDelegate) {

})

.controller('ImagesController', function($scope, $ionicSwipeCardDelegate) {

})

.controller('NewsController', ['$scope', '$http', '$log', '$q', '$timeout', '$ionicModal', '$ionicPopover', '$ionicListDelegate', 'News', 'ModalService',
  function($scope, $http, $log, $q, $timeout, $ionicModal, $ionicPopover, $ionicListDelegate, News, ModalService) {

    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true

    $scope.allNews = News.all();

    var allNews = $scope.allNews;

    $scope.filterFunction = function(element) {
      return element.name.match(/^Ma/) ? true : false;
    };

    $scope.remove = function(news) {
      News.remove(event);
    };

    $scope.newNews = function(eventData) {
      $scope.closeModal();
      console.log(eventData.title);

      $scope.events.push(newsData);
      console.log($scope.events.length);

    };

}])



  .controller('NewsDetailsController', ['$scope', '$state','$location', '$stateParams', '$http', '$log', '$q', '$timeout', '$ionicModal', 'News', 'ModalService',
    function($scope, $state, $location, $stateParams, $http, $log, $q, $timeout, $ionicModal, News, ModalService) {

     $scope.news = News.get($stateParams.newsId);


        ////////////////////////////////////////
        // ModalService
        ////////////////////////////////////////
        $scope.showNewEvent = function() {
          ModalService
            .init('modules/modals/new-event.html')
            .then(function(modal) {
                modal.show();
            });
        };

        $scope.showPurchaseForm = function() {
            ModalService
            .init('modules/modals/purchase-form.html')
            .then(function(modal) {
                modal.show();
            });
        };
          $scope.submitPurchaseForm = function(purchaseData) {
            $scope.closeModal();
            console.log(purchaseData);
          };


        $scope.showSaveForm = function() {
            ModalService
            .init('modules/modals/save-form.html')
            .then(function(modal) {
                modal.show();
            });
        };
          $scope.submitSaveForm = function(saveData) {
            $scope.closeModal();
            console.log(saveData);
          };


        $scope.showSendForm = function() {
            ModalService
            .init('modules/modals/send-form.html')
            .then(function(modal) {
                modal.show();
            });
        };
          $scope.submitSendForm = function(sendData) {
            $scope.closeModal();
            console.log(sendData);
          };



    }])





  .controller('ScrollcardsController', function($scope) {

    $scope.items = [];

    for (var i = 0; i <= 5; i++) {
      var tmp = [
        {desc: 'The Ramones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSulfJcjBhxxW2NBBn9KbE3B4BSeh0R7mQ38wUi_zpJlQrMoDWh_qFcMelE_tjtAERUPTc'},
        {desc: 'The Beatles', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGpH07f9zeucoOs_stZyIFtBncU-Z8TDYmJgoFnlnxYmXjJEaitmxZNDkNvYnCzwWTySM'},
        {desc: 'Pink Floyd', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT-FbU5dD_Wz472srRIvoZAhyGTEytx9HWGusbhYgSc2h0N6AqqRrDwzApmyxZoIlyxDcU'},
        {desc: 'The Rolling Stones', image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6uwPPBnHfAAUcSzxr3iq9ou1CZ4f_Zc2O76i5A4IyoymIVwjOMXwUFTGSrVGcdGT9vQY'},
        {desc: 'The Jimi Hendrix Experience', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRA3jz0uhVypONAKWUve80Q6HASvuvZiohl4Sru5ZihkAsjWiaGjocfxd0aC3H7EeFk5-I'},
        {desc: 'Van Halen', image:'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIslVN9cJJ6YuV0y7JihAyA63JDhXGhkCVxHIRE-IoaF-rpefjIXO5osA24QvN9iCptC8'}
      ];
      $scope.items = $scope.items.concat(tmp);
    };
  })
