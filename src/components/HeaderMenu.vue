<template>
    <header>
            <!-- Header Top Start -->
            <div class="header-top">
                <div class="container">
                    <div class="row">
                        <!-- Header Top left Start -->
                        <div class="col-lg-4 col-md-12 d-center">
                            <div class="header-top-left">
                                <img src="/img/icon/call.png" alt="">Позвонить : (351) 256-32-98, 259-39-68
                            </div>
                        </div>
                        <!-- Header Top left End -->
                        <!-- Search Box Start -->
                        <div class="col-lg-4 col-md-6 ml-auto mr-auto">
                            <div class="search-box-view">
                                <form action="#" method="GET">

                                    <input type="text" class="email" placeholder="Поиск" name="search">

                                    <button type="submit" class="submit"></button>

                                </form>
                            </div>
                        </div>
                        <!-- Search Box End -->
                        <!-- Header Top Right Start -->
                        <div class="col-lg-4 col-md-12">
                            <div class="header-top-right">
                                <ul class="header-list-menu f-right">
                                </ul>
                                <!-- Header-list-menu End -->
                            </div>
                        </div>
                        <!-- Header Top Right End -->
                    </div>
                </div>
                <!-- Container End -->
            </div>
            <!-- Header Top End -->
            <!-- Header Bottom Start -->
            <div class="header-bottom header-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-3 col-lg-2 col-sm-5 col-5">
                            <div class="logo">
                                <a href="#"><img src="/img/logo/logo.png" alt="logo-image"></a>
                            </div>
                        </div>
                        <!-- Primary Vertical-Menu End -->
                        <!-- Search Box Start -->
                        <div class="col-xl-6 col-lg-7 d-none d-lg-block">
                            <div class="middle-menu pull-right">
                                <nav>
                                    <ul class="middle-menu-list">
                                        <li><router-link to="/">Главная</router-link></li>
                                        <li><a href="#">Каталог</a></li>
                                        <li><a href="#">Корзина</a></li>
                                        <li><router-link to="/about">О нас</router-link></li>
                                        <li><router-link to="/contacts">Контакты</router-link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Search Box End -->
                        <!-- Cartt Box Start -->
                        <div class="col-lg-3 col-sm-7 col-7">
                            <div class="cart-box text-right">
                                <ul id="cartBox">
                                    <li>
                                        <a href="#">
                                            <i class="fa fa-shopping-basket"></i><span class="cart-counter">

                                              NULL
                                        
                                    </span></a>
                                        
                                        <ul 
                                        class="ht-dropdown main-cart-box"
                                        v-if="cartVisible"
                                        >

                                            @foreach($session_cart['cart'] as $item)
                                            <li>
                                                <!-- Cart Box Start -->
                                                <div class="single-cart-box">
                                                    <div class="cart-img">
                                                        <a href="#"><img src="img/products/l#.jpg" alt="cart-image"></a>
                                                    </div>
                                                    <div class="cart-content">
                                                        <h6><a href="#">name</a></h6>
                                                        <span> $item['qty']  ×  $item['price'] руб.</span>
                                                    </div>
                                                    <a class="del-icone delete" data-id="{{ $item['id'] }} " href="#">
                                                        <i class="fa fa-window-close-o"></i>
                                                    </a>
                                                </div>
                                                <!-- Cart Box End -->

                                                <!-- Cart Footer Inner End -->
                                            </li>
                                            @endforeach

                                        </ul>
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <!-- Cartt Box End -->
                        <div class="col-sm-12 d-lg-none">
                            <div class="mobile-menu">
                                <nav>
                                    <ul>
                                        <li><a href="#">Домашняя</a></li>
                                        <li><a href="#">Корзина</a></li>
                                        <li><a href="#">Каталог</a></li>
                                        <li><a href="#">О Нас</a></li>
                                        <li><a href="#">Контакты</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <!-- Mobile Menu  End -->
                    </div>
                    <!-- Row End -->
                </div>
                <!-- Container End -->
            </div>
            <!-- Header Bottom End -->
        </header>
</template>

<script>
export default {
 data(){
    return{
        cartVisible:true 
    }
 }
}
</script>