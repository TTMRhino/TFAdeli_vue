<template>
<div class="wrapper">
     <!-- Breadcrumb Start -->
     <div class="breadcrumb-area ptb-60 ptb-sm-30">
        <div class="container">
            <div class="breadcrumb">
                <ul>
                    <li><router-link to="/">Главная</router-link></li>
                    <li class="active"><a href="{{ route('contact')}}">Контакты</a></li>
                </ul>
            </div>
        </div>
        <!-- Container End -->
    </div>
    <!-- Breadcrumb End -->
    
    <div class="about-main-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="about-img">
                        <img class="img" src="img/banner/about.jpg" alt="about-us">
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="about-content">
                        <h3>Центральный магазин:</h3>
                        <p>Адрес: 454010, г. Челябинск, Копейское шоссе, 56. </p> 
                        <p>Емайл : zakaz@tfadeli.ru</p>
                        <p>Тел.: (351) 256-32-98, 259-39-68</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Google Map Start -->
    <div class="container">
    <br>
        <h3>На карте:</h3>
        <br>
        <div id="map"></div>
    </div>
    <br>
    <br>
    
    <div class="about-main-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-12">
                    <div class="about-img">
                        <img class="img" src="img/banner/about.jpg" alt="about-us">
                    </div>
                </div>
                <div class="col-lg-5 col-md-12">
                    <div class="about-content">
                        <h3>Магазин "Маркштад":</h3>
                        <p>Адрес: 454091, г. Челябинск, Карла Маркса, 131, окольный этаж. </p> 
                        <p>Емайл : zakaz@tfadeli.ru</p>
                        <p>Тел.: (351) 256-32-98, 259-39-68</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Google Map Start -->
    <div class="container">
    <br>
        <h3>На карте:</h3>
        <br>
        <div id="map-second" style=" width: 100%; height: 400px;"></div>
    </div>
    
    
    <!-- Google Map End -->
    <!-- Contact Email Area Start -->
    <div class="contact-email-area ptb-60">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <h3>Задать вопрос:</h3>
                    <p class="text-capitalize mb-40"></p>
                    <form id="contact-form" class="contact-form" action="mail.php" method="post">
                        <div class="address-wrapper">
                            <div class="row">    
                                <div class="col-md-12">
                                    <div class="address-fname">
                                        <input type="text" name="name" placeholder="Имя">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="address-email">
                                        <input type="email" name="email" placeholder="Email">
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="address-web">
                                        <input type="text" name="website" placeholder="Телефон">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="address-subject">
                                        <input type="text" name="subject" placeholder="Тема">
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="address-textarea">
                                        <textarea name="message" placeholder="Сообщение:"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="form-message ml-15"></p>
                        <div class="col-xs-12 footer-content mail-content">
                            <div class="send-email">
                                <input type="submit" value="Отправить" class="submit">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact Email Area End -->

    
   
    
   
    
</div>
</template>

<script>
export default {
 
}


</script>