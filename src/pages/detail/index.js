import React, { PureComponent } from 'react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  DetailWrapper,
  DetailHeader,
  DetailAuthor,
  AuthorInfo,
  DetailContent
} from './style';
import {getDetail} from "./action";

class Detail extends PureComponent {
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
    const id = this.props.match.params.id;
    this.props.getDetail(id);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    const detail = this.props.detail;

    return (
        <DetailWrapper>
          <DetailHeader>{detail.title}</DetailHeader>
          <DetailAuthor>
            <img className='avatar' alt='' src='https://upload.jianshu.io/users/upload_avatars/3290028/caece506d652.png?imageMogr2/auto-orient/strip|imageView2/1/w/80/h/80/format/webp'/>
            <AuthorInfo>
              <span className='author'>Xiao呆不糊涂</span>
              <span className='watch'>+关注</span>
              <p className='info'>2018.02.14 14:26:33 字数 4,335 阅读 1,271 评论 2 喜欢 26</p>
            </AuthorInfo>
          </DetailAuthor>
          <DetailContent dangerouslySetInnerHTML={{__html: detail.content}}/>
          {this.state.showBackTop ? <div className="back-top" onClick={this.handleBack}>Top</div> : null}
        </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  detail: state.detail.get('detail')
})

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(getDetail(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));