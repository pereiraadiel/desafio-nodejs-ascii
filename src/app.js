const express = require("express");
const cors = require("cors");

const { v4: uuid, validate: isUuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  // TODO
  response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  // TODO
  const { title, url, techs } = request.body;
  const repository = {
    id: uuid(),
    title,
    url,
    techs,
    likes: 0,
  };
  repositories.push(repository);
  response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  // TODO
  const id = request.params.id;
  const { url, title, techs } = request.body;
  const repository = repositories.find((rep) => rep.id === id);
  console.log(repository);
  if (repository) {
    repository.url = url;
    repository.title = title;
    repository.techs = techs;

    return response.status(200).json(repository);
  } 
  return response.status(400).send();
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
  const id = request.params.id;
  const repository = repositories.find((rep) => rep.id === id);
  console.log(repository);
  if (repository) {
    repositories.splice(repositories.indexOf(repository), 1);
    return response.status(204).send();
  } 
  return response.status(400).send();
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;
