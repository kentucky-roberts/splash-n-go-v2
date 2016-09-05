angular.module('splash-n-go.services', [])

.factory('Posts', function() {

  var posts = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];


//   [   {    
//       "id": 1,  
// 	"title": "Retirement Not On The Radar For Jr.",
// 	      "url_title": "retirement-not-on-the-radar-for-jr",
// 	      "nascar-text": "As a 13-time recipient of the NMPA Most Popular Driver Award, beloved by fans and a star-studded symbol of stock car racing, Earnhardt is hardly the guy anyone would pinpoint as the one who wasn’t quite jelling with the group.\n\n But there was a time when Earnhardt would sit down at the table with Hendrick Motorsports owner Rick Hendrick and his teammates then leave the meeting having made little contribution to the discussion.\n\n \n\n For the longest time, I felt like maybe I was the odd man out or I just didn’t fit in, Earnhardt recalled at Charlotte Media Tour on Thursday. For whatever reason, it just didn’t feel like I was a piece of the puzzle. ... We couldn’t get our team going, we couldn’t find success, I was unhappy.",
// 	      "nascar_keywords": "Dale Jr, Charlotte",
// 	      "nascar_tags": "drivers",
// 	      "nascar_meta_tags": "NMPA Most Popular Driver Award"   
// },     { 
//     "id": 2,     
// 	"title": "Alex Bowman Learned Via Twitter Feed That He Lost Cup Ride",
// 	      "url_title": "alex-bowman-learned-via-twitter-feed-that-he-lost-cup-ride",
// 	      "nascar-text": "Alex Bowman said he learned of his dismissal from Tommy Baldwin racing on",
// 	      "nascar_keywords": "Alex Bowman, Twitter Feed, Lost Cup Ride",
// 	      "nascar_tags": "Alex Bowman, Cup",
// 	      "nascar_meta_tags": "Alex Bowman, Twitter Feed, Lost Cup Ride"   
// },     { 
//     "id": 3,     
// 	"title": "NASCAR Illustrated: Hang Ten from Martinsville",
// 	      "url_title": "nascar-illustrated-hang-ten-from-martinsville",
// 	      "nascar-text": "Kenny Wallace nailed another prediction in this space last week when he said Joey Loganohad more to worry about than Kevin Harvick when it came to revenge at Martinsville.",
// 	      "nascar_keywords": "car",
// 	      "nascar_tags": "car",
// 	      "nascar_meta_tags": "car"   
// },     {    
//     "id": 4,  
// 	"title": "Herman Unplugged: What does this mean for NASCAR?",
// 	      "url_title": "herman-unplugged-what-does-this-mean-for-nascar",
// 	      "nascar-text": "NASCAR ILLUSTRATED:Tony Stewarts retirement after next season means two of our biggest champions will be gone from the competitive landscape in the span of a year. How will losing that amount of star power impact the sport and should NASCAR be concerned? HERMAN: I think from the standpoint that Dale Jr. is gonna be 41 here in no time.",
// 	      "nascar_keywords": "NASCAR, Tony Stewart, retirement",
// 	      "nascar_tags": "drivers",
// 	      "nascar_meta_tags": "NASCAR, Tony Stewart, retirement"   
// }];

  return {
    all: function() {
      return posts;
    },
    remove: function(post) {
      posts.splice(posts.indexOf(post), 1);
    },
    get: function(postId) {
      for (var i = 0; i < posts.length; i++) {
        if (posts[i].id === parseInt(postId)) {
          return posts[i];
        }
      }
      return null;
    }
  };
})


.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})



