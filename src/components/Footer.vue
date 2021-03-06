<template>
    <div class="footer">
        <ul>
            <li>
                <img src="@/assets/imgs/icon-xingxing.png" alt="">
                <span>首页</span>
            </li>
            <li>
                <img src="@/assets/imgs/icon-xingxing.png" alt="">
                <span>推荐</span>
            </li>
            <li>
                <img src="@/assets/imgs/icon-xingxing.png" alt="">
                <span>购物车</span>
            </li>
            <li>
                <img src="@/assets/imgs/icon-xingxing.png" alt="">
                <span>我的</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";

.footer {
    width: 100%;
    height: px2rem(55);
    border-top: px2rem(1) solid #ccc;
    position: fixed;
    bottom: 0;
    color: rgb(192, 192, 192);
    ul {
        list-style: none;
        width: 100%;
        height: 100%;
        display: flex;
        li {
            width: 25%;
            height: 100%;
            background: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            img {
                width: px2rem(22);
                height: px2rem(22);
            }
        }
    }
}
</style>
