import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Loading from './Loading';
import NotFoundPage from './NotFoundPage';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  useEffect(()=>{
    updateFun();
    document.title=`${capitalizeWord(props.category)} - NewsMonkey`;
  },[]);
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,setTotalResults]=useState(0);

  const capitalizeWord = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }
  const updateFun = async () => {
    props.setProgress(10);
    setLoading(true);
    
    // const url = `https://newsapi.org/v2/top-headlines?county=${props.country}&category=${props.category}&language=en${(k)?('&q=' + k):''}&apiKey=7acc4aca25b7480383f02e9914466c21&page=${state.page}&pageSize=${props.pageSize}`;  // vedant's key
    // const url = `https://newsapi.org/v2/top-headlines?${(k)?('&q=' + k):'county='+props.country+'&category='+props.category+'&language=en'}&apiKey=8fb8a44a7e8f49ca900eaab042516958&page=${state.page}&pageSize=${props.pageSize}`;  // varun's key
    const k=decodeURI(props.apiKey);
    const url = `https://newsapi.org/v2/top-headlines?county=${props.country}&category=${props.category}&language=en&apiKey=${k}&page=${page}&pageSize=${props.pageSize}`;
    console.log(props.apiKey);
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(70);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  const sleep=(ms)=>{
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const fetchMoreData=async ()=>{
    // const url = `https://newsapi.org/v2/top-headlines?county=${props.country}&category=${props.category}&language=en${(k)?('&q=' + k):''}&apiKey=7acc4aca25b7480383f02e9914466c21&page=${state.page}&pageSize=${props.pageSize}`;  // vedant's key
    // const url = `https://newsapi.org/v2/top-headlines?${(k)?('&q=' + k):'county='+props.country+'&category='+props.category+'&language=en'}&apiKey=8fb8a44a7e8f49ca900eaab042516958&page=${state.page}&pageSize=${props.pageSize}`;  // varun's key
    const url = `https://newsapi.org/v2/top-headlines?county=${props.country}&category=${props.category}&language=en&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    await setPage(page+1);
    setLoading(true);
    const data = await fetch(url);
    const parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  }
    return (
      <div className='container'>
        <h1 className='container text-center'>News-Monkey - Top headlines</h1>
        {loading && <Loading/>}
        {!(loading) && !(articles && articles.length) && <NotFoundPage/>}
        {/* <NotFoundPage/> */}
        <div className="container-fluid">
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length<totalResults}
            loader={<Loading />}
          >
          <div className="container-fluid row my-3">
            {articles && articles.map((element,index) => {
              return (
                <div className="col-sm-4 my-2" key={(element.url + index)}>
                  <NewsItem title={element.title} description={element.description} imageUrl={(element.urlToImage || 'https://static.vecteezy.com/system/resources/previews/001/226/460/original/breaking-news-tv-background-vector.jpg')} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} category={props.category}></NewsItem>
                </div>
              );
            })}
            </div>
          </InfiniteScroll>
        </div>
        {/* <div className="d-flex justify-content-between my-3">
          <button type='button' disabled={state.page<=1} onClick={handlePrevClk} className="btn btn-dark">&larr; Previous</button>
          <button type='button' disabled={state.page+1>Math.ceil(state.totalResults/props.pageSize)} onClick={handleNextClk} className="btn btn-dark">Next &rarr;</button>
        </div> */}
      </div>
    )
  
}

News.defaultProps={
  country: 'in',
  pageSize: 6,
  category: 'general'
}
News.propTypes={
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}

export default News;