.factory('News',
  function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [
 {
    "id": 1,
    "title": "Ricky Bobby Airborne Again!",
    "url_title": "ricky-bobby-airborne",
    "image": "img/news-images/ricky-bobby/airborne-thumb.png",
    "lead": "Charlotte Motor Speedway and ends up going airborne",
    "description": "Ricky Bobby (Will Ferrell) is a NASCAR driver who wants to go fast. While he was working on the pit crew of Dennit Racing driver Terry Cheveaux (Adam McKay), Ricky replaces him and ends up finishing in third place, despite starting mid-race in last place. Ricky quickly soars to the top of NASCAR by achieving his fame and fortune at Dennit Racing and meeting his future wife, Carly (Leslie Bibb). Ricky eventually persuades Dennit to field an additional car and arranges to have his best friend, Cal Naughton, Jr. (John C. Reilly), on his team. While he and Cal are on top of the racing world, Ricky challenges his flamboyant French Formula One archrival, Jean Girard (Sacha Baron Cohen), who outperforms him on the track and becomes Dennit Racings next top driver. Desperate to regain his dominance, Ricky pushes himself too hard during the race at Charlotte Motor Speedway and ends up going airborne, barrel-rolling several times.",
    "price": 99,
    "qty": 100,
    "photos": [
      "img/news-images/ricky-bobby/airborne.png",
      "img/news-images/ricky-bobby/airborne-2.png",
      "img/news-images/ricky-bobby/airborne-3.png"
    ]
  },
  {
    "id": 2,
    "title": "Shake 'n bake",
    "url_title": "shake-n-bake",
    "image": "img/news-images/ricky-bobby/shake-n-bake-thumb.jpg",
    "lead": "Get used to hearing it!",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 200,
    "qty": 44,
    "photos": [
        "img/news-images/ricky-bobby/airborne.png",
        "img/news-images/ricky-bobby/airborne-2.png",
        "img/news-images/ricky-bobby/airborne-3.png"
    ]
  },
  {
    "id": 3,
    "title": "NASCAR driver who wants to go fast!",
    "url_title": "go-fast",
    "image": "img/news-images/ricky-bobby/ricky-bobby-thumb.jpg",
    "lead": "Lorem ipsum dolor sit amet!",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 50,
    "qty": 200,
    "date": 3,
    "photos": [
        "img/news-images/ricky-bobby/airborne.png",
        "img/news-images/ricky-bobby/airborne-2.png",
        "img/news-images/ricky-bobby/airborne-3.png"
    ]
  },
  {
    "id": 4,
    "title": "Race News!!",
    "url_title": "race-news",
    "image": "img/news-images/ricky-bobby/ricky-bobby-grace.jpg",
    "lead": "Slightly or significantly?",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 15,
    "qty": 500,
    "date": 4,
    "photos": [
        "img/news-images/ricky-bobby/airborne.png",
        "img/news-images/ricky-bobby/airborne-2.png",
        "img/news-images/ricky-bobby/airborne-3.png"
    ]
  },
  {
    "id": 5,
    "title": "NASCAR Lifestyles",
    "url_title": "nascar-lifestyles",
    "image": "img/news-images/ricky-bobby/airborne-thumb.png",
    "lead": "Jsunt in culpa qui official",
    "description": "Lorem ipsum dolor sit amet, sed do eiusmod tempor. Incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "price": 75,
    "qty": 55,
    "date": 5,
    "photos": [
        "img/news-images/ricky-bobby/airborne.png",
        "img/news-images/ricky-bobby/airborne-2.png",
        "img/news-images/ricky-bobby/airborne-3.png"
    ]
  },
  {
    "id": 6,
    "title": "Camel Racing Scores",
    "url_title": "amazing-people-awarded-for-doing-good-things",
    "image": "img/news-images/ricky-bobby/ricky-bobby-3.jpg",
    "lead": "Great people doing great things and being awarded for it.  ",
    "description": "This event will be life-changing, and you should buy a ticket because there are only three left!  Join PNAA in the worlds largest commercial aerospace cluster to gain crucial intelligence on the future of the aerospace manufacturing industry. Executive networking, B2B meetings, industry tours.",
    "price": 15,
    "qty": 100,
    "date": 6,
    "photos": [
        "img/news-images/ricky-bobby/airborne.png",
        "img/news-images/ricky-bobby/airborne-2.png",
        "img/news-images/ricky-bobby/airborne-3.png"
    ]
  }
  ];

  return {
    all: function() {
      return news;
    },
    remove: function(news) {
      news.splice(news.indexOf(news), 1);
    },
    get: function(newsId) {
      for (var i = 0; i < news.length; i++) {
        if (news[i].id === parseInt(newsId)) {
          return news[i];
        }
      }
      return null;
    }
  };
})
