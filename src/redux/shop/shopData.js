const SHOP_DATA = [
  beverages: {
    id: 1,
    title: 'Beverages',
    routeName: 'beverages',
    items: [
      {
        id: 1,
        name: 'Keto Hot Cocoa',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9ZTNhqjoS0dvt4ieAVwXENlKRPpTFoezWPdZNzOkHPGuxBUSX&usqp=CAU',
        price: 10
      },
      {
        id: 2,
        name: 'Bulletproof Coffee',
        imageUrl: 'https://article.images.consumerreports.org/f_auto/prod/content/dam/CRO-Images-2020/Health/04Apr/CR-Health-Inlinehero-How-to-brew-the-perfect-cup-of-coffee-04-20',
        price: 12
      },
      {
        id: 3,
        name: 'Protein Shake',
        imageUrl: 'https://ohsodelicioso.com/wp-content/uploads/2014/09/Snickerdoodleproteinshake-4.jpg',
        price: 9
        },
      {
        id: 4,
        name: 'Keto Lemonade',
        imageUrl: 'https://images.crateandbarrel.com/is/image/Crate/AltaPitcher84ozSHS16/$web_spill_item_mobile_hires$/190411134739/alta-pitcher.jpg',
        price: 8
      },
      {
        id: 5,
        name: 'Flavored Sparkling Water',
        imageUrl: 'https://images.everydayhealth.com/images/refreshing-alternatives-to-soda-sparkling-water-722x406.jpg',
        price: 6
      }
    ]
  },
  snacks: {
    id: 2,
    title: 'Snacks',
    routeName: 'snacks',
    items: [
      {
        id: 6,
        name: 'Cheese Crisps',
        imageUrl: 'https://atkinsforseizures.com/wp-content/uploads/2019/01/cheese-crisps2.jpg',
        price: 18
      },
      {
        id: 7,
        name: 'Spiced Nut Mix',
        imageUrl: 'https://realsimplegood.com/wp-content/uploads/Paleo-spiced-nuts-two.jpg',
        price: 11
      },
      {
        id: 8,
        name: 'Flaxseed Crackers With Goat Cheese',
        imageUrl: 'https://files.ketodietapp.com/Blog/files/2017/09/CrackersCheeseBoard-5.jpg',
        price: 16
      },
      {
        id: 9,
        name: 'Chocolate Truffle Fat Bomb',
        imageUrl: 'https://forgetsugarfriday.com/wp-content/uploads/2017/10/fat-bombs-recipes.jpg',
        price: 14
      },
      {
        id: 10,
        name: 'Beef Jerky',
        imageUrl: 'https://www.tasteofhome.com/wp-content/uploads/2017/12/shutterstock_712217218_1200x800.jpg',
        price: 9
      }
    ]
  },
  supplements: {
    id: 3,
    title: 'Supplements',
    routeName: 'supplements',
    items: [
      {
        id: 11,
        name: 'Magnesium',
        imageUrl: 'https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/magnesium-supplements-1296x728-feature.jpg?w=1155&h=1528',
        price: 30
      },
      {
        id: 12,
        name: 'Potassium',
        imageUrl: 'https://cdn.healthambition.com/wp-content/uploads/2018/03/Supplement-9.jpg',
        price: 14
      },
      {
        id: 13,
        name: 'Sodium',
        imageUrl: 'https://img.etimg.com/thumb/msid-68795319,width-643,imgsize-539382,resizemode-4/calcium-milk_thinkstockphotos.jpg',
        price: 11
      },
      {
        id: 14,
        name: 'MCT Oil',
        imageUrl: 'https://draxe.com/wp-content/uploads/2015/09/MCT-Oil_HEADER.jpg',
        price: 22
      },
      {
        id: 15,
        name: 'Exogenous Ketones',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj0NEf46RJJVoDOgbPCgHHRbi4RhPbG_zQsUBNEJgeJfv-1ANQ&usqp=CAU',
        price: 35
      }
    ]
  },
  meals: {
    id: 4,
    title: 'Meals',
    routeName: 'meals',
    items: [
      {
        id: 16,
        name: 'Chicken And Cheesy Broccoli',
        imageUrl: 'https://thatlowcarblife.com/wp-content/uploads/2018/08/cheese-stuffed-chicken.jpg',
        price: 22
      },
      {
        id: 17,
        name: 'Halloumi Salad',
        imageUrl: 'https://www.happyveggiekitchen.com/wp-content/uploads/2020/04/Halloumi-Black-Bean-Salad-6.jpg',
        price: 20
      },
      {
        id: 18,
        name: 'Spinach And Artichoke Dip With Tofu Fries',
        imageUrl: 'https://www.thewickednoodle.com/wp-content/uploads/2015/10/Hot-and-Creamy-Spinach-Artichoke-Dip-2-Shitake-Mushrooms-full-e1445437194355.jpg',
        price: 18
      },
      {
        id: 19,
        name: 'Steak And Creamed Spinach',
        imageUrl: 'https://www.fromachefskitchen.com/wp-content/uploads/2017/06/Beef-Tenderloin-Fillets-with-Spinach-Cambozola-Stuffed-Mushrooms-and-Red-Wine-Sauce.jpg',
        price: 25
      },
      {
        id: 20,
        name: 'Pork Chop And Cauliflower With Cheese',
        imageUrl: 'https://i.dietdoctor.com/wp-content/uploads/2017/02/DD-350-2.jpg?auto=compress%2Cformat&w=1200&h=1800&fit=crop',
        price: 24
      }
    ]
  },
  pastries: {
    id: 5,
    title: 'Pastries',
    routeName: 'pastries',
    items: [
      {
        id: 21,
        name: 'Keto Zucchini Bread',
        imageUrl: 'https://lowcarbyum.com/wp-content/uploads/2012/08/low-carb-zucchini-bread-l.jpg',
        price: 8
      },
      {
        id: 22,
        name: 'Keto Chocolate Chip Cookies',
        imageUrl: 'https://www.handletheheat.com/wp-content/uploads/2013/10/Soft-Chocolate-Chip-Cookies-SQUARE-550x550.jpg',
        price: 6
      },
      {
        id: 23,
        name: 'Keto Cheesecake',
        imageUrl: 'https://www.bakingkneads.com/wp-content/uploads/2019/12/Slice-of-Cheesecake.jpg',
        price: 9
      },
      {
        id: 24,
        name: 'Keto Bagels',
        imageUrl: 'https://www.ketoconnect.net/wp-content/uploads/2018/08/keto-bagels-final-500x375.jpg',
        price: 7
      },
      {
        id: 25,
        name: 'Keto Raspberry Danish',
        imageUrl: 'https://www.thirtyhandmadedays.com/wp-content/uploads/2014/09/raspberrycheesedanish2.jpg',
        price: 8
      },
      {
        id: 26,
        name: 'Keto Donuts',
        imageUrl: 'https://kimspireddiy.com/wp-content/uploads/2019/05/keto-copycat-krispy-kreme-donuts-1.jpg',
        price: 5
      }
    ]
  }
];

export default SHOP_DATA;
