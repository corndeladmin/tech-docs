export const sql = [
  {
    text: 'Introduction to SQL',
    link: '/sql/'
  },
  {
    text: 'Installation',
    collapsed: true,
    items: [
      { text: 'Linux', link: '/sql/installation-linux' },
      { text: 'Mac', link: '/sql/installation-mac' },
      { text: 'Windows', link: '/sql/installation-windows' }
    ]
  },
  {
    text: 'Reading data',
    items: [
      {
        text: 'Select queries',
        link: '/sql/select-queries'
      },
      {
        text: 'Selecting with conditions',
        link: '/sql/selecting-with-conditions'
      },
      {
        text: 'Ordering results',
        link: '/sql/ordering-results'
      },
      {
        text: 'Paginating results',
        link: '/sql/limit-offset'
      }
    ]
  },
  {
    text: 'Advanced queries',
    items: [
      {
        text: 'Inner joins',
        link: '/sql/inner-joins'
      },
      {
        text: 'Aggregate queries',
        link: '/sql/aggregate-queries'
      },
      {
        text: 'Grouped aggregates',
        link: '/sql/grouped-aggregates'
      },
      {
        text: 'Many-to-many relationships',
        link: '/sql/many-to-many'
      }
    ]
  },
  {
    text: 'Modifying the database',
    items: [
      {
        text: 'Writing data',
        link: '/sql/writing-data'
      },
      {
        text: 'Creating tables',
        link: '/sql/creating-tables'
      }
    ]
  }
]
