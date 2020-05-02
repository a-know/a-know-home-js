import Head from 'next/head'
import Layout from '../components/layout'
import Contacts from '../components/contacts'
import Careers from '../components/careers'
import Qualifications from '../components/qualifications'
import Activities from '../components/activities'
import OldActivities from '../components/oldActivities'
import { getContentsData } from '../lib/contents'

export async function getStaticProps() {
  const contactsData = getContentsData('contacts')
  const careersData = getContentsData('careers')
  const qualificationsData = getContentsData('qualifications')
  const activitiesData = getContentsData('activities')
  const oldActivitiesData = getContentsData('oldActivities')
  return {
    props: {
      contactsData,
      careersData,
      qualificationsData,
      activitiesData,
      oldActivitiesData
    }
  }
}

export default function Home({ contactsData, careersData, qualificationsData, activitiesData, oldActivitiesData }) {
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
                          <OldActivities oldActivitiesData={oldActivitiesData} />
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
