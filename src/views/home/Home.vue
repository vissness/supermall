<template>
    <div id="home">
        <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
        <home-swiper :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends "></recommend-view>
        <feature-view></feature-view>
        <tab-control :titles="['流行', '新款', '精选']"></tab-control>

        <ul>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
            <li>wode</li>
        </ul>
    </div>
</template>

<script>
    
    import HomeSwiper from './childComps/HomeSwiper.vue'
    import RecommendView from './childComps/RecommendView'
    import FeatureView from './childComps/FeatureView.vue'

    import NavBar from 'components/navbar/NavBar.vue'
    import TabControl from 'components/content/tabControl/TabControl.vue'

    import {getHomeMultidata} from "network/home.js"


    export default {
        name: "Home",
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl
        },
        data() {
            return{
                banners: [],
                recommends: [],
                
            }
        },
        created() {
            getHomeMultidata().then(res => {
                this.banners = res.data.banner.list;
               this.recommends = res.data.recommend.list;
            })
        }
    }
</script>

<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
    .tab-control {
        position: sticky;
        top: 44px;
    }
</style>