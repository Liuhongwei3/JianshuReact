import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from "react-redux";
import {
  HeaderStyle, Logo, Nav, NavItem,
  NavSearch, Addtion, Button, SearchWrapper, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
  SearchInfoList
} from "./style";
import {getList, searchBlur, searchFocus, onMouseEnter, onMouseLeave, changePage} from "./action";

const Header = props => {
  const {
    focused, list, handleInputFocus, handleInputBlur, page, totalPage, onMouseEnter,
    onMouseLeave, mouseEnter, getPageList
  } = props;
  //  此时 list 为 immutable 我们不能直接操作，所以需要转换成原生 JS 即可通过属性方式访问
  const newList = list.toJS();
  const pageList = [];
  //  第一次 list 为 []
  if (newList.length) {
    for (let i = (page - 1) * 10; i < page * 10; i++) {
      newList[i] && pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
      );
    }
  }
  let getHotList = show => {
    if (show || mouseEnter) {
      return <SearchInfo onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => getPageList(page, totalPage)}>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          {pageList}
        </SearchInfoList>
      </SearchInfo>
    } else {
      return null;
    }
  }
  return (
      <HeaderStyle>
        <Logo/>
        <Nav>
          <Link to="/">
            <NavItem className="left active">首页</NavItem>
          </Link>
          <a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=navbar-apps">
            <NavItem className="left">下载App</NavItem>
          </a>
          <Link to="/login">
            <NavItem className="right">登录</NavItem>
          </Link>
          <NavItem className="right">Aa</NavItem>
          <SearchWrapper>
            <NavSearch
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
                className={focused ? "focused" : ""}/>
            {getHotList(focused)}
          </SearchWrapper>
        </Nav>
        <Addtion>
          <Button className="reg">注册</Button>
          <Button className="writting">写文章</Button>
        </Addtion>
      </HeaderStyle>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.get("focused"),
    list: state.header.get("list"),
    page: state.header.get("page"),
    totalPage: state.header.get("totalPage"),
    mouseEnter: state.header.get("mouseEnter"),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      //  当我们页面中已经获取到相关数据则保证不会发送冗余请求
      list.size === 0 && dispatch(getList())
      dispatch(searchFocus());
    },
    handleInputBlur() {
      dispatch(searchBlur());
    },
    onMouseEnter() {
      dispatch(onMouseEnter());
    },
    onMouseLeave() {
      dispatch(onMouseLeave());
    },
    getPageList(page, totalPage) {
      page < totalPage
          ? dispatch(changePage(page + 1))
          : dispatch(changePage(1));
    }
  }
}

//  连接到 store
export default connect(mapStateToProps, mapDispatchToProps)(Header);