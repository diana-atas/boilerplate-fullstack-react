import request from 'superagent'

const serverURL = 'https://v2.jokeapi.dev/'

export function fetchJoke() {
  return request
    .get(
      `${serverURL}/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`
    )
    .then((response) => response.body)
}
