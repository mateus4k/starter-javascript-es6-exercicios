// A

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
  await delay();
  console.log("1s");

  await delay();
  console.log("2s");

  await delay();
  console.log("3s");
}

umPorSegundo();

// B

import axios from "axios";

async function getUserFromGithub(user) {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);

    console.log(response.data);
  } catch (err) {
    console.warn("Usuário não existe");
  }
}

getUserFromGithub("diego3g");
getUserFromGithub("diego3g124123");

// C

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`);

      console.log(response.data);
    } catch (err) {
      console.warn("Repositório não existe");
    }
  }
}

Github.getRepositories("rocketseat/starter-javascript-es6-exercicios");
Github.getRepositories("rocketseat/dslkvmskv");

// D

const buscaUsuario = async usuario => {
  try {
    const response = await axios.get(`https://api.github.com/users/${usuario}`);

    console.log(response.data);
  } catch (err) {
    console.warn("Usuário não existe");
  }
};

buscaUsuario("diego3g");
