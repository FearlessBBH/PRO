$(function () {
    $('.send').click(function () {
        let _val = $('input[name="name"]').val();
        if (_val != "") {
            $.ajax({
                url: 'aa.php',
                type: "POST",
                data: {
                    username: _val
                },
                success: function (result) {
                    if (result.success) {
                        console.log(result)
                    }
                },
                error: function (e) {
                    console.log("error");
                }
            });
        } else {
            console.log('nothing to do')
        }
    });

})