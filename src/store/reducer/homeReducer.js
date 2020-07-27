import {fromJS} from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  articlePage: [],
  recommendList: [],
  writerList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "get_topic":
      return state.set('topicList', fromJS(action.value));

    case "get_article":
      return state.set('articleList', fromJS(action.value));

    case "get_recommend":
      return state.set('recommendList', fromJS(action.value));

    case "get_writer":
      return state.set('writerList', fromJS(action.value));

    case "load_more":
      return state.set('articleList', state.get('articleList').concat(fromJS(action.value)));
    default:
      return state;
  }
}