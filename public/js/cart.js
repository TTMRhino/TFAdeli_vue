(function($) {

    /*----------------------------------------------------
        22.Cart
        -----------------------------------------------------*/
    "use Strict";

    $(document).on('click', '.add-to-cart', function() {
        let id = $(this).data('id');

        console.log("id = " + id);

        $.ajax({
            url: "https://xn--80aidmo2bo.xn--p1ai/cart/add",
            data: {
                id: id,
                },
            type: 'GET',
             headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(res) {
                if (!res) alert("Ошибка!");
                showCart(res);
                showCart()
            },
            error: function(res) {
                alert("11Error!");
            }
        });

        return false;
    });



    function showCart(id) {
        console.log("showCart")
        $.ajax({
            url: 'https://xn--80aidmo2bo.xn--p1ai/cart/minirefresh',
            data: { id: id },
            type: 'GET',
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(res) {

                if (!res) alert("Error product!");

                $('#cartBox').html(res);

            },
            error: function(res) {
                console.log(res)
               // alert("88Error!");
            }
        });

    }
    
    
     function showCartInCheckout(id) {
        console.log("showCartInCheckout")
        $.ajax({
            url: 'https://xn--80aidmo2bo.xn--p1ai/cart/checkout_cart',
            data: { id: id },
            type: 'GET',
            success: function(res) {
                if (!res) alert("Error product!");
                $('#table-checkout').html(res);

            },
            error: function(res) {
               // alert("Checkout cart error!");
            }
        });
    }

    function showTable(res) {
        console.log("showTable")
        $('#table').html(res);
    }

    function refreshTableCart(id) {
        //Обновляем  таблицу-козину 
        $.ajax({
            url: 'https://xn--80aidmo2bo.xn--p1ai/cart/refresh',
            data: { id: id },
            type: 'GET',
             headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(res) {
                //if (!res) alert("Ошибка обновление таблицы!");
                //console.log('res');
                showTable(res);
                showCart()
            },
            error: function(res) {
                console.error(res);
                //alert("2Error!");
            }
        });
    }

    //счетчик колличесва в большой корзине
    $(document).on('click', '.minus, .plus', function() {
        let id = $(this).data('id'),
            qty = $(this).data('qty');

        console.log("Click!");

        $('.cart-table .overlay').fadeIn();
        $.ajax({
            url: 'https://xn--80aidmo2bo.xn--p1ai/cart/change',
            data: { id: id, qty: qty },
            type: 'GET',
             headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(res) {

                if (!res) alert("Error product!");
                showTable(res);
                showCart(id)

                //showCart(res);
                //location = '/cart';
            },
            error: function(res) {

                alert("3Error!");
            }
        });

    });




    /** удаление товара из мини корзины (и обновление вида)*/
    $(document).on('click', '.delete', function() {
        console.log('Клик по кнопке удалить');
        let id = $(this).data('id');
        $.ajax({
            url: 'https://xn--80aidmo2bo.xn--p1ai/cart/delete',
            data: { id: id },
            type: 'GET',
             headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(res) {
                if (!res) alert("Ошибка!");
                showCart(res);
                 showCartInCheckout(res)
            },
            error: function(res) {
                console.error(res)
                    //alert("4Error!");
            }
        });
        //Обновляем  таблицу-козину 
        refreshTableCart(id);

    });




})(jQuery);