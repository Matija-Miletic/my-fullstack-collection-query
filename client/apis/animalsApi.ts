import request from 'superagent'

const rootUrl = '/api/v1/animals'

export const fetchAllAnimals = () => {
  return request.get(`${rootUrl}`).then((res) => res.body)
}

export const addNewAnimal = (newAnimal: object) => {
  return request
    .post(`${rootUrl}`)
    .send(newAnimal)
    .then((res) => res.body)
}

export const removeAnimalById = (id: number) => {
  return request.delete(`${rootUrl}/${id}`).then((res) => res.body)
}
