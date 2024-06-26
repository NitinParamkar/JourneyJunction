let sampleListings = [
  {
    title: 'Cozy Beachfront Cottage',
    description: 'Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1622396090075-ab6b8396fe9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fENvenklMjBCZWFjaGZyb250JTIwQ290dGFnZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    price: 1500,
    location: 'Malibu',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -118.689423, 34.035591 ] }
  },
  {
    title: 'Mindboggling Madagascar',
    description: 'Beautiful sunsets and unspoilt beaches with crystal clear water. Good surfing spot',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1656829500356-3b6f7c3b4c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TWluZGJvZ2dsaW5nJTIwTWFkYWdhc2NhcnxlbnwwfHwwfHx8MA%3D%3D'
    },
    price: 1200,
    location: 'Madagascar',
    country: ' East Africa',
    geometry: { type: 'Point', coordinates: [ 46.7059842741429, -19.3735339420708 ] }
  },
  {
    title: 'Mountain Retreat',
    description: "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1691433317101-fe4daf64b522?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1vdW50YWluJTIwUmV0cmVhdHxlbnwwfHwwfHx8MA%3D%3D'
    },
    price: 1000,
    location: 'Aspen',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -106.823561, 39.191113 ] }
  },
  {
    title: 'Historic Villa in Tuscany',
    description: 'Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 2500,
    location: 'Florence',
    country: 'Italy',
    geometry: { type: 'Point', coordinates: [ 11.255576, 43.769871 ] }
  },
  {
    title: 'Secluded Treehouse Getaway',
    description: "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 800,
    location: 'Portland',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -122.674195, 45.520247 ] }
  },
  {
    title: 'Beachfront Paradise',
    description: 'Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 2000,
    location: 'Cancun',
    country: 'Mexico',
    geometry: { type: 'Point', coordinates: [ -86.851047, 21.161785 ] }
  },
  {
    title: 'Rustic Cabin by the Lake',
    description: 'Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 900,
    location: 'Lake Tahoe',
    country: 'United States',
    geometry: {
      type: 'Point',
      coordinates: [ -119.97169299999999, 38.926272999999995 ]
    }
  },
  {
    title: 'Luxury with Oceanfront Views',
    description: 'Experience the epitome of luxury living with breathtaking oceanfront views from this exquisite penthouse in the Hawaiian Islands.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1526786220381-1d21eedf92bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEx1eHVyeSUyMHdpdGglMjBPY2VhbmZyb250JTIwVmlld3N8ZW58MHx8MHx8fDA%3D'
    },
    price: 5000,
    location: 'Maui',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -156.453056, 20.798363 ] }
  },
  {
    title: 'Ski-In/Ski-Out Chalet',
    description: 'Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1589223050279-18d1f14059cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3dpc3MlMjBBbHBzfGVufDB8fDB8fHww'
    },
    price: 3000,
    location: 'Verbier',
    country: 'Switzerland',
    geometry: { type: 'Point', coordinates: [ 7.228548, 46.096795 ] }
  },
  {
    title: 'Safari Lodge in the Serengeti',
    description: 'Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 4000,
    location: 'Serengeti National Park',
    country: 'Tanzania',
    geometry: { type: 'Point', coordinates: [ 30.536625, 38.820522 ] }
  },
  {
    title: 'Ultimate Camping House',
    description: "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 1800,
    location: 'Amsterdam',
    country: 'Netherlands',
    geometry: { type: 'Point', coordinates: [ 4.9, 52.378 ] }
  },
  {
    title: 'Private Island Retreat',
    description: 'Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 1800,
    location: 'Fiji',
    country: 'Fiji',
    geometry: { type: 'Point', coordinates: [ 178.4406, -18.1456 ] }
  },
  {
    title: 'Charming Beach in the Cotswolds',
    description: 'Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 1200,
    location: 'Cotswolds',
    country: 'United Kingdom',
    geometry: { type: 'Point', coordinates: [ 130.708022, 32.800881 ] }
  },
  {
    title: 'Historic Brownstone in Boston',
    description: 'Step back in time in this elegant historic brownstone located in the heart of Boston.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 2200,
    location: 'Boston',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -71.058291, 42.360253 ] }
  },
  {
    title: 'Trekking in Bali',
    description: 'Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 1800,
    location: 'Bali',
    country: 'Indonesia',
    geometry: { type: 'Point', coordinates: [ 115.2191175, -8.6524973 ] }
  },
  {
    title: 'Mountain View Cabin in Banff',
    description: 'Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 1500,
    location: 'Banff',
    country: 'Canada',
    geometry: { type: 'Point', coordinates: [ -115.56825, 51.177778 ] }
  },
  {
    title: 'Art Deco Apartment in Miami',
    description: 'Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.',
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 1600,
    location: 'Miami',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -80.19362, 25.774173 ] }
  },
  {
    title: 'Tropical Villa in Phuket',
    description: 'Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 3000,
    location: 'Phuket',
    country: 'Thailand',
    geometry: { type: 'Point', coordinates: [ 98.386793, 7.888931 ] }
  },
  {
    title: 'Historic Castle in Scotland',
    description: 'Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 4000,
    location: 'Scottish Highlands',
    country: 'United Kingdom',
    geometry: { type: 'Point', coordinates: [ -86.584995, 36.323662 ] }
  },
  {
    title: 'Desert Oasis in Dubai',
    description: 'Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 5000,
    location: 'Dubai',
    country: 'United Arab Emirates',
    geometry: { type: 'Point', coordinates: [ 55.292491, 25.265347 ] }
  },
  {
    title: 'Rustic Log Cabin in Montana',
    description: 'Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 1100,
    location: 'Montana',
    country: 'United States',
    geometry: {
      type: 'Point',
      coordinates: [ -109.172599073804, 47.0725146587006 ]
    }
  },

  {
    title: 'Luxary Villa in Greece',
    description: 'Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 2500,
    location: 'Mykonos',
    country: 'Greece',
    geometry: { type: 'Point', coordinates: [ 25.347102999999997, 37.434446 ] }
  },
  {
    title: 'Eco-Friendly Treehouse Retreat',
    description: "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    image: {
      filename: 'listingimage',
      url: 'https://plus.unsplash.com/premium_photo-1685305676839-26406ddbe4de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWNvJTIwRnJpZW5kbHklMjBUcmVlaG91c2UlMjBSZXRyZWF0fGVufDB8fDB8fHww'
    },
    price: 750,
    location: 'Costa Rica',
    country: 'Costa Rica',
    geometry: {
      type: 'Point',
      coordinates: [ -84.2009147613538, 10.2577944410312 ]
    }
  },
  {
    title: 'Historic Cottage in Charleston',
    description: 'Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 1600,
    location: 'Charleston',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -79.940273, 32.787601 ] }
  },
  {
    title: 'Modern Apartment in Tokyo',
    description: 'Explore the vibrant city of Tokyo from this modern and centrally located apartment.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60'
    },
    price: 2000,
    location: 'Tokyo',
    country: 'Japan',
    geometry: { type: 'Point', coordinates: [ 139.1485991, 35.76478424 ] }
  },
  {
    title: 'Lakefront Cabin in New Hampshire',
    description: 'Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 1200,
    location: 'New Hampshire',
    country: 'United States',
    geometry: {
      type: 'Point',
      coordinates: [ -71.5783054333969, 43.6898878153712 ]
    }
  },
  {
    title: 'Luxury Villa in the Maldives',
    description: 'Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 6000,
    location: 'Maldives',
    country: 'Maldives',
    geometry: { type: 'Point', coordinates: [ 73.51104943, 4.17887365 ] }
  },
  {
    title: 'Ski Chalet in Aspen',
    description: 'Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60'
    },
    price: 4000,
    location: 'Aspen',
    country: 'United States',
    geometry: { type: 'Point', coordinates: [ -106.823561, 39.191113 ] }
  },

  {
    title: 'Secluded Beach House in Costa Rica',
    description: 'Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.',
    image: {
      filename: 'listingimage',
      url: 'https://images.unsplash.com/photo-1615571022219-eb45cf7faa9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    price: 1800,
    location: 'Costa Rica',
    country: 'Costa Rica',
    geometry: {
      type: 'Point',
      coordinates: [ -84.2009147613538, 10.2577944410312 ]
    }
  },
];


module.exports = { data: sampleListings };