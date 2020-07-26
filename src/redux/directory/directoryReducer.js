const INITIAL_STATE = {
  sections: [
    {
      title: 'beverages',
      imageUrl: 'https://ohsodelicioso.com/wp-content/uploads/2014/09/Snickerdoodleproteinshake-4.jpg',
      id: 1,
      linkUrl: 'shop/beverages'
    },
    {
      title: 'snacks',
      imageUrl: 'https://realsimplegood.com/wp-content/uploads/Paleo-spiced-nuts-two.jpg',
      id: 3,
      linkUrl: 'shop/snacks'
    },
    {
      title: 'supplements',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSj0NEf46RJJVoDOgbPCgHHRbi4RhPbG_zQsUBNEJgeJfv-1ANQ&usqp=CAU',
      id: 2,
      linkUrl: 'shop/supplements'
    },
    {
      title: 'meals',
      imageUrl: 'https://www.happyveggiekitchen.com/wp-content/uploads/2020/04/Halloumi-Black-Bean-Salad-6.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/meals'
    },
    {
      title: 'pastries',
      imageUrl: 'https://lowcarbyum.com/wp-content/uploads/2012/08/low-carb-zucchini-bread-l.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/pastries'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
