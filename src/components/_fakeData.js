
export const _products = [{
  _id: "5bedf31cc14d7822b39d9d43",
  imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/7568/644/802/2/w/1920/7568644802_1_1_1.jpg?ts=1541152091085',
  title: 'Oversized Textured Top',
  description: 'High collar top with short cuffed sleeves. Asymmetric hem with side slits.',
  price: 35.95,
  color: 'Gray',
  size: 'XS,S,M',
  quantity: 10,
  department: 'Women',
  category: 'Basics',
},
{
  _id: "5bedf3b9c14d7822b39d9d45",
  imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/5644/641/800/2/w/1920/5644641800_2_5_1.jpg?ts=1540395699528',
  title: 'Tank Top',
  description: 'Flowy V-neck camisole with spaghetti straps.',
  price: 29.99,
  color: 'Black',
  size: 'XS,S,XL',
  quantity: 15,
  department: 'Women',
  category: 'Basics',
},
{
  _id: "5bedf448c14d7822b39d9d47",
  imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/7568/469/251/2/w/1920/7568469251_2_1_1.jpg?ts=1540393989160',
  title: 'Basic Top',
  description: 'Round neck long sleeved shirt. ',
  price: 25.99,
  color: 'White',
  size: 'XS',
  quantity: 90,
  department: 'Women',
  category: 'Basics',
},
{
  _id: "5bedf55bc14d7822b39d9d4b",
  imagePath: 'https://static.zara.net/photos///2018/I/0/1/p/8197/757/093/4/w/1920/8197757093_2_2_1.jpg?ts=1538393944729',
  title: 'Belted Plaid Blazer',
  description: 'Flowy blazer with lapel collar and long sleeves. Self belt. Chest patch pockets and welt pockets at hip. Front double-breasted button closure.',
  price: 79.99,
  color: 'Black',
  size: 'S,M,L',
  quantity: 4,
  department: 'Women',
  category: 'Blazer',
},
{
  _id: "5bedf5eec14d7822b39d9d4e",
  imagePath: 'https://static.zara.net/photos///2018/I/0/2/p/1775/300/615/2/w/1920/1775300615_1_1_1.jpg?ts=1539690384503',
  title: 'Perl Knit Swear',
  description: 'Purl-stitch knit sweater in a combination of textures. Ribbed trim.',
  price: 79.99,
  color: 'Orange',
  size: 'M,L',
  quantity: 5,
  department: 'Men',
  category: 'Knitwear',
},
{
  _id: "5bedf6b5c14d7822b39d9d51",
  imagePath: 'https://static.zara.net/photos///2018/I/0/2/p/6186/352/407/2/w/1920/6186352407_2_1_1.jpg?ts=1540990017618',
  title: 'Ripped Jeans',
  description: 'Slim fit jeans with five pockets, washed effect, and rips on the legs. Zippered hem at in-seams. Front zip and metal button closure.',
  price: 79.99,
  color: 'Dark Blue',
  size: 'M,L',
  quantity: 80,
  department: 'Men',
  category: 'Jeans',
}
]

export const departments = [
  {
    departmentName: 'Women',
    categories: 'Basics,Blazer,Jackets,Dresses,T-shirt,Pants,Jeans,Shorts,Skirts,Suits'
  },
  {
    departmentName: 'Men',
    categories: 'Knitwear,Jeans,Jackets,Overshirts,Polo Shirts,Blazers,Hoodies'
  },
  {//TODO add data
    departmentName: 'Kids',
    categories: 'T-shirts,Basics,Jackets'
  }
]

export const MenDepartment = {
  departmentName: 'Men',
  categories: 'Knitwear,Jeans,Jackets,Overshirts,Polo Shirts,Blazers,Hoodies,Pants,Knitwear,Jeans,Jackets,Overshirts,Polo Shirts,Blazers,Hoodies,Pants'
}

export const WomenDepartment = {
  departmentName: 'Women',
  categories: 'Basics,Blazer,Jackets,Dresses,T-shirt,Pants,Jeans,Shorts,Skirts,Suits'
}

export const KidsDepartment = {
  departmentName: 'Kids',
  categories: 'T-shirts,Basics,Jackets'
}

export const shoesAndBags={
  categoryName: 'shoesAndBags',
  subCategory: 'shoes,bags'
}