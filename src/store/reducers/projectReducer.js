const initState = {
  projects: [
    { id: '1', title: 'Dummy Data 1', content: 'Dummay 1' },
    { id: '2', title: 'Dummy Data 2', content: 'Dummay 2' },
    { id: '3', title: 'Dummy Data 3', content: 'Dummay 3' },
    { id: '4', title: 'Dummy Data 4', content: 'Dummay 4' },
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer