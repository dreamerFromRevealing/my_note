import {DATAType} from "../src/types/types_data_from_server/dataType";

export const DATA: DATAType[] = [
  {
    id: '1',
    label: 'Food',
    children: [
      {
        id: '2',
        label: 'Meat',
      },
      {
        id: '3',
        label: 'Salad',
        children: [
          {
            id: '4',
            label: 'Tomatoes',
          },
          {
            id: '5',
            label: 'Cabbage',
          },
          {
            id: '32',
            label: 'Salad',
            children: [
              {
                id: '42',
                label: 'Tomatoes',
              },
              {
                id: '52',
                label: 'Cabbage',
              },

            ],
          },
        ],
      },
    ],
  },
  {
    id: '6',
    label: 'Drinks',
    children: [
      {
        id: '7',
        label: 'Beer',
        children: [
        ]
      },
      {
        id: '8',
        label: 'Soft drink',
      },
    ],
  },
];