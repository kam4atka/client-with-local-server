export class Post {
  constructor(template) {
    this.template = template;
  }

  fillElement(post) {
    const element = this.template.content.cloneNode(true);

    element.querySelector('.cell__title')
      .textContent = post.title;
    element.querySelector('.cell__content')
      .textContent = post.body;

    return element;
  }
}
