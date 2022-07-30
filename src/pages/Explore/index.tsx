import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {
  RightOutlined
} from "@ant-design/icons"
// import api from "../../api"
import ExploreSection from "../../components/Explore/ExploreSection/ExploreSection"
import Header from "../../components/Header"
import "./style.less"

const mockData = {
  square: {
    latest: [
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      },
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      },
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      },
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      }
    ],
    potential: [
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      },
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      },
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      },
      {
        title: "唐山某路烧烤店，男子骚扰女子未果挨骂，随即动手打人，将受到哪些惩罚？出门在外如何保护好自身安全？",
        viewCount: "2222万",
        followCount: "2.4万",
        answerCount:"1.2万"
      }
    ]
  },
  post: [
    {
      img: "https://pic2.zhimg.com/100/v2-bb3d97b8881647fc96d2c5a30c928c0d_hd.png",
      title: "有机普洱茶「盐」究所",
      updateTime: "昨天 12:20",
      viewCount: "581,152",
      posts: [
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        }
      ]
    },
    {
      img: "https://pic2.zhimg.com/100/v2-bb3d97b8881647fc96d2c5a30c928c0d_hd.png",
      title: "有机普洱茶「盐」究所",
      updateTime: "昨天 12:20",
      viewCount: "581,152",
      posts: [
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        }
      ]
    },
    {
      img: "https://pic2.zhimg.com/100/v2-bb3d97b8881647fc96d2c5a30c928c0d_hd.png",
      title: "有机普洱茶「盐」究所",
      updateTime: "昨天 12:20",
      viewCount: "581,152",
      posts: [
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        }
      ]
    },
    {
      img: "https://pic2.zhimg.com/100/v2-bb3d97b8881647fc96d2c5a30c928c0d_hd.png",
      title: "有机普洱茶「盐」究所",
      updateTime: "昨天 12:20",
      viewCount: "581,152",
      posts: [
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        },
        {
          keyword: "感「知」有机",
          content: "购买普洱茶时，你是否会更看重茶叶产区和认证，为什么？"
        }
      ]
    }
  ],
  discuss: [
    {
      background: "118, 153, 168",
      img: "https://pic1.zhimg.com/50/v2-287c9961cf0a0fd3be049f4e6218416d_hd.jpg?source=b1f6dc53",
      title: "「全能」玩家 一键入局",
      sub: "科技革命历经三百年，机器造物从粗犷专业到精致全能，如今再次面临智能化跃进变迁。「全能」玩家，一键入局，一起开始探秘科技全能时代。",
      guests: [
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        }
      ],
      participantCount: "8",
      followCount: "16",
      discuss: [
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        }
      ]
    },
    {
      background: "118, 153, 168",
      img: "https://pic1.zhimg.com/50/v2-287c9961cf0a0fd3be049f4e6218416d_hd.jpg?source=b1f6dc53",
      title: "「全能」玩家 一键入局",
      sub: "科技革命历经三百年，机器造物从粗犷专业到精致全能，如今再次面临智能化跃进变迁。「全能」玩家，一键入局，一起开始探秘科技全能时代。",
      guests: [
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        }
      ],
      participantCount: "8",
      followCount: "16",
      discuss: [
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        }
      ]
    },
    {
      background: "118, 153, 168",
      img: "https://pic1.zhimg.com/50/v2-287c9961cf0a0fd3be049f4e6218416d_hd.jpg?source=b1f6dc53",
      title: "「全能」玩家 一键入局",
      sub: "科技革命历经三百年，机器造物从粗犷专业到精致全能，如今再次面临智能化跃进变迁。「全能」玩家，一键入局，一起开始探秘科技全能时代。",
      guests: [
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        }
      ],
      participantCount: "8",
      followCount: "16",
      discuss: [
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        }
      ]
    },
    {
      background: "118, 153, 168",
      img: "https://pic1.zhimg.com/50/v2-287c9961cf0a0fd3be049f4e6218416d_hd.jpg?source=b1f6dc53",
      title: "「全能」玩家 一键入局",
      sub: "科技革命历经三百年，机器造物从粗犷专业到精致全能，如今再次面临智能化跃进变迁。「全能」玩家，一键入局，一起开始探秘科技全能时代。",
      guests: [
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        },
        {
          ava: "/static/media/2.png",
          url: "/"
        }
      ],
      participantCount: "8",
      followCount: "16",
      discuss: [
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        },
        {
          title: "机器在走向全能的同时是在禁锢还是解放人的创造力?",
          answerCount: "1"
        }
      ]
    }
  ],
  collect: [
    {
      title: "个人修养",
      author: {
        name: "1983",
        ava: "/static/media/2.png",
        followerCount:"2000"
      },
      items: [
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        },
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        }
      ],
      collectedCount: "4000"
    },
    {
      title: "个人修养",
      author: {
        name: "1983",
        ava: "/static/media/2.png",
        followerCount:"2000"
      },
      items: [
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        },
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        }
      ],
      collectedCount: "4000"
    },
    {
      title: "个人修养",
      author: {
        name: "1983",
        ava: "/static/media/2.png",
        followerCount:"2000"
      },
      items: [
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        },
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        }
      ],
      collectedCount: "4000"
    },
    {
      title: "个人修养",
      author: {
        name: "1983",
        ava: "/static/media/2.png",
        followerCount:"2000"
      },
      items: [
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        },
        {
          title: "在《还珠格格》里，永琪和小燕子的三观差距这么大，为什么还能在一起？",
          sub: "于心：因为小燕子和永琪是在呵护爱情，从不曾试图考验爱情，至少赵薇版的《还珠格格》从未曾有过。 爱情之所以弥足珍贵，是因为爱情太易碎了，经受不起丝毫的风吹雨打，且一旦碎了就再也没有办法缝合，因为人生是没有奇迹的，只有赤裸裸的现实，爱情太需要两个人心心相惜地呵护，还是容不下任何考验地呵护，悉心呵护。 就如同我们经常说不要考验人性，只因为人心太易变，在不同的环境，面对不同的人事物，人的心境都是莫测的，别人以为…",
          answerCount: "",
          agreeCount: "134",
          commentCount: "25"
        }
      ],
      collectedCount: "4000"
    }
  ],
  column: [
    {
      ava: "/static/media/2.png",
      name: "抽屉电影",
      followerCount: "3468",
      postsCount: "1776",
      desc: "缘叶二次元，分享原创动漫评论。同名公众号欢迎关注。"
    },
    {
      ava: "/static/media/2.png",
      name: "抽屉电影",
      followerCount: "3468",
      postsCount: "1776",
      desc: "缘叶二次元，分享原创动漫评论。同名公众号欢迎关注。"
    },
    {
      ava: "/static/media/2.png",
      name: "抽屉电影",
      followerCount: "3468",
      postsCount: "1776",
      desc: "缘叶二次元，分享原创动漫评论。同名公众号欢迎关注。"
    },
    {
      ava: "/static/media/2.png",
      name: "抽屉电影",
      followerCount: "3468",
      postsCount: "1776",
      desc: "缘叶二次元，分享原创动漫评论。同名公众号欢迎关注。"
    }
  ]
}

const Explore = () => {
  const [exploreData,setExploreData] = useState(mockData)
  useEffect(() => {
    setExploreData({
      ...mockData
    })
  },[])
  return (
    <div>
      <Header />
      <div className="explore-content">
        {/* 好问题广场 */}
        <ExploreSection header="好问题广场" footer="查看更多好问题">
          <div className="explore-question-square">
            <div className="question-square-item explore-card">
              <div className="question-square-item-header">近期热点</div>
              <div className="question-square-item-body">
                {
                  exploreData.square.latest.map((item, key) => {
                    return <div className="square-item-hot" key={key}>
                            <div className="hot-title">
                              <span className={`hot-title-icon hot-title-icon-${key + 1}`}>{key + 1}</span>
                              <Link className="hot-title-link" to={"/"} >{item.title}</Link>
                            </div>
                            <div className="hot-meta">{item.viewCount}{` 浏览 · `}{item.followCount}{` 关注 · `}{item.answerCount}{` 回答`}</div>
                          </div>
                  })
                }
              </div>
              <div className="question-square-item-footer">
                <span className="question-square-item-footer-text">查看全部热点问题</span>
                <span className="question-square-item-footer-icon"><RightOutlined /></span>
              </div>
            </div>
            <div className="question-square-item explore-card">
              <div className="question-square-item-header">潜力好问题</div>
              <div className="question-square-item-body">
                {
                  exploreData.square.potential.map((item, key) => {
                    return <div className="square-item-hot" key={key}>
                            <div className="hot-title">
                              <span className={`hot-title-icon hot-title-icon-${key + 1}`}>{key + 1}</span>
                              <Link className="hot-title-link" to={"/"} >{item.title}</Link>
                            </div>
                            <div className="hot-meta">{item.viewCount}{` 浏览 · `}{item.followCount}{` 关注 · `}{item.answerCount}{` 回答`}</div>
                          </div>
                  })
                }
              </div>
              <div className="question-square-item-footer">
                <span className="question-square-item-footer-text">查看全部潜力问题</span>
                <span className="question-square-item-footer-icon"><RightOutlined /></span>
              </div>
            </div>
          </div>
        </ExploreSection>
        {/* 最新专题 */}
        <ExploreSection header="最新专题" footer="查看更多专题">
          <div className="explore-latest-post">
            {
              exploreData.post.map((item,key) => {
                return <div className="post-item explore-card" key={key}>
                        <div className="post-item-img">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="post-item-header">
                          <div className="post-header-left">
                            <div className="post-title">{item.title}</div>
                            <div className="post-meta">{item.updateTime} 更新{item.viewCount} 浏览</div>
                          </div>
                          <div className="post-header-right">
                            <div className="post-btn">关注专题</div>
                          </div>
                        </div>
                        <div className="post-item-body">
                          {
                            item.posts.map((post, key) => {
                              return <div className="post-body-part" key={key}>
                                        <span className="post-part-keyword">{post.keyword}</span>
                                        <span className="post-part-content">{post.content}</span>
                                      </div>
                            })
                          }
                        </div>
                      </div>
              })
            }
          </div>
        </ExploreSection>
        {/* 圆桌讨论 */}
        <ExploreSection header="圆桌讨论" footer="查看更多圆桌">
          <div className="explore-discuss">
            {
              exploreData.discuss.map((item,key) => {
                return <div className="discuss-item explore-card" key={key}>
                        <div className="discuss-header">
                          <div className="discuss-background">
                            <div className="discuss-background-left" style={{ backgroundColor:`rgb(${item.background})` }}></div>
                            <div className="discuss-background-right">
                              <div className="discuss-background-img" style={{ backgroundImage:`url(${item.img})`,backgroundPosition:"center center" }}></div>
                              <div className="discuss-background-img" style={{ background: `linear-gradient(to right, rgb(${item.background}) 0%, rgba(${item.background}, 0) 100%)` }}></div>
                              <div className="discuss-background-img" style={{ background: `linear-gradient(to right, rgba(${item.background}, 0.5) 0%, rgba(${item.background}, 0) 100%)` }}></div>
                            </div>
                          </div>
                          <div className="discuss-header-content">
                            <div className="discuss-content-left">
                              <div className="discuss-title">{item.title}</div>
                              <div className="discuss-sub">{item.sub}</div>
                              <div className="discuss-meta">
                                {
                                  item.guests.map((guest, key) => {
                                    return <div className="discuss-people" key={key}>
                                              <img src={guest.ava} alt="" />
                                            </div>
                                  })
                                }
                                <div className="discuss-people-meta">8 位嘉宾参与 | 16 人关注</div>
                              </div>
                            </div>
                            <div className="discuss-content-right">
                              <div className="discuss-btn">关注圆桌</div>
                            </div>
                          </div>
                        </div>
                        <div className="discuss-body">
                          {
                            item.discuss.map((discuss, key) => {
                              return <div className="discuss-part" key={key}>
                                        <div className="discuss-part-title">{discuss.title}</div>
                                        <div className="discuss-part-meta">{discuss.answerCount} 个回答</div>
                                      </div>
                            })
                          }
                        </div>
                      </div>
              })
            }
          </div>
        </ExploreSection>
        {/* 热门收藏夹 */}
        <ExploreSection header="热门收藏夹" footer="查看更多收藏夹">
          <div className="explore-hot-collection">
            {
              exploreData.collect.map((item, key) => {
                return <div className="hot-collect-item explore-card" key={key}>
                        <div className="hot-collect-header">
                          <div className="collect-header-title">
                            <div className="collect-title-text">{item.title}</div>
                            <div className="collect-title-btn">关注收藏夹</div>
                          </div>
                          <div className="collect-header-meta">
                            <div className="collect-author">
                              <img className="collect-author-ava" src={item.author.ava} alt="" />
                              <span className="collect-author-name">{item.author.name}</span>
                              <span className="collect-author-create">创建</span>
                            </div>
                            <span className="collect-header-meta-follow">{item.author.followerCount}人关注</span>
                          </div>
                        </div>
                        <div className="hot-collect-body">
                          {
                            item.items.map((collect, key) => {
                              return <div className="collect-body-item" key={key}>
                                        <div className="collect-item-title">{collect.title}</div>
                                        <div className="collect-item-sub">{collect.sub}</div>
                                        <div className="collect-item-meta">{`回答 `}{collect.agreeCount}{` 赞同 · `}{collect.commentCount}{` 评论`}</div>
                                      </div>
                            })
                          }
                        </div>
                        <div className="hot-collect-footer">
                          <span className="collect-footer-content">已收藏{item.collectedCount}条内容</span>
                          <span className="collect-footer-icon"><RightOutlined /></span>
                        </div>
                      </div>
              })
            }
          </div>
        </ExploreSection>
        {/* 专栏 */}
        <ExploreSection header="专栏" footer="查看更多专栏">
          <div className="explore-column">
            {
              exploreData.column.map((item, key) => {
                return <div className="column-item explore-card" key={key}>
                  <div className="column-icon">
                    <img src={item.ava} alt="" />
                  </div>
                  <div className="column-name">{item.name}</div>
                  <div className="column-meta">{item.followerCount}{` 关注 · `}{item.postsCount}{` 文章`}</div>
                  <div className="column-desc">{item.desc}</div>
                  <div className="column-btn">进入专栏</div>
                </div>
              })
            }
          </div>
        </ExploreSection>
        <div className="explore-footer">刘看山·知乎指南·知乎协议·应用·工作·联系我们 © 2022 知乎</div>
      </div>
    </div>
  )
}

export default Explore
