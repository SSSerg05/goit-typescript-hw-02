/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {
  }
}

interface myPage {
  title: string;
}

class Page extends Component<myPage> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};