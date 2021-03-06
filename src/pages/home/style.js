import styled from "styled-components";

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  margin-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 240px;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
`;
export const TopicItem = styled.div`
  float: left;
  background: red;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  background: #f7f7f7;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic {
    width: 32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`;

export const TopicMore = styled.div`
  text-decoration: none;
  display: inline-block;
  line-height: 32px;
  font-size: 14px;
  color: #787878;
  margin-left: 18px;
`;


export const ListItem = styled.div`
	overflow: hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
	.pic {
		display: block;
		width: 125px;
		height: 100px;
		float: right;
		border-radius: 10px;
	}
`;

export const ListInfo = styled.div`
	width: 500px;
	float: left;
	.title {
		line-height: 27px;
		font-size: 18px;
		font-weight: bold;
		color: #333;
	}
	.desc {
		line-height: 24px;
		font-size: 13px;
		color: #999;
	}
`;

export const RecommendWrapper = styled.div`
	margin: 30px 0;
`;

export const RecommendItem = styled.div`
	width: 100%;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
	background: url(${(props) => props.imgUrl});
	background-size: contain;
`;

export const WriterWrapper = styled.div`
  width: 280px;
  .writer-title{
    font-size: 14px;
    color: #969696;
  }
`;

export const WriterItem = styled.div`
  overflow: hidden;
  margin: 15px 0;
  .img {
    width: 48px;
    height: 48px;
    margin-right: 10px;
    border-radius: 50%;
    float: left;
  }
  .writer-right{
    float: left;
  }
  .name {
    font-size: 14px;
    color: #333;
    margin: 0;
  }
  .info {
    font-size: 12px;
    color: #969696;
  }
  .watch {
    float: right;
    font-size: 13px;
    color: #42c02e;
  }
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
  &:hover{
    background-color: #9b9b9b;
  }
`;

export const BackTop = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  border: 1px solid #333;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: #333;
  }
`;