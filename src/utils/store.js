const cards = [
  {
    id: 'card-1',
    title: 'Learning',
  },
  {
    id: 'card-2',
    title: 'Complete ui',
  },
  {
    id: 'card-3',
    title: 'Task 1 ',
  },
]

const data = {
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Todo',
      cards,
    },
  },
  listIds: ['list-1'],
}

export default data
