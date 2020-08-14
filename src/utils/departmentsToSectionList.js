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
    data: department.categories.split(',')
  }
}

export const shoesBagsToCollection = (shoesBags) => {
  return {
    key: 'SHOES&BAGS',
    title: 'SHOES&BAGS',
    data: shoesBags.subCategory.split(',')
  }
}