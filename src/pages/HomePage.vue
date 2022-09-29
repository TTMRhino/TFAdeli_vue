<template>
  <div class="wrapper homepage">

 <!-- Slider Area Start -->
 <div class="slider-area pb-60">
        <div class="slider-wrapper theme-default  nivo2">
            <!-- Slider Background  Image Start-->
            <div id="slider" class="nivoSlider">
                <a href="shop.html"><img src="img/slider/3.jpg" data-thumb="img/slider/3.jpg" alt="" title="#slider-1-caption1" /></a>
                <a href="shop.html"><img src="img/slider/4.jpg" data-thumb="img/slider/4.jpg" alt="" title="#slider-1-caption2" /></a>
            </div>
            <!-- Slider Background  Image Start-->
            <div id="slider-1-caption1" class="nivo-html-caption nivo-caption">
                <div class="text-content-wrapper">
                    <div class="container">
                        <div class="text-content">
                            <h4 class="title2 wow bounceInLeft mb-16" data-wow-duration="2s" data-wow-delay="0s">ТОВАРЫ</h4>
                            <h1 class="title1 wow bounceInRight mb-16" data-wow-duration="2s" data-wow-delay="1s">ДЛЯ ДОМА</h1>
                            <div class="banner-readmore wow bounceInUp mt-35" data-wow-duration="2s" data-wow-delay="2s">
                                <a class="button slider-btn" href="shop.html">Каталог</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slider-1-caption2" class="nivo-html-caption nivo-caption">
                <div class="text-content-wrapper">
                    <div class="container">
                        <div class="text-content slide-2">
                            <h4 class="title2 wow bounceInLeft mb-16" data-wow-duration="1s" data-wow-delay="1s">ТОВАРЫ</h4>
                            <h1 class="title1 wow flipInX  mb-16" data-wow-duration="1s" data-wow-delay="2s">ДЛЯ САДА, ДАЧИ, ОГОРОДА</h1>
                            <div class="banner-readmore wow bounceInUp mt-35" data-wow-duration="1s" data-wow-delay="2s">
                                <a class="button slider-btn" href="shop.html">Каталог</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Slider Area End -->


<!-- Banner Start -->
<div class="upper-banner banner pb-60">
    <div class="container">
        <div class="row">
            <!-- Single Banner Start -->
            <div class="col-sm-4">
                    <div class="single-banner zoom">
                        <a href="/shop"><img src="img/banner/1.png" alt="slider-banner"></a>
                    </div>
                </div>
               <!-- Single Banner End -->
                <!-- Single Banner Start -->
               <div class="col-sm-4">
                    <div class="single-banner zoom">
                        <a href="/shop"><img src="img/banner/2.png" alt="slider-banner"></a>
                    </div>
                </div>
               <!-- Single Banner End -->
                <!-- Single Banner Start -->
               <div class="col-sm-4">
                    <div class="single-banner zoom">
                        <a href="/shop"><img src="img/banner/1.png" alt="slider-banner"></a>
                    </div>
                </div>
           
            <!-- Single Banner End -->
        </div>
        <!-- Row End -->
    </div>
    <!-- Container End -->
</div>
<!-- Banner End -->
<!-- Best Products Start -->
<div class="best-seller-product pb-30">
    <div class="container">
        <div class="group-title">
            <h2>Случайные товары</h2>
        </div>
        <!-- Best Product Activation Start -->
        <div class="hand-tool-active owl-carousel">
            
           
                    <!-- Single Product Start -->
                    <div class="single-product"
                        v-for="item in randItems"
                        :key="item.id"
                    >
                   
                        <!-- Product Image Start -->
                        <div class="pro-img">
                            <a href="#">
                                <img class="primary-img" :src="BASE_URL + '/storage/img/products/l' + item.article  + '.jpg'" alt="single-product">                                    
                            </a>
                        </div>
                        <!-- Product Image End -->
                        <!-- Product Content Start -->
                        <div class="pro-content">
                            <div class="product-rating">
                            </div>
                            <h4><a href="#">{{ item.name }}</a></h4>
                            <p><span class="price"> {{ item.price }} руб</span></p>
                            <div class="pro-actions">
                                <div class="actions-secondary">
                                    <a class="add-cart" href="#" ata-id="<?= {{ item.id }} ?>" data-toggle="tooltip" title="Add to Cart">В корзину</a>
                                </div>
                            </div>
                        </div>
                        <!-- Product Content End -->
                    </div>
                    <!-- Single Product End -->
               
                
                  
                 <!--   <div class="single-product">
                       
                        <div class="pro-img">
                            <a href="#">
                                <img class="primary-img" src="storage/img/products/8.jpg" alt="single-product">                                    
                            </a>
                        </div>
                      
                        <div class="pro-content">
                            <div class="product-rating">
                            </div>
                            <h4><a href="#">Товар 1</a></h4>
                            <p><span class="price">0 руб</span></p>
                            <div class="pro-actions">
                                <div class="actions-secondary">
                                    <a class="add-cart" href="#" data-toggle="tooltip" title="Add to Cart">В корзину</a>
                                </div>
                            </div>
                        </div>
                       
                    </div>-->
                 
               
           
        </div>
        <!-- Best Product Activation End -->
    </div>
    <!-- Container End -->
