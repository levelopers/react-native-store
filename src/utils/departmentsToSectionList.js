export const departmentsToSectionList = (departments) => {
  const result = []
  for (const department of departments) {
    result.push({
      title: department.departmentName,
      data: department.categories.split(',')
    })
  }
  return result;
}

export const departmentToCollection = (department) => {
  return {
    key: 'COLLECTION',
    title: 'COLLECTION',
    data: department
      ? department.categories.split(',').filter(c => !['Shoes', 'Bags'].includes(c))
      : []
  }
}

export const shoesBagsToCollection = (department) => {
  const data = department
    ? department.categories.split(',').filter(c => ['Shoes', 'Bags'].includes(c))
    : []
  return {
    key: 'SHOES&BAGS',
    title: data.length > 0 ? 'SHOES&BAGS' : '',
    data
  }
}