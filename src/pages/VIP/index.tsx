import { Carousel } from "antd"
import React, { useEffect, useState } from "react"
import { LeftOutlined,RightOutlined,CustomerServiceOutlined } from "@ant-design/icons"

import Header from "../../components/Header"
import "./style.less"
import VIPRankItem from "../../components/VIP/VIPRankItem/VIPRankItem"

const mockData = {
  carousel: [
    {
      src:"/static/media/1.b4b91e14.jpg"
    },
    {
      src:"/static/media/1.b4b91e14.jpg"
    }
  ],
  rank: {
    hot: {
      rankList: [
        {
          title: "高能量青年养成记：10个心理工具送给开学的你",
          sub: "你的痛苦，有「药」可医。",
          img: "https://pic1.zhimg.com/50/v2-a9956110ec1d4e3cb950588e2c50f3d8.webp",
          author: {
            name: "熊七夕",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark:"盐选专栏"
        },
        {
          title: "高考冲刺指南：科学备考，高效提分",
          sub: "针对性强、拿起就能用的备考指南。",
          img: "https://pic1.zhimg.com/50/v2-a8407a37f101dfafd37957a58e3fef59.webp",
          author: {
            name: "启明",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark:"盐选专栏"
        }
      ],
      superStar: [
        {
          name: "杨黎光",
          ava:"https://pic1.zhimg.com/50/v2-ca57c10dd622816d976547340921b7ef.webp",
          writings: [
            {
              title: "杨黎光纪实文学：亚洲女首富龚如心的金钱厄运",
              sub: "",
              img: "https://pica.zhimg.com/50/v2-16c6fe414e279b4b53679e347abe3e72.webp",
              author: {
                name: "杨黎光",
                ava:"/static/media/2.png"
              },
              vip: true,
              cornerMark:"盐选专栏"
            }
          ]
        }
      ],
      recommend: [
        {
          title: "写作变现基础课：怎样搭建文章结构？",
          sub: "什么是文章的结构呢？就好像盖房子之前，一定要先有一份建筑师的设计图，而不能是说我先盖，至于盖成什么样不管，是方的还是圆的，盖到哪算哪。写文章也是一样，不能提起笔来匆匆忙忙地就开始写，想到哪儿写到哪，字数凑够了就赶紧结束，一篇文章就画上句号了。这样是很难写好文章的。在写文章之前，一定要先构思下文章结构，也就是要先有一个写作大纲，根据写作大纲来写，才能事半功倍。就是我们在下笔之前，一定要先把写作素材整",
          img: "https://pic1.zhimg.com/50/v2-0f68a0a090f5867de88c5e4e72917267.webp",
          author: {
            name: "",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark: "盐选专栏",
          meta:"21.9k 热度 · 共 3290 字"
        }
      ]
    },
    tech: {
      rankList: [
        {
          title: "重新理解财富：完成 12 次认知升级",
          sub: "共 27 节",
          img: "https://pic1.zhimg.com/50/v2-93efa6862da729b94806953e2535d0e8.webp",
          author: {
            name: "谢春林",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark:"课程"
        },
        {
          title: "高考冲刺指南：科学备考，高效提分",
          sub: "针对性强、拿起就能用的备考指南。",
          img: "https://pic1.zhimg.com/50/v2-a8407a37f101dfafd37957a58e3fef59.webp",
          author: {
            name: "启明",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark:"盐选专栏"
        }
      ],
      superStar: [
        {
          name: "杨黎光",
          ava:"https://pic1.zhimg.com/50/v2-ca57c10dd622816d976547340921b7ef.webp",
          writings: [
            {
              title: "杨黎光纪实文学：亚洲女首富龚如心的金钱厄运",
              sub: "",
              img: "https://pica.zhimg.com/50/v2-16c6fe414e279b4b53679e347abe3e72.webp",
              author: {
                name: "杨黎光",
                ava:"/static/media/2.png"
              },
              vip: true,
              cornerMark:"盐选专栏"
            }
          ]
        }
      ],
      recommend: [
        {
          title: "写作变现基础课：怎样搭建文章结构？",
          sub: "什么是文章的结构呢？就好像盖房子之前，一定要先有一份建筑师的设计图，而不能是说我先盖，至于盖成什么样不管，是方的还是圆的，盖到哪算哪。写文章也是一样，不能提起笔来匆匆忙忙地就开始写，想到哪儿写到哪，字数凑够了就赶紧结束，一篇文章就画上句号了。这样是很难写好文章的。在写文章之前，一定要先构思下文章结构，也就是要先有一个写作大纲，根据写作大纲来写，才能事半功倍。就是我们在下笔之前，一定要先把写作素材整",
          img: "https://pic1.zhimg.com/50/v2-0f68a0a090f5867de88c5e4e72917267.webp",
          author: {
            name: "",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark: "盐选专栏",
          meta:"21.9k 热度 · 共 3290 字"
        }
      ]
    },
    story: {
      rankList: [
        {
          title: "高能量青年养成记：10个心理工具送给开学的你",
          sub: "你的痛苦，有「药」可医。",
          img: "https://pic1.zhimg.com/50/v2-a9956110ec1d4e3cb950588e2c50f3d8.webp",
          author: {
            name: "熊七夕",
            ava:"/static/media/2.png"
          },
          vip: false,
          cornerMark:"盐选专栏"
        },
        {
          title: "高考冲刺指南：科学备考，高效提分",
          sub: "针对性强、拿起就能用的备考指南。",
          img: "https://pic1.zhimg.com/50/v2-a8407a37f101dfafd37957a58e3fef59.webp",
          author: {
            name: "启明",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark:"盐选专栏"
        }
      ],
      superStar: [
        {
          name: "杨黎光",
          ava:"https://pic1.zhimg.com/50/v2-ca57c10dd622816d976547340921b7ef.webp",
          writings: [
            {
              title: "杨黎光纪实文学：亚洲女首富龚如心的金钱厄运",
              sub: "",
              img: "https://pica.zhimg.com/50/v2-16c6fe414e279b4b53679e347abe3e72.webp",
              author: {
                name: "杨黎光",
                ava:"/static/media/2.png"
              },
              vip: true,
              cornerMark:"盐选专栏"
            }
          ]
        }
      ],
      recommend: [
        {
          title: "写作变现基础课：怎样搭建文章结构？",
          sub: "什么是文章的结构呢？就好像盖房子之前，一定要先有一份建筑师的设计图，而不能是说我先盖，至于盖成什么样不管，是方的还是圆的，盖到哪算哪。写文章也是一样，不能提起笔来匆匆忙忙地就开始写，想到哪儿写到哪，字数凑够了就赶紧结束，一篇文章就画上句号了。这样是很难写好文章的。在写文章之前，一定要先构思下文章结构，也就是要先有一个写作大纲，根据写作大纲来写，才能事半功倍。就是我们在下笔之前，一定要先把写作素材整",
          img: "https://pic1.zhimg.com/50/v2-0f68a0a090f5867de88c5e4e72917267.webp",
          author: {
            name: "",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark: "盐选专栏",
          meta:"21.9k 热度 · 共 3290 字"
        }
      ]
    },
    live: {
      rankList: [
        {
          title: "高能量青年养成记：10个心理工具送给开学的你",
          sub: "你的痛苦，有「药」可医。",
          img: "https://pic1.zhimg.com/50/v2-a9956110ec1d4e3cb950588e2c50f3d8.webp",
          author: {
            name: "熊七夕",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark:"盐选专栏"
        },
        {
          title: "高考冲刺指南：科学备考，高效提分",
          sub: "针对性强、拿起就能用的备考指南。",
          img: "https://pic1.zhimg.com/50/v2-a8407a37f101dfafd37957a58e3fef59.webp",
          author: {
            name: "启明",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark:"盐选专栏"
        }
      ],
      superStar: [
        {
          name: "杨黎光",
          ava:"https://pic1.zhimg.com/50/v2-ca57c10dd622816d976547340921b7ef.webp",
          writings: [
            {
              title: "杨黎光纪实文学：亚洲女首富龚如心的金钱厄运",
              sub: "",
              img: "https://pica.zhimg.com/50/v2-16c6fe414e279b4b53679e347abe3e72.webp",
              author: {
                name: "杨黎光",
                ava:"/static/media/2.png"
              },
              vip: true,
              cornerMark:"盐选专栏"
            }
          ]
        }
      ],
      recommend: [
        {
          title: "写作变现基础课：怎样搭建文章结构？",
          sub: "什么是文章的结构呢？就好像盖房子之前，一定要先有一份建筑师的设计图，而不能是说我先盖，至于盖成什么样不管，是方的还是圆的，盖到哪算哪。写文章也是一样，不能提起笔来匆匆忙忙地就开始写，想到哪儿写到哪，字数凑够了就赶紧结束，一篇文章就画上句号了。这样是很难写好文章的。在写文章之前，一定要先构思下文章结构，也就是要先有一个写作大纲，根据写作大纲来写，才能事半功倍。就是我们在下笔之前，一定要先把写作素材整",
          img: "https://pic1.zhimg.com/50/v2-0f68a0a090f5867de88c5e4e72917267.webp",
          author: {
            name: "",
            ava:"/static/media/2.png"
          },
          vip: true,
          cornerMark: "盐选专栏",
          meta:"21.9k 热度 · 共 3290 字"
        }
      ]
    }
  },
  books: [
    {
      title: "写作变现基础课：怎样搭建文章结构？",
      sub: "什么是文章的结构呢？就好像盖房子之前，一定要先有一份建筑师的设计图，而不能是说我先盖，至于盖成什么样不管，是方的还是圆的，盖到哪算哪。写文章也是一样，不能提起笔来匆匆忙忙地就开始写，想到哪儿写到哪，字数凑够了就赶紧结束，一篇文章就画上句号了。这样是很难写好文章的。在写文章之前，一定要先构思下文章结构，也就是要先有一个写作大纲，根据写作大纲来写，才能事半功倍。就是我们在下笔之前，一定要先把写作素材整",
      img: "https://pic1.zhimg.com/50/v2-0f68a0a090f5867de88c5e4e72917267.webp",
      author: {
        name: "",
        ava:"/static/media/2.png"
      },
      vip: true,
      cornerMark: "盐选专栏",
      meta: "21.9k 热度 · 共 3290 字",
      progress: "0%",
      update: "11"
    }
  ]
}

type vipType = typeof mockData

type vipRankType = keyof typeof mockData.rank

const VIP = () => {
  const [type,setType] = useState<vipRankType>("hot")
  const [vipData, setVipData] = useState<vipType>(mockData)
  const [vipRankData, setVipRankData] = useState<any>({
    rankList: [],
    superStar: [],
    recommend: []
  })
  useEffect(() => {
    setVipData(mockData)
    setVipRankData({
      ...mockData.rank[type]
    })
  },[type])
  return (
    <div>
      <Header />
      <div className="vip-content">
        <div className="vip-content-header">
          <Carousel
            autoplay
            className="vip-carousel"
            arrows={true}
            prevArrow={<LeftOutlined />}
            nextArrow={<RightOutlined />}
          >
            {
              vipData?.carousel.map((item, key) => {
                return <div className="vip-carousel-item" key={key}>
                <img src={item.src} alt="" />
              </div>
              })
            }
          </Carousel>
          <div className="vip-subscribe-container">
            <div className="vip-subscribe">
              <div className="subscribe-header">
                <img src="/static/media/2.png" alt="" className="subscribe-ava" />
              </div>
              <div className="subscribe-body">
                <div className="subscribe-username">{"liminyi"}</div>
                <div className="subscribe-discount-info">新会员首月仅9元<RightOutlined /></div>
                <div className="subscribe-btn">立即开通</div>
              </div>
              <div className="subscribe-footer">
                <div className="subscribe-title">
                  <span className="subscribe-title-line"></span>
                  <span className="subscribe-title-dot"></span>
                  <span className="subscribe-title-content">盐选会员尊享权益</span>
                  <span className="subscribe-title-dot"></span>
                  <span className="subscribe-title-line"></span>
                </div>
                <div className="subscribe-content">
                  <div className="subscribe-content-item">
                    <div className="subscribe-content-item-icon">
                      <img src="/static/media/2.png" alt="" />
                    </div>
                    <div className="subscribe-content-item-content">
                      <div className="subscribe-content-item-title">内容特权</div>
                      <div className="subscribe-content-item-sub">盐选专栏、电子书<br/>等价值百万内容</div>
                    </div>
                  </div>
                  <div className="subscribe-content-item">
                    <div className="subscribe-content-item-icon">
                      <img src="/static/media/2.png" alt="" />
                    </div>
                    <div className="subscribe-content-item-content">
                      <div className="subscribe-content-item-title">功能特权</div>
                      <div className="subscribe-content-item-sub">卡片贴纸、评论表情<br/>等超多专属特权</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vip-nav">
          <div className="vip-nav-left">
            <div className="vip-nav-left-item">
              <div className="vip-nav-left-title">盐选专栏</div>
              <div className="vip-nav-left-translate">VIP COLUMN</div>
            </div>
            <div className="vip-nav-left-item">
              <div className="vip-nav-left-title">读书会</div>
              <div className="vip-nav-left-translate">BOOK CLUB</div>
            </div>
            <div className="vip-nav-left-item">
              <div className="vip-nav-left-title">Live 讲座</div>
              <div className="vip-nav-left-translate">LIVE LECTURE</div>
            </div>
            <div className="vip-nav-left-item">
              <div className="vip-nav-left-title">杂志</div>
              <div className="vip-nav-left-translate">MAGAZINE</div>
            </div>
          </div>
          <div className="vip-nav-right">
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">科学</div>
            <div className="vip-nav-right-item">更多…</div>
          </div>
        </div>
        <div className="vip-strip"></div>
        <div className="vip-content-body">
          <div className="vip-body-rank">
            <div className="vip-body-header">
              <div className="vip-body-header-left">
                <div className="vip-body-header-title">VIP 榜单</div>
                <div className="vip-body-header-nav">
                  <div className="nav-tab" onMouseEnter={() => setType("hot")}>热度榜</div>
                  <div className="nav-tab nav-tab-hover" onMouseEnter={() => setType("tech")}>技能榜</div>
                  <div className="nav-tab" onMouseEnter={() => setType("story")}>故事榜</div>
                  <div className="nav-tab" onMouseEnter={() => setType("live")}>Live 榜</div>
                </div>
              </div>
              <div className="vip-body-header-right">
                <div className="vip-body-header-link">查看全部<RightOutlined /></div>
              </div>
            </div>
            <div className="vip-body-main">
              <div className="vip-first-item">
                <div className="vip-first-item-img">
                  <VIPRankItem src={vipRankData?.rankList[0]?.img} >
                    <CustomerServiceOutlined />
                    <span>{vipRankData.rankList[0]?.cornerMark}</span>
                  </VIPRankItem>
                </div>
                <div className="first-item-main">
                  <div className="first-item-main-title">{vipRankData.rankList[0]?.title}</div>
                  <div className="first-item-main-sub">{vipRankData.rankList[0]?.sub}</div>
                  <div className="first-item-main-author">
                    <img src={vipRankData.rankList[0]?.author.ava} alt="" />
                    <span>作者：{vipRankData.rankList[0]?.author.name}</span>
                  </div>
                </div>
                <div className="first-item-order">01</div>
                <div className="first-item-nav">
                  <div className="first-item-nav-item first-item-nav-disable"><LeftOutlined /></div>
                  <div className="first-item-nav-item first-item-nav-hover"><RightOutlined /></div>
                </div>
              </div>
              <div className="vip-item-swiper">
                {
                  vipRankData.rankList.map((item: { img: string | undefined; vip: boolean | undefined; cornerMark: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; sub: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; author: { ava: string | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined } },key: number) => {
                    return <div className="vip-swiper-item" key={key}>
                              <div className="vip-swiper-item-header">
                                <div className="vip-swiper-item-img">
                                  <VIPRankItem src={item.img} vip={item.vip} >
                                    <span>{item.cornerMark}</span>
                                  </VIPRankItem>
                                </div>
                                <div className="vip-swiper-item-main"></div>
                                <div className="vip-swiper-item-order">0{key + 2}</div>
                              </div>
                              <div className="vip-swiper-item-body">
                                <div className="vip-swiper-item-title">{item.title}</div>
                                <div className="vip-swiper-item-sub">{item.sub}</div>
                              </div>
                              <div className="vip-swiper-item-footer">
                                <img src={item.author.ava} alt="" />
                                <span>作者：{item.author.name}</span>
                              </div>
                            </div>
                          })
                }
              </div>
              <div className="vip-famous-people">
                <div className="vip-famous-people-header">
                  <div className="vip-body-header-title">大咖驾到</div>
                </div>
                <div className="vip-famous-people-body">
                  <div className="vip-famous-people-items">
                    {
                      vipRankData.superStar.map((star: { ava: string | undefined; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined },key: React.Key | null | undefined) => {
                        return <div className="vip-famous-people-item" key={key}>
                                  <div className="vip-star-ava">
                                    <img src={star.ava} alt="" />
                                  </div>
                                  <div className="vip-star-name">{star.name}</div>
                                </div>
                      })
                    }
                  </div>
                  <div className="vip-famous-people-flag">
                    <span></span>
                  </div>
                  <div className="vip-famous-people-content">
                    {
                      vipRankData.superStar[0]?.writings.map((writing: { img: string | undefined; vip: boolean | undefined; cornerMark: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined },key: React.Key | null | undefined) => {
                        return <div className="vip-famous-people-content-item" key={key}>
                                  <div className="vip-famous-people-content-item-img">
                                    <VIPRankItem src={writing.img} vip={writing.vip} >
                                      <span>{writing.cornerMark}</span>
                                    </VIPRankItem>
                                  </div>
                                  <div className="vip-famous-people-content-item-title">
                                    {writing.title}
                                  </div>
                                </div>
                      })
                    }
                  </div>
                </div>
              </div>
              <div className="vip-all-list">
                <div className="vip-all-list-header">
                  <div className="vip-all-list-title">大家都在看</div>
                </div>
                <div className="vip-all-list-body">
                  {
                    vipRankData.recommend.map((item: { title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; img: string | undefined; vip: boolean | undefined; cornerMark: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; sub: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; meta: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined },key: React.Key | null | undefined) => {
                      return <div className="vip-all-list-body-item" key={key}>
                              <div className="vip-list-item-header">{item.title}</div>
                              <div className="vip-list-item-body">
                                <div className="vip-list-item-img">
                                  <VIPRankItem src={item.img} vip={item.vip} >
                                    <span style={{ fontSize:"14px" }}>{item.cornerMark}</span>
                                  </VIPRankItem>
                                </div>
                                <div className="vip-list-item-right">
                                  <div className="vip-list-item-content">{item.sub}</div>
                                  <div className="vip-list-item-meta">{item.meta}</div>
                                </div>
                              </div>
                            </div>
                    })
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="vip-body-mybook">
            <div className="vip-body-header">
              <div className="vip-body-header-left">
                <div className="vip-body-header-title">我的书架</div>
              </div>
              <div className="vip-body-header-right">
                <div className="vip-body-header-link">前往书架<RightOutlined /></div>
              </div>
            </div>
            <div className="vip-mybook-body">
              {
                vipData.books.map((book,key) => {
                  return <div className="vip-mybook-book" key={key}>
                          <div className="vip-mybook-book-img">
                            <VIPRankItem src={book.img} >
                              <span style={{ fontSize:"12px" }}>{book.cornerMark}</span>
                            </VIPRankItem>
                          </div>
                          <div className="vip-mybook-book-right">
                            <div className="vip-mybook-book-title">{book.title}</div>
                            <div className="vip-mybook-book-progress">已读 {book.progress}</div>
                            <div className="vip-mybook-book-update">更新到第{book.update}节</div>
                          </div>
                        </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VIP
