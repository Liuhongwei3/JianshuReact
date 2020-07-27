import React, {PureComponent} from 'react'
import {connect} from 'react-redux';
import {Link} from "react-router-dom";
import {WriterWrapper, WriterItem} from '../style';
import {getWriters} from "../action";

class Writer extends PureComponent {

  componentDidMount = () => {
    this.props.getWriterList();
  }

  render() {
    const list = this.props.writerList.toJS();

    return (
        <WriterWrapper>
          <span className="writer-title">推荐作者</span>
          {
            list.map((item) => {
              return (
                  <Link to="/" key={item.id}>
                    <WriterItem>
                      <img className='img' src={item.avatar_source} alt='icon'/>
                      <div className="writer-right">
                        <span className='watch'>+ 关注</span>
                        <p className='name'>{item.nickname}</p>
                        <p className='info'>写了{item.total_wordage}字，有{item.total_likes_count}人喜欢</p>
                      </div>
                    </WriterItem>
                  </Link>
              )
            })
          }
        </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  writerList: state.home.get('writerList')
})

const mapDispatchToProps = (dispatch) => ({
  getWriterList() {
    dispatch(getWriters())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Writer);