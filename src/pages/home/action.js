import axios from 'axios';

const topicAction = (data) => ({
  type: "get_topic",
  value: data
})

const articleAction = (data) => ({
  type: "get_article",
  value: data
})

const recommendAction = (data) => ({
  type: "get_recommend",
  value: data
})

const writerAction = (data) => ({
  type: "get_writer",
  value: data
})

const loadAction = (data) => ({
  type: "load_more",
  value: data
})

export const getTopic = () => {
  return (dispatch) => {
    axios.get('./api/topics.json')
        .then((res) => {
          const {data: {data}} = res;
          dispatch(topicAction(data));
        })
        .catch((err) => console.log(err))
  }
}

export const getArticles = () => {
  return (dispatch) => {
    axios.get('./api/articles.json')
        .then((res) => {
          const {data: {data}} = res;
          dispatch(articleAction(data));
        })
        .catch((err) => console.log(err))
  }
}

export const getRecommends = () => {
  return (dispatch) => {
    axios.get('./api/recommends.json')
        .then((res) => {
          const {data: {data}} = res;
          dispatch(recommendAction(data));
        })
        .catch((err) => console.log(err))
  }
}

export const getWriters = () => {
  return (dispatch) => {
    axios.get('./api/writers.json')
        .then((res) => {
          const {data: {data}} = res;
          dispatch(writerAction(data));
        })
        .catch((err) => console.log(err))
  }
}

export const loadMore = () => {
  return (dispatch) => {
    axios.get('./api/articles.json')
        .then((res) => {
          const {data: {data}} = res;
          dispatch(loadAction(data));
        })
        .catch((err) => console.log(err))
  }
}