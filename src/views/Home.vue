<template>
    <div class="home">
        <!-- hello -->

        <!-- 头 -->
        <Header></Header>
        <!-- /头 -->

        <!-- 轮播图 -->
        <div class="lbt">
            <!-- <img src="@/assets/imgss/swiper1.jpg" /> -->
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide><img src="@/assets/imgs/swiper1.jpg" /> </swiper-slide>
                <swiper-slide style="background:white;">Slide 2</swiper-slide>
                <swiper-slide><img src="@/assets/imgs/swiper1.jpg" /> </swiper-slide>
                <swiper-slide style="background:white;">Slide 4</swiper-slide>
                <swiper-slide><img src="@/assets/imgs/swiper1.jpg" /> </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
        <!-- /轮播图 -->

        <!-- 宫格 -->
        <div class='navs'>
            <div class='nav'>
                <img src="@/assets/imgs/icon-qiandao.png" />
                <span>签到</span>
            </div>
            <div class='nav'>
                <img src="@/assets/imgs/icon-fujin.png" />
                <span>附近</span>
            </div>
            <div class='nav'>
                <img src="@/assets/imgs/icon-zhanhui.png" />
                <span>旅展</span>
            </div>
            <div class='nav'>
                <img src="@/assets/imgs/icon-fuli.png" />
                <span>福利</span>
            </div>
            <div class='nav'>
                <img src="@/assets/imgs/icon-muma.png" />
                <span>玩乐</span>
            </div>
            <div class='nav'>
                <img src="@/assets/imgs/icon-xingxing.png" />
                <span>周边</span>
            </div>
            <div class='nav'>
                <img src="@/assets/imgs/icon-tiyu.png" />
                <span>体育</span>
            </div>
            <div class='nav'>
                <img src="@/assets/imgs/icon-qinzi.png" />
                <span>亲子</span>
            </div>
        </div>
        <!-- /宫格 -->

        <!-- 热卖 -->
        <div class="hotGoods">
            <div class="tit">热卖商品</div>
            <div class="wrapper">
                <!-- ul -->
                <div class="main">
                    <!-- li -->
                    <div class="goods" v-for="(item,index) in hotGoodsDatas" v-bind:key="index">
                        <div class="l">
                            <img src="@/assets/imgs/zhutu.jpg" />
                        </div>
                        <div class="r">
                            <div class="name">【{{index}}】{{item.name}}</div>
                            <div class="address">{{item.address}}</div>
                            <div class="price">{{item.price}}</div>
                        </div>
                        <img class="cart" src="@/assets/imgs/car.png" />
                    </div>
                </div>
            </div>
        </div>
        <!-- /热卖 -->
        <Footer></Footer>
    </div>
</template>

<script>
// 导入组件
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// 导入滑动模块
import BScroll from 'better-scroll';

// 导出数据
export default {
    // 激活组件
    components: {
        Header,
        Footer,
    },

    data () {
        return {
            hotGoodsDatas: [
                { name: '习近平：推进国家治理体系和能力现代化', price: 1.11, address: '测试' },
                { name: '习近平对这个问题连说“重话”', price: 1.11, address: '测试' },
                { name: '国家主席习近平任免驻外大使', price: 1.11, address: '测试' },
                { name: '重启磋商四大看点 确保主题教育取得实效', price: 1.11, address: '测试' },
                { name: '这些文物背后的故事令人落泪', price: 1.11, address: '测试' },
                { name: '张錩：活态传承，表现当代的中国', price: 1.11, address: '测试' },
                { name: '北上广深平均工资大PK：北京领跑，广深首超10万元', price: 1.11, address: '测试' },
                { name: '农业农村部：国家正积极推进非洲猪瘟疫苗研发', price: 1.11, address: '测试' },
            ],
            swiperOptions: {
                pagination: {
                    el: '.swiper-pagination'
                },
                // Some Swiper option/callback...
            }
        }
    },
    computed: {
        swiper () {
            return this.$refs.mySwiper.$swiper
        }
    },
    mounted () {
        console.log('Current Swiper instance object', this.swiper)
        this.swiper.slideTo(3, 1000, false)

        this.$nextTick(() => {

            // 留心：盒子里面必须只能有一个元素
            let wrapper = document.querySelector('.wrapper')
            let scroll = new BScroll(wrapper, {
                pullUpLoad: {
                    threshold: 50
                }
            })
            // 监控
            scroll.on('pullingUp', () => {
                console.log('触发上拉刷新啦~~')
                console.log('加载中...')
                // 搞loading  （可以是文字可以是图片）

                // 发送异步请求 （注：通过setTimeout模仿）
                setTimeout(() => {
                    console.log('请求完毕')
                    // 1页面显示数据
                    console.log(this.hotGoodsDatas.length)
                    this.hotGoodsDatas = [...this.hotGoodsDatas, ...this.hotGoodsDatas]

                    // 3.切记切记切记：操作完成之后，一定要说一下上拉完毕
                    scroll.finishPullUp()
                }, 3000)
            })
        })
    }
}
</script>


<style lang="scss" scoped>
@import "@/assets/css/common.scss";

.home {
    width: 100%;
    height: 100%;
    background: white;

    .lbt {
        width: 100%;
        height: px2rem(150);
        overflow: hidden;

        .swiper-container,
        .swiper-slide {
            height: 100%;
        }
        img {
            width: 100%;
            height: 100%;
        }
    }

    .navs {
        width: 100%;
        height: px2rem(174);
        display: flex;
        flex-wrap: wrap;
        .nav {
            width: 25%;
            height: px2rem(87);
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span {
                margin-top: px2rem(10);
            }
            img {
                width: px2rem(40);
                height: px2rem(40);
            }
        }
    }

    .hotGoods {
        width: 100%;
        min-height: px2rem(100);
        // background: blue;
        .tit {
            padding-left: px2rem(10);
            border: solid px2rem(1) #ccc;
            background: #eee;
        }

        .wrapper {
            width: 100%;
            height: px2rem(288);
            overflow: hidden;
        }
        .main {
            width: 100%;
            .goods {
                display: flex;
                padding: px2rem(10) px2rem(10);
                // border: solid px2rem(1) #ccc;
                position: relative;

                .cart {
                    width: px2rem(25);
                    height: px2rem(25);
                    position: absolute;
                    right: px2rem(10);
                    bottom: px2rem(10);
                }

                .l {
                    width: px2rem(80);
                    height: px2rem(80);
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
                .r {
                    flex: 1;
                    background: #fff;
                }
            }
        }
    }
}
</style>   