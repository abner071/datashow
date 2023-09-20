import { Router } from "express";

const churchRoutes = Router();

churchRoutes.post('/', (request, response) => {
  const {
    name,
    address,
    address_number,
    district,
    city,
    state,
    logo
  } = request.body;
});

churchRoutes.get('/', (request, response) => {
  return response.send('teste')
})

export { churchRoutes };
