<template>
    <div class="home1">
        <van-nav-bar title="标题" right-text="按钮" left-arrow />
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
        <van-grid :column-num="4">
            <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
            <van-card v-for="item in list" :key="item" num="2" price="2.00" desc="描述信息" title="商品标题"
                thumb="https://img01.yzcdn.cn/vant/ipad.jpeg" />
        </van-list>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o">标签</van-tabbar-item>
            <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
            <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
            <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: [],
            loading: false,
            finished: false,
            refreshing: false,
        };
    },
    methods: {
        onLoad () {
            setTimeout(() => {
                if (this.refreshing) {
                    this.list = [];
                    this.refreshing = false;
                }

                for (let i = 0; i < 10; i++) {
                    this.list.push(this.list.length + 1);
                }
                this.loading = false;

                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
        onRefresh () {
            Toast.loading({
                message: '加载中...',
                forbidClick: true,
                dur
            });
            // 清空列表数据
            this.finished = false;

            // 重新加载数据
            // 将 loading 设置为 true，表示处于加载状态
            this.loading = true;
            this.onLoad();
        },
    },
};
</script>

<style lang="scss" scoped>
.home1 {
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
        background-color: #39a9ed;
    }
}
</style>
