import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {TopicWrapper, TopicItem,TopicMore} from "../style";
import {getTopic} from "../action";

class Topic extends Component {
  componentDidMount() {
    this.props.getTopicList();
  }

  getTopicItem = () => {
    const list = this.props.topicList.toJS();
    if (list.length) {
      return list.map(item => (
          <TopicItem key={item.title}>
            <img className="topic-pic" alt={item.title} src={item.imgUrl}/>
            {item.title}
          </TopicItem>
      ));
    }
    return null;
  };

  render() {
    return <TopicWrapper>
      {this.getTopicItem()}
      <Link to='/'>
        <TopicMore>更多热门专题 &gt;</TopicMore>
      </Link>
    </TopicWrapper>;
  }
}

const mapStateToProps = (state) => ({
  topicList: state.home.get('topicList')
})

const mapDispatchToProps = (dispatch) => ({
  getTopicList() {
    dispatch(getTopic())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Topic);