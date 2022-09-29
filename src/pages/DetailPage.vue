<template>
  <div class="wrapper">
    <!-- Product Thumbnail Start -->
    <div class="main-product-thumbnail pb-60">
        <div class="container">
            <div class="row">
                <!-- Main Thumbnail Image Start -->
                <div class="col-lg-5">
                    <!-- Thumbnail Large Image start -->
                    <div class="tab-content">                        
                        <div id="thumb1" class="tab-pane active">

                            <a data-fancybox="images" :href="BASE_URL +'storage/img/products/l' + item.article  +  '.jpg'">
                                <img :src="BASE_URL +'storage/img/products/l' + item.article  +  '.jpg'" alt="product-view">
                            </a>

                        </div>
                    
                    </div>
                    <!-- Thumbnail Large Image End -->

                    <!-- Thumbnail Image End -->
                <!-- <div class="product-thumbnail">
                        <div class="thumb-menu nav">
                                <a class="active" data-toggle="tab" href="#thumb1"> <img src="img/products/1.jpg" alt="product-thumbnail"></a>
                                
                        </div>
                    </div>-->
                    <!-- Thumbnail image end -->
                </div>
                <!-- Main Thumbnail Image End -->
                <!-- Thumbnail Description Start -->
                <div class="col-lg-7">
                    <div class="thubnail-desc fix">
                        <h3 class="product-header"> {{ item.name }} </h3>
                        <div class="rating-summary fix mtb-10">
                        </div>
                        <div class="pro-price mb-10">
                            <p><span class="price"> {{ item.price }}  руб.</span> <!-- <del class="prev-price">{{ $item->price }} руб.</del> --></p>
                            <p><span>Артикул:  {{ item.article }}  </span></p>
                        </div>
                        <div class="pro-ref mb-15">
                            <p><span class="in-stock">Остаток</span><span class="sku"> {{ item.remains }} </span></p>
                        </div>
                        <div class="box-quantity">
                            
                                <!--<input class="number" id="numeric" type="number" min="1" value="1"> -->
                                <button class="btn add-cart add-to-cart"  @click="addToCart(item)">В корзину</button>
                           
                        </div>
                        <p class="ptb-20"></p>
                    </div>
                </div>
                <!-- Thumbnail Description End -->
            </div>
            <!-- Row End -->
        </div>
        <!-- Container End -->
    </div>
    <!-- Product Thumbnail End -->
    <!-- Product Thumbnail Description Start -->
    <div class="thumnail-desc pb-60">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <ul class="main-thumb-desc nav">
                        <li><a class="active" data-toggle="tab" href="#dtail">Описание:</a></li>
                    </ul>
                    <!-- Product Thumbnail Tab Content Start -->
                    <div class="tab-content thumb-content border-default">
                        <div id="dtail" class="tab-pane in active">
                            <p>  {{ item.description }}  </p>
                            <ul class="tab-list-item">
                                <li> Упакуем в коробку.</li>
                                <li> Доставка по РФ любой удобной ТК.</li>
                                <li> Самовывоз в Челябинске.</li>
                            </ul>
                        </div>
                    </div>
                    <!-- Product Thumbnail Tab Content End -->
                </div>
            </div>
            <!-- Row End -->
        </div>
        <!-- Container End -->
    </div>
    <!-- Product Thumbnail Description End -->

</div>
</template>

<script>
    import axios from 'axios'
    import {BASE_URL} from "@/main";
export default {
  data(){
    return{
        BASE_URL,
        id:this.$route.params['id'],
        item:{}
    }
  },
  created(){
    this.showItem()
  },
  methods:{
   async showItem(){
        const showItem = await axios.get(`http://tfadeli-api.local/api/v1/items/show/${this.$route.params['id']}`)
        this.item = showItem.data.data
    },
    addToCart: function(article){
                console.log(`add to cart article ${article}`);
    }
  }
}
</script>