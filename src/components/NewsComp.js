import React, { Component } from 'react'
import News from './NewsStructure'
import Spinner from './Spinner'
export default class NewsComp extends Component {
  
  // This articles consist of all articles in the form of a array
  //   articles= [
    //     {
      //         "source": {
//             "id": "buzzfeed",
//             "name": "Buzzfeed"
//         },
//         "author": "Allie Hayes",
//         "title": "People Are Sharing The Horror Movie Jump Scares That Actually Got Them, And I Have To Know If They Got You Too",
//         "description": "\"I don't want to spoil it for people that haven't seen it yet (as of writing this, it's still in theaters), but the jump scare about 30 minutes into Barbarian was so terrifying, everyone in the theater screamed at the same time.\"",
//         "url": "https://www.buzzfeed.com/alliehayes/horror-movie-jump-scares-that-got-people-good-flipped",
//         "urlToImage": "https://img.buzzfeed.com/buzzfeed-static/static/2022-10/14/18/enhanced/a78ab4522f04/original-7225-1665771375-4.jpg?crop=1581:830;0,0%26downsize=1250:*",
//         "publishedAt": "2022-10-22T18:22:23.5404272Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "news-com-au",
//             "name": "News.com.au"
//         },
//         "author": "Belinda Palmada",
//         "title": "Star who ‘hates’ Brad Pitt revealed",
//         "description": "<p>Geena Davis has revealed the actor who was frustrated that Brad Pitt was cast opposite her in iconic movie <i>Thelma &amp; Louise</i> instead of him.</p>",
//         "url": "https://www.news.com.au/entertainment/celebrity-life/geena-davis-reveals-star-who-hated-brad-pitt-after-thelma-louise-audition/news-story/da1790fda63c69a519c3a0a2cc72adbb",
//         "urlToImage": "https://content.api.news/v3/images/bin/8b883becfb1993c7ea697efe5b220fe4",
//         "publishedAt": "2022-10-22T07:44:00Z",
//         "content": "Geena Davis has revealed the actor who was frustrated that Brad Pitt was cast opposite her in iconic movie Thelma &amp; Louise instead of him.\r\nThe Oscar-winner starred alongside Susan Sarandon in th… [+2332 chars]"
//     },
//     {
//         "source": {
//             "id": "entertainment-weekly",
//             "name": "Entertainment Weekly"
//         },
//         "author": "Sydney Bucksbaum",
//         "title": "Vanessa Hudgens reveals why she returned to <em>High School Musical</em> set in nostalgic Instagram photo",
//         "description": "Both Hudgens and Zac Efron visited the real life high school all the movies were shot at within a month of each other — now she tells EW how and why that happened.",
//         "url": "https://ew.com/movies/vanessa-hudgens-reveals-story-behind-high-school-musical-instagram-photo/",
//         "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B980%2C226%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F10%2F21%2FHigh-School-Musical-102122.jpg",
//         "publishedAt": "2022-10-22T03:15:01Z",
//         "content": "Are Vanessa Hudgens and Zac Efron all in this together? \r\nBoth High School Musicalalums shared nostalgic Instagram posts within weeks of each other in July, showing them back at the location where al… [+1723 chars]"
//     },
//     {
//         "source": {
//             "id": "engadget",
//             "name": "Engadget"
//         },
//         "author": "https://www.engadget.com/about/editors/steve-dent",
//         "title": "Formovie Theater review: A formidable $3,000 Dolby Vision UST projector | Engadget",
//         "description": "The $3,000 Formovie Theater offers features and image quality not found in any other UST projector even remotely in this price range..",
//         "url": "https://www.engadget.com/formovie-theater-review-ultra-short-throw-dolby-vision-120040276.html",
//         "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/1987ac70-5049-11ed-af7f-f1f120c12265",
//         "publishedAt": "2022-10-21T14:22:22.6156284Z",
//         "content": "On the one hand, Ultra Short Throw (UST) projectors offer a top-notch home theater experience at a fraction the cost of a comparably sized TV. On the other, features like Dolby Vision that you expect… [+10252 chars]"
//     },
//     {
//         "source": {
//             "id": "techradar",
//             "name": "TechRadar"
//         },
//         "author": null,
//         "title": "7 new movies and TV shows on Netflix, Prime Video, HBO Max and more this weekend (October 21)",
//         "description": "Catch The School for Good and Evil, The Peripheral and more",
//         "url": "https://www.techradar.com/news/7-new-movies-and-tv-shows-on-netflix-prime-video-hbo-max-and-more-this-weekend-october-21-2022",
//         "urlToImage": "https://cdn.mos.cms.futurecdn.net/FPQkDbEWY686t9DWPKxFCP-1200-80.jpg",
//         "publishedAt": "2022-10-21T14:00:00Z",
//         "content": "Just a few days after Netflix proved its staying power in the face of recent subscriber woes, the streaming service leads this week’s roundup of new movies and TV shows with three distinct picks. \r\nN… [+5862 chars]"
//     },
//     {
//         "source": {
//             "id": "polygon",
//             "name": "Polygon"
//         },
//         "author": "Toussaint Egan",
//         "title": "When is Nope streaming? Jordan Peele’s movie finally has a date",
//         "description": "Peacock announced on Thursday that Nope will stream exclusively on Peacock (not Netflix or HBO) starting November 18. The sci-fi movie stars Daniel Kaluuya, Keke Palmer, and Steven Yeun.",
//         "url": "https://www.polygon.com/23414916/nope-streaming-date-peacock-november",
//         "urlToImage": "https://cdn.vox-cdn.com/thumbor/xu21ckjqU0W7GYh_QRNYfS3VhxI=/0x113:2435x1388/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23889008/2541_TFP_00355B.jpg",
//         "publishedAt": "2022-10-20T18:12:20Z",
//         "content": "Peacock announced on Thursday that Nope, the latest sci-fi horror movie from Get Out director Jordan Peele, will stream exclusively on the platform on Nov. 18. In addition to the film, the service wi… [+1239 chars]"
//     },
//     {
//         "source": {
//             "id": "the-washington-post",
//             "name": "The Washington Post"
//         },
//         "author": "Sonny Bunch",
//         "title": "Traumatized? Horror like ‘Halloween Ends’ shows how to fight back.",
//         "description": "In horror movies, trauma isn't an identity or a source of paralysis. It's preparation.",
//         "url": "https://www.washingtonpost.com/opinions/2022/10/20/halloween-ends-laurie-strode-trauma/",
//         "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/MJCHZICLZ4I63AKTS3XJPMQY2I.jpg&w=1440",
//         "publishedAt": "2022-10-20T15:50:16Z",
//         "content": "Comment on this story\r\nWhile the Greatest Generation adopted the ideal that we have nothing to fear but fear itself, today we find ourselves fixated on trauma. Invoked in circumstances as varied as t… [+5087 chars]"
//     },
//     {
//         "source": {
//             "id": "entertainment-weekly",
//             "name": "Entertainment Weekly"
//         },
//         "author": "Leah Greenblatt",
//         "title": "<em>Decision to Leave</em> would be a crime to miss, <em>Stars at Noon</em> doesn't shine",
//         "description": "What's worth your time in TV and movies this weekend? EW's critics review the latest releases: <em>Till</em>, <em>Decision to Leave</em>, <em>The Good Fight</em>, and <em>Stars at Noon</em>.",
//         "url": "https://ew.com/movies/movie-reviews/reviews-decision-to-leave-till-stars-at-noon-good-fight/",
//         "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&rect=0%2C115%2C2000%2C1115&poi=%5B1140%2C506%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F10%2F13%2F2_3-tout.png",
//         "publishedAt": "2022-10-14T19:00:00Z",
//         "content": "Decision to Leave \r\nIn select theaters now\r\nNo matter his paintbox, director Park Chan-wook has a way of making even the most familiar genre stuff feel fresh. What the Seoul-born auteur once did for … [+8209 chars]"
//     },
//     {
//         "source": {
//             "id": "ign",
//             "name": "IGN"
//         },
//         "author": "Collier Jennings",
//         "title": "Best Action Movies on Netflix Right Now (September 2022) - IGN",
//         "description": "These are the best action movies on Netflix right now -- blockbusters, fight films, animated adventures and shootouts galore.",
//         "url": "https://www.ign.com/articles/best-action-movies-on-netflix-right-now",
//         "urlToImage": "https://assets-prd.ignimgs.com/2022/07/28/rrr-1659047262112.jpg?width=1280",
//         "publishedAt": "2022-09-01T18:03:14Z",
//         "content": "There is nothing like a good action movie on Netflix. The perfectly choreographed fight scenes that let you feel every punch and kick on screen; the shootouts that see bullets and bodies hitting the … [+11394 chars]"
//     },
//     {
//         "source": {
//             "id": "usa-today",
//             "name": "USA Today"
//         },
//         "author": null,
//         "title": "Daily Briefing",
//         "description": "The day's top stories, from sports to movies to politics to world events.",
//         "url": "https://profile.usatoday.com/newsletters/daily-briefing/",
//         "urlToImage": "https://profile.usatoday.com/newsletters/resources/usat/property/usatoday/newsletter-thumbs/8872UT-E-NLETTER02@2x.jpg",
//         "publishedAt": "2021-08-15T15:35:07+00:00",
//         "content": "The day's top stories, from sports to movies to politics to world events."
//     },
//     {
//         "source": {
//             "id": "techcrunch-cn",
//             "name": "TechCrunch (CN)"
//         },
//         "author": "Brian Heater",
//         "title": "盘点 2019 年消失的明星创业公司 | TechCrunch 中文版",
//         "description": "创业公司会因为各种原因而失败，但有一点不会改变：创业是极其困难的事。想要创办一家成功的公司，需要的不仅仅是热情，以及找到合适的人才（尽管很明显这两点很重要）。成功的创业者需要在许许多多细节上做到完美。\r\n\r\n粗略地回顾下今年的创业公司，可以发现并没有什么公司能带来像去年Theranos那样的轰动性故事。Theranos的故事被写成了畅销书，改编成了纪录片，相关电影也即将上映。不过某些公司，例如MoviePass，可能已经逐渐接近。\r\n\r\n通常来说，每看到一家Theranos，我们同时也会看到数十位辛勤创业者的故事…",
//         "url": "https://techcrunch.cn/2019/12/27/startups-lost-in-2019/",
//         "urlToImage": "https://files.techcrunch.cn/2019/12/gettyimages-829632570.jpg?w=1200",
//         "publishedAt": "2019-12-27T16:46:58Z",
//         "content": "Theranos Theranos MoviePass\r\n Theranos\r\n 2019 \r\nAnki2010 2019 \r\n1.82 \r\n2013 WWDC Overdrive iPhone \r\n3 Anki CozmoAnki 2018 Vector 2019 4 Anki 150 “”Cozmo \r\nChariot2014 2019 \r\n300 2017 \r\nChariot “” \r\n … [+1085 chars]"
//     }
// ]   //----->when using fetch api using the link we dont need thisn articles array as we will be getting from  api itself 

constructor(){
  super();
  console.log("hello paaji")
  this.state={
      articles:[],   //hence we are i itializing this as empty array 
      loading:false,


    }
  }


  async componentDidMount(){
      let url=`${this.props.link}&page=${1}&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
      let data=await fetch(url);
      let parseData=await data.json();
      console.log(parseData);
      this.setState({
        articles:parseData.articles,
        totalResults:parseData.totalResults,
        loading:false
    })
  }


  // first button
   previClickHandle = async ()=>{
    let url=`${this.props.link}&page=${1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    this.setState({
      Page:this.state.page=1,
        articles:parseData.articles,
        loading:false
    });
  }

  // handle 2nd page
   handle2 = async ()=>{
    let url=`${this.props.link}&page=${2}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    this.setState({
      Page:this.state.page=2,
        articles:parseData.articles,
        loading:false
    });
  }

  //handle 3
   handle3 = async ()=>{
    let url=`${this.props.link}&page=${3}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    console.log("previous clicked . . . ")
    console.log(this.state.page)
    this.setState({
      Page:this.state.page=3,
        articles:parseData.articles,
        loading:false
    });
  }





  // last button
  nextClickHandle = async ()=>{
    console.log("!previous");
    let url=`${this.props.link}&page=${4}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data=await fetch(url);
    let parseData=await data.json();
    this.setState({
        Page:this.state.page=4,
        articles:parseData.articles,
        loading:false
    });
}

  render() {
    return (
      <div className='container my-3'>
              <div className="row my-3">
                <h1 className="text-center">Top {  this.props.headline } Headlines </h1>
                {this.state.loading && <div className="container text-center my-3"><Spinner></Spinner></div>}
                
                {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-3 my-3" key={element.url}>
                      <News title={element.title?element.title.slice(0,44):"..."} description={element.description?element.description.slice(0,120):"..."} imgurl={element.urlToImage?element.urlToImage:"https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/15_09_2022_13_22_15_5594039.jpg?width=920&format=jpeg"} newsUrl={element.url}/>
                    </div>
                })}
              </div>
              
              <div className="d-flex bd-highlight">
              <button  disabled={this.state.page===1} type="button" className="btn flex-fill bd-highlight btn-success mx-1 my-3" onClick={this.previClickHandle}>First</button>
              <button  disabled={this.state.page===2} type="button" className="btn flex-fill bd-highlight btn-success mx-1 my-3" onClick={this.handle2}>2nd Page</button>
              <button  disabled={this.state.page===3} type="button" className="btn flex-fill bd-highlight btn-success mx-1 my-3" onClick={this.handle3}>3rd Page</button>
              <button  disabled={this.state.page===4}  type="button" className="btn flex-fill bd-highlight btn-success mx-1 my-3" onClick={this.nextClickHandle}>Last</button>
              </div>
      </div>
    )
  }
}
