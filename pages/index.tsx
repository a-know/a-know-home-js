import Head from 'next/head'
import Layout from '../components/layout'
import Contacts from '../components/contacts'
import Careers from '../components/careers'
import Qualifications from '../components/qualifications'
import Activities from '../components/activities'
import { getContentsData } from '../lib/contents'

export async function getStaticProps() {
  const contactsData = getContentsData('contacts')
  const careersData = getContentsData('careers')
  const qualificationsData = getContentsData('qualifications')
  const activitiesData = getContentsData('activities')
  return {
    props: {
      contactsData,
      careersData,
      qualificationsData,
      activitiesData
    }
  }
}

export default function Home({ contactsData, careersData, qualificationsData, activitiesData }) {
  return (
    <Layout>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="a-know／いのうえ のポートフォリオページ兼ポータルページ。自己紹介も兼ねています。" />
        <meta name="author" content="a-know／いのうえ" />
        <title>a-know-home | a-know's Resume / Portfolio page</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="assets/images/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="assets/images/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="assets/images/apple-touch-icon-114x114.png" />
        <link href="https://fonts.googleapis.com/css?family=Suranna" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet" type="text/css" />
      </Head>

      <main>
        <div className="show-menu-btn">
          <img src="/img/icon_big.png" alt="my icon" className="img-shadow" />
        </div>
        <div className="wrapper">
          <section className="split-image parallax">
            <div className="split-image-footer">
              <ul className="split-list">
                <li>2008-08-24 岡山県笠岡市カブト南町の笠岡湾干拓地にて撮影</li>
              </ul>
            </div>
          </section>
          <section className="split-content">
            <section className="module">
              <div className="container-fluid container-custom">
                <div className="row">
                  <div className="col-sm-12">
                    <h1>ID : a-know 's Portfolio site</h1>
                    <p>元ソフトウェアエンジニア / スクラムマスター。現・Customer Reliability Engineer (CRE)。<br /><br />だれかの助けになるようなことに自分の経験を活かしていきたいし、『インターネットの一部となるようなものをつくること』もずっとつづけていきたい。</p>
                  </div>
                </div>
              </div>
            </section>
            <section className="module">
              <div className="container-fluid container-custom">
                <div className="row">
                  <div className="col-sm-3">
                    <h6>Contact by...</h6>
                  </div>
                  <Contacts contactsData={contactsData} />
                </div>
              </div>
            </section>
            <section className="module">
              <div className="container-fluid container-custom">
                <div className="row">
                  <div className="col-sm-3">
                    <h6>Employment and Education</h6>
                  </div>
                  <Careers careersData={careersData} />
                </div>
              </div>
            </section>
            <section className="module">
              <div className="container-fluid container-custom">
                <div className="row">
                  <div className="col-sm-3">
                    <h6>Possession Qualification</h6>
                  </div>
                  <Qualifications qualificationsData={qualificationsData} />
                </div>
              </div>
            </section>
            <section className="module">
              <div className="container-fluid container-custom">
                <div className="row">
                  <div className="col-sm-3">
                    <h6>Activities and Achievements</h6>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-12">
                        <ul className="service-list">
                          <Activities activitiesData={activitiesData} />
                          <details>
                            <summary>2017年以前</summary>
                            <li>2017/12：<a href="https://speakerdeck.com/daisukeinoue/gbdaitokai-2017" target="_blank">登壇 ＠ 合同勉強会 in 大都会岡山 -2017 Winter-</a></li>
                            <li>2017/12：<a href="https://speakerdeck.com/daisukeinoue/hatena-mackerel-cs" target="_blank">登壇 ＠ GMO HosCon #14</a></li>
                            <li>2017/10：<a href="https://speakerdeck.com/daisukeinoue/mackerel-with-cre" target="_blank">登壇 ＠ Mackerel DAY</a></li> 
                            <li>2017/08：<a href="https://www.amazon.co.jp/dp/4774192139" target="_blank">共著 ＠ Mackerel サーバ監視[実践]入門</a></li>
                            <li>2017/06：<a href="https://blog.a-know.me/entry/2017/06/06/004203" target="_blank">登壇 ＠ Customer Success Night #3</a></li>
                            <li>2016/12：<a href="https://speakerdeck.com/daisukeinoue/sabajian-shi-sabisu-mackerel-insutoresiyonraibudemo" target="_blank">登壇 ＠ 合同勉強会 in 大都会岡山 2016 Winter</a></li>
                            <li>2016/12：<a href="http://developer.hatenastaff.com/entry/2016/12/22/150000" target="_blank">LT 発表 ＠ Hatena Engineer Seminar #7</a></li>
                            <li>2016/11：<a href="https://speakerdeck.com/daisukeinoue/zi-fen-zi-shen-falsejian-shi-moke-neng-mackerelfalsesahisumetorituku" target="_blank">LT 発表 ＠ Open Source Conference Tokyo 2016/Fall</a></li>
                            <li>2016/10：<a href="https://speakerdeck.com/daisukeinoue/mackerel-falsegai-yao-karaxin-ji-neng-to-twilio-lian-xi-falsegoshao-jie" target="_blank">登壇 ＠ Twilio ビジネスセミナー Vol.31</a></li>
                            <li>2016/08：<a href="http://developer.hatenastaff.com/entry/2016/09/02/170000" target="_blank">LT 発表 ＠ Hatena Engineer Seminar #6</a></li>
                            <li>2016/06：<a href="http://www.slideshare.net/aknow3373/mackerel-standard-63046092" target="_blank">LT 発表 ＠ Mackerel User Group Meeting Vol.1</a></li>
                            <li>2015/12：<a href="https://blog.a-know.me/entry/2015/12/05/234436" target="_blank">登壇 @ 合同勉強会 IN 大都会岡山 - 2015 WINTER</a></li>
                            <li>2015/04：<a href="https://blog.a-know.me/entry/2015/04/13/191604" target="_blank">登壇 @ GCPUG イベント「AWS VS GCP」</a></li>
                            <li>2014/08：<a href="https://blog.a-know.me/entry/2014/08/23/215024" target="_blank">講演・発表 @ 株式会社クレオフーガ </a></li>
                            <li>2012/12：<a href="https://blog.a-know.me/entry/20121208/1354972898" target="_blank">ハッカソン優勝</a></li>
                            <li>2012/07：<a href="http://www.slideshare.net/aknow3373/javafx-2x3java" target="_blank">登壇 @ 第3回 岡山 Java ユーザ会 勉強会</a></li>
                            <li>2012/04：<a href="https://blog.a-know.me/entries/2012/04/22" target="_blank">登壇 @ 第13回 中国 GTUG 勉強会 </a></li>
                            <li>2011/12, etc.：自作アプリケーションの雑誌掲載 <a href="https://blog.a-know.me/entry/20111206/1323185807" target="_blank">(1)</a> <a href="https://blog.a-know.me/entry/20100221/1266761121" target="_blank">(2)</a> <a href="https://blog.a-know.me/entry/20090613/1244878995" target="_blank">(3)</a></li>
                          </details>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="module">
              <div className="container-fluid container-custom">
                <div className="row">
                  <div className="col-sm-3">
                    <h6>Hobby Development</h6>
                  </div>
                  <div className="col-sm-9">
                    <div className="row">
                      <div className="col-sm-12">
                        <ul className="service-list">
                          <li>Web Service／<a href="https://inst.moshimo.works/" target="_blank">instrodux - instax mini Link x introduction</a></li>
                          <li>Agent software／<a href="https://github.com/a-know/mackerel-remora" target="_blank">mackerel-remora</a></li>
                          <li>CLI Tool／<a href="https://github.com/a-know/pi" target="_blank">Pi</a></li>
                          <li>Web API Service／<a href="https://pixe.la" target="_blank">Pixela</a></li>
                          <li>Web Service／<a href="https://blog.a-know.me/entry/2017/12/26/234528" target="_blank">Yukizuri</a></li>
                          <li>CLI Tool／<a href="https://github.com/a-know/kabu" target="_blank">kabu</a></li>
                          <li>heroku app／<a href="https://github.com/a-know/currentvisitor2mackerel" target="_blank">currentvisitor2mackerel</a></li>
                          <li>heroku app／<a href="https://github.com/a-know/favs2blogposts" target="_blank">favs2blogposts</a></li>
                          <li>Web Service／<a href="https://grass-graph.moshimo.works/" target="_blank">Grass-Graph</a></li>
                          <li>Plugin／<a href="https://github.com/Shopify/dashing/wiki/Additional-Widgets" target="_blank">Custom Widget for dashing</a></li>
                          <li>Web Service／<a href="https://blog.a-know.me/entry/2015/06/28/204359" target="_blank">Mikanz - ミカンズ</a></li>
                          <li>Web Service／<a href="https://blog.a-know.me/entry/20120316/1331897972" target="_blank">Masterpiece</a></li>
                          <li>Desktop app／<a href="http://d.hatena.ne.jp/a-know/20990331/" target="_blank">sa-boom!! client</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="footer">
              <div className="container-fluid container-custom">
                <div className="row">
                  <div className="col-md-7">
                    <p>© 2016 a-know. All rights reserved</p>
                  </div>
                  <div className="col-md-5">
                    <ul className="social-list">
                      <li><a href="https://twitter.com/#!/a_know" target="_blank"><i className="fa fa-twitter-square"></i></a></li>
                      <li><a href="https://github.com/a-know" target="_blank"><i className="fa fa-github-alt"></i></a></li>
                      <li><a href="https://blog.a-know.me/" target="_blank"><i className="fa fa-rss-square"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </section>
        </div>
      </main>
    </Layout>
  )
}
