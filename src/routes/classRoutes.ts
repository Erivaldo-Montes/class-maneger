import { Router } from "express";
import { getRepository, getCustomRepository } from "typeorm"
import { Class } from "../models/class"
import ClassRepository from "../repositories/classRepository"

const classRoutes = Router()

classRoutes.post('/', async (request, response) => {
  const repo = await getRepository(Class)

  const { name, duration } = request.body;

  const classInfo = repo.create({ name, duration })

  const respos = await repo.save(classInfo)

  return response.status(201).json(classInfo);
})

classRoutes.get('/', async (request, response) => {
  const list = await getRepository(Class)

  return response.json(await list.find())
})

classRoutes.get("/:name", async (request, response) => {

  const { name } = request.params

  const repository = getCustomRepository(ClassRepository)

  const res = await repository.findByName(name)

  return response.json(res)

})

export { classRoutes }