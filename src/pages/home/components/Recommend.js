import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {RecommendWrapper, RecommendItem} from '../style';
import {getRecommends} from "../action";

class Recommend extends PureComponent {
  componentDidMount = () => {
    this.props.getRecommendList();
  }

  render() {
    const list = this.props.recommendList.toJS();

    return (
        <RecommendWrapper>
          {
            list.map((item) => {
              return (
                  <Link to="/" key={item.id}>
                    <RecommendItem imgUrl={item.imgUrl}/>
                  </Link>
              )
            })
          }
        </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList: state.home.get('recommendList')
})

const mapDispatchToProps = (dispatch) => ({
  getRecommendList() {
    dispatch(getRecommends())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommend);