export const cocktails = [
  {
    id: 1,
    name: 'Mojito',
    rating: 5,
    difficulty: 'Fácil',
    description: 'Cóctel refrescante preparado con ron blanco, limón, hierbabuena, azúcar y soda.',
    ingredients: [
      { name: 'Ron blanco', amount: 50, measure: 'ml' },
      { name: 'Jugo de limón', amount: 30, measure: 'ml' },
      { name: 'Azúcar', amount: 2, measure: 'cdtas' },
      { name: 'Hierbabuena', amount: 8, measure: 'otro' },
      { name: 'Soda', amount: 60, measure: 'ml' },
      { name: 'Hielo', amount: 6, measure: 'cubos' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: true, label: 'Moledor' },
      shaker: { value: false, label: 'Vaso coctelero' }
    }
  },
  {
    id: 2,
    name: 'Piña Colada',
    rating: 4,
    difficulty: 'Fácil',
    description: 'Cóctel tropical y cremoso elaborado con ron, piña y crema de coco.',
    ingredients: [
      { name: 'Ron blanco', amount: 50, measure: 'ml' },
      { name: 'Jugo de piña', amount: 100, measure: 'ml' },
      { name: 'Crema de coco', amount: 50, measure: 'ml' },
      { name: 'Hielo', amount: 8, measure: 'cubos' }
    ],
    materials: {
      blender: { value: true, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: false, label: 'Vaso coctelero' }
    }
  },
  {
    id: 3,
    name: 'Margarita',
    rating: 5,
    difficulty: 'Media',
    description: 'Clásico mexicano preparado con tequila, limón y triple sec.',
    ingredients: [
      { name: 'Tequila', amount: 50, measure: 'ml' },
      { name: 'Triple sec', amount: 25, measure: 'ml' },
      { name: 'Jugo de limón', amount: 25, measure: 'ml' },
      { name: 'Sal', amount: 1, measure: 'cda' },
      { name: 'Hielo', amount: 6, measure: 'cubos' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: true, label: 'Vaso coctelero' }
    }
  },
  {
    id: 4,
    name: 'Daiquiri',
    rating: 4,
    difficulty: 'Fácil',
    description: 'Cóctel sencillo y refrescante que combina ron blanco, limón y azúcar.',
    ingredients: [
      { name: 'Ron blanco', amount: 60, measure: 'ml' },
      { name: 'Jugo de limón', amount: 30, measure: 'ml' },
      { name: 'Azúcar', amount: 2, measure: 'cdtas' },
      { name: 'Hielo', amount: 6, measure: 'cubos' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: true, label: 'Vaso coctelero' }
    }
  },
  {
    id: 5,
    name: 'Negroni',
    rating: 4,
    difficulty: 'Media',
    description: 'Cóctel italiano de sabor intenso preparado con gin, vermut rojo y Campari.',
    ingredients: [
      { name: 'Gin', amount: 30, measure: 'ml' },
      { name: 'Vermut rojo', amount: 30, measure: 'ml' },
      { name: 'Campari', amount: 30, measure: 'ml' },
      { name: 'Hielo', amount: 5, measure: 'cubos' },
      { name: 'Cáscara de naranja', amount: 1, measure: 'otro' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: false, label: 'Vaso coctelero' }
    }
  },
  {
    id: 6,
    name: 'Old Fashioned',
    rating: 5,
    difficulty: 'Media',
    description: 'Cóctel clásico elaborado con whisky, azúcar, bitters y un toque de naranja.',
    ingredients: [
      { name: 'Whisky', amount: 60, measure: 'ml' },
      { name: 'Azúcar', amount: 1, measure: 'cda' },
      { name: 'Angostura bitters', amount: 3, measure: 'cdtas' },
      { name: 'Agua', amount: 10, measure: 'ml' },
      { name: 'Hielo', amount: 3, measure: 'cubos' },
      { name: 'Cáscara de naranja', amount: 1, measure: 'otro' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: false, label: 'Vaso coctelero' }
    }
  },
  {
    id: 7,
    name: 'Moscow Mule',
    rating: 3,
    difficulty: 'Fácil',
    description: 'Cóctel refrescante de vodka, ginger beer y limón servido tradicionalmente en una taza de cobre.',
    ingredients: [
      { name: 'Vodka', amount: 50, measure: 'ml' },
      { name: 'Jugo de limón', amount: 20, measure: 'ml' },
      { name: 'Ginger beer', amount: 100, measure: 'ml' },
      { name: 'Hielo', amount: 6, measure: 'cubos' },
      { name: 'Rodaja de limón', amount: 1, measure: 'otro' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: false, label: 'Vaso coctelero' }
    }
  },
  {
    id: 8,
    name: 'Cosmopolitan',
    rating: 4,
    difficulty: 'Media',
    description: 'Cóctel elegante preparado con vodka, triple sec, jugo de arándanos y limón.',
    ingredients: [
      { name: 'Vodka', amount: 40, measure: 'ml' },
      { name: 'Triple sec', amount: 20, measure: 'ml' },
      { name: 'Jugo de arándanos', amount: 30, measure: 'ml' },
      { name: 'Jugo de limón', amount: 15, measure: 'ml' },
      { name: 'Hielo', amount: 6, measure: 'cubos' },
      { name: 'Cáscara de naranja', amount: 1, measure: 'otro' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: true, label: 'Vaso coctelero' }
    }
  },
  {
    id: 9,
    name: 'Tequila Sunrise',
    rating: 3,
    difficulty: 'Fácil',
    description: 'Cóctel colorido de tequila, jugo de naranja y granadina con un aspecto de amanecer.',
    ingredients: [
      { name: 'Tequila', amount: 50, measure: 'ml' },
      { name: 'Jugo de naranja', amount: 100, measure: 'ml' },
      { name: 'Granadina', amount: 15, measure: 'ml' },
      { name: 'Hielo', amount: 6, measure: 'cubos' },
      { name: 'Rodaja de naranja', amount: 1, measure: 'otro' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: false, label: 'Vaso coctelero' }
    }
  },
  {
    id: 10,
    name: 'Long Island',
    rating: 5,
    difficulty: 'Difícil',
    description: 'Cóctel potente que combina vodka, ron, tequila, gin, triple sec, limón y cola.',
    ingredients: [
      { name: 'Vodka', amount: 15, measure: 'ml' },
      { name: 'Ron blanco', amount: 15, measure: 'ml' },
      { name: 'Tequila', amount: 15, measure: 'ml' },
      { name: 'Gin', amount: 15, measure: 'ml' },
      { name: 'Triple sec', amount: 15, measure: 'ml' },
      { name: 'Jugo de limón', amount: 25, measure: 'ml' },
      { name: 'Cola', amount: 30, measure: 'ml' },
      { name: 'Hielo', amount: 6, measure: 'cubos' }
    ],
    materials: {
      blender: { value: false, label: 'Licuadora' },
      grinding: { value: false, label: 'Moledor' },
      shaker: { value: true, label: 'Vaso coctelero' }
    }
  }
];

export const difficultyOrder = {
  'Fácil': 1,
  'Media': 2,
  'Difícil': 3
}