</div>
<!-- Best Product End -->
<!-- Banner Start -->
<div class="upper-banner banner pb-60">
    <div class="container">
        <div class="row">

           
              
                <!-- Single Banner Start -->
                <div class="col-sm-6"
                v-for="item in randItems.data"
                        :key="item.id"
                >
                    <div class="single-banner zoom">                       
                        <router-link :to="{ name:'', params: { id: item.id} }">
                           
                            <img :src="BASE_URL + 'storage/img/products/l' + item.article  + '.jpg'" alt="slider-banner">
                        </router-link>
                    </div>
                </div>
                <!-- Single Banner End --> 
                
               
           

        </div>
        <!-- Row End -->
    </div>
    <!-- Container End -->
</div>
<!-- Banner End -->

 <!-- Company Policy Start -->
 <div class="company-policy pb-60 pb-sm-25">
    <div class="container">
        <div class="row">
            <!-- Single Policy Start -->
            <div class="col-lg-3 col-sm-6">
                <div class="single-policy">
                    <div class="icone-img">
                        <img src="img/icon/1.png" alt="">
                    </div>
                    <div class="policy-desc">
                        <h3>Доставка</h3>
                        <p>В любую точку РФ</p>
                    </div>
                </div>
            </div>
            <!-- Single Policy End -->
            <!-- Single Policy Start -->
            <div class="col-lg-3 col-sm-6">
                <div class="single-policy">
                    <div class="icone-img">
                        <img src="img/icon/2.png" alt="">
                    </div>
                    <div class="policy-desc">
                        <h3>Прием заказов</h3>
                        <p>24 / 7 / 365</p>
                    </div>
                </div>
            </div>
            <!-- Single Policy End -->
            <!-- Single Policy Start -->
            <div class="col-lg-3 col-sm-6">
                <div class="single-policy">
                    <div class="icone-img">
                        <img src="img/icon/3.png" alt="">
                    </div>
                    <div class="policy-desc">
                        <h3>Возврат товаров</h3>
                        <p>согласно закону</p>
                    </div>
                </div>
            </div>
            <!-- Single Policy End -->
            <!-- Single Policy Start -->
            <div class="col-lg-3 col-sm-6">
                <div class="single-policy">
                    <div class="icone-img">
                        <img src="img/icon/4.png" alt="">
                    </div>
                      <div class="policy-desc">
                        <h3>Персональные Скидки</h3>
                        <p>Карта покупателя</p>
                    </div>
                </div>
            </div>
            <!-- Single Policy End -->
        </div>
    </div>
</div>
<!-- Company Policy End -->   


</div>
</template>

<script>
import axios from 'axios'
import {URL} from "@/main";
import {BASE_URL} from "@/main";
export default {
 data(){
    return{
        randItems: this.asyncgetranItems(),
        BASE_URL
    }
 },
 methods:{
    async asyncgetranItems(){
       
        try {
         this.randItems = await axios.get(URL + 'items/rand/randItems')
         
    }catch(e) {
        console.error(e)
    }
   
    }
 },
 computed:{
    /*items() {
      return this.$store.getters.items;
    },*/
 },
 created(){
    //обращаемся в store для вытягиваия items через API
    /*this.$store.dispatch("asyncGetItems").then(()=>{
        return console.log(this.$store.getters.items )
    }
    );*/

    
    
 },
 mounted() {
  
 },

}
</script>


<style scoped>

</style>
