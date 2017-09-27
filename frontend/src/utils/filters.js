const filterArray = (list,searchValue) => {
  searchValue = searchValue.toLowerCase();
  return list.filter(item => {
    return(
      item.city.toLowerCase().search(searchValue) !== -1 ||
      item.title.toLowerCase().search(searchValue) !== -1
    );
  });
};

export { filterArray };
