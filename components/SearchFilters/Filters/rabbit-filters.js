const rabbitFilters = {
  breed: {
    name: 'breed',
    label: 'Breed',
    display: true,
    options: [
      {
        value: 'American',
        label: 'American',
        long_label: 'American',
        facet_value: '574',
        default: false,
      },
      {
        value: 'American Fuzzy Lop',
        label: 'American Fuzzy Lop',
        long_label: 'American Fuzzy Lop',
        facet_value: '575',
        default: false,
      },
      {
        value: 'American Sable',
        label: 'American Sable',
        long_label: 'American Sable',
        facet_value: '576',
        default: false,
      },
      {
        value: 'Angora Rabbit',
        label: 'Angora Rabbit',
        long_label: 'Angora Rabbit',
        facet_value: '577',
        default: false,
      },
      {
        value: 'Belgian Hare',
        label: 'Belgian Hare',
        long_label: 'Belgian Hare',
        facet_value: '578',
        default: false,
      },
      {
        value: 'Beveren',
        label: 'Beveren',
        long_label: 'Beveren',
        facet_value: '579',
        default: false,
      },
      {
        value: 'Britannia Petite',
        label: 'Britannia Petite',
        long_label: 'Britannia Petite',
        facet_value: '580',
        default: false,
      },
      {
        value: 'Bunny Rabbit',
        label: 'Bunny Rabbit',
        long_label: 'Bunny Rabbit',
        facet_value: '581',
        default: false,
      },
      {
        value: 'Californian',
        label: 'Californian',
        long_label: 'Californian',
        facet_value: '582',
        default: false,
      },
      {
        value: "Champagne D'Argent",
        label: "Champagne D'Argent",
        long_label: "Champagne D'Argent",
        facet_value: '583',
        default: false,
      },
      {
        value: 'Checkered Giant',
        label: 'Checkered Giant',
        long_label: 'Checkered Giant',
        facet_value: '584',
        default: false,
      },
      {
        value: 'Chinchilla',
        label: 'Chinchilla',
        long_label: 'Chinchilla',
        facet_value: '585',
        default: false,
      },
      {
        value: 'Cinnamon',
        label: 'Cinnamon',
        long_label: 'Cinnamon',
        facet_value: '586',
        default: false,
      },
      {
        value: "Creme D'Argent",
        label: "Creme D'Argent",
        long_label: "Creme D'Argent",
        facet_value: '587',
        default: false,
      },
      {
        value: 'Dutch',
        label: 'Dutch',
        long_label: 'Dutch',
        facet_value: '588',
        default: false,
      },
      {
        value: 'Dwarf',
        label: 'Dwarf',
        long_label: 'Dwarf',
        facet_value: '589',
        default: false,
      },
      {
        value: 'Dwarf Eared',
        label: 'Dwarf Eared',
        long_label: 'Dwarf Eared',
        facet_value: '590',
        default: false,
      },
      {
        value: 'English Lop',
        label: 'English Lop',
        long_label: 'English Lop',
        facet_value: '591',
        default: false,
      },
      {
        value: 'English Spot',
        label: 'English Spot',
        long_label: 'English Spot',
        facet_value: '592',
        default: false,
      },
      {
        value: 'Flemish Giant',
        label: 'Flemish Giant',
        long_label: 'Flemish Giant',
        facet_value: '593',
        default: false,
      },
      {
        value: 'Florida White',
        label: 'Florida White',
        long_label: 'Florida White',
        facet_value: '594',
        default: false,
      },
      {
        value: 'French Lop',
        label: 'French Lop',
        long_label: 'French Lop',
        facet_value: '595',
        default: false,
      },
      {
        value: 'Harlequin',
        label: 'Harlequin',
        long_label: 'Harlequin',
        facet_value: '596',
        default: false,
      },
      {
        value: 'Havana',
        label: 'Havana',
        long_label: 'Havana',
        facet_value: '597',
        default: false,
      },
      {
        value: 'Himalayan',
        label: 'Himalayan',
        long_label: 'Himalayan',
        facet_value: '598',
        default: false,
      },
      {
        value: 'Holland Lop',
        label: 'Holland Lop',
        long_label: 'Holland Lop',
        facet_value: '599',
        default: false,
      },
      {
        value: 'Hotot',
        label: 'Hotot',
        long_label: 'Hotot',
        facet_value: '600',
        default: false,
      },
      {
        value: 'Jersey Wooly',
        label: 'Jersey Wooly',
        long_label: 'Jersey Wooly',
        facet_value: '601',
        default: false,
      },
      {
        value: 'Lilac',
        label: 'Lilac',
        long_label: 'Lilac',
        facet_value: '602',
        default: false,
      },
      {
        value: 'Lionhead',
        label: 'Lionhead',
        long_label: 'Lionhead',
        facet_value: '603',
        default: false,
      },
      {
        value: 'Lop Eared',
        label: 'Lop Eared',
        long_label: 'Lop Eared',
        facet_value: '604',
        default: false,
      },
      {
        value: 'Mini Lop',
        label: 'Mini Lop',
        long_label: 'Mini Lop',
        facet_value: '606',
        default: false,
      },
      {
        value: 'Mini Rex',
        label: 'Mini Rex',
        long_label: 'Mini Rex',
        facet_value: '605',
        default: false,
      },
      {
        value: 'Netherland Dwarf',
        label: 'Netherland Dwarf',
        long_label: 'Netherland Dwarf',
        facet_value: '607',
        default: false,
      },
      {
        value: 'New Zealand',
        label: 'New Zealand',
        long_label: 'New Zealand',
        facet_value: '608',
        default: false,
      },
      {
        value: 'Palomino',
        label: 'Palomino',
        long_label: 'Palomino',
        facet_value: '609',
        default: false,
      },
      {
        value: 'Polish',
        label: 'Polish',
        long_label: 'Polish',
        facet_value: '610',
        default: false,
      },
      {
        value: 'Rex',
        label: 'Rex',
        long_label: 'Rex',
        facet_value: '611',
        default: false,
      },
      {
        value: 'Rhinelander',
        label: 'Rhinelander',
        long_label: 'Rhinelander',
        facet_value: '612',
        default: false,
      },
      {
        value: 'Satin',
        label: 'Satin',
        long_label: 'Satin',
        facet_value: '613',
        default: false,
      },
      {
        value: 'Silver',
        label: 'Silver',
        long_label: 'Silver',
        facet_value: '614',
        default: false,
      },
      {
        value: 'Silver Fox',
        label: 'Silver Fox',
        long_label: 'Silver Fox',
        facet_value: '615',
        default: false,
      },
      {
        value: 'Silver Marten',
        label: 'Silver Marten',
        long_label: 'Silver Marten',
        facet_value: '616',
        default: false,
      },
      {
        value: 'Tan',
        label: 'Tan',
        long_label: 'Tan',
        facet_value: '617',
        default: false,
      },
    ],
  },
};

export default rabbitFilters;