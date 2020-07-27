import React, {Component} from "react";
import {connect} from "react-redux";

import {HomeWrapper, HomeLeft, HomeRight, BackTop} from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBackTop: false
    }
  }

  handleBack = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  handleScroll = () => {
    const top = document.documentElement.scrollTop;
    if (top < 400) {
      return this.setState({showBackTop: false});
    }
    return this.setState({showBackTop: true});
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
        <HomeWrapper>
          <HomeLeft>
            <img className="banner-img" alt="img"
                 src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
            <Topic/>
            <List/>
          </HomeLeft>
          <HomeRight>
            <Recommend/>
            <Writer/>
          </HomeRight>
          {this.state.showBackTop ? <BackTop onClick={this.handleBack}>Top</BackTop> : null}
        </HomeWrapper>
    );
  }
}

export default connect()(Home);