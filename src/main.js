import { Loader } from "./loader.js";
import { Post } from "./post.js";
import { SERVER_URL, PATH_POSTS } from "./const.js";

const loader = new Loader(`${SERVER_URL}/${PATH_POSTS}`);

const container = document.querySelector('.container');
const template = document.querySelector('#cell');

const posts = await loader.getPosts();

posts.forEach((post) => {
  const postElement = new Post(template);
  container.appendChild(postElement.fillElement(post));
});
