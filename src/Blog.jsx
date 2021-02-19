import React from 'react';
import Article from './Article';
import * as FooBar from './components/FooBar';
import Hoge from './components/Hoge';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    // ボタンがクリックされたらいいねをカウントアップする
    document.getElementById('counter').addEventListener('click', () => this.countUP());
  }

  componentDidUpdate() {
    if (this.state.count >= 10 ) {
      this.setState ({ count: 0 })
    }
  }

  componentWillUnmount() {
    document.getElementById('counter').removeEventListener('click', () => this.countUP());
  }

  // 公開状態を反転させる関数
  togglePublished = () => {
    this.setState ( state => {
      return { isPublished: !this.state.isPublished }
    })
  }

  countUP = () => {
    this.setState(state => {
      return { count: this.state.count + 1 }
    })
  }

  render() {
    const authorName = "Torahack"
    return (
      <>
        <Article
          title={'Reactの使い方'}
          isPublished={this.state.isPublished}
          toggle={() => this.togglePublished()}
          count={this.state.count}
        />
        <FooBar.Foo />
        <FooBar.Bar />
        <Hoge />
      </>
    )
  }
}

export default Blog
